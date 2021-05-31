import React from "react";
import "../less/about-me.less";

const AboutMe: React.FunctionComponent = () => {
  return (
    <div className="page-content-container about-me">
      <h2>
        Hi there <span className="icon-text">👋</span>,
      </h2>
      <h1>
        I'm <span className="name-text">Lishuang</span>,
      </h1>
      <h2>
        A student in USTC,
        <br />A beginner of Photograph,
        <br />
        An enjoyer to Make Products,
        <br />A fan of Reading, Travelling, ..., and Life.<span className="icon-text">🤠</span>
      </h2>
      <span className="slice-text">-----</span>
      <div className="section-container">
        <p className="title-text">Other sites:</p>
        <p className="contact-item">
          <img src="/icons/notion.svg" className="icon-img" />
          Notion:{"  "}
          <a target="_black" href="https://www.notion.so/Home-bdf52857b85b44a89b67a0b7fd9ec74c">
            Justfakemoz
          </a>
        </p>
        <p className="contact-item">
          <img src="/icons/github.svg" className="icon-img" />
          Github:{"  "}
          <a target="_black" href="https://github.com/boojack">
            boojack
          </a>
        </p>
        <p className="contact-item">
          <img src="/icons/bilibili.svg" className="icon-img" />
          Bilibili:{"  "}
          <a target="_black" href="https://space.bilibili.com/2064763">
            每天都好想学习
          </a>
        </p>
        <p className="contact-item">
          <img src="/icons/email.svg" className="icon-img" />
          E-mail:{"  "}
          <a href="mailto:imrealleonardo@gmail.com">imrealleonardo@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
