import {
    type ReactElement,
    useState,
    useEffect,
    useCallback,
    useRef,
} from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Monitor } from "lucide-react";
import { VideoBackground } from "./VideoBackground";
import { Logo } from "./Logo";

interface PresentationProps {
    slides: ReactElement[];
}

export function Presentation({ slides }: PresentationProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const totalSlides = slides.length;

    // Detect mobile / small screens
    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth < 1024);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const showControls = useCallback(() => {
        setControlsVisible(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
            setControlsVisible(false);
        }, 3000);
    }, []);

    const goNext = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
        showControls();
    }, [totalSlides, showControls]);

    const goPrev = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        showControls();
    }, [showControls]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowRight":
                case "ArrowDown":
                case " ":
                    e.preventDefault();
                    goNext();
                    break;
                case "ArrowLeft":
                case "ArrowUp":
                    e.preventDefault();
                    goPrev();
                    break;
                case "f":
                case "F":
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case "Escape":
                    if (document.fullscreenElement) {
                        document.exitFullscreen?.();
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goNext, goPrev, toggleFullscreen]);

    // Fullscreen change listener
    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleChange);
        return () => document.removeEventListener("fullscreenchange", handleChange);
    }, []);

    // Mouse move → show controls
    useEffect(() => {
        const handleMouseMove = () => showControls();
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [showControls]);

    // Initial hide timeout
    useEffect(() => {
        hideTimeoutRef.current = setTimeout(() => {
            setControlsVisible(false);
        }, 3000);
        return () => {
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, []);

    // Mobile / small screen message
    if (isMobile) {
        return (
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                }}
            >
                <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)",
                        zIndex: 5,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 10%",
                        textAlign: "center",
                        gap: "20px",
                    }}
                >
                    <div style={{ position: "absolute", top: "6%", left: "6%" }}>
                        <Logo />
                    </div>

                    <Monitor
                        size={48}
                        strokeWidth={1.5}
                        style={{ color: "#187E5F", marginBottom: "8px" }}
                    />
                    <h2
                        style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                    >
                        Please use desktop
                        <br />
                        to view this presentation
                    </h2>
                    <p
                        style={{
                            fontSize: "14px",
                            opacity: 0.6,
                            lineHeight: 1.5,
                            maxWidth: "300px",
                        }}
                    >
                        This presentation is optimised for desktop screens. Please resize your
                        browser window or switch to a larger device.
                    </p>
                    <a
                        href="https://starbot.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: "12px",
                            opacity: 0.5,
                            marginTop: "8px",
                            color: "#187E5F",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(24,126,95,0.3)",
                        }}
                    >
                        starbot.co.uk
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                background: "#000",
            }}
        >
            {/* Slides */}
            {slides.map((slide, index) => {
                let translateScale = 1;
                let opacity = 0;

                if (index === currentSlide) {
                    translateScale = 1;
                    opacity = 1;
                } else if (index < currentSlide) {
                    translateScale = 0.95;
                    opacity = 0;
                } else {
                    translateScale = 1.05;
                    opacity = 0;
                }

                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            inset: 0,
                            transition: "opacity 500ms ease-in-out, transform 500ms ease-in-out",
                            opacity,
                            transform: `scale(${translateScale})`,
                            pointerEvents: index === currentSlide ? "auto" : "none",
                            overflowY: "auto",
                        }}
                    >
                        {slide}
                    </div>
                );
            })}

            {/* Top-right keyboard hint */}
            <div
                style={{
                    position: "absolute",
                    top: "clamp(16px, 2%, 32px)",
                    right: "clamp(16px, 2.5%, 48px)",
                    fontSize: "11px",
                    color: "rgba(255, 255, 255, 0.4)",
                    zIndex: 50,
                    transition: "opacity 300ms ease",
                    opacity: controlsVisible ? 1 : 0,
                    pointerEvents: "none",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
            >
                ← → Navigate · F Fullscreen
            </div>

            {/* Bottom navigation bar */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "clamp(12px, 1.5%, 24px) clamp(16px, 2.5%, 48px)",
                    transition: "opacity 300ms ease",
                    opacity: controlsVisible ? 1 : 0,
                    pointerEvents: controlsVisible ? "auto" : "none",
                }}
            >
                {/* Left: slide counter */}
                <span
                    style={{
                        fontSize: "13px",
                        color: "rgba(255, 255, 255, 0.5)",
                        fontVariantNumeric: "tabular-nums",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        minWidth: "48px",
                    }}
                >
                    {currentSlide + 1} / {totalSlides}
                </span>

                {/* Center: progress dots */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                    }}
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentSlide(index);
                                showControls();
                            }}
                            style={{
                                width: index === currentSlide ? "24px" : "6px",
                                height: "6px",
                                borderRadius: "3px",
                                background:
                                    index === currentSlide
                                        ? "rgba(255, 255, 255, 0.9)"
                                        : "rgba(255, 255, 255, 0.3)",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 300ms ease",
                                padding: 0,
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Right: prev/next + fullscreen */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        minWidth: "48px",
                        justifyContent: "flex-end",
                    }}
                >
                    <NavButton
                        onClick={goPrev}
                        disabled={currentSlide === 0}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={16} />
                    </NavButton>
                    <NavButton
                        onClick={goNext}
                        disabled={currentSlide === totalSlides - 1}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={16} />
                    </NavButton>

                    {/* Divider */}
                    <div
                        style={{
                            width: "1px",
                            height: "16px",
                            background: "rgba(255, 255, 255, 0.2)",
                            margin: "0 4px",
                        }}
                    />

                    <NavButton
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    >
                        {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
                    </NavButton>
                </div>
            </div>
        </div>
    );
}

function NavButton({
    children,
    onClick,
    disabled,
    ...props
}: {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    "aria-label"?: string;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                border: "none",
                cursor: disabled ? "default" : "pointer",
                color: hovered && !disabled
                    ? "rgba(255, 255, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.5)",
                background: hovered && !disabled
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                transition: "all 200ms ease",
                opacity: disabled ? 0.3 : 1,
                padding: 0,
            }}
            {...props}
        >
            {children}
        </button>
    );
}
