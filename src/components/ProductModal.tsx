import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import "../styles/components/modal.scss";

interface ModalProps {
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const product = useSelector((state: RootState) => state.products.selectedProduct);

  if (!product) return null;

  const handleViewMore = () => {
    if (product?.id) {
      onClose();
      navigate(`/products/${product.id}`);
    } else {
      console.error("Product ID is undefined!");
    }
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button className="btn" onClick={handleViewMore}>View More</button>
        <button className="btn cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ProductModal;

