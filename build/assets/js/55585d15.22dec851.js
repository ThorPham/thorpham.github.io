"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9593],{3905:function(n,t,e){e.d(t,{Zo:function(){return u},kt:function(){return m}});var r=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var h=r.createContext({}),l=function(n){var t=r.useContext(h),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},u=function(n){var t=l(n.components);return r.createElement(h.Provider,{value:t},n.children)},g={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,i=n.originalType,h=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=l(e),m=o,s=p["".concat(h,".").concat(m)]||p[m]||g[m]||i;return e?r.createElement(s,a(a({ref:t},u),{},{components:e})):r.createElement(s,a({ref:t},u))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var i=e.length,a=new Array(i);a[0]=p;var c={};for(var h in t)hasOwnProperty.call(t,h)&&(c[h]=t[h]);c.originalType=n,c.mdxType="string"==typeof n?n:o,a[1]=c;for(var l=2;l<i;l++)a[l]=e[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2061:function(n,t,e){e.r(t),e.d(t,{assets:function(){return u},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return g}});var r=e(7462),o=e(3366),i=(e(7294),e(3905)),a=["components"],c={slug:"Qu\xe1-tr\xecnh-ph\xe1t-tri\u1ec3n-c\u1ee7a-CNN-t\u1eeb-LeNet-\u0111\u1ebfn-DenseNet",title:"Qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n c\u1ee7a CNN t\u1eeb LeNet \u0111\u1ebfn DenseNet.",authors:"thorpham",tags:["Deep learning","CNN"]},h=void 0,l={permalink:"/blog/Qu\xe1-tr\xecnh-ph\xe1t-tri\u1ec3n-c\u1ee7a-CNN-t\u1eeb-LeNet-\u0111\u1ebfn-DenseNet",editUrl:"https://github.com/ThorPham/blog/2018-10-8-Qu\xe1-tr\xecnh-ph\xe1t-tri\u1ec3n-c\u1ee7a-CNN-t\u1eeb-LeNet-\u0111\u1ebfn-DenseNet/index.md",source:"@site/blog/2018-10-8-Qu\xe1-tr\xecnh-ph\xe1t-tri\u1ec3n-c\u1ee7a-CNN-t\u1eeb-LeNet-\u0111\u1ebfn-DenseNet/index.md",title:"Qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n c\u1ee7a CNN t\u1eeb LeNet \u0111\u1ebfn DenseNet.",description:"Convolutional neural network l\xe0 m\u1ed9t m\u1ea1ng neural \u0111\u01b0\u1ee3c \u1ee9ng d\u1ee5ng r\u1ea5t nhi\u1ec1u trong deep learning trong computer vision cho classifier v\xe0 localizer . T\u1eeb m\u1ea1ng CNN c\u01a1 b\u1ea3n ng\u01b0\u1eddi ta c\xf3 th\u1ec3 t\u1ea1o ra r\u1ea5t nhi\u1ec1u architect kh\xe1c nhau, t\u1eeb nh\u1eefng m\u1ea1ng neural c\u01a1 b\u1ea3n 1 \u0111\u1ebfn 2 layer \u0111\u1ebfn 100 layer. \u0110\xe3 bao gi\u1edd b\u1ea1n t\u1ef1 h\u1ecfi n\xean s\u1eed d\u1ee5ng bao nhi\xeau layer, n\xean k\u1ebft h\u1ee3p conv v\u1edbi maxpooling th\u1ebf n\xe0o? conv-maxpooling hay conv-conv-maxplooling ? hay n\xean s\u1eed d\u1ee5ng kernel 3x3 hay 5x5 th\u1eadm ch\xed 7x7 \u0111i\u1ec3m kh\xe1c bi\u1ec7t l\xe0 g\xec ? L\xe0m g\xec khi model b\u1ecb vanishing/exploding gradient, hay t\u1ea1i sao thi th\xeam nhi\u1ec1u layer h\u01a1n th\xec theo l\xfd thuy\u1ebft accuarcy ph\u1ea3i cao h\u01a1n so v\u1edbi shallow model, nh\u01b0ng th\u1ef1c t\u1ebf l\u1ea1i kh\xf4ng ph\u1ea3i accuarcy kh\xf4ng t\u0103ng th\u1eadm ch\xed l\xe0 gi\u1ea3m \u0111\xf3 c\xf3 ph\u1ea3i nguy\xean nh\xe2n do overfitting .Trong b\xe0i vi\u1ebft n\xe0y ta s\u1ebd t\xecm hi\u1ec3u c\xe1c architure n\u1ed5i ti\u1ebfng \u0111\u1ec3 xem c\u1ea5u tr\xfac c\u1ee7a n\xf3 nh\u01b0 th\u1ebf n\xe0o, c\xe1c \xfd t\u01b0\u1edfng v\u1ec1 CNN m\u1edbi nh\u1ea5t hi\u1ec7n nay  t\u1eeb \u0111\xf3 ta c\xf3 th\u1ec3 tr\u1ea3 l\u1eddi \u0111\u01b0\u1ee3c m\u1ea5y c\xe2u h\u1ecfi tr\xean",date:"2018-10-08T00:00:00.000Z",formattedDate:"October 8, 2018",tags:[{label:"Deep learning",permalink:"/blog/tags/deep-learning"},{label:"CNN",permalink:"/blog/tags/cnn"}],readingTime:15.165,truncated:!0,authors:[{name:"Thorpham",title:"Deep learning enthusiast",url:"https://github.com/ThorPham",imageURL:"https://github.com/ThorPham.png",key:"thorpham"}],frontMatter:{slug:"Qu\xe1-tr\xecnh-ph\xe1t-tri\u1ec3n-c\u1ee7a-CNN-t\u1eeb-LeNet-\u0111\u1ebfn-DenseNet",title:"Qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n c\u1ee7a CNN t\u1eeb LeNet \u0111\u1ebfn DenseNet.",authors:"thorpham",tags:["Deep learning","CNN"]},prevItem:{title:"H\u01b0\u1edbng ti\u1ebfp c\u1eadn Graph convolution network cho b\xe0i to\xe1n r\xfat tr\xedch th\xf4ng tin t\u1eeb h\xf3a \u0111\u01a1n",permalink:"/blog/Graph-convolution-network-cho-b\xe0i-to\xe1n-r\xfat-tr\xedch-th\xf4ng-tin"},nextItem:{title:"Object detection t\u1eeb R-CNN \u0111\u1ebfn Faster R-CNN",permalink:"/blog/Object-detection-t\u1eeb-R-CNN-\u0111\u1ebfn-Faster-R-CNN"}},u={authorsImageUrls:[void 0]},g=[],p={toc:g};function m(n){var t=n.components,e=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convolutional neural network l\xe0 m\u1ed9t m\u1ea1ng neural \u0111\u01b0\u1ee3c \u1ee9ng d\u1ee5ng r\u1ea5t nhi\u1ec1u trong deep learning trong computer vision cho classifier v\xe0 localizer . T\u1eeb m\u1ea1ng CNN c\u01a1 b\u1ea3n ng\u01b0\u1eddi ta c\xf3 th\u1ec3 t\u1ea1o ra r\u1ea5t nhi\u1ec1u architect kh\xe1c nhau, t\u1eeb nh\u1eefng m\u1ea1ng neural c\u01a1 b\u1ea3n 1 \u0111\u1ebfn 2 layer \u0111\u1ebfn 100 layer. \u0110\xe3 bao gi\u1edd b\u1ea1n t\u1ef1 h\u1ecfi n\xean s\u1eed d\u1ee5ng bao nhi\xeau layer, n\xean k\u1ebft h\u1ee3p conv v\u1edbi maxpooling th\u1ebf n\xe0o? conv-maxpooling hay conv-conv-maxplooling ? hay n\xean s\u1eed d\u1ee5ng kernel 3x3 hay 5x5 th\u1eadm ch\xed 7x7 \u0111i\u1ec3m kh\xe1c bi\u1ec7t l\xe0 g\xec ? L\xe0m g\xec khi model b\u1ecb vanishing/exploding gradient, hay t\u1ea1i sao thi th\xeam nhi\u1ec1u layer h\u01a1n th\xec theo l\xfd thuy\u1ebft accuarcy ph\u1ea3i cao h\u01a1n so v\u1edbi shallow model, nh\u01b0ng th\u1ef1c t\u1ebf l\u1ea1i kh\xf4ng ph\u1ea3i accuarcy kh\xf4ng t\u0103ng th\u1eadm ch\xed l\xe0 gi\u1ea3m \u0111\xf3 c\xf3 ph\u1ea3i nguy\xean nh\xe2n do overfitting .Trong b\xe0i vi\u1ebft n\xe0y ta s\u1ebd t\xecm hi\u1ec3u c\xe1c architure n\u1ed5i ti\u1ebfng \u0111\u1ec3 xem c\u1ea5u tr\xfac c\u1ee7a n\xf3 nh\u01b0 th\u1ebf n\xe0o, c\xe1c \xfd t\u01b0\u1edfng v\u1ec1 CNN m\u1edbi nh\u1ea5t hi\u1ec7n nay  t\u1eeb \u0111\xf3 ta c\xf3 th\u1ec3 tr\u1ea3 l\u1eddi \u0111\u01b0\u1ee3c m\u1ea5y c\xe2u h\u1ecfi tr\xean")))}m.isMDXComponent=!0}}]);