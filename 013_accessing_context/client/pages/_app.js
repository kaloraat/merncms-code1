import { ThemeProvider } from "../context/theme";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
