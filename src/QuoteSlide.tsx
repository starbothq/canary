import { VideoBackground } from "./VideoBackground";

export function QuoteSlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    zIndex: 5,
                }}
            />

            <div className="slide-content" style={{ alignItems: "center", justifyContent: "center" }}>
                <div
                    style={{
                        maxWidth: "min(70%, 800px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(8px, 1vw, 16px)",
                        textAlign: "center",
                    }}
                >
                    <p
                        style={{
                            fontSize: "clamp(11px, 1vw, 18px)",
                            opacity: 0.7,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Starbot Coffee
                    </p>
                    <blockquote
                        style={{
                            fontSize: "clamp(20px, 3vw, 56px)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.15,
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        {"\u201C"}We deliver the premium craft of an independent roaster with the unyielding scale, speed, and profitability of a{" "}
                        <span style={{ color: "#187E5F" }}>high-tech platform.</span>
                        {"\u201D"}
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
