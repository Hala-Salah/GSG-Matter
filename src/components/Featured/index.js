import React from "react";
import "./style.css";
import SectionTitle from "../SectionTitle";
import Products from "../Products";
import products from "../Products/data";

export const Featured = () => {
  return (
    <>
      <SectionTitle title="Featured" />
      
      <div className="featured-box ">
        {products.map((product) => {
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
