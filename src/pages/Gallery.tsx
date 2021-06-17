import React from "react";
import "../less/gallery.less";

const BASE_CDN_URL = "http://cdn.justsven.top/";

const Gallery: React.FunctionComponent = () => {
  const pictures: Model.Picture[] = [
    {
      url: BASE_CDN_URL + "sky-wuhan-min.jpg",
      title: "blue sky",
      description: "",
    },
    {
      url: BASE_CDN_URL + "sunshine-ustc-min.jpg",
      title: "sunset",
      description: "",
    },
    {
      url: BASE_CDN_URL + "bytedance-min.jpg",
      title: "bytedance",
      description: "As an old memo says: 'Byte / heart dance.'",
    },
    {
      url: BASE_CDN_URL + "photographer-min.jpg",
      title: "photographer",
      description: "An old photographer in Beijing.",
    },
    {
      url: BASE_CDN_URL + "windows-min.jpg",
      title: "windows",
      description: "The sky in two windows.",
    },
  ];

  return (
    <div className="page-content-container gallery">
      <h2>
        Maybe not good at first sight, <br /> but will be enjoyable in the next sights. <span className="icon-text">📷</span>
      </h2>

      <div className="pictures-wrapper">
        {pictures.map((picture) => (
          <div key={picture.url} className="picture-container">
            <img className="img" src={picture.url} alt={picture.title} decoding="async" referrerPolicy="no-referrer" loading="lazy" />
            <p className="name-text">
              <a target="_blank" href={picture.url}>
                {picture.title}
              </a>
            </p>
            <p className="desc-text">{picture.description}</p>
          </div>
        ))}
        <p>
          ... <i>waiting to continue</i>
        </p>
      </div>
    </div>
  );
};

export default Gallery;
