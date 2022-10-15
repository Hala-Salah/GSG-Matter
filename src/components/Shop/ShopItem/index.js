import React from "react";
import "./style.css";

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
            <div className="item">
              <img className="shop-img" src={shopItem.imgSrc} alt="Shop Item" />
              <div className="shop-name">
                <p>{shopItem.shopTitle}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ShopItem;
