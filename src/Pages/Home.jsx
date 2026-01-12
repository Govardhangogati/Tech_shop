import CenterSlider from "../components/CenterSlider"

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
            
            
        </>
    )
}