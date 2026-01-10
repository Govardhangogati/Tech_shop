import servicesData from "../utils/servicesData"

export const Services = () => {
    return (
        <div className="container-fluid text-light bg-dark text-center py-4">
            <h2 className="fw-bold m-5">Our Advantages</h2>

            <div className="services d-flex flex-wrap justify-content-center">
                {
                    servicesData.map(item => (
                        <div key={item.id} className="d-flex m-5 align-items-start">
                            <div className="icon me-3">
                                <h1 style={{ color: "orangered", fontSize: "50px" }}>
                                    {item.icon}
                                </h1>
                            </div>
                            <div className="text text-start">
                                <h4 className="fw-bold">{item.title}</h4>
                                <p style={{ color: "lightgray" }}>{item.info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
