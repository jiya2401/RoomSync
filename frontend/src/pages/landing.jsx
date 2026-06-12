import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/landing_styles.css'

export default function LandingPage() {
    const router = useNavigate();

    return (
       <div className="landingPage" style={{ backgroundImage: "url(/background.png)" }}>

            {/* Background */}
            <div className="landingGrid" />
            <div className="landingGlowGreen" />
            <div className="landingGlowBlue" />

            {/* Navbar */}
            <nav className="landingNav">
                <div className="landingNavLogo">
                    <div className="landingNavMark">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                            <path d="M15 10l4.553-2.277A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                        </svg>
                    </div>
                    <p className="landingNavBrand">Room<span>Sync</span></p>
                </div>
                <div className="landingNavLinks">
                    <button className="landingNavBtn" onClick={() => router("/aljk23")}>Join as Guest</button>
                    <button className="landingNavBtn" onClick={() => router("/auth")}>Register</button>
                    <button className="landingNavBtnOutline" onClick={() => router("/auth")}>Login</button>
                </div>
            </nav>

            {/* Hero */}
            <div className="landingHero">
                <div className="landingHeroLeft">

                    <div className="landingBadge">
                        <span className="landingBadgeDot" />
                        Live &amp; encrypted
                    </div>

                    <h1 className="landingH1">
                        drop in and<br />
                        <span className="landingAccent">sync up.</span>
                    </h1>
                    <p className="landingSubtext">
                        Cover the distance with RoomSync — crystal-clear video, instant rooms, zero friction.
                    </p>

                    <div className="landingBtnRow">
                        <button className="landingBtnMain" onClick={() => router("/auth")}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                            Get Started
                        </button>
                        <button className="landingBtnGhost" onClick={() => router("/aljk23")}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="10" /><path d="M10 8l6 4-6 4V8z" />
                            </svg>
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Hero image */}
                <div className="landingHeroRight">
                    <img src="/mobile.png" alt="RoomSync preview" className="landingHeroImg" />
                </div>
            </div>

            {/* Stats */}
            <div className="landingStats">
                <div><p className="landingStatNum"><span className="landingAccent">12k+</span></p><p className="landingStatLabel">Rooms opened today</p></div>
                <div className="landingStatDivider" />
                <div><p className="landingStatNum"><span className="landingAccent">98%</span></p><p className="landingStatLabel">Uptime guaranteed</p></div>
                <div className="landingStatDivider" />
                <div><p className="landingStatNum"><span className="landingAccent">&lt;200ms</span></p><p className="landingStatLabel">Sync latency</p></div>
                <div className="landingStatDivider" />
                <div><p className="landingStatNum"><span className="landingAccent">E2E ✓</span></p><p className="landingStatLabel">Encrypted calls</p></div>
            </div>

        </div>
    )
}