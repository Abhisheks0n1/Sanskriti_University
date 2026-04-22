# 🎓 Sanskriti University — Full-Stack Clone

A **pixel-perfect, mobile-responsive** full-stack clone of the [Sanskriti University](https://www.sanskriti.edu.in/) landing page — built as an industrial-grade academic assignment.

**Frontend:** React + Vite | **Backend:** Node.js + Express | **Database:** MongoDB-ready (Mongoose)

---

## 📸 Project Overview

| Feature | Detail |
|---------|--------|
| 🏠 Landing Page | Full-screen hero, awards, news highlights, research, testimonials |
| 📋 Inquiry Form | Frontend form → Backend API → Validated JSON response |
| 📱 Responsive | Mobile-first design, works on all screen sizes |
| 🎨 Design | Exact color match, glassmorphism, hover animations |
| 🏗️ Architecture | React component tree + Node.js MVC REST API |

---

## 📁 Monorepo Structure

```
sanskriti-clone/
│
├── frontend/                          # React + Vite app
│   ├── public/
│   ├── src/
│   │   ├── assets/                    # Images (hero, chancellor, navratri…)
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── Navbar.jsx         # Fixed navbar — Search + Apply Now
│   │   │   └── sections/
│   │   │       ├── Hero.jsx           # Full-screen hero + inquiry form
│   │   │       ├── AwardsBar.jsx      # 4 achievement cards (🏆🥇🎖️⭐)
│   │   │       ├── HighlightsPanel.jsx# Bento-style news grid
│   │   │       ├── ExcellenceStats.jsx# Timeline updates + stat boxes
│   │   │       ├── RecruitersBar.jsx  # Top recruiters strip
│   │   │       ├── WhyChoose.jsx      # Reason cards + feature cards
│   │   │       ├── ResearchSection.jsx# Stats + project cards with images
│   │   │       ├── ChancellorDesk.jsx # Chancellor quote + In The News
│   │   │       ├── LifeAtSU.jsx       # Campus life photo grid
│   │   │       └── Testimonials.jsx   # Student review cards
│   │   ├── App.jsx                    # Root — assembles all sections
│   │   ├── global.css                 # ✅ Single centralized stylesheet
│   │   └── main.jsx                   # Vite entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── backend/                           # Node.js + Express API
│   ├── src/
│   │   ├── controllers/
│   │   │   └── inquiry.controller.js  # Inquiry form business logic
│   │   ├── routes/
│   │   │   └── inquiry.routes.js      # POST /api/v1/inquiry
│   │   └── app.js                     # Express app, middleware, error handler
│   ├── server.js                      # Entry point — binds port
│   ├── .env                           # ⚠️ Create this (see below)
│   ├── package.json
│   └── README.md
│
└── README.md                          # ← You are here
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js** v18+
- **npm** v9+
- (Optional) **MongoDB** for persistent inquiry storage

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/sanskriti-clone.git
cd sanskriti-clone
```

---

### 2️⃣ Setup & Run the Backend

```bash
cd backend

# Install dependencies
npm install

# Create environment file
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/sanskriti_db
```

```bash
# Start the server (auto-reload with nodemon)
npm start
```

✅ Backend running at → **http://localhost:5000**

---

### 3️⃣ Setup & Run the Frontend

Open a **new terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

✅ Frontend running at → **http://localhost:5173**

---

## 📦 Scripts

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build production bundle to `/dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

### Backend

| Command | Description |
|---------|-------------|
| `npm start` | Start server with nodemon (auto-reload) |

---

## 📡 API Reference

**Base URL:** `http://localhost:5000`

---

### `GET /health`
Check if the backend server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Backend is running"
}
```

---

### `POST /api/v1/inquiry`
Submit a student inquiry from the landing page form.

**Request Body:**
```json
{
  "fullName": "Rahul Sharma",
  "email": "rahul@gmail.com",
  "phone": "9876543210",
  "course": "B.Tech Computer Science"
}
```

**Success** `201`:
```json
{
  "success": true,
  "message": "Inquiry submitted successfully! We will contact you soon.",
  "data": {
    "id": 482931,
    "fullName": "Rahul Sharma",
    "submittedAt": "2025-10-12T14:30:00.000Z"
  }
}
```

**Validation Error** `400`:
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

---

## 🎨 Design System

All styles are centralized in **`frontend/src/global.css`**.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary-navy` | `#020420` | Dark section backgrounds |
| `--primary-blue` | `#007AFF` | Buttons, links, accents |
| `--accent-gold` | `#FFB800` | Highlights, awards, badges |
| `--text-gray` | `#B0B3C1` | Subtitles, descriptions |

### Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 992px` | Full desktop multi-column grid |
| `≤ 992px` | Single column stacked layout |
| `≤ 768px` | Reduced padding, smaller fonts |
| `≤ 600px` | Single-column cards throughout |

---

## 🏗️ Backend Architecture (MVC)

```
HTTP Request
    ↓
inquiry.routes.js    → Defines  POST /api/v1/inquiry
    ↓
inquiry.controller.js → Validates fields, builds response
    ↓
HTTP Response (JSON)
```

| Layer | File | Role |
|-------|------|------|
| Route | `inquiry.routes.js` | Maps URL to controller |
| Controller | `inquiry.controller.js` | Validates + responds |
| App | `app.js` | CORS, JSON parser, error handler |
| Server | `server.js` | Listens on PORT |

---

## 🗄️ MongoDB Integration (Optional)

Mongoose is installed and ready. To enable persistent inquiry storage:

**1. Add to `.env`:**
```env
MONGO_URI=mongodb://localhost:27017/sanskriti_db
```

**2. Create model** `src/models/Inquiry.model.js`:
```js
const mongoose = require('mongoose');
const inquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true },
  phone:    { type: String, required: true },
  course:   { type: String, required: true },
}, { timestamps: true });
module.exports = mongoose.model('Inquiry', inquirySchema);
```

**3. Connect in `app.js`:**
```js
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'));
```

**4. Replace mock logic** in `inquiry.controller.js` with:
```js
const Inquiry = require('../models/Inquiry.model');
const saved = await Inquiry.create({ fullName, email, phone, course });
res.status(201).json({ success: true, data: saved });
```

---

## 🚀 Deployment

| Part | Recommended Platform |
|------|---------------------|
| Frontend | [Vercel](https://vercel.com) — connect GitHub, auto-deploy on push |
| Backend | [Render](https://render.com) — free Node.js hosting, add env vars |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) — free cloud MongoDB |

### Frontend `.env` for production:
```env
VITE_API_URL=https://your-backend.onrender.com
```

Update the inquiry form fetch URL in `Hero.jsx` to use `import.meta.env.VITE_API_URL`.

---

## 📋 Tech Stack Summary

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend Framework | React | 19.x |
| Frontend Build Tool | Vite | 8.x |
| Frontend Styling | Vanilla CSS | — |
| Backend Runtime | Node.js | 18+ |
| Backend Framework | Express | 5.x |

---
