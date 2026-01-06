import { Header } from "../Pages/Header"
import { AppRouterDom } from "../RouterDom/AppRouterDom"

export const MainLayout=()=>{
    return(
        <>
        <Header/>
        <AppRouterDom/>
        </>
    )
}