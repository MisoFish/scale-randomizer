(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(38)},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),l=t.n(o),c=t(15),i=t(10),m=t.n(i),u=t(61),s=t(55),d=t(56),g=t(57),h=t(58),E=t(62),p=m.a.range(7,10),v=[["major","scale"],["harmonic minor","scale"],["melodic minor","scale"],["major","formula pattern"],["harmonic minor","formula pattern"],["","chromatic scale"],["major","in octaves"],["harmonic minor","in octaves"],["melodic minor","in octaves"],["major","four-note chords"],["minor","four-note chords"],["major","dominant 7th chords"],["minor","diminished 7th chords"],["major","arpeggio"],["minor","arpeggio"],["major","dominant 7th arpeggio"],["minor","diminished 7th arpeggio"]],f={7:m.a.range(0,6).concat(m.a.range(9,17)),8:m.a.range(0,6).concat(m.a.range(9,17)),9:m.a.range(0,17)},x={7:{C:[0,1,2,9,10,11,12,13,14,15,16],D:[0,1,2,3,4,5,9,10,11,12,13,14,15,16]},8:{C:[0,1,2,9,10,11,12,13,14,15,16],D:[0,1,2,9,10,11,12,13,14,15,16],Eb:[0,1,2,3,4,5,9,10,11,12,13,14,15,16]},9:{C:[0,1,2,5,9,10,11,12,13,14,15,16],Db:[0,3,5,6,9,11,13,15],D:[0,1,2,5,9,10,11,12,13,14,15,16],Eb:[0,1,2,5,9,10,11,12,13,14,15,16],F:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],E:[0,1,2,5,9,10,11,12,13,14,15,16],"C#":[1,2,4,5,7,8,10,12,14,16]}},b=t(54),j=Object(b.a)({root:{width:"150px",height:"150px"},arrowForward:{width:"60px",height:"60px"}}),w=function(e){var a=e.level,t=j(),o=Object(n.useState)("Let's get started!"),l=Object(c.a)(o,2),i=l[0],m=l[1],u=Object(n.useState)(""),p=Object(c.a)(u,2),b=p[0],w=p[1],C=Object(n.useState)(-1),O=Object(c.a)(C,2),S=O[0],y=O[1],k=x[a],N=f[a],D=f[a].map(function(e){return v[e]}),R=S,L=function(){if(R>=D.length-1)m("You have completed one set!"),w("How about another?"),y(-1);else{R++;for(var e="",a=Object.keys(k);!e;)e=a[a.length*Math.random()<<0],k[e].includes(N[R])||(e="");m("".concat(e," ").concat(D[R][0])),w(D[R][1]),y(R)}};return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(d.a,{variant:"h5"},i),r.a.createElement(d.a,{variant:"h5"},b),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(g.a,{className:t.root,color:"primary",onClick:L},r.a.createElement(E.a,{className:t.arrowForward}))),r.a.createElement("div",null,r.a.createElement(h.a,{color:"primary",onClick:L},"Next"))))},C=t(40),O=Object(b.a)({root:{padding:"20px",textAlign:"center"}}),S=function(e){var a=e.level,t=e.onChange,n=O();return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(C.a,{className:n.root},r.a.createElement(d.a,{align:"center",gutterBottom:!0,variant:"subtitle1"},"You have selected level ",a),r.a.createElement("div",null,r.a.createElement(h.a,{size:"small",variant:"contained",color:"primary",onClick:t},"Select Different Level"))))},y=Object(b.a)({root:{textAlign:"center",paddingTop:"30px"},button:{fontSize:"xxx-large",paddingRight:"35px",paddingLeft:"35px"}}),k=function(e){var a=e.onChange,t=y();return r.a.createElement(s.a,{maxWidth:"sm",className:t.root},r.a.createElement(d.a,{className:t.root,variant:"h5"},"Select your level:"),r.a.createElement(function(){var e=function(e){a(e.target.innerHTML)},n=p.map(function(a){return r.a.createElement(h.a,{className:t.button,color:"primary",onClick:e},a)});return r.a.createElement("div",null,n)},null))},N=t(59),D=t(60),R=function(){return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(D.a,null,r.a.createElement(d.a,{variant:"h6"},"RCM Piano Technical Requirements Randomizer"))),r.a.createElement(D.a,null))},L=function(){var e=Object(n.useState)(localStorage.getItem("level")),a=Object(c.a)(e,2),t=a[0],o=a[1];return m.a.inRange(t,7,10)?r.a.createElement("div",null,r.a.createElement(u.a,{container:!0,spacing:4},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(R,null)),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(w,{level:t})),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(S,{level:t,onChange:function(){localStorage.clear(),o("")}})))):r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(k,{onChange:function(e){localStorage.setItem("level",e),o(e)}}))};l.a.render(r.a.createElement(L,null),document.querySelector("#root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.fd020d75.chunk.js.map