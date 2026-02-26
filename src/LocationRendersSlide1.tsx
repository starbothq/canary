import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";
import loc1 from "./images/location1.png";
import loc2 from "./images/location2.png";
import loc3 from "./images/location3.png";

export function LocationRendersSlide1() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#000" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 5 }} />

            <div className="slide-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "4%" }}>
                    <Logo />
                    <span style={{ fontSize: "clamp(12px, 1.05vw, 20px)", opacity: 0.8 }}>Page 005</span>
                </div>

                <h1 style={{ fontSize: "clamp(24px, 3.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginTop: "2%" }}>
                    Architectural <span style={{ color: "#187E5F" }}>Integration</span>
                </h1>

                <p style={{ fontSize: "clamp(13px, 1.05vw, 20px)", opacity: 0.7, marginTop: "2%", marginBottom: "3%" }}>
                    Seamless blend into premium environments and high-traffic areas.
                </p>

                <div style={{ flex: 1, display: "flex", gap: "2%", marginBottom: "4%", minHeight: 0 }}>
                    {[loc1, loc2, loc3].map((img, idx) => (
                        <div key={idx} style={{ flex: 1, borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
                            <img src={img} alt={`Location render ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "right", paddingBottom: "4%", fontSize: "clamp(12px, 1.05vw, 20px)", opacity: 0.6 }}>
                    Real-world Placements
                </div>
            </div>
        </div>
    );
}
