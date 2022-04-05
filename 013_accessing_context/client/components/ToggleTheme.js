import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <span>🌞</span>
      <span>🌓</span>
    </>
  );
};

export default ToggleTheme;
