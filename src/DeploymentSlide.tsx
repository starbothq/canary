import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

const zones = [
    {
        num: "01",
        location: "Transit Funnels",
        sub: "Jubilee & Elizabeth Line Concourses",
        play: "Speed Arbitrage.",
        detail: "Commuters order via the Starbot app while on the train. As they ascend the escalators, their customised coffee is crafted in 50 seconds.",
    },
    {
        num: "02",
        location: "Mega-Tower Lobbies",
        sub: "One Canada Square, 8 & 25 Canada Square",
        play: "24/7 Corporate Concierge.",
        detail: "When human-operated lobby cafes shut at 6 PM, Starbot remains online — capturing 100% of late-night revenue.",
    },
    {
        num: "03",
        location: "Sterile Innovation Zones",
        sub: "North Quay Life Sciences Campus",
        play: "Bio-Secure Hospitality.",
        detail: "Zero organic waste and automated UV/Ozone sterilisation make Starbot the only viable premium coffee solution near Level 3 wet labs.",
    },
    {
        num: "04",
        location: "Eco-Leisure Nodes",
        sub: "Crossrail Place & Eden Dock",
        play: "Architectural Integration.",
        detail: "Silent operation, 80% less energy, zero footprint — premium amenities without the visual or environmental pollution of a traditional F&B unit.",
    },
];

export function DeploymentSlide() {
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
                        Page 008
                    </span>
                </div>

                {/* Two-column layout */}
                <div
                    className="slide-two-col"
                    style={{ marginTop: "2%" }}
                >
                    {/* Left side: title */}
                    <div
                        style={{
                            flex: "0 0 35%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "clamp(11px, 1vw, 18px)",
                                opacity: 0.7,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "3%",
                            }}
                        >
                            Monetising the Estate's Infrastructure
                        </p>
                        <h1
                            style={{
                                fontSize: "clamp(24px, 3.2vw, 60px)",
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                            }}
                        >
                            Strategic
                            <br />
                            Deployment
                            <br />
                            <span style={{ color: "#187E5F" }}>Zones</span>
                        </h1>
                        <p
                            style={{
                                fontSize: "clamp(11px, 0.95vw, 18px)",
                                opacity: 0.75,
                                lineHeight: 1.5,
                                marginTop: "5%",
                                maxWidth: "90%",
                            }}
                        >
                            A Starbot kiosk requires only 25.3 sq ft, plug-and-play 220V power,
                            and connects seamlessly to Canary Wharf's 4G/5G smart-city telecom grid.
                        </p>
                    </div>

                    {/* Right side: 4 zone rows */}
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "clamp(8px, 1vw, 20px)",
                        }}
                    >
                        {zones.map((zone) => (
                            <div
                                key={zone.num}
                                className="liquid-glass"
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "clamp(10px, 1.5vw, 28px)",
                                    padding: "clamp(12px, 1.5vw, 28px) clamp(14px, 2vw, 36px)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "clamp(18px, 2vw, 38px)",
                                        fontWeight: 700,
                                        color: "#187E5F",
                                        lineHeight: 1,
                                        flexShrink: 0,
                                    }}
                                >
                                    {zone.num}
                                </span>
                                <div>
                                    <h3
                                        style={{
                                            fontSize: "clamp(13px, 1.3vw, 24px)",
                                            fontWeight: 700,
                                            marginBottom: "clamp(2px, 0.3vw, 6px)",
                                        }}
                                    >
                                        {zone.location}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "clamp(10px, 0.85vw, 15px)",
                                            opacity: 0.6,
                                            marginBottom: "clamp(3px, 0.4vw, 8px)",
                                        }}
                                    >
                                        {zone.sub}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "clamp(11px, 0.9vw, 16px)",
                                            opacity: 0.85,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        <span style={{ color: "#187E5F", fontWeight: 600, fontStyle: "italic" }}>
                                            {zone.play}
                                        </span>{" "}
                                        {zone.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                    Deployment Strategy
                </div>
            </div>
        </div>
    );
}
