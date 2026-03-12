# 📊 MERN Expense Tracker

A full-stack expense tracking web application that allows users to manage their daily expenses efficiently. Users can securely register, log in, and perform CRUD operations on their expenses with a clean and responsive interface.

---

## 🚀 Features

- User Authentication (Signup / Login with JWT)
- Add new expenses
- Update existing expenses
- Delete expenses
- View all expenses in a structured table
- Track spending easily
- Protected routes using authentication middleware
- Fast frontend built with Vite

---

## 🛠 Tech Stack

### Frontend
- React
- Redux Toolkit
- Vite
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JSON Web Tokens (JWT)

---

## 📁 Project Structure
mern-expense-tracker
│
├── backend
│ ├── controllers
│ ├── models
│ ├── middleware
│ ├── database
│ ├── index.js
│ └── package.json
│
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ ├── redux
│ │ ├── hooks
│ │ └── pages
│ ├── vite.config.js
│ └── package.json
│
└── README.md

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository
git clone https://github.com/thekaptaan018/mern-expense-tracker.git


---

### 2️⃣ Navigate to project folder
cd mern-expense-tracker

---

### 3️⃣ Install backend dependencies
cd backend
npm install

---

### 4️⃣ Create `.env` file in backend

Create a `.env` file inside the backend folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

### 5️⃣ Run backend server
npm run dev

---

### 6️⃣ Install frontend dependencies

Open a new terminal and run:
cd frontend
npm install

---

### 7️⃣ Run frontend
npm run dev

---

## 📡 API Endpoints

### Authentication
POST /api/users/register
POST /api/users/login

### Expense Management
GET /api/expenses
POST /api/expenses
PUT /api/expenses/:id
DELETE /api/expenses/:id

---

## 🔒 Security Features

- JWT-based authentication
- Protected backend routes
- Middleware authorization
- Secure password handling

---

## 🎯 Future Improvements

- Expense analytics & charts
- Category-based expenses
- Monthly reports
- Export expenses to CSV
- Dark mode UI

---

## 👨‍💻 Author

**Mayank Chaudhary**

If you like this project, consider giving it a ⭐ on GitHub.

---
