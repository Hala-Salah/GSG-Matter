import styles from "./styles.module.css";
import React from "react";
import Nav from "react-bootstrap/Nav";

const NavBarItems = ["Shop", "FABRIC", "Journal", "About"];
const MiddleNavBarItems = () => {
  return (
    <>
    <hr className={styles.hrNavBar}></hr>
      <Nav className="me-auto my-2 my-lg-0" navbarScroll>
        {NavBarItems.map((NavItem) => {
          return (
            <>
              <Nav.Link className={styles.NavBarItem}>{NavItem}</Nav.Link>
            </>
          );
        })}
      </Nav>
    </>
  );
};

export default MiddleNavBarItems;
