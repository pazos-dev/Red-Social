import { Icon } from "@iconify/react";
import { useThemeStore } from "../../store/ThemeStore";

export const BtnToggleTheme = ({className}) => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div 
      className={`hover:bg-amber-300/10  text-blackjustify-start  cursor-pointer flex items-center gap-2 rounded-2xl
      dark:text-white dark:hover:text-amber-400
      transition-all duration-300
      select-none
      max-w-10
      sm:max-w-full
      ${className}`}

      onClick={setTheme}
    >
      <Icon
        icon={theme === "light" ? "entypo:light-up" : "circum:dark"}
        fontSize={"30px"}
      />
      <span className="hidden sm:block">{theme === "light" ? "claro" : "oscuro"}</span>
    </div>
  );
};
