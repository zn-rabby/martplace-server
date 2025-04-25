
# MartPlace - Server

## 🔗 Links
- **Live Site**: [martplace-d6c8a.web.app](https://martplace-d6c8a.web.app/)

## 🚀 Features
- JWT Authentication
- CRUD Job Operations
- Job Applications System
- Role-Based Access (Admin/Employer/User)

## 💻 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Auth**: JWT, bcrypt

## ⚙️ Setup
1. Clone repo
2. `npm install`
3. Create `.env` file:
   ```
   PORT=5000
   MONGODB_URI=your_connection_string
   JWT_SECRET=your_secret_key
   ```
4. `npm start`

## 📜 API Highlights
- `POST /jobs` - Create job
- `GET /jobs` - Get all jobs
- `POST /applications` - Apply for job
- `PATCH /applications/:id` - Update status

