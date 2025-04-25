
# MartPlace - Server

## 🔗 Links
- **Live Site**: [martplace-d6c8a.web.app](https://martplace-d6c8a.web.app/)
- **API Base URL**: `your-api-url.com` (replace with actual)

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

## 📝 License
MIT

---

This version:
- Uses emojis for visual scanning
- Keeps only essential information
- Maintains clear structure
- Removes implementation details
- Presents core features and setup briefly

Adjust the API URL and add any critical endpoints you want to highlight.