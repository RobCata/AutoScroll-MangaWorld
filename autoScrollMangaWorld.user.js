// ==UserScript==
// @name         AutoScroll MangaWorld (Toggle + Keyboard Shortcut)
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Aggiunge un pulsante unico per Start/Stop dello scrolling + shortcut con il tasto "0"
// @author       Roberto
// @include      https://www.mangaworld.*/*/read/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("🚀 AutoScroll MangaWorld (Shortcut 0) avviato...");

    let scrollSpeed = 2.5; // Velocità predefinita
    let isScrolling = false;
    let lastTime = 0;
    let accumulatedScroll = 0;
    let toggleBtn = null; // Riferimento al pulsante

    function smoothScroll(timestamp) {
        if (!isScrolling) return;

        if (lastTime === 0) lastTime = timestamp;
        let deltaTime = (timestamp - lastTime) / 16; // Normalizza (16ms ≈ 60 FPS)
        lastTime = timestamp;

        accumulatedScroll += scrollSpeed * deltaTime;
        let pixelsToScroll = Math.floor(accumulatedScroll);
        accumulatedScroll -= pixelsToScroll;

        if (pixelsToScroll > 0) {
            window.scrollBy(0, pixelsToScroll);
        }

        requestAnimationFrame(smoothScroll);
    }

    function toggleScrolling() {
        isScrolling = !isScrolling;
        toggleBtn.innerText = isScrolling ? 'Stop' : 'Start';
        toggleBtn.style.background = isScrolling ? '#dc3545' : '#28a745';

        if (isScrolling) {
            lastTime = 0;
            requestAnimationFrame(smoothScroll);
        }
    }

    function updateSpeed(event) {
        let newSpeed = parseFloat(event.target.value);
        if (!isNaN(newSpeed) && newSpeed > 0) {
            scrollSpeed = newSpeed;
        } else {
            event.target.value = scrollSpeed; // Reset se input non valido
        }
    }

    function addControls() {
        if (document.querySelector('.mw-autoscroll-container')) return;

        console.log("✅ Aggiungo i controlli per lo scrolling...");

        const container = document.createElement('div');
        container.className = 'mw-autoscroll-container';
        container.style.position = 'fixed';
        container.style.top = '50%';
        container.style.right = '20px';
        container.style.zIndex = '9999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.gap = '10px';
        container.style.transform = 'translateY(-50%)';
        container.style.background = 'rgba(0,0,0,0.7)';
        container.style.padding = '10px';
        container.style.borderRadius = '10px';
        container.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.3)';

        // Input per la velocità
        const speedInput = document.createElement('input');
        speedInput.type = 'number';
        speedInput.value = scrollSpeed;
        speedInput.min = '0.1';
        speedInput.max = '20';
        speedInput.step = '0.1';
        speedInput.style.width = '60px';
        speedInput.style.padding = '5px';
        speedInput.style.border = 'none';
        speedInput.style.borderRadius = '5px';
        speedInput.style.textAlign = 'center';
        speedInput.oninput = updateSpeed;

        // Label per l'input
        const speedLabel = document.createElement('label');
        speedLabel.innerText = 'Velocità:';
        speedLabel.style.color = 'white';
        speedLabel.style.fontSize = '14px';

        // Pulsante unico Start/Stop
        toggleBtn = document.createElement('button');
        toggleBtn.innerText = 'Start';
        toggleBtn.className = 'mw-autoscroll-toggle';
        toggleBtn.style.padding = '10px 15px';
        toggleBtn.style.background = '#28a745';
        toggleBtn.style.color = 'white';
        toggleBtn.style.border = 'none';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.borderRadius = '5px';
        toggleBtn.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.3)';
        toggleBtn.onclick = toggleScrolling;

        container.appendChild(speedLabel);
        container.appendChild(speedInput);
        container.appendChild(toggleBtn);
        document.body.appendChild(container);
    }

    // Aggiunge la scorciatoia da tastiera (Tasto "0")
    document.addEventListener('keydown', (event) => {
        if (event.key === '0' && toggleBtn) {
            toggleScrolling();
        }
    });

    // Attende il caricamento della pagina
    window.addEventListener('load', () => {
        console.log("📜 Pagina caricata, aggiungo i controlli...");
        addControls();
    });

})();
