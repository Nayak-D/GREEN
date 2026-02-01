// Place your video file in the public directory, e.g., public/intro.mp4
// Example usage: <VideoBackground />
import React, { useRef, useEffect, useState } from "react";

const VideoBackground = () => {
    const videoRef = useRef(null);
    const [fallback, setFallback] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onerror = () => {
                setFallback(true);
            };
        }
    }, []);

    return (
        <>
            {!fallback ? (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ pointerEvents: "none", background: "#000" }}
                    poster="/placeholder.svg"
                >
                    <source src="/intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ pointerEvents: "none", background: "#000" }}
                    poster="/placeholder.svg"
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {fallback && (
                <div style={{ position: 'absolute', top: 20, left: 20, color: 'red', zIndex: 1000, background: 'white', padding: 8, borderRadius: 4 }}>
                    Could not load intro.mp4. Showing sample video.<br />
                    Please check your intro.mp4 file format and location.
                </div>
            )}
        </>
    );
};

export default VideoBackground;
