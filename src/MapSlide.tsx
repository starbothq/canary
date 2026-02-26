import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";
import mapImg from "./images/map.png";

export function MapSlide() {
    const locations = [
        "JP Morgan HQ", "Revolut", "Level39", "HSBC Canary Wharf Canada Place",
        "HSBC Canary Wharf Jubilee Place", "Citibank UK", "Barclays Investment Bank",
        "Morgan Stanley", "KPMG Canary Wharf", "Moody's", "One Canada Square",
        "Canary Wharf Station ( Elizabeth Line )", "Canary Wharf Station",
        "Canary Wharf Jubilee Line Station", "Heron Quays Station", "Canary Wharf",
        "Cabot Place", "Jubilee Place", "Canada Place", "London Doctors Clinic Canary Wharf",
        "London Canary Wharf (Crossrail Place) Bup...", "Nuffield Health Wharf Medical Centre",
        "LycaHealth – Canary Wharf, East London", "Canary Wharf Clinic",
        "Wood Wharf in Canary Wharf", "Landmark Pinnacle", "Newfoundland (Vertus)",
        "Crossrail Place Roof Garden", "Pergola on the Wharf"
    ];

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#000" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 5 }} />

            <div className="slide-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "4%" }}>
                    <Logo />
                    <span style={{ fontSize: "clamp(12px, 1.05vw, 20px)", opacity: 0.8 }}>Page 004</span>
                </div>

                <div style={{ flex: 1, display: "flex", marginTop: "3%", gap: "5%", minHeight: 0 }}>
                    {/* Left Col */}
                    <div style={{ flex: "0 0 35%", display: "flex", flexDirection: "column" }}>
                        <h1 style={{ fontSize: "clamp(24px, 3.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                            Target <span style={{ color: "#187E5F" }}>Locations</span>
                        </h1>
                        <p style={{ fontSize: "clamp(13px, 1.05vw, 20px)", opacity: 0.7, marginTop: "5%", marginBottom: "5%", lineHeight: 1.5 }}>
                            Strategic placement across high-footfall financial, transit, and residential hubs in Canary Wharf.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", overflowY: "auto", paddingRight: "10px", flex: 1, minHeight: 0 }}>
                            {locations.map((loc, i) => (
                                <div key={i} style={{ fontSize: "clamp(10px, 0.8vw, 14px)", opacity: 0.8, display: "flex", alignItems: "flex-start", gap: "6px" }}>
                                    <span style={{ color: "#187E5F", flexShrink: 0 }}>•</span>
                                    <span style={{ lineHeight: 1.3 }}>{loc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Col */}
                    <div style={{ flex: 1, position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "4%" }}>
                        <img src={mapImg} alt="Canary Wharf Map" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    </div>
                </div>

                <div style={{ textAlign: "right", paddingBottom: "4%", fontSize: "clamp(12px, 1.05vw, 20px)", opacity: 0.6 }}>
                    Estate Saturation
                </div>
            </div>
        </div>
    );
}
