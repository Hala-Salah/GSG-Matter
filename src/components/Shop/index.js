import React from "react";
import "./style.css";
import ShopItem from "./ShopItem";
import SectionTitle from "../SectionTitle";

export const Shop = () => {
  return (
    <>
      <SectionTitle title={"Shop"} />
      <div className="shop-items">
        <ShopItem />
      </div>
    </>
  );
};

export default Shop;
