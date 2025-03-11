import classes from "./ProductCard.module.css"

const ProductCard = () => {
  return (
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
  );
};


export default ProductCard;