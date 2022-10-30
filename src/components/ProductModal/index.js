import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";
import products from "../Products/data";
import LeftModalSection from "./LeftModalSection";
import { AiOutlineClose } from "react-icons/ai";
import RightModalSection from "./RightModalSection";

function ProductModal({ productID }) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const viewedProduct = products.find((IDProduct) => IDProduct.id === productID);
const productImages=viewedProduct.images
  return (
    <>
      <Modal className={styles.modalContainer} isOpen={modalIsOpen}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{viewedProduct.title}</div>
          <div onClick={() => setModalIsOpen(!modalIsOpen)}>
            <button className={styles.closeModal}>
              <AiOutlineClose />
            </button>
            
          </div>
        </div>
        <div className={styles.modalBody}>
          <LeftModalSection productImages={productImages}title={viewedProduct.title}/>
          <RightModalSection {...viewedProduct}/>
          
        </div>
      </Modal>
    </>
  );
}

export default ProductModal;
