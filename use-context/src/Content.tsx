import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const Content = () => {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  const { isDark, setIsDark } = themeContext;
  const user = userContext;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: isDark ? "black" : "white",
        }}
      />
      <button onClick={toggleTheme}>{user}</button>
    </div>
  );
};

export default Content;
