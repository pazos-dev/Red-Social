import { Icon } from "@iconify/react";

export default function BtnNewPost() {
   return (
     
    <div className="hover:bg-amber-300/50 bg-amber-300 text-black cursor-pointer flex gap-2 justify-center items-center rounded-xl p-1
      dark:text-white dark:hover:text-amber-400 dark:bg-amber-900
      transition-all duration-300
      select-none
      max-w-10
      sm:max-w-full
      ">
       <Icon icon={"material-symbols:add"} />
       <span className="hidden sm:block">Nueva Publicacion</span>
     </div>
  )
}
