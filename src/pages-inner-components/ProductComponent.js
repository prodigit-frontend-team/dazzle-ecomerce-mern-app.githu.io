import React from 'react'
import { Link } from 'react-router-dom';
const ProductComponent = () => {
  return (
    <>
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                                <div className="axil-product product-style-one">
                                    <div className="thumbnail">
                                        <Link to="single-product.html">
                                            <img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/electric/product-01.png" alt="Product Images"/>
                                            <img className="hover-img" src="assets/images/product/electric/product-08.png" alt="Product Images"/>
                                        </Link>
                                        <div className="label-block label-right">
                                            <div className="product-badget">20% Off</div>
                                        </div>
                                        <div className="product-hover-action">
                                            <ul className="cart-action">
                                                <li className="quickview"><Link to="" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i className="far fa-eye"></i></Link></li>
                                                <li className="select-option">
                                                    <Link to="single-product.html">
                                                        Add to Cart
                                                    </Link>
                                                </li>
                                                <li className="wishlist"><Link to="wishlist.html"><i className="far fa-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="inner">
                                            <div className="product-rating">
                                                <span className="icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                                <span className="rating-number">(64)</span>
                                            </div>
                                            <h5 className="title"><Link to="single-product.html">Yantiti Leather & Canvas Bags</Link></h5>
                                            <div className="product-price-variant">
                                                <span className="price current-price">$29.99</span>
                                                <span className="price old-price">$49.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
    </>
  )
}

export default ProductComponent