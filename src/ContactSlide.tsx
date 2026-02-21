import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";
import { Mail, Phone, Globe } from "lucide-react";
import type { ReactNode } from "react";

function ContactItem({ icon, text, href }: { icon: ReactNode; text: string; href: string }) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(10px, 1vw, 16px)",
                color: "inherit",
                textDecoration: "none",
            }}
        >
            <div style={{ flexShrink: 0, color: "#187E5F" }}>{icon}</div>
            <span
                style={{
                    fontSize: "clamp(13px, 1.05vw, 20px)",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    transition: "border-color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
            >
                {text}
            </span>
        </a>
    );
}

export function ContactSlide() {
    const iconSize = "clamp(20px, 1.6vw, 32px)";

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
                        Page 008
                    </span>
                </div>

                {/* Main content */}
                <div
                    style={{
                        flex: 1,
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
                            marginBottom: "1.5%",
                        }}
                    >
                        The Opportunity is Now
                    </p>
                    <h1
                        style={{
                            fontSize: "clamp(24px, 3.5vw, 64px)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.05,
                        }}
                    >
                        Partner With
                        <br />
                        the <span style={{ color: "#187E5F" }}>Future</span>
                    </h1>

                    <p
                        style={{
                            fontSize: "clamp(13px, 1.05vw, 20px)",
                            opacity: 0.9,
                            maxWidth: "min(42%, 600px)",
                            marginTop: "3%",
                            lineHeight: 1.5,
                        }}
                    >
                        Whether you are a commercial landlord looking to monetise un-leasable
                        space, a corporate facility manager wanting to upgrade premium 24/7
                        amenities, or an investor ready to scale a proven, zero-labour business
                        model — Starbot is your operational partner.
                    </p>

                    <p
                        style={{
                            fontSize: "clamp(13px, 1.05vw, 20px)",
                            opacity: 0.75,
                            maxWidth: "min(42%, 600px)",
                            marginTop: "2%",
                            lineHeight: 1.5,
                            fontStyle: "italic",
                        }}
                    >
                        Let's discuss how we can integrate Starbot into your specific environment
                        and unlock your spatial yield.
                    </p>

                    {/* Contact items */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "clamp(10px, 1vw, 19px)",
                            marginTop: "4%",
                        }}
                    >
                        <ContactItem
                            icon={
                                <Mail
                                    style={{ width: iconSize, height: iconSize }}
                                    strokeWidth={1.5}
                                />
                            }
                            text="hello@starbot.co.uk"
                            href="mailto:hello@starbot.co.uk"
                        />
                        <ContactItem
                            icon={
                                <Phone
                                    style={{ width: iconSize, height: iconSize }}
                                    strokeWidth={1.5}
                                />
                            }
                            text="+44 7718 123385"
                            href="tel:+447718123385"
                        />
                        <ContactItem
                            icon={
                                <Globe
                                    style={{ width: iconSize, height: iconSize }}
                                    strokeWidth={1.5}
                                />
                            }
                            text="starbot.co.uk"
                            href="https://starbot.co.uk"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
