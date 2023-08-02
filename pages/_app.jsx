import { ThemeProvider } from "next-themes";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <MouseTrail strokeColor={"#B59410"} lineWidthStart="20" lineDuration="40"/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}


    
 