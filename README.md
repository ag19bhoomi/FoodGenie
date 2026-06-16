#  FoodGenie

FoodGenie is an AI-powered food ordering platform built using the MERN stack. The application aims to provide users with a seamless food discovery and ordering experience while leveraging AI-driven recommendations to suggest meals based on user preferences, dietary requirements, and ordering history.

>  Project Status: Backend and database development are currently in progress.

---

##  Features

- User Authentication & Authorization
- Restaurant Management
- Menu Management
- Food Ordering System
- AI-Based Food Recommendations (Planned)
- Secure JWT Authentication
- Cloudinary Image Uploads
- MongoDB Database Integration
- RESTful API Architecture

---

##  Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Tokens)
- bcrypt.js

### Cloud Storage
- Cloudinary

---

##  Project Structure

```bash
backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── app.js
├── server.js
├── package.json
```

---

##  Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/FoodGenie.git
cd FoodGenie/backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=8080

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_TIME=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run the Server

```bash
npm start
```

Server will run on:

```bash
http://localhost:8080
```

---

##  Current Progress

### Completed
- Backend Setup
- MongoDB Connection
- User Model
- Restaurant Model
- Authentication APIs
- Middleware Configuration
- Error Handling

### In Progress
- Food Ordering APIs
- Restaurant CRUD Operations
- AI Recommendation Engine
- Payment Integration

### Planned Features
- Personalized AI Food Suggestions
- Real-Time Order Tracking
- Admin Dashboard
- User Reviews & Ratings
- Wishlist & Favorites

---

##  Contributing

Contributions, suggestions, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

##  Developer

**Bhoomi Agarwal**

B.Tech Computer Science & Engineering  
Jaypee University of Engineering & Technology

GitHub: https://github.com/ag19bhoomi
