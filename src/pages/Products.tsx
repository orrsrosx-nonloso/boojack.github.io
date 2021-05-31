import React from "react";
import "../less/products.less";

const Products: React.FunctionComponent = () => {
  const products: Model.Product[] = [
    {
      name: "insmemo",
      url: "https://insmemo.justsven.top/",
      description: "A succinct and stressless e-notebook inspired by flomo and zsxq.",
      opensource: true,
      repositoryUrl: "https://github.com/boojack/insmemo",
    },
    {
      name: "v2ex daily hot topics",
      url: "https://boojack.github.io/v2ex-daily-hot-topic-web/",
      description: "V2EX daily hot topics.",
      opensource: true,
      repositoryUrl: "https://github.com/boojack/v2ex-daily-hot-topic-web",
    },
  ];

  return (
    <div className="page-content-container products">
      <h2>
        I always wanna using the products made by myself,
        <br />
        and achieved it finally. <span className="icon-text">🎉</span>
      </h2>

      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.url} className="product-container">
            <p className="name-text">
              <a target="_blank" href={product.url}>
                {product.name}
              </a>
            </p>
            <p className="desc-text">{product.description}</p>
            <p className="repo-text">
              <a className="url-text link" target="_black" href={product.url}>
                Online Link
              </a>
              <span className="split-text">/</span>
              {product.opensource ? (
                <a className="url-text" target="_black" href={product.repositoryUrl}>
                  <img src="/icons/github.svg" className="icon-img" />
                  {"  "}Source code
                </a>
              ) : null}
            </p>
          </div>
        ))}
        <p>
          ... <i>and so on</i>
        </p>
      </div>
    </div>
  );
};

export default Products;
