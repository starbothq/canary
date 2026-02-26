import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";
import loc4 from "./images/location4.png";
import loc5 from "./images/location5.png";
import loc6 from "./images/location6.png";

export function LocationRendersSlide2() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#000" }}>
            <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 5 }} />

            <div className="slide-content" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "4%" }}>
                    <Logo />
                    <span style={{ fontSize: "clamp(12px, 1.05vw, 20px)", opacity: 0.8 }}>Page 006</span>
                </div>

                <h1 style={{ fontSize: "clamp(24px, 3.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, marginTop: "2%" }}>
                    Environmental <span style={{ color: "#187E5F" }}>Adaptability</span>
                </h1>

                <p style={{ fontSize: "clamp(13px, 1.05vw, 20px)", opacity: 0.7, marginTop: "2%", marginBottom: "3%" }}>
                    Flexible formats designed for varying spatial constraints and aesthetics.
                </p>

                <div style={{ flex: 1, display: "flex", gap: "2%", marginBottom: "4%", minHeight: 0 }}>
                    {[loc4, loc5, loc6].map((img, idx) => (
                        <div key={idx} style={{ flex: 1, borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
                            <img src={img} alt={`Location render ${idx + 4}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
