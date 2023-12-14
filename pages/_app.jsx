import { ThemeProvider } from "next-themes";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider enableSystem={false} defaultTheme = 'dark' attribute="class">
      <MouseTrail className="hidden md:inline-block" strokeColor={"#c89700"} lineWidthStart={10} lineDuration={100} lag={.95}/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
}


    
 