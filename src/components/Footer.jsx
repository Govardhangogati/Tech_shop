export const Footer=()=>{
    return(
        <>
            <div className="container text-light m-1 ">
                <div className="details">
                    <h2 className="text-light">Tech Shop</h2>
                    <p>Subscribe to our email alerts to receive early discounts offers and new product info</p>
                    <input className="bg-dark text-light p-1 mb-2" type="email" placeholder="Enter Email*" style={{border:"none",borderRadius:"5px"}}/> <br />
                    <button style={{backgroundColor:'orangered',border:"none",color:"white",width:'110px',borderRadius:"5px"}}>Subscribe</button>
                </div>
            </div>
        </>
    )
}