import { ThemeProvider } from "next-themes";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import "@/styles/globals.css";
import { useEffect, useState } from "react";



export default function MyApp({ Component, pageProps }) {

  
  useEffect(() => {
    // define on mount
    function setViewportHeight() {
      // dynamically calculating 1vh here, which is just (viewport * 1% because 1vh is 1% of 100vh)
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // run on mount
    setViewportHeight();

    // listen to resize event
    window.addEventListener('resize', setViewportHeight);

    // cleanup
    return () => window.removeEventListener('resize', setViewportHeight);
  }, [])

  return (
    <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
      <MouseTrail
        className="hidden md:inline-block"
        strokeColor={"#F89700"}
        lineWidthStart={2}
        lineDuration={20}
        lag={0.6}
      />
      {/* for mobile/tablet, calculate real viewport length when resized, so that background doesn't "jump" */}
      <div className="bg-container h-[calc(var(--vh, 1vh)*100)]">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}