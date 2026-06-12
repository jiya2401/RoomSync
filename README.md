# RoomSync

> Drop in and sync up. A real-time video conferencing app built with React, Node.js, WebRTC and Socket.IO.

## App Flow

```
Landing Page
     ↓
Auth Route (checks JWT token)
     ├── Not logged in → Authentication Page
     └── Logged in ──→ Home / Dashboard
                            ↓
                      Meeting Homepage
                            ↓
                       Video Call Room
                            ├── WebRTC offer/answer exchange
                            └── Peer-to-peer video streaming
```

---

## Project Structure

```
RoomSync/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── socketManager.js      # Socket.IO signaling logic
│   │   ├── models/
│   │   │   ├── user.model.js         # User schema
│   │   │   └── meeting.model.js      # Meeting schema
│   │   └── routes/
│   │       └── users.routes.js       # Auth & user API routes
│   ├── app.js                        # Express + MongoDB entry point
│   ├── .env                          # Environment variables (not committed)
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx       # Auth state & token management
│   │   ├── pages/
│   │   │   ├── landing.jsx           # Home/landing page
│   │   │   ├── authentication.jsx    # Login & register
│   │   │   ├── home.jsx              # Dashboard after login
│   │   │   ├── history.jsx           # Meeting history
│   │   │   └── VideoMeet.jsx         # Video call room
│   │   ├── styles/
│   │   │   ├── auth_styles.css
│   │   │   ├── home_styles.css
│   │   │   ├── landing_styles.css
│   │   │   └── videoComponent.module.css
│   │   ├── utils/
│   │   │   └── withAuth.jsx          # Protected route HOC
│   │   ├── environment.js            # Backend URL config
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router DOM v6 | Client-side routing |
| Socket.IO Client | Real-time WebRTC signaling |
| Material UI | UI components & icons |
| Axios | HTTP requests to backend |
| UUID | Unique room ID generation |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| Socket.IO | WebRTC signaling server |
| MongoDB + Mongoose | User & meeting database |
| JWT | Authentication tokens |
| dotenv | Environment config |
| CORS | Cross-origin requests |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

---

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/RoomSync.git
cd RoomSync
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=Cluster0
```

Start backend:

```bash
npm run dev
```

Backend runs at `http://localhost:8000`

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

App runs at `http://localhost:3000`

---

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/users/register` | Register new user |
| POST | `/api/v1/users/login` | Login & get JWT token |
| GET | `/api/v1/users/meetings` | Get meeting history |
| POST | `/api/v1/users/add_to_activity` | Save meeting to history |

---

## Features

- **Landing page** — intro page with login/register navigation
- **JWT authentication** — secure login and register
- **Protected routes** — redirect to login if not authenticated
- **Lobby screen** — camera preview before joining
- **Video call room** — multi-participant WebRTC video
- **Mic & camera toggle** — mute/unmute on the fly
- **Screen sharing** — share screen with participants
- **In-room chat** — real-time messaging
- **Meeting history** — view previously joined rooms

---

## WebRTC Flow

```
User A joins room
      ↓
Socket.IO connects to signaling server
      ↓
Server notifies User B → "user-joined"
      ↓
User A creates RTCPeerConnection + sends Offer
      ↓ 
User B receives Offer → sends Answer
      ↓
ICE candidates exchanged via Socket.IO
      ↓
Peer-to-peer video stream established ✅ 
```

---

## Environment Variables

Only the backend needs a `.env` file:

### `backend/.env`
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

> Never commit `.env` — covered by root `.gitignore`

---

## Important Notes

- Always open via `http://localhost:3000` (not IP) for camera/mic access
- Uses Google STUN server: `stun:stun.l.google.com:19302`
- For calls across different networks, a TURN server is needed
- Never commit `.env` files — covered by `.gitignore`

---

## Author

Built by **Jiya Singh** — [GitHub](https://github.com/jiya2401)
