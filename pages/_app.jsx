import { useEffect, useState, useCallback } from "react";
import { ThemeProvider } from "next-themes";
import { loadSlim } from "@tsparticles/slim";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles Loaded", container);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "#0d0d0d" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ef342e" },
      links: {
        color: "#0f00ff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {init && (
        <Particles
          id="tsparticles"
          className="fixed top-0 left-0 w-full h-full -z-[100]"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
      )}

      <MouseTrail
        className="hidden md:inline-block"
        strokeColor="#F89700"
        lineWidthStart={2}
        lineDuration={20}
        lag={0.6}
      />
      <div className="bg-white/90 dark:bg-black/90">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
