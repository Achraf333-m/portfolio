import { ThemeProvider } from "next-themes";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <MouseTrail className="hidden md:inline-block" strokeColor={"#B59410"} lineWidthStart={20} lineDuration={40} lag={.95}/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}


    
 