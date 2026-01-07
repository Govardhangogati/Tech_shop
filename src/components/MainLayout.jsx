import { Header } from "./Header"
import { AppRouterDom } from "../RouterDom/AppRouterDom"
import HeroSlider from "./HeroSlider"

export const MainLayout=()=>{
    return(
        <>
        <Header/>
        <AppRouterDom/>
        </>
    )
}