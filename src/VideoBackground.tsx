import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoBackgroundProps {
    src: string;
}

export function VideoBackground({ src }: VideoBackgroundProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | null = null;

        if (Hls.isSupported()) {
            hls = new Hls({ enableWorker: true });
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => { });
            });
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            // Safari native HLS fallback
            video.src = src;
            video.addEventListener("loadedmetadata", () => {
                video.play().catch(() => { });
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
    );
}
