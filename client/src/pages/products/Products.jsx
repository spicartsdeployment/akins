// src/pages/Products/Products.jsx
import React from "react";
import Seo from "../../components/common-components/seo/Seo";

const Products = () => {
  return (
    <>
      <Seo
        description="Explore our diverse products designed to meet your business needs."
        keywords="products, myapp"
      />
      <section>
        <h1>Our Products</h1>
        <p>Explore our diverse range of products tailored for your needs.</p>
        {/* Other content */}
      </section>
    </>
  );
};

export default Products;
