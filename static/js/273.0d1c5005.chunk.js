"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[273],{8273:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t=r(5671),o=r(3144),s=r(136),i=r(7277),u=r(2791),l=r(8687),a=r(2338),c="FindUsers_img__0blAg",f="FindUsers_selectedPage__9+0uY",p=r(184),g=function(n){for(var e,r=Math.ceil(n.totalUsersCount/n.pageSize),t=[],o=1;o<=r;o+=1)t.push(o);var s=n.currentPage;return e=s-3<0?t.slice(0,5):t.slice(s-3,s+2),(0,p.jsx)("div",{children:e.map((function(e){return(0,p.jsx)("span",{className:n.currentPage===e?f:"",onClick:function(){n.onPageChanged(e)},children:e})}))})},d=r(9392),h=r(1087),v=function(n){var e=n.user,r=n.followingIsProgress,t=n.Follow,o=n.Unfollow;return(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(h.OL,{to:"/profile/".concat(e.id),children:(0,p.jsx)("img",{className:c,src:null!=e.photos.small?e.photos.small:d,alt:""})})}),e.followed?(0,p.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"UnFollow"}):(0,p.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Follow"})]}),(0,p.jsxs)("span",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:e.name}),(0,p.jsx)("div",{children:e.status})]}),(0,p.jsx)("span",{})]})]},e.id)},y=function(n){return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{totalUsersCount:n.totalUsersCount,pageSize:n.pageSize,currentPage:n.currentPage,onPageChanged:n.onPageChanged}),n.users.map((function(e){return(0,p.jsx)(v,{user:e,followingIsProgress:n.followingIsProgress,Follow:n.Follow,Unfollow:n.Unfollow})}))]})},w=r(1590),P=r(7781),m="NOT_FOUND";var U=function(n,e){return n===e};function j(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?U:t,s=r.maxSize,i=void 0===s?1:s,u=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),a=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:m},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return m}return{get:t,put:function(e,o){t(e)===m&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,l);function c(){var e=a.get(arguments);if(e===m){if(e=n.apply(null,arguments),u){var r=a.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}a.put(arguments,e)}return e}return c.clearCache=function(){return a.clear()},c}function x(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function C(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var s,i=0,u={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(u=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var a=u,c=a.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=x(t),d=n.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return s=d.apply(null,n)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:d,dependencies:g,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var F=C(j),k=F((function(n){return n.findUsersPage.users}),(function(n){return n.filter((function(n){return!0}))})),b=function(n){return n.findUsersPage.pageSize},z=function(n){return n.findUsersPage.totalUsersCount},S=function(n){return n.findUsersPage.currentPage},_=function(n){return n.findUsersPage.isFetching},A=function(n){return n.findUsersPage.followingIsProgress},I=r(2069),q=function(n){(0,s.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){n.props.requestUsers(e,n.props.pageSize)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,p.jsxs)(p.Fragment,{children:[this.props.isFetching?(0,p.jsx)(w.Z,{}):null,(0,p.jsx)(y,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,currentPage:this.props.currentPage,selectedPage:this.props.selectedPage,onPageChanged:this.onPageChanged,followingIsProgress:this.props.followingIsProgress,getUsers:this.props.getUsers,Follow:this.props.Follow,Unfollow:this.props.Unfollow})]})}}]),r}(u.Component),E=(0,P.qC)(I.D,(0,l.$j)((function(n){return{users:k(n),pageSize:b(n),totalUsersCount:z(n),currentPage:S(n),isFetching:_(n),followingIsProgress:A(n)}}),{requestUsers:a.D7,Follow:a.j9,Unfollow:a.nt}))(q)}}]);
//# sourceMappingURL=273.0d1c5005.chunk.js.map