import { useEffect, useState } from "react";

const darkTheme = <i className="bi bi-moon-fill"></i>;

const lightTheme = <i className="bi bi-sun-fill"></i>;

const ThemeIcon = () => {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="align-self-center">
      <button id="dropdown-theme" type="button" onClick={() => handleTheme()}>
        {theme === "light" ? lightTheme : darkTheme}
      </button>
    </div>
  );
};

export default ThemeIcon;
