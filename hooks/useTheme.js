import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
    const [isDarkMode, setDarkMode] = useContext(ThemeContext)

    return [isDarkMode, setDarkMode];
}