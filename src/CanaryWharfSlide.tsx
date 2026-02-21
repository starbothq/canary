import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

export function CanaryWharfSlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 100%)",
                    zIndex: 5,
                }}
            />

            <div className="slide-content">
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "4%",
                    }}
                >
                    <Logo />
                    <span
                        style={{
                            fontSize: "clamp(12px, 1.05vw, 20px)",
                            opacity: 0.8,
                        }}
                    >
                        Page 003
                    </span>
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontSize: "clamp(24px, 3.5vw, 64px)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                        marginTop: "3%",
                    }}
                >
                    The Canary Wharf
                    <br />
                    <span style={{ color: "#187E5F" }}>Opportunity</span>
                </h1>

                {/* Three-column layout */}
                <div
                    className="slide-three-col"
                    style={{ marginTop: "3.5%" }}
                >
                    {/* Column 1: Context */}
                    <div style={{ flex: "0 0 22%" }}>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.05vw, 20px)",
                                opacity: 0.9,
                                lineHeight: 1.5,
                            }}
                        >
                            Canary Wharf is no longer just a 9-to-5 financial district; it is the
                            ultimate proving ground for the future of urban retail.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: "8px",
                                marginTop: "8%",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "clamp(24px, 3.5vw, 64px)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                    color: "#187E5F",
                                }}
                            >
                                105k+
                            </span>
                        </div>
                        <p
                            style={{
                                fontSize: "clamp(11px, 0.9vw, 16px)",
                                opacity: 0.7,
                                marginTop: "2%",
                            }}
                        >
                            Daily workers across 97 acres
                        </p>
                    </div>

                    {/* Column 2: Long paragraph */}
                    <div style={{ flex: "0 0 38%" }}>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.05vw, 20px)",
                                opacity: 0.9,
                                lineHeight: 1.5,
                            }}
                        >
                            Spanning 97 acres and processing over 105,000 workers daily, the
                            estate has fundamentally shifted into a 24/7 "live-work-play" smart
                            city. With the addition of the 23-acre Wood Wharf residential
                            expansion and upcoming life science hubs, the demand for continuous,
                            high-quality amenities has never been higher.
                        </p>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.05vw, 20px)",
                                opacity: 0.75,
                                lineHeight: 1.5,
                                marginTop: "3%",
                            }}
                        >
                            However, traditional human-operated cafes are physically and
                            economically incapable of scaling into this 24/7 ecosystem. Starbot's
                            microscopic footprint and autonomous bionic technology allow us to
                            bypass traditional retail limitations.
                        </p>
                    </div>

                    {/* Column 3: Stat + graph */}
                    <div
                        style={{
                            flex: "0 0 20%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "clamp(24px, 3.5vw, 64px)",
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                color: "#187E5F",
                            }}
                        >
                            24/7
                        </span>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.05vw, 20px)",
                                opacity: 0.9,
                                lineHeight: 1.5,
                                marginTop: "4%",
                            }}
                        >
                            Autonomous operation captures the lucrative nighttime economy driving
                            the new "live-work-play" district.
                        </p>

                        {/* 24hr demand curve SVG */}
                        <svg
                            viewBox="0 0 200 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: "100%",
                                marginTop: "auto",
                                marginBottom: "10%",
                                maxHeight: "80px",
                            }}
                        >
                            <defs>
                                <linearGradient id="demandFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#187E5F" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#187E5F" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M5 65 Q30 60, 50 30 Q65 10, 80 15 Q100 25, 120 35 Q140 20, 155 12 Q170 20, 185 40 Q195 55, 195 60 L195 75 L5 75 Z"
                                fill="url(#demandFill)"
                            />
                            <path
                                d="M5 65 Q30 60, 50 30 Q65 10, 80 15 Q100 25, 120 35 Q140 20, 155 12 Q170 20, 185 40 Q195 55, 195 60"
                                stroke="white"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <circle cx="50" cy="30" r="3" fill="#187E5F" stroke="white" strokeWidth="1.5" />
                            <circle cx="155" cy="12" r="3" fill="#187E5F" stroke="white" strokeWidth="1.5" />
                            <text x="45" y="78" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Plus Jakarta Sans, sans-serif">8am</text>
                            <text x="147" y="78" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="Plus Jakarta Sans, sans-serif">5pm</text>
                        </svg>
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        textAlign: "right",
                        paddingBottom: "4%",
                        paddingTop: "2%",
                        fontSize: "clamp(12px, 1.05vw, 20px)",
                        opacity: 0.6,
                    }}
                >
                    Canary Wharf Case Study
                </div>
            </div>
        </div>
    );
}
