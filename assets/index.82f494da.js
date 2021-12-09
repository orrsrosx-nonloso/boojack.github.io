import{r as e,R as t,H as a,L as n,N as l,S as c,a as s,b as r,c as i}from"./vendor.2cf550b9.js";const m=new Date("1998/7/25 23:59:59").getTime();function o(){return((Date.now()-m)/1e3/3600/24/365).toFixed(9)}const p=()=>{const[a,n]=e.exports.useState(o());return e.exports.useEffect((()=>{let e=0;const t=()=>{n(o()),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>{window.cancelAnimationFrame(e)}}),[]),t.createElement("div",{className:"page-content-container about-me"},t.createElement("h2",null,"Hi there ",t.createElement("span",{className:"icon-text"},"👋"),","),t.createElement("h1",null,"I'm ",t.createElement("span",{className:"name-text"},"Steven"),","),t.createElement("h2",null,"A student in USTC,",t.createElement("br",null),"A beginner in Photography,",t.createElement("br",null),"An enjoyer of Making Products,",t.createElement("br",null),"A fan of Reading, Travelling, ..., and Life.",t.createElement("span",{className:"icon-text"},"🤠")),t.createElement("span",{className:"slice-text"},"-----"),t.createElement("div",{className:"section-container"},t.createElement("p",{className:"title-text"},"Information:"),t.createElement("p",{className:"info-item"},"Name:","  ","Steven"),t.createElement("p",{className:"info-item"},"Gender:","  ","Male"),t.createElement("p",{className:"info-item"},"Age:","  ",a),t.createElement("p",{className:"info-item"},"Location:","  ","Suzhou/Shanghai China"),t.createElement("p",{className:"info-item"},"E-mail:","  ",t.createElement("a",{href:"mailto:imrealleonardo@gmail.com"},t.createElement("img",{src:"./icons/email.svg",className:"icon-img"}),"imrealleonardo@gmail.com"))),t.createElement("span",{className:"slice-text"},"-----"),t.createElement("div",{className:"section-container"},t.createElement("p",{className:"title-text"},"Other sites:"),t.createElement("p",{className:"contact-item"},t.createElement("img",{src:"./icons/notion.svg",className:"icon-img"}),"Notion:","  ",t.createElement("a",{target:"_black",href:"https://www.notion.so/Home-bdf52857b85b44a89b67a0b7fd9ec74c"},"Justfakemoz")),t.createElement("p",{className:"contact-item"},t.createElement("img",{src:"./icons/github.svg",className:"icon-img"}),"Github:","  ",t.createElement("a",{target:"_black",href:"https://github.com/boojack"},"boojack")),t.createElement("p",{className:"contact-item"},t.createElement("img",{src:"./icons/bilibili.svg",className:"icon-img"}),"Bilibili:","  ",t.createElement("a",{target:"_black",href:"https://space.bilibili.com/2064763"},"每天都好想学习"))),t.createElement("span",{className:"slice-text"},"-----"),t.createElement("div",{className:"section-container"},t.createElement("p",{className:"contact-item"},t.createElement("a",{target:"_black",href:"https://beian.miit.gov.cn"},"鄂ICP备2021009299号-1"))))};const u=()=>t.createElement("div",{className:"page-content-container products"},t.createElement("h2",null,"I always wanna using the products made by myself,",t.createElement("br",null),"and achieved it finally. ",t.createElement("span",{className:"icon-text"},"🎉")),t.createElement("div",{className:"products-wrapper"},[{name:"Memos",url:"https://memos.justsven.top/",description:"An open-source alternative to flomo.",opensource:!0,repositoryUrl:"https://github.com/JustMemos/memos"},{name:"v2ex daily hot topics",url:"https://boojack.github.io/v2ex-daily-hot-topic-web/",description:"V2EX daily hot topics.",opensource:!0,repositoryUrl:"https://github.com/boojack/v2ex-daily-hot-topic-web"},{name:"Notes",url:"",description:"Brilliant notes book with markdown. ...waiting to be dev",opensource:!1,repositoryUrl:""}].map((e=>t.createElement("div",{key:e.url,className:"product-container"},t.createElement("p",{className:"name-text"},e.url?t.createElement("a",{target:"_blank",href:e.url},e.name):e.name),t.createElement("p",{className:"desc-text"},e.description),t.createElement("p",{className:"repo-text"},e.url?t.createElement(t.Fragment,null,t.createElement("a",{className:"url-text link",target:"_black",href:e.url},"Online Link"),t.createElement("span",{className:"split-text"},"/")):null,e.opensource?t.createElement("a",{className:"url-text",target:"_black",href:e.repositoryUrl},t.createElement("img",{src:"./icons/github.svg",className:"icon-img"}),"  ","Source code"):null)))),t.createElement("p",null,"... See more at"," ",t.createElement("a",{target:"_black",href:"https://github.com/boojack"},"My Github"))));const E=()=>t.createElement("div",{className:"page-content-container gallery"},t.createElement("h2",null,"Maybe not good at first sight, ",t.createElement("br",null)," but will be enjoyable in the next sights. ",t.createElement("span",{className:"icon-text"},"📷")),t.createElement("div",{className:"pictures-wrapper"},[{url:"https://cdn.jellow.site/FoT_ntMvfYbr8eu_fGLPw7I0iol2v2.jpeg",title:"玉兰香苑3期",description:""},{url:"https://cdn.jellow.site/Fpu4Sl45MYFmZJg0Qj0Qw8Nn57aW.jpeg",title:"blue sky",description:""},{url:"https://cdn.jellow.site/Fi9DKO3MxLqLQNKe0IQsn4rMJ59kv2.jpeg",title:"USTC",description:""},{url:"https://cdn.jellow.site/ljaMYWfI0k3dUTZRXoaE-5hVcTUdv2.png",title:"bytedance",description:"As an old memo says: 'Byte / heart dance.'"},{url:"https://cdn.jellow.site/looKtIXkZ_MFeWr2Fpo4PpZfRhkpv2.png",title:"photographer",description:"An old photographer in Beijing."}].map((e=>t.createElement("div",{key:e.url,className:"picture-container"},t.createElement("img",{className:"img",src:e.url,alt:e.title,decoding:"async",referrerPolicy:"no-referrer",loading:"lazy"}),t.createElement("p",{className:"name-text"},t.createElement("a",{target:"_blank",href:e.url},e.title)),t.createElement("p",{className:"desc-text"},e.description)))),t.createElement("p",null,"... ",t.createElement("i",null,"waiting to continue"))));function d(){e.exports.useEffect((()=>{const e=location.hash.slice(2);["site","products","gallery"].includes(e)?document.title="Steven's "+e:document.title="Steven's site"}),[]);const i=e=>{document.title="Steven's "+e};return t.createElement(a,null,t.createElement("div",{className:"nav-wrapper"},t.createElement(n,{className:"nav-btn slogan-text",to:"/site",onClick:()=>{i("site")}},"Steven's"),t.createElement(l,{className:"nav-btn",activeClassName:"active",to:"/site",onClick:()=>{i("site")}},"Site"),t.createElement("span",{className:"split-text"},"/"),t.createElement(l,{className:"nav-btn",activeClassName:"active",to:"/products",onClick:()=>{i("products")}},"Products"),t.createElement("span",{className:"split-text"},"/"),t.createElement(l,{className:"nav-btn",activeClassName:"active",to:"/gallery",onClick:()=>{i("gallery")}},"Gallery")),t.createElement("div",{className:"page-container"},t.createElement(c,null,t.createElement(s,{path:"/products"},t.createElement(u,null)),t.createElement(s,{path:"/gallery"},t.createElement(E,null)),t.createElement(s,{path:"/site"},t.createElement(p,null)),t.createElement(r,{to:"/site"}))))}i.render(t.createElement(t.StrictMode,null,t.createElement(d,null)),document.getElementById("root"));
