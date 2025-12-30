import React, { useEffect, useRef } from "react";

const Lastfi = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to autoplay audio
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.log("Autoplay blocked by browser");
      }
    };
    playAudio();
  }, []);

  return (
    <div style={styles.page}>
      {/* Background Video */}
      <video
        src="/fi.mp4"
        autoPlay
        loop
        muted        // REQUIRED for mobile autoplay
        playsInline
        style={styles.video}
      />

      {/* Dark overlay */}
      <div style={styles.overlay} />

      

      {/* Background Audio (auto attempt) */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        autoPlay
        loop
        preload="auto"
      />
    </div>
  );
};

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
 
  content: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 16,

    // Android default-ish width
    maxWidth: 420,
    margin: "0 auto",
  },

};

export default Lastfi;