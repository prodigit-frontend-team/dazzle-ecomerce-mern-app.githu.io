import React from 'react';

import bgimg1 from '../assests/dazzle-images/banner-slider.png'
const HeaderBanner = () => {
  return (
    <>
      <main className="main-wrapper">
      <div className="axil-main-slider-area main-slider-style-4" style={{backgroundImage:`url(${bgimg1})`,width:"100%",height: "500px"}} >
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
  );
};

export default HeaderBanner;