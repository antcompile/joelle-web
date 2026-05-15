import { useEffect, useRef, useState } from 'react';

interface Props {
  imageSrc: string;
  hint?: string;
}

declare global {
  interface Window {
    pannellum: any;
  }
}

export default function PanoramaViewer({ imageSrc, hint }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const cssId = 'pannellum-css';
    const jsId = 'pannellum-js';

    function initViewer() {
      if (!containerRef.current || !window.pannellum) return;
      viewerRef.current = window.pannellum.viewer(containerRef.current, {
        type: 'equirectangular',
        panorama: imageSrc,
        autoLoad: true,
        autoRotate: -2,
        autoRotateInactivityDelay: 3000,
        showControls: false,
        compass: false,
        hfov: 100,
        pitch: 0,
        yaw: 0,
        minHfov: 50,
        maxHfov: 120,
        friction: 0.15,
        mouseZoom: true,
        keyboardZoom: true,
        draggable: true,
        disableKeyboardCtrl: false,
        touchPanSpeedCoeffFactor: 1,
      });

      viewerRef.current.on('load', () => setLoaded(true));
      viewerRef.current.on('mousedown', () => setInteracted(true));
      viewerRef.current.on('touchstart', () => setInteracted(true));
    }

    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
      document.head.appendChild(link);
    }

    if (!document.getElementById(jsId)) {
      const script = document.createElement('script');
      script.id = jsId;
      script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
      script.onload = initViewer;
      document.head.appendChild(script);
    } else if (window.pannellum) {
      initViewer();
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [imageSrc]);

  function toggleFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  }

  return (
    <div className="relative w-full" style={{ height: 'clamp(400px, 65vh, 800px)' }}>
      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--surface-alt)]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-[var(--text-muted)] font-sans">Chargement...</p>
          </div>
        </div>
      )}

      {/* Drag hint */}
      {loaded && !interacted && hint && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-sans tracking-wide">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 11V6.5a2.5 2.5 0 0 0-5 0V12" />
              <path d="M13 11.5V9a2.5 2.5 0 0 0-5 0v3.5" />
              <path d="M8 14V8.5a2.5 2.5 0 0 0-5 0V17a7 7 0 0 0 14 0v-3" />
            </svg>
            {hint}
          </div>
        </div>
      )}

      {/* Fullscreen button */}
      {loaded && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors"
          aria-label="Toggle fullscreen"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      )}

      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
