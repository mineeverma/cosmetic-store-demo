import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProduct } from "../redux/productSlice";
import { RootState, AppDispatch } from "../redux/store";
import ProductModal from "../components/ProductModal";
import "../styles/components/ProductList.scss";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <h2>Our Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="product-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => {
              dispatch(selectProduct(product));
              setIsModalOpen(true);
            }}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
      {isModalOpen && <ProductModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ProductList;
