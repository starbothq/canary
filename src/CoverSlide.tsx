import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

export function CoverSlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
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
                </div>

                {/* Center content */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        marginTop: "-3%",
                    }}
                >
                    <p
                        style={{
                            fontSize: "clamp(11px, 1vw, 18px)",
                            opacity: 0.7,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            marginBottom: "2%",
                        }}
                    >
                        Strategic Commercial Briefing & Investment Thesis
                    </p>
                    <h1
                        style={{
                            fontSize: "clamp(28px, 5vw, 96px)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.05,
                        }}
                    >
                        Unlocking Zero-Friction
                        <br />
                        <span style={{ color: "#187E5F" }}>Retail Yield</span>
                    </h1>
                    <p
                        style={{
                            fontSize: "clamp(14px, 1.8vw, 36px)",
                            opacity: 0.9,
                            marginTop: "1.5%",
                            fontWeight: 500,
                        }}
                    >
                        in Premium Real Estate
                    </p>
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "7%",
                        fontSize: "clamp(12px, 1.05vw, 20px)",
                        opacity: 0.6,
                        position: "relative",
                        zIndex: 60,
                    }}
                >
                    <a href="https://starbot.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>starbot.co.uk</a>
                    <span>February 2026</span>
                </div>
            </div>
        </div>
    );
}
