(()=>{"use strict";var n,t={756:(n,t,A)=>{A.d(t,{Z:()=>C});var e=A(537),r=A.n(e),i=A(645),o=A.n(i)()(r());o.push([n.id,"/* mobile min-width:320px*/\n* {\n\tbox-sizing: border-box;\n}\nhtml, body {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: 'Nunito', sans-serif;\n\tscroll-behavior: smooth;\n}\n\n.skip_to_content {\n    padding: 10px 20px;\n\twidth: 55px;\n\theight: 55px;\n    order: 1;\n    z-index: 40;\n    position: absolute;\n    text-decoration: none;\n    transform: translate(-250px, -80px);\n    right: 0;\n    color: #f0bb62;\n    width: 0;\n    opacity: 0;\n    background-color:rgb(44, 44, 107);\n}\n.skip_to_content:focus {\n    transform: translate(0, 60px);\n    right: 0;\n    outline: 2px solid #f0bb62;\n    color: #f0bb62;\n    opacity: 1;\n    display: block;\n    width: 150px;\n}\n\nheader {\n\tdisplay: flex;\n\tbackground-color: #62959C;\n\tcolor: white;\n\tjustify-content: space-around;\n    align-items: center;\n    position: relative;\n    height: 55px;\n\tfont-weight: 600;\n    text-shadow: 1px 1px #141414\n}\nheader h1 {\n\tfont-size: 25px;\n}\n.hamburger {\n\twidth: 55px;\n\theight: 55px;\n\tcursor: pointer;\n\tfont-size:large;\n\tpadding: 10px;\n\tposition: absolute;\n\tleft: 0;\n\ttext-decoration: none;\n}\n.menu {\n\tbackground-color: #62959C;\n\tpadding: 10px;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\ttransform: translate(-250px, 50px);\n\ttransition: transform 0.3s ease-in-out;\n}\n.menu.open {\n\ttransform: translate(0, 50px);\n\ttransition: transform 0.3s ease-in-out;\n}\nnav ul li {\n\tmargin: 5px;\n\tlist-style: none;\n}\nnav ul li a {\n\tmin-width: 55px;\n\tmin-height: 55px;\n\tcolor: white;\n\talign-items: center;\n\tdisplay: inline-flex;\n\ttext-decoration: none;\n}\n\nmain {\n\toverflow: hidden;\n\tbackground-color: #A0BCC2;\n}\n#hero {\n\tbackground-position: center;\n\tbackground-size: cover;\n}\n#hero > .hero_content {\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 30px;\n\ttext-align: center;\n\tbackground: linear-gradient(\n        0deg,\n        rgba(0, 0, 0, 0.505) 100%,\n        rgba(0, 0, 0, 0) 100%\n    );\n}\n#hero > .hero_content h2 {\n\tcolor: rgb(68, 171, 222);\n    font-weight: 600;\n    font-size: 20px;\n    text-shadow: 1px 1px #141414\n}\n#hero > .hero_content p {\n\tcolor: rgb(63, 156, 203);\n\tfont-size: 15px;\n    font-weight: 600;\n    text-shadow: 1px 1px #141414\n}\n#hero > .hero_content img {\n\twidth: 100%;\n\tmax-height: 200px;\n}\n\n#query {\n    margin-inline: auto;\n    display: block;\n    font-family: inherit;\n    background-color: #62959C;\n    border: none;\n    border-radius: .5em;\n    padding-inline: 2em;\n    margin-block-end: 3em;\n    box-shadow: 2px 2px rgb(0 0 0 / 0.25);\n    min-width: 50px;\n    min-height: 50px;\n\talign-items: center;\n}\n#query, ::placeholder {\n\tcolor: white;\n}\n\n#resto {\n\tpadding: 20px;\n}\n#resto h2 {\n\tcolor: white;\n\tfont-weight: 100;\n\ttext-shadow: 0,5px 1px #141414;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-decoration: solid;\n}\n#resto > .resto_list {\n    margin: 30px auto;\n    text-align:justify;\n    display: flex;\n    grid-row-gap: 30px;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n.resto_item {\n\tbackground-color: white;\n\tdisplay: grid;\n\twidth: 100%;\n\tmax-width: 350px;\n\tborder-radius: 5px;\n\toverflow: hidden;\n}\n.resto_item > .city {\n\twriting-mode: inherit;\n\tflex: 0 0 40px;\n    text-align: center;\n\tposition: absolute;\n\tfont-size: 15px;\n    font-weight: 600;\n    margin: 0;\n    padding: 10px;\n    display: block;\n    background-color: #396EB0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-transform: uppercase;\n}\n.resto_item img {\n\twidth: 100%;\n\theight: 100%;\n}\n.resto_item a {\n    text-decoration: none;\n    min-width: 55px;\n    min-height: 55px;\n    display: flex;\n}\n.resto_item_detail {\n\tpadding: 15px;\n}\n.resto_item_detail > .name-item {\n    font-weight: 800;\n    font-size: 2em;\n    color: black;\n\ttext-align: center;\n}\n.resto_item_detail > .desc {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tline-height: 1.5em;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 5;\n\t-webkit-box-orient: vertical;\n}\n\n.detail_resto {\n\tmax-width: 500px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.detail_resto > .name {\n\ttext-align: center;\n\tfont-size: 25px;\n\ttext-decoration: underline;\n}\n.detail_resto img {\n\tdisplay: block;\n\tborder: 1px solid #ddd;\n\tborder-radius: 4px;\n\tpadding: 5px;\n\twidth: 100%;\n}\n.info_resto {\n\tfont-size: 13px;\n\tline-height: 1em;\n}\n.detail_resto > .desc {\n\tline-height: 1.5em;\n\ttext-align: justify;\n}\n.review {\n\tbackground-color: rgb(104, 160, 177);\n\tborder-radius: 5px;\n\tmargin: 10px;\n\tpadding: 10px;\n}\n\n.like {\n\twidth: 55px;\n\theight: 55px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #db0000;\n\t\n\tposition: fixed;\n\tbottom: 16px;\n\tright: 16px;\n\tborder-radius: 50%;\n\tborder: 0;\n\t\n\tfont-size: 18px;\n\tcolor: white;\n\tcursor: pointer;\n}\n\nfooter {\n\tbackground-color: #62959C;\n\tfont-size: medium;\n\ttext-align: center;\n\tcolor: white;\n\tpadding: 10px;\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["/* mobile min-width:320px*/\n* {\n\tbox-sizing: border-box;\n}\nhtml, body {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfont-family: 'Nunito', sans-serif;\n\tscroll-behavior: smooth;\n}\n\n.skip_to_content {\n    padding: 10px 20px;\n\twidth: 55px;\n\theight: 55px;\n    order: 1;\n    z-index: 40;\n    position: absolute;\n    text-decoration: none;\n    transform: translate(-250px, -80px);\n    right: 0;\n    color: #f0bb62;\n    width: 0;\n    opacity: 0;\n    background-color:rgb(44, 44, 107);\n}\n.skip_to_content:focus {\n    transform: translate(0, 60px);\n    right: 0;\n    outline: 2px solid #f0bb62;\n    color: #f0bb62;\n    opacity: 1;\n    display: block;\n    width: 150px;\n}\n\nheader {\n\tdisplay: flex;\n\tbackground-color: #62959C;\n\tcolor: white;\n\tjustify-content: space-around;\n    align-items: center;\n    position: relative;\n    height: 55px;\n\tfont-weight: 600;\n    text-shadow: 1px 1px #141414\n}\nheader h1 {\n\tfont-size: 25px;\n}\n.hamburger {\n\twidth: 55px;\n\theight: 55px;\n\tcursor: pointer;\n\tfont-size:large;\n\tpadding: 10px;\n\tposition: absolute;\n\tleft: 0;\n\ttext-decoration: none;\n}\n.menu {\n\tbackground-color: #62959C;\n\tpadding: 10px;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\ttransform: translate(-250px, 50px);\n\ttransition: transform 0.3s ease-in-out;\n}\n.menu.open {\n\ttransform: translate(0, 50px);\n\ttransition: transform 0.3s ease-in-out;\n}\nnav ul li {\n\tmargin: 5px;\n\tlist-style: none;\n}\nnav ul li a {\n\tmin-width: 55px;\n\tmin-height: 55px;\n\tcolor: white;\n\talign-items: center;\n\tdisplay: inline-flex;\n\ttext-decoration: none;\n}\n\nmain {\n\toverflow: hidden;\n\tbackground-color: #A0BCC2;\n}\n#hero {\n\tbackground-position: center;\n\tbackground-size: cover;\n}\n#hero > .hero_content {\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 30px;\n\ttext-align: center;\n\tbackground: linear-gradient(\n        0deg,\n        rgba(0, 0, 0, 0.505) 100%,\n        rgba(0, 0, 0, 0) 100%\n    );\n}\n#hero > .hero_content h2 {\n\tcolor: rgb(68, 171, 222);\n    font-weight: 600;\n    font-size: 20px;\n    text-shadow: 1px 1px #141414\n}\n#hero > .hero_content p {\n\tcolor: rgb(63, 156, 203);\n\tfont-size: 15px;\n    font-weight: 600;\n    text-shadow: 1px 1px #141414\n}\n#hero > .hero_content img {\n\twidth: 100%;\n\tmax-height: 200px;\n}\n\n#query {\n    margin-inline: auto;\n    display: block;\n    font-family: inherit;\n    background-color: #62959C;\n    border: none;\n    border-radius: .5em;\n    padding-inline: 2em;\n    margin-block-end: 3em;\n    box-shadow: 2px 2px rgb(0 0 0 / 0.25);\n    min-width: 50px;\n    min-height: 50px;\n\talign-items: center;\n}\n#query, ::placeholder {\n\tcolor: white;\n}\n\n#resto {\n\tpadding: 20px;\n}\n#resto h2 {\n\tcolor: white;\n\tfont-weight: 100;\n\ttext-shadow: 0,5px 1px #141414;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-decoration: solid;\n}\n#resto > .resto_list {\n    margin: 30px auto;\n    text-align:justify;\n    display: flex;\n    grid-row-gap: 30px;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n.resto_item {\n\tbackground-color: white;\n\tdisplay: grid;\n\twidth: 100%;\n\tmax-width: 350px;\n\tborder-radius: 5px;\n\toverflow: hidden;\n}\n.resto_item > .city {\n\twriting-mode: inherit;\n\tflex: 0 0 40px;\n    text-align: center;\n\tposition: absolute;\n\tfont-size: 15px;\n    font-weight: 600;\n    margin: 0;\n    padding: 10px;\n    display: block;\n    background-color: #396EB0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-transform: uppercase;\n}\n.resto_item img {\n\twidth: 100%;\n\theight: 100%;\n}\n.resto_item a {\n    text-decoration: none;\n    min-width: 55px;\n    min-height: 55px;\n    display: flex;\n}\n.resto_item_detail {\n\tpadding: 15px;\n}\n.resto_item_detail > .name-item {\n    font-weight: 800;\n    font-size: 2em;\n    color: black;\n\ttext-align: center;\n}\n.resto_item_detail > .desc {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tline-height: 1.5em;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 5;\n\t-webkit-box-orient: vertical;\n}\n\n.detail_resto {\n\tmax-width: 500px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.detail_resto > .name {\n\ttext-align: center;\n\tfont-size: 25px;\n\ttext-decoration: underline;\n}\n.detail_resto img {\n\tdisplay: block;\n\tborder: 1px solid #ddd;\n\tborder-radius: 4px;\n\tpadding: 5px;\n\twidth: 100%;\n}\n.info_resto {\n\tfont-size: 13px;\n\tline-height: 1em;\n}\n.detail_resto > .desc {\n\tline-height: 1.5em;\n\ttext-align: justify;\n}\n.review {\n\tbackground-color: rgb(104, 160, 177);\n\tborder-radius: 5px;\n\tmargin: 10px;\n\tpadding: 10px;\n}\n\n.like {\n\twidth: 55px;\n\theight: 55px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #db0000;\n\t\n\tposition: fixed;\n\tbottom: 16px;\n\tright: 16px;\n\tborder-radius: 50%;\n\tborder: 0;\n\t\n\tfont-size: 18px;\n\tcolor: white;\n\tcursor: pointer;\n}\n\nfooter {\n\tbackground-color: #62959C;\n\tfont-size: medium;\n\ttext-align: center;\n\tcolor: white;\n\tpadding: 10px;\n}"],sourceRoot:""}]);const C=o},948:(n,t,A)=>{A.d(t,{Z:()=>C});var e=A(537),r=A.n(e),i=A(645),o=A.n(i)()(r());o.push([n.id,"/* tablet */\r\n@media screen and (min-width:700px){\r\n\theader h1 {\r\n\t\tfont-size: 35px;\r\n\t}\r\n\t#hero > .hero_content {\r\n\t\tmin-height: 300px;\r\n\t}\r\n\t#hero > .hero_content h2 {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t#hero > .hero_content p {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t#hero > .hero_content img {\r\n\t\tmin-height: 300px;\r\n\t}\r\n\t#resto > .resto_list {\r\n        gap: 20px;\r\n\t}\r\n\t.detail_resto {\r\n\t\tmax-width: 700px;\r\n\t}\r\n\t.detail_resto > .name {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.detail_resto img {\r\n\t\twidth: 80%;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n}\r\n\r\n/* laptop */\r\n@media screen and (min-width:1024px) {\r\n\t.hamburger {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.menu {\r\n        position: inherit;\r\n        background-color: transparent;\r\n        display: flex;\r\n        padding: 5px;\r\n        transform: none;\r\n        align-items: center;\r\n    }\r\n    .menu.open {\r\n        transform: none;\r\n        transition: none;\r\n    }\r\n    nav ul li {\r\n        display: inline-block;\r\n    }\r\n\t#hero > .hero_content img {\r\n\t\tmin-height: 400px;\r\n\t\tmax-width: 80%\r\n\t}\r\n\t.resto_item {\r\n\t\tmax-width: 300px;\r\n\t}\r\n\t.resto_item img {\r\n\t\twidth: 100%;\r\n\t\tmax-height: 200px;\r\n\t}\r\n\t.detail_resto {\r\n\t\tmax-width: 900px;\r\n\t}\r\n\t.detail_resto img {\r\n\t\twidth: 80%;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\t.info_resto .review {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.detail_resto > .desc .menus {\r\n\t\tfont-size: 23px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width:1440px) {\r\n\t#hero {\r\n\t\tmin-width: 1000px;\r\n\t}\r\n\t#hero > .hero_content img {\r\n\t\tmax-height: 400px;\r\n\t\tmax-width: 80%\r\n\t}\r\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA,WAAW;AACX;CACC;EACC,eAAe;CAChB;CACA;EACC,iBAAiB;CAClB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;CACA;EACC,iBAAiB;CAClB;CACA;QACO,SAAS;CAChB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,eAAe;CAChB;CACA;EACC,UAAU;EACV,iBAAiB;EACjB,kBAAkB;CACnB;AACD;;AAEA,WAAW;AACX;CACC;EACC,aAAa;CACd;CACA;QACO,iBAAiB;QACjB,6BAA6B;QAC7B,aAAa;QACb,YAAY;QACZ,eAAe;QACf,mBAAmB;IACvB;IACA;QACI,eAAe;QACf,gBAAgB;IACpB;IACA;QACI,qBAAqB;IACzB;CACH;EACC,iBAAiB;EACjB;CACD;CACA;EACC,gBAAgB;CACjB;CACA;EACC,WAAW;EACX,iBAAiB;CAClB;CACA;EACC,gBAAgB;CACjB;CACA;EACC,UAAU;EACV,iBAAiB;EACjB,kBAAkB;CACnB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,iBAAiB;CAClB;CACA;EACC,iBAAiB;EACjB;CACD;AACD",sourcesContent:["/* tablet */\r\n@media screen and (min-width:700px){\r\n\theader h1 {\r\n\t\tfont-size: 35px;\r\n\t}\r\n\t#hero > .hero_content {\r\n\t\tmin-height: 300px;\r\n\t}\r\n\t#hero > .hero_content h2 {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t#hero > .hero_content p {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t#hero > .hero_content img {\r\n\t\tmin-height: 300px;\r\n\t}\r\n\t#resto > .resto_list {\r\n        gap: 20px;\r\n\t}\r\n\t.detail_resto {\r\n\t\tmax-width: 700px;\r\n\t}\r\n\t.detail_resto > .name {\r\n\t\tfont-size: 30px;\r\n\t}\r\n\t.detail_resto img {\r\n\t\twidth: 80%;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n}\r\n\r\n/* laptop */\r\n@media screen and (min-width:1024px) {\r\n\t.hamburger {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.menu {\r\n        position: inherit;\r\n        background-color: transparent;\r\n        display: flex;\r\n        padding: 5px;\r\n        transform: none;\r\n        align-items: center;\r\n    }\r\n    .menu.open {\r\n        transform: none;\r\n        transition: none;\r\n    }\r\n    nav ul li {\r\n        display: inline-block;\r\n    }\r\n\t#hero > .hero_content img {\r\n\t\tmin-height: 400px;\r\n\t\tmax-width: 80%\r\n\t}\r\n\t.resto_item {\r\n\t\tmax-width: 300px;\r\n\t}\r\n\t.resto_item img {\r\n\t\twidth: 100%;\r\n\t\tmax-height: 200px;\r\n\t}\r\n\t.detail_resto {\r\n\t\tmax-width: 900px;\r\n\t}\r\n\t.detail_resto img {\r\n\t\twidth: 80%;\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\t.info_resto .review {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.detail_resto > .desc .menus {\r\n\t\tfont-size: 23px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width:1440px) {\r\n\t#hero {\r\n\t\tmin-width: 1000px;\r\n\t}\r\n\t#hero > .hero_content img {\r\n\t\tmax-height: 400px;\r\n\t\tmax-width: 80%\r\n\t}\r\n}"],sourceRoot:""}]);const C=o},46:(n,t,A)=>{var e=A(379),r=A.n(e),i=A(795),o=A.n(i),C=A(569),a=A.n(C),s=A(565),d=A.n(s),l=A(216),B=A.n(l),p=A(589),h=A.n(p),g=A(756),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=B(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},362:(n,t,A)=>{var e=A(379),r=A.n(e),i=A(795),o=A.n(i),C=A(569),a=A.n(C),s=A(565),d=A.n(s),l=A(216),B=A.n(l),p=A(589),h=A.n(p),g=A(948),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=B(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals}},A={};function e(n){var r=A[n];if(void 0!==r)return r.exports;var i=A[n]={id:n,exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,n=[],e.O=(t,A,r,i)=>{if(!A){var o=1/0;for(d=0;d<n.length;d++){for(var[A,r,i]=n[d],C=!0,a=0;a<A.length;a++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](A[a])))?A.splice(a--,1):(C=!1,i<o&&(o=i));if(C){n.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[A,r,i]},e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var A in t)e.o(t,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:t[A]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={954:0};e.O.j=t=>0===n[t];var t=(t,A)=>{var r,i,[o,C,a]=A,s=0;if(o.some((t=>0!==n[t]))){for(r in C)e.o(C,r)&&(e.m[r]=C[r]);if(a)var d=a(e)}for(t&&t(A);s<o.length;s++)i=o[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(d)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(t.bind(null,0)),A.push=t.bind(null,A.push.bind(A))})(),e.nc=void 0;var r=e.O(void 0,[946,2,135,337,492,924],(()=>e(253)));r=e.O(r)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map