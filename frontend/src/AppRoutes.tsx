import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";


function AppRoutes() {
    return(
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        </Routes>
    ) 
}

export default AppRoutes;