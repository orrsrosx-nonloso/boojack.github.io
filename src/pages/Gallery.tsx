import React from "react";
import "../less/gallery.less";

const Gallery: React.FunctionComponent = () => {
  const pictures: Model.Picture[] = [
    {
      url: "https://justsven-1252712135.cos.ap-shanghai.myqcloud.com/mine-site/bytedance-min.jpg",
      title: "bytedance",
      description: "As an old memo says: 'Byte / heart dance.'",
    },
    {
      url: "https://justsven-1252712135.cos.ap-shanghai.myqcloud.com/mine-site/photographer-min.jpg",
      title: "photographer",
      description: "An old photographer in Beijing.",
    },
    {
      url: "https://justsven-1252712135.cos.ap-shanghai.myqcloud.com/mine-site/windows-min.jpg",
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
