import React from "react";
import classes from "./ProductsDisplay.module.css";

const ProductsDisplay = () => {
  return (
    <section>
      <div className={classes.product_content_wrapper}>
        <div className={classes.product_display_top}>
          <h2>Trending Ads</h2>
          <button>View All Products</button>
        </div>

        <div className={classes.product_cards_wrapper}>
          <div className={classes.product_card}>
            <div className={classes.product_card_img_wrapper}>
              <img
                src="https://s3-alpha-sig.figma.com/img/5f94/6d55/9fb2958bdd1ff8ecd369636d2ddd9321?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XcXtLCQ3ypeX1QVtBx2DKSgeKatPF169uEBSB7uvatdDuwrKynOVtew6pOQyxUWnMHFRwD9~nk11T-XXGH9qRgm9zzlAbCKwDLCv7lOVHkXI768dBShlughD62ahtZo~t-wNiULm9I1gtPhTJvklvi-HZpIVHS~UYt00Pe7rVV-HCeSJDr9mtwzxYWz6IAetzq8jNJd~YXC5LRmbHR6zAccExHSu7b0f3R6bXCFkX7AVazEyGnjI2X5fknps71DMbVK9vVA1AepuUa3t0RXdfFPqRjJIsw~KTJ4JX-AOxsuYOn65RcSx6aQfym3eeecpDIJaOUw0oicXK58p7KXuSQ__"
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
                src="https://s3-alpha-sig.figma.com/img/dcef/654b/9402bd7b41b91ffbdd1dea6e83146fb9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bkQsOcT1IKHcUOdukFUZw2F3WsKg4LiP21iMPBaMYqFgEXGXWwhFhKXbsI-bTh4zxc-MudnAv85cB5CCtDixgGuYthhMYD9NPCS43wDiYztSTx8CBfMzYu1DvPVq3HoJxPekTcZGPMU-FX~qEqeDMoImUWb7Tq2Z6YYA6qYYa7~DopDV-H9JNF~O7klkiksc6Nkdw2oRszZQb38ZItmlmpjfwmt-yyLdJy-pPSyA9wmX25~~6lPv0hay9r3vvsr0w7cG3a6xDA0-OJRJte7lsLXCmjNSRiMwgH7c21W6e7DC2lwIUl5PwEZGaIFLe9I6I9znIU5hd6fqHcwj-81Gcw__"
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
                src="https://s3-alpha-sig.figma.com/img/ed71/6b3a/08ec7b8fca9c4836629119e0fafa7ce9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qV6M2o3cQuHe2~O6nHcIWBbao4McJh1deJpSmqVdveuqOlEy7NvxqMSmj-CPuwQVusUFVdmVbLdivRKXkk3Zvu0j-gwzO1SRKvB6jEKSqPz0WjbI~cLAFmncLrPuWwIAvZOdDABkmmkwOTzfTkyw37uV56v7ili6vXWMo2ZHke4kdINr6AUxrPdKrnLAOi763XXMS2YWocMkwxBxntY0UrTecZNxlaYu6uWZfiE1J~0B~mEm3MgCVgQUF4pZPtFg7pSFndUShSeFY2Oc5W30GElmBxMG0hRjdjU9UB8pv7UXCsRVexkwzs-M2OYDF5jsGma5gzMDUH4SUmnLKZNw3g__"
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
                src="https://s3-alpha-sig.figma.com/img/4ac2/61a2/b475c9680ebd828ee7be84137cf2036f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oFH~7iYkMIZGhokGnC30d1Eu7ENLh7d~V7~c6XCnmMVCyGK4JyTmWf9qocT97Q~jM-TEyV3pwxplOkC8GyJlG~AeafeXQ3g1n3BqTfFGcDJWkmxu4SVeKlc35FkSfpb4m3WftO5JMS1Qi1TZ16Jc676gfcdLdwEdFCQPBj-n0sPxjsPCt9dm-D2BgROjtIwiisBfZZh~c4jaI7YnsdCYMfTtyEPtYJAgw1ZqS~YypvqNEpU5aOLU9l7Ypl5P35zx5G2bUTWufNetwdRJ9PKR8Q7fJ5V14Xfev-vCLU3W5mgCPXUZ7JqNeIKN1oQxJc0voNbIG~JvZn9mVT-H93zlVQ__"
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
                src="https://s3-alpha-sig.figma.com/img/fcb6/d74f/50060d157ba22861a287065f699a867f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WL48zztbf-Ri9~eb-W72ABNUIeXEIdcqfS~M0yS7DH6Pv6ERkn1IDh4SeePr5Cd8P2L90UT9BCF8rdqcm3Rmb75hC4a4GFlN7ZqYRwiYqQMxC~S6oeJXXUi9GOcDRkGCDfxNlaBOJWrBdoFfyJkeQ4fvVOMTZEMxpRDsKEO2tcvyxmPddY6BlqOya9VHOCfwPWTCVj36A-mF8NkTqUfhKbOy5Qf6aiQ4nTbU7frCtBwa~wS~in4HmjsqwQfoIt7Vu7mkmflvJ8BD~8WDNg0Oy0KbWuWSwOOH-aaTFq-ctC2DKPIJvS9985xp-uWM8Xios0osmPMe41mETIYNvyZPDQ__"
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
                src="https://s3-alpha-sig.figma.com/img/ec1f/5429/bf13ad3f5f24f7753305a2bf0704aaf3?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F~whTM~J2grC2K38C9LMLuuXtFsjcnCeQVlkma3FeOSWD~NWRPpB5x9~hea0rFLe9M2mhDPpIcBLI49bp~hl3MOMjn-H7pglrVvwSZlQOru4vbyyLUey44~kNUFIvfaZqTdhCWwrViN9jcTFBHkXpVOOzY5yzZuosHxuwQtU75npjjoqj4vbol0xs4co-Q7lh0J8yMPrSt8ByFF-wEM0uLC8LapHShOr7rjySpoGcvEiHh1mLAJlzDNZOoiQli0WX9v~td4G2m2uko1n1-ACoAR4yehMoSxysNf3CevlkVMGUGQXLbzNJxCzp5BJyBn-RFdj7EBBjeJG1b0JK9rdSQ__"
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
