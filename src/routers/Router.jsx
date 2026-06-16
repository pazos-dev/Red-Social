import { BrowserRouter, Route,Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePages"
import { MainLayout } from "../layouts/MainLayouts"

export const RouterStart = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<HomePage />} />   
               <Route path="/alerts" element={<HomePage />} />
         </Route>
            
      </Routes>
      </BrowserRouter>
   )
}