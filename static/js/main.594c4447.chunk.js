(this.webpackJsonpcra10=this.webpackJsonpcra10||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),u=(n(12),n(1)),i=n(6);var l=function(e){return o.a.createElement("div",null,"index:",e.index,o.a.createElement("button",{onClick:function(){return e.update(e.index,-1)}},"+1"),o.a.createElement("button",{onClick:function(){return e.update(e.index,-2)}},"+2"),o.a.createElement("button",{onClick:function(){return e.update(e.index,-3)}},"+3"),e.count,o.a.createElement("button",{onClick:function(){return e.update(e.index,1)}},"+1"),o.a.createElement("button",{onClick:function(){return e.update(e.index,2)}},"+2"),o.a.createElement("button",{onClick:function(){return e.update(e.index,3)}},"+3"),o.a.createElement("button",{onClick:function(){return e.reset(e.index)}},"Reset"),o.a.createElement("button",{onClick:function(){return e.delete(e.index)}},"Delete"))};var d=function(){var e=Object(a.useState)([4,5,9,8,7]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(e){var t=Object(u.a)(n);t[e]=0,r(t)},d=function(e){var t=Object(u.a)(n).filter((function(t,n){return n!==e}));r(t)},m=function(e,t){var a=Object(u.a)(n);a[e]+=t,r(a)};return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var e=Math.round(10*Math.random());r([].concat(Object(u.a)(n),[e]))}},"Add counter"),o.a.createElement("button",{onClick:function(){return r([])}},"Dell counter"),n.map((function(e,t){return o.a.createElement(l,{count:e,index:t,key:t,reset:c,delete:d,update:m})})),o.a.createElement("button",{onClick:function(){var e=Object(u.a)(n).map((function(e){return 0}));r(e)}},"Reset All"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.594c4447.chunk.js.map