(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GAK5:function(e,t,n){e.exports={wrap:"filterItem-module--wrap--PqKqY",xBox:"filterItem-module--xBox--1Xwap"}},JXfs:function(e,t,n){"use strict";n.r(t);var a=n("KQm4"),r=n("q1tI"),o=n.n(r),c=n("VVKA"),i=n.n(c),l=n("Xb6N"),m=n.n(l),s=n("O5R8"),u=n("Wbzz"),p={React:s.react,"React-Native":s.react,Javascript:s.javascript,"Node.js":s.node,Gatsby:s.gatsby,Typescript:s.typescript,Python:s.python,Redux:s.redux},d=function(e){var t=e.project;return o.a.createElement("div",{className:m.a.wrap},o.a.createElement("div",{className:m.a.imgContainer},o.a.createElement("img",{className:m.a.projectImg,src:t.existMainImg?"/projectImgs/"+t.link+"/"+t.link+"-main.png":s.NoImg,onLoad:function(e){var t=e.target,n=t.width/t.height;t.className+=n>=1.3?" projectImg-horizontal":" projectImg-vertical"}})),o.a.createElement("div",{className:m.a.infoContainer},o.a.createElement("div",{className:m.a.infoSection1},o.a.createElement("h3",null,t.name),o.a.createElement("p",null,t.description),o.a.createElement("ul",null,o.a.createElement("li",null,"기간: ",t.term))),o.a.createElement("div",{className:m.a.techContainer},t.tech.map((function(e,t){return o.a.createElement("img",{key:t,className:m.a.imgTech,src:p[e],alt:e,title:e})})))),o.a.createElement("div",{className:m.a.btnContainer},o.a.createElement(u.a,{to:"/project/"+t.link,className:m.a.btnDetail},"Detail")))},f=n("GAK5"),v=n.n(f),E=function(e){var t=e.value,n=e.removeFilterItem,a=Object(r.useRef)(null);return o.a.createElement("span",{className:v.a.wrap,ref:a,onClick:function(){n(t)},onMouseOver:function(){var e=a.current.children.item(0);e&&(e.style.opacity=1,a.current.style.color="#7574b0")},onMouseLeave:function(){var e=a.current.children.item(0);e&&(e.style.opacity=0,a.current.style.color="#fbfbfb")}},t,o.a.createElement("span",{className:v.a.xBox},"X"))},x=n("Zttt"),h=n("UJmF");t.default=function(){var e=n("mWwD"),t=Object(r.useState)([]),c=t[0],l=t[1],m=Object(r.useState)(e),s=m[0],u=m[1],p=Object(r.useRef)(null),f=!1,v=0,j=function(e){for(var t=0;t<c.length;t++)if(!e.tech.includes(c[t]))return!1;return!0};return Object(r.useEffect)((function(){p.current.onmousedown=function(){f=!0},p.current.onmouseup=function(){f=!1,v=0},p.current.onmousemove=function(e){if(f){var t=e.x-v;p.current.scrollLeft-=t,v=e.x}}}),[]),Object(r.useEffect)((function(){return u(e.filter(j))}),[c]),o.a.createElement(x.a,{title:"Projects"},o.a.createElement("div",{className:i.a.contentInnerContainer},o.a.createElement("div",{className:i.a.searchContainer},o.a.createElement("div",{className:i.a.searchSelectContainer},o.a.createElement("h3",null,"총 ",s.length,"건"),o.a.createElement("select",{className:i.a.searchSelect,onChange:function(e){var t;"기술 스택 필터"===(t=e.target.value)||c.includes(t)||l([].concat(Object(a.a)(c),[t]))}},o.a.createElement("option",{defaultValue:!0},"기술 스택 필터"),o.a.createElement("option",null,"Javascript"),o.a.createElement("option",null,"Typescript"),o.a.createElement("option",null,"React"),o.a.createElement("option",null,"React-Native"),o.a.createElement("option",null,"Node.js"),o.a.createElement("option",null,"Gatsby"),o.a.createElement("option",null,"Python"),o.a.createElement("option",null,"Redux"))),o.a.createElement("div",{id:"selectedContainer",ref:p,className:i.a.selectedValueContainer},c.map((function(e,t){return o.a.createElement(E,{value:e,key:t,removeFilterItem:function(e){return l(c.filter((function(t){return t!==e})))}})})))),s.map((function(e,t){return o.a.createElement(d,{key:t,project:e})})),o.a.createElement(h.a,null)))}},NVGq:function(e,t,n){e.exports={wrap:"layout-module--wrap--2SRVJ",centerWrap:"layout-module--centerWrap--13699",topTitleContainer:"layout-module--topTitleContainer--3Ndqx",topTitleBox:"layout-module--topTitleBox--1cpxc",topTitle:"layout-module--topTitle--1kIgi",contentContainer:"layout-module--contentContainer--TcsAc"}},UJmF:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(){return r.a.createElement("div",{style:{height:"50px"}})}},VVKA:function(e,t,n){e.exports={wrap:"projectList-module--wrap--1ge2L",centerWrap:"projectList-module--centerWrap--2JK9D",topTitleContainer:"projectList-module--topTitleContainer--1ijCj",topTitleBox:"projectList-module--topTitleBox--1t3Oy",topTitle:"projectList-module--topTitle--sXsbI",contentContainer:"projectList-module--contentContainer--3g7-1",contentInnerContainer:"projectList-module--contentInnerContainer--2bK93",searchContainer:"projectList-module--searchContainer--2grxT",searchSelectContainer:"projectList-module--searchSelectContainer--v3DVz",selectedValueContainer:"projectList-module--selectedValueContainer--y63wR"}},Xb6N:function(e,t,n){e.exports={wrap:"projectBox-module--wrap--1GCaG",imgContainer:"projectBox-module--imgContainer--3AdgJ",infoContainer:"projectBox-module--infoContainer--13ApS",infoSection1:"projectBox-module--infoSection1--3p2-J",btnContainer:"projectBox-module--btnContainer--zALzk",btnDetail:"projectBox-module--btnDetail--1p_--",techContainer:"projectBox-module--techContainer--VEtXK",imgTech:"projectBox-module--imgTech--C17cD",projectImg:"projectBox-module--projectImg--3AXyE"}},Zttt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NVGq"),c=n.n(o);t.a=function(e){var t=e.children,n=e.title;return r.a.createElement("div",{className:c.a.wrap},r.a.createElement("div",{className:c.a.centerWrap},r.a.createElement("div",{className:c.a.topTitleContainer},r.a.createElement("div",{className:c.a.topTitleBox},r.a.createElement("h1",{className:c.a.topTitle},n))),r.a.createElement("div",{className:c.a.contentContainer},t)))}},mWwD:function(e){e.exports=JSON.parse('[{"name":"VocaGlory","tech":["Typescript","React-Native"],"description":"안드로이드 전용 영단어 어플","term":"2020.10 - 2020.10","link":"vocaglory","existMainImg":true},{"name":"Mat","tech":["Typescript","React-Native"],"description":"모바일 명함 관리 어플","term":"2020.07 - 2020.10","link":"mat","existMainImg":true},{"name":"ExportedTalk-BE","tech":["Javascript","Node.js"],"description":"내보낸 카카오톡 재구현을 위한 백엔드 서버","term":"2020.12 - 2020.12","link":"exportedtalk-be","existMainImg":false},{"name":"ExportedTalk-FE","tech":["Javascript","React","Redux"],"description":"내보낸 카카오톡 재구현을 위한 프론트엔드 서버","term":"2020.12 - 2021.01","link":"exportedtalk-fe","existMainImg":true},{"name":"BeepBeep-Morse","tech":["Python"],"description":"입력한 텍스트를 모스 부호로 출력해주는 윈도우 프로그램","term":"2019.10 - 2019.10","link":"beepbeep-morse","existMainImg":true},{"name":"Portfolio-Gatsby","tech":["Javascript","React","Gatsby"],"description":"개인 포트폴리오 사이트","term":"2021.01 - 2021.01","link":"portfolio-gatsby","existMainImg":false},{"name":"Node-Markdown-To-HTML","tech":["Typescript","Node.js"],"description":"로컬의 .md 파일을 HTML 문자열로 변환해주는 라이브러리","term":"2020.12 - 2020.12","link":"md-to-html","existMainImg":true}]')}}]);
//# sourceMappingURL=component---src-pages-project-list-js-05680ab9ecc31b2b0dae.js.map