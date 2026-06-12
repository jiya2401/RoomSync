import * as React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import '../styles/auth_styles.css';

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
                setPassword("");
            }
        } catch (err) {
            console.log(err);
            let msg = err.response.data.message;
            setError(msg);
        }
    };

    const handleKey = (e) => {
        if (e.key === "Enter") handleAuth();
    };

    return (
        <div className="authPage" style={{ backgroundImage: "url(/background.png)" }}>

            {/* Background */}
            <div className="authGrid" />
            <div className="authGlowGreen" />
            <div className="authGlowBlue" />

            {/* Centered form */}
            <div className="authRight">
                <div className="authCard">

                    {/* Logo */}
                    <div className="authCardLogo">
                        <div className="authCardMark">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                                <path d="M15 10l4.553-2.277A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                        </div>
                        <span className="authCardBrand">Room<span>Sync</span></span>
                    </div>

                    <h2 className="authCardTitle">
                        {formState === 0 ? "Welcome back" : "Create account"}
                    </h2>
                    <p className="authCardSub">
                        {formState === 0 ? "Sign in to your RoomSync account" : "Join RoomSync for free"}
                    </p>

                    {/* Tabs */}
                    <div className="authTabs">
                        <button
                            className={`authTab ${formState === 0 ? "authTabActive" : ""}`}
                            onClick={() => setFormState(0)}
                        >
                            Sign In
                        </button>
                        <button
                            className={`authTab ${formState === 1 ? "authTabActive" : ""}`}
                            onClick={() => setFormState(1)}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form fields */}
                    <div className="authForm">
                        {formState === 1 && (
                            <div className="authField">
                                <label className="authLabel">Full Name</label>
                                <input
                                    className="authInput"
                                    type="text"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onKeyDown={handleKey}
                                    autoFocus
                                />
                            </div>
                        )}

                        <div className="authField">
                            <label className="authLabel">Username</label>
                            <input
                                className="authInput"
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                onKeyDown={handleKey}
                                autoFocus={formState === 0}
                            />
                        </div>

                        <div className="authField">
                            <label className="authLabel">Password</label>
                            <input
                                className="authInput"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onKeyDown={handleKey}
                            />
                        </div>

                        {error && <p className="authError">{error}</p>}

                        <button className="authSubmitBtn" onClick={handleAuth}>
                            {formState === 0 ? "Login" : "Register"}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </button>
                    </div>

                    <p className="authSwitch">
                        {formState === 0 ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={() => setFormState(formState === 0 ? 1 : 0)}>
                            {formState === 0 ? "Sign up" : "Sign in"}
                        </span>
                    </p>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={4000} message={message} />
        </div>
    );
} 