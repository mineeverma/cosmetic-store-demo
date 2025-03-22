import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Layout.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <h1><Link to="/">My Store</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
