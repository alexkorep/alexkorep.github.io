(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t){},133:function(e,t){},178:function(e,t){},179:function(e,t){},180:function(e,t){},181:function(e,t){},184:function(e,t,n){"use strict";n.r(t);var o=n(4),a=n.n(o),c=n(84),r=n.n(c),l=(n(92),n(22)),i=(n(93),n(186)),s=n(86),u=n(45),m=[],d=[],f=document.createElement("canvas");f.width=224,f.height=224,document.body.appendChild(f),f.style.display="none";var h=null,g=[];u.b("jsmodel/model.json").then(function(e){h=e,console.log("Model loaded!")});var p=function(e){m=Object(s.a)(e)},v=function(e,t){!function e(t,n,o){if(o||(o=0,g.length=0),!(o>=m.length)){var a=m[o],c=URL.createObjectURL(a);d.push(c);var r=new Image;r.id="pic",r.src=c,r.onload=function(){f.getContext("2d").drawImage(r,0,0,224,224);var a=u.a.fromPixels(f).expandDims(0).asType("float32").div(256),l=h.predict(a).dataSync(),i=10*function(e){for(var t=0,n=1;n<=10;n++)t+=n*e[n-1];return t}(Array.from(l));if(t(c,o,i),g.length<50||g[g.length-1].score<i){for(g.push({url:c,score:i}),g.sort(function(e,t){return t.score-e.score});g.length>50;)g.pop();n(g)}console.log(o),setTimeout(function(){e(t,n,o+1)},10)}}}(e,t,0)};var E=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)([]),s=Object(l.a)(r,2),u=s[0],m=s[1],d=Object(o.useState)(null),f=Object(l.a)(d,2),h=f[0],g=f[1],E=Object(o.useState)([]),w=Object(l.a)(E,2),b=w[0],j=w[1];console.log(b);var y=n.length?u/n.length*100:0,O=b.map(function(e){return a.a.createElement("div",{key:e.url,className:"top-photo"},a.a.createElement("img",{src:e.url,alt:""}),a.a.createElement("div",null,Math.round(e.score,2),"%"))});return console.log("topPhotoCtrls",O),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"offset-md-3 col-md-6"},a.a.createElement("div",{className:"form-group files"},a.a.createElement("label",null,"Select Your Files"),a.a.createElement("input",{type:"file",className:"form-control",multiple:!0,onChange:function(e){for(var t=e.target.files,n=[],o=0;o<t.length;o++)n.push(t[o]);c(n),p(n),v(function(e,t,n){g({url:e,score:n}),m(t)},function(e){j(e)})}})),a.a.createElement("div",{className:"form-group"},a.a.createElement(i.a,{max:"100",color:"success",value:y},Math.round(y,2),"%")),h?a.a.createElement("div",{className:"cur-image"},a.a.createElement("img",{src:h.url,height:"40",alt:""}),"Score:\xa0",Math.round(h.score,2),"%"):null,a.a.createElement("div",null,O))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,n){e.exports=n(184)},92:function(e,t,n){},93:function(e,t,n){},97:function(e,t){},99:function(e,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.194d476b.chunk.js.map