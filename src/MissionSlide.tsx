import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

export function MissionSlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 100%)",
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
                        Page 001
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
                    The Future of
                    <br />
                    Frictionless Hospitality
                </h1>

                {/* Two-column layout */}
                <div
                    className="slide-two-col"
                    style={{ marginTop: "3.5%" }}
                >
                    {/* Left column: Mission text + quote */}
                    <div style={{ flex: "0 0 50%" }}>
                        <p
                            style={{
                                fontSize: "clamp(13px, 1.05vw, 20px)",
                                opacity: 0.9,
                                lineHeight: 1.6,
                            }}
                        >
                            At Starbot Coffee, we are engineering the "Fourth Wave" of coffee.
                            Our mission is to seamlessly merge the artisanal tradition of British
                            coffee culture with the absolute efficiency and zero-friction
                            convenience of modern robotics.
                        </p>

                        <blockquote
                            style={{
                                fontSize: "clamp(14px, 1.5vw, 28px)",
                                fontWeight: 600,
                                fontStyle: "italic",
                                lineHeight: 1.4,
                                marginTop: "5%",
                                paddingLeft: "clamp(16px, 1.5vw, 28px)",
                                borderLeft: "3px solid #187E5F",
                                color: "#187E5F",
                            }}
                        >
                            "We deliver the premium craft of an independent roaster with the
                            unyielding scale, speed, and profitability of a high-tech platform."
                        </blockquote>

                        <p
                            style={{
                                fontSize: "clamp(11px, 0.9vw, 16px)",
                                opacity: 0.6,
                                marginTop: "3%",
                                lineHeight: 1.5,
                            }}
                        >
                            Founded in London by a leadership team with deep roots in fiscal
                            compliance and SME infrastructure, Starbot is built on financial
                            discipline, not just technological novelty.
                        </p>
                    </div>

                    {/* Right column: Stats */}
                    <div
                        style={{
                            flex: "0 0 30%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "clamp(16px, 2vw, 40px)",
                            justifyContent: "center",
                        }}
                    >
                        <StatBlock
                            value="Fully"
                            unit="Autonomous"
                            label="Bionic Retail Ecosystem"
                        />
                        <div
                            style={{
                                width: "60%",
                                height: "1px",
                                background: "rgba(255,255,255,0.15)",
                            }}
                        />
                        <StatBlock
                            value="2.35"
                            unit="m²"
                            label="Entire operational footprint"
                        />
                        <div
                            style={{
                                width: "60%",
                                height: "1px",
                                background: "rgba(255,255,255,0.15)",
                            }}
                        />
                        <StatBlock
                            value="50–60"
                            unit="sec"
                            label="Barista-quality beverage delivery"
                        />
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
                    Who We Are
                </div>
            </div>
        </div>
    );
}

function StatBlock({ value, unit, label }: { value: string; unit: string; label: string }) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "clamp(4px, 0.5vw, 10px)",
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
                    {value}
                </span>
                <span
                    style={{
                        fontSize: "clamp(14px, 1.4vw, 26px)",
                        fontWeight: 600,
                        opacity: 0.9,
                    }}
                >
                    {unit}
                </span>
            </div>
            <p
                style={{
                    fontSize: "clamp(11px, 0.9vw, 16px)",
                    opacity: 0.7,
                    marginTop: "clamp(2px, 0.3vw, 6px)",
                }}
            >
                {label}
            </p>
        </div>
    );
}
