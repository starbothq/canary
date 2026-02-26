import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

const metrics = [
    {
        metric: "Spatial Footprint",
        traditional: "350–500+ sq ft",
        starbot: "25.3 sq ft",
        advantage: "Fits anywhere. Turns unused corridors into high-utility hubs.",
    },
    {
        metric: "Operational Model",
        traditional: "Staff-Dependent",
        starbot: "Fully Autonomous",
        advantage: "Consistent service without the reliance on human shift patterns.",
    },
    {
        metric: "Operating Hours",
        traditional: "~7 AM – 6 PM",
        starbot: "24/7/365",
        advantage: "Provides continuous, around-the-clock availability.",
    },
    {
        metric: "Throughput Density",
        traditional: "Moderate",
        starbot: "Hyper-Efficient",
        advantage: "Unmatched volume handled in a fraction of traditional space.",
    },
    {
        metric: "Deployment Speed",
        traditional: "Multi-Month Build",
        starbot: "Plug & Play",
        advantage: "Instant activation. Zero construction delays or mess.",
    },
];

export function EfficiencySlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%)",
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
                        Page 008
                    </span>
                </div>

                {/* Title */}
                <div style={{ marginTop: "2.5%" }}>
                    <p
                        style={{
                            fontSize: "clamp(11px, 1vw, 18px)",
                            opacity: 0.7,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Starbot Outperforms Traditional Retail
                    </p>
                    <h1
                        style={{
                            fontSize: "clamp(22px, 3.5vw, 64px)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.05,
                            marginTop: "0.5%",
                        }}
                    >
                        Operational <span style={{ color: "#187E5F" }}>Excellence</span>
                    </h1>
                </div>

                {/* Table */}
                <div
                    className="liquid-glass"
                    style={{
                        flex: 1,
                        marginTop: "2.5%",
                        marginBottom: "4%",
                        padding: "clamp(12px, 2vw, 36px)",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0,
                        overflowX: "auto",
                    }}
                >
                    {/* Table header */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.2fr 1fr 1fr 1.8fr",
                            gap: "clamp(6px, 1vw, 16px)",
                            paddingBottom: "clamp(8px, 1vw, 20px)",
                            borderBottom: "1px solid rgba(255,255,255,0.15)",
                            minWidth: "600px",
                        }}
                    >
                        {["Metric", "Traditional Café", "Starbot Kiosk", "Starbot Advantage"].map((h) => (
                            <span
                                key={h}
                                style={{
                                    fontSize: "clamp(9px, 0.85vw, 15px)",
                                    fontWeight: 700,
                                    opacity: 0.6,
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {h}
                            </span>
                        ))}
                    </div>

                    {/* Table rows */}
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            minWidth: "600px",
                        }}
                    >
                        {metrics.map((row, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1.2fr 1fr 1fr 1.8fr",
                                    gap: "clamp(6px, 1vw, 16px)",
                                    padding: "clamp(6px, 0.8vw, 16px) 0",
                                    borderBottom: i < metrics.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "clamp(12px, 1.1vw, 20px)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {row.metric}
                                </span>
                                <span
                                    style={{
                                        fontSize: "clamp(11px, 1vw, 18px)",
                                        opacity: 0.6,
                                    }}
                                >
                                    {row.traditional}
                                </span>
                                <span
                                    style={{
                                        fontSize: "clamp(12px, 1.1vw, 20px)",
                                        fontWeight: 700,
                                        color: "#187E5F",
                                    }}
                                >
                                    {row.starbot}
                                </span>
                                <span
                                    style={{
                                        fontSize: "clamp(10px, 0.9vw, 16px)",
                                        opacity: 0.8,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {row.advantage}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
