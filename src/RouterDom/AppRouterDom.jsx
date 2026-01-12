import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { SinglePageProduct } from "../Features/product/SinglePageProduct"
import { Cart } from "../Pages/Cart"

export const AppRouterDom=()=>{
    return(
        <>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/products/:id" element={<SinglePageProduct/>}/>
           </Routes>
        </>
    )
}