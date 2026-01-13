import { Header } from "./Header"
import { AppRouterDom } from "../RouterDom/AppRouterDom"
import HeroSlider from "./HeroSlider"
import { Footer } from "./Footer"
import { useSelector } from "react-redux"

export const MainLayout=()=>{
    let cartData=useSelector(state=>state.cart)
    return(
        <>
        <Header/>
        <AppRouterDom/>
        {cartData.length && <Footer/>}
        </>
    )
}