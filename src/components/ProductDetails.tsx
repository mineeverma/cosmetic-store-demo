import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ensure correct type
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);

  const fetchProduct = async (productId: string) => {
        try {
          const res = await fetch(`https://dummyjson.com/products/${productId}`);
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          setProduct(null);
        }
      };
    
      useEffect(() => {
      if (id) fetchProduct(id);
      else console.error("Product ID is undefined!"); return;
    }, [id]);
      
    
      if (!product) {
        setTimeout(() => {
          return <p>Product not found</p>;
        },500) 
      }

  return (
    
    <div className="product-details">
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <img src={product?.thumbnail} alt={product?.title} />
      <p><b>Price: </b>{product?.price}</p>
      <p><b>Warranty: </b>{product?.warrantyInformation}</p>
      <button className="btn" onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;


