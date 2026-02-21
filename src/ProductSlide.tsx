import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";
import { Scan, Zap, UserX, Palette, Leaf } from "lucide-react";
import type { ReactNode } from "react";

const cards = [
    {
        icon: <Scan style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} strokeWidth={1.5} />,
        title: "Hyper-Efficient Footprint",
        description: "Operates within just 2.35 sqm (25 sq ft). Monetises \"dead space\" where traditional retail cannot fit.",
    },
    {
        icon: <Zap style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} strokeWidth={1.5} />,
        title: "Unmatched Velocity",
        description: "Barista-quality beverages in 50–60 seconds. 5 cups simultaneously — zero queue abandonment.",
    },
    {
        icon: <UserX style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} strokeWidth={1.5} />,
        title: "Zero Labour Bottlenecks",
        description: "100% immune to the UK's hospitality talent gap, staff turnover, and £11.44/hr minimum wage pressure.",
    },
    {
        icon: <Palette style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} strokeWidth={1.5} />,
        title: "Infinite Customisation",
        description: "50+ drink parameters — body, sweetness, ice, flavour. Specialty coffee, matcha, and more.",
    },
    {
        icon: <Leaf style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} strokeWidth={1.5} />,
        title: "\"Green Heart\" Sustainability",
        description: "80% less standby energy, zero organic waste, automated UV/Ozone sterilisation, FSA-compliant.",
    },
];

function GlassCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
    return (
        <div
            className="liquid-glass"
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "clamp(16px, 2.5vw, 48px)",
                minHeight: 0,
            }}
        >
            <div style={{ marginBottom: "clamp(10px, 1.2vw, 24px)" }}>{icon}</div>
            <h3
                style={{
                    fontSize: "clamp(14px, 1.6vw, 32px)",
                    fontWeight: 700,
                    marginBottom: "clamp(4px, 0.6vw, 12px)",
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: "clamp(11px, 0.95vw, 18px)",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.4,
                }}
            >
                {description}
            </p>
        </div>
    );
}

export function ProductSlide() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 100%)",
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
                        Page 002
                    </span>
                </div>

                {/* Title section */}
                <div style={{ textAlign: "center", marginTop: "2.5%" }}>
                    <p
                        style={{
                            fontSize: "clamp(11px, 1vw, 18px)",
                            opacity: 0.7,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Core Strengths & Capabilities
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
                        Engineered for Performance
                    </h1>
                </div>

                {/* Card grid */}
                <div
                    className="slide-card-col"
                    style={{
                        gap: "clamp(8px, 1.3vw, 25px)",
                        marginTop: "2.5%",
                        paddingBottom: "4%",
                    }}
                >
                    {/* Top row: 3 cards */}
                    <div
                        className="slide-card-row"
                        style={{ gap: "clamp(8px, 1.4vw, 27px)" }}
                    >
                        {cards.slice(0, 3).map((card, i) => (
                            <GlassCard key={i} {...card} />
                        ))}
                    </div>

                    {/* Bottom row: 2 cards */}
                    <div
                        className="slide-card-row"
                        style={{ gap: "clamp(8px, 1.3vw, 25px)" }}
                    >
                        {cards.slice(3, 5).map((card, i) => (
                            <GlassCard key={i + 3} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
