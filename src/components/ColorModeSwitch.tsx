import { useState, useEffect } from "react";

export default function ColorModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
  return (
    <div className = "flex flex-row">
      <button
        type="button"
        onClick={toggleTheme}
        className={`relative inline-flex h-6 w-11 mr-3 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-green focus:ring-offset-2 ${
          isDarkMode ? "bg-indigo-600" : "bg-gray-300"
        }`}
        role="switch"
        aria-checked={isDarkMode}
      >
        <span className="sr-only">Toggle dark mode</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out shadow-md ${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <div>Dark Mode</div>
    </div>
  );
  };

