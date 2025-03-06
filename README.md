📖 Book Review Platform
A full-stack Book Review Platform where users can browse books, read/write reviews, and rate books. Built using Vite (React) for frontend, Node.js (Express) for backend, and MongoDB as the database.



🚀 Tech Stack
Frontend:
React (with Vite)
React Router
Redux Toolkit (State Management)
Axios (API calls)
Tailwind CSS (Styling)
React Toastify (Notifications)
Backend:
Node.js
Express.js
MongoDB (Mongoose for ORM)
JWT (Authentication)
bcrypt (Password Hashing)


 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/your-username/book-review-platform.git
cd book-review-platform

Create a .env file for backend part and add 
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Create a .env file for frontend  part and add 
VITE_BASE_URL=http://localhost:4000/api/v1


To run the project, simply install the dependencies and start both the frontend and backend simultaneously using the following command:
npm install
npm run dev

