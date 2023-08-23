import React from 'react';
import logo from '../assests/dazzle-images/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
     <footer className="axil-footer-area footer-style-2">
       
        <div className="footer-top separator-top">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            
                           <div className=" mb--30">
                            <Link to={"/"}>
                                <img className="light-logo" src={logo} alt="Logo Images"/>
                            </Link>
                        </div>
                            <div className="inner">
                                <p>685 Market Street, <br/>
                                Las Vegas, LA 95820, <br/>
                                United States.
                                </p>
                                <ul className="support-list-item">
                                    <li><Link to="mailto:example@domain.com"><i className="fal fa-envelope-open"></i> example@domain.com</Link></li>
                                    <li><Link to="tel:(+01)850-315-5862"><i className="fal fa-phone-alt"></i> (+01) 850-315-5862</Link></li>
                                   <li><i className="fal fa-map-marker-alt"></i> 685 Market Street,  <br/> Las Vegas, LA 95820, <br/> United States.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Account</h5>
                            <div className="inner">
                                <ul>
                                    <li><Link to="my-account.html">My Account</Link></li>
                                    <li><Link to="sign-up.html">Login / Register</Link></li>
                                    <li><Link to="cart.html">Cart</Link></li>
                                    <li><Link to="wishlist.html">Wishlist</Link></li>
                                    <li><Link to="shop.html">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-sm-6">
                        <div className="axil-footer-widget">
                            <h5 className="widget-title">Quick Link</h5>
                            <div className="inner">
                                <ul>
                                    <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                                    <li><Link to="terms-of-service.html">Terms Of Use</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-lg-3 col-sm-6">
                        <h5 className="widget-title">Quick Link</h5>
                        
                        <div className="axil-footer-widget footer-widget-newsletter">
                           
                            <div className="social-share">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fab fa-discord"></i></Link>
                            </div>
                            <p>Lorem ipsum dolor sit.</p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                <button className="submit-btn" type="button">SUBSCRIBE</button>
                            </div>
                            <ul className="payment-icons-bottom quick-link quick-link-2">
                                <li><img src="assets/images/icons/cart/cart-1.png" alt="paypal cart"/></li>
                                <li><img src="assets/images/icons/cart/cart-2.png" alt="paypal cart"/></li>
                                <li><img src="assets/images/icons/cart/cart-3.png" alt="paypal cart"/></li>
                                <li><img src="assets/images/icons/cart/cart-6.png" alt="paypal cart"/></li>
                                <li><img src="assets/images/icons/cart/cart-5.png" alt="paypal cart"/></li>
                            </ul>
                           
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
       
        <div className="copyright-area copyright-default separator-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4">
                       
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="copyright-left d-flex flex-wrap justify-content-center">
                            <ul className="quick-link">
                                <li>© 2023. All rights reserved by <Link target="_blank" to="#">DAZZLE</Link>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                     
                    </div>
                </div>
            </div>
        </div>
      
    </footer>
    </>
  );
};

export default Footer;