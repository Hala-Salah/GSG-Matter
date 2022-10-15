import React from "react";
import styles from "./styles.module.css";
import Navbar from "react-bootstrap/Navbar";

const LeftNavBarItems = () => {
  return (
    <>
      <Navbar.Brand href="#">
        <img
          className={styles.matterLogo}
          src="./assets/images/matter-logo.png"
          alt="Matter Logo"
        />
      </Navbar.Brand>

    </>
  );
};

export default LeftNavBarItems;
