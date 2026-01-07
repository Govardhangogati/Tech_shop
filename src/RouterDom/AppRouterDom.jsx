import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { SinglePageProduct } from "../Features/product/SinglePageProduct"

export const AppRouterDom=()=>{
    return(
        <>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:id" element={<SinglePageProduct/>}/>
           </Routes>
        </>
    )
}