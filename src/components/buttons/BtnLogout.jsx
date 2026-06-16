import { Icon } from "@iconify/react";

export default function BtnLogout() {
  return (
     <div className="hover:bg-amber-300/10  text-black cursor-pointer flex justify-start items-center gap-2 rounded-2xl
      dark:text-white dark:hover:text-amber-400
      transition-all duration-300
      select-none
      ">
        <Icon icon={"material-symbols:login"} fontSize={"30px"}/>
        <span className="hidden sm:block">Cerrar Session</span>
    </div>
  )
}
