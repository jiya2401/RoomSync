# RoomSync — Frontend

> Drop in and sync up. A real-time video conferencing app built with React and WebRTC.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM v7 | Client-side routing |
| Socket.IO Client | Real-time signaling |
| Simple Peer (WebRTC) | Peer-to-peer video/audio |
| Material UI v9 | UI components & icons |
| Axios | HTTP requests to backend |
| UUID | Unique room ID generation |

---

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── contexts/
│   │   └── AuthContext.js        # Auth state & token management
│   ├── pages/
│   │   ├── home.jsx              # Landing page with room join/create
│   │   ├── VideoMeetComponent.jsx # Main video call room
│   │   └── Authentication.jsx    # Login & register
│   ├── utils/
│   │   └── withAuth.js           # Protected route HOC
│   ├── styles/
│   │   └── videoComponent.module.css
│   ├── environment.js            # Backend server URL config
│   └── App.js
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- Backend server running on `http://localhost:8000`

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/roomsync.git

# Go to frontend folder
cd roomsync/frontend

# Install dependencies
npm install

# Start development server
npm start
```

App runs at `http://localhost:3000`

---

## Environment Config

Edit `src/environment.js` to point to your backend:

```js
const server = "http://localhost:8000";
export default server;
```

For production, replace with your deployed backend URL.

---

## Features

- **Lobby screen** — camera preview and username entry before joining
- **Video call room** — multi-participant WebRTC video grid
- **Screen sharing** — share your screen with all participants
- **In-room chat** — real-time messaging with unread badge
- **Mic & camera toggle** — mute/unmute on the fly
- **Meeting history** — view previously joined rooms
- **Auth protected routes** — JWT token-based access

---

## How It Works (WebRTC Flow)

```
User joins room
      ↓
Socket.IO connects to backend signaling server
      ↓
Server emits "user-joined" with list of participants
      ↓
RTCPeerConnection created for each participant
      ↓
ICE candidates exchanged via Socket.IO
      ↓
SDP offer/answer exchanged (video/audio negotiation)
      ↓
Peer-to-peer video stream established
```

---

## Available Scripts

```bash
npm start       # Start dev server on localhost:3000
npm run build   # Production build
npm test        # Run tests
```

---

## Notes

- Allow camera and microphone permissions when prompted
- Uses Google STUN server for ICE negotiation: `stun:stun.l.google.com:19302`
- For multi-party calls across networks, a TURN server may be needed 