import { Link, useParams } from "react-router-dom"
import productsData from "../../utils/productsData"
import { useState } from "react"
import reviewsData from "../../utils/reviewsData"
import { Footer } from "../../components/Footer"
import { Services } from "../../components/Services"
import { ADDTOCART } from "../../REDUX/cart/CartSlice"
import { useDispatch } from "react-redux"




export const SinglePageProduct=()=>{


    let dispatch=useDispatch()
    let {id}=useParams()
    let [clickedButtons, setClickedButtons] = useState({});

    let product=productsData.find(pro=>pro.id==Number(id))

    let sameCategory=productsData.filter(pro=>pro.category===product.category && pro.id !== product.id)

    let [selectedImage,setSelectedImage]=useState(product.images[0])

    let original=Number(product.originalPrice)

    let final=Number(product.finalPrice)

    let discount=original-final

    let dp=((original-final)/original)*100

    let discountPercentage=Math.floor(dp)

    let [tab,setTab]=useState("Specifications")

    let handleClick = (product) => {
    setClickedButtons((prev) => ({
      ...prev,
      [product.id]: true,
    }));
    dispatch(ADDTOCART(product))
  };
  

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
                            <button onClick={()=>dispatch(ADDTOCART(product))} style={{color:'white',backgroundColor:"orangered",border:"none",width:"200px",padding:"10px"}}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{marginTop:"150px"}}>
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

                    {
                        tab=="Overview"&&
                        <div className="m-5" style={{color:"lightgray"}}>
                            <div>
                                <h5><b className="d-flex">The <b> <h5 style={{color:"orangered", marginLeft:'5px',marginRight:'5px'}}>{product.title}</h5></b> <p> {product.info} provides fabulous sound quality </p> </b> </h5>
                            </div>
                            <ul>
                                <li>sound turned to perfection</li>
                                <li>Comfortable to wear</li>
                                <li>Long hour playback time</li>
                            </ul>
                            <div className="d-flex">
                                <h5>
                                    <p className="d-flex flex-wrap">
                                        buy the 
                                        <b style={{color:"white",marginLeft:"5px",marginRight:"5px"}}> {product.title}</b>
                                        <b style={{color:"white",marginLeft:"5px",marginRight:"5px"}}>{product.info} </b>
                                        <p>which offers you with fabolous music experience by providing you with awesome sound quality that you ca never move on from.Enjoy perfect flexibility and mobility with amazing music quality with this headphones giving you a truly audio experience .It blends with exceptional sound quality and a range of smart features for an unrevalled listening experience.</p>
                                    </p> 
                                </h5>
                            </div>
                        </div>
                    }    
            </div>
            
            <div className="container-fluid " style={{ marginTop: "150px"}}>
                <h2 className="text-center text-light m-5">
                    <b>Related products</b>
                </h2>

                <div
                    className="d-flex hide-scrollbar"
                    style={{
                    overflowX: "auto",
                    gap: "20px",
                    scrollBehavior: "smooth",
                    paddingBottom: "20px",
                    }}
                >
                    {sameCategory.map((product) => (
                    <div
                        key={product.id}
                        style={{
                        minWidth: "24%", 
                        flex: "0 0 auto",
                        }}
                    >
                        <div
                        className="card"
                        style={{
                            height: "490px",
                            backgroundColor: "black",
                            border: "1px solid gray",
                        }}
                        >
                        <Link to={`/products/${product.id}`}>
                            <div className="d-flex justify-content-center bg-dark p-3">
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                style={{ width: "200px" }}
                            />
                            </div>
                        </Link>

                        <div className="info p-3">
                            <div style={{ fontSize: "12px", color: "orangered" }}>
                            {Array.from({ length: product.rateCount }).map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                            ))}
                            </div>

                            <h5 className="text-light">{product.title}</h5>
                            <p style={{ color: "rgba(245,245,245,0.6)" }}>{product.info}</p>

                            <hr />

                            <div className="d-flex align-items-center gap-2">
                            <b className="text-light fs-5">₹{product.finalPrice}</b>
                            <del style={{ color: "gray" }}>
                                ₹{product.originalPrice}
                            </del>
                            </div>

                            <button
                            onClick={() => handleClick(product)}
                            style={{
                                marginTop: "10px",
                                width: "100%",
                                padding: "10px",
                                backgroundColor: clickedButtons[product.id]
                                ? "green"
                                : "orangered",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                fontWeight: "bold",
                            }}
                            >
                            {clickedButtons[product.id] ? "Added" : "Add to Cart"}
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop:'100px'}}>
                <Services/>
            </div>
            
        </>
    )
}