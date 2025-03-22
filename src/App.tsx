
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Layout from "./components/LayOut"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/products" element={<Layout> <ProductList /> </Layout>} />
        <Route path="/products/:id" element={<Layout> <ProductDetails /> </Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
