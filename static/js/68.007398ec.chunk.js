"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{146:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,o,c,i=e(689),u=e(87),p=e(197),s=e(168),f=e(867),d=f.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 0px;\n  margin: 0px;\n"]))),l=f.ZP.li(a||(a=(0,s.Z)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),x=f.ZP.img(o||(o=(0,s.Z)(["\n  display: block;\n  height: auto;\n  width: auto;\n  border-radius: 5px;\n"]))),g=f.ZP.h1(c||(c=(0,s.Z)(["\n  padding: 10px;\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: 700;\n  height: 100%;\n  margin-top: 10px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  text-align: center;\n  color: #842323;\n  justify-content: center;\n  text-align: center;\n"]))),h=e(184),m=function(n){var t=n.movies,e=(0,i.TH)().pathname;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,h.jsx)(l,{children:(0,h.jsxs)(u.rU,{to:"/movie/".concat(t),state:{from:e},children:[(0,h.jsx)(x,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):p.M,alt:"poster"}),(0,h.jsx)(g,{children:a})]})},t)}))})})}},197:function(n,t,e){e.d(t,{M:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},68:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a,o=e(433),c=e(439),i=e(791),u=e(390),p=e(146),s=e(168),f=e(867),d=f.ZP.button(r||(r=(0,s.Z)(["\n  display: block;\n  margin: 0 auto;\n  padding: 16px 32px;\n  border-radius: 100px;\n  background-color: #6474cf;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  max-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #7f83b4;\n  }\n"]))),l=e(184),x=function(n){var t=n.onLoadMore;return(0,l.jsxs)(d,{type:"submit",onClick:t,children:[" ","Load More"]})},g=f.ZP.h1(a||(a=(0,s.Z)(["\n  color: #eb4d4d;\n  padding-bottom: 15px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 40px;\n"]))),h=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(1),s=(0,c.Z)(a,2),f=s[0],d=s[1];(0,i.useEffect)((function(){(0,u.Hg)(f).then((function(n){var t=n.data.results;r((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(t.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}}))))}))})).catch((function(n){return console.log("getTrending:".concat(n))}))}),[f]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{children:"Trending today"}),(0,l.jsx)(p.Z,{movies:e}),e.length>0&&(0,l.jsx)(x,{onLoadMore:function(){d((function(n){return n+1}))}})]})}},390:function(n,t,e){e.d(t,{Hg:function(){return u},IQ:function(){return f},Jh:function(){return d},V0:function(){return p},fh:function(){return s}});var r=e(861),a=e(757),o=e.n(a),c=e(340),i="3990fcc1741379f5b1bcbc308aa7d8b3";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day?language=en-US&&api_key=".concat(i,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&include_adult=false&language=en-US&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=68.007398ec.chunk.js.map