# 🎮 Tic Tac Toe AI

A modern Tic Tac Toe game built with React featuring multiple AI difficulty levels, score tracking, winner highlighting, and a responsive UI.

---

## 🚀 Live Demo

🔗 https://YOUR-NETLIFY-LINK.netlify.app

---

## 📸 Screenshots

### Home Screen

![Home](./screenshots/home.png)

### AI Mode

![AI Mode](./screenshots/ai-mode.png)

### Winner Screen

![Winner](./screenshots/winner.png)

---

## ✨ Features

### 🎯 Game Modes
- Player vs Player
- Easy AI (Random Moves)
- Medium AI (Block & Win Strategy)
- Hard AI (Minimax Algorithm)

### 🏆 Gameplay
- Winner Detection
- Draw Detection
- Winning Cell Highlight
- Score Tracking
- New Game
- Reset Game

### 🎨 UI Features
- Responsive Design
- Modern Dark Theme
- Hover Effects
- Mobile Friendly Layout

---

## 🧠 AI Algorithms

### Easy AI
Randomly selects an empty cell.

### Medium AI
- Tries to win
- Blocks player winning moves
- Falls back to random move

### Hard AI
Uses the Minimax Algorithm to always choose the optimal move.

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| React | Frontend |
| JavaScript | Logic |
| CSS3 | Styling |
| Vite | Build Tool |
| Netlify | Deployment |

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Cell.jsx
│   ├── GameBoard.jsx
│   ├── ModeSelector.jsx
│   └── Navbar.jsx
│
├── hooks/
│   └── useGameLogic.js
│
├── utils/
│   ├── aiMove.js
│   ├── minimax.js
│   └── checkWinner.js
│
├── pages/
│   └── Home.jsx
│
└── styles/
    └── app.css
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/tic-tac-toe.git
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

---

## 📈 Future Improvements

- Local Storage
- Sound Effects
- Confetti Animation
- Match History
- Undo Move
- Online Multiplayer (Socket.IO)
- Dark / Light Theme Toggle

---

## 👩‍💻 Author

**Sristi Gupta**

GitHub: https://github.com/sristigupta04

---

⭐ If you like this project, consider giving it a star.