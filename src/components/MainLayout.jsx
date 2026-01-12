import { Header } from "./Header"
import { AppRouterDom } from "../RouterDom/AppRouterDom"
import HeroSlider from "./HeroSlider"
import { Footer } from "./Footer"

export const MainLayout=()=>{
    return(
        <>
        <Header/>
        <AppRouterDom/>
        <Footer/>
        </>
    )
}