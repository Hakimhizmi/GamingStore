import React from "react";
import img2 from "./img/1-removebg-preview.png"
import img1 from "./img/snipet-removebg-preview.png"


export default function Main() {
    return (
        <div >
            <div className="row div1 w-100" >
                <div className="col mt-5">
                    <div className="text-center text-lg-start" style={{ marginTop: 200 }}>
                        <h1 className="display-3 font-weight-normal  mb-5">PC PORTABLE <span style={{color:"purple"}}>GAMING.</span></h1>
                        <p className="lead fw-normal text-muted mb-5">PC neufs ou reconditionnés !<span style={{color:"purple"}}> Grand choix de marques.</span> Spécialiste dans la vente de matériel informatique reconditionné ou neuf. Prix attractifs.<span style={{color:"purple"}}> Neufs ou reconditionnés!</span></p>
                    </div>
                </div>
                <div className="col mt-3">
                    <img id="banerr" src={img1} />
                </div>
            </div>
            <div className="mt-5 p-5" style={{ background: 'linear-gradient(109.6deg, rgb(157, 75, 199) 11.2%, rgb(119, 81, 204) 83.1%)' }}>
                <div className="text-center bg-gradient-primary-to-secondary">
                    <div className="container px-5  ">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-xl-8 mt-5 ">
                                <div className="h1  text-white txt">"Let's reveal together the best laptops for new games below!"</div>
                                <img className="m-5 mx-auto " src={img2} alt="..." style={{ height: '3rem'  }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}