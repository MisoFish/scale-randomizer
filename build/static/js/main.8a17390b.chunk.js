(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(38)},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),o=t.n(c),l=t(15),i=t(4),m=t.n(i),g=t(61),s=t(55),u=t(56),d=t(57),E=t(58),h=t(62),p=m.a.range(1,10),v=[["major","scale"],["harmonic minor","scale"],["melodic minor","scale"],["major","formula pattern"],["harmonic minor","formula pattern"],["","chromatic scale"],["major","in octaves"],["harmonic minor","in octaves"],["melodic minor","in octaves"],["major","four-note chords"],["minor","four-note chords"],["major","dominant 7th chords"],["minor","diminished 7th chords"],["major","arpeggio"],["minor","arpeggio"],["major","dominant 7th arpeggio"],["minor","diminished 7th arpeggio"],["natural minor","scale"],["major","contrary motion"],["major","triads"],["minor","triads"]],b={1:m.a.range(0,2).concat(17).concat(5).concat(m.a.range(18,21)),2:m.a.range(0,4).concat(5).concat(m.a.range(19,21)),3:m.a.range(0,6).concat(m.a.range(19,21)).concat(11).concat(m.a.range(13,15)),4:m.a.range(0,3).concat(m.a.range(4,6)).concat(m.a.range(19,21)).concat(m.a.range(13,15)),5:m.a.range(0,6).concat(m.a.range(19,21)).concat(11).concat(m.a.range(13,15)),6:m.a.range(0,6).concat(m.a.range(19,21)).concat(11).concat(m.a.range(13,15)),7:m.a.range(0,6).concat(m.a.range(9,17)),8:m.a.range(0,6).concat(m.a.range(9,17)),9:m.a.range(0,17)},f={1:{C:[0,5,18,19],G:[0,19],F:[0,19],A:[1,17,20],E:[1,17,20],D:[1,17,20]},2:{C:[3],G:[0,1,2,3,5,19,20],F:[0,19],E:[1,2,20],D:[1,2,20],Bb:[0,19]},3:{A:[0,1,2,3,4,5,11,13,14,19,20],E:[0,1,2,11,13,14,19,20],F:[0,1,2,5,11,13,14,19,20],Ab:[0,11,13,19]},4:{D:[0,13,19],B:[1,2,14,20],A:[0,13,19],G:[1,2,14,20],Bb:[0,13,19],C:[1,2,4,5,14,20],Eb:[0,13,19]},5:{A:[0,1,2,3,4,5,11,13,14,19,20],E:[0,1,2,11,13,14,19,20],F:[0,1,2,5,11,13,14,19,20],Ab:[0,11,13,19]},6:{A:[0,1,2,3,4,5,11,13,14,19,20],E:[0,1,2,11,13,14,19,20],F:[0,1,2,5,11,13,14,19,20],Ab:[0,11,13,19]},7:{C:[0,1,2,9,10,11,12,13,14,15,16],D:[0,1,2,3,4,5,9,10,11,12,13,14,15,16],F:[0,1,2,9,10,11,12,13,14,15,16],Ab:[0,9,11,13,15],"G#":[1,2,10,12,14,16],Gb:[0,5,9,11,13,15],"F#":[1,2,10,12,14,16]},8:{C:[0,1,2,9,10,11,12,13,14,15,16],D:[0,1,2,9,10,11,12,13,14,15,16],Eb:[0,1,2,3,4,5,9,10,11,12,13,14,15,16]},9:{C:[0,1,2,5,9,10,11,12,13,14,15,16],Db:[0,3,5,6,9,11,13,15],D:[0,1,2,5,9,10,11,12,13,14,15,16],Eb:[0,1,2,5,9,10,11,12,13,14,15,16],F:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],E:[0,1,2,5,9,10,11,12,13,14,15,16],"C#":[1,2,4,5,7,8,10,12,14,16]}},x=t(54),j=Object(x.a)({root:{width:"150px",height:"150px"},arrowForward:{width:"60px",height:"60px"}}),C=function(e){var a=e.level,t=j(),c=Object(n.useState)("Let's get started!"),o=Object(l.a)(c,2),i=o[0],m=o[1],g=Object(n.useState)(""),p=Object(l.a)(g,2),x=p[0],C=p[1],w=Object(n.useState)(-1),A=Object(l.a)(w,2),O=A[0],S=A[1],y=f[a],F=b[a],D=b[a].map(function(e){return v[e]}),k=O,N=function(){if(k>=D.length-1)m("You have completed one set!"),C("How about another?"),S(-1);else{k++;for(var e="",a=Object.keys(y);!e;)e=a[a.length*Math.random()<<0],y[e].includes(F[k])||(e="");m("".concat(e," ").concat(D[k][0])),C(D[k][1]),S(k)}};return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(u.a,{variant:"h5"},i),r.a.createElement(u.a,{variant:"h5"},x),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(d.a,{className:t.root,color:"primary",onClick:N},r.a.createElement(h.a,{className:t.arrowForward}))),r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",onClick:N},"Next"))))},w=t(40),A=Object(x.a)({root:{padding:"20px",textAlign:"center"}}),O=function(e){var a=e.level,t=e.onChange,n=A();return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(w.a,{className:n.root},r.a.createElement(u.a,{align:"center",gutterBottom:!0,variant:"subtitle1"},"You have selected level ",a),r.a.createElement("div",null,r.a.createElement(E.a,{size:"small",variant:"contained",color:"primary",onClick:t},"Select Different Level"))))},S=Object(x.a)({root:{textAlign:"center",paddingTop:"30px"},button:{fontSize:"xxx-large",paddingRight:"35px",paddingLeft:"35px"}}),y=function(e){var a=e.onChange,t=S();return r.a.createElement(s.a,{maxWidth:"sm",className:t.root},r.a.createElement(u.a,{className:t.root,variant:"h5"},"Select your level:"),r.a.createElement(function(){var e=function(e){a(e.target.innerHTML)},n=p.map(function(a){return r.a.createElement(E.a,{className:t.button,color:"primary",onClick:e},a)});return r.a.createElement("div",null,n)},null))},F=t(59),D=t(60),k=function(){return r.a.createElement("div",null,r.a.createElement(F.a,null,r.a.createElement(D.a,null,r.a.createElement(u.a,{variant:"h6"},"RCM Piano Technical Requirements Randomizer"))),r.a.createElement(D.a,null))},N=function(){var e=Object(n.useState)(localStorage.getItem("level")),a=Object(l.a)(e,2),t=a[0],c=a[1];return m.a.inRange(t,1,10)?r.a.createElement("div",null,r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(k,null)),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(C,{level:t})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(O,{level:t,onChange:function(){localStorage.clear(),c("")}})))):r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(y,{onChange:function(e){localStorage.setItem("level",e),c(e)}}))};o.a.render(r.a.createElement(N,null),document.querySelector("#root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8a17390b.chunk.js.map