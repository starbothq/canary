import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

export function VisionSlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%)",
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
                        Page 010
                    </span>
                </div>

                {/* Main content */}
                <div
                    className="slide-two-col"
                    style={{ alignItems: "center" }}
                >
                    {/* Left: Hero stat */}
                    <div style={{ flex: "0 0 40%" }}>
                        <p
                            style={{
                                fontSize: "clamp(11px, 1vw, 18px)",
                                opacity: 0.7,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "3%",
                            }}
                        >
                            Spatial Efficiency
                        </p>
                        <div
                            style={{
                                fontSize: "clamp(40px, 7vw, 130px)",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                                lineHeight: 0.9,
                                color: "#187E5F",
                            }}
                        >
                            20×
                        </div>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.2vw, 22px)",
                                opacity: 0.7,
                                marginTop: "3%",
                            }}
                        >
                            throughput density compared to traditional retail
                        </p>

                        {/* Callout box */}
                        <div
                            className="liquid-glass"
                            style={{
                                marginTop: "5%",
                                padding: "clamp(12px, 1.5vw, 28px) clamp(14px, 2vw, 36px)",
                                display: "flex",
                                gap: "clamp(12px, 2vw, 36px)",
                                alignItems: "center",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 34px)",
                                        fontWeight: 700,
                                        color: "#187E5F",
                                    }}
                                >
                                    Rapid
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(9px, 0.8vw, 14px)",
                                        opacity: 0.7,
                                    }}
                                >
                                    Deployment
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "1px",
                                    height: "clamp(20px, 2.5vw, 48px)",
                                    background: "rgba(255,255,255,0.15)",
                                }}
                            />
                            <div style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 34px)",
                                        fontWeight: 700,
                                        color: "#187E5F",
                                    }}
                                >
                                    100%
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(9px, 0.8vw, 14px)",
                                        opacity: 0.7,
                                    }}
                                >
                                    Autonomous
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "1px",
                                    height: "clamp(20px, 2.5vw, 48px)",
                                    background: "rgba(255,255,255,0.15)",
                                }}
                            />
                            <div style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 34px)",
                                        fontWeight: 700,
                                        color: "#187E5F",
                                    }}
                                >
                                    24/7
                                </div>
                                <div
                                    style={{
                                        fontSize: "clamp(9px, 0.8vw, 14px)",
                                        opacity: 0.7,
                                    }}
                                >
                                    Availability
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Thesis text */}
                    <div style={{ flex: 1 }}>
                        <h1
                            style={{
                                fontSize: "clamp(24px, 3.5vw, 64px)",
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                marginBottom: "4%",
                            }}
                        >
                            The Future of Retail
                        </h1>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.2vw, 22px)",
                                opacity: 0.9,
                                lineHeight: 1.6,
                                marginBottom: "4%",
                            }}
                        >
                            Integrating Starbot is not simply adding another coffee amenity.
                            It is deploying a highly scalable, autonomous retail
                            infrastructure perfectly calibrated for Canary Wharf's
                            evolution into a smart, 24/7 mega-district.
                        </p>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.2vw, 22px)",
                                opacity: 0.9,
                                lineHeight: 1.6,
                                fontWeight: 600,
                            }}
                        >
                            We deliver guaranteed consistency, unparalleled spatial
                            efficiency, and continuous availability.
                        </p>
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
                    Value Proposition
                </div>
            </div>
        </div>
    );
}
