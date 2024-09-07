import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
