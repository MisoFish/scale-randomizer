(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(39)},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=t(15),i=t(11),m=t.n(i),u=t(62),s=t(56),d=t(57),v=t(58),E=t(59),p=t(63),h=m.a.range(7,10),g=[["major","scale"],["harmonic minor","scale"],["melodic minor","scale"],["major","formula pattern"],["harmonic minor","formula pattern"],["","chromatic scale"],["major","in octaves"],["harmonic minor","in octaves"],["melodic minor","in octaves"]],x={9:m.a.range(0,9)},f={9:{c:[0,1,2,5],db:[0,3,5,6],d:[0,1,2,5],eb:[0,1,2,5],F:[0,1,2,3,4,5,6,7,8]}},b=t(55),w=Object(b.a)({root:{width:"150px",height:"150px"},arrowForward:{width:"60px",height:"60px"}}),j=function(e){var a=e.level,t=w(),l=Object(n.useState)("Let's get started!"),c=Object(o.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),b=h[0],j=h[1],O=Object(n.useState)(-1),S=Object(o.a)(O,2),y=S[0],C=S[1],k=f[a],N=x[a],R=x[a].map(function(e){return g[e]}),z=y,A=function(){if(z>=R.length-1)m("You have completed one set!"),j("How about another?"),C(-1);else{z++;for(var e="",a=Object.keys(k);!e;)e=a[a.length*Math.random()<<0],k[e].includes(N[z])||(e="");m("".concat(e," ").concat(R[z][0])),j(R[z][1]),C(z)}};return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(d.a,{variant:"h5"},i),r.a.createElement(d.a,{variant:"h5"},b),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(v.a,{className:t.root,color:"primary",onClick:A},r.a.createElement(p.a,{className:t.arrowForward}))),r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",onClick:A},"Next"))))},O=t(41),S=Object(b.a)({root:{padding:"20px",textAlign:"center"}}),y=function(e){var a=e.level,t=e.onChange,n=S();return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(O.a,{className:n.root},r.a.createElement(d.a,{align:"center",gutterBottom:"true",variant:"subtitle1"},"You have selected level ",a),r.a.createElement("div",null,r.a.createElement(E.a,{size:"small",variant:"contained",color:"primary",onClick:t},"Select Different Level"))))},C=Object(b.a)({root:{textAlign:"center",paddingTop:"30px"},button:{fontSize:"xxx-large",paddingRight:"35px",paddingLeft:"35px"}}),k=function(e){var a=e.onChange,t=C();return r.a.createElement(s.a,{maxWidth:"sm",className:t.root},r.a.createElement(d.a,{className:t.root,variant:"h5"},"Select your level:"),r.a.createElement(function(){var e=function(e){a(e.target.innerHTML)},n=h.map(function(a){return r.a.createElement(E.a,{className:t.button,color:"primary",onClick:e},a)});return r.a.createElement("div",null,n)},null))},N=t(60),R=t(61),z=function(){return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(d.a,{variant:"h6"},"RCM Piano Technical Requirements Randomizer"))),r.a.createElement(R.a,null))},A=function(){var e=Object(n.useState)(localStorage.getItem("level")),a=Object(o.a)(e,2),t=a[0],l=a[1];return m.a.inRange(t,7,10)?r.a.createElement("div",null,r.a.createElement(u.a,{container:!0,spacing:4},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(z,null)),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(j,{level:t})),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(y,{level:t,onChange:function(){localStorage.clear(),l("")}})))):r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(k,{onChange:function(e){localStorage.setItem("level",e),l(e)}}))},L=t(18);L.a.initialize("UA-153105409-1"),L.a.pageview(window.location.pathname+window.location.search),c.a.render(r.a.createElement(A,null),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.65717021.chunk.js.map