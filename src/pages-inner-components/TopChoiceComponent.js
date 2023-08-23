import React from 'react'
import img1 from '../assests/dazzle-images/mini-1.png'
import img2 from '../assests/dazzle-images/mini-2.png'

import img3 from '../assests/dazzle-images/mini-3.png'
import img4 from '../assests/dazzle-images/mini-4.png'
import topchoseimg from '../assests/dazzle-images/mini-section.png'
const TopChoiceComponent = () => {
  return (
    <>
  <div className="product-collection-area bg-lighter axil-section-gapcommon ">
            <div className="container-fluid">
              
                <div className="row">
                    <div className="col-xl-7">
                        <div className="product-collection product-collection-two" >
                           
                           <img src={topchoseimg} width="100%" height="100%" alt=""/>
                        
                
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-collection-three">
                                   
                                    <div className="">
                                        <img src={img1} width="100%" alt="Product"/>
                                        <h6 className="title tittle-bt">T-Shirts</h6>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-collection-three">
                                    <div className="">
                                        <img src={img2} width="100%" alt="Product"/>
                                        <h6 className="title tittle-bt">All Rounders</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-collection-three">
                                    <div className="">
                                        <img src={img3} width="100%" alt="Product"/>
                                        <h6 className="title tittle-bt">Shorts</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-collection-three">
                                    <div className="">
                                        <img src={img4} alt="Product"/>
                                        <h6 className="title tittle-bt">Hoodies</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
};

export default TopChoiceComponent