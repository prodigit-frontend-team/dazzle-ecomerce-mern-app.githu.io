import React from 'react';

import HeaderBanner from '../banners-components/HeaderBanner';
import ProductComponent from '../pages-inner-components/ProductComponent';
import CategoryComponent from '../pages-inner-components/CategoryComponent';
import TopChoiceComponent from '../pages-inner-components/TopChoiceComponent';
import FooterService from '../pages-inner-components/FooterService';
import Chooseus from '../pages-inner-components/Chooseus';
import sports from '../assests/dazzle-images/banner-01 1.png'
  
const Home = () => {
    return (
 
    <>
  
    <HeaderBanner />

    <CategoryComponent />

    <TopChoiceComponent />

    <div className="sports-section">
    <img src={sports} width="100%" height="100%" alt=""/> 
    </div>
    
    <Chooseus />

    <div className="axil-product-area bg-color-white axil-section-gap">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-primary"> <i className="far fa-shopping-basket"></i> Our Products</span>
                    <h2 className="title">Explore our Products</h2>
                </div>
                <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
                    <div className="slick-single-layout">
                        <div class="row row--15">
                                <ProductComponent />

                        </div>
                    </div>

               </div>
               </div>
            </div>


        
   <FooterService />
    </>
    );
};

export default Home;