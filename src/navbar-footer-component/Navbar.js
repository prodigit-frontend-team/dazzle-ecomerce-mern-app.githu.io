import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import logo from '../assests/dazzle-images/logo.png'
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <>
      <header className="header axil-header header-style-5">
     
    
     <div id="axil-sticky-placeholder"></div>
     <div className="axil-mainmenu">
         <div className="container">
             <div className="header-navbar">
                 <div className="header-brand">
                     <Link to={"/"} className="logo logo-dark">
                         <img src={logo} alt="Site Logo"/>
                     </Link>
                     <Link to="index-2.html" className="logo logo-light">
                         <img src="assets/images/logo/logo-light.png" alt="Site Logo"/>
                     </Link>
                 </div>
                 <div className="header-main-nav">
                   
                     <nav className="mainmenu-nav">
                         <button className="mobile-close-btn mobile-nav-toggler"><i className="fas fa-times"></i></button>
                         <div className="mobile-nav-brand">
                             <Link to="index-2.html" className="logo">
                                 <img src="./dazzle-images/logo.png" alt="Site Logo"/>
                             </Link>
                         </div>
                         <ul className="mainmenu">
                             <li className="menu-item-has-children">
                                 <Link to={"/tshirts"}>T-Shirts</Link>
                               
                             </li>
                             <li className="menu-item-has-children">
                                 <Link to="#">Lowers</Link>
                                
                             </li>
                             <li className="menu-item-has-children">
                                 <Link to="#">Shorts</Link>
                               
                             </li>
                             <li><Link to="/contact">Contact</Link></li>
                             <li className="menu-item-has-children">
                                 <Link to={"/blog"}>Blog</Link>
                              
                             </li>
                            
                         </ul>
                     </nav>
                     
                 </div>
                 <div className="header-action">
                     <ul className="action-list">
                         <li className="axil-search d-xl-block d-none">
                         <input type="text" className="form-control" placeholder="What are you looking for?"/>
                             
                             <button type="submit" className="icon wooc-btn-search">
                                 <i className="flaticon-magnifying-glass"></i>
                             </button>
                         </li>
                         <li className="axil-search d-xl-none d-block">
                             <Link to="" className="header-search-icon" title="Search">
                                 <i className="flaticon-magnifying-glass"></i>
                             </Link>
                         </li>
                         <li className="my-account">
                            
                             <a onClick={toggleDropdown}>
                                    <i class="flaticon-person"></i>
                                </a>
                           
                             <div className={`my-account-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                 <span >QUICKLINKS</span>
                                 <ul>
                                     <li>
                                         <Link to={"/myaccount"}>My Account</Link>
                                     </li>
                                     <li>
                                         <Link to="#">Initiate return</Link>
                                     </li>
                                     <li>
                                         <Link to="#">Support</Link>
                                     </li>
                                     <li>
                                         <Link to="#">Language</Link>
                                     </li>
                                 </ul>
                                 <div className="login-btn">
                                     <Link to={"/signin"} className="axil-btn btn-bg-primary">Login</Link>
                                 </div>
                                 <div className="reg-footer text-center">No account yet? <Link to={"/signup"} className="btn-link">REGISTER HERE.</Link></div>
                             </div>
                         </li>
                         <li className="wishlist">
                             <Link to="/wishlist">
                                 <i className="flaticon-heart"></i>
                             </Link>
                         </li>
                         <li className="shopping-cart">
                             <Link to={"/cart"} className="cart-dropdown-btn">
                                 <span className="cart-count">3</span>
                                 <i className="flaticon-shopping-cart"></i>
                             </Link>
                         </li>
                       
                         <li className="axil-mobile-toggle">
                             <button className="menu-btn mobile-nav-toggler">
                                 <i className="flaticon-menu-2"></i>
                             </button>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     
 </header>



 



    </>
  );
};

export default Navbar;