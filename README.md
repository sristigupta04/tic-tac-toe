# 🎮 Tic Tac Toe AI

A modern Tic Tac Toe game built with **React + Vite** featuring multiple AI difficulty levels, match history, undo functionality, local storage persistence, winner animations, and a responsive dark-themed UI.

---

## 🚀 Live Demo

https://game-tictactoe-ai.netlify.app/
---

## 📸 Screenshots

### Home Screen

<img width="1906" height="960" alt="image" src="https://github.com/user-attachments/assets/71a13b74-9cf0-44c5-91f6-5cb6e4a75664" />

### Winner Modal

<img width="1912" height="943" alt="image" src="https://github.com/user-attachments/assets/60f6946a-b643-4139-91cb-7139caa69294" />

### AI Gameplay

![AI](screenshots/ai.png)

---

## ✨ Features

* 🎯 Player vs Player Mode
* 🤖 Easy AI (Random Moves)
* 🧠 Medium AI (Winning & Blocking Logic)
* 🔥 Hard AI (Minimax Algorithm)
* 🏆 Winner Detection
* 🎉 Confetti Celebration
* 📊 Scoreboard Tracking
* 📝 Match History
* ↩️ Undo Move
* 💾 Local Storage Support
* 🌙 Modern Dark Theme
* 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS3

### Libraries

* react-confetti
* @uidotdev/usehooks

---

## 🧠 AI Algorithms

### Easy Mode

Random move generation.

### Medium Mode

* Attempts winning move
* Blocks opponent winning move
* Falls back to random move

### Hard Mode

Uses the **Minimax Algorithm** to always play the optimal move.

---

## 📂 Project Structure

src/

├── components/

│ ├── Cell.jsx

│ ├── GameBoard.jsx

│ ├── ModeSelector.jsx

│ ├── Navbar.jsx

│ └── WinnerModal.jsx

│

├── hooks/

│ └── useGameLogic.js

│

├── utils/

│ ├── aiMove.js

│ ├── minimax.js

│ └── checkWinner.js

│

├── pages/

│ └── Home.jsx

│

└── styles/

└── app.css

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/sristigupta04/tic-tac-toe.git
```

Move into the project:

```bash
cd tic-tac-toe
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📈 Future Improvements

* Multiplayer using Socket.IO
* Online Matchmaking
* Player Profiles
* Leaderboards
* Sound Effects
* Theme Customization
* Tournament Mode

---

## ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.

⭐ Star this repository to support the project.
