import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./styles.module.css"

const NavBarIcons = [
  "./assets/images/NavBarIcons/search.svg",
  "./assets/images/NavBarIcons/heart.svg",
  "./assets/images/NavBarIcons/Shape.svg",
];

const RightNavBarItems = () => {
  return (
    <div className="d-flex">
      <Nav.Link className={styles.NavBarItem} >LOGIN</Nav.Link>
      {
        NavBarIcons.map((icon)=>{

            return <div className={styles.NavBarIcons} ><img src={icon} alt="Icon" /></div>
        })
      }
    </div>
  );
};

export default RightNavBarItems;
