

# MartPlace - Server API

## 🔗 Live Deployment
**API Base URL**: `https://your-api-url.com`  
**Frontend**: [MartPlace Marketplace](https://martplace-d6c8a.web.app/)

## 🌟 Core Features
- **Secure Authentication**
  - JWT token-based auth
  - Role-based access control
  - Password encryption (bcrypt)

- **Job Management**
  - Create/list/update/delete jobs
  - Job application system
  - Application status tracking

- **User Roles**
  - Admin: Full access
  - Employer: Manage own jobs
  - User: Browse & apply

## 🛠️ Technology Stack
| Component       | Technology |
|-----------------|------------|
| Runtime         | Node.js    |
| Framework       | Express.js |
| Database        | MongoDB    |
| Authentication  | JWT        |
| Security        | Helmet, CORS |
| API Docs        | (Optional: Swagger) |

## 🚀 Quick Setup
```bash
# 1. Clone repository
git clone https://github.com/your-repo/martplace-server.git

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your credentials

# 4. Start server
npm start
```

## 📡 API Endpoints
### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Jobs
| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | /api/jobs         | List all jobs              |
| POST   | /api/jobs         | Create new job             |
| GET    | /api/jobs/:id     | Get job details            |
| PUT    | /api/jobs/:id     | Update job                 |
| DELETE | /api/jobs/:id     | Delete job                 |

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications` - View applications (role-based)
- `PATCH /api/applications/:id` - Update application status

## 🔒 Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=24h
```

