import React from "react";
import "../less/gallery.less";

const Gallery: React.FunctionComponent = () => {
  const pictures: Model.Picture[] = [
    {
      url: "https://justsven-1252712135.cos.ap-shanghai.myqcloud.com/mine-site/bytedance.jpg",
      title: "bytedance",
      description: "",
    },
    {
      url: "https://justsven-1252712135.cos.ap-shanghai.myqcloud.com/mine-site/photographer.jpg",
      title: "photographer",
      description: "An old photographer in Beijing.",
    },
    {
      url: "https://justsven-1252712135.cos.ap-shanghai.myqcloud.com/mine-site/windows.jpg",
      title: "windows",
      description: "The sky in two windows.",
    },
  ];

  return (
    <div className="page-content-container gallery">
      <h2>
        Maybe not good at first sight, but enjoyable at next sight. <span className="icon-text">📷</span>
      </h2>

      <div className="pictures-wrapper">
        {pictures.map((picture) => (
          <div key={picture.url} className="picture-container">
            <img className="img" src={picture.url} alt="" />
            <p className="name-text">{picture.title}</p>
            <p className="desc-text">{picture.description}</p>
            <p className="url-text">
              <a target="_blank" href={picture.url}>
                <i>link</i>
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

export default Gallery;
