import { useParams } from "react-router-dom"
import productsData from "../../utils/productsData"
import { useState } from "react"
import reviewsData from "../../utils/reviewsData"




export const SinglePageProduct=()=>{

    let {id}=useParams()

    let product=productsData.find(pro=>pro.id==Number(id))

    let [selectedImage,setSelectedImage]=useState(product.images[0])

    let original=Number(product.originalPrice)

    let final=Number(product.finalPrice)

    let discount=original-final

    let dp=((original-final)/original)*100

    let discountPercentage=Math.floor(dp)

    let [tab,setTab]=useState("Specifications")

    return(
        <>
            <div className="container-fluid d-flex  " style={{color:"lightgray"}}>
                <div className="images ms-5">
                    <div className="col-2 ">
                    {
                        product.images.map(image=>   
                            
                                <img src={image} alt=""  style={{width:'100px',margin:"20px",cursor:"pointer",border:selectedImage==image?'2px solid white':"1px solid gray"}}
                                onClick={()=>setSelectedImage(image)}/>
                            
                        )
                    }
                    </div>
                </div>
                <div className="hero-Image">
                    <div className="col-5">
                        <img src={selectedImage} alt="" width={"650px"}/>
                    </div>
                </div>
                <div className="details col-5 ms-5 ">
                    <div className="mb-4">
                        <h2><b>{product.title}</b></h2>
                        <h5><b>{product.info}</b></h5>
                        <div>
                            {Array.from({ length: product.rateCount }).map((_, i) => (
                            <i style={{color:"orangered",fontSize:"10px"}} key={i} className="fa-solid fa-star"></i>
                            ))} <b style={{color:"gray"}}>| {product.ratings} Ratings</b>
                        </div>
                    </div>
                    <div className="col-8">
                        <hr style={{border:"1px solid "}} />
                    </div>
                    <div className="d-flex mb-5 mt-4" >
                        <div>
                            <div className="price d-flex">
                                <h1><b>₹{product.finalPrice}</b></h1>
                                <h3 className="m-3" style={{color:"gray"}}><b><del>₹{product.originalPrice}</del></b></h3>
                            </div>
                            <div className="container d-flex">
                                <div className="percent " >
                                    <p style={{color:"green",fontSize:"20px"}}>You save:{discount} ({discountPercentage}%)</p>
                                    <p style={{color:"gray"}}>(Inclusive of all taxes)</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className="ms-5">
                            <button style={{backgroundColor:"green",border:"none",color:"white",borderRadius:"5px",padding:"5px",marginTop:"40px"}}> <i style={{fontSize:'12px'}} className="fa-solid fa-check"></i><b> in stock</b> </button>
                        </div>

                        
                    </div>
                    <div className="col-8">
                        <hr style={{border:"1px solid "}} />
                    </div>
                    <div className="offers mt-4 mb-4">
                        <h5 >offers and discounts</h5>
                        <div className="bil d-flex mt-3">
                            <div className="col-4 me-2"  >
                                <div className="card p-1 bg-dark text-light "style={{border:'1px solid gray'}}>
                                    <h5 style={{color:'gray'}}>No cost Emi on credit card</h5>
                                </div>
                            </div>
                            <div className="col-4 ms-2" >
                                <div className="card p-1 bg-dark text-light" style={{border:'1px solid gray'}}>
                                    <h5 style={{color:'gray'}}>Pay Later and Avail CashBack</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <hr style={{border:"1px solid "}} />
                    </div>
                    <div>
                        <div className="mt-5" >
                            <button style={{color:'white',backgroundColor:"orangered",border:"none",width:"200px",padding:"10px"}}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="text-center m-5">
                
                    {
                        
                        ["Specifications","Overview","Ratings"].map(item=>
                            <button style={{
                                backgroundColor:item===tab?"orangered":'black',
                                color:'white',border:'none',
                                marginRight:'50px',
                                width:"200px",
                                padding:'10px',
                                borderRadius:"5px"
                            }}
                            
                            onClick={()=>setTab(item)

                            }>{item}</button>
                        )
                    }
                </div>

                
                    {
                        tab==="Specifications" && 
                            <div className="info col-3 m-5" style={{color:"lightgray"}}>
                                <div className="d-flex justify-content-between">
                                    <p>Brand</p>
                                    <p>{product.brand}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Model</p>
                                    <p>{product.title}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Generic Name</p>
                                    <p>{product.category}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>HeadPhone Type</p>
                                    <p>{product.type}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Connectivity</p>
                                    <p>{product.connectivity}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Microphone</p>
                                    <p>yes</p>
                                </div>
                            </div>
                            
                    }
                    {
                        tab=="Ratings" &&
                        reviewsData.map(item=>
                            <div className="ratings ms-5" style={{color:"gray"}}>
                                <div className="profile d-flex mt-5 text-light">
                                        <div className="user" style={{width:"50px",height:"50px",backgroundColor:'white',borderRadius:'50%'}}>
                                            <i style={{fontSize:'40px',color:"gray"}} class="fa-solid fa-user"></i>
                                        </div>
                                        <div className="name ms-3">
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>
                                                {Array.from({ length: item.rateCount }).map((_, i) => (
                                                    <i  style={{color:"orangered",fontSize:"10px"}} key={i} className="fa-solid fa-star"></i> 
                                                ))} | {item.date} 
                                            </div> 
                                        </div>
                                </div>
                                <div>
                                    <p className="mt-2">{item.review}</p>
                                </div>
                                </div>
                        )
                        
                    }
                
                
            </div>

        </>
    )
}