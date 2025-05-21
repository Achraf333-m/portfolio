"use client";

import { useEffect, useState, useCallback } from "react";
import { ThemeProvider } from "next-themes";
import { loadSlim } from "@tsparticles/slim";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import "@/styles/globals.css";
import { ScrollTop } from "@/components/scrollTop";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles Loaded", container);
  }, []);

  // to make sure page scrolls to top after clicking on cta
  const router = useRouter();

  useEffect(() => {
    const wrapper = document.getElementById("scroll-window");

    const handleRouteChange = () => {
      if (typeof window != "undefined") {
        if (wrapper) {
          wrapper.scrollTo({ top: 0, behavior: "auto" })
        }
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 5 },
        repulse: { distance: 50, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#F89700" },
      links: {
        color: "#F89700",
        distance: 300,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: { value: 0.7 },
      shape: { type: "square" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <MouseTrail
        className="hidden md:inline-block"
        strokeColor="#F89700"
        lineWidthStart={2}
        lineDuration={20}
        lag={0.6}
      />

      {/* App layout */}
      {/* <div
        className="relative min-h-screen w-full bg-gradient-to-br 
        from-[#f5f5f5] via-[#eaeaea] to-[#dcdcdc]
        dark:from-[#1a1a1a] dark:via-[#202020] dark:to-[#2c2c2c]"
      > */}
      <div id="scroll-window"
        className="relative min-h-screen w-full bg-gradient-to-br 
  from-[#f8f8f8cc] via-[#eaeaea99] to-[#dcdcdccc] 
  dark:from-[#1e1e1ecc] dark:via-[#2a2a2a99] dark:to-[#3a3a3acc]
 "
      >
        {/* Background effects */}
        {init && (
          <Particles
            id="tsparticles"
            className=""
            // particlesLoaded={particlesLoaded}
            options={particlesOptions}
          />
        )}
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
