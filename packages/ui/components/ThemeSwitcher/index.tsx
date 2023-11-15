import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

interface ThemeSwitcherProps {
  /**
   * Current theme
   */
  value?: Theme;
  /**
   * Optional change handler
   */
  onChange?: (value: Theme) => void;
}

export function ThemeSwitcher({
  onChange,
  value = "light",
}: ThemeSwitcherProps): JSX.Element {
  const [isDark, setIsDark] = useState(value === "dark");
  const handleClick = (): void => {
    if (onChange) {
      onChange(isDark ? "light" : "dark");
    }
    setIsDark((preValue) => !preValue);
  };
  return (
    <button
      className="dark:text-white"
      data-cy="switch"
      onClick={handleClick}
      type="button"
    >
      {isDark ? <BsMoon size={24} /> : <BsSun size={24} />}
    </button>
  );
}
