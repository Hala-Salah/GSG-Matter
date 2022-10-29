import React, { useState } from "react";
import styles from "./styles.module.css";

const LeftModalSection = ({ title,productImages}) => {
  const [selectedImage, setImage] = useState(productImages[0]);

  const imageClick = (index) => {
    const selected = productImages[index];
    setImage(selected);
  };

  return (
    <div className={styles.rightSection}>
      <div className={styles.smallDiv}>
        {productImages.map((image, i) => {
          return (
            <>
              <div className={styles.smallImageBox}>
                {" "}
                <img
                  className={
                    selectedImage === image ? styles.clicked : styles.smallImage
                  }
                  src={image}
                  onClick={() => imageClick(i)} alt={title}></img>
              </div>
            </>
          );
        })}
      </div>

      <div className={styles.rightImage}>
        <img className={styles.selectedImage} src={selectedImage} alt={title}/>
      </div>
      <h1>{setImage}</h1>
    </div>
  );
};

export default LeftModalSection;
