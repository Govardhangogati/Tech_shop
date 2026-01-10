import { Link } from "react-router-dom"
import { footMenu, footSocial } from "../utils/footerData"

export const Footer=()=>{
    return(
        <>
            <div className="container m-1 text-light d-flex pt-5">
                <div className="col-3 me-5" >
                    <h2 style={{fontWeight:'bold'}}>Tech Shop</h2>
                    <p style={{fontSize:"18px",color:'lightgray'}}>Subscribe to our email alerts to receive early discount offers and new products info</p>
                    <input className="form-control  mb-2 " type="email" placeholder="Enter Email*" style={{border:'none'}}/> 
                    <button style={{backgroundColor:"orangered",color:"white",border:"none",borderRadius:"5px",width:"120px",padding:"5px"}}>Subscribe</button>
                </div>
                
                    {
                        footMenu.map(sec=>(
                            <div className="section col-3 ms-4" key={sec.id}>
                                <h5 className="mb-5" style={{fontWeight:'bold'}}>{sec.title}</h5>
                                {
                                    sec.menu.map(item=>(
                                        <p  key={item.id}><Link to={item.path} style={{color:'lightgray',textDecoration:"none"}}>{item.link}</Link></p>
                                    ))
                                }
                            </div>
                        ))
                    }  
            </div>
             <hr style={{border:'1px solid lightgray'}} />
             <div className="social d-flex justify-content-between  ms-5 me-5">
                <div className="text" style={{color:"lightgray"}}>
                    <p>2025|All Rights Reserved</p>
                </div>
                <div className="icons d-flex ">
                    {
                        footSocial.map(symbol=>(
                            <div className="cont ms-4">
                                <Link to={symbol.path}><h5 style={{color:"lightgray"}}>{symbol.icon}</h5></Link>
                                
                            </div>
                           
                        )
                            
                        )
                    }
                </div>
             </div>
        </>
    )
}