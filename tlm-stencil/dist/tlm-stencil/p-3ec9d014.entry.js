import{r as e,h as r,c as n}from"./p-2050fa3d.js";const t=class{constructor(r){e(this,r)}getText(){return(this.first||"")+((e=this.middle)?` ${e}`:"")+((r=this.last)?` ${r}`:"");var e,r}render(){return r("div",null,"Hello, World! I'm ",this.getText())}};t.style=":host{display:block}";var a=function(){function e(e){var r=this;this._insertTag=function(e){r.container.insertBefore(e,0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c="-ms-",i="-moz-",o="-webkit-",s="comm",u="rule",f="decl",l="@keyframes",d=Math.abs,v=String.fromCharCode,h=Object.assign;function b(e){return e.trim()}function m(e,r,n){return e.replace(r,n)}function p(e,r){return e.indexOf(r)}function $(e,r){return 0|e.charCodeAt(r)}function w(e,r,n){return e.slice(r,n)}function k(e){return e.length}function y(e){return e.length}function g(e,r){return r.push(e),e}var x=1,A=1,C=0,O=0,S=0,j="";function z(e,r,n,t,a,c,i){return{value:e,root:r,parent:n,type:t,props:a,children:c,line:x,column:A,length:i,return:""}}function G(e,r){return h(z("",null,null,"",null,null,0),e,{length:-e.length},r)}function _(){return S=O>0?$(j,--O):0,A--,10===S&&(A=1,x--),S}function R(){return S=O<C?$(j,O++):0,A++,10===S&&(A=1,x++),S}function I(){return $(j,O)}function W(){return O}function E(e,r){return w(j,e,r)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return x=A=1,C=k(j=e),O=0,[]}function F(e){return j="",e}function N(e){return b(E(O-1,H(91===e?e+2:40===e?e+1:e)))}function q(e){for(;(S=I())&&S<33;)R();return M(e)>2||M(S)>3?"":" "}function D(e,r){for(;--r&&R()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return E(e,W()+(r<6&&32==I()&&32==R()))}function H(e){for(;R();)switch(S){case e:return O;case 34:case 39:34!==e&&39!==e&&H(S);break;case 40:41===e&&H(e);break;case 92:R()}return O}function P(e,r){for(;R()&&e+S!==57&&(e+S!==84||47!==I()););return"/*"+E(r,O-1)+"*"+v(47===e?e:R())}function L(e){for(;!M(I());)R();return E(e,O)}function T(e){return F(Z("",null,null,null,[""],e=B(e),0,[0],e))}function Z(e,r,n,t,a,c,i,o,s){for(var u=0,f=0,l=i,d=0,h=0,b=0,$=1,w=1,y=1,x=0,A="",C=a,O=c,S=t,j=A;w;)switch(b=x,x=R()){case 40:if(108!=b&&58==j.charCodeAt(l-1)){-1!=p(j+=m(N(x),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:j+=N(x);break;case 9:case 10:case 13:case 32:j+=q(b);break;case 92:j+=D(W()-1,7);continue;case 47:switch(I()){case 42:case 47:g(K(P(R(),W()),r,n),s);break;default:j+="/"}break;case 123*$:o[u++]=k(j)*y;case 125*$:case 59:case 0:switch(x){case 0:case 125:w=0;case 59+f:h>0&&k(j)-l&&g(h>32?Q(j+";",t,n,l-1):Q(m(j," ","")+";",t,n,l-2),s);break;case 59:j+=";";default:if(g(S=J(j,r,n,u,f,a,o,A,C=[],O=[],l),c),123===x)if(0===f)Z(j,r,S,S,C,c,l,o,O);else switch(d){case 100:case 109:case 115:Z(e,S,S,t&&g(J(e,S,S,0,0,a,o,A,a,C=[],l),O),a,O,l,o,t?C:O);break;default:Z(j,S,S,S,[""],O,0,o,O)}}u=f=h=0,$=y=1,A=j="",l=i;break;case 58:l=1+k(j),h=b;default:if($<1)if(123==x)--$;else if(125==x&&0==$++&&125==_())continue;switch(j+=v(x),x*$){case 38:y=f>0?1:(j+="\f",-1);break;case 44:o[u++]=(k(j)-1)*y,y=1;break;case 64:45===I()&&(j+=N(R())),d=I(),f=l=k(A=j+=L(W())),x++;break;case 45:45===b&&2==k(j)&&($=0)}}return c}function J(e,r,n,t,a,c,i,o,s,f,l){for(var v=a-1,h=0===a?c:[""],p=y(h),$=0,k=0,g=0;$<t;++$)for(var x=0,A=w(e,v+1,v=d(k=i[$])),C=e;x<p;++x)(C=b(k>0?h[x]+" "+A:m(A,/&\f/g,h[x])))&&(s[g++]=C);return z(e,r,n,0===a?u:o,s,f,l)}function K(e,r,n){return z(e,r,n,s,v(S),w(e,2,-2),0)}function Q(e,r,n,t){return z(e,r,n,f,w(e,0,t),w(e,t+1,-1),t)}function U(e,r){switch(function(e,r){return(((r<<2^$(e,0))<<2^$(e,1))<<2^$(e,2))<<2^$(e,3)}(e,r)){case 5103:return o+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return o+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return o+e+i+e+c+e+e;case 6828:case 4268:return o+e+c+e+e;case 6165:return o+e+c+"flex-"+e+e;case 5187:return o+e+m(e,/(\w+).+(:[^]+)/,o+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return o+e+c+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return o+e+c+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return o+e+c+m(e,"shrink","negative")+e;case 5292:return o+e+c+m(e,"basis","preferred-size")+e;case 6060:return o+"box-"+m(e,"-grow","")+o+e+c+m(e,"grow","positive")+e;case 4554:return o+m(e,/([^-])(transform)/g,"$1"+o+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,o+"$1"),/(image-set)/,o+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,o+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,o+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+o+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,o+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-r>6)switch($(e,r+1)){case 109:if(45!==$(e,r+4))break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+o+"$2-$3$1"+i+(108==$(e,r+3)?"$3":"$2-$3"))+e;case 115:return~p(e,"stretch")?U(m(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==$(e,r+1))break;case 6444:switch($(e,k(e)-3-(~p(e,"!important")&&10))){case 107:return m(e,":",":"+o)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+o+(45===$(e,14)?"inline-":"")+"box$3$1"+o+"$2$3$1"+c+"$2box$3")+e}break;case 5936:switch($(e,r+11)){case 114:return o+e+c+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return o+e+c+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return o+e+c+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return o+e+c+e+e}return e}function V(e,r){for(var n="",t=y(e),a=0;a<t;a++)n+=r(e[a],a,e,r)||"";return n}function X(e,r,n,t){switch(e.type){case"@import":case f:return e.return=e.return||e.value;case s:return"";case l:return e.return=e.value+"{"+V(e.children,t)+"}";case u:e.value=e.props.join(",")}return k(n=V(e.children,t))?e.return=e.value+"{"+n+"}":""}function Y(e){return function(r){r.root||(r=r.return)&&e(r)}}function ee(e){var r=Object.create(null);return function(n){return void 0===r[n]&&(r[n]=e(n)),r[n]}}var re=function(e,r,n){for(var t=0,a=0;t=a,a=I(),38===t&&12===a&&(r[n]=1),!M(a);)R();return E(e,O)},ne=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var r=e.value,n=e.parent,t=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||ne.get(n))&&!t){ne.set(e,!0);for(var a=[],c=function(e,r){return F(function(e,r){var n=-1,t=44;do{switch(M(t)){case 0:38===t&&12===I()&&(r[n]=1),e[n]+=re(O-1,r,n);break;case 2:e[n]+=N(t);break;case 4:if(44===t){e[++n]=58===I()?"&\f":"",r[n]=e[n].length;break}default:e[n]+=v(t)}}while(t=R());return e}(B(e),r))}(r,a),i=n.props,o=0,s=0;o<c.length;o++)for(var u=0;u<i.length;u++,s++)e.props[s]=a[o]?c[o].replace(/&\f/g,i[u]):i[u]+" "+c[o]}}},ae=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}},ce=[function(e,r,n,t){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=U(e.value,e.length);break;case l:return V([G(e,{value:m(e.value,"@","@"+o)})],t);case u:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(r)){case":read-only":case":read-write":return V([G(e,{props:[m(r,/:(read-\w+)/,":-moz-$1")]})],t);case"::placeholder":return V([G(e,{props:[m(r,/:(plac\w+)/,":"+o+"input-$1")]}),G(e,{props:[m(r,/:(plac\w+)/,":-moz-$1")]}),G(e,{props:[m(r,/:(plac\w+)/,c+"input-$1")]})],t)}return""}))}}],ie={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe=/[A-Z]|^ms/g,se=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ue=function(e){return 45===e.charCodeAt(1)},fe=function(e){return null!=e&&"boolean"!=typeof e},le=ee((function(e){return ue(e)?e:e.replace(oe,"-$&").toLowerCase()})),de=function(e,r){switch(e){case"animation":case"animationName":if("string"==typeof r)return r.replace(se,(function(e,r,n){return he={name:r,styles:n,next:he},r}))}return 1===ie[e]||ue(e)||"number"!=typeof r||0===r?r:r+"px"};function ve(e,r,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return he={name:n.name,styles:n.styles,next:he},n.name;if(void 0!==n.styles){var t=n.next;if(void 0!==t)for(;void 0!==t;)he={name:t.name,styles:t.styles,next:he},t=t.next;return n.styles+";"}return function(e,r,n){var t="";if(Array.isArray(n))for(var a=0;a<n.length;a++)t+=ve(e,r,n[a])+";";else for(var c in n){var i=n[c];if("object"!=typeof i)null!=r&&void 0!==r[i]?t+=c+"{"+r[i]+"}":fe(i)&&(t+=le(c)+":"+de(c,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=r&&void 0!==r[i[0]]){var o=ve(e,r,i);switch(c){case"animation":case"animationName":t+=le(c)+":"+o+";";break;default:t+=c+"{"+o+"}"}}else for(var s=0;s<i.length;s++)fe(i[s])&&(t+=le(c)+":"+de(c,i[s])+";")}return t}(e,r,n);case"function":if(void 0!==e){var a=he,c=n(e);return he=a,ve(e,r,c)}}if(null==r)return n;var i=r[n];return void 0!==i?i:n}var he,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g,me=function(e,r,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var t=!0,a="";he=void 0;var c=e[0];null==c||void 0===c.raw?(t=!1,a+=ve(n,r,c)):a+=c[0];for(var i=1;i<e.length;i++)a+=ve(n,r,e[i]),t&&(a+=c[i]);be.lastIndex=0;for(var o,s="";null!==(o=be.exec(a));)s+="-"+o[1];return{name:function(e){for(var r,n=0,t=0,a=e.length;a>=4;++t,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(t)|(255&e.charCodeAt(++t))<<8|(255&e.charCodeAt(++t))<<16|(255&e.charCodeAt(++t))<<24))+(59797*(r>>>16)<<16),n=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(t+2))<<16;case 2:n^=(255&e.charCodeAt(t+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(t)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s,styles:a,next:he}};function pe(e,r,n){var t="";return n.split(" ").forEach((function(n){void 0!==e[n]?r.push(e[n]+";"):t+=n+" "})),t}var $e=function(e,r,n){!function(e,r,n){var t=e.key+"-"+r.name;!1===n&&void 0===e.registered[t]&&(e.registered[t]=r.styles)}(e,r,n);var t=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var a=r;do{e.insert(r===a?"."+t:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};function we(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function ke(e,r,n){var t=[],a=pe(e,t,n);return t.length<2?n:a+r(t)}var ye=function e(r){for(var n="",t=0;t<r.length;t++){var a=r[t];if(null!=a){var c=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))c=e(a);else for(var i in c="",a)a[i]&&i&&(c&&(c+=" "),c+=i);break;default:c=a}c&&(n&&(n+=" "),n+=c)}}return n};const ge=function(){var e=function(e){var r=e.key;if("css"===r){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var t,c,i=e.stylisPlugins||ce,o={},s=[];t=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),n=1;n<r.length;n++)o[r[n]]=!0;s.push(e)}));var u,f=[te,ae],l=[X,Y((function(e){u.insert(e)}))],d=function(e){var r=y(e);return function(n,t,a,c){for(var i="",o=0;o<r;o++)i+=e[o](n,t,a,c)||"";return i}}(f.concat(i,l));c=function(e,r,n,t){u=n,V(T(e?e+"{"+r.styles+"}":r.styles),d),t&&(v.inserted[r.name]=!0)};var v={key:r,sheet:new a({key:r,container:t,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:c};return v.sheet.hydrate(s),v}({key:"css"});e.sheet.speedy=function(e){this.isSpeedy=e},e.compat=!0;var r=function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];var a=me(n,e.registered,void 0);return $e(e,a,!1),e.key+"-"+a.name};return{css:r,cx:function(){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return ke(e.registered,r,ye(t))},injectGlobal:function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];var a=me(n,e.registered);we(e,a)},keyframes:function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];var a=me(n,e.registered),c="animation-"+a.name;return we(e,{name:a.name,styles:"@keyframes "+c+"{"+a.styles+"}"}),c},hydrate:function(r){r.forEach((function(r){e.inserted[r]=!0}))},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:pe.bind(null,e.registered),merge:ke.bind(null,e.registered,r)}}().css`
  font-family: '${"roboto"}';
  border: 0;
  padding: ${12}px ${24}px;
  font-weight: ${"Bold",{light:300,regular:400,semibold:400,bold:700,italic:300,"light italic":300}["Bold".toLowerCase()]};
  font-style: ${function(){const e="Bold".toLowerCase();return e.includes("italic")?"italic":e.includes("oblique")?"oblique":"normal"}()};
  color: ${"#ffffff"};
  font-size: ${14}px;
  border-radius: ${"30px"};
  background-color: ${"#6b60cd"};
  &:hover {
    background-color: ${"#6b60cd"};
    color: ${"#ffffff"};
  }
  &:active {
    background-color: ${"#7965AF"};
    color: ${"#ffffff"};
  }
  &:disabled {
    background-color: ${"#1f1f1f1f"};
    color: ${"#1c1b1f61"};
  }
`;const xe=class{constructor(r){e(this,r),this.clickEmitter=n(this,"clickEmitter",4),this.handleClick=()=>{this.clickEmitter.emit("onClick")}}render(){return r("button",{disabled:this.disabled,onClick:this.handleClick,class:ge,"test-id":this.testId,type:"button"},r("slot",null))}};export{t as my_component,xe as tlm_button}