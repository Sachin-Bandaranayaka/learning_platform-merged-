# 📚 Learning Hub — Inclusive Learning Platform for Partially Sighted Students

An accessible learning platform built as a research project, designed to help **partially sighted students** learn more effectively. The platform combines AI-powered tutoring, voice-based learning, smart glove configuration, and object recognition into one unified application.

---

## 🌟 What Does This Project Do?

This project has **4 main modules** (features):

| Module | What It Does |
|--------|-------------|
| **🤖 SciBot (AI Tutor)** | A chatbot that answers Grade 7 Science questions using AI. You type a question, and it finds the answer from textbooks and past papers. |
| **🎙️ Voice Learning** | Voice-based learning activities with emotion detection and adaptive difficulty. It listens to how you're doing and adjusts the learning level. |
| **🧤 Smart Glove** | Settings page for a haptic feedback glove that helps with Braille learning through vibration patterns. |
| **📷 Object Recognition** | Uses an ESP32-CAM (a small camera device) to recognize shapes and objects in real-time. |

---

## 🗂️ Project Structure (What's in Each Folder?)

```
merged-project/
│
├── backend/                  ← The server (Python) - handles all the "brain work"
│   ├── app.py                ← Main file that starts the server
│   ├── requirements.txt      ← List of Python packages needed
│   ├── .env                  ← Settings/configuration (port, debug mode, etc.)
│   │
│   ├── scibot/               ← AI Tutor module
│   │   ├── engine.py         ← The main code that processes questions & finds answers
│   │   ├── generate_graphs.py← Creates charts/graphs from research data
│   │   ├── data/             ← Raw textbooks & question banks (PDFs, CSVs)
│   │   ├── model_data/       ← Pre-built search indexes (so answers are found fast)
│   │   └── models/           ← Trained machine learning model file
│   │
│   ├── voice_module/         ← Voice Learning backend (emotion detection, adaptive learning)
│   └── voice_activities/     ← Voice activity HTML pages (served inside the app)
│
├── frontend/                 ← The website (React) - what you see on screen
│   ├── src/
│   │   ├── App.jsx           ← Main app with navigation & routing
│   │   ├── pages/            ← One page per module (HomePage, SciBotPage, etc.)
│   │   ├── components/       ← Reusable UI pieces
│   │   └── index.css         ← All the styling
│   ├── package.json          ← List of JavaScript packages needed
│   └── vite.config.js        ← Build tool configuration
│
├── hardware/                 ← Code for physical devices
│   └── esp32-cam/            ← Arduino code for the ESP32-CAM shape detection
│
└── .gitignore                ← Tells Git which files to ignore
```

---

## 🛠️ How to Set Up & Run the Project

### What You Need First (Prerequisites)

Before starting, make sure you have these installed on your computer:

| Software | Version | How to Check | Download Link |
|----------|---------|-------------|---------------|
| **Python** | 3.10 or higher | Open terminal → type `python3 --version` | [python.org/downloads](https://www.python.org/downloads/) |
| **Node.js** | 18 or higher | Open terminal → type `node --version` | [nodejs.org](https://nodejs.org/) |
| **Git** | Any recent version | Open terminal → type `git --version` | [git-scm.com](https://git-scm.com/) |

> **💡 What is a terminal?**
> - On **Mac**: Open the app called "Terminal" (search for it in Spotlight with `Cmd + Space`)
> - On **Windows**: Open "Command Prompt" or "PowerShell" (search in the Start menu)

---

### Step 1️⃣ — Download the Project

Open your terminal and run:

```bash
git clone <your-repository-url>
cd merged-project
```

> Replace `<your-repository-url>` with the actual GitHub link for this project.

---

### Step 2️⃣ — Set Up the Backend (Server)

The backend is the "behind-the-scenes" part that does the heavy lifting (AI, data processing, etc.).

**Navigate to the backend folder:**
```bash
cd backend
```

**Create a virtual environment** (this keeps the project's packages separate from your other projects):
```bash
# On Mac / Linux:
python3 -m venv venv
source venv/bin/activate

# On Windows:
python -m venv venv
venv\Scripts\activate
```

> ✅ You'll know it worked if you see `(venv)` at the beginning of your terminal line.

**Install the required packages:**
```bash
pip install -r requirements.txt
```

> ⏳ This may take a few minutes, especially the first time. Some packages like `torch` are large.

**Start the backend server:**
```bash
python app.py
```

> ✅ If everything works, you'll see a message like:
> ```
> ✅ SciBot module loaded
> ✅ Voice module loaded
> 🚀 Unified Learning Hub backend created successfully
>  * Running on http://0.0.0.0:5001
> ```
>
> **Keep this terminal window open!** The server needs to keep running.

---

### Step 3️⃣ — Set Up the Frontend (Website)

Open a **new terminal window** (don't close the backend one!).

**Navigate to the frontend folder:**
```bash
cd merged-project/frontend
```

**Install the required packages:**
```bash
npm install
```

**Start the frontend:**
```bash
npm run dev
```

> ✅ You'll see something like:
> ```
>   VITE v7.x.x  ready
>   ➜  Local:   http://localhost:5173/
> ```

**Open your browser** and go to: **http://localhost:5173**

🎉 **You should now see the Learning Hub homepage!**

---

## 📖 Using the Application

Once both the backend and frontend are running, here's how to use each module:

### 🤖 AI Tutor (SciBot)
1. Click **"AI Tutor"** in the top navigation bar
2. Type your Grade 7 Science question in the text box
3. Press Enter or click Send
4. The AI will search through textbooks and give you an answer
5. You can also view research graphs and charts in the side panel

### 🎙️ Voice Learning
1. Click **"Voice Learning"** in the top navigation bar
2. The voice activities will load in the page
3. Follow the on-screen instructions for interactive voice-based learning

### 🧤 Smart Glove
1. Click **"Smart Glove"** in the top navigation bar
2. Configure haptic feedback patterns and vibration settings
3. These settings are designed to work with the physical Braille learning glove

### 📷 Object Recognition
1. This feature requires an **ESP32-CAM** device connected to your network
2. Access it from the Home page
3. It streams live video and can detect shapes in real-time

---

## ⚙️ Configuration

The backend configuration is in `backend/.env`:

```
FLASK_APP=app.py       # Main application file
FLASK_ENV=development  # Environment mode
SECRET_KEY=...         # Secret key for the app
DEBUG=true             # Shows detailed errors (turn off in production)
PORT=5001              # Port the server runs on
```

The frontend connects to the backend at `http://localhost:5001` (configured in `frontend/vite.config.js`).

---

## 🔧 Troubleshooting (Common Problems & Solutions)

### "Command not found" errors
- Make sure Python and Node.js are properly installed (check the prerequisites table above)
- On Mac, try using `python3` instead of `python`

### Backend won't start
- Make sure your virtual environment is activated (you should see `(venv)` in your terminal)
- Try reinstalling packages: `pip install -r requirements.txt`

### Frontend shows errors or blank page
- Make sure the **backend is running first** (the frontend needs it)
- Try deleting `node_modules` and reinstalling:
  ```bash
  rm -rf node_modules
  npm install
  ```

### "Port already in use" error
- Another program is using port 5001 or 5173
- Either close that program, or change the port in `backend/.env`

### SciBot says "module not available"
- Some large AI packages (like `torch`) may not have installed correctly
- Try: `pip install torch transformers`

---

## 👥 Team Members

| Student ID | Module |
|-----------|--------|
| IT22557124 | SciBot — AI Science Tutor |
| IT22255938 | Voice Learning Module |
| IT22563514 | Smart Glove Haptic System |
| IT22591166 | Learning Hub Platform Shell |

---

## 📝 Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite 7, TailwindCSS, React Router |
| **Backend** | Python, Flask, Flask-CORS |
| **AI/ML** | scikit-learn, PyTorch, Transformers (TinyLlama), FAISS |
| **Hardware** | ESP32-CAM (Arduino / C++) |

---

## 📄 License

This project is developed as part of a university research project.
