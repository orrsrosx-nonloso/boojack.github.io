import React from "react";
import "../less/products.less";

const Products: React.FunctionComponent = () => {
  const products: Model.Product[] = [
    {
      name: "insmemo",
      url: "https://insmemo.justsven.top/",
      description: "A simple notebook inspired by flomo.",
    },
    {
      name: "v2ex daily hot topics",
      url: "https://boojack.github.io/v2ex-daily-hot-topic-web/",
      description: "V2EX daily hot topics.",
    },
  ];

  return (
    <div className="page-content-container products">
      <h2>I always think about the product made by myself.</h2>
      <h2>
        And I made it finally. <span className="icon-text">🎉</span>
      </h2>

      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.url} className="product-container">
            <p className="name-text">{product.name}</p>
            <p className="desc-text">{product.description}</p>
            <p className="url-text">
              Link:{" "}
              <a target="_blank" href={product.url}>
                {product.url}
              </a>
            </p>
          </div>
        ))}
        <p>
          ... <i>to be continue</i>
        </p>
      </div>
    </div>
  );
};

export default Products;
