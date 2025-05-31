import React from 'react'
import classes from "../ProductCard/ProductCard.module.css"
import img from "../../Assets/Images/prod2.png"
import { ProductData } from '../../Data/ProductData'
import { Navigate, useNavigate } from 'react-router-dom'

const SimilarProducts = (props) => {
  
  const navigate = useNavigate();

  const updateSelectedProductDetails = (productName) => {
  // Example ProductData structure; replace with your actual data source
    const category = localStorage.getItem("currentProductCategory");
      if (!category || !ProductData[category]) {
        console.error("Missing or invalid category in localStorage.");
        return;
      }

      // Find the raw product object by product_name
      const rawProduct = ProductData[category].find(
        (item) => item.product_name === productName
      );
      if (!rawProduct) {
        console.error(`Product "${productName}" not found in category "${category}".`);
        return;
      }

      console.log("raw products", rawProduct);
      
      console.log(rawProduct.product_description.p1);
      

      // Transform into desired structure
      const transformed = {
        img1: rawProduct.image1 || "",
        img2: rawProduct.image2 || "",
        img3: rawProduct.image3 || "",
        img4: rawProduct.image4 || "",
        short: rawProduct.product_description.short || "",
        p1: rawProduct.product_description.p1 || "",
        p2: rawProduct.product_description.p2 || "",
        p3: rawProduct.product_description.p3 || "",
        product_name: rawProduct.product_name || "",
        product_price: rawProduct.product_price || "",
        product_rating: rawProduct.product_rating || ""
      };

      console.log("transformed", transformed);
      console.log(transformed.p1);

      navigate("/ProductDetails")

      // Store the transformed object in localStorage
      localStorage.setItem(
        "selectedProductDetails",
        JSON.stringify(transformed)
      );
    };



  return (
    <div className={classes.product_card} onClick={() => updateSelectedProductDetails(props.product_name)}>
      <div className={classes.product_card_img_wrapper}>
        <img
          src={props.product_image}
          alt=""
          className={classes.product_img}
        />
      </div>
      <div className={classes.product_body}>
        <div className={classes.product_nmae_wrapper}>
          <h4>{props.product_name}</h4>

          <div className={classes.star_wrapper}>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
        </div>
        {/* <p>Perfume</p>
        <p>25ml Mousuf Perfume</p> */}

        <div className={classes.card_bottom}>
          <p className={classes.price}>{props.product_price}</p>
          <button className={classes.card_btn}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default SimilarProducts
