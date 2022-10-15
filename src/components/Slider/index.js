import React from "react";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="./assets/images/slider/slider1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className={styles.sliderTitle}>
              Perfume Tips Tricks <br></br>
              <span className={styles.sliderBttn}>Shop Now</span>
            </p>{" "}
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="./assets/images/slider/slider2.png"
            alt="First slide"
          />
          <Carousel.Caption className="sliderDes">
            <p className={styles.sliderTitle}>
              Perfume Tips Tricks <br></br>
              <span className={styles.sliderBttn}>Shop Now</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </>
  );
};

export default Slider;
