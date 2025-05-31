import React, { useEffect } from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./ProductDetails.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { BsTelephoneOutboundFill  } from "react-icons/bs";
import { BsCartCheckFill   } from "react-icons/bs";
import deco_img from "../../Assets/Images/vendor.jpg"
import { MdArrowBack } from "react-icons/md";
import product_img from "../../Assets/Images/prod3.png"
import product_img2 from "../../Assets/Images/prod2.png"
import product_img3 from "../../Assets/Images/prod3.png"
import product_img4 from "../../Assets/Images/prod4.png"
import { FaStar } from "react-icons/fa6";
import ProductCard from '../../Components/ProductCard/ProductCard';
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts';
import { useNavigate } from 'react-router-dom';
import { getAppLocalStorage } from '../../App';
import { ProductData } from '../../Data/ProductData';

const ProductDetailsArea = () => {
  const navigate =  useNavigate();

  const visitShop = () =>{
    navigate("/shop")
  }
  
  
  const localData = getAppLocalStorage(); 

    console.log(localData);

    const addToCart = () => {
      // Re-read latest selected product and cart from localStorage
      const { selectedProductDetails } = getAppLocalStorage();
      const existingCart = JSON.parse(localStorage.getItem('cartProducts') || '[]');

      // Check for a duplicate by product_name
      const alreadyInCart = existingCart.some(
        item => item.product_name === selectedProductDetails.product_name
      );

      if (alreadyInCart) {
        console.log('Product is already in the cart.');
        return;
      }

      // Append and save
      const updatedCart = [...existingCart, selectedProductDetails];
      localStorage.setItem('cartProducts', JSON.stringify(updatedCart));

      console.log('Added to cart:', selectedProductDetails);
    };

    console.log(localData.selectedProductDetails);
    

    return(
        <div className={classes.product_details_area}>
            <div className={classes.product_details_top}>
                <MdArrowBack size={30} onClick={visitShop} />
                <h2 className="">Product details</h2>
            </div>

            <div className={classes.details_body}>
                <div className={classes.images_diaplay}>
                    <img className={classes.main_img} src={localData.selectedProductDetails.img1} alt='img'/>
                    <div className={classes.bottom_images}>
                        <img className={classes.bottom_img} src={localData.selectedProductDetails.img2} alt='img'/>
                        <img className={classes.bottom_img} src={localData.selectedProductDetails.img3} alt='img'/>
                        <img className={classes.bottom_img} src={localData.selectedProductDetails.img4} alt='img'/>
                    </div>
                </div>
                <div className={classes.description_area}>
                    <h3>{localData.selectedProductDetails.product_name}</h3>
                    <p>{localData.selectedProductDetails.p1}</p>
                    <p>{localData.selectedProductDetails.p2}</p>
                    <p>{localData.selectedProductDetails.p3}</p>

                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                        <p>5 star of 40 reviews</p>
                    </div>

                    <div className={classes.btn_wrapper}>
                        <button className={classes.cart_btn} onClick={addToCart}>Add to Cart</button>
                        <button className={classes.purchase_btn}>Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



const ProductDetails = () => {
    useEffect(() => {
        // Set overflow hidden when the component mounts 
        document.body.style.overflow = "hidden";
    
        return () => {
          // Reset overflow when the component unmounts
          document.body.style.overflow = "";
        };
      }, []);
    
      const selectedProduct = JSON.parse(localStorage.getItem('selectedProductDetails') || '{}');
      const category = localStorage.getItem('currentProductCategory');

      const productsInSameCategory = ProductData[category] || [];

      const similarProducts = productsInSameCategory
        .filter(product => product.product_name !== selectedProduct.product_name)
        .slice(0, 2);


      console.log(similarProducts);
  
      return (
        <div className={classes.dashboard_body}>
          <DashboardNavbar />
    
          <div className={classes.dashboard_main}>
            <Sidebar />

            <ProductDetailsArea />

            
            <div className={classes.similar_prodcut_area}>
                <p className={classes.similar_header}>Similar products</p>
                
                {
                  similarProducts.map((product) => {
                    return <SimilarProducts 
                              product_image={product.image1} 
                              product_name={product.product_name} 
                              product_price={product.product_price} 
                            />
                  })
                }
                
                {/* <SimilarProducts /> */}
            </div>

            {/* <div className={classes.dashboard_end}>
              <h3 className="">Quick Actions</h3>
              <div className={classes.cotact_details_box}>
                <div className={classes.details_box}>
                  <BsTelephoneOutboundFill size={20} color="#4caf50" />
                  <div className="">
                    <p>CALL TO ORDER</p>
                    <p>0700-600-0000</p>
                  </div>
                </div>
                <div className={classes.details_box}>
                  <BsCartCheckFill size={20} color="#4caf50" />
                  <p>Sell on EduMart</p>
                </div>
                <div className={classes.details_box}>
                  <BsCartCheckFill size={20} color="#4caf50" />
                  <p>Send your package</p>
                </div>
              </div>
    
              <div className={classes.decor_img_wrapper}>
                <img src={deco_img} alt="img"  className=""/>
              </div>
    
              <button className={classes.vendor_btn}><p>Become a Vendor</p><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div> */}
          </div>
        </div>
      );
}

export default ProductDetails;