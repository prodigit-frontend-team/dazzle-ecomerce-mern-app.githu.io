import React from 'react'
import img1 from '../assests/images/icons/service1.png'
import img2 from '../assests/images/icons/service2.png'

import img3 from '../assests/images/icons/service3.png'
import img4 from '../assests/images/icons/service4.png'
const FooterService = () => {
  return (
    <>
     <div className="service-area">
        <div className="container">
            <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={img1} alt="Service"/>
                        </div>
                        <div className="content">
                            <h6 className="title">Fast &amp; Secure Delivery</h6>
                            <p>Tell about your service.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={img2} alt="Service"/>
                        </div>
                        <div className="content">
                            <h6 className="title">Money Back Guarantee</h6>
                            <p>Within 10 days.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={img3} alt="Service"/>
                        </div>
                        <div className="content">
                            <h6 className="title">24 Hour Return Policy</h6>
                            <p>No question ask.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="service-box service-style-2">
                        <div className="icon">
                            <img src={img4} alt="Service"/>
                        </div>
                        <div className="content">
                            <h6 className="title">Pro Quality Support</h6>
                            <p>24/7 Live support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FooterService