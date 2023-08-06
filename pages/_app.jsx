import { ThemeProvider } from "next-themes";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider enableSystem={false} defaultTheme = 'light' attribute="class">
      <MouseTrail className="hidden md:inline-block" strokeColor={"#B59410"} lineWidthStart={20} lineDuration={100} lag={.9}/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
}


    
 