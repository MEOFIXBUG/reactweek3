(this.webpackJsonpreactweek3=this.webpackJsonpreactweek3||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),o=n.n(c),u=n(4),s=n(2),i=n(7),l=n(8),m=n(10),b=n(9),p=function(e){return a.a.createElement("button",{className:"".concat(e.winnerClass," square"),onClick:e.onClick},e.value)},v=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"createBoard",value:function(e,t){for(var n=[],r=0,c=0;c<e;c+=1){for(var o=[],u=0;u<t;u+=1)o.push(this.renderSquare(r++));n.push(a.a.createElement("div",{key:c,className:"board-row"},o))}return n}},{key:"renderSquare",value:function(e){var t=this,n=!this.props.winnerSquares||this.props.winnerSquares[0]!==e&&this.props.winnerSquares[1]!==e&&this.props.winnerSquares[2]!==e?"":"square--green";return a.a.createElement(p,{winnerClass:n,key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",null,this.createBoard(3,3))}}]),n}(a.a.Component),d={history:[{squares:Array(9).fill(null)}],currentStepNumber:0,xIsNext:!0},w=function(){var e,t=Object(r.useState)(d.history),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)(d.currentStepNumber),l=Object(s.a)(i,2),m=l[0],b=l[1],p=Object(r.useState)(d.xIsNext),w=Object(s.a)(p,2),f=w[0],g=w[1],h=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var r=Object(s.a)(t[n],3),a=r[0],c=r[1],o=r[2];if(e[a]&&e[a]===e[c]&&e[a]===e[o])return{winner:e[a],winnerRow:t[n]}}return{winner:null,winnerRow:null}}(c[m].squares),N=h.winner,k=h.winnerRow,q="status";return N?(e="Winner ".concat(N),q="statusWinner"):10===c.length?(e="Draw. No one won.",q="statusDraw"):e="Next player: ".concat(f?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(v,{squares:c[m].squares,winnerSquares:k,onClick:function(e){return function(e){var t,n=c.slice(0,m+1),r=n[n.length-1],a=Object(u.a)(r.squares);(console.log(N),N||a[e])||(a[e]=f?"X":"O",o(n.concat([{squares:a,currentLocation:(t=e,{0:"d\xf2ng: 1, c\u1ed9t: 1",1:"d\xf2ng: 1, c\u1ed9t: 2",2:"d\xf2ng: 1, c\u1ed9t: 3",3:"d\xf2ng: 2, c\u1ed9t: 1",4:"d\xf2ng: 2, c\u1ed9t: 2",5:"d\xf2ng: 2, c\u1ed9t: 3",6:"d\xf2ng: 3, c\u1ed9t: 1",7:"d\xf2ng: 3, c\u1ed9t: 2",8:"d\xf2ng: 3, c\u1ed9t: 3"}[t]),stepNumber:n.length}])),b(n.length),g(!f))}(e)}})),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",{className:"".concat(q)},e),a.a.createElement("button",{className:"button",onClick:function(){return function(){var e=Object(u.a)(c);o(e.reverse())}()}},"Sort moves"),a.a.createElement("button",{className:"button button--new-game",onClick:function(){return o(d.history),b(d.currentStepNumber),void g(d.xIsNext)}},"New game"),a.a.createElement("ol",null,c.map((function(e,t){var n=e.currentLocation?"(".concat(e.currentLocation,")"):"",r=e.stepNumber?"Move #".concat(e.stepNumber):"Start",c=t===m?"button--green":"";return a.a.createElement("li",{key:t},a.a.createElement("button",{className:"".concat(c," button"),onClick:function(){return b(e=t),void g(e%2===0);var e}},"".concat(r," ").concat(n)))})))))};n(16);o.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b6565a8a.chunk.js.map