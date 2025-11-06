function Header() {
    return (
        <header>
            <div className="header" style={{ position: 'relative'}}>
                <div className="logo-title">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        width="65"
                        height="65"
                        aria-label="GlobSpot bouncing pin"
                        className="svg"
                    >
                        <defs>
                            <radialGradient id="gradGlobe" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00eaff" />
                                <stop offset="65%" stopColor="#2a8cff" />
                                <stop offset="100%" stopColor="#0033aa" />
                            </radialGradient>

                            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#7ffcff" stopOpacity="1" />
                                <stop offset="60%" stopColor="#00aaff" stopOpacity="0.95" />
                                <stop offset="100%" stopColor="#002b88" stopOpacity="0.6" />
                            </radialGradient>

                            <linearGradient id="gradPin" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ff6ec4" />
                                <stop offset="100%" stopColor="#7873f5" />
                            </linearGradient>

                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="b" />
                                <feMerge>
                                    <feMergeNode in="b" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Everything centered */}
                        <g transform="translate(128 128)">
                            {/* Globe */}
                            <circle r="65" fill="url(#gradGlobe)" filter="url(#glow)" />
                            <ellipse rx="55" ry="16" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" />
                            <path d="M0,-65 A65,65 0 0,1 0,65 A65,65 0 0,1 0,-65Z"
                                fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />

                            {/* Animated rings */}
                            <circle cx="0" cy="0" r="12" fill="none" stroke="#7ffcff" strokeWidth="2" opacity="0.7">
                                <animate attributeName="r" values="12;90" dur="2.2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.7;0" dur="2.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="#ff6ec4" strokeWidth="2" opacity="0.65">
                                <animate attributeName="r" values="12;90" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.65;0" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="0" cy="0" r="12" fill="none" stroke="#7873f5" strokeWidth="2" opacity="0.6">
                                <animate attributeName="r" values="12;90" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.6;0" dur="2.2s" begin="1.4s" repeatCount="indefinite" />
                            </circle>

                            {/* Static center core */}
                            <circle cx="0" cy="0" r="12" fill="url(#coreGlow)" stroke="#aaffff" strokeOpacity="0.55" strokeWidth="0.8" />

                            {/* Orbiting dots */}
                            <g>
                                <circle cx="85" cy="0" r="4" fill="#00ffff" filter="url(#glow)" />
                                <circle cx="-60" cy="60" r="4" fill="#ff5ee0" filter="url(#glow)" />
                                <circle cx="-60" cy="-60" r="4" fill="#ffd966" filter="url(#glow)" />
                                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
                            </g>

                            {/* Outer glow pulse */}
                            <circle r="65" fill="none" stroke="#00ffff" strokeWidth="1.6" opacity="0.18" filter="url(#glow)">
                                <animate attributeName="r" values="65;95" dur="2.8s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.18;0" dur="2.8s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Bouncing Pin (positioned at 20% from top, so y ≈ 51) */}
                        <g id="pinGroup" transform="translate(128 51)">
                            <animateTransform attributeName="transform"
                                type="translate"
                                values="128 51; 128 41; 128 51"
                                dur="1.4s"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                keySplines=".42 0 .58 1; .42 0 .58 1"
                                repeatCount="indefinite" />
                            {/* Pin body */}
                            <path d="M0,-15 C8,-15 15,-8 15,0 C15,12 0,28 0,28 C0,28 -15,12 -15,0 C-15,-8 -8,-15 0,-15Z"
                                fill="url(#gradPin)" filter="url(#glow)" />
                            {/* Inner white core */}
                            <circle cx="0" cy="-5" r="5" fill="#fff" fillOpacity="0.88" />
                        </g>
                    </svg>

                    <p className="title">GlobSpot</p>
                </div>
                <p className="mode"><i className="fa-solid fa-moon"></i><span>Dark Mode</span></p>
            </div>
        </header>
    )
}

export default Header