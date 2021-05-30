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
      <h2>A student in USTC,</h2>
      <h2>A enjoyer of Making Products,</h2>
      <h2>
        A fan of Reading, Travelling, ..., and Life.<span className="icon-text">🤠</span>
      </h2>
      <span className="slice-text">-----</span>
      <div className="contacts-container">
        <h3>Contacts:</h3>
        <li>
          email:{"  "}
          <a href="mailto:imrealleonardo@gmail.com">imrealleonardo@gmail.com</a>
        </li>
        <li>
          Github:{"  "}
          <a target="_black" href="https://github.com/boojack">
            boojack
          </a>
        </li>
        <li>
          bilibili:{"  "}
          <a target="_black" href="https://space.bilibili.com/2064763">
            每天都好想学习
          </a>
        </li>
      </div>
    </div>
  );
};

export default AboutMe;
