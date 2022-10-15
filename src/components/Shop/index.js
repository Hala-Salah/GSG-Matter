import React from "react";
import styles from "./styles.module.css";
import ShopItem from "./ShopItem";
import SectionTitle from "../SectionTitle";

export const Shop = () => {
  return (
    <>
      <SectionTitle title={"Shop"} />
      <div className={styles.shopItems}>
        <ShopItem />
      </div>
    </>
  );
};

export default Shop;
