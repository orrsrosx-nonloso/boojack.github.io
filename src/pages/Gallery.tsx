import React from "react";
import "../less/gallery.less";

const Gallery: React.FunctionComponent = () => {
  const pictures: Model.Picture[] = [
    {
      url: "https://cdn.jellow.site/FoT_ntMvfYbr8eu_fGLPw7I0iol2v2.jpeg",
      title: "玉兰香苑3期",
      description: "",
    },
    {
      url: "https://cdn.jellow.site/Fpu4Sl45MYFmZJg0Qj0Qw8Nn57aW.jpeg",
      title: "blue sky",
      description: "",
    },
    {
      url: "https://cdn.jellow.site/Fi9DKO3MxLqLQNKe0IQsn4rMJ59kv2.jpeg",
      title: "USTC",
      description: "",
    },
    {
      url: "https://cdn.jellow.site/ljaMYWfI0k3dUTZRXoaE-5hVcTUdv2.png",
      title: "bytedance",
      description: "As an old memo says: 'Byte / heart dance.'",
    },
    {
      url: "https://cdn.jellow.site/looKtIXkZ_MFeWr2Fpo4PpZfRhkpv2.png",
      title: "photographer",
      description: "An old photographer in Beijing.",
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
