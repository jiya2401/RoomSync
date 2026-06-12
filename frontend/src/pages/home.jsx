import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import '../styles/home_styles.css';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <div className="page">

            {/* Background layers */}
            <div className="grid" />
            <div className="glowGreen" />
            <div className="glowBlue" />

            {/* Navbar */}
            <nav className="nav">
                <div className="navLogo">
                    <div className="navMark">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                            <path d="M15 10l4.553-2.277A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                        </svg>
                    </div>
                    <p className="navBrand">Room<span>Sync</span></p>
                </div>
                <div className="navRight">
                    <button className="navIconBtn" onClick={() => navigate("/history")}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <polyline points="1 4 1 10 7 10" />
                            <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                        </svg>
                        History
                    </button>
                    <button className="logoutBtn" onClick={() => { localStorage.removeItem("token"); navigate("/auth"); }}>
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main content */}
            <div className="homeCenter">
                <div className="homeCenterInner">

                    <div className="badge">
                        <span className="badgeDot" />
                        Ready to sync
                    </div>

                    <h1 className="h1">
                        Start or join<br />
                        <span className="accent">a room.</span>
                    </h1>
                    <p className="subtext">
                        Enter a meeting code to join, or create a new room instantly.
                    </p>

                    <div className="inputRow">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter meeting code..."
                            value={meetingCode}
                            onChange={e => setMeetingCode(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && meetingCode.trim() && handleJoinVideoCall()}
                            autoFocus
                        />
                        <button
                            className={`joinBtn ${!meetingCode.trim() ? "joinBtnDisabled" : ""}`}
                            onClick={handleJoinVideoCall}
                            disabled={!meetingCode.trim()}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                            Join room
                        </button>
                    </div>

                    <div className="orRow">
                        <div className="orLine" />
                        <span className="orText">or</span>
                        <div className="orLine" />
                    </div>

                    <button className="newRoomBtn" onClick={() => navigate(`/${crypto.randomUUID().slice(0, 8)}`)}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        Start a new room
                    </button>

                </div>
            </div>

        </div>
    );
}

export default withAuth(HomeComponent); 