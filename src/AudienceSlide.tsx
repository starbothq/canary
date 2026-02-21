import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";
import { Train, Building2, Microscope, Trees } from "lucide-react";
import type { ReactNode } from "react";

const personas = [
    {
        icon: <Train style={{ width: "clamp(24px, 2.2vw, 42px)", height: "clamp(24px, 2.2vw, 42px)" }} strokeWidth={1.5} />,
        title: "The Multi-Modal Commuter",
        description: "Elizabeth & Jubilee Line commuters who abandon any queue over 3 minutes. They demand frictionless speed — order on the train, grab on the escalator.",
    },
    {
        icon: <Building2 style={{ width: "clamp(24px, 2.2vw, 42px)", height: "clamp(24px, 2.2vw, 42px)" }} strokeWidth={1.5} />,
        title: "The Global Corporate Elite",
        description: "Investment bankers & executives across global time zones, needing premium barista-quality caffeine at 3 AM when traditional lobby cafes are closed.",
    },
    {
        icon: <Microscope style={{ width: "clamp(24px, 2.2vw, 42px)", height: "clamp(24px, 2.2vw, 42px)" }} strokeWidth={1.5} />,
        title: "The Bioscience Innovator",
        description: "Researchers in the 823k sq ft North Quay campus, working in sterile environments where traditional F&B waste is a major operational liability.",
    },
    {
        icon: <Trees style={{ width: "clamp(24px, 2.2vw, 42px)", height: "clamp(24px, 2.2vw, 42px)" }} strokeWidth={1.5} />,
        title: "The Urban Resident",
        description: "3,600 new Wood Wharf homes & eco-tourists at Eden Dock. They prioritise sustainable, zero-waste, tech-forward retail integrated into their living spaces.",
    },
];

function PersonaCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
    return (
        <div
            className="liquid-glass"
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "clamp(16px, 2.5vw, 48px)",
                minHeight: 0,
            }}
        >
            <div style={{ marginBottom: "clamp(8px, 1vw, 20px)" }}>{icon}</div>
            <h3
                style={{
                    fontSize: "clamp(14px, 1.5vw, 28px)",
                    fontWeight: 700,
                    marginBottom: "clamp(4px, 0.6vw, 12px)",
                    color: "#187E5F",
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: "clamp(11px, 0.95vw, 18px)",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.45,
                }}
            >
                {description}
            </p>
        </div>
    );
}

export function AudienceSlide() {
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
                        Page 004
                    </span>
                </div>

                {/* Title */}
                <div style={{ textAlign: "center", marginTop: "2.5%" }}>
                    <p
                        style={{
                            fontSize: "clamp(11px, 1vw, 18px)",
                            opacity: 0.7,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Our Target Audiences
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
                        The 24/7 Demand Cycle
                    </h1>
                </div>

                {/* 2×2 card grid */}
                <div
                    className="slide-card-col"
                    style={{
                        gap: "clamp(8px, 1.3vw, 25px)",
                        marginTop: "2.5%",
                        paddingBottom: "4%",
                    }}
                >
                    <div
                        className="slide-card-row"
                        style={{ gap: "clamp(8px, 1.4vw, 27px)" }}
                    >
                        {personas.slice(0, 2).map((p, i) => (
                            <PersonaCard key={i} {...p} />
                        ))}
                    </div>
                    <div
                        className="slide-card-row"
                        style={{ gap: "clamp(8px, 1.4vw, 27px)" }}
                    >
                        {personas.slice(2, 4).map((p, i) => (
                            <PersonaCard key={i + 2} {...p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
