import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
