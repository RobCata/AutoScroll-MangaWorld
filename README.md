# 📜 AutoScroll MangaWorld (Tampermonkey Script)

This **Tampermonkey script** adds a **Start/Stop button** for **smooth automatic scrolling** on **MangaWorld**.  
You can also **adjust the scrolling speed** with an input field and **toggle scrolling by pressing the "0" key** on your keyboard.  

---

## 🚀 **How to Install**
### **1️⃣ Install Tampermonkey**
If you haven't already installed **Tampermonkey**, get it for your browser.

---

### **2️⃣ Install the Script**
Method 1️⃣ (**Automatic**):  
- **Drag and drop** the `autoscroll-mangaworld.user.js` file into your browser window and follow the instructions.  

Method 2️⃣ (**Manual**):  
1. Open **Tampermonkey** → **Dashboard**  
2. Click **"Create a new script"**  
3. **Copy and paste** the content of `autoscroll-mangaworld.user.js`  
4. **Save (Ctrl + S)** and enable the script  

---

## 🎯 **How to Use**
1. **Go to MangaWorld** and open a chapter  
2. **Set the scrolling speed** (default is `2.5`, adjustable from `0.1` to `20`)  
3. **Click "Start"** (or press `0` on your keyboard)  
4. **To stop scrolling, click "Stop" again** (or press `0` on your keyboard)  
5. **You can adjust the speed in real-time without stopping scrolling**  

---

## 🛠 **Customizations**
- **Maximum speed**: Change `speedInput.max = '20';` in the script  
- **Different shortcut key**: Replace `event.key === "0"` with another key (e.g., `"s"` for the **S key**)  
- **Button position**: Modify `container.style.top = '50%';`  

---

## ⚠️ **Notes**
- This script works **only on MangaWorld** (URL pattern: `https://www.mangaworld.*/*/read/*/*`).  
- If scrolling doesn’t start, try **restarting your browser** or **reloading the page with Ctrl + Shift + R**.  
- If you experience issues, open the developer console (`F12 → Console`) and check for errors.  

---

## 📧 **Contact**
If you have any questions or want to report an issue, contact me.  










# 📜 AutoScroll MangaWorld (Tampermonkey Script)

Questo script Tampermonkey aggiunge un pulsante **Start/Stop** per attivare uno **scrolling automatico fluido** su **MangaWorld**.  
Puoi anche regolare la velocità di scorrimento con un **input number** e attivare/disattivare lo scrolling premendo il tasto **"0"** sulla tastiera.  

---

## 🚀 **Come Installarlo**
### **1️⃣ Installa Tampermonkey**
Se non hai già **Tampermonkey**, installalo nel tuo browser.

---

### **2️⃣ Installa lo Script**
Metodo 1️⃣ (**Automatica**):  
- **Trascina il file** `autoscroll-mangaworld.user.js` in una finestra del browser e segui le istruzioni.  

Metodo 2️⃣ (**Manuale**):  
1. Apri **Tampermonkey** → **Dashboard**  
2. Clicca su **"Crea un nuovo script"**  
3. **Copia e incolla** il contenuto di `autoscroll-mangaworld.user.js`  
4. **Salva (Ctrl + S)** e attiva lo script  

---

## 🎯 **Come Usarlo**
1. **Vai su MangaWorld** e apri un capitolo  
2. **Inserisci la velocità di scorrimento** (predefinito `2.5`, regolabile da `0.1` a `20`)  
3. **Premi "Start"** (oppure premi `0` sulla tastiera)  
4. **Per fermare lo scrolling, premi di nuovo "Stop"** (oppure `0`)  
5. **Regola la velocità in tempo reale senza interrompere lo scrolling**  

---

## 🛠 **Personalizzazioni**
- **Velocità massima**: modifica `speedInput.max = '20';` nello script  
- **Shortcut diverso**: cambia `event.key === "0"` con un altro tasto (es. `"s"` per il tasto S)  
- **Posizione del pulsante**: cambia `container.style.top = '50%';`  

---

## ⚠️ **Note**
- Questo script funziona **solo su MangaWorld** (URL: `https://www.mangaworld.*/*/read/*/*`).  
- Se lo scrolling non parte, prova a **riavviare il browser** o a **ricaricare la pagina con Ctrl + Shift + R**.  
- Se hai problemi, apri la console (`F12 → Console`) e verifica se ci sono errori.  

---


## 📧 **Contatti**
Se hai domande o vuoi segnalare un problema, contattami.  
