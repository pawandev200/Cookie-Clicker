# Cookie Clicker (MEAN Stack)

This project is a simple Cookie Clicker built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). It features a button that increases the counter when clicked, with a chance to earn additional points and prizes.

## 🚀 Features
- Click the button to increase the counter.
- 50% chance to get **+10 points**.
- 25% chance to win a **prize**.
- User data is stored in **MongoDB**, including total score and rewards.
- UI updates dynamically when the user earns points or prizes.

## 📂 Project Structure
```bash
frontend/
│── public/
│── src/
│   ├── components/
│   │   ├── Ui.jsx   
│   ├── pages/
│   │   ├── Home.jsx
│   ├── api/
│   │   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│── .env
│── package.json
│── vite.config.js

backend/
│── jobs/
│   ├── clickLogic.js   # Handles click logic and rewards
│   ├── dbConnect.js
│── models/
│   ├── User.js          
│── routes/
│   ├── gameRoutes.js 
│   ├── userRoutes.js
│── server.js           
│── .env                 
│── package.json

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)**
- **CSS** for styling
- **React Toastify** for notifications

### Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas** for database storage
- **Mongoose** for MongoDB ORM
- **Nodemon** for auto-reloading during development

---

## 🎨 UI Preview

The UI includes:
- A **Click Button** with animations.
- A **Scoreboard** displaying clicks, score, and prizes won.
- **Visual feedback** when the button is clicked.

---

## 📌 Author

Developed by **Pawan Dev Kumar**.  
Feel free to contribute or modify this project! 🚀