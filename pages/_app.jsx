import { ThemeProvider } from "next-themes";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
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
      <div className="wrapper">
        <div
          className="bg-image"
          style={{ backgroundImage: "url('/background_8.png')" }}
        />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
