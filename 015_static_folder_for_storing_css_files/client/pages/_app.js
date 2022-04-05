import { ThemeProvider } from "../context/theme";
// import "antd/dist/antd.css";
// import "antd/dist/antd.dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
