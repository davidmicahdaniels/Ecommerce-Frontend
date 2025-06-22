import classes from "./ProductCard.module.css"
import img from "../../Assets/Images/prod2.png"
import { useNavigate } from "react-router-dom";
import { getAppLocalStorage } from "../../App";

const ProductCard = (props) => {
  const navigate = useNavigate();

  
  const localData = getAppLocalStorage(); 

  const viewProductDetails = (e) => {
  
    const button = e.target.closest('button');

    if (button && button.classList.value.includes('card_btn')) {
      console.log('Button with class containing "card_btn" was clicked or inside target.');
      // Add your logic here
      // navigate("/ProductDetails")
      
      localStorage.setItem('selectedProductDetails', JSON.stringify(props));
      addToCart()
    }else{
      navigate("/ProductDetails")
       
      localStorage.setItem('selectedProductDetails', JSON.stringify(props));
    }

  }

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

  

  return (
    <div className={classes.product_card} onClick={viewProductDetails}>
      <div className={classes.product_card_img_wrapper}>
        <img
          src={props.img1}
          alt=""
          className={classes.product_img}
        />
      </div>
      <div className={classes.product_body}>
        <div className={classes.product_nmae_wrapper}>
          <h3>{props.product_name}</h3>

          <div className={classes.star_wrapper}>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
        </div>
        {/* <p>Perfume</p> */}
        <p>{props.short_description}</p>

        <div className={classes.card_bottom}>
          <p className={classes.price}>{props.product_price}</p>
          <button className={classes.card_btn}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;