"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,i,o,u,s,p=e(433),f=e(439),l=e(791),d=e(689),h=e(390),x=e(168),g=e(867),m=g.ZP.h2(r||(r=(0,x.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]))),v=g.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),Z=g.ZP.li(c||(c=(0,x.Z)(["\n  margin-bottom: 50px;\n  overflow: hidden;\n  width: 160px;\n  height: 250px;\n  border-radius: 5px;\n  transition: all 0.25s ease-in-out;\n  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px #ff6b08;\n\n  &:hover {\n    transform: scale(1.07);\n    transition: transform 250ms ease-in-out;\n  }\n"]))),w=g.ZP.div(i||(i=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]))),b=g.ZP.img(o||(o=(0,x.Z)(["\n  width: 160px;\n  height: 200px;\n"]))),k=g.ZP.h3(u||(u=(0,x.Z)(["\n  padding-left: 10px;\n  color: white;\n"]))),y=g.ZP.p(s||(s=(0,x.Z)(["\n  padding-left: 10px;\n  padding-right: 10px;\n"]))),_=e(184),j=function(){var n=(0,l.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(!1),c=(0,f.Z)(a,2),i=c[0],o=c[1],u=(0,d.UO)().id;return(0,l.useEffect)((function(){o(!0),(0,h.IQ)(u).then((function(n){var t=n.cast;t&&t.lenght>0?r((0,p.Z)(t)):console.log("Cast data is empty"),r((0,p.Z)(t))})).catch((function(n){return console.log(n)})).finally((function(){return o(!1)}))}),[u]),(0,_.jsx)(_.Fragment,{children:i?null:(0,_.jsxs)("div",{children:[(0,_.jsx)(m,{children:"Actors"}),(0,_.jsx)(v,{children:e.map((function(n){var t=n.cast_id,e=n.original_name,r=n.profile_path,a=n.character;return(0,_.jsx)(Z,{children:(0,_.jsxs)(w,{children:[(0,_.jsxs)(k,{children:["Name: ",e]}),(0,_.jsxs)(y,{children:["Character: ",a]}),r?(0,_.jsx)(b,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e}):(0,_.jsx)(b,{src:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e})]})},t)}))})]})})}},390:function(n,t,e){e.d(t,{Hg:function(){return u},IQ:function(){return f},Jh:function(){return l},V0:function(){return s},fh:function(){return p}});var r=e(861),a=e(757),c=e.n(a),i=e(340),o="3990fcc1741379f5b1bcbc308aa7d8b3";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("trending/movie/day?language=en-US&&api_key=".concat(o,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&include_adult=false&language=en-US&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.1f1929c8.chunk.js.map