import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar"

export const MainLayout = () => {
   return (
      <>
         <main className="h-screen flex justify-center overflow-hidden
          bg-white text-black
           dark:text-white dark:bg-bg-dark
            transition-colors duration-300   ">
            <section className=" flex w-full max-w-325 h-full">
               <Sidebar />
               <section className=" 
               flex-1 px-4
               overflow-y-auto h-full">
            <Outlet />
            </section>
            </section>
            
      </main>
      
      </>
   )
}