/*! For license information please see 7.6bf34544.chunk.js.LICENSE.txt */
(this["webpackJsonpthird-practice"]=this["webpackJsonpthird-practice"]||[]).push([[7],{232:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(23);function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(32),o=n(33),a=n(35),u=n(34),i=n(36),l=n(0),s=n.n(l),c=n(21),p=n(26),f=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(a.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),n}(s.a.Component);return Object(p.b)(f)(t)}},242:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},299:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&e.push(u)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},304:function(e,t,n){"use strict";n.r(t);var r=n(32),o=n(33),a=n(35),u=n(34),i=n(36),l=n(0),s=n.n(l),c=n(49),p=n.n(c),f=n(232),g=n(8),h=n(67),d=n(242),m=n(299),v=n.n(m),b=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,a=e.portionSize,u=void 0===a?20:a,i=Math.ceil(t/n),c=[],f=1;f<=i;f++)c.push(f);var g=Math.ceil(i/u),m=Object(l.useState)(1),b=Object(d.a)(m,2),y=b[0],P=b[1],w=(y-1)*u+1,j=y*u;return s.a.createElement("div",null,s.a.createElement("div",{className:p.a.paginator},y>1&&s.a.createElement("button",{onClick:function(){P(y-1)}},"PREV"),c.filter((function(e){return e>=w&&e<=j})).map((function(e){return s.a.createElement("span",{className:v()(Object(h.a)({},p.a.selectedPage,r===e),p.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),g>y&&s.a.createElement("button",{onClick:function(){P(y+1)}},"NEXT")))},y=function(e){for(var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,a=Object(f.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize"]),u=Math.ceil(a.totalUsersCount/a.pageSize),i=[],l=1;l<=u;l++)i.push(l);return s.a.createElement("div",null,s.a.createElement(b,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:o}),a.usersData.map((function(e){return s.a.createElement("div",{className:p.a.usersArea,key:e.id},s.a.createElement("span",null,s.a.createElement(g.b,{to:"/profile/"+e.id},s.a.createElement("div",null,s.a.createElement("img",{alt:"ava",src:e.photos.small?e.photos.small:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png",className:p.a.photo}))),s.a.createElement("div",null,e.name),s.a.createElement("div",null,e.status)),s.a.createElement("span",null,s.a.createElement("div",null,e.followed?s.a.createElement("button",{disabled:a.followingInProgress.some((function(t){return t===e.id})),onClick:function(){a.unfollow(e.id)}},"Unfollow"):s.a.createElement("button",{disabled:a.followingInProgress.some((function(t){return t===e.id})),onClick:function(){a.follow(e.id)}},"Follow"))))})))},P=n(26),w=n(85),j=n(16);function E(e,t){return e===t}function C(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function O(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var S=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,u=r.pop(),i=O(r),l=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return l.apply(null,e)}));return s.resultFunc=u,s.dependencies=i,s.recomputations=function(){return a},s.resetRecomputations=function(){return a=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,n=null,r=null;return function(){return C(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var A=S((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),U=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProgress},x=function(e){return e.auth.isAuth},N=n(235),D=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(n=Object(a.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onPageChanged=function(e){n.props.changeUsers(e,n.props.pageSize)},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement("img",{className:p.a.toggleLoader,src:"https://\u0431\u0440\u0430\u0439\u0442\u0444\u0438\u0442.\u0440\u0444/style/images/i-loader.png",alt:"load"}):null,s.a.createElement(y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,usersData:this.props.usersData,unfollow:this.props.unfollow,follow:this.props.follow,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,toggleIsFollowingProgress:this.props.toggleIsFollowingProgress,followingInProgress:this.props.followingInProgress})," ")}}]),t}(s.a.Component),M={follow:w.c,unfollow:w.j,setUsers:w.g,setCurrentPage:w.e,setTotalUsersCount:w.f,toggleIsFetching:w.h,toggleIsFollowingProgress:w.i,getUsers:w.d,changeUsers:w.a};t.default=Object(j.d)(Object(P.b)((function(e){return{usersData:A(e),pageSize:U(e),totalUsersCount:k(e),currentPage:z(e),isFetching:I(e),followingInProgress:F(e),isAuth:x(e)}}),M),N.a)(D)}}]);
//# sourceMappingURL=7.6bf34544.chunk.js.map