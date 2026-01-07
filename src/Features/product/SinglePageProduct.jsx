import { useParams } from "react-router-dom"

export const SinglePageProduct=()=>{

    let {id}=useParams()

    return(
        <>
            <h1>This is Product :{id}</h1>
        </>
    )
}