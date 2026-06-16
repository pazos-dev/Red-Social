import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { BtnToggleTheme } from "./buttons/BtnToggleTheme";
import { LINKS as links } from "../store/links";
import BtnLogout from "./buttons/BtnLogout";
import BtnNewPost from "./buttons/BtnNewPost";
export const Sidebar = () => {
  return (
    <aside
      className="h-screen p-2 flex flex-col items-center bg-white 
         dark:bg-bg-dark transition-all duration-300"
    >
      <header className="self-start p-2 bg-amber-900 rounded-4xl text-amber-400">
        <h2 className="text-shadow-amber-100 text-shadow-2xs font-bold">{"</>"}</h2>
      </header>
      <nav className="flex-1 flex flex-col gap-2 items-center ">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({
              isActive,
            }) => `flex items-center gap-3 p-2 w-full justify-start
                        hover:bg-amber-400/10 rounded-r-2xl
                        dark:hover:text-amber-400
                        transition-all 
                        ${isActive ? "text-amber-400 " : ""}`}
          >
            <Icon icon={link.icon} fontSize={"1.3em"} />
            <span className="hidden sm:block">{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col gap-2 ">
        <BtnToggleTheme className={"justify-center"} />
        <BtnLogout />
        <BtnNewPost />
      </div>
    </aside>
  );
};
