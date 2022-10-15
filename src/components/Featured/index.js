import React from "react";
import "./style.css";
import SectionTitle from "../SectionTitle";
import Products from "../Products";
import productData from "../Products/productsData";

export const Featured = () => {
  return (
    <>
      <SectionTitle title="Featured" />
      
      <div className="featured-box ">
        {productData.map((product) => {
          return (
            <>
              <Products {...product} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Featured;
