import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProductPage } from "./pages/ProductPage";


function AppRoutes() {
    return(
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        </Routes>
    ) 
}

export default AppRoutes;