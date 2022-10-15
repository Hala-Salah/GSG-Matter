import React from "react";
import ShowMoreBttn from "../../ShowMoreBttn";
import styles from "./styles.module.css";

const shopInfo = [
  { imgSrc: "./assets/images/shop/shop-1.png", shopTitle: "Pants" },
  { imgSrc: "./assets/images/shop/shop-2.png", shopTitle: "Jumpsuits" },
  { imgSrc: "./assets/images/shop/shop-3.png", shopTitle: "Top" },
  { imgSrc: "./assets/images/shop/shop-4.png", shopTitle: "Accessories" },
];
export const ShopItem = () => {
  const [...shop] = shopInfo;
  return (
    <>
      {shop.map((shopItem) => {
        return (
          <>
            <div className={styles.item}>
              <img
                className={styles.shopImg}
                src={shopItem.imgSrc}
                alt="Shop Item"
              />
              <div className={styles.shopName}>
                <h1 className={styles.shopTitle}>{shopItem.shopTitle}</h1>
                <div className={styles.showHideButton}>
                  <ShowMoreBttn buttonName={"Shop Now"} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ShopItem;
