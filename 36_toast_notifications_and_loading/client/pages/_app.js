import { ThemeProvider } from "../context/theme";
// import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";
import TopNav from "../components/TopNav";
import "../public/css/styles.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <TopNav />
      <Toaster />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
