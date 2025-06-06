import React from "react";
import classes from "./ProductsDisplay.module.css";
import product1 from "../../Assets/Images/prod1.png"
import product2 from "../../Assets/Images/prod2.png"
import product3 from "../../Assets/Images/prod3.png"
import product4 from "../../Assets/Images/prod4.png"
import product5 from "../../Assets/Images/prod5.png"
import product6 from "../../Assets/Images/prod6.png"

const ProductsDisplay = () => {
  return (
    <section id="products">
      <div className={classes.product_content_wrapper}>
        <div className={classes.product_display_top}>
          <h2>Products</h2>
          <button>
            <p>View All Products</p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>

        <div className={classes.product_cards_wrapper}>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src={product1}
                alt=""
                className={classes.product_img}
              />
            </div>
            <div className={classes.product_body}>
              <div className={classes.product_nmae_wrapper}>
                <h3>BG Collections</h3>

                <div className={classes.star_wrapper}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p>Perfume</p>
              <p>25ml Mousuf Perfume</p>

              <div className={classes.card_bottom}>
                <p className={classes.price}>#2,500</p>
                <button className={classes.card_btn}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src={product2}
                alt=""
                className={classes.product_img}
              />
            </div>
            <div className={classes.product_body}>
              <div className={classes.product_nmae_wrapper}>
                <h3>Ends Treat</h3>

                <div className={classes.star_wrapper}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p>Food</p>
              <p>Item 7 Rice and Chicken</p>

              <div className={classes.card_bottom}>
                <p className={classes.price}>#3,000</p>
                <button className={classes.card_btn}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src={product3}
                alt=""
                className={classes.product_img}
              />
            </div>
            <div className={classes.product_body}>
              <div className={classes.product_nmae_wrapper}>
                <h3>Homar Crochet</h3>

                <div className={classes.star_wrapper}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p>Fashion Apparel</p>
              <p>love styled shrug</p>

              <div className={classes.card_bottom}>
                <p className={classes.price}>#5,500</p>
                <button className={classes.card_btn}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src={product4}
                alt=""
                className={classes.product_img}
              />
            </div>
            <div className={classes.product_body}>
              <div className={classes.product_nmae_wrapper}>
                <h3>BG Collections</h3>

                <div className={classes.star_wrapper}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p>Perfume</p>
              <p>25ml Mousuf Perfume</p>

              <div className={classes.card_bottom}>
                <p className={classes.price}>#2,500</p>
                <button className={classes.card_btn}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src={product5}
                alt=""
                className={classes.product_img}
              />
            </div>
            <div className={classes.product_body}>
              <div className={classes.product_nmae_wrapper}>
                <h3>BG Collections</h3>

                <div className={classes.star_wrapper}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p>Perfume</p>
              <p>25ml Mousuf Perfume</p>

              <div className={classes.card_bottom}>
                <p className={classes.price}>#2,500</p>
                <button className={classes.card_btn}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src={product6}
                alt=""
                className={classes.product_img}
              />
            </div>
            <div className={classes.product_body}>
              <div className={classes.product_nmae_wrapper}>
                <h3>BG Collections</h3>

                <div className={classes.star_wrapper}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
              <p>Perfume</p>
              <p>25ml Mousuf Perfume</p>

              <div className={classes.card_bottom}>
                <p className={classes.price}>#2,500</p>
                <button className={classes.card_btn}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDisplay;
