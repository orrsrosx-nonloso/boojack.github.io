import React, { useEffect, useState } from "react";
import "../less/about-me.less";

const birthDayTimestamp = new Date("1998/7/25 23:59:59").getTime();
function getAge() {
  const nowTimestamp = Date.now();
  const age = ((nowTimestamp - birthDayTimestamp) / 1000 / 3600 / 24 / 365).toFixed(9);
  return age;
}

const AboutMe: React.FunctionComponent = () => {
  const [age, setAge] = useState(getAge());

  useEffect(() => {
    let timeId = 0;

    const updateAge = () => {
      setAge(getAge());
      timeId = requestAnimationFrame(updateAge);
    };
    timeId = requestAnimationFrame(updateAge);

    return () => {
      window.cancelAnimationFrame(timeId);
    };
  }, []);

  return (
    <div className="page-content-container about-me">
      <h2>
        Hi there <span className="icon-text">👋</span>,
      </h2>
      <h1>
        I'm <span className="name-text">Steven</span>,
      </h1>
      <h2>
        A student in USTC,
        <br />
        A beginner in Photography,
        <br />
        An enjoyer of Making Products,
        <br />A fan of Reading, Travelling, ..., and Life.<span className="icon-text">🤠</span>
      </h2>
      <span className="slice-text">-----</span>
      <div className="section-container">
        <p className="title-text">Information:</p>
        <p className="info-item">
          Name:{"  "}
          Steven
        </p>
        <p className="info-item">
          Gender:{"  "}
          Male
        </p>
        <p className="info-item">
          Age:{"  "}
          {age}
        </p>
        <p className="info-item">
          Location:{"  "}
          Suzhou/Shanghai China
        </p>
        <p className="info-item">
          E-mail:{"  "}
          <a href="mailto:imrealleonardo@gmail.com">
            <img src="./icons/email.svg" className="icon-img" />
            imrealleonardo@gmail.com
          </a>
        </p>
      </div>
      <span className="slice-text">-----</span>
      <div className="section-container">
        <p className="title-text">Other sites:</p>
        <p className="contact-item">
          <img src="./icons/notion.svg" className="icon-img" />
          Notion:{"  "}
          <a target="_black" href="https://www.notion.so/Home-bdf52857b85b44a89b67a0b7fd9ec74c">
            Justfakemoz
          </a>
        </p>
        <p className="contact-item">
          <img src="./icons/github.svg" className="icon-img" />
          Github:{"  "}
          <a target="_black" href="https://github.com/boojack">
            boojack
          </a>
        </p>
        <p className="contact-item">
          <img src="./icons/bilibili.svg" className="icon-img" />
          Bilibili:{"  "}
          <a target="_black" href="https://space.bilibili.com/2064763">
            每天都好想学习
          </a>
        </p>
      </div>
      <span className="slice-text">-----</span>
      <div className="section-container">
        <p className="contact-item">
          <a target="_black" href="https://beian.miit.gov.cn">
            鄂ICP备2021009299号-1
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
