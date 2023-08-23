import React from 'react'

const Wishlist = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
          
       
      
                                <ul className="product_list_widget recent-viewed-product mt--80">
                                   
                                    <li>
                                        <div className="thumbnail">
                                            <a href="blog-details.html">
                                                <img src="assets/images/product/product-12.jpg" alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title"><a href="blog-details.html">Men's Fashion Tshirt</a></h6>
                                            <div className="product-meta-content">
                                                <span className="woocommerce-Price-amount amount">
                            <del>$30</del>
                            $20
                        </span>
                                            </div>
                                        </div>
                                    </li>
                                   
                                    <li>
                                        <div className="thumbnail">
                                            <a href="blog-details.html">
                                                <img src="assets/images/product/product-10.jpg" alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title"><a href="blog-details.html">Nike Shoes</a></h6>
                                            <div className="product-meta-content">
                                                <span className="woocommerce-Price-amount amount">
                            <del>$200</del>
                            $150
                        </span>
                                            </div>
                                        </div>
                                    </li>
                                  
                                 
                                  
                                </ul>

                           
             </div>
           
            <div className="col-md-4">
            <div class="axil-order-summery mt--80">
                                <h5 class="title mb--20">Order Summary</h5>
                                <div class="summery-table-wrap">
                                    <table class="table  mb--30"  >
                                        <tbody>
                                            <tr class="order-subtotal">
                                                <td>Subtotal</td>
                                                <td>$117.00</td>
                                            </tr>
                                            <tr class="order-shipping">
                                                <td>Shipping</td>
                                               
                                            </tr>
                                            <tr class="order-tax">
                                                <td>State Tax</td>
                                                <td>$8.00</td>
                                            </tr>
                                            <tr class="order-total">
                                                <td>Total</td>
                                                <td class="order-total-amount">$125.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a href="checkout.html" class="axil-btn btn-bg-primary checkout-btn">Process to Checkout</a>
                            </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Wishlist