import { ThemeProvider } from "../context/theme";
// import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";
import TopNav from "../components/TopNav";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <TopNav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
