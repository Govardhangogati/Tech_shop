import CenterSlider from "../components/CenterSlider"
import { Footer } from "../components/Footer"
import HeroSlider from "../components/HeroSlider"
import { Products } from "../components/products"
import { Services } from "../components/Services"

export const Home=()=>{
    return(
        <>
            <HeroSlider/>
            <CenterSlider/>
            <Products/>
            <Services/>
            <Footer/>
            
        </>
    )
}