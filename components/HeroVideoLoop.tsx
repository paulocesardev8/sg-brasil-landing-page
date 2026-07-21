"use client";
import { useRef, useEffect } from "react";

type Props = {
  videos: string[];
  poster?: string;
  className?: string;
};

export default function HeroVideoLoop({ videos, poster, className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // iOS exige muted programaticamente antes do play
    el.muted = true;
    el.defaultMuted = true;

    let jaTocou = false;

    const tentarTocar = () => {
      if (jaTocou) return;
      const p = el.play();
      if (p !== undefined) {
        p.then(() => {
          jaTocou = true;
          removerListeners();
        }).catch(() => {
          // Silencia — vai tentar de novo em user interaction
        });
      }
    };

    const onInteracao = () => {
      tentarTocar();
    };

    const removerListeners = () => {
      window.removeEventListener("touchstart", onInteracao);
      window.removeEventListener("click", onInteracao);
      window.removeEventListener("scroll", onInteracao);
      document.removeEventListener("visibilitychange", onVisibility);
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") tentarTocar();
    };

    // Tentativa 1: no mount
    tentarTocar();

    // Tentativa 2: quando o vídeo carregar
    const onLoaded = () => tentarTocar();
    el.addEventListener("loadeddata", onLoaded);
    el.addEventListener("canplay", onLoaded);

    // Tentativa 3: em qualquer interação do usuário (fallback pra iOS Low Power Mode)
    window.addEventListener("touchstart", onInteracao, { passive: true });
    window.addEventListener("click", onInteracao);
    window.addEventListener("scroll", onInteracao, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      el.removeEventListener("loadeddata", onLoaded);
      el.removeEventListener("canplay", onLoaded);
      removerListeners();
    };
  }, []);

  const src = videos[0];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        disablePictureInPicture
        controls={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
