import React from 'react'
import bgimg2 from '../assests/dazzle-images/t-shirtr-banner-1.png';



const PagesBanners = () => {
  return (
    <>
         <main className="main-wrapper">
      <div className="axil-main-slider-area main-slider-style-4" style={{backgroundImage:`url(${bgimg2})`,width:"100%",height: "500px"}} >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="main-slider-content">
                      
                            <div className="shop-btn shop-bnr-btn">
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="slide-thumb-area">
                           
                         
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </main>
    </>
  )
}

export default PagesBanners