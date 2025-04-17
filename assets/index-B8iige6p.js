var ng=Object.defineProperty;var mu=Object.getOwnPropertySymbols;var ig=Object.prototype.hasOwnProperty,sg=Object.prototype.propertyIsEnumerable;var _u=Math.pow,gu=(s,t,e)=>t in s?ng(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,Fs=(s,t)=>{for(var e in t||(t={}))ig.call(t,e)&&gu(s,e,t[e]);if(mu)for(var e of mu(t))sg.call(t,e)&&gu(s,e,t[e]);return s};var ja=(s,t,e)=>new Promise((n,i)=>{var r=c=>{try{a(e.next(c))}catch(l){i(l)}},o=c=>{try{a(e.throw(c))}catch(l){i(l)}},a=c=>c.done?n(c.value):Promise.resolve(c.value).then(r,o);a((e=e.apply(s,t)).next())});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="174",rg=0,xu=1,og=2,gd=1,ag=2,xi=3,ji=0,hn=1,Mi=2,Yi=0,or=1,yu=2,vu=3,Mu=4,cg=5,ys=100,lg=101,hg=102,ug=103,fg=104,dg=200,pg=201,mg=202,gg=203,Kc=204,jc=205,_g=206,xg=207,yg=208,vg=209,Mg=210,Sg=211,Tg=212,Eg=213,Ag=214,Jc=0,Qc=1,tl=2,pr=3,el=4,nl=5,il=6,sl=7,_d=0,wg=1,bg=2,$i=0,Cg=1,Rg=2,Ng=3,Pg=4,Dg=5,Ig=6,Lg=7,xd=300,mr=301,gr=302,rl=303,ol=304,La=306,al=1e3,Ms=1001,cl=1002,Fn=1003,Fg=1004,Ro=1005,ni=1006,Ja=1007,Ss=1008,Ci=1009,yd=1010,vd=1011,so=1012,ch=1013,Rs=1014,Si=1015,po=1016,lh=1017,hh=1018,_r=1020,Md=35902,Sd=1021,Td=1022,Zn=1023,Ed=1024,Ad=1025,ar=1026,xr=1027,wd=1028,uh=1029,bd=1030,fh=1031,dh=1033,aa=33776,ca=33777,la=33778,ha=33779,ll=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37808,_l=37809,xl=37810,yl=37811,vl=37812,Ml=37813,Sl=37814,Tl=37815,El=37816,Al=37817,wl=37818,bl=37819,Cl=37820,Rl=37821,ua=36492,Nl=36494,Pl=36495,Cd=36283,Dl=36284,Il=36285,Ll=36286,Ug=3200,Og=3201,Rd=0,zg=1,Gi="",Pn="srgb",yr="srgb-linear",xa="linear",ce="srgb",Us=7680,Su=519,Bg=512,Vg=513,kg=514,Nd=515,Hg=516,Gg=517,Wg=518,Xg=519,Tu=35044,Eu="300 es",Ti=2e3,ya=2001;let Rr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}};const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Fl=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ht(s,t,e){return Math.max(t,Math.min(e,s))}function qg(s,t){return(s%t+t)%t}function tc(s,t,e){return(1-e)*s+e*t}function Ir(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}let ae=class Pd{constructor(t=0,e=0){Pd.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class Dd{constructor(t,e,n,i,r,o,a,c,l){Dd.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],S=i[4],x=i[7],w=i[2],b=i[5],A=i[8];return r[0]=o*g+a*T+c*w,r[3]=o*m+a*S+c*b,r[6]=o*p+a*x+c*A,r[1]=l*g+h*T+u*w,r[4]=l*m+h*S+u*b,r[7]=l*p+h*x+u*A,r[2]=f*g+d*T+_*w,r[5]=f*m+d*S+_*b,r[8]=f*p+d*x+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const ec=new Bt;function Id(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yg(){const s=ro("canvas");return s.style.display="block",s}const Au={};function ms(s){s in Au||(Au[s]=!0,console.warn(s))}function $g(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zg(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kg(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wu=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jg(){const s={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?xa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yr]:{primaries:t,whitePoint:n,transfer:xa,toXYZ:wu,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:wu,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),s}const jt=jg();function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os,Jg=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=ro("canvas")),Os.width=t.width,Os.height=t.height;const n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qg=0,ph=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=mo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nc(i[o].image)):r.push(nc(i[o]))}else r=nc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Jg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0,Jn=class fa extends Rr{constructor(t=fa.DEFAULT_IMAGE,e=fa.DEFAULT_MAPPING,n=Ms,i=Ms,r=ni,o=Ss,a=Zn,c=Ci,l=fa.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=mo(),this.name="",this.source=new ph(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case al:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case al:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=xd;Jn.DEFAULT_ANISOTROPY=1;let Ne=class Ld{constructor(t=0,e=0,n=0,i=1){Ld.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(d+1)/2,w=(p+1)/2,b=(h+f)/4,A=(u+g)/4,R=(_+m)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=b/n,r=A/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=R/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},e_=class extends Rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Jn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ph(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Ns extends e_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fd extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n_ extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let go=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*g,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),b=Math.atan2(w,p*T);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const x=a*T;if(c=c*m+f*x,l=l*m+d*x,h=h*m+_*x,u=u*m+g*x,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class Ud{constructor(t=0,e=0,n=0){Ud.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ic=new z,Cu=new go;let _o=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),Po.subVectors(this.max,Lr),zs.subVectors(t.a,Lr),Bs.subVectors(t.b,Lr),Vs.subVectors(t.c,Lr),Ii.subVectors(Bs,zs),Li.subVectors(Vs,Bs),rs.subVectors(zs,Vs);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-rs.z,rs.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,rs.z,0,-rs.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-rs.y,rs.x,0];return!sc(e,zs,Bs,Vs,Po)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,zs,Bs,Vs,Po))?!1:(Do.crossVectors(Ii,Li),e=[Do.x,Do.y,Do.z],sc(e,zs,Bs,Vs,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const fi=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,No=new _o,zs=new z,Bs=new z,Vs=new z,Ii=new z,Li=new z,rs=new z,Lr=new z,Po=new z,Do=new z,os=new z;function sc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){os.fromArray(s,r);const a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),c=t.dot(os),l=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const i_=new _o,Fr=new z,rc=new z;let Fa=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):i_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(rc)),this.expandByPoint(Fr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const di=new z,oc=new z,Io=new z,Fi=new z,ac=new z,Lo=new z,cc=new z;class Od{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){oc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(oc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=Fi.dot(this.direction),c=-Fi.dot(Io),l=Fi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oc).addScaledVector(Io,f),d}intersectSphere(t,e){di.subVectors(t.center,this.origin);const n=di.dot(this.direction),i=di.dot(di)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,i,r){ac.subVectors(e,t),Lo.subVectors(n,t),cc.crossVectors(ac,Lo);let o=this.direction.dot(cc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);const c=a*this.direction.dot(Lo.crossVectors(Fi,Lo));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Fi));if(l<0||c+l>o)return null;const h=-a*Fi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Pe=class Ul{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,_,g,m){Ul.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s_,t,r_)}lookAt(t,e,n){const i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ui.crossVectors(n,_n),Ui.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ui.crossVectors(n,_n)),Ui.normalize(),Fo.crossVectors(_n,Ui),i[0]=Ui.x,i[4]=Fo.x,i[8]=_n.x,i[1]=Ui.y,i[5]=Fo.y,i[9]=_n.y,i[2]=Ui.z,i[6]=Fo.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],S=n[7],x=n[11],w=n[15],b=i[0],A=i[4],R=i[8],y=i[12],v=i[1],N=i[5],O=i[9],U=i[13],W=i[2],Y=i[6],G=i[10],K=i[14],k=i[3],rt=i[7],at=i[11],gt=i[15];return r[0]=o*b+a*v+c*W+l*k,r[4]=o*A+a*N+c*Y+l*rt,r[8]=o*R+a*O+c*G+l*at,r[12]=o*y+a*U+c*K+l*gt,r[1]=h*b+u*v+f*W+d*k,r[5]=h*A+u*N+f*Y+d*rt,r[9]=h*R+u*O+f*G+d*at,r[13]=h*y+u*U+f*K+d*gt,r[2]=_*b+g*v+m*W+p*k,r[6]=_*A+g*N+m*Y+p*rt,r[10]=_*R+g*O+m*G+p*at,r[14]=_*y+g*U+m*K+p*gt,r[3]=T*b+S*v+x*W+w*k,r[7]=T*A+S*N+x*Y+w*rt,r[11]=T*R+S*O+x*G+w*at,r[15]=T*y+S*U+x*K+w*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+g*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],T=u*m*l-g*f*l+g*c*d-a*m*d-u*c*p+a*f*p,S=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,x=h*g*l-_*u*l+_*a*d-o*g*d-h*a*p+o*u*p,w=_*u*c-h*g*c-_*a*f+o*g*f+h*a*m-o*u*m,b=e*T+n*S+i*x+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=T*A,t[1]=(g*f*r-u*m*r-g*i*d+n*m*d+u*i*p-n*f*p)*A,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*A,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*A,t[4]=S*A,t[5]=(h*m*r-_*f*r+_*i*d-e*m*d-h*i*p+e*f*p)*A,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*p-e*c*p)*A,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*A,t[8]=x*A,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*p-e*u*p)*A,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*A,t[12]=w*A,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*A,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,g=o*h,m=o*u,p=a*u,T=c*l,S=c*h,x=c*u,w=n.x,b=n.y,A=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+x)*w,i[2]=(_-S)*w,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(f+p))*b,i[6]=(m+T)*b,i[7]=0,i[8]=(_+S)*A,i[9]=(m-T)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ks.set(i[0],i[1],i[2]).length();const o=ks.set(i[4],i[5],i[6]).length(),a=ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Hn.copy(this);const l=1/r,h=1/o,u=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ti){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(a===Ti)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ya)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ti){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h;let _,g;if(a===Ti)_=(o+r)*u,g=-2*u;else if(a===ya)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const ks=new z,Hn=new Pe,s_=new z(0,0,0),r_=new z(1,1,1),Ui=new z,Fo=new z,_n=new z,Ru=new Pe,Nu=new go;let Ps=class zd{constructor(t=0,e=0,n=0,i=zd.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ps.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o_=0;const Pu=new z,Hs=new go,pi=new Pe,Uo=new z,Ur=new z,a_=new z,c_=new go,Du=new z(1,0,0),Iu=new z(0,1,0),Lu=new z(0,0,1),Fu={type:"added"},l_={type:"removed"},Gs={type:"childadded",child:null},lc={type:"childremoved",child:null};class ke extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new z,e=new Ps,n=new go,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Bt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Pu.copy(t).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Uo.copy(t):Uo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ur,Uo,this.up):pi.lookAt(Uo,Ur,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(pi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(l_),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,a_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,c_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new z(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new z,mi=new z,hc=new z,gi=new z,Ws=new z,Xs=new z,Uu=new z,uc=new z,fc=new z,dc=new z,pc=new Ne,mc=new Ne,gc=new Ne;class Yn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),mi.subVectors(n,e),hc.subVectors(t,e);const o=Gn.dot(Gn),a=Gn.dot(mi),c=Gn.dot(hc),l=mi.dot(mi),h=mi.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),mi.subVectors(t,e),Gn.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ws.subVectors(i,n),Xs.subVectors(r,n),uc.subVectors(t,n);const c=Ws.dot(uc),l=Xs.dot(uc);if(c<=0&&l<=0)return e.copy(n);fc.subVectors(t,i);const h=Ws.dot(fc),u=Xs.dot(fc);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ws,o);dc.subVectors(t,r);const d=Ws.dot(dc),_=Xs.dot(dc);if(_>=0&&d<=_)return e.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Xs,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Uu.subVectors(r,i),a=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(Uu,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function _c(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}let Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=qg(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_c(o,r,t+1/3),this.g=_c(o,r,t),this.b=_c(o,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return jt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ht(Xe.r*255,0,255))*65536+Math.round(Ht(Xe.g*255,0,255))*256+Math.round(Ht(Xe.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,r=Xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Pn){jt.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Oo);const n=tc(Oi.h,Oo.h,e),i=tc(Oi.s,Oo.s,e),r=tc(Oi.l,Oo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Xe=new Jt;Jt.NAMES=Vd;let h_=0;class Nr extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=or,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=jc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kd extends Nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ps,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new z,zo=new ae;let u_=0,Kn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tu,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tu&&(t.usage=this.usage),t}};class Hd extends Kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gd extends Kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ke extends Kn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let f_=0;const Rn=new Pe,xc=new ke,qs=new z,xn=new _o,Or=new _o,ze=new z;class zn extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?Gd:Hd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(xn.min,Or.min),xn.expandByPoint(ze),ze.addVectors(xn.max,Or.max),xn.expandByPoint(ze)):(xn.expandByPoint(Or.min),xn.expandByPoint(Or.max))}xn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(t,l),ze.add(qs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new z,c[R]=new z;const l=new z,h=new z,u=new z,f=new ae,d=new ae,_=new ae,g=new z,m=new z;function p(R,y,v){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(N),a[R].add(g),a[y].add(g),a[v].add(g),c[R].add(m),c[y].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,y=T.length;R<y;++R){const v=T[R],N=v.start,O=v.count;for(let U=N,W=N+O;U<W;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new z,x=new z,w=new z,b=new z;function A(R){w.fromBufferAttribute(i,R),b.copy(w);const y=a[R];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),x.crossVectors(b,y);const N=x.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,N)}for(let R=0,y=T.length;R<y;++R){const v=T[R],N=v.start,O=v.count;for(let U=N,W=N+O;U<W;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new Kn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new Pe,as=new Od,Bo=new Fa,zu=new z,Vo=new z,ko=new z,Ho=new z,yc=new z,Go=new z,Bu=new z,Wo=new z;class In extends ke{constructor(t=new zn,e=new kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,t),o?Go.addScaledVector(yc,h):Go.addScaledVector(yc.sub(e),h))}e.add(Go)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Bo.containsPoint(as.origin)===!1&&(as.intersectSphere(Bo,zu)===null||as.origin.distanceToSquared(zu)>_u(t.far-t.near,2)))&&(Ou.copy(r).invert(),as.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,w=S;x<w;x+=3){const b=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);i=Xo(this,p,t,n,l,h,u,b,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Xo(this,o,t,n,l,h,u,T,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,w=S;x<w;x+=3){const b=x,A=x+1,R=x+2;i=Xo(this,p,t,n,l,h,u,b,A,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=m,S=m+1,x=m+2;i=Xo(this,o,t,n,l,h,u,T,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function d_(s,t,e,n,i,r,o,a){let c;if(t.side===hn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ji,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Wo);return l<e.near||l>e.far?null:{distance:l,point:Wo.clone(),object:s}}function Xo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Vo),s.getVertexPosition(c,ko),s.getVertexPosition(l,Ho);const h=d_(s,t,e,n,Vo,ko,Ho,Bu);if(h){const u=new z;Yn.getBarycoord(Bu,Vo,ko,Ho,u),i&&(h.uv=Yn.getInterpolatedAttribute(i,a,c,l,u,new ae)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};Yn.getNormal(Vo,ko,Ho,f.normal),h.face=f,h.barycoord=u}return h}class xo extends zn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function _(g,m,p,T,S,x,w,b,A,R,y){const v=x/A,N=w/R,O=x/2,U=w/2,W=b/2,Y=A+1,G=R+1;let K=0,k=0;const rt=new z;for(let at=0;at<G;at++){const gt=at*N-U;for(let Dt=0;Dt<Y;Dt++){const ee=Dt*v-O;rt[g]=ee*T,rt[m]=gt*S,rt[p]=W,l.push(rt.x,rt.y,rt.z),rt[g]=0,rt[m]=0,rt[p]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Dt/A),u.push(1-at/R),K+=1}}for(let at=0;at<R;at++)for(let gt=0;gt<A;gt++){const Dt=f+gt+Y*at,ee=f+gt+Y*(at+1),Z=f+(gt+1)+Y*(at+1),it=f+(gt+1)+Y*at;c.push(Dt,ee,it),c.push(ee,Z,it),k+=6}a.addGroup(d,k,y),d+=k,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(s){const t={};for(let e=0;e<s.length;e++){const n=vr(s[e]);for(const i in n)t[i]=n[i]}return t}function p_(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const m_={clone:vr,merge:en};var g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=p_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xd extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new z,Vu=new ae,ku=new ae;class Dn extends Xd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,ku),e.subVectors(ku,Vu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ys=-90,$s=1;class x_ extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(Ys,$s,t,e);i.layers=this.layers,this.add(i);const r=new Dn(Ys,$s,t,e);r.layers=this.layers,this.add(r);const o=new Dn(Ys,$s,t,e);o.layers=this.layers,this.add(o);const a=new Dn(Ys,$s,t,e);a.layers=this.layers,this.add(a);const c=new Dn(Ys,$s,t,e);c.layers=this.layers,this.add(c);const l=new Dn(Ys,$s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class qd extends Jn{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y_ extends Ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ni}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xo(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Yi});r.uniforms.tEquirect.value=e;const o=new In(i,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=ni),new x_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class $r extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v_={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $r;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class M_ extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ps,this.environmentIntensity=1,this.environmentRotation=new Ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mc=new z,S_=new z,T_=new Bt;let gs=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mc.subVectors(n,e).cross(S_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||T_.getNormalMatrix(t),i=this.coplanarPoint(Mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const cs=new Fa,qo=new z;class mh{constructor(t=new gs,e=new gs,n=new gs,i=new gs,r=new gs,o=new gs){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],T=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-r,f-l,m-d,x-p).normalize(),n[1].setComponents(c+r,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+h,m+_,x+T).normalize(),n[3].setComponents(c-o,f-h,m-_,x-T).normalize(),n[4].setComponents(c-a,f-u,m-g,x-S).normalize(),e===Ti)n[5].setComponents(c+a,f+u,m+g,x+S).normalize();else if(e===ya)n[5].setComponents(a,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(qo.x=i.normal.x>0?t.max.x:t.min.x,qo.y=i.normal.y>0?t.max.y:t.min.y,qo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yd extends Nr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hu=new Pe,Ol=new Od,Yo=new Fa,$o=new z;class E_ extends ke{constructor(t=new zn,e=new Yd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Hu.copy(i).invert(),Ol.copy(t.ray).applyMatrix4(Hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);$o.fromBufferAttribute(u,m),Gu($o,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)$o.fromBufferAttribute(u,_),Gu($o,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gu(s,t,e,n,i,r,o){const a=Ol.distanceSqToPoint(s);if(a<e){const c=new z;Ol.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}let $d=class extends Jn{constructor(t,e,n,i,r,o,a,c,l,h=ar){if(h!==ar&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ar&&(n=Rs),n===void 0&&h===xr&&(n=_r),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=c!==void 0?c:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ph(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};class gh extends zn{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;T(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function T(){const x=new z,w=new z;let b=0;const A=(e-t)/n;for(let R=0;R<=r;R++){const y=[],v=R/r,N=v*(e-t)+t;for(let O=0;O<=i;O++){const U=O/i,W=U*c+a,Y=Math.sin(W),G=Math.cos(W);w.x=N*Y,w.y=-v*n+m,w.z=N*G,u.push(w.x,w.y,w.z),x.set(Y,A,G).normalize(),f.push(x.x,x.y,x.z),d.push(U,1-v),y.push(_++)}g.push(y)}for(let R=0;R<i;R++)for(let y=0;y<r;y++){const v=g[y][R],N=g[y+1][R],O=g[y+1][R+1],U=g[y][R+1];(t>0||y!==0)&&(h.push(v,N,U),b+=3),(e>0||y!==r-1)&&(h.push(N,O,U),b+=3)}l.addGroup(p,b,0),p+=b}function S(x){const w=_,b=new ae,A=new z;let R=0;const y=x===!0?t:e,v=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),_++;const N=_;for(let O=0;O<=i;O++){const W=O/i*c+a,Y=Math.cos(W),G=Math.sin(W);A.x=y*G,A.y=m*v,A.z=y*Y,u.push(A.x,A.y,A.z),f.push(0,v,0),b.x=Y*.5+.5,b.y=G*.5*v+.5,d.push(b.x,b.y),_++}for(let O=0;O<i;O++){const U=w+O,W=N+O;x===!0?h.push(W,W+1,U):h.push(W+1,W,U),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _h extends gh{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _h(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ua extends zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const T=p*f-o;for(let S=0;S<l;S++){const x=S*u-r;_.push(x,-T,0),g.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const S=T+l*p,x=T+l*(p+1),w=T+1+l*(p+1),b=T+1+l*p;d.push(S,x,b),d.push(x,w,b)}this.setIndex(d),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}class xh extends zn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new z,u=new z,f=new z;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,T=(i+1)*d+_;o.push(g,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yh extends zn{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new z,f=new z,d=new z,_=new z,g=new z,m=new z,p=new z;for(let S=0;S<=n;++S){const x=S/n*r*Math.PI*2;T(x,r,o,t,d),T(x+.01,r,o,t,_),m.subVectors(_,d),p.addVectors(_,d),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let w=0;w<=i;++w){const b=w/i*Math.PI*2,A=-e*Math.cos(b),R=e*Math.sin(b);u.x=d.x+(A*p.x+R*g.x),u.y=d.y+(A*p.y+R*g.y),u.z=d.z+(A*p.z+R*g.z),c.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),h.push(S/n),h.push(w/i)}}for(let S=1;S<=n;S++)for(let x=1;x<=i;x++){const w=(i+1)*(S-1)+(x-1),b=(i+1)*S+(x-1),A=(i+1)*S+x,R=(i+1)*(S-1)+x;a.push(w,b,R),a.push(b,A,R)}this.setIndex(a),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2));function T(S,x,w,b,A){const R=Math.cos(S),y=Math.sin(S),v=w/x*S,N=Math.cos(v);A.x=b*(2+N)*.5*R,A.y=b*(2+N)*y*.5,A.z=b*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class A_ extends Nr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class w_ extends Nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b_ extends Nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wu={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class C_{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const R_=new C_;class vh{constructor(t){this.manager=t!==void 0?t:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vh.DEFAULT_MATERIAL_NAME="__DEFAULT";class N_ extends vh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Wu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ro("img");function c(){h(),Wu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class P_ extends vh{constructor(t){super(t)}load(t,e,n,i){const r=new Jn,o=new N_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class D_ extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Sc=new Pe,Xu=new z,qu=new z;class I_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zd extends Xd{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class L_ extends I_{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends D_{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new L_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class U_ extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class O_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yu(){return performance.now()}function $u(s,t,e,n){const i=z_(n);switch(e){case Sd:return s*t;case Ed:return s*t;case Ad:return s*t*2;case wd:return s*t/i.components*i.byteLength;case uh:return s*t/i.components*i.byteLength;case bd:return s*t*2/i.components*i.byteLength;case fh:return s*t*2/i.components*i.byteLength;case Td:return s*t*3/i.components*i.byteLength;case Zn:return s*t*4/i.components*i.byteLength;case dh:return s*t*4/i.components*i.byteLength;case aa:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case la:case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hl:case fl:return Math.max(s,16)*Math.max(t,8)/4;case ll:case ul:return Math.max(s,8)*Math.max(t,8)/2;case dl:case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ua:case Nl:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Cd:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Il:case Ll:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z_(s){switch(s){case Ci:case yd:return{byteLength:1,components:1};case so:case vd:case po:return{byteLength:2,components:1};case lh:case hh:return{byteLength:2,components:4};case Rs:case ch:case Si:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function B_(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:V_,alphahash_pars_fragment:k_,alphamap_fragment:H_,alphamap_pars_fragment:G_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:$_,batching_vertex:Z_,begin_vertex:K_,beginnormal_vertex:j_,bsdfs:J_,iridescence_fragment:Q_,bumpmap_pars_fragment:t0,clipping_planes_fragment:e0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:c0,common:l0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:f0,displacementmap_vertex:d0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:x0,envmap_common_pars_fragment:y0,envmap_pars_fragment:v0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:S0,fog_vertex:T0,fog_pars_vertex:E0,fog_fragment:A0,fog_pars_fragment:w0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:C0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:N0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:L0,lights_phong_fragment:F0,lights_phong_pars_fragment:U0,lights_physical_fragment:O0,lights_physical_pars_fragment:z0,lights_fragment_begin:B0,lights_fragment_maps:V0,lights_fragment_end:k0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:$0,map_particle_pars_fragment:Z0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:j0,morphinstance_vertex:J0,morphcolor_vertex:Q0,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:fx,opaque_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:_x,dithering_pars_fragment:xx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Tx,shadowmask_pars_fragment:Ex,skinbase_vertex:Ax,skinning_pars_vertex:wx,skinning_vertex:bx,skinnormal_vertex:Cx,specularmap_fragment:Rx,specularmap_pars_fragment:Nx,tonemapping_fragment:Px,tonemapping_pars_fragment:Dx,transmission_fragment:Ix,transmission_pars_fragment:Lx,uv_pars_fragment:Fx,uv_pars_vertex:Ux,uv_vertex:Ox,worldpos_vertex:zx,background_vert:Bx,background_frag:Vx,backgroundCube_vert:kx,backgroundCube_frag:Hx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:Yx,distanceRGBA_frag:$x,equirect_vert:Zx,equirect_frag:Kx,linedashed_vert:jx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:ty,meshlambert_vert:ey,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:cy,meshphysical_vert:ly,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:fy,points_vert:dy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:_y,sprite_frag:xy},ct={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ti={basic:{uniforms:en([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:en([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:en([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:en([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:en([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:en([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:en([ct.points,ct.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:en([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:en([ct.common,ct.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:en([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:en([ct.sprite,ct.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:en([ct.common,ct.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:en([ct.lights,ct.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};ti.physical={uniforms:en([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Zo={r:0,b:0,g:0},ls=new Ps,yy=new Pe;function vy(s,t,e,n,i,r,o){const a=new Jt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const w=_(S);w===null?p(a,c):w&&w.isColor&&(p(w,1),x=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const w=_(x);w&&(w.isCubeTexture||w.mapping===La)?(h===void 0&&(h=new In(new xo(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:vr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ls.copy(x.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(ls)),h.material.toneMapped=jt.getTransfer(w.colorSpace)!==ce,(u!==w||f!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new In(new Ua(2,2),new Ji({name:"BackgroundMaterial",uniforms:vr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=jt.getTransfer(w.colorSpace)!==ce,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(Zo,Wd(s)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:g,addToRenderList:m,dispose:T}}function My(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(v,N,O,U,W){let Y=!1;const G=u(U,O,N);r!==G&&(r=G,l(r.object)),Y=d(v,U,O,W),Y&&_(v,U,O,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(v,N,O,U),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,N,O){const U=O.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let Y=W[N.id];Y===void 0&&(Y={},W[N.id]=Y);let G=Y[U];return G===void 0&&(G=f(c()),Y[U]=G),G}function f(v){const N=[],O=[],U=[];for(let W=0;W<e;W++)N[W]=0,O[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:U,object:v,attributes:{},index:null}}function d(v,N,O,U){const W=r.attributes,Y=N.attributes;let G=0;const K=O.getAttributes();for(const k in K)if(K[k].location>=0){const at=W[k];let gt=Y[k];if(gt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),at===void 0||at.attribute!==gt||gt&&at.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function _(v,N,O,U){const W={},Y=N.attributes;let G=0;const K=O.getAttributes();for(const k in K)if(K[k].location>=0){let at=Y[k];at===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(at=v.instanceColor));const gt={};gt.attribute=at,at&&at.data&&(gt.data=at.data),W[k]=gt,G++}r.attributes=W,r.attributesNum=G,r.index=U}function g(){const v=r.newAttributes;for(let N=0,O=v.length;N<O;N++)v[N]=0}function m(v){p(v,0)}function p(v,N){const O=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;O[v]=1,U[v]===0&&(s.enableVertexAttribArray(v),U[v]=1),W[v]!==N&&(s.vertexAttribDivisor(v,N),W[v]=N)}function T(){const v=r.newAttributes,N=r.enabledAttributes;for(let O=0,U=N.length;O<U;O++)N[O]!==v[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function S(v,N,O,U,W,Y,G){G===!0?s.vertexAttribIPointer(v,N,O,W,Y):s.vertexAttribPointer(v,N,O,U,W,Y)}function x(v,N,O,U){g();const W=U.attributes,Y=O.getAttributes(),G=N.defaultAttributeValues;for(const K in Y){const k=Y[K];if(k.location>=0){let rt=W[K];if(rt===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const at=rt.normalized,gt=rt.itemSize,Dt=t.get(rt);if(Dt===void 0)continue;const ee=Dt.buffer,Z=Dt.type,it=Dt.bytesPerElement,Mt=Z===s.INT||Z===s.UNSIGNED_INT||rt.gpuType===ch;if(rt.isInterleavedBufferAttribute){const ut=rt.data,Rt=ut.stride,Qt=rt.offset;if(ut.isInstancedInterleavedBuffer){for(let Pt=0;Pt<k.locationSize;Pt++)p(k.location+Pt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Pt=0;Pt<k.locationSize;Pt++)m(k.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Pt=0;Pt<k.locationSize;Pt++)S(k.location+Pt,gt/k.locationSize,Z,at,Rt*it,(Qt+gt/k.locationSize*Pt)*it,Mt)}else{if(rt.isInstancedBufferAttribute){for(let ut=0;ut<k.locationSize;ut++)p(k.location+ut,rt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<k.locationSize;ut++)m(k.location+ut);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ut=0;ut<k.locationSize;ut++)S(k.location+ut,gt/k.locationSize,Z,at,gt*it,gt/k.locationSize*ut*it,Mt)}}else if(G!==void 0){const at=G[K];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(k.location,at);break;case 3:s.vertexAttrib3fv(k.location,at);break;case 4:s.vertexAttrib4fv(k.location,at);break;default:s.vertexAttrib1fv(k.location,at)}}}}T()}function w(){R();for(const v in n){const N=n[v];for(const O in N){const U=N[O];for(const W in U)h(U[W].object),delete U[W];delete N[O]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const N=n[v.id];for(const O in N){const U=N[O];for(const W in U)h(U[W].object),delete U[W];delete N[O]}delete n[v.id]}function A(v){for(const N in n){const O=n[N];if(O[v.id]===void 0)continue;const U=O[v.id];for(const W in U)h(U[W].object),delete U[W];delete O[v.id]}}function R(){y(),o=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function Sy(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ty(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Zn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ci&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!R)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:b}}function Ey(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gs,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,S=T*4;let x=p.clippingState||null;c.value=x,x=h(_,f,S,d);for(let w=0;w!==S;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==g;++S,x+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ay(s){let t=new WeakMap;function e(o,a){return a===rl?o.mapping=mr:a===ol&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===rl||a===ol)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new y_(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const nr=4,Zu=[.125,.215,.35,.446,.526,.582],vs=20,Tc=new Zd,Ku=new Jt;let Ec=null,Ac=0,wc=0,bc=!1;const _s=(1+Math.sqrt(5))/2,Zs=1/_s,ju=[new z(-_s,Zs,0),new z(_s,Zs,0),new z(-Zs,0,_s),new z(Zs,0,_s),new z(0,_s,-Zs),new z(0,_s,Zs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],wy=new z;class Ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=wy}=r;Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,Ac,wc),this._renderer.xr.enabled=bc,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:po,format:Zn,colorSpace:yr,depthBuffer:!1},i=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(r)),this._blurMaterial=Cy(r,t,e)}return i}_compileMaterial(t){const e=new In(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,n,i,r){const c=new Dn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ku),u.toneMapping=$i,u.autoClear=!1;const _=new kd({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new In(new xo,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Ku),m=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const x=this._cubeSize;Ko(i,S*x,T>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===mr||t.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ko(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(i-r-1)%ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new In(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let T=0;for(let A=0;A<vs;++A){const R=A/g,y=Math.exp(-R*R/2);p.push(y),A===0?T+=y:A<m&&(T+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const x=this._sizeLods[i],w=3*x*(i>S-nr?i-S+nr:0),b=4*(this._cubeSize-x);Ko(e,w,b,3*x,2*x),c.setRenderTarget(e),c.render(u,Tc)}}function by(s){const t=[],e=[],n=[];let i=s;const r=s-nr+1+Zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-nr?c=Zu[o-s+nr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*d),S=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,R=b>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];T.set(y,g*_*b),S.set(f,m*_*b);const v=[b,b,b,b,b,b];x.set(v,p*_*b)}const w=new zn;w.setAttribute("position",new Kn(T,g)),w.setAttribute("uv",new Kn(S,m)),w.setAttribute("faceIndex",new Kn(x,p)),t.push(w),i>nr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qu(s,t,e){const n=new Ns(s,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Cy(s,t,e){const n=new Float32Array(vs),i=new z(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function tf(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ef(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ry(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===rl||c===ol,h=c===mr||c===gr;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ju(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Ju(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ny(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Py(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let S=0,x=T.length;S<x;S+=3){const w=T[S+0],b=T[S+1],A=T[S+2];f.push(w,b,b,A,A,w)}}else if(_!==void 0){const T=_.array;g=_.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const w=S+0,b=S+1,A=S+2;f.push(w,b,b,A,A,w)}}else return;const m=new(Id(f)?Gd:Hd)(f,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Dy(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=d[T]*g[T];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Iy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ly(s,t,e){const n=new WeakMap,i=new Ne;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*b*4*u),R=new Fd(A,w,b,u);R.type=Si,R.needsUpdate=!0;const y=x*4;for(let N=0;N<u;N++){const O=p[N],U=T[N],W=S[N],Y=w*b*4*N;for(let G=0;G<O.count;G++){const K=G*y;_===!0&&(i.fromBufferAttribute(O,G),A[Y+K+0]=i.x,A[Y+K+1]=i.y,A[Y+K+2]=i.z,A[Y+K+3]=0),g===!0&&(i.fromBufferAttribute(U,G),A[Y+K+4]=i.x,A[Y+K+5]=i.y,A[Y+K+6]=i.z,A[Y+K+7]=0),m===!0&&(i.fromBufferAttribute(W,G),A[Y+K+8]=i.x,A[Y+K+9]=i.y,A[Y+K+10]=i.z,A[Y+K+11]=W.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new ae(w,b)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Fy(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const jd=new Jn,nf=new $d(1,1),Jd=new Fd,Qd=new n_,tp=new qd,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),cf=new Float32Array(4);function Pr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=sf[i];if(r===void 0&&(r=new Float32Array(i),sf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oa(s,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Uy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Oy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function zy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function By(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function Vy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;cf.set(n),s.uniformMatrix2fv(this.addr,!1,cf),Oe(e,n)}}function ky(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;af.set(n),s.uniformMatrix3fv(this.addr,!1,af),Oe(e,n)}}function Hy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;of.set(n),s.uniformMatrix4fv(this.addr,!1,of),Oe(e,n)}}function Gy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function Xy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function qy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function Yy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function $y(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function Zy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function Ky(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function jy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nf.compareFunction=Nd,r=nf):r=jd,e.setTexture2D(t||r,i)}function Jy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qd,i)}function Qy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tp,i)}function tv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jd,i)}function ev(s){switch(s){case 5126:return Uy;case 35664:return Oy;case 35665:return zy;case 35666:return By;case 35674:return Vy;case 35675:return ky;case 35676:return Hy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return $y;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return tv}}function nv(s,t){s.uniform1fv(this.addr,t)}function iv(s,t){const e=Pr(t,this.size,2);s.uniform2fv(this.addr,e)}function sv(s,t){const e=Pr(t,this.size,3);s.uniform3fv(this.addr,e)}function rv(s,t){const e=Pr(t,this.size,4);s.uniform4fv(this.addr,e)}function ov(s,t){const e=Pr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function av(s,t){const e=Pr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function cv(s,t){const e=Pr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function lv(s,t){s.uniform1iv(this.addr,t)}function hv(s,t){s.uniform2iv(this.addr,t)}function uv(s,t){s.uniform3iv(this.addr,t)}function fv(s,t){s.uniform4iv(this.addr,t)}function dv(s,t){s.uniform1uiv(this.addr,t)}function pv(s,t){s.uniform2uiv(this.addr,t)}function mv(s,t){s.uniform3uiv(this.addr,t)}function gv(s,t){s.uniform4uiv(this.addr,t)}function _v(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||jd,r[o])}function xv(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qd,r[o])}function yv(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tp,r[o])}function vv(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jd,r[o])}function Mv(s){switch(s){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return vv}}class Sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ev(e.type)}}class Tv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mv(e.type)}}class Ev{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function lf(s,t){s.seq.push(t),s.map[t.id]=t}function Av(s,t,e){const n=s.name,i=n.length;for(Cc.lastIndex=0;;){const r=Cc.exec(n),o=Cc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){lf(e,l===void 0?new Sv(a,s,t):new Tv(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ev(a),lf(e,u)),e=u}}}class da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Av(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function hf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const wv=37297;let bv=0;function Cv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const uf=new Bt;function Rv(s){jt._getMatrix(uf,jt.workingColorSpace,s);const t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case xa:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ff(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Cv(s.getShaderSource(t),o)}else return i}function Nv(s,t){const e=Rv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pv(s,t){let e;switch(t){case Cg:e="Linear";break;case Rg:e="Reinhard";break;case Ng:e="Cineon";break;case Pg:e="ACESFilmic";break;case Ig:e="AgX";break;case Lg:e="Neutral";break;case Dg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jo=new z;function Dv(){jt.getLuminanceCoefficients(jo);const s=jo.x.toFixed(4),t=jo.y.toFixed(4),e=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function Lv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zr(s){return s!==""}function df(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(s){return s.replace(Uv,zv)}const Ov=new Map;function zv(s,t){let e=zt[t];if(e===void 0){const n=Ov.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zl(e)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(s){return s.replace(Bv,Vv)}function Vv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ag?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function Hv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function Wv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case wg:t="ENVMAP_BLENDING_MIX";break;case bg:t="ENVMAP_BLENDING_ADD";break}return t}function Xv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=kv(e),l=Hv(e),h=Gv(e),u=Wv(e),f=Xv(e),d=Iv(e),_=Lv(r),g=i.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?zt.tonemapping_pars_fragment:"",e.toneMapping!==$i?Pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Dv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),o=zl(o),o=df(o,e),o=pf(o,e),a=zl(a),a=df(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,x=T+p+a,w=hf(i,i.VERTEX_SHADER,S),b=hf(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(N){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(b).trim();let Y=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,b);else{const K=ff(i,w,"vertex"),k=ff(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+K+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||W==="")&&(G=!1);G&&(N.diagnostics={runnable:Y,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(b),R=new da(i,g),y=Fv(i,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,wv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=b,this}let Yv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zv(t),e.set(t,n)),n}}class Zv{constructor(t){this.id=Yv++,this.code=t,this.usedTimes=0}}function Kv(s,t,e,n,i,r,o){const a=new Bd,c=new $v,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,N,O,U){const W=O.fog,Y=U.geometry,G=y.isMeshStandardMaterial?O.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),k=K&&K.mapping===La?K.image.height:null,rt=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=at!==void 0?at.length:0;let Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let ee,Z,it,Mt;if(rt){const se=ti[rt];ee=se.vertexShader,Z=se.fragmentShader}else ee=y.vertexShader,Z=y.fragmentShader,c.update(y),it=c.getVertexShaderID(y),Mt=c.getFragmentShaderID(y);const ut=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Qt=U.isInstancedMesh===!0,Pt=U.isBatchedMesh===!0,Se=!!y.map,ge=!!y.matcap,Wt=!!K,P=!!y.aoMap,wn=!!y.lightMap,Xt=!!y.bumpMap,qt=!!y.normalMap,At=!!y.displacementMap,ue=!!y.emissiveMap,Et=!!y.metalnessMap,C=!!y.roughnessMap,M=y.anisotropy>0,B=y.clearcoat>0,J=y.dispersion>0,et=y.iridescence>0,j=y.sheen>0,Tt=y.transmission>0,ft=M&&!!y.anisotropyMap,_t=B&&!!y.clearcoatMap,$t=B&&!!y.clearcoatNormalMap,st=B&&!!y.clearcoatRoughnessMap,xt=et&&!!y.iridescenceMap,Nt=et&&!!y.iridescenceThicknessMap,It=j&&!!y.sheenColorMap,yt=j&&!!y.sheenRoughnessMap,Yt=!!y.specularMap,Ot=!!y.specularColorMap,he=!!y.specularIntensityMap,D=Tt&&!!y.transmissionMap,lt=Tt&&!!y.thicknessMap,$=!!y.gradientMap,Q=!!y.alphaMap,pt=y.alphaTest>0,dt=!!y.alphaHash,Ut=!!y.extensions;let ye=$i;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Ge={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:Z,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Pt,batchingColor:Pt&&U._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&U.instanceColor!==null,instancingMorph:Qt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:yr,alphaToCoverage:!!y.alphaToCoverage,map:Se,matcap:ge,envMap:Wt,envMapMode:Wt&&K.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:wn,bumpMap:Xt,normalMap:qt,displacementMap:f&&At,emissiveMap:ue,normalMapObjectSpace:qt&&y.normalMapType===zg,normalMapTangentSpace:qt&&y.normalMapType===Rd,metalnessMap:Et,roughnessMap:C,anisotropy:M,anisotropyMap:ft,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:$t,clearcoatRoughnessMap:st,dispersion:J,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:Nt,sheen:j,sheenColorMap:It,sheenRoughnessMap:yt,specularMap:Yt,specularColorMap:Ot,specularIntensityMap:he,transmission:Tt,transmissionMap:D,thicknessMap:lt,gradientMap:$,opaque:y.transparent===!1&&y.blending===or&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:pt,alphaHash:dt,combine:y.combine,mapUv:Se&&g(y.map.channel),aoMapUv:P&&g(y.aoMap.channel),lightMapUv:wn&&g(y.lightMap.channel),bumpMapUv:Xt&&g(y.bumpMap.channel),normalMapUv:qt&&g(y.normalMap.channel),displacementMapUv:At&&g(y.displacementMap.channel),emissiveMapUv:ue&&g(y.emissiveMap.channel),metalnessMapUv:Et&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:ft&&g(y.anisotropyMap.channel),clearcoatMapUv:_t&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:$t&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(y.sheenRoughnessMap.channel),specularMapUv:Yt&&g(y.specularMap.channel),specularColorMapUv:Ot&&g(y.specularColorMap.channel),specularIntensityMapUv:he&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:lt&&g(y.thicknessMap.channel),alphaMapUv:Q&&g(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(qt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(Se||Q),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===ce,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)v.push(N),v.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(T(v,y),S(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function T(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=_[y.type];let N;if(v){const O=ti[v];N=m_.clone(O.uniforms)}else N=y.uniforms;return N}function w(y,v){let N;for(let O=0,U=h.length;O<U;O++){const W=h[O];if(W.cacheKey===v){N=W,++N.usedTimes;break}}return N===void 0&&(N=new qv(s,v,y,r),h.push(N)),N}function b(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function jv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Jv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _f(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Jv),n.length>1&&n.sort(f||_f),i.length>1&&i.sort(f||_f)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Qv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new xf,s.set(n,[o])):i>=r.length?(o=new xf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function tM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Jt};break;case"SpotLight":e={position:new z,direction:new z,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function eM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let nM=0;function iM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sM(s){const t=new tM,e=eM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,r=new Pe,o=new Pe;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,T=0,S=0,x=0,w=0,b=0,A=0;l.sort(iM);for(let y=0,v=l.length;y<v;y++){const N=l[y],O=N.color,U=N.intensity,W=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=O.r*U,u+=O.g*U,f+=O.b*U;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],U);A++}else if(N.isDirectionalLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,k=e.get(N);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=N.shadow.matrix,T++}n.directional[d]=G,d++}else if(N.isSpotLight){const G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(O).multiplyScalar(U),G.distance=W,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[g]=G;const K=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,K.updateMatrices(N),N.castShadow&&b++),n.spotLightMatrix[g]=K.matrix,N.castShadow){const k=e.get(N);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=Y,x++}g++}else if(N.isRectAreaLight){const G=t.get(N);G.color.copy(O).multiplyScalar(U),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=G,m++}else if(N.isPointLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){const K=N.shadow,k=e.get(N);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=N.shadow.matrix,S++}n.point[_]=G,_++}else if(N.isHemisphereLight){const G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(U),G.groundColor.copy(N.groundColor).multiplyScalar(U),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=A,n.version=nM++)}function c(l,h){let u=0,f=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function yf(s){const t=new sM(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function rM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new yf(s),t.set(i,[a])):r>=o.length?(a=new yf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cM(s,t,e){let n=new mh;const i=new ae,r=new ae,o=new Ne,a=new w_({depthPacking:Og}),c=new b_,l={},h=e.maxTextureSize,u={[ji]:hn,[hn]:ji,[Mi]:Mi},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:oM,fragmentShader:aM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new In(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let p=this.type;this.render=function(b,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==xi&&this.type===xi,W=p===xi&&this.type!==xi;for(let Y=0,G=b.length;Y<G;Y++){const K=b[Y],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const rt=k.getFrameExtents();if(i.multiply(rt),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,k.mapSize.y=r.y)),k.map===null||U===!0||W===!0){const gt=this.type!==xi?{minFilter:Fn,magFilter:Fn}:{};k.map!==null&&k.map.dispose(),k.map=new Ns(i.x,i.y,gt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const at=k.getViewportCount();for(let gt=0;gt<at;gt++){const Dt=k.getViewport(gt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),O.viewport(o),k.updateMatrices(K,gt),n=k.getFrustum(),x(A,R,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===xi&&T(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,N)};function T(b,A){const R=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ns(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,R,d,g,null)}function S(b,A,R,y){let v=null;const N=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)v=N;else if(v=R.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=v.uuid,U=A.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let Y=W[U];Y===void 0&&(Y=v.clone(),W[U]=Y,A.addEventListener("dispose",w)),v=Y}if(v.visible=A.visible,v.wireframe=A.wireframe,y===xi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=s.properties.get(v);O.light=R}return v}function x(b,A,R,y,v){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===xi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const U=t.update(b),W=b.material;if(Array.isArray(W)){const Y=U.groups;for(let G=0,K=Y.length;G<K;G++){const k=Y[G],rt=W[k.materialIndex];if(rt&&rt.visible){const at=S(b,rt,y,v);b.onBeforeShadow(s,b,A,R,U,at,k),s.renderBufferDirect(R,null,U,at,b,k),b.onAfterShadow(s,b,A,R,U,at,k)}}}else if(W.visible){const Y=S(b,W,y,v);b.onBeforeShadow(s,b,A,R,U,Y,null),s.renderBufferDirect(R,null,U,Y,b,null),b.onAfterShadow(s,b,A,R,U,Y,null)}}const O=b.children;for(let U=0,W=O.length;U<W;U++)x(O[U],A,R,y,v)}function w(b){b.target.removeEventListener("dispose",w);for(const R in l){const y=l[R],v=b.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const lM={[Jc]:Qc,[tl]:il,[el]:sl,[pr]:nl,[Qc]:Jc,[il]:tl,[sl]:el,[nl]:pr};function hM(s,t){function e(){let D=!1;const lt=new Ne;let $=null;const Q=new Ne(0,0,0,0);return{setMask:function(pt){$!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,Ut,ye,Ge){Ge===!0&&(pt*=ye,dt*=ye,Ut*=ye),lt.set(pt,dt,Ut,ye),Q.equals(lt)===!1&&(s.clearColor(pt,dt,Ut,ye),Q.copy(lt))},reset:function(){D=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,$=null,Q=null,pt=null;return{setReversed:function(dt){if(lt!==dt){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const ye=pt;pt=null,this.setClear(ye)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ut(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(dt){$!==dt&&!D&&(s.depthMask(dt),$=dt)},setFunc:function(dt){if(lt&&(dt=lM[dt]),Q!==dt){switch(dt){case Jc:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case tl:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case el:s.depthFunc(s.EQUAL);break;case nl:s.depthFunc(s.GEQUAL);break;case il:s.depthFunc(s.GREATER);break;case sl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(lt&&(dt=1-dt),s.clearDepth(dt),pt=dt)},reset:function(){D=!1,$=null,Q=null,pt=null,lt=!1}}}function i(){let D=!1,lt=null,$=null,Q=null,pt=null,dt=null,Ut=null,ye=null,Ge=null;return{setTest:function(se){D||(se?ut(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(se){lt!==se&&!D&&(s.stencilMask(se),lt=se)},setFunc:function(se,Bn,ui){($!==se||Q!==Bn||pt!==ui)&&(s.stencilFunc(se,Bn,ui),$=se,Q=Bn,pt=ui)},setOp:function(se,Bn,ui){(dt!==se||Ut!==Bn||ye!==ui)&&(s.stencilOp(se,Bn,ui),dt=se,Ut=Bn,ye=ui)},setLocked:function(se){D=se},setClear:function(se){Ge!==se&&(s.clearStencil(se),Ge=se)},reset:function(){D=!1,lt=null,$=null,Q=null,pt=null,dt=null,Ut=null,ye=null,Ge=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,S=null,x=null,w=null,b=null,A=new Jt(0,0,0),R=0,y=!1,v=null,N=null,O=null,U=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=K>=2);let rt=null,at={};const gt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),ee=new Ne().fromArray(gt),Z=new Ne().fromArray(Dt);function it(D,lt,$,Q){const pt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<$;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(lt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return dt}const Mt={};Mt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),o.setFunc(pr),Xt(!1),qt(xu),ut(s.CULL_FACE),P(Yi);function ut(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Qt(D,lt){return u[D]!==lt?(s.bindFramebuffer(D,lt),u[D]=lt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Pt(D,lt){let $=d,Q=!1;if(D){$=f.get(lt),$===void 0&&($=[],f.set(lt,$));const pt=D.textures;if($.length!==pt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Ut=pt.length;dt<Ut;dt++)$[dt]=s.COLOR_ATTACHMENT0+dt;$.length=pt.length,Q=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Q=!0);Q&&s.drawBuffers($)}function Se(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const ge={[ys]:s.FUNC_ADD,[lg]:s.FUNC_SUBTRACT,[hg]:s.FUNC_REVERSE_SUBTRACT};ge[ug]=s.MIN,ge[fg]=s.MAX;const Wt={[dg]:s.ZERO,[pg]:s.ONE,[mg]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[Mg]:s.SRC_ALPHA_SATURATE,[yg]:s.DST_COLOR,[_g]:s.DST_ALPHA,[gg]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[vg]:s.ONE_MINUS_DST_COLOR,[xg]:s.ONE_MINUS_DST_ALPHA,[Sg]:s.CONSTANT_COLOR,[Tg]:s.ONE_MINUS_CONSTANT_COLOR,[Eg]:s.CONSTANT_ALPHA,[Ag]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,lt,$,Q,pt,dt,Ut,ye,Ge,se){if(D===Yi){g===!0&&(Rt(s.BLEND),g=!1);return}if(g===!1&&(ut(s.BLEND),g=!0),D!==cg){if(D!==m||se!==y){if((p!==ys||x!==ys)&&(s.blendEquation(s.FUNC_ADD),p=ys,x=ys),se)switch(D){case or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yu:s.blendFunc(s.ONE,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,S=null,w=null,b=null,A.set(0,0,0),R=0,m=D,y=se}return}pt=pt||lt,dt=dt||$,Ut=Ut||Q,(lt!==p||pt!==x)&&(s.blendEquationSeparate(ge[lt],ge[pt]),p=lt,x=pt),($!==T||Q!==S||dt!==w||Ut!==b)&&(s.blendFuncSeparate(Wt[$],Wt[Q],Wt[dt],Wt[Ut]),T=$,S=Q,w=dt,b=Ut),(ye.equals(A)===!1||Ge!==R)&&(s.blendColor(ye.r,ye.g,ye.b,Ge),A.copy(ye),R=Ge),m=D,y=!1}function wn(D,lt){D.side===Mi?Rt(s.CULL_FACE):ut(s.CULL_FACE);let $=D.side===hn;lt&&($=!$),Xt($),D.blending===or&&D.transparent===!1?P(Yi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function qt(D){D!==rg?(ut(s.CULL_FACE),D!==N&&(D===xu?s.cullFace(s.BACK):D===og?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),N=D}function At(D){D!==O&&(G&&s.lineWidth(D),O=D)}function ue(D,lt,$){D?(ut(s.POLYGON_OFFSET_FILL),(U!==lt||W!==$)&&(s.polygonOffset(lt,$),U=lt,W=$)):Rt(s.POLYGON_OFFSET_FILL)}function Et(D){D?ut(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+Y-1),rt!==D&&(s.activeTexture(D),rt=D)}function M(D,lt,$){$===void 0&&(rt===null?$=s.TEXTURE0+Y-1:$=rt);let Q=at[$];Q===void 0&&(Q={type:void 0,texture:void 0},at[$]=Q),(Q.type!==D||Q.texture!==lt)&&(rt!==$&&(s.activeTexture($),rt=$),s.bindTexture(D,lt||Mt[D]),Q.type=D,Q.texture=lt)}function B(){const D=at[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function yt(D){Z.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Yt(D,lt){let $=l.get(lt);$===void 0&&($=new WeakMap,l.set(lt,$));let Q=$.get(D);Q===void 0&&(Q=s.getUniformBlockIndex(lt,D.name),$.set(D,Q))}function Ot(D,lt){const Q=l.get(lt).get(D);c.get(lt)!==Q&&(s.uniformBlockBinding(lt,Q,D.__bindingPointIndex),c.set(lt,Q))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,at={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,S=null,x=null,w=null,b=null,A=new Jt(0,0,0),R=0,y=!1,v=null,N=null,O=null,U=null,W=null,ee.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Rt,bindFramebuffer:Qt,drawBuffers:Pt,useProgram:Se,setBlending:P,setMaterial:wn,setFlipSided:Xt,setCullFace:qt,setLineWidth:At,setPolygonOffset:ue,setScissorTest:Et,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:xt,texImage3D:Nt,updateUBOMapping:Yt,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:st,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:It,viewport:yt,reset:he}}function uM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function _(C,M){return d?new OffscreenCanvas(C,M):ro("canvas")}function g(C,M,B){let J=1;const et=Et(C);if((et.width>B||et.height>B)&&(J=B/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){const j=Math.floor(J*et.width),Tt=Math.floor(J*et.height);u===void 0&&(u=_(j,Tt));const ft=M?_(j,Tt):u;return ft.width=j,ft.height=Tt,ft.getContext("2d").drawImage(C,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Tt+")."),ft}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,M,B,J,et=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=M;if(M===s.RED&&(B===s.FLOAT&&(j=s.R32F),B===s.HALF_FLOAT&&(j=s.R16F),B===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.R8UI),B===s.UNSIGNED_SHORT&&(j=s.R16UI),B===s.UNSIGNED_INT&&(j=s.R32UI),B===s.BYTE&&(j=s.R8I),B===s.SHORT&&(j=s.R16I),B===s.INT&&(j=s.R32I)),M===s.RG&&(B===s.FLOAT&&(j=s.RG32F),B===s.HALF_FLOAT&&(j=s.RG16F),B===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RG8UI),B===s.UNSIGNED_SHORT&&(j=s.RG16UI),B===s.UNSIGNED_INT&&(j=s.RG32UI),B===s.BYTE&&(j=s.RG8I),B===s.SHORT&&(j=s.RG16I),B===s.INT&&(j=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGB8UI),B===s.UNSIGNED_SHORT&&(j=s.RGB16UI),B===s.UNSIGNED_INT&&(j=s.RGB32UI),B===s.BYTE&&(j=s.RGB8I),B===s.SHORT&&(j=s.RGB16I),B===s.INT&&(j=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),B===s.UNSIGNED_INT&&(j=s.RGBA32UI),B===s.BYTE&&(j=s.RGBA8I),B===s.SHORT&&(j=s.RGBA16I),B===s.INT&&(j=s.RGBA32I)),M===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){const Tt=et?xa:jt.getTransfer(J);B===s.FLOAT&&(j=s.RGBA32F),B===s.HALF_FLOAT&&(j=s.RGBA16F),B===s.UNSIGNED_BYTE&&(j=Tt===ce?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(C,M){let B;return C?M===null||M===Rs||M===_r?B=s.DEPTH24_STENCIL8:M===Si?B=s.DEPTH32F_STENCIL8:M===so&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rs||M===_r?B=s.DEPTH_COMPONENT24:M===Si?B=s.DEPTH_COMPONENT32F:M===so&&(B=s.DEPTH_COMPONENT16),B}function w(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){const M=C.target;M.removeEventListener("dispose",b),R(M),M.isVideoTexture&&h.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),v(M)}function R(C){const M=n.get(C);if(M.__webglInit===void 0)return;const B=C.source,J=f.get(B);if(J){const et=J[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&y(C),Object.keys(J).length===0&&f.delete(B)}n.remove(C)}function y(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const B=C.source,J=f.get(B);delete J[M.__cacheKey],o.memory.textures--}function v(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let et=0;et<M.__webglFramebuffer[J].length;et++)s.deleteFramebuffer(M.__webglFramebuffer[J][et]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=C.textures;for(let J=0,et=B.length;J<et;J++){const j=n.get(B[J]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(C)}let N=0;function O(){N=0}function U(){const C=N;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){const B=n.get(C);if(C.isVideoTexture&&At(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,C,M);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function G(C,M){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Z(B,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function K(C,M){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Z(B,C,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function k(C,M){const B=n.get(C);if(C.version>0&&B.__version!==C.version){it(B,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const rt={[al]:s.REPEAT,[Ms]:s.CLAMP_TO_EDGE,[cl]:s.MIRRORED_REPEAT},at={[Fn]:s.NEAREST,[Fg]:s.NEAREST_MIPMAP_NEAREST,[Ro]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[Ja]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},gt={[Bg]:s.NEVER,[Xg]:s.ALWAYS,[Vg]:s.LESS,[Nd]:s.LEQUAL,[kg]:s.EQUAL,[Wg]:s.GEQUAL,[Hg]:s.GREATER,[Gg]:s.NOTEQUAL};function Dt(C,M){if(M.type===Si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===Ja||M.magFilter===Ro||M.magFilter===Ss||M.minFilter===ni||M.minFilter===Ja||M.minFilter===Ro||M.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,rt[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,rt[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,rt[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,at[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==Ro&&M.minFilter!==Ss||M.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const J=M.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const j=W(M);if(j!==C.__cacheKey){et[j]===void 0&&(et[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[j].usedTimes++;const Tt=et[C.__cacheKey];Tt!==void 0&&(et[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&y(M)),C.__cacheKey=j,C.__webglTexture=et[j].texture}return B}function Z(C,M,B){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);const et=ee(C,M),j=M.source;e.bindTexture(J,C.__webglTexture,s.TEXTURE0+B);const Tt=n.get(j);if(j.version!==Tt.__version||et===!0){e.activeTexture(s.TEXTURE0+B);const ft=jt.getPrimaries(jt.workingColorSpace),_t=M.colorSpace===Gi?null:jt.getPrimaries(M.colorSpace),$t=M.colorSpace===Gi||ft===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=g(M.image,!1,i.maxTextureSize);st=ue(M,st);const xt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let It=S(M.internalFormat,xt,Nt,M.colorSpace,M.isVideoTexture);Dt(J,M);let yt;const Yt=M.mipmaps,Ot=M.isVideoTexture!==!0,he=Tt.__version===void 0||et===!0,D=j.dataReady,lt=w(M,st);if(M.isDepthTexture)It=x(M.format===xr,M.type),he&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,It,st.width,st.height,0,xt,Nt,null));else if(M.isDataTexture)if(Yt.length>0){Ot&&he&&e.texStorage2D(s.TEXTURE_2D,lt,It,Yt[0].width,Yt[0].height);for(let $=0,Q=Yt.length;$<Q;$++)yt=Yt[$],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,yt.width,yt.height,xt,Nt,yt.data):e.texImage2D(s.TEXTURE_2D,$,It,yt.width,yt.height,0,xt,Nt,yt.data);M.generateMipmaps=!1}else Ot?(he&&e.texStorage2D(s.TEXTURE_2D,lt,It,st.width,st.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,xt,Nt,st.data)):e.texImage2D(s.TEXTURE_2D,0,It,st.width,st.height,0,xt,Nt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,It,Yt[0].width,Yt[0].height,st.depth);for(let $=0,Q=Yt.length;$<Q;$++)if(yt=Yt[$],M.format!==Zn)if(xt!==null)if(Ot){if(D)if(M.layerUpdates.size>0){const pt=$u(yt.width,yt.height,M.format,M.type);for(const dt of M.layerUpdates){const Ut=yt.data.subarray(dt*pt/yt.data.BYTES_PER_ELEMENT,(dt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,dt,yt.width,yt.height,1,xt,Ut)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,It,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,st.depth,xt,Nt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,It,yt.width,yt.height,st.depth,0,xt,Nt,yt.data)}else{Ot&&he&&e.texStorage2D(s.TEXTURE_2D,lt,It,Yt[0].width,Yt[0].height);for(let $=0,Q=Yt.length;$<Q;$++)yt=Yt[$],M.format!==Zn?xt!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,$,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,yt.width,yt.height,xt,Nt,yt.data):e.texImage2D(s.TEXTURE_2D,$,It,yt.width,yt.height,0,xt,Nt,yt.data)}else if(M.isDataArrayTexture)if(Ot){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,It,st.width,st.height,st.depth),D)if(M.layerUpdates.size>0){const $=$u(st.width,st.height,M.format,M.type);for(const Q of M.layerUpdates){const pt=st.data.subarray(Q*$/st.data.BYTES_PER_ELEMENT,(Q+1)*$/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,xt,Nt,pt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Nt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,xt,Nt,st.data);else if(M.isData3DTexture)Ot?(he&&e.texStorage3D(s.TEXTURE_3D,lt,It,st.width,st.height,st.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Nt,st.data)):e.texImage3D(s.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,xt,Nt,st.data);else if(M.isFramebufferTexture){if(he)if(Ot)e.texStorage2D(s.TEXTURE_2D,lt,It,st.width,st.height);else{let $=st.width,Q=st.height;for(let pt=0;pt<lt;pt++)e.texImage2D(s.TEXTURE_2D,pt,It,$,Q,0,xt,Nt,null),$>>=1,Q>>=1}}else if(Yt.length>0){if(Ot&&he){const $=Et(Yt[0]);e.texStorage2D(s.TEXTURE_2D,lt,It,$.width,$.height)}for(let $=0,Q=Yt.length;$<Q;$++)yt=Yt[$],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,xt,Nt,yt):e.texImage2D(s.TEXTURE_2D,$,It,xt,Nt,yt);M.generateMipmaps=!1}else if(Ot){if(he){const $=Et(st);e.texStorage2D(s.TEXTURE_2D,lt,It,$.width,$.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Nt,st)}else e.texImage2D(s.TEXTURE_2D,0,It,xt,Nt,st);m(M)&&p(J),Tt.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function it(C,M,B){if(M.image.length!==6)return;const J=ee(C,M),et=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const j=n.get(et);if(et.version!==j.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const Tt=jt.getPrimaries(jt.workingColorSpace),ft=M.colorSpace===Gi?null:jt.getPrimaries(M.colorSpace),_t=M.colorSpace===Gi||Tt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const $t=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!$t&&!st?xt[Q]=g(M.image[Q],!0,i.maxCubemapSize):xt[Q]=st?M.image[Q].image:M.image[Q],xt[Q]=ue(M,xt[Q]);const Nt=xt[0],It=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),Yt=S(M.internalFormat,It,yt,M.colorSpace),Ot=M.isVideoTexture!==!0,he=j.__version===void 0||J===!0,D=et.dataReady;let lt=w(M,Nt);Dt(s.TEXTURE_CUBE_MAP,M);let $;if($t){Ot&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){$=xt[Q].mipmaps;for(let pt=0;pt<$.length;pt++){const dt=$[pt];M.format!==Zn?It!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,dt.width,dt.height,It,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,dt.width,dt.height,It,yt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Yt,dt.width,dt.height,0,It,yt,dt.data)}}}else{if($=M.mipmaps,Ot&&he){$.length>0&&lt++;const Q=Et(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,It,yt,xt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,xt[Q].width,xt[Q].height,0,It,yt,xt[Q].data);for(let pt=0;pt<$.length;pt++){const Ut=$[pt].image[Q].image;Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Ut.width,Ut.height,It,yt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Yt,Ut.width,Ut.height,0,It,yt,Ut.data)}}else{Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,yt,xt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,It,yt,xt[Q]);for(let pt=0;pt<$.length;pt++){const dt=$[pt];Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,It,yt,dt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Yt,It,yt,dt.image[Q])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),j.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Mt(C,M,B,J,et,j){const Tt=r.convert(B.format,B.colorSpace),ft=r.convert(B.type),_t=S(B.internalFormat,Tt,ft,B.colorSpace),$t=n.get(M),st=n.get(B);if(st.__renderTarget=M,!$t.__hasExternalTextures){const xt=Math.max(1,M.width>>j),Nt=Math.max(1,M.height>>j);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,j,_t,xt,Nt,M.depth,0,Tt,ft,null):e.texImage2D(et,j,_t,xt,Nt,0,Tt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),qt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,et,st.__webglTexture,0,Xt(M)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,et,st.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(C,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,et=J&&J.isDepthTexture?J.type:null,j=x(M.stencilBuffer,et),Tt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=Xt(M);qt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,j,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,C)}else{const J=M.textures;for(let et=0;et<J.length;et++){const j=J[et],Tt=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),_t=S(j.internalFormat,Tt,ft,j.colorSpace),$t=Xt(M);B&&qt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,_t,M.width,M.height):qt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,_t,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_t,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const et=J.__webglTexture,j=Xt(M);if(M.depthTexture.format===ar)qt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(M.depthTexture.format===xr)qt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Qt(C){const M=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),ut(M.__webglDepthbuffer[J],C,!1);else{const et=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ut(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(C,M,B){const J=n.get(C);M!==void 0&&Mt(J.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Qt(C)}function Se(C){const M=C.texture,B=n.get(C),J=n.get(M);C.addEventListener("dispose",A);const et=C.textures,j=C.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let _t=0;_t<M.mipmaps.length;_t++)B.__webglFramebuffer[ft][_t]=s.createFramebuffer()}else B.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)B.__webglFramebuffer[ft]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let ft=0,_t=et.length;ft<_t;ft++){const $t=n.get(et[ft]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const _t=et[ft];B.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const $t=r.convert(_t.format,_t.colorSpace),st=r.convert(_t.type),xt=S(_t.internalFormat,$t,st,_t.colorSpace,C.isXRRenderTarget===!0),Nt=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Mt(B.__webglFramebuffer[ft][_t],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else Mt(B.__webglFramebuffer[ft],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,_t=et.length;ft<_t;ft++){const $t=et[ft],st=n.get($t);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Dt(s.TEXTURE_2D,$t),Mt(B.__webglFramebuffer,C,$t,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),m($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),Dt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Mt(B.__webglFramebuffer[_t],C,M,s.COLOR_ATTACHMENT0,ft,_t);else Mt(B.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,ft,0);m(M)&&p(ft),e.unbindTexture()}C.depthBuffer&&Qt(C)}function ge(C){const M=C.textures;for(let B=0,J=M.length;B<J;B++){const et=M[B];if(m(et)){const j=T(C),Tt=n.get(et).__webglTexture;e.bindTexture(j,Tt),p(j),e.unbindTexture()}}}const Wt=[],P=[];function wn(C){if(C.samples>0){if(qt(C)===!1){const M=C.textures,B=C.width,J=C.height;let et=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(C),ft=M.length>1;if(ft)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const $t=n.get(M[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,B,J,0,0,B,J,et,s.NEAREST),c===!0&&(Wt.length=0,P.length=0,Wt.push(s.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Wt.push(j),P.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const $t=n.get(M[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Xt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ue(C,M){const B=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==yr&&B!==Gi&&(jt.getTransfer(B)===ce?(J!==Zn||et!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Et(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=Pt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=qt}function fM(s,t){function e(n,i=Gi){let r;const o=jt.getTransfer(i);if(n===Ci)return s.UNSIGNED_BYTE;if(n===lh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return s.BYTE;if(n===vd)return s.SHORT;if(n===so)return s.UNSIGNED_SHORT;if(n===ch)return s.INT;if(n===Rs)return s.UNSIGNED_INT;if(n===Si)return s.FLOAT;if(n===po)return s.HALF_FLOAT;if(n===Sd)return s.ALPHA;if(n===Td)return s.RGB;if(n===Zn)return s.RGBA;if(n===Ed)return s.LUMINANCE;if(n===Ad)return s.LUMINANCE_ALPHA;if(n===ar)return s.DEPTH_COMPONENT;if(n===xr)return s.DEPTH_STENCIL;if(n===wd)return s.RED;if(n===uh)return s.RED_INTEGER;if(n===bd)return s.RG;if(n===fh)return s.RG_INTEGER;if(n===dh)return s.RGBA_INTEGER;if(n===aa||n===ca||n===la||n===ha)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===hl||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===pl)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===Sl||n===Tl||n===El||n===Al||n===wl||n===bl||n===Cl||n===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===Nl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cd||n===Dl||n===Il||n===Ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Jn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ji({vertexShader:dM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gM extends Rr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const g=new mM,m=e.getContextAttributes();let p=null,T=null;const S=[],x=[],w=new ae;let b=null;const A=new Dn;A.viewport=new Ne;const R=new Dn;R.viewport=new Ne;const y=[A,R],v=new U_;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];return it===void 0&&(it=new vc,S[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];return it===void 0&&(it=new vc,S[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=S[Z];return it===void 0&&(it=new vc,S[Z]=it),it.getHandSpace()};function U(Z){const it=x.indexOf(Z.inputSource);if(it===-1)return;const Mt=S[it];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,l||o),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<S.length;Z++){const it=x[Z];it!==null&&(x[Z]=null,S[Z].disconnect(it))}N=null,O=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,T=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=function(Z){return ja(this,null,function*(){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield e.makeXRCompatible()),b=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,ut=null,Rt=null;m.depth&&(Rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=m.stencil?xr:ar,ut=m.stencil?_r:Rs);const Qt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Qt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Ns(f.textureWidth,f.textureHeight,{format:Zn,type:Ci,depthTexture:new $d(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ns(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(Z){for(let it=0;it<Z.removed.length;it++){const Mt=Z.removed[it],ut=x.indexOf(Mt);ut>=0&&(x[ut]=null,S[ut].disconnect(Mt))}for(let it=0;it<Z.added.length;it++){const Mt=Z.added[it];let ut=x.indexOf(Mt);if(ut===-1){for(let Qt=0;Qt<S.length;Qt++)if(Qt>=x.length){x.push(Mt),ut=Qt;break}else if(x[Qt]===null){x[Qt]=Mt,ut=Qt;break}if(ut===-1)break}const Rt=S[ut];Rt&&Rt.connect(Mt)}}const G=new z,K=new z;function k(Z,it,Mt){G.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const ut=G.distanceTo(K),Rt=it.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Se=Rt[14]/(Rt[10]+1),ge=(Rt[9]+1)/Rt[5],Wt=(Rt[9]-1)/Rt[5],P=(Rt[8]-1)/Rt[0],wn=(Qt[8]+1)/Qt[0],Xt=Pt*P,qt=Pt*wn,At=ut/(-P+wn),ue=At*-P;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ue),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Et=Pt+At,C=Se+At,M=Xt-ue,B=qt+(ut-ue),J=ge*Se/C*Et,et=Wt*Se/C*Et;Z.projectionMatrix.makePerspective(M,B,J,et,Et,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function rt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let it=Z.near,Mt=Z.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),v.near=R.near=A.near=it,v.far=R.far=A.far=Mt,(N!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),N=v.near,O=v.far),A.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,v.layers.mask=A.layers.mask|R.layers.mask;const ut=Z.parent,Rt=v.cameras;rt(v,ut);for(let Qt=0;Qt<Rt.length;Qt++)rt(Rt[Qt],ut);Rt.length===2?k(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),at(Z,v,ut)};function at(Z,it,Mt){Mt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let gt=null;function Dt(Z,it){if(h=it.getViewerPose(l||o),_=it,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let ut=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Pt=0;Pt<Mt.length;Pt++){const Se=Mt[Pt];let ge=null;if(d!==null)ge=d.getViewport(Se);else{const P=u.getViewSubImage(f,Se);ge=P.viewport,Pt===0&&(t.setRenderTargetTextures(T,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(T))}let Wt=y[Pt];Wt===void 0&&(Wt=new Dn,Wt.layers.enable(Pt),Wt.viewport=new Ne,y[Pt]=Wt),Wt.matrix.fromArray(Se.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Se.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ge.x,ge.y,ge.width,ge.height),Pt===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(Wt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Pt=u.getDepthInformation(Mt[0]);Pt&&Pt.isValid&&Pt.texture&&g.init(t,Pt,i.renderState)}}for(let Mt=0;Mt<S.length;Mt++){const ut=x[Mt],Rt=S[Mt];ut!==null&&Rt!==void 0&&Rt.update(ut,it,l||o)}gt&&gt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}const ee=new Kd;ee.setAnimationLoop(Dt),this.setAnimationLoop=function(Z){gt=Z},this.dispose=function(){}}}const hs=new Ps,_M=new Pe;function xM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,x=T.envMapRotation;S&&(m.envMap.value=S,hs.copy(x),hs.x*=-1,hs.y*=-1,hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(hs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yM(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const x=S.program;n.uniformBlockBinding(T,x)}function l(T,S){let x=i[T.id];x===void 0&&(_(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(T,w);const b=t.render.frame;r[T.id]!==b&&(f(T),r[T.id]=b)}function h(T){const S=u();T.__bindingPointIndex=S;const x=s.createBuffer(),w=T.__size,b=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=i[T.id],x=T.uniforms,w=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let b=0,A=x.length;b<A;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,v=R.length;y<v;y++){const N=R[y];if(d(N,b,y,w)===!0){const O=N.__offset,U=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let Y=0;Y<U.length;Y++){const G=U[Y],K=g(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,O+W,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(T,S,x,w){const b=T.value,A=S+"_"+x;if(w[A]===void 0)return typeof b=="number"||typeof b=="boolean"?w[A]=b:w[A]=b.clone(),!0;{const R=w[A];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return w[A]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function _(T){const S=T.uniforms;let x=0;const w=16;for(let A=0,R=S.length;A<R;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,N=y.length;v<N;v++){const O=y[v],U=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Y=U.length;W<Y;W++){const G=U[W],K=g(G),k=x%w,rt=k%K.boundary,at=k+rt;x+=rt,at!==0&&w-at<K.storage&&(x+=w-at),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}const b=x%w;return b>0&&(x+=w-b),T.__size=x,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class vM{constructor(t={}){const{canvas:e=Yg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=$i,this.toneMappingExposure=1;const x=this;let w=!1,b=0,A=0,R=null,y=-1,v=null;const N=new Ne,O=new Ne;let U=null;const W=new Jt(0);let Y=0,G=e.width,K=e.height,k=1,rt=null,at=null;const gt=new Ne(0,0,G,K),Dt=new Ne(0,0,G,K);let ee=!1;const Z=new mh;let it=!1,Mt=!1;this.transmissionResolutionScale=1;const ut=new Pe,Rt=new Pe,Qt=new z,Pt=new Ne,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Wt(){return R===null?k:1}let P=n;function wn(E,L){return e.getContext(E,L)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){const L="webgl2";if(P=wn(L,E),P===null)throw wn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,qt,At,ue,Et,C,M,B,J,et,j,Tt,ft,_t,$t,st,xt,Nt,It,yt,Yt,Ot,he,D;function lt(){Xt=new Ny(P),Xt.init(),Ot=new fM(P,Xt),qt=new Ty(P,Xt,t,Ot),At=new hM(P,Xt),qt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ue=new Iy(P),Et=new jv,C=new uM(P,Xt,At,Et,qt,Ot,ue),M=new Ay(x),B=new Ry(x),J=new B_(P),he=new My(P,J),et=new Py(P,J,ue,he),j=new Fy(P,et,J,ue),It=new Ly(P,qt,C),st=new Ey(Et),Tt=new Kv(x,M,B,Xt,qt,he,st),ft=new xM(x,Et),_t=new Qv,$t=new rM(Xt),Nt=new vy(x,M,B,At,j,d,c),xt=new cM(x,j,qt),D=new yM(P,ue,qt,At),yt=new Sy(P,Xt,ue),Yt=new Dy(P,Xt,ue),ue.programs=Tt.programs,x.capabilities=qt,x.extensions=Xt,x.properties=Et,x.renderLists=_t,x.shadowMap=xt,x.state=At,x.info=ue}lt();const $=new gM(x,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(G,K,!1))},this.getSize=function(E){return E.set(G,K)},this.setSize=function(E,L,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,K=L,e.width=Math.floor(E*k),e.height=Math.floor(L*k),V===!0&&(e.style.width=E+"px",e.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(G*k,K*k).floor()},this.setDrawingBufferSize=function(E,L,V){G=E,K=L,k=V,e.width=Math.floor(E*V),e.height=Math.floor(L*V),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,L,V,H){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,L,V,H),At.viewport(N.copy(gt).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(Dt)},this.setScissor=function(E,L,V,H){E.isVector4?Dt.set(E.x,E.y,E.z,E.w):Dt.set(E,L,V,H),At.scissor(O.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){At.setScissorTest(ee=E)},this.setOpaqueSort=function(E){rt=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,V=!0){let H=0;if(E){let F=!1;if(R!==null){const nt=R.texture.format;F=nt===dh||nt===fh||nt===uh}if(F){const nt=R.texture.type,ht=nt===Ci||nt===Rs||nt===so||nt===_r||nt===lh||nt===hh,mt=Nt.getClearColor(),vt=Nt.getClearAlpha(),Lt=mt.r,Ft=mt.g,wt=mt.b;ht?(_[0]=Lt,_[1]=Ft,_[2]=wt,_[3]=vt,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Lt,g[1]=Ft,g[2]=wt,g[3]=vt,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}L&&(H|=P.DEPTH_BUFFER_BIT),V&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Nt.dispose(),_t.dispose(),$t.dispose(),Et.dispose(),M.dispose(),B.dispose(),j.dispose(),he.dispose(),D.dispose(),Tt.dispose(),$.dispose(),$.removeEventListener("sessionstart",cu),$.removeEventListener("sessionend",lu),is.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=ue.autoReset,L=xt.enabled,V=xt.autoUpdate,H=xt.needsUpdate,F=xt.type;lt(),ue.autoReset=E,xt.enabled=L,xt.autoUpdate=V,xt.needsUpdate=H,xt.type=F}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){const L=E.target;L.removeEventListener("dispose",Ut),ye(L)}function ye(E){Ge(E),Et.remove(E)}function Ge(E){const L=Et.get(E).programs;L!==void 0&&(L.forEach(function(V){Tt.releaseProgram(V)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,V,H,F,nt){L===null&&(L=Se);const ht=F.isMesh&&F.matrixWorld.determinant()<0,mt=Km(E,L,V,H,F);At.setMaterial(H,ht);let vt=V.index,Lt=1;if(H.wireframe===!0){if(vt=et.getWireframeAttribute(V),vt===void 0)return;Lt=2}const Ft=V.drawRange,wt=V.attributes.position;let Zt=Ft.start*Lt,ne=(Ft.start+Ft.count)*Lt;nt!==null&&(Zt=Math.max(Zt,nt.start*Lt),ne=Math.min(ne,(nt.start+nt.count)*Lt)),vt!==null?(Zt=Math.max(Zt,0),ne=Math.min(ne,vt.count)):wt!=null&&(Zt=Math.max(Zt,0),ne=Math.min(ne,wt.count));const Ee=ne-Zt;if(Ee<0||Ee===1/0)return;he.setup(F,H,mt,V,vt);let ve,Kt=yt;if(vt!==null&&(ve=J.get(vt),Kt=Yt,Kt.setIndex(ve)),F.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*Wt()),Kt.setMode(P.LINES)):Kt.setMode(P.TRIANGLES);else if(F.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*Wt()),F.isLineSegments?Kt.setMode(P.LINES):F.isLineLoop?Kt.setMode(P.LINE_LOOP):Kt.setMode(P.LINE_STRIP)}else F.isPoints?Kt.setMode(P.POINTS):F.isSprite&&Kt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,Ve=F._multiDrawCounts,ie=F._multiDrawCount,Vn=vt?J.get(vt).bytesPerElement:1,Ls=Et.get(H).currentProgram.getUniforms();for(let gn=0;gn<ie;gn++)Ls.setValue(P,"_gl_DrawID",gn),Kt.render(bt[gn]/Vn,Ve[gn])}else if(F.isInstancedMesh)Kt.renderInstances(Zt,Ee,F.count);else if(V.isInstancedBufferGeometry){const bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ve=Math.min(V.instanceCount,bt);Kt.renderInstances(Zt,Ee,Ve)}else Kt.render(Zt,Ee)};function se(E,L,V){E.transparent===!0&&E.side===Mi&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,Co(E,L,V),E.side=ji,E.needsUpdate=!0,Co(E,L,V),E.side=Mi):Co(E,L,V)}this.compile=function(E,L,V=null){V===null&&(V=E),p=$t.get(V),p.init(L),S.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const mt=nt[ht];se(mt,V,F),H.add(mt)}else se(nt,V,F),H.add(nt)}),p=S.pop(),H},this.compileAsync=function(E,L,V=null){const H=this.compile(E,L,V);return new Promise(F=>{function nt(){if(H.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){F(E);return}setTimeout(nt,10)}Xt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Bn=null;function ui(E){Bn&&Bn(E)}function cu(){is.stop()}function lu(){is.start()}const is=new Kd;is.setAnimationLoop(ui),typeof self!="undefined"&&is.setContext(self),this.setAnimationLoop=function(E){Bn=E,$.setAnimationLoop(E),E===null?is.stop():is.start()},$.addEventListener("sessionstart",cu),$.addEventListener("sessionend",lu),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(L),L=$.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,L,R),p=$t.get(E,S.length),p.init(L),S.push(p),Rt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),Mt=this.localClippingEnabled,it=st.init(this.clippingPlanes,Mt),m=_t.get(E,T.length),m.init(),T.push(m),$.enabled===!0&&$.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Za(nt,L,-1/0,x.sortObjects)}Za(E,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,at),ge=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ge&&Nt.addToRenderList(m,E),this.info.render.frame++,it===!0&&st.beginShadows();const V=p.state.shadowsArray;xt.render(V,E,L),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),L.isArrayCamera){const nt=L.cameras;if(F.length>0)for(let ht=0,mt=nt.length;ht<mt;ht++){const vt=nt[ht];uu(H,F,E,vt)}ge&&Nt.render(E);for(let ht=0,mt=nt.length;ht<mt;ht++){const vt=nt[ht];hu(m,E,vt,vt.viewport)}}else F.length>0&&uu(H,F,E,L),ge&&Nt.render(E),hu(m,E,L);R!==null&&A===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,L),he.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Za(E,L,V,H){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){H&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);const ht=j.update(E),mt=E.material;mt.visible&&m.push(E,ht,mt,V,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const ht=j.update(E),mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Pt.copy(ht.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(mt)){const vt=ht.groups;for(let Lt=0,Ft=vt.length;Lt<Ft;Lt++){const wt=vt[Lt],Zt=mt[wt.materialIndex];Zt&&Zt.visible&&m.push(E,ht,Zt,V,Pt.z,wt)}}else mt.visible&&m.push(E,ht,mt,V,Pt.z,null)}}const nt=E.children;for(let ht=0,mt=nt.length;ht<mt;ht++)Za(nt[ht],L,V,H)}function hu(E,L,V,H){const F=E.opaque,nt=E.transmissive,ht=E.transparent;p.setupLightsView(V),it===!0&&st.setGlobalState(x.clippingPlanes,V),H&&At.viewport(N.copy(H)),F.length>0&&bo(F,L,V),nt.length>0&&bo(nt,L,V),ht.length>0&&bo(ht,L,V),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function uu(E,L,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Ns(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?po:Ci,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],ht=H.viewport||N;nt.setSize(ht.z*x.transmissionResolutionScale,ht.w*x.transmissionResolutionScale);const mt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),ge&&Nt.render(V);const vt=x.toneMapping;x.toneMapping=$i;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),it===!0&&st.setGlobalState(x.clippingPlanes,H),bo(E,V,H),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,Zt=L.length;wt<Zt;wt++){const ne=L[wt],Ee=ne.object,ve=ne.geometry,Kt=ne.material,bt=ne.group;if(Kt.side===Mi&&Ee.layers.test(H.layers)){const Ve=Kt.side;Kt.side=hn,Kt.needsUpdate=!0,fu(Ee,V,H,ve,Kt,bt),Kt.side=Ve,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt))}x.setRenderTarget(mt),x.setClearColor(W,Y),Lt!==void 0&&(H.viewport=Lt),x.toneMapping=vt}function bo(E,L,V){const H=L.isScene===!0?L.overrideMaterial:null;for(let F=0,nt=E.length;F<nt;F++){const ht=E[F],mt=ht.object,vt=ht.geometry,Lt=H===null?ht.material:H,Ft=ht.group;mt.layers.test(V.layers)&&fu(mt,L,V,vt,Lt,Ft)}}function fu(E,L,V,H,F,nt){E.onBeforeRender(x,L,V,H,F,nt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,L,V,H,E,nt),F.transparent===!0&&F.side===Mi&&F.forceSinglePass===!1?(F.side=hn,F.needsUpdate=!0,x.renderBufferDirect(V,L,H,F,E,nt),F.side=ji,F.needsUpdate=!0,x.renderBufferDirect(V,L,H,F,E,nt),F.side=Mi):x.renderBufferDirect(V,L,H,F,E,nt),E.onAfterRender(x,L,V,H,F,nt)}function Co(E,L,V){L.isScene!==!0&&(L=Se);const H=Et.get(E),F=p.state.lights,nt=p.state.shadowsArray,ht=F.state.version,mt=Tt.getParameters(E,F.state,nt,L,V),vt=Tt.getProgramCacheKey(mt);let Lt=H.programs;H.environment=E.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Ut),Lt=new Map,H.programs=Lt);let Ft=Lt.get(vt);if(Ft!==void 0){if(H.currentProgram===Ft&&H.lightsStateVersion===ht)return pu(E,mt),Ft}else mt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(mt,x),Ft=Tt.acquireProgram(mt,vt),Lt.set(vt,Ft),H.uniforms=mt.uniforms;const wt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=st.uniform),pu(E,mt),H.needsLights=Jm(E),H.lightsStateVersion=ht,H.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ft,H.uniformsList=null,Ft}function du(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=da.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function pu(E,L){const V=Et.get(E);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Km(E,L,V,H,F){L.isScene!==!0&&(L=Se),C.resetTextureUnits();const nt=L.fog,ht=H.isMeshStandardMaterial?L.environment:null,mt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yr,vt=(H.isMeshStandardMaterial?B:M).get(H.envMap||ht),Lt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!V.morphAttributes.position,Zt=!!V.morphAttributes.normal,ne=!!V.morphAttributes.color;let Ee=$i;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=x.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Kt=ve!==void 0?ve.length:0,bt=Et.get(H),Ve=p.state.lights;if(it===!0&&(Mt===!0||E!==v)){const Qe=E===v&&H.id===y;st.setState(H,E,Qe)}let ie=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ve.state.version||bt.outputColorSpace!==mt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==vt||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==st.numPlanes||bt.numIntersection!==st.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Ft||bt.morphTargets!==wt||bt.morphNormals!==Zt||bt.morphColors!==ne||bt.toneMapping!==Ee||bt.morphTargetsCount!==Kt)&&(ie=!0):(ie=!0,bt.__version=H.version);let Vn=bt.currentProgram;ie===!0&&(Vn=Co(H,L,F));let Ls=!1,gn=!1,Dr=!1;const de=Vn.getUniforms(),bn=bt.uniforms;if(At.useProgram(Vn.program)&&(Ls=!0,gn=!0,Dr=!0),H.id!==y&&(y=H.id,gn=!0),Ls||v!==E){At.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),Zg(ut),Kg(ut),de.setValue(P,"projectionMatrix",ut)):de.setValue(P,"projectionMatrix",E.projectionMatrix),de.setValue(P,"viewMatrix",E.matrixWorldInverse);const rn=de.map.cameraPosition;rn!==void 0&&rn.setValue(P,Qt.setFromMatrixPosition(E.matrixWorld)),qt.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,gn=!0,Dr=!0)}if(F.isSkinnedMesh){de.setOptional(P,F,"bindMatrix"),de.setOptional(P,F,"bindMatrixInverse");const Qe=F.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),de.setValue(P,"boneTexture",Qe.boneTexture,C))}F.isBatchedMesh&&(de.setOptional(P,F,"batchingTexture"),de.setValue(P,"batchingTexture",F._matricesTexture,C),de.setOptional(P,F,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",F._indirectTexture,C),de.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",F._colorsTexture,C));const Cn=V.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&It.update(F,V,Vn),(gn||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,de.setValue(P,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(bn.envMap.value=vt,bn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(bn.envMapIntensity.value=L.environmentIntensity),gn&&(de.setValue(P,"toneMappingExposure",x.toneMappingExposure),bt.needsLights&&jm(bn,Dr),nt&&H.fog===!0&&ft.refreshFogUniforms(bn,nt),ft.refreshMaterialUniforms(bn,H,k,K,p.state.transmissionRenderTarget[E.id]),da.upload(P,du(bt),bn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(da.upload(P,du(bt),bn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(P,"center",F.center),de.setValue(P,"modelViewMatrix",F.modelViewMatrix),de.setValue(P,"normalMatrix",F.normalMatrix),de.setValue(P,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Qe=H.uniformsGroups;for(let rn=0,Ka=Qe.length;rn<Ka;rn++){const ss=Qe[rn];D.update(ss,Vn),D.bind(ss,Vn)}}return Vn}function jm(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Jm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,L,V){Et.get(E.texture).__webglTexture=L,Et.get(E.depthTexture).__webglTexture=V;const H=Et.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const V=Et.get(E);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0};const Qm=P.createFramebuffer();this.setRenderTarget=function(E,L=0,V=0){R=E,b=L,A=V;let H=!0,F=null,nt=!1,ht=!1;if(E){const vt=Et.get(E);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(vt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(vt.__hasExternalTextures)C.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(vt.__boundDepthTexture!==wt){if(wt!==null&&Et.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const Ft=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[L])?F=Ft[L][V]:F=Ft[L],nt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[V]:F=Ft,N.copy(E.viewport),O.copy(E.scissor),U=E.scissorTest}else N.copy(gt).multiplyScalar(k).floor(),O.copy(Dt).multiplyScalar(k).floor(),U=ee;if(V!==0&&(F=Qm),At.bindFramebuffer(P.FRAMEBUFFER,F)&&H&&At.drawBuffers(E,F),At.viewport(N),At.scissor(O),At.setScissorTest(U),nt){const vt=Et.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,vt.__webglTexture,V)}else if(ht){const vt=Et.get(E.texture),Lt=L;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,V,Lt)}else if(E!==null&&V!==0){const vt=Et.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,V)}y=-1},this.readRenderTargetPixels=function(E,L,V,H,F,nt,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt){At.bindFramebuffer(P.FRAMEBUFFER,mt);try{const vt=E.texture,Lt=vt.format,Ft=vt.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-H&&V>=0&&V<=E.height-F&&P.readPixels(L,V,H,F,Ot.convert(Lt),Ot.convert(Ft),nt)}finally{const vt=R!==null?Et.get(R).__webglFramebuffer:null;At.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=function(E,L,V,H,F,nt,ht){return ja(this,null,function*(){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt){const vt=E.texture,Lt=vt.format,Ft=vt.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-H&&V>=0&&V<=E.height-F){At.bindFramebuffer(P.FRAMEBUFFER,mt);const wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(L,V,H,F,Ot.convert(Lt),Ot.convert(Ft),0);const Zt=R!==null?Et.get(R).__webglFramebuffer:null;At.bindFramebuffer(P.FRAMEBUFFER,Zt);const ne=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),yield $g(P,ne,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(wt),P.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(E,L=null,V=0){E.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-V),F=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),ht=L!==null?L.x:0,mt=L!==null?L.y:0;C.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ht,mt,F,nt),At.unbindTexture()};const tg=P.createFramebuffer(),eg=P.createFramebuffer();this.copyTextureToTexture=function(E,L,V=null,H=null,F=0,nt=null){E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],L=arguments[2],nt=arguments[3]||0,V=null),nt===null&&(F!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=F,F=0):nt=0);let ht,mt,vt,Lt,Ft,wt,Zt,ne,Ee;const ve=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(V!==null)ht=V.max.x-V.min.x,mt=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Ft=V.min.y,wt=V.isBox3?V.min.z:0;else{const Cn=Math.pow(2,-F);ht=Math.floor(ve.width*Cn),mt=Math.floor(ve.height*Cn),E.isDataArrayTexture?vt=ve.depth:E.isData3DTexture?vt=Math.floor(ve.depth*Cn):vt=1,Lt=0,Ft=0,wt=0}H!==null?(Zt=H.x,ne=H.y,Ee=H.z):(Zt=0,ne=0,Ee=0);const Kt=Ot.convert(L.format),bt=Ot.convert(L.type);let Ve;L.isData3DTexture?(C.setTexture3D(L,0),Ve=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(C.setTexture2DArray(L,0),Ve=P.TEXTURE_2D_ARRAY):(C.setTexture2D(L,0),Ve=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const ie=P.getParameter(P.UNPACK_ROW_LENGTH),Vn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ls=P.getParameter(P.UNPACK_SKIP_PIXELS),gn=P.getParameter(P.UNPACK_SKIP_ROWS),Dr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ve.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt);const de=E.isDataArrayTexture||E.isData3DTexture,bn=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const Cn=Et.get(E),Qe=Et.get(L),rn=Et.get(Cn.__renderTarget),Ka=Et.get(Qe.__renderTarget);At.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),At.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ka.__webglFramebuffer);for(let ss=0;ss<vt;ss++)de&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,F,wt+ss),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.get(L).__webglTexture,nt,Ee+ss)),P.blitFramebuffer(Lt,Ft,ht,mt,Zt,ne,ht,mt,P.DEPTH_BUFFER_BIT,P.NEAREST);At.bindFramebuffer(P.READ_FRAMEBUFFER,null),At.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||Et.has(E)){const Cn=Et.get(E),Qe=Et.get(L);At.bindFramebuffer(P.READ_FRAMEBUFFER,tg),At.bindFramebuffer(P.DRAW_FRAMEBUFFER,eg);for(let rn=0;rn<vt;rn++)de?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,F,wt+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,F),bn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qe.__webglTexture,nt,Ee+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qe.__webglTexture,nt),F!==0?P.blitFramebuffer(Lt,Ft,ht,mt,Zt,ne,ht,mt,P.COLOR_BUFFER_BIT,P.NEAREST):bn?P.copyTexSubImage3D(Ve,nt,Zt,ne,Ee+rn,Lt,Ft,ht,mt):P.copyTexSubImage2D(Ve,nt,Zt,ne,Lt,Ft,ht,mt);At.bindFramebuffer(P.READ_FRAMEBUFFER,null),At.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ve,nt,Zt,ne,Ee,ht,mt,vt,Kt,bt,ve.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Ve,nt,Zt,ne,Ee,ht,mt,vt,Kt,ve.data):P.texSubImage3D(Ve,nt,Zt,ne,Ee,ht,mt,vt,Kt,bt,ve):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,nt,Zt,ne,ht,mt,Kt,bt,ve.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,nt,Zt,ne,ve.width,ve.height,Kt,ve.data):P.texSubImage2D(P.TEXTURE_2D,nt,Zt,ne,ht,mt,Kt,bt,ve);P.pixelStorei(P.UNPACK_ROW_LENGTH,ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Vn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ls),P.pixelStorei(P.UNPACK_SKIP_ROWS,gn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Dr),nt===0&&L.generateMipmaps&&P.generateMipmap(Ve),At.unbindTexture()},this.copyTextureToTexture3D=function(E,L,V=null,H=null,F=0){return E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,E=arguments[2],L=arguments[3],F=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,V,H,F)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){b=0,A=0,R=null,At.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const vf=new P_,an={width:window.innerWidth,height:window.innerHeight};console.log("utils.js已加載");function MM(){const s=new M_;return console.log("場景已創建"),s}function SM(s){const t=new F_("#ffffff",1);return t.position.set(1,1,0),s.add(t),console.log("燈光已加載"),t}function TM(s){const t=new $r;s.add(t);const e=new Dn(35,an.width/an.height,.1,100);return e.position.z=6,t.add(e),console.log("相機已加載"),{camera:e,cameraGroup:t}}function EM(s){const t=new vM({canvas:s,alpha:!0,antialias:!0});return t.setSize(an.width,an.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("渲染器已加載"),t}const Bl=4,AM="#81D4FA",wM="#CFD8DC",Mf=70,bM=768;console.log("常量模塊 (constants.js) 已加載");const Sf={VERTEX:"vertex"},Fe={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},yo=["x","y","z","w"],qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tf=1234567;const ep=Math.PI/180,np=180/Math.PI;function lr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function Sh(s,t){return(s%t+t)%t}function CM(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function RM(s,t,e){return s!==t?(e-s)/(t-s):0}function Jr(s,t,e){return(1-e)*s+e*t}function NM(s,t,e,n){return Jr(s,t,1-Math.exp(-e*n))}function PM(s,t=1){return t-Math.abs(Sh(s,t*2)-t)}function DM(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function IM(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function LM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function FM(s,t){return s+Math.random()*(t-s)}function UM(s){return s*(.5-Math.random())}function OM(s){s!==void 0&&(Tf=s);let t=Tf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zM(s){return s*ep}function BM(s){return s*np}function VM(s){return(s&s-1)===0&&s!==0}function kM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function HM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function GM(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const WM={DEG2RAD:ep,RAD2DEG:np,generateUUID:lr,clamp:kt,euclideanModulo:Sh,mapLinear:CM,inverseLerp:RM,lerp:Jr,damp:NM,pingpong:PM,smoothstep:DM,smootherstep:IM,randInt:LM,randFloat:FM,randFloatSpread:UM,seededRandom:OM,degToRad:zM,radToDeg:BM,isPowerOfTwo:VM,ceilPowerOfTwo:kM,floorPowerOfTwo:HM,setQuaternionFromProperEuler:GM,normalize:re,denormalize:$n},XM=1,Vl=0,Th=300,qM=301,YM=302,Ef=1e3,Jo=1001,Af=1002,va=1003,ip=1006,sp=1008,$M=1009,ZM=1013,rp=1014,KM=1015,jM=1016,JM=1020,QM=1023,Rc=1026,wf=1027,bf=0,tS=1,Ma="",qn="srgb",Cf="srgb-linear",Rf="linear",Qr="srgb",Sa=35044,Ts=2e3,Ta=2001;class li{constructor(t,e,n,i,r,o,a,c,l){li.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],S=i[4],x=i[7],w=i[2],b=i[5],A=i[8];return r[0]=o*g+a*T+c*w,r[3]=o*m+a*S+c*b,r[6]=o*p+a*x+c*A,r[1]=l*g+h*T+u*w,r[4]=l*m+h*S+u*b,r[7]=l*p+h*x+u*A,r[2]=f*g+d*T+_*w,r[5]=f*m+d*S+_*b,r[8]=f*p+d*x+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new li,Nf=new li().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new li().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eS(){const s={enabled:!0,workingColorSpace:Cf,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qr&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qr&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ma?Rf:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cf]:{primaries:t,whitePoint:n,transfer:Rf,toXYZ:Nf,fromXYZ:Pf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:Nf,fromXYZ:Pf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),s}const Le=eS();function Ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Pc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Eh{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Le.workingColorSpace){if(t=Sh(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pc(o,r,t+1/3),this.g=Pc(o,r,t),this.b=Pc(o,r,t-1/3)}return Le.toWorkingColorSpace(this,i),this}setStyle(t,e=qn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){const n=op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Le.fromWorkingColorSpace(Ye.copy(this),t),Math.round(kt(Ye.r*255,0,255))*65536+Math.round(kt(Ye.g*255,0,255))*256+Math.round(kt(Ye.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,i=Ye.g,r=Ye.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=qn){Le.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,i=Ye.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Qo);const n=Jr(Bi.h,Qo.h,e),i=Jr(Bi.s,Qo.s,e),r=Jr(Bi.l,Qo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Eh;Eh.NAMES=op;class Ah{constructor(t,e,n,i){Ah.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}class ap{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*g,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),b=Math.atan2(w,p*T);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const x=a*T;if(c=c*m+f*x,l=l*m+d*x,h=h*m+_*x,u=u*m+g*x,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Ct{constructor(t=0,e=0,n=0){Ct.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Df.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Df.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new Ct,Df=new ap;class ai{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,_,g,m){ai.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ai().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),o=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nS,t,iS)}lookAt(t,e,n){const i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Vi.crossVectors(n,yn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Vi.crossVectors(n,yn)),Vi.normalize(),ta.crossVectors(yn,Vi),i[0]=Vi.x,i[4]=ta.x,i[8]=yn.x,i[1]=Vi.y,i[5]=ta.y,i[9]=yn.y,i[2]=Vi.z,i[6]=ta.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],S=n[7],x=n[11],w=n[15],b=i[0],A=i[4],R=i[8],y=i[12],v=i[1],N=i[5],O=i[9],U=i[13],W=i[2],Y=i[6],G=i[10],K=i[14],k=i[3],rt=i[7],at=i[11],gt=i[15];return r[0]=o*b+a*v+c*W+l*k,r[4]=o*A+a*N+c*Y+l*rt,r[8]=o*R+a*O+c*G+l*at,r[12]=o*y+a*U+c*K+l*gt,r[1]=h*b+u*v+f*W+d*k,r[5]=h*A+u*N+f*Y+d*rt,r[9]=h*R+u*O+f*G+d*at,r[13]=h*y+u*U+f*K+d*gt,r[2]=_*b+g*v+m*W+p*k,r[6]=_*A+g*N+m*Y+p*rt,r[10]=_*R+g*O+m*G+p*at,r[14]=_*y+g*U+m*K+p*gt,r[3]=T*b+S*v+x*W+w*k,r[7]=T*A+S*N+x*Y+w*rt,r[11]=T*R+S*O+x*G+w*at,r[15]=T*y+S*U+x*K+w*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+g*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],T=u*m*l-g*f*l+g*c*d-a*m*d-u*c*p+a*f*p,S=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,x=h*g*l-_*u*l+_*a*d-o*g*d-h*a*p+o*u*p,w=_*u*c-h*g*c-_*a*f+o*g*f+h*a*m-o*u*m,b=e*T+n*S+i*x+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=T*A,t[1]=(g*f*r-u*m*r-g*i*d+n*m*d+u*i*p-n*f*p)*A,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*A,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*A,t[4]=S*A,t[5]=(h*m*r-_*f*r+_*i*d-e*m*d-h*i*p+e*f*p)*A,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*p-e*c*p)*A,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*A,t[8]=x*A,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*p-e*u*p)*A,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*A,t[12]=w*A,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*A,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,g=o*h,m=o*u,p=a*u,T=c*l,S=c*h,x=c*u,w=n.x,b=n.y,A=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+x)*w,i[2]=(_-S)*w,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(f+p))*b,i[6]=(m+T)*b,i[7]=0,i[8]=(_+S)*A,i[9]=(m-T)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ks.set(i[0],i[1],i[2]).length();const o=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Wn.copy(this);const l=1/r,h=1/o,u=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ts){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(a===Ts)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ta)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ts){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h;let _,g;if(a===Ts)_=(o+r)*u,g=-2*u;else if(a===Ta)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ks=new Ct,Wn=new ai,nS=new Ct(0,0,0),iS=new Ct(1,1,1),Vi=new Ct,ta=new Ct,yn=new Ct;class Un{constructor(t=0,e=0){Un.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(t=0,e=0,n=0,i=1){Qi.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(d+1)/2,w=(p+1)/2,b=(h+f)/4,A=(u+g)/4,R=(_+m)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=b/n,r=A/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=R/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-g)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}function kl(s,t=0){let e=3735928559^t,n=1103547991^t;if(s instanceof Array)for(let i=0,r;i<s.length;i++)r=s[i],e=Math.imul(e^r,2654435761),n=Math.imul(n^r,1597334677);else for(let i=0,r;i<s.length;i++)r=s.charCodeAt(i),e=Math.imul(e^r,2654435761),n=Math.imul(n^r,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0)}const cp=(...s)=>kl(s);function sS(s,t=!1){const e=[];s.isNode===!0&&(e.push(s.id),s=s.getSelf());for(const{property:n,childNode:i}of Hl(s))e.push(kl(n.slice(0,-4)),i.getCacheKey(t));return kl(e)}function*Hl(s,t=!1){for(const e in s){if(e.startsWith("_")===!0)continue;const n=s[e];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||t&&typeof r.toJSON=="function")&&(yield{property:e,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:e,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||t&&typeof r.toJSON=="function")&&(yield{property:e,index:i,childNode:r})}}}function Ea(s){if(s==null)return null;const t=typeof s;return s.isNode===!0?"node":t==="number"?"float":t==="boolean"?"bool":t==="string"?"string":t==="function"?"shader":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix2===!0?"mat2":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function lp(s,...t){const e=s?s.slice(-4):void 0;return t.length===1&&(e==="vec2"?t=[t[0],t[0]]:e==="vec3"?t=[t[0],t[0],t[0]]:e==="vec4"&&(t=[t[0],t[0],t[0],t[0]])),s==="color"?new Eh(...t):e==="vec2"?new Un(...t):e==="vec3"?new Ct(...t):e==="vec4"?new Qi(...t):e==="mat2"?new Ah(...t):e==="mat3"?new li(...t):e==="mat4"?new ai(...t):s==="bool"?t[0]||!1:s==="float"||s==="int"||s==="uint"?t[0]||0:s==="string"?t[0]||"":s==="ArrayBuffer"?oS(t[0]):null}function rS(s){let t="";const e=new Uint8Array(s);for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function oS(s){return Uint8Array.from(atob(s),t=>t.charCodeAt(0)).buffer}class wh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}let aS=0;class te extends wh{static get type(){return"Node"}constructor(t=null){super(),this.nodeType=t,this.updateType=Fe.NONE,this.updateBeforeType=Fe.NONE,this.updateAfterType=Fe.NONE,this.uuid=WM.generateUUID(),this.version=0,this.global=!1,this.isNode=!0,this._cacheKey=null,this._cacheKeyVersion=0,Object.defineProperty(this,"id",{value:aS++})}set needsUpdate(t){t===!0&&this.version++}get type(){return this.constructor.type}onUpdate(t,e){return this.updateType=e,this.update=t.bind(this.getSelf()),this}onFrameUpdate(t){return this.onUpdate(t,Fe.FRAME)}onRenderUpdate(t){return this.onUpdate(t,Fe.RENDER)}onObjectUpdate(t){return this.onUpdate(t,Fe.OBJECT)}onReference(t){return this.updateReference=t.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:t}of Hl(this))yield t}dispose(){this.dispatchEvent({type:"dispose"})}traverse(t){t(this);for(const e of this.getChildren())e.traverse(t)}getCacheKey(t=!1){return t=t||this.version!==this._cacheKeyVersion,(t===!0||this._cacheKey===null)&&(this._cacheKey=cp(sS(this,t),this.customCacheKey()),this._cacheKeyVersion=this.version),this._cacheKey}customCacheKey(){return 0}getScope(){return this}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(t){const e=this.getNodeType(t);return t.getElementType(e)}getMemberType(){return"void"}getNodeType(t){const e=t.getNodeProperties(this);return e.outputNode?e.outputNode.getNodeType(t):this.nodeType}getShared(t){const e=this.getHash(t);return t.getNodeFromHash(e)||this}setup(t){const e=t.getNodeProperties(this);let n=0;for(const i of this.getChildren())e["node"+n++]=i;return e.outputNode||null}analyze(t){if(t.increaseUsage(this)===1){const n=t.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(t)}}generate(t,e){const{outputNode:n}=t.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(t,e)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(t,e=null){const n=this.getShared(t);if(this!==n)return n.build(t,e);t.addNode(this),t.addChain(this);let i=null;const r=t.getBuildStage();if(r==="setup"){this.updateReference(t);const o=t.getNodeProperties(this);if(o.initialized!==!0){o.initialized=!0;const a=this.setup(t),c=a&&a.isNode===!0;for(const l of Object.values(o))l&&l.isNode===!0&&l.build(t);c&&a.build(t),o.outputNode=a}}else if(r==="analyze")this.analyze(t);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(t),c=t.getDataFromNode(this);i=c.snippet,i===void 0?(i=this.generate(t)||"",c.snippet=i):c.flowCodes!==void 0&&t.context.nodeBlock!==void 0&&t.addFlowCodeHierarchy(this,t.context.nodeBlock),i=t.format(i,a,e)}else i=this.generate(t,e)||"";return t.removeChain(this),t.addSequentialNode(this),i}getSerializeChildren(){return Hl(this)}serialize(t){const e=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of e)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(t.meta).uuid):n[i]=o.toJSON(t.meta).uuid;Object.keys(n).length>0&&(t.inputNodes=n)}deserialize(t){if(t.inputNodes!==void 0){const e=t.meta.nodes;for(const n in t.inputNodes)if(Array.isArray(t.inputNodes[n])){const i=[];for(const r of t.inputNodes[n])i.push(e[r]);this[n]=i}else if(typeof t.inputNodes[n]=="object"){const i={};for(const r in t.inputNodes[n]){const o=t.inputNodes[n][r];i[r]=e[o]}this[n]=i}else{const i=t.inputNodes[n];this[n]=e[i]}}}toJSON(t){const{uuid:e,type:n}=this,i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{},nodes:{}});let r=t.nodes[e];r===void 0&&(r={uuid:e,type:n,meta:t,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(t.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}if(i){const a=o(t.textures),c=o(t.images),l=o(t.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}class sn extends te{static get type(){return"TempNode"}constructor(t=null){super(t),this.isTempNode=!0}hasDependencies(t){return t.getDataFromNode(this).usageCount>1}build(t,e){if(t.getBuildStage()==="generate"){const i=t.getVectorType(this.getNodeType(t,e)),r=t.getDataFromNode(this);if(r.propertyName!==void 0)return t.format(r.propertyName,i,e);if(i!=="void"&&e!=="void"&&this.hasDependencies(t)){const o=super.build(t,i),a=t.getVarFromNode(this,null,i),c=t.getPropertyName(a);return t.addLineFlowCode(`${c} = ${o}`,this),r.snippet=o,r.propertyName=c,t.format(r.propertyName,i,e)}}return super.build(t,e)}}class vo extends te{static get type(){return"ArrayElementNode"}constructor(t,e){super(),this.node=t,this.indexNode=e,this.isArrayElementNode=!0}getNodeType(t){return this.node.getElementType(t)}generate(t){const e=this.node.build(t),n=this.indexNode.build(t,"uint");return`${e}[ ${n} ]`}}class hp extends te{static get type(){return"ConvertNode"}constructor(t,e){super(),this.node=t,this.convertTo=e}getNodeType(t){const e=this.node.getNodeType(t);let n=null;for(const i of this.convertTo.split("|"))(n===null||t.getTypeLength(e)===t.getTypeLength(i))&&(n=i);return n}serialize(t){super.serialize(t),t.convertTo=this.convertTo}deserialize(t){super.deserialize(t),this.convertTo=t.convertTo}generate(t,e){const n=this.node,i=this.getNodeType(t),r=n.build(t,i);return t.format(r,i,e)}}class cS extends sn{static get type(){return"JoinNode"}constructor(t=[],e=null){super(e),this.nodes=t}getNodeType(t){return this.nodeType!==null?t.getVectorType(this.nodeType):t.getTypeFromLength(this.nodes.reduce((e,n)=>e+t.getTypeLength(n.getNodeType(t)),0))}generate(t,e){const n=this.getNodeType(t),i=this.nodes,r=t.getComponentType(n),o=[];for(const c of i){let l=c.build(t);const h=t.getComponentType(c.getNodeType(t));h!==r&&(l=t.format(l,h,r)),o.push(l)}const a=`${t.getType(n)}( ${o.join(", ")} )`;return t.format(a,n,e)}}const lS=yo.join("");class If extends te{static get type(){return"SplitNode"}constructor(t,e="x"){super(),this.node=t,this.components=e,this.isSplitNode=!0}getVectorLength(){let t=this.components.length;for(const e of this.components)t=Math.max(yo.indexOf(e)+1,t);return t}getComponentType(t){return t.getComponentType(this.node.getNodeType(t))}getNodeType(t){return t.getTypeFromLength(this.components.length,this.getComponentType(t))}generate(t,e){const n=this.node,i=t.getTypeLength(n.getNodeType(t));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=t.getTypeFromLength(this.getVectorLength(),this.getComponentType(t)));const c=n.build(t,o);this.components.length===i&&this.components===lS.slice(0,this.components.length)?r=t.format(c,o,e):r=t.format(`${c}.${this.components}`,this.getNodeType(t),e)}else r=n.build(t,e);return r}serialize(t){super.serialize(t),t.components=this.components}deserialize(t){super.deserialize(t),this.components=t.components}}class hS extends sn{static get type(){return"SetNode"}constructor(t,e,n){super(),this.sourceNode=t,this.components=e,this.targetNode=n}getNodeType(t){return this.sourceNode.getNodeType(t)}generate(t){const{sourceNode:e,components:n,targetNode:i}=this,r=this.getNodeType(t),o=t.getComponentType(i.getNodeType(t)),a=t.getTypeFromLength(n.length,o),c=i.build(t,a),l=e.build(t,r),h=t.getTypeLength(r),u=[];for(let f=0;f<h;f++){const d=yo[f];d===n[0]?(u.push(c),f+=n.length-1):u.push(l+"."+d)}return`${t.getType(r)}( ${u.join(", ")} )`}}class uS extends sn{static get type(){return"FlipNode"}constructor(t,e){super(),this.sourceNode=t,this.components=e}getNodeType(t){return this.sourceNode.getNodeType(t)}generate(t){const{components:e,sourceNode:n}=this,i=this.getNodeType(t),r=n.build(t),o=t.getVarFromNode(this),a=t.getPropertyName(o);t.addLineFlowCode(a+" = "+r,this);const c=t.getTypeLength(i),l=[];let h=0;for(let u=0;u<c;u++){const f=yo[u];f===e[h]?(l.push("1.0 - "+(a+"."+f)),h++):l.push(a+"."+f)}return`${t.getType(i)}( ${l.join(", ")} )`}}class bh extends te{static get type(){return"InputNode"}constructor(t,e=null){super(e),this.isInputNode=!0,this.value=t,this.precision=null}getNodeType(){return this.nodeType===null?Ea(this.value):this.nodeType}getInputType(t){return this.getNodeType(t)}setPrecision(t){return this.precision=t,this}serialize(t){super.serialize(t),t.value=this.value,this.value&&this.value.toArray&&(t.value=this.value.toArray()),t.valueType=Ea(this.value),t.nodeType=this.nodeType,t.valueType==="ArrayBuffer"&&(t.value=rS(t.value)),t.precision=this.precision}deserialize(t){super.deserialize(t),this.nodeType=t.nodeType,this.value=Array.isArray(t.value)?lp(t.valueType,...t.value):t.value,this.precision=t.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(t.value))}generate(){console.warn("Abstract function.")}}const Lf=/float|u?int/;class Pi extends bh{static get type(){return"ConstNode"}constructor(t,e=null){super(t,e),this.isConstNode=!0}generateConst(t){return t.generateConst(this.getNodeType(t),this.value)}generate(t,e){const n=this.getNodeType(t);return Lf.test(n)&&Lf.test(e)?t.generateConst(e,this.value):t.format(this.generateConst(t),n,e)}}class fS extends te{static get type(){return"MemberNode"}constructor(t,e){super(),this.node=t,this.property=e,this.isMemberNode=!0}getNodeType(t){return this.node.getMemberType(t,this.property)}generate(t){return this.node.build(t)+"."+this.property}}let up=null;const ir=new Map;function q(s,t){if(ir.has(s)){console.warn(`Redefinition of method chaining ${s}`);return}if(typeof t!="function")throw new Error(`Node element ${s} is not a function`);ir.set(s,t)}const fp=s=>s.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Ff=s=>fp(s).split("").sort().join(""),dp={setup(s,t){const e=t.shift();return s(Va(e),...t)},get(s,t,e){if(typeof t=="string"&&s[t]===void 0){if(s.isStackNode!==!0&&t==="assign")return(...n)=>(up.assign(e,...n),e);if(ir.has(t)){const n=ir.get(t);return s.isStackNode?(...i)=>e.add(n(...i)):(...i)=>n(e,...i)}else{if(t==="self")return s;if(t.endsWith("Assign")&&ir.has(t.slice(0,t.length-6))){const n=ir.get(t.slice(0,t.length-6));return s.isStackNode?(...i)=>e.assign(i[0],n(...i)):(...i)=>e.assign(n(e,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(t)===!0)return t=fp(t),ot(new If(e,t));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(t)===!0)return t=Ff(t.slice(3).toLowerCase()),n=>ot(new hS(s,t,n));if(/^flip[XYZWRGBASTPQ]{1,4}$/.test(t)===!0)return t=Ff(t.slice(4).toLowerCase()),()=>ot(new uS(ot(s),t));if(t==="width"||t==="height"||t==="depth")return t==="width"?t="x":t==="height"?t="y":t==="depth"&&(t="z"),ot(new If(s,t));if(/^\d+$/.test(t)===!0)return ot(new vo(e,new Pi(Number(t),"uint")));if(/^get$/.test(t)===!0)return n=>ot(new fS(e,n))}}}return Reflect.get(s,t,e)},set(s,t,e,n){return typeof t=="string"&&s[t]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(t)===!0||t==="width"||t==="height"||t==="depth"||/^\d+$/.test(t)===!0)?(n[t].assign(e),!0):Reflect.set(s,t,e,n)}},Ic=new WeakMap,Uf=new WeakMap,dS=function(s,t=null){const e=Ea(s);if(e==="node"){let n=Ic.get(s);return n===void 0&&(n=new Proxy(s,dp),Ic.set(s,n),Ic.set(n,n)),n}else{if(t===null&&(e==="float"||e==="boolean")||e&&e!=="shader"&&e!=="string")return ot(Gl(s,t));if(e==="shader")return Ie(s)}return s},pS=function(s,t=null){for(const e in s)s[e]=ot(s[e],t);return s},mS=function(s,t=null){const e=s.length;for(let n=0;n<e;n++)s[n]=ot(s[n],t);return s},gS=function(s,t=null,e=null,n=null){const i=r=>ot(n!==null?Object.assign(r,n):r);return t===null?(...r)=>i(new s(...to(r))):e!==null?(e=ot(e),(...r)=>i(new s(t,...to(r),e))):(...r)=>i(new s(t,...to(r)))},_S=function(s,...t){return ot(new s(...to(t)))};class xS extends te{constructor(t,e){super(),this.shaderNode=t,this.inputNodes=e}getNodeType(t){return this.shaderNode.nodeType||this.getOutputNode(t).getNodeType(t)}getMemberType(t,e){return this.getOutputNode(t).getMemberType(t,e)}call(t){const{shaderNode:e,inputNodes:n}=this,i=t.getNodeProperties(e);if(i.onceOutput)return i.onceOutput;let r=null;if(e.layout){let o=Uf.get(t.constructor);o===void 0&&(o=new WeakMap,Uf.set(t.constructor,o));let a=o.get(e);a===void 0&&(a=ot(t.buildFunctionNode(e)),o.set(e,a)),t.addInclude(a),r=ot(a.call(n))}else{const o=e.jsFunc,a=n!==null||o.length>1?o(n||[],t):o(t);r=ot(a)}return e.once&&(i.onceOutput=r),r}getOutputNode(t){const e=t.getNodeProperties(this);return e.outputNode===null&&(e.outputNode=this.setupOutput(t)),e.outputNode}setup(t){return this.getOutputNode(t)}setupOutput(t){return t.addStack(),t.stack.outputNode=this.call(t),t.removeStack()}generate(t,e){return this.getOutputNode(t).build(t,e)}}class yS extends te{constructor(t,e){super(e),this.jsFunc=t,this.layout=null,this.global=!0,this.once=!1}setLayout(t){return this.layout=t,this}call(t=null){return Va(t),ot(new xS(this,t))}setup(){return this.call()}}const vS=[!1,!0],MS=[0,1,2,3],SS=[-1,-2],pp=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Ch=new Map;for(const s of vS)Ch.set(s,new Pi(s));const Rh=new Map;for(const s of MS)Rh.set(s,new Pi(s,"uint"));const Nh=new Map([...Rh].map(s=>new Pi(s.value,"int")));for(const s of SS)Nh.set(s,new Pi(s,"int"));const za=new Map([...Nh].map(s=>new Pi(s.value)));for(const s of pp)za.set(s,new Pi(s));for(const s of pp)za.set(-s,new Pi(-s));const Ba={bool:Ch,uint:Rh,ints:Nh,float:za},Of=new Map([...Ch,...za]),Gl=(s,t)=>Of.has(s)?Of.get(s):s.isNode===!0?s:new Pi(s,t),TS=s=>{try{return s.getNodeType()}catch(t){return}},De=function(s,t=null){return(...e)=>{if((e.length===0||!["bool","float","int","uint"].includes(s)&&e.every(i=>typeof i!="object"))&&(e=[lp(s,...e)]),e.length===1&&t!==null&&t.has(e[0]))return ot(t.get(e[0]));if(e.length===1){const i=Gl(e[0],s);return TS(i)===s?ot(i):ot(new hp(i,s))}const n=e.map(i=>Gl(i));return ot(new cS(n,s))}},ES=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function AS(s,t){return new Proxy(new yS(s,t),dp)}const ot=(s,t=null)=>dS(s,t),Va=(s,t=null)=>new pS(s,t),to=(s,t=null)=>new mS(s,t),tt=(...s)=>new gS(...s),St=(...s)=>new _S(...s),Ie=(s,t)=>{const e=new AS(s,t),n=(...i)=>{let r;return Va(i),i[0]&&i[0].isNode?r=[...i]:r=i[0],e.call(r)};return n.shaderNode=e,n.setLayout=i=>(e.setLayout(i),n),n.once=()=>(e.once=!0,n),n};q("toGlobal",s=>(s.global=!0,s));const wS=(...s)=>up.If(...s);function bS(s){return s}q("append",bS);const CS=new De("color"),jn=new De("float",Ba.float),mp=new De("int",Ba.ints),RS=new De("uint",Ba.uint),NS=new De("bool",Ba.bool),Mo=new De("vec2"),PS=new De("ivec2"),DS=new De("uvec2"),IS=new De("bvec2"),oe=new De("vec3"),LS=new De("ivec3"),FS=new De("uvec3"),US=new De("bvec3"),wi=new De("vec4"),OS=new De("ivec4"),zS=new De("uvec4"),BS=new De("bvec4"),gp=new De("mat2"),So=new De("mat3"),VS=new De("mat4");q("toColor",CS);q("toFloat",jn);q("toInt",mp);q("toUint",RS);q("toBool",NS);q("toVec2",Mo);q("toIVec2",PS);q("toUVec2",DS);q("toBVec2",IS);q("toVec3",oe);q("toIVec3",LS);q("toUVec3",FS);q("toBVec3",US);q("toVec4",wi);q("toIVec4",OS);q("toUVec4",zS);q("toBVec4",BS);q("toMat2",gp);q("toMat3",So);q("toMat4",VS);const kS=tt(vo),HS=(s,t)=>ot(new hp(ot(s),t));q("element",kS);q("convert",HS);class GS extends sn{static get type(){return"AssignNode"}constructor(t,e){super(),this.targetNode=t,this.sourceNode=e}hasDependencies(){return!1}getNodeType(t,e){return e!=="void"?this.targetNode.getNodeType(t):"void"}needsSplitAssign(t){const{targetNode:e}=this;if(t.isAvailable("swizzleAssign")===!1&&e.isSplitNode&&e.components.length>1){const n=t.getTypeLength(e.node.getNodeType(t));return yo.join("").slice(0,n)!==e.components}return!1}generate(t,e){const{targetNode:n,sourceNode:i}=this,r=this.needsSplitAssign(t),o=n.getNodeType(t),a=n.context({assign:!0}).build(t),c=i.build(t,o),l=i.getNodeType(t),h=t.getDataFromNode(this);let u;if(h.initialized===!0)e!=="void"&&(u=a);else if(r){const f=t.getVarFromNode(this,null,o),d=t.getPropertyName(f);t.addLineFlowCode(`${d} = ${c}`,this);const _=n.node.context({assign:!0}).build(t);for(let g=0;g<n.components.length;g++){const m=n.components[g];t.addLineFlowCode(`${_}.${m} = ${d}[ ${g} ]`,this)}e!=="void"&&(u=a)}else u=`${a} = ${c}`,(e==="void"||l==="void")&&(t.addLineFlowCode(u,this),e!=="void"&&(u=a));return h.initialized=!0,t.format(u,o,e)}}const WS=tt(GS);q("assign",WS);class zf extends sn{static get type(){return"ArrayNode"}constructor(t,e,n=null){super(t),this.count=e,this.values=n,this.isArrayNode=!0}getNodeType(t){return this.nodeType===null&&(this.nodeType=this.values[0].getNodeType(t)),this.nodeType}getElementType(t){return this.getNodeType(t)}generate(t){const e=this.getNodeType(t);return t.generateArray(e,this.count,this.values)}}const XS=(...s)=>{let t;if(s.length===1){const e=s[0];t=new zf(null,e.length,e)}else{const e=s[0],n=s[1];t=new zf(e,n)}return ot(t)};q("toArray",(s,t)=>XS(Array(t).fill(s)));class _p extends te{static get type(){return"UniformGroupNode"}constructor(t,e=!1,n=1){super("string"),this.name=t,this.shared=e,this.order=n,this.isUniformGroup=!0}serialize(t){super.serialize(t),t.name=this.name,t.version=this.version,t.shared=this.shared}deserialize(t){super.deserialize(t),this.name=t.name,this.version=t.version,this.shared=t.shared}}const qS=s=>new _p(s),xp=(s,t=0)=>new _p(s,!0,t),Mr=xp("render"),YS=qS("object");class To extends bh{static get type(){return"UniformNode"}constructor(t,e=null){super(t,e),this.isUniformNode=!0,this.name="",this.groupNode=YS}label(t){return this.name=t,this}setGroup(t){return this.groupNode=t,this}getGroup(){return this.groupNode}getUniformHash(t){return this.getHash(t)}onUpdate(t,e){const n=this.getSelf();return t=t.bind(n),super.onUpdate(i=>{const r=t(i,n);r!==void 0&&(this.value=r)},e)}generate(t,e){const n=this.getNodeType(t),i=this.getUniformHash(t);let r=t.getNodeFromHash(i);r===void 0&&(t.setHashNode(this,i),r=this);const o=r.getInputType(t),a=t.getUniformFromNode(r,o,t.shaderStage,this.name||t.context.label),c=t.getPropertyName(a);return t.context.label!==void 0&&delete t.context.label,t.format(c,n,e)}}const Je=(s,t)=>{const e=ES(t||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return ot(new To(n,e))};class yp extends te{static get type(){return"PropertyNode"}constructor(t,e=null,n=!1){super(t),this.name=e,this.varying=n,this.isPropertyNode=!0}getHash(t){return this.name||super.getHash(t)}isGlobal(){return!0}generate(t){let e;return this.varying===!0?(e=t.getVaryingFromNode(this,this.name),e.needsInterpolation=!0):e=t.getVarFromNode(this,this.name),t.getPropertyName(e)}}const $S=(s,t)=>ot(new yp(s,t)),Bf=St(yp,"vec4","Output");class ZS extends sn{static get type(){return"FunctionCallNode"}constructor(t=null,e={}){super(),this.functionNode=t,this.parameters=e}setParameters(t){return this.parameters=t,this}getParameters(){return this.parameters}getNodeType(t){return this.functionNode.getNodeType(t)}generate(t){const e=[],n=this.functionNode,i=n.getInputs(t),r=this.parameters,o=(c,l)=>{const h=l.type,u=h==="pointer";let f;return u?f="&"+c.build(t):f=c.build(t,h),f};if(Array.isArray(r))for(let c=0;c<r.length;c++)e.push(o(r[c],i[c]));else for(const c of i){const l=r[c.name];if(l!==void 0)e.push(o(l,c));else throw new Error(`FunctionCallNode: Input '${c.name}' not found in FunctionNode.`)}return`${n.build(t,"property")}( ${e.join(", ")} )`}}const KS=(s,...t)=>(t=t.length>1||t[0]&&t[0].isNode===!0?to(t):Va(t[0]),ot(new ZS(ot(s),t)));q("call",KS);class me extends sn{static get type(){return"OperatorNode"}constructor(t,e,n,...i){if(super(),i.length>0){let r=new me(t,e,n);for(let o=0;o<i.length-1;o++)r=new me(t,r,i[o]);e=r,n=i[i.length-1]}this.op=t,this.aNode=e,this.bNode=n,this.isOperatorNode=!0}getNodeType(t,e){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(t),a=typeof r!="undefined"?r.getNodeType(t):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return t.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=e?t.getTypeLength(e):Math.max(t.getTypeLength(o),t.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else{if(t.isMatrix(o)){if(a==="float")return o;if(t.isVector(a))return t.getVectorFromMatrix(o);if(t.isMatrix(a))return o}else if(t.isMatrix(a)){if(o==="float")return a;if(t.isVector(o))return t.getVectorFromMatrix(a)}return t.getTypeLength(a)>t.getTypeLength(o)?a:o}}generate(t,e){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(t,e);let a=null,c=null;o!=="void"?(a=i.getNodeType(t),c=typeof r!="undefined"?r.getNodeType(t):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?t.isVector(a)?c=a:a!==c&&(a=c="float"):n===">>"||n==="<<"?(a=o,c=t.changeComponentType(c,"uint")):t.isMatrix(a)?c==="float"?c="float":t.isVector(c)?c=t.getVectorFromMatrix(a):t.isMatrix(c)||(a=c=o):t.isMatrix(c)?a==="float"?a="float":t.isVector(a)?a=t.getVectorFromMatrix(c):a=c=o:a=c=o):a=c=o;const l=i.build(t,a),h=typeof r!="undefined"?r.build(t,c):null,u=t.getTypeLength(e),f=t.getFunctionOperator(n);if(e!=="void")return n==="<"&&u>1?t.useComparisonMethod?t.format(`${t.getMethod("lessThan",e)}( ${l}, ${h} )`,o,e):t.format(`( ${l} < ${h} )`,o,e):n==="<="&&u>1?t.useComparisonMethod?t.format(`${t.getMethod("lessThanEqual",e)}( ${l}, ${h} )`,o,e):t.format(`( ${l} <= ${h} )`,o,e):n===">"&&u>1?t.useComparisonMethod?t.format(`${t.getMethod("greaterThan",e)}( ${l}, ${h} )`,o,e):t.format(`( ${l} > ${h} )`,o,e):n===">="&&u>1?t.useComparisonMethod?t.format(`${t.getMethod("greaterThanEqual",e)}( ${l}, ${h} )`,o,e):t.format(`( ${l} >= ${h} )`,o,e):n==="!"||n==="~"?t.format(`(${n}${l})`,a,e):f?t.format(`${f}( ${l}, ${h} )`,o,e):t.isMatrix(a)&&c==="float"?t.format(`( ${h} ${n} ${l} )`,o,e):a==="float"&&t.isMatrix(c)?t.format(`${l} ${n} ${h}`,o,e):t.format(`( ${l} ${n} ${h} )`,o,e);if(a!=="void")return f?t.format(`${f}( ${l}, ${h} )`,o,e):t.isMatrix(a)&&c==="float"?t.format(`${h} ${n} ${l}`,o,e):t.format(`${l} ${n} ${h}`,o,e)}serialize(t){super.serialize(t),t.op=this.op}deserialize(t){super.deserialize(t),this.op=t.op}}const vp=tt(me,"+"),Wl=tt(me,"-"),Ph=tt(me,"*"),Mp=tt(me,"/"),Sp=tt(me,"%"),jS=tt(me,"=="),JS=tt(me,"!="),QS=tt(me,"<"),tT=tt(me,">"),eT=tt(me,"<="),nT=tt(me,">="),iT=tt(me,"&&"),sT=tt(me,"||"),rT=tt(me,"!"),oT=tt(me,"^^"),aT=tt(me,"&"),cT=tt(me,"~"),lT=tt(me,"|"),hT=tt(me,"^"),uT=tt(me,"<<"),fT=tt(me,">>");q("add",vp);q("sub",Wl);q("mul",Ph);q("div",Mp);q("modInt",Sp);q("equal",jS);q("notEqual",JS);q("lessThan",QS);q("greaterThan",tT);q("lessThanEqual",eT);q("greaterThanEqual",nT);q("and",iT);q("or",sT);q("not",rT);q("xor",oT);q("bitAnd",aT);q("bitNot",cT);q("bitOr",lT);q("bitXor",hT);q("shiftLeft",uT);q("shiftRight",fT);const dT=(...s)=>(console.warn("TSL.OperatorNode: .remainder() has been renamed to .modInt()."),Sp(...s));q("remainder",dT);class I extends sn{static get type(){return"MathNode"}constructor(t,e,n=null,i=null){super(),this.method=t,this.aNode=e,this.bNode=n,this.cNode=i,this.isMathNode=!0}getInputType(t){const e=this.aNode.getNodeType(t),n=this.bNode?this.bNode.getNodeType(t):null,i=this.cNode?this.cNode.getNodeType(t):null,r=t.isMatrix(e)?0:t.getTypeLength(e),o=t.isMatrix(n)?0:t.getTypeLength(n),a=t.isMatrix(i)?0:t.getTypeLength(i);return r>o&&r>a?e:o>a?n:a>r?i:e}getNodeType(t){const e=this.method;return e===I.LENGTH||e===I.DISTANCE||e===I.DOT?"float":e===I.CROSS?"vec3":e===I.ALL?"bool":e===I.EQUALS?t.changeComponentType(this.aNode.getNodeType(t),"bool"):e===I.MOD?this.aNode.getNodeType(t):this.getInputType(t)}generate(t,e){let n=this.method;const i=this.getNodeType(t),r=this.getInputType(t),o=this.aNode,a=this.bNode,c=this.cNode,l=t.renderer.coordinateSystem;if(n===I.TRANSFORM_DIRECTION){let h=o,u=a;t.isMatrix(h.getNodeType(t))?u=wi(oe(u),0):h=wi(oe(h),0);const f=Ph(h,u).xyz;return Tp(f).build(t,e)}else{if(n===I.NEGATE)return t.format("( - "+o.build(t,r)+" )",i,e);if(n===I.ONE_MINUS)return Wl(1,o).build(t,e);if(n===I.RECIPROCAL)return Mp(1,o).build(t,e);if(n===I.DIFFERENCE)return Dh(Wl(o,a)).build(t,e);{const h=[];return n===I.CROSS||n===I.MOD?h.push(o.build(t,i),a.build(t,i)):l===Ts&&n===I.STEP?h.push(o.build(t,t.getTypeLength(o.getNodeType(t))===1?"float":r),a.build(t,r)):l===Ts&&(n===I.MIN||n===I.MAX)||n===I.MOD?h.push(o.build(t,r),a.build(t,t.getTypeLength(a.getNodeType(t))===1?"float":r)):n===I.REFRACT?h.push(o.build(t,r),a.build(t,r),c.build(t,"float")):n===I.MIX?h.push(o.build(t,r),a.build(t,r),c.build(t,t.getTypeLength(c.getNodeType(t))===1?"float":r)):(l===Ta&&n===I.ATAN&&a!==null&&(n="atan2"),h.push(o.build(t,r)),a!==null&&h.push(a.build(t,r)),c!==null&&h.push(c.build(t,r))),t.format(`${t.getMethod(n,i)}( ${h.join(", ")} )`,i,e)}}}serialize(t){super.serialize(t),t.method=this.method}deserialize(t){super.deserialize(t),this.method=t.method}}I.ALL="all";I.ANY="any";I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.TRUNC="trunc";I.FWIDTH="fwidth";I.TRANSPOSE="transpose";I.BITCAST="bitcast";I.EQUALS="equals";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";const pT=jn(Math.PI),mT=tt(I,I.ALL),gT=tt(I,I.ANY),_T=tt(I,I.RADIANS),xT=tt(I,I.DEGREES),yT=tt(I,I.EXP),vT=tt(I,I.EXP2),MT=tt(I,I.LOG),ST=tt(I,I.LOG2),TT=tt(I,I.SQRT),ET=tt(I,I.INVERSE_SQRT),AT=tt(I,I.FLOOR),wT=tt(I,I.CEIL),Tp=tt(I,I.NORMALIZE),Ep=tt(I,I.FRACT),Ap=tt(I,I.SIN),bT=tt(I,I.COS),CT=tt(I,I.TAN),RT=tt(I,I.ASIN),NT=tt(I,I.ACOS),wp=tt(I,I.ATAN),Dh=tt(I,I.ABS),bp=tt(I,I.SIGN),PT=tt(I,I.LENGTH),DT=tt(I,I.NEGATE),IT=tt(I,I.ONE_MINUS),LT=tt(I,I.DFDX),FT=tt(I,I.DFDY),UT=tt(I,I.ROUND),OT=tt(I,I.RECIPROCAL),zT=tt(I,I.TRUNC),BT=tt(I,I.FWIDTH),VT=tt(I,I.TRANSPOSE);I.BITCAST;const kT=tt(I,I.EQUALS),HT=tt(I,I.MIN),GT=tt(I,I.MAX),Cp=tt(I,I.MOD),WT=tt(I,I.STEP),XT=tt(I,I.REFLECT),qT=tt(I,I.DISTANCE),YT=tt(I,I.DIFFERENCE),Ih=tt(I,I.DOT),$T=tt(I,I.CROSS),Rp=tt(I,I.POW),ZT=tt(I,I.POW,2),KT=tt(I,I.POW,3),jT=tt(I,I.POW,4),JT=tt(I,I.TRANSFORM_DIRECTION),QT=s=>Ph(bp(s),Rp(Dh(s),1/3)),Np=s=>Ih(s,s),Lh=tt(I,I.MIX),Pp=(s,t=0,e=1)=>ot(new I(I.CLAMP,ot(s),ot(t),ot(e))),tE=s=>Pp(s),eE=tt(I,I.REFRACT),Fh=tt(I,I.SMOOTHSTEP),nE=tt(I,I.FACEFORWARD),iE=Ie(([s])=>{const n=43758.5453,i=Ih(s.xy,Mo(12.9898,78.233)),r=Cp(i,pT);return Ep(Ap(r).mul(n))}),sE=(s,t,e)=>Lh(t,e,s),rE=(s,t,e)=>Fh(t,e,s),oE=(s,t)=>(console.warn('THREE.TSL: "atan2" is overloaded. Use "atan" instead.'),wp(s,t));q("all",mT);q("any",gT);q("equals",kT);q("radians",_T);q("degrees",xT);q("exp",yT);q("exp2",vT);q("log",MT);q("log2",ST);q("sqrt",TT);q("inverseSqrt",ET);q("floor",AT);q("ceil",wT);q("normalize",Tp);q("fract",Ep);q("sin",Ap);q("cos",bT);q("tan",CT);q("asin",RT);q("acos",NT);q("atan",wp);q("abs",Dh);q("sign",bp);q("length",PT);q("lengthSq",Np);q("negate",DT);q("oneMinus",IT);q("dFdx",LT);q("dFdy",FT);q("round",UT);q("reciprocal",OT);q("trunc",zT);q("fwidth",BT);q("atan2",oE);q("min",HT);q("max",GT);q("mod",Cp);q("step",WT);q("reflect",XT);q("distance",qT);q("dot",Ih);q("cross",$T);q("pow",Rp);q("pow2",ZT);q("pow3",KT);q("pow4",jT);q("transformDirection",JT);q("mix",sE);q("clamp",Pp);q("refract",eE);q("smoothstep",rE);q("faceForward",nE);q("difference",YT);q("saturate",tE);q("cbrt",QT);q("transpose",VT);q("rand",iE);class aE extends te{static get type(){return"ConditionalNode"}constructor(t,e,n=null){super(),this.condNode=t,this.ifNode=e,this.elseNode=n}getNodeType(t){const{ifNode:e,elseNode:n}=t.getNodeProperties(this);if(e===void 0)return this.setup(t),this.getNodeType(t);const i=e.getNodeType(t);if(n!==null){const r=n.getNodeType(t);if(t.getTypeLength(r)>t.getTypeLength(i))return r}return i}setup(t){const e=this.condNode.cache(),n=this.ifNode.cache(),i=this.elseNode?this.elseNode.cache():null,r=t.context.nodeBlock;t.getDataFromNode(n).parentNodeBlock=r,i!==null&&(t.getDataFromNode(i).parentNodeBlock=r);const o=t.getNodeProperties(this);o.condNode=e,o.ifNode=n.context({nodeBlock:n}),o.elseNode=i?i.context({nodeBlock:i}):null}generate(t,e){const n=this.getNodeType(t),i=t.getDataFromNode(this);if(i.nodeProperty!==void 0)return i.nodeProperty;const{condNode:r,ifNode:o,elseNode:a}=t.getNodeProperties(this),c=e!=="void",l=c?$S(n).build(t):"";i.nodeProperty=l;const h=r.build(t,"bool");t.addFlowCode(`
${t.tab}if ( ${h} ) {

`).addFlowTab();let u=o.build(t,n);if(u&&(c?u=l+" = "+u+";":u="return "+u+";"),t.removeFlowTab().addFlowCode(t.tab+"	"+u+`

`+t.tab+"}"),a!==null){t.addFlowCode(` else {

`).addFlowTab();let f=a.build(t,n);f&&(c?f=l+" = "+f+";":f="return "+f+";"),t.removeFlowTab().addFlowCode(t.tab+"	"+f+`

`+t.tab+`}

`)}else t.addFlowCode(`

`);return t.format(l,n,e)}}const Uh=tt(aE);q("select",Uh);const cE=(...s)=>(console.warn("TSL.ConditionalNode: cond() has been renamed to select()."),Uh(...s));q("cond",cE);class lE extends te{static get type(){return"ContextNode"}constructor(t,e={}){super(),this.isContextNode=!0,this.node=t,this.value=e}getScope(){return this.node.getScope()}getNodeType(t){return this.node.getNodeType(t)}analyze(t){this.node.build(t)}setup(t){const e=t.getContext();t.setContext(Fs(Fs({},t.context),this.value));const n=this.node.build(t);return t.setContext(e),n}generate(t,e){const n=t.getContext();t.setContext(Fs(Fs({},t.context),this.value));const i=this.node.build(t,e);return t.setContext(n),i}}const Dp=tt(lE),hE=(s,t)=>Dp(s,{label:t});q("context",Dp);q("label",hE);class uE extends te{static get type(){return"VarNode"}constructor(t,e=null,n=!1){super(),this.node=t,this.name=e,this.global=!0,this.isVarNode=!0,this.readOnly=n}getHash(t){return this.name||super.getHash(t)}getMemberType(t,e){return this.node.getMemberType(t,e)}getElementType(t){return this.node.getElementType(t)}getNodeType(t){return this.node.getNodeType(t)}generate(t){const{node:e,name:n,readOnly:i}=this,{renderer:r}=t,o=r.backend.isWebGPUBackend===!0;let a=!1,c=!1;i&&(a=t.isDeterministic(e),c=o?i:a);const l=t.getVectorType(this.getNodeType(t)),h=e.build(t,l),u=t.getVarFromNode(this,n,l,void 0,c),f=t.getPropertyName(u);let d=f;if(c)if(o)d=a?`const ${f}`:`let ${f}`;else{const _=t.getArrayCount(e);d=`const ${t.getVar(u.type,f,_)}`}return t.addLineFlowCode(`${d} = ${h}`,this),f}}const Oh=tt(uE),fE=(s,t=null)=>Oh(s,t).append(),dE=(s,t=null)=>Oh(s,t,!0).append();q("toVar",fE);q("toConst",dE);const pE=s=>(console.warn('TSL: "temp( node )" is deprecated. Use "Var( node )" or "node.toVar()" instead.'),Oh(s));q("temp",pE);class mE extends te{static get type(){return"VaryingNode"}constructor(t,e=null){super(),this.node=t,this.name=e,this.isVaryingNode=!0}isGlobal(){return!0}getHash(t){return this.name||super.getHash(t)}getNodeType(t){return this.node.getNodeType(t)}setupVarying(t){const e=t.getNodeProperties(this);let n=e.varying;if(n===void 0){const i=this.name,r=this.getNodeType(t);e.varying=n=t.getVaryingFromNode(this,i,r),e.node=this.node}return n.needsInterpolation||(n.needsInterpolation=t.shaderStage==="fragment"),n}setup(t){this.setupVarying(t)}analyze(t){return this.setupVarying(t),this.node.analyze(t)}generate(t){const e=t.getNodeProperties(this),n=this.setupVarying(t),i=t.shaderStage==="fragment"&&e.reassignPosition===!0&&t.context.needsPositionReassign;if(e.propertyName===void 0||i){const r=this.getNodeType(t),o=t.getPropertyName(n,Sf.VERTEX);t.flowNodeFromShaderStage(Sf.VERTEX,this.node,r,o),e.propertyName=o,i?e.reassignPosition=!1:e.reassignPosition===void 0&&t.context.isPositionNodeInput&&(e.reassignPosition=!0)}return t.getPropertyName(n)}}const Di=tt(mE),gE=s=>Di(s);q("toVarying",Di);q("toVertexStage",gE);q("varying",(...s)=>(console.warn("TSL.VaryingNode: .varying() has been renamed to .toVarying()."),Di(...s)));q("vertexStage",(...s)=>(console.warn("TSL.VaryingNode: .vertexStage() has been renamed to .toVertexStage()."),Di(...s)));const _E=Ie(([s])=>{const t=s.mul(.9478672986).add(.0521327014).pow(2.4),e=s.mul(.0773993808),n=s.lessThanEqual(.04045);return Lh(t,e,n)}).setLayout({name:"sRGBTransferEOTF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),xE=Ie(([s])=>{const t=s.pow(.41666).mul(1.055).sub(.055),e=s.mul(12.92),n=s.lessThanEqual(.0031308);return Lh(t,e,n)}).setLayout({name:"sRGBTransferOETF",type:"vec3",inputs:[{name:"color",type:"vec3"}]}),Eo="WorkingColorSpace",zh="OutputColorSpace";class ka extends sn{static get type(){return"ColorSpaceNode"}constructor(t,e,n){super("vec4"),this.colorNode=t,this.source=e,this.target=n}resolveColorSpace(t,e){return e===Eo?Le.workingColorSpace:e===zh?t.context.outputColorSpace||t.renderer.outputColorSpace:e}setup(t){const{colorNode:e}=this,n=this.resolveColorSpace(t,this.source),i=this.resolveColorSpace(t,this.target);let r=e;return Le.enabled===!1||n===i||!n||!i||(Le.getTransfer(n)===Qr&&(r=wi(_E(r.rgb),r.a)),Le.getPrimaries(n)!==Le.getPrimaries(i)&&(r=wi(So(Le._getMatrix(new li,n,i)).mul(r.rgb),r.a)),Le.getTransfer(i)===Qr&&(r=wi(xE(r.rgb),r.a))),r}}const yE=s=>ot(new ka(ot(s),Eo,zh)),vE=s=>ot(new ka(ot(s),zh,Eo)),ME=(s,t)=>ot(new ka(ot(s),Eo,t)),Ip=(s,t)=>ot(new ka(ot(s),t,Eo));q("toOutputColorSpace",yE);q("toWorkingColorSpace",vE);q("workingToColorSpace",ME);q("colorSpaceToWorking",Ip);let SE=class extends vo{static get type(){return"ReferenceElementNode"}constructor(t,e){super(t,e),this.referenceNode=t,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(t){const e=super.generate(t),n=this.referenceNode.getNodeType(),i=this.getNodeType();return t.format(e,n,i)}};class TE extends te{static get type(){return"ReferenceBaseNode"}constructor(t,e,n=null,i=null){super(),this.property=t,this.uniformType=e,this.object=n,this.count=i,this.properties=t.split("."),this.reference=n,this.node=null,this.group=null,this.updateType=Fe.OBJECT}setGroup(t){return this.group=t,this}element(t){return ot(new SE(this,ot(t)))}setNodeType(t){const e=Je(null,t).getSelf();this.group!==null&&e.setGroup(this.group),this.node=e}getNodeType(t){return this.node===null&&(this.updateReference(t),this.updateValue()),this.node.getNodeType(t)}getValueFromReference(t=this.reference){const{properties:e}=this;let n=t[e[0]];for(let i=1;i<e.length;i++)n=n[e[i]];return n}updateReference(t){return this.reference=this.object!==null?this.object:t.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const t=this.getValueFromReference();Array.isArray(t)?this.node.array=t:this.node.value=t}}class EE extends TE{static get type(){return"RendererReferenceNode"}constructor(t,e,n=null){super(t,e,n),this.renderer=n,this.setGroup(Mr)}updateReference(t){return this.reference=this.renderer!==null?this.renderer:t.renderer,this.reference}}const AE=(s,t,e=null)=>ot(new EE(s,t,e));class wE extends sn{static get type(){return"ToneMappingNode"}constructor(t,e=CE,n=null){super("vec3"),this.toneMapping=t,this.exposureNode=e,this.colorNode=n}customCacheKey(){return cp(this.toneMapping)}setup(t){const e=this.colorNode||t.context.color,n=this.toneMapping;if(n===Vl)return e;let i=null;const r=t.renderer.library.getToneMappingFunction(n);return r!==null?i=wi(r(e.rgb,this.exposureNode),e.a):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),i=e),i}}const bE=(s,t,e)=>ot(new wE(s,ot(t),ot(e))),CE=AE("toneMappingExposure","float");q("toneMapping",(s,t,e)=>bE(t,e,s));const we=new Ct,ea=new Un;let RE=0;class NE{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=KM,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}}const tn=new Ct;class Bh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new NE(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Bh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class PE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sa,this.updateRanges=[],this.version=0,this.uuid=lr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}class DE extends bh{static get type(){return"BufferAttributeNode"}constructor(t,e=null,n=0,i=0){super(t,e),this.isBufferNode=!0,this.bufferType=e,this.bufferStride=n,this.bufferOffset=i,this.usage=Sa,this.instanced=!1,this.attribute=null,this.global=!0,t&&t.isBufferAttribute===!0&&(this.attribute=t,this.usage=t.usage,this.instanced=t.isInstancedBufferAttribute)}getHash(t){if(this.bufferStride===0&&this.bufferOffset===0){let e=t.globalCache.getData(this.value);return e===void 0&&(e={node:this},t.globalCache.setData(this.value,e)),e.node.uuid}return this.uuid}getNodeType(t){return this.bufferType===null&&(this.bufferType=t.getTypeFromAttribute(this.attribute)),this.bufferType}setup(t){if(this.attribute!==null)return;const e=this.getNodeType(t),n=this.value,i=t.getTypeLength(e),r=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new PE(n,r),c=new Bh(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(t){const e=this.getNodeType(t),n=t.getBufferAttributeFromNode(this,e),i=t.getPropertyName(n);let r=null;return t.shaderStage==="vertex"||t.shaderStage==="compute"?(this.name=i,r=i):r=Di(this).build(t,e),r}getInputType(){return"bufferAttribute"}setUsage(t){return this.usage=t,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=t),this}setInstanced(t){return this.instanced=t,this}}const IE=(s,t=null,e=0,n=0)=>ot(new DE(s,t,e,n));q("toAttribute",s=>IE(s.value));class LE extends te{static get type(){return"ComputeNode"}constructor(t,e,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=t,this.count=e,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.name="",this.updateBeforeType=Fe.OBJECT,this.onInitFunction=null,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}label(t){return this.name=t,this}updateDispatchCount(){const{count:t,workgroupSize:e}=this;let n=e[0];for(let i=1;i<e.length;i++)n*=e[i];this.dispatchCount=Math.ceil(t/n)}onInit(t){return this.onInitFunction=t,this}updateBefore({renderer:t}){t.compute(this)}generate(t){const{shaderStage:e}=t;if(e==="compute"){const n=this.computeNode.build(t,"void");n!==""&&t.addLineFlowCode(n,this)}}}const FE=(s,t,e)=>ot(new LE(ot(s),t,e));q("compute",FE);class UE extends te{static get type(){return"CacheNode"}constructor(t,e=!0){super(),this.node=t,this.parent=e,this.isCacheNode=!0}getNodeType(t){const e=t.getCache(),n=t.getCacheFromNode(this,this.parent);t.setCache(n);const i=this.node.getNodeType(t);return t.setCache(e),i}build(t,...e){const n=t.getCache(),i=t.getCacheFromNode(this,this.parent);t.setCache(i);const r=this.node.build(t,...e);return t.setCache(n),r}}const OE=(s,t)=>ot(new UE(ot(s),t));q("cache",OE);class zE extends te{static get type(){return"BypassNode"}constructor(t,e){super(),this.isBypassNode=!0,this.outputNode=t,this.callNode=e}getNodeType(t){return this.outputNode.getNodeType(t)}generate(t){const e=this.callNode.build(t,"void");return e!==""&&t.addLineFlowCode(e,this),this.outputNode.build(t)}}const BE=tt(zE);q("bypass",BE);class Lp extends te{static get type(){return"RemapNode"}constructor(t,e,n,i=jn(0),r=jn(1)){super(),this.node=t,this.inLowNode=e,this.inHighNode=n,this.outLowNode=i,this.outHighNode=r,this.doClamp=!0}setup(){const{node:t,inLowNode:e,inHighNode:n,outLowNode:i,outHighNode:r,doClamp:o}=this;let a=t.sub(e).div(n.sub(e));return o===!0&&(a=a.clamp()),a.mul(r.sub(i)).add(i)}}const VE=tt(Lp,null,null,{doClamp:!1}),kE=tt(Lp);q("remap",VE);q("remapClamp",kE);class HE extends te{static get type(){return"ExpressionNode"}constructor(t="",e="void"){super(e),this.snippet=t}generate(t,e){const n=this.getNodeType(t),i=this.snippet;if(n==="void")t.addLineFlowCode(i,this);else return t.format(`( ${i} )`,n,e)}}const Xl=tt(HE),GE=s=>(s?Uh(s,Xl("discard")):Xl("discard")).append();q("discard",GE);class WE extends sn{static get type(){return"RenderOutputNode"}constructor(t,e,n){super("vec4"),this.colorNode=t,this.toneMapping=e,this.outputColorSpace=n,this.isRenderOutputNode=!0}setup({context:t}){let e=this.colorNode||t.color;const n=(this.toneMapping!==null?this.toneMapping:t.toneMapping)||Vl,i=(this.outputColorSpace!==null?this.outputColorSpace:t.outputColorSpace)||Ma;return n!==Vl&&(e=e.toneMapping(n)),i!==Ma&&i!==Le.workingColorSpace&&(e=e.workingToColorSpace(i)),e}}const XE=(s,t=null,e=null)=>ot(new WE(ot(s),t,e));q("renderOutput",XE);class qE extends te{static get type(){return"AttributeNode"}constructor(t,e=null){super(e),this.global=!0,this._attributeName=t}getHash(t){return this.getAttributeName(t)}getNodeType(t){let e=this.nodeType;if(e===null){const n=this.getAttributeName(t);if(t.hasGeometryAttribute(n)){const i=t.geometry.getAttribute(n);e=t.getTypeFromAttribute(i)}else e="float"}return e}setAttributeName(t){return this._attributeName=t,this}getAttributeName(){return this._attributeName}generate(t){const e=this.getAttributeName(t),n=this.getNodeType(t);if(t.hasGeometryAttribute(e)===!0){const r=t.geometry.getAttribute(e),o=t.getTypeFromAttribute(r),a=t.getAttribute(e,o);return t.shaderStage==="vertex"?t.format(a.name,o,n):Di(this).build(t,n)}else return console.warn(`AttributeNode: Vertex attribute "${e}" not found on geometry.`),t.generateConst(n)}serialize(t){super.serialize(t),t.global=this.global,t._attributeName=this._attributeName}deserialize(t){super.deserialize(t),this.global=t.global,this._attributeName=t._attributeName}}const Vh=(s,t)=>ot(new qE(s,t));class fe extends te{static get type(){return"IndexNode"}constructor(t){super("uint"),this.scope=t,this.isIndexNode=!0}generate(t){const e=this.getNodeType(t),n=this.scope;let i;if(n===fe.VERTEX)i=t.getVertexIndex();else if(n===fe.INSTANCE)i=t.getInstanceIndex();else if(n===fe.DRAW)i=t.getDrawIndex();else if(n===fe.INVOCATION_LOCAL)i=t.getInvocationLocalIndex();else if(n===fe.INVOCATION_SUBGROUP)i=t.getInvocationSubgroupIndex();else if(n===fe.SUBGROUP)i=t.getSubgroupIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return t.shaderStage==="vertex"||t.shaderStage==="compute"?r=i:r=Di(this).build(t,e),r}}fe.VERTEX="vertex";fe.INSTANCE="instance";fe.SUBGROUP="subgroup";fe.INVOCATION_LOCAL="invocationLocal";fe.INVOCATION_SUBGROUP="invocationSubgroup";fe.DRAW="draw";fe.VERTEX;fe.INSTANCE;fe.SUBGROUP;fe.INVOCATION_SUBGROUP;fe.INVOCATION_LOCAL;fe.DRAW;class Fp{constructor(t=new Ct(1/0,1/0,1/0),e=new Ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),ia.subVectors(this.max,zr),js.subVectors(t.a,zr),Js.subVectors(t.b,zr),Qs.subVectors(t.c,zr),ki.subVectors(Js,js),Hi.subVectors(Qs,Js),us.subVectors(js,Qs);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-us.z,us.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,us.z,0,-us.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-us.y,us.x,0];return!Lc(e,js,Js,Qs,ia)||(e=[1,0,0,0,1,0,0,0,1],!Lc(e,js,Js,Qs,ia))?!1:(sa.crossVectors(ki,Hi),e=[sa.x,sa.y,sa.z],Lc(e,js,Js,Qs,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _i=[new Ct,new Ct,new Ct,new Ct,new Ct,new Ct,new Ct,new Ct],Xn=new Ct,na=new Fp,js=new Ct,Js=new Ct,Qs=new Ct,ki=new Ct,Hi=new Ct,us=new Ct,zr=new Ct,ia=new Ct,sa=new Ct,fs=new Ct;function Lc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fs.fromArray(s,r);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),c=t.dot(fs),l=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const YE=new Fp,Br=new Ct,Fc=new Ct;class $E{constructor(t=new Ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):YE.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);const e=Br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Br,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Fc)),this.expandByPoint(Br.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vf=new $E;class Vt extends te{static get type(){return"Object3DNode"}constructor(t,e=null){super(),this.scope=t,this.object3d=e,this.updateType=Fe.OBJECT,this._uniformNode=new To(null)}getNodeType(){const t=this.scope;if(t===Vt.WORLD_MATRIX)return"mat4";if(t===Vt.POSITION||t===Vt.VIEW_POSITION||t===Vt.DIRECTION||t===Vt.SCALE)return"vec3";if(t===Vt.RADIUS)return"float"}update(t){const e=this.object3d,n=this._uniformNode,i=this.scope;if(i===Vt.WORLD_MATRIX)n.value=e.matrixWorld;else if(i===Vt.POSITION)n.value=n.value||new Ct,n.value.setFromMatrixPosition(e.matrixWorld);else if(i===Vt.SCALE)n.value=n.value||new Ct,n.value.setFromMatrixScale(e.matrixWorld);else if(i===Vt.DIRECTION)n.value=n.value||new Ct,e.getWorldDirection(n.value);else if(i===Vt.VIEW_POSITION){const r=t.camera;n.value=n.value||new Ct,n.value.setFromMatrixPosition(e.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}else if(i===Vt.RADIUS){const r=t.object.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),Vf.copy(r.boundingSphere).applyMatrix4(e.matrixWorld),n.value=Vf.radius}}generate(t){const e=this.scope;return e===Vt.WORLD_MATRIX?this._uniformNode.nodeType="mat4":e===Vt.POSITION||e===Vt.VIEW_POSITION||e===Vt.DIRECTION||e===Vt.SCALE?this._uniformNode.nodeType="vec3":e===Vt.RADIUS&&(this._uniformNode.nodeType="float"),this._uniformNode.build(t)}serialize(t){super.serialize(t),t.scope=this.scope}deserialize(t){super.deserialize(t),this.scope=t.scope}}Vt.WORLD_MATRIX="worldMatrix";Vt.POSITION="position";Vt.SCALE="scale";Vt.VIEW_POSITION="viewPosition";Vt.DIRECTION="direction";Vt.RADIUS="radius";Vt.DIRECTION;Vt.WORLD_MATRIX;Vt.POSITION;Vt.SCALE;Vt.VIEW_POSITION;Vt.RADIUS;class Up extends To{static get type(){return"BufferNode"}constructor(t,e,n=0){super(t,e),this.isBufferNode=!0,this.bufferType=e,this.bufferCount=n}getElementType(t){return this.getNodeType(t)}getInputType(){return"buffer"}}const ZE=(s,t,e)=>ot(new Up(s,t,e));class KE extends vo{static get type(){return"UniformArrayElementNode"}constructor(t,e){super(t,e),this.isArrayBufferElementNode=!0}generate(t){const e=super.generate(t),n=this.getNodeType(),i=this.node.getPaddedType();return t.format(e,i,n)}}class jE extends Up{static get type(){return"UniformArrayNode"}constructor(t,e=null){super(null),this.array=t,this.elementType=e===null?Ea(t[0]):e,this.paddedType=this.getPaddedType(),this.updateType=Fe.RENDER,this.isArrayBufferNode=!0}getNodeType(){return this.paddedType}getElementType(){return this.elementType}getPaddedType(){const t=this.elementType;let e="vec4";return t==="mat2"?e="mat2":/mat/.test(t)===!0?e="mat4":t.charAt(0)==="i"?e="ivec4":t.charAt(0)==="u"&&(e="uvec4"),e}update(){const{array:t,value:e}=this,n=this.elementType;if(n==="float"||n==="int"||n==="uint")for(let i=0;i<t.length;i++){const r=i*4;e[r]=t[i]}else if(n==="color")for(let i=0;i<t.length;i++){const r=i*4,o=t[i];e[r]=o.r,e[r+1]=o.g,e[r+2]=o.b||0}else if(n==="mat2")for(let i=0;i<t.length;i++){const r=i*4,o=t[i];e[r]=o.elements[0],e[r+1]=o.elements[1],e[r+2]=o.elements[2],e[r+3]=o.elements[3]}else if(n==="mat3")for(let i=0;i<t.length;i++){const r=i*16,o=t[i];e[r]=o.elements[0],e[r+1]=o.elements[1],e[r+2]=o.elements[2],e[r+4]=o.elements[3],e[r+5]=o.elements[4],e[r+6]=o.elements[5],e[r+8]=o.elements[6],e[r+9]=o.elements[7],e[r+10]=o.elements[8],e[r+15]=1}else if(n==="mat4")for(let i=0;i<t.length;i++){const r=i*16,o=t[i];for(let a=0;a<o.elements.length;a++)e[r+a]=o.elements[a]}else for(let i=0;i<t.length;i++){const r=i*4,o=t[i];e[r]=o.x,e[r+1]=o.y,e[r+2]=o.z||0,e[r+3]=o.w||0}}setup(t){const e=this.array.length,n=this.elementType;let i=Float32Array;const r=this.paddedType,o=t.getTypeLength(r);return n.charAt(0)==="i"&&(i=Int32Array),n.charAt(0)==="u"&&(i=Uint32Array),this.value=new i(e*o),this.bufferCount=e,this.bufferType=r,super.setup(t)}element(t){return ot(new KE(this,ot(t)))}}const Op=(s,t)=>ot(new jE(s,t)),JE=Je(0,"uint").setGroup(xp("cameraIndex")).toVarying("v_cameraIndex"),Vr=Je("float").label("cameraNear").setGroup(Mr).onRenderUpdate(({camera:s})=>s.near),kr=Je("float").label("cameraFar").setGroup(Mr).onRenderUpdate(({camera:s})=>s.far),Ha=Ie(({camera:s})=>{let t;if(s.isArrayCamera&&s.cameras.length>0){const e=[];for(const i of s.cameras)e.push(i.matrixWorldInverse);t=Op(e).setGroup(Mr).label("cameraViewMatrices").element(JE).toVar("cameraViewMatrix")}else t=Je("mat4").label("cameraViewMatrix").setGroup(Mr).onRenderUpdate(({camera:e})=>e.matrixWorldInverse);return t}).once()();class On extends Vt{static get type(){return"ModelNode"}constructor(t){super(t)}update(t){this.object3d=t.object,super.update(t)}}On.DIRECTION;const QE=St(On,On.WORLD_MATRIX);On.POSITION;On.SCALE;On.VIEW_POSITION;On.RADIUS;const t1=Je(new li).onObjectUpdate(({object:s},t)=>t.value.getNormalMatrix(s.matrixWorld)),e1=Ie(s=>s.renderer.nodes.modelViewMatrix||n1).once()().toVar("modelViewMatrix"),n1=Ha.mul(QE),bi=Ie(s=>s.context.setupPositionView(),"vec3").once()().toVarying("v_positionView").context({needsPositionReassign:!0}),zp=bi.negate().toVarying("v_positionViewDirection").normalize().toVar("positionViewDirection");class i1 extends te{static get type(){return"FrontFacingNode"}constructor(){super("bool"),this.isFrontFacingNode=!0}generate(t){const{renderer:e,material:n}=t;return e.coordinateSystem===Ts&&n.side===XM?"false":t.getFrontFacing()}}const s1=St(i1),kh=jn(s1).mul(2).sub(1),r1=Vh("normal","vec3"),o1=Ie(s=>s.geometry.hasAttribute("normal")===!1?(console.warn('TSL.NormalNode: Vertex attribute "normal" not found on geometry.'),oe(0,1,0)):r1,"vec3").once()().toVar("normalLocal"),a1=bi.dFdx().cross(bi.dFdy()).normalize().toVar("normalFlat"),Sr=Ie(s=>{let t;return s.material.flatShading===!0?t=a1:t=Di(Vp(o1),"v_normalView").normalize(),t},"vec3").once()().toVar("normalView"),Bp=Ie(s=>s.context.setupNormal().context({getUV:null}),"vec3").once()().mul(kh).toVar("transformedNormalView"),Vp=Ie(([s],t)=>{const e=t.renderer.nodes.modelNormalViewMatrix;if(e!==null)return e.transformDirection(s);const n=t1.mul(s);return Ha.transformDirection(n)});class c1 extends To{static get type(){return"MaxMipLevelNode"}constructor(t){super(0),this._textureNode=t,this.updateType=Fe.FRAME}get textureNode(){return this._textureNode}get texture(){return this._textureNode.value}update(){const t=this.texture,e=t.images,n=e&&e.length>0?e[0]&&e[0].image||e[0]:t.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const l1=tt(c1);let Hr,Gr;class Ce extends te{static get type(){return"ScreenNode"}constructor(t){super(),this.scope=t,this.isViewportNode=!0}getNodeType(){return this.scope===Ce.VIEWPORT?"vec4":"vec2"}getUpdateType(){let t=Fe.NONE;return(this.scope===Ce.SIZE||this.scope===Ce.VIEWPORT)&&(t=Fe.RENDER),this.updateType=t,t}update({renderer:t}){const e=t.getRenderTarget();this.scope===Ce.VIEWPORT?e!==null?Gr.copy(e.viewport):(t.getViewport(Gr),Gr.multiplyScalar(t.getPixelRatio())):e!==null?(Hr.width=e.width,Hr.height=e.height):t.getDrawingBufferSize(Hr)}setup(){const t=this.scope;let e=null;return t===Ce.SIZE?e=Je(Hr||(Hr=new Un)):t===Ce.VIEWPORT?e=Je(Gr||(Gr=new Qi)):e=Mo(kp.div(kf)),e}generate(t){if(this.scope===Ce.COORDINATE){let e=t.getFragCoord();if(t.isFlipY()){const n=t.getNodeProperties(kf).outputNode.build(t);e=`${t.getType("vec2")}( ${e}.x, ${n}.y - ${e}.y )`}return e}return super.generate(t)}}Ce.COORDINATE="coordinate";Ce.VIEWPORT="viewport";Ce.SIZE="size";Ce.UV="uv";const Hh=St(Ce,Ce.UV),kf=St(Ce,Ce.SIZE),kp=St(Ce,Ce.COORDINATE),Hp=St(Ce,Ce.VIEWPORT);Hp.zw;Hp.xy;const Ga=(s=0)=>Vh("uv"+(s>0?s:""),"vec2");class h1 extends te{static get type(){return"TextureSizeNode"}constructor(t,e=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=t,this.levelNode=e}generate(t,e){const n=this.textureNode.build(t,"property"),i=this.levelNode===null?"0":this.levelNode.build(t,"int");return t.format(`${t.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(t),e)}}const Hf=tt(h1);class Wa extends To{static get type(){return"TextureNode"}constructor(t,e=null,n=null,i=null){super(t),this.isTextureNode=!0,this.uvNode=e,this.levelNode=n,this.biasNode=i,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Fe.NONE,this.referenceNode=null,this._value=t,this._matrixUniform=null,this.setUpdateMatrix(e===null)}set value(t){this.referenceNode?this.referenceNode.value=t:this._value=t}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===rp?"uvec4":this.value.type===ZM?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Ga(this.value.channel)}updateReference(){return this.value}getTransformedUV(t){return this._matrixUniform===null&&(this._matrixUniform=Je(this.value.matrix)),this._matrixUniform.mul(oe(t,1)).xy}setUpdateMatrix(t){return this.updateMatrix=t,this.updateType=t?Fe.RENDER:Fe.NONE,this}setupUV(t,e){const n=this.value;return t.isFlipY()&&(n.image instanceof ImageBitmap&&n.flipY===!0||n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(this.sampler?e=e.flipY():e=e.setY(mp(Hf(this,this.levelNode).y).sub(e.y).sub(1))),e}setup(t){const e=t.getNodeProperties(this);e.referenceNode=this.referenceNode;const n=this.value;if(!n||n.isTexture!==!0)throw new Error("THREE.TSL: `texture( value )` function expects a valid instance of THREE.Texture().");let i=this.uvNode;(i===null||t.context.forceUVContext===!0)&&t.context.getUV&&(i=t.context.getUV(this)),i||(i=this.getDefaultUV()),this.updateMatrix===!0&&(i=this.getTransformedUV(i)),i=this.setupUV(t,i);let r=this.levelNode;r===null&&t.context.getTextureLevel&&(r=t.context.getTextureLevel(this)),e.uvNode=i,e.levelNode=r,e.biasNode=this.biasNode,e.compareNode=this.compareNode,e.gradNode=this.gradNode,e.depthNode=this.depthNode}generateUV(t,e){return e.build(t,this.sampler===!0?"vec2":"ivec2")}generateSnippet(t,e,n,i,r,o,a,c){const l=this.value;let h;return i?h=t.generateTextureLevel(l,e,n,i,o):r?h=t.generateTextureBias(l,e,n,r,o):c?h=t.generateTextureGrad(l,e,n,c,o):a?h=t.generateTextureCompare(l,e,n,a,o):this.sampler===!1?h=t.generateTextureLoad(l,e,n,o):h=t.generateTexture(l,e,n,o),h}generate(t,e){const n=this.value,i=t.getNodeProperties(this),r=super.generate(t,"property");if(e==="sampler")return r+"_sampler";if(t.isReference(e))return r;{const o=t.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:h,levelNode:u,biasNode:f,compareNode:d,depthNode:_,gradNode:g}=i,m=this.generateUV(t,h),p=u?u.build(t,"float"):null,T=f?f.build(t,"float"):null,S=_?_.build(t,"int"):null,x=d?d.build(t,"float"):null,w=g?[g[0].build(t,"vec2"),g[1].build(t,"vec2")]:null,b=t.getVarFromNode(this);a=t.getPropertyName(b);const A=this.generateSnippet(t,r,m,p,T,S,x,w);t.addLineFlowCode(`${a} = ${A}`,this),o.snippet=A,o.propertyName=a}let c=a;const l=this.getNodeType(t);return t.needsToWorkingColorSpace(n)&&(c=Ip(Xl(c,l),n.colorSpace).setup(t).build(t,l)),t.format(c,l,e)}}setSampler(t){return this.sampler=t,this}getSampler(){return this.sampler}uv(t){return console.warn("THREE.TextureNode: .uv() has been renamed. Use .sample() instead."),this.sample(t)}sample(t){const e=this.clone();return e.uvNode=ot(t),e.referenceNode=this.getSelf(),ot(e)}blur(t){const e=this.clone();return e.biasNode=ot(t).mul(l1(e)),e.referenceNode=this.getSelf(),ot(e)}level(t){const e=this.clone();return e.levelNode=ot(t),e.referenceNode=this.getSelf(),ot(e)}size(t){return Hf(this,t)}bias(t){const e=this.clone();return e.biasNode=ot(t),e.referenceNode=this.getSelf(),ot(e)}compare(t){const e=this.clone();return e.compareNode=ot(t),e.referenceNode=this.getSelf(),ot(e)}grad(t,e){const n=this.clone();return n.gradNode=[ot(t),ot(e)],n.referenceNode=this.getSelf(),ot(n)}depth(t){const e=this.clone();return e.depthNode=ot(t),e.referenceNode=this.getSelf(),ot(e)}serialize(t){super.serialize(t),t.value=this.value.toJSON(t.meta).uuid,t.sampler=this.sampler,t.updateMatrix=this.updateMatrix,t.updateType=this.updateType}deserialize(t){super.deserialize(t),this.value=t.meta.textures[t.value],this.sampler=t.sampler,this.updateMatrix=t.updateMatrix,this.updateType=t.updateType}update(){const t=this.value,e=this._matrixUniform;e!==null&&(e.value=t.matrix),t.matrixAutoUpdate===!0&&t.updateMatrix()}clone(){const t=new this.constructor(this.value,this.uvNode,this.levelNode,this.biasNode);return t.sampler=this.sampler,t}}const u1=tt(Wa);function Gf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}let tr;class f1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tr===void 0&&(tr=Gf("canvas")),tr.width=t.width,tr.height=t.height;const n=tr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=tr}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Gf("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d1=0;class Gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uc(i[o].image)):r.push(Uc(i[o]))}else r=Uc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Uc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?f1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p1=0;class si extends wh{constructor(t=si.DEFAULT_IMAGE,e=si.DEFAULT_MAPPING,n=Jo,i=Jo,r=ip,o=sp,a=QM,c=$M,l=si.DEFAULT_ANISOTROPY,h=Ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=lr(),this.name="",this.source=new Gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Un(0,0),this.repeat=new Un(1,1),this.center=new Un(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new li,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ef:t.x=t.x-Math.floor(t.x);break;case Jo:t.x=t.x<0?0:1;break;case Af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ef:t.y=t.y-Math.floor(t.y);break;case Jo:t.y=t.y<0?0:1;break;case Af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Th;si.DEFAULT_ANISOTROPY=1;class m1 extends si{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=va,this.minFilter=va,this.generateMipmaps=!1,this.needsUpdate=!0}}const Wr=new Un;class g1 extends Wa{static get type(){return"ViewportTextureNode"}constructor(t=Hh,e=null,n=null){n===null&&(n=new m1,n.minFilter=sp),super(n,t,e),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Fe.FRAME}updateBefore(t){const e=t.renderer;e.getDrawingBufferSize(Wr);const n=this.value;(n.image.width!==Wr.width||n.image.height!==Wr.height)&&(n.image.width=Wr.width,n.image.height=Wr.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,e.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){const t=new this.constructor(this.uvNode,this.levelNode,this.value);return t.generateMipmaps=this.generateMipmaps,t}}class Wh extends si{constructor(t,e,n,i,r,o,a,c,l,h=Rc){if(h!==Rc&&h!==wf)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rc&&(n=rp),n===void 0&&h===wf&&(n=JM),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:va,this.minFilter=c!==void 0?c:va,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}let Oc=null;class _1 extends g1{static get type(){return"ViewportDepthTextureNode"}constructor(t=Hh,e=null){Oc===null&&(Oc=new Wh),super(t,e,Oc)}}const x1=tt(_1);class cn extends te{static get type(){return"ViewportDepthNode"}constructor(t,e=null){super("float"),this.scope=t,this.valueNode=e,this.isViewportDepthNode=!0}generate(t){const{scope:e}=this;return e===cn.DEPTH_BASE?t.getFragDepth():super.generate(t)}setup({camera:t}){const{scope:e}=this,n=this.valueNode;let i=null;if(e===cn.DEPTH_BASE)n!==null&&(i=Wp().assign(n));else if(e===cn.DEPTH)t.isPerspectiveCamera?i=y1(bi.z,Vr,kr):i=pa(bi.z,Vr,kr);else if(e===cn.LINEAR_DEPTH)if(n!==null)if(t.isPerspectiveCamera){const r=Gp(n,Vr,kr);i=pa(r,Vr,kr)}else i=n;else i=pa(bi.z,Vr,kr);return i}}cn.DEPTH_BASE="depthBase";cn.DEPTH="depth";cn.LINEAR_DEPTH="linearDepth";const pa=(s,t,e)=>s.add(t).div(t.sub(e)),y1=(s,t,e)=>t.add(s).mul(e).div(e.sub(t).mul(s)),Gp=(s,t,e)=>t.mul(e).div(e.sub(t).mul(s).sub(e)),Wp=tt(cn,cn.DEPTH_BASE),v1=St(cn,cn.DEPTH),M1=tt(cn,cn.LINEAR_DEPTH);x1();v1.assign=s=>Wp(s);const zc=new Ct,S1=new Ct,T1=new li;class E1{constructor(t=new Ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zc.subVectors(n,e).cross(S1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||T1.getNormalMatrix(t),i=this.coplanarPoint(zc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wf=new ai,Xf=new ap;class Ao{constructor(t=0,e=0,n=0,i=Ao.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ao.DEFAULT_ORDER="XYZ";class Xp extends wh{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qi(0,0,t,e),this.scissorTest=!1,this.viewport=new Qi(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ip,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new si(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}new E1;new Ct;new Ct;new Ct;new ai;new Ct(0,0,-1);new Qi;new Ct;new Ct;new Qi;new Un;const A1=new Xp;Hh.flipX();A1.depthTexture=new Wh(1,1);const qf=new Ao,Bc=new ai,w1=Je(0).onReference(({material:s})=>s).onObjectUpdate(({material:s})=>s.refractionRatio),b1=Je(new ai).onReference(function(s){return s.material}).onObjectUpdate(function({material:s,scene:t}){const e=t.environment!==null&&s.envMap===null?t.environmentRotation:s.envMapRotation;return e?(qf.copy(e),Bc.makeRotationFromEuler(qf)):Bc.identity(),Bc}),C1=zp.negate().reflect(Bp),R1=zp.negate().refract(Bp,w1),N1=C1.transformDirection(Ha).toVar("reflectVector"),P1=R1.transformDirection(Ha).toVar("reflectVector");class D1 extends Wa{static get type(){return"CubeTextureNode"}constructor(t,e=null,n=null,i=null){super(t,e,n,i),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){const t=this.value;return t.mapping===qM?N1:t.mapping===YM?P1:(console.error('THREE.CubeTextureNode: Mapping "%s" not supported.',t.mapping),oe(0,0,0))}setUpdateMatrix(){}setupUV(t,e){const n=this.value;return(t.renderer.coordinateSystem===Ta||!n.isRenderTargetTexture)&&(e=oe(e.x.negate(),e.yz)),b1.mul(e)}generateUV(t,e){return e.build(t,"vec3")}}const I1=tt(D1);class L1 extends vo{static get type(){return"ReferenceElementNode"}constructor(t,e){super(t,e),this.referenceNode=t,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(t){const e=super.generate(t),n=this.referenceNode.getNodeType(),i=this.getNodeType();return t.format(e,n,i)}}class qp extends te{static get type(){return"ReferenceNode"}constructor(t,e,n=null,i=null){super(),this.property=t,this.uniformType=e,this.object=n,this.count=i,this.properties=t.split("."),this.reference=n,this.node=null,this.group=null,this.name=null,this.updateType=Fe.OBJECT}element(t){return ot(new L1(this,ot(t)))}setGroup(t){return this.group=t,this}label(t){return this.name=t,this}setNodeType(t){let e=null;this.count!==null?e=ZE(null,t,this.count):Array.isArray(this.getValueFromReference())?e=Op(null,t):t==="texture"?e=u1(null):t==="cubeTexture"?e=I1(null):e=Je(null,t),this.group!==null&&e.setGroup(this.group),this.name!==null&&e.label(this.name),this.node=e.getSelf()}getNodeType(t){return this.node===null&&(this.updateReference(t),this.updateValue()),this.node.getNodeType(t)}getValueFromReference(t=this.reference){const{properties:e}=this;let n=t[e[0]];for(let i=1;i<e.length;i++)n=n[e[i]];return n}updateReference(t){return this.reference=this.object!==null?this.object:t.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const t=this.getValueFromReference();Array.isArray(t)?this.node.array=t:this.node.value=t}}const Aa=(s,t,e)=>ot(new qp(s,t,e));class F1 extends qp{static get type(){return"MaterialReferenceNode"}constructor(t,e,n=null){super(t,e,n),this.material=n,this.isMaterialReferenceNode=!0}updateReference(t){return this.reference=this.material!==null?this.material:t.material,this.reference}}const U1=(s,t,e=null)=>ot(new F1(s,t,e)),Yp=Ie(s=>(s.geometry.hasAttribute("tangent")===!1&&s.geometry.computeTangents(),Vh("tangent","vec4")))(),O1=Yp.xyz.toVar("tangentLocal"),$p=e1.mul(wi(O1,0)).xyz.toVarying("v_tangentView").normalize().toVar("tangentView"),z1=s=>s.mul(Yp.w).xyz,B1=Di(z1(Sr.cross($p)),"v_bitangentView").normalize().toVar("bitangentView"),V1=So($p,B1,Sr),k1=Ie(s=>{const{eye_pos:t,surf_norm:e,mapN:n,uv:i}=s,r=t.dFdx(),o=t.dFdy(),a=i.dFdx(),c=i.dFdy(),l=e,h=o.cross(l),u=l.cross(r),f=h.mul(a.x).add(u.mul(c.x)),d=h.mul(a.y).add(u.mul(c.y)),_=f.dot(f).max(d.dot(d)),g=kh.mul(_.inverseSqrt());return vp(f.mul(n.x,g),d.mul(n.y,g),l.mul(n.z)).normalize()});class H1 extends sn{static get type(){return"NormalMapNode"}constructor(t,e=null){super("vec3"),this.node=t,this.scaleNode=e,this.normalMapType=bf}setup(t){const{normalMapType:e,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=oe(i.xy.mul(n),i.z));let r=null;return e===tS?r=Vp(i):e===bf&&(t.hasGeometryAttribute("tangent")===!0?r=V1.mul(i).normalize():r=k1({eye_pos:bi,surf_norm:Sr,mapN:i,uv:Ga()})),r}}const Yf=tt(H1),G1=Ie(({textureNode:s,bumpScale:t})=>{const e=i=>s.cache().context({getUV:r=>i(r.uvNode||Ga()),forceUVContext:!0}),n=jn(e(i=>i));return Mo(jn(e(i=>i.add(i.dFdx()))).sub(n),jn(e(i=>i.add(i.dFdy()))).sub(n)).mul(t)}),W1=Ie(s=>{const{surf_pos:t,surf_norm:e,dHdxy:n}=s,i=t.dFdx().normalize(),r=t.dFdy().normalize(),o=e,a=r.cross(o),c=o.cross(i),l=i.dot(a).mul(kh),h=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(e).sub(h).normalize()});class X1 extends sn{static get type(){return"BumpMapNode"}constructor(t,e=null){super("vec3"),this.textureNode=t,this.scaleNode=e}setup(){const t=this.scaleNode!==null?this.scaleNode:1,e=G1({textureNode:this.textureNode,bumpScale:t});return W1({surf_pos:bi,surf_norm:Sr,dHdxy:e})}}const q1=tt(X1),$f=new Map;class X extends te{static get type(){return"MaterialNode"}constructor(t){super(),this.scope=t}getCache(t,e){let n=$f.get(t);return n===void 0&&(n=U1(t,e),$f.set(t,n)),n}getFloat(t){return this.getCache(t,"float")}getColor(t){return this.getCache(t,"color")}getTexture(t){return this.getCache(t==="map"?"map":t+"Map","texture")}setup(t){const e=t.context.material,n=this.scope;let i=null;if(n===X.COLOR){const r=e.color!==void 0?this.getColor(n):oe();e.map&&e.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===X.OPACITY){const r=this.getFloat(n);e.alphaMap&&e.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alpha")):i=r}else if(n===X.SPECULAR_STRENGTH)e.specularMap&&e.specularMap.isTexture===!0?i=this.getTexture("specular").r:i=jn(1);else if(n===X.SPECULAR_INTENSITY){const r=this.getFloat(n);e.specularIntensityMap&&e.specularIntensityMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r}else if(n===X.SPECULAR_COLOR){const r=this.getColor(n);e.specularColorMap&&e.specularColorMap.isTexture===!0?i=r.mul(this.getTexture(n).rgb):i=r}else if(n===X.ROUGHNESS){const r=this.getFloat(n);e.roughnessMap&&e.roughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).g):i=r}else if(n===X.METALNESS){const r=this.getFloat(n);e.metalnessMap&&e.metalnessMap.isTexture===!0?i=r.mul(this.getTexture(n).b):i=r}else if(n===X.EMISSIVE){const r=this.getFloat("emissiveIntensity"),o=this.getColor(n).mul(r);e.emissiveMap&&e.emissiveMap.isTexture===!0?i=o.mul(this.getTexture(n)):i=o}else if(n===X.NORMAL)e.normalMap?(i=Yf(this.getTexture("normal"),this.getCache("normalScale","vec2")),i.normalMapType=e.normalMapType):e.bumpMap?i=q1(this.getTexture("bump").r,this.getFloat("bumpScale")):i=Sr;else if(n===X.CLEARCOAT){const r=this.getFloat(n);e.clearcoatMap&&e.clearcoatMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===X.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);e.clearcoatRoughnessMap&&e.clearcoatRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===X.CLEARCOAT_NORMAL)e.clearcoatNormalMap?i=Yf(this.getTexture(n),this.getCache(n+"Scale","vec2")):i=Sr;else if(n===X.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));e.sheenColorMap&&e.sheenColorMap.isTexture===!0?i=r.mul(this.getTexture("sheenColor").rgb):i=r}else if(n===X.SHEEN_ROUGHNESS){const r=this.getFloat(n);e.sheenRoughnessMap&&e.sheenRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r,i=i.clamp(.07,1)}else if(n===X.ANISOTROPY)if(e.anisotropyMap&&e.anisotropyMap.isTexture===!0){const r=this.getTexture(n);i=gp(Xr.x,Xr.y,Xr.y.negate(),Xr.x).mul(r.rg.mul(2).sub(Mo(1)).normalize().mul(r.b))}else i=Xr;else if(n===X.IRIDESCENCE_THICKNESS){const r=Aa("1","float",e.iridescenceThicknessRange);if(e.iridescenceThicknessMap){const o=Aa("0","float",e.iridescenceThicknessRange);i=r.sub(o).mul(this.getTexture(n).g).add(o)}else i=r}else if(n===X.TRANSMISSION){const r=this.getFloat(n);e.transmissionMap?i=r.mul(this.getTexture(n).r):i=r}else if(n===X.THICKNESS){const r=this.getFloat(n);e.thicknessMap?i=r.mul(this.getTexture(n).g):i=r}else if(n===X.IOR)i=this.getFloat(n);else if(n===X.LIGHT_MAP)i=this.getTexture(n).rgb.mul(this.getFloat("lightMapIntensity"));else if(n===X.AO)i=this.getTexture(n).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);else{const r=this.getNodeType(t);i=this.getCache(n,r)}return i}}X.ALPHA_TEST="alphaTest";X.COLOR="color";X.OPACITY="opacity";X.SHININESS="shininess";X.SPECULAR="specular";X.SPECULAR_STRENGTH="specularStrength";X.SPECULAR_INTENSITY="specularIntensity";X.SPECULAR_COLOR="specularColor";X.REFLECTIVITY="reflectivity";X.ROUGHNESS="roughness";X.METALNESS="metalness";X.NORMAL="normal";X.CLEARCOAT="clearcoat";X.CLEARCOAT_ROUGHNESS="clearcoatRoughness";X.CLEARCOAT_NORMAL="clearcoatNormal";X.EMISSIVE="emissive";X.ROTATION="rotation";X.SHEEN="sheen";X.SHEEN_ROUGHNESS="sheenRoughness";X.ANISOTROPY="anisotropy";X.IRIDESCENCE="iridescence";X.IRIDESCENCE_IOR="iridescenceIOR";X.IRIDESCENCE_THICKNESS="iridescenceThickness";X.IOR="ior";X.TRANSMISSION="transmission";X.THICKNESS="thickness";X.ATTENUATION_DISTANCE="attenuationDistance";X.ATTENUATION_COLOR="attenuationColor";X.LINE_SCALE="scale";X.LINE_DASH_SIZE="dashSize";X.LINE_GAP_SIZE="gapSize";X.LINE_WIDTH="linewidth";X.LINE_DASH_OFFSET="dashOffset";X.POINT_SIZE="size";X.DISPERSION="dispersion";X.LIGHT_MAP="light";X.AO="ao";X.ALPHA_TEST;X.COLOR;X.SHININESS;X.EMISSIVE;X.OPACITY;X.SPECULAR;X.SPECULAR_INTENSITY;X.SPECULAR_COLOR;X.SPECULAR_STRENGTH;X.REFLECTIVITY;X.ROUGHNESS;X.METALNESS;X.NORMAL;X.CLEARCOAT;X.CLEARCOAT_ROUGHNESS;X.CLEARCOAT_NORMAL;X.ROTATION;X.SHEEN;X.SHEEN_ROUGHNESS;X.ANISOTROPY;X.IRIDESCENCE;X.IRIDESCENCE_IOR;X.IRIDESCENCE_THICKNESS;X.TRANSMISSION;X.THICKNESS;X.IOR;X.ATTENUATION_DISTANCE;X.ATTENUATION_COLOR;X.LINE_SCALE;X.LINE_DASH_SIZE;X.LINE_GAP_SIZE;X.LINE_WIDTH;X.LINE_DASH_OFFSET;X.POINT_SIZE;X.DISPERSION;X.LIGHT_MAP;X.AO;const Xr=Je(new Un).onReference(function(s){return s.material}).onRenderUpdate(function({material:s}){this.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation))}),qr=new Ao,Vc=new ai;class ln extends te{static get type(){return"SceneNode"}constructor(t=ln.BACKGROUND_BLURRINESS,e=null){super(),this.scope=t,this.scene=e}setup(t){const e=this.scope,n=this.scene!==null?this.scene:t.scene;let i;return e===ln.BACKGROUND_BLURRINESS?i=Aa("backgroundBlurriness","float",n):e===ln.BACKGROUND_INTENSITY?i=Aa("backgroundIntensity","float",n):e===ln.BACKGROUND_ROTATION?i=Je("mat4").label("backgroundRotation").setGroup(Mr).onRenderUpdate(()=>{const r=n.background;return r!==null&&r.isTexture&&r.mapping!==Th?(qr.copy(n.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,Vc.makeRotationFromEuler(qr)):Vc.identity(),Vc}):console.error("THREE.SceneNode: Unknown scope:",e),i}}ln.BACKGROUND_BLURRINESS="backgroundBlurriness";ln.BACKGROUND_INTENSITY="backgroundIntensity";ln.BACKGROUND_ROTATION="backgroundRotation";ln.BACKGROUND_BLURRINESS;ln.BACKGROUND_INTENSITY;ln.BACKGROUND_ROTATION;Ie(({texture:s,uv:t})=>{const n=oe().toVar();return wS(t.x.lessThan(1e-4),()=>{n.assign(oe(1,0,0))}).ElseIf(t.y.lessThan(1e-4),()=>{n.assign(oe(0,1,0))}).ElseIf(t.z.lessThan(1e-4),()=>{n.assign(oe(0,0,1))}).ElseIf(t.x.greaterThan(1-1e-4),()=>{n.assign(oe(-1,0,0))}).ElseIf(t.y.greaterThan(1-1e-4),()=>{n.assign(oe(0,-1,0))}).ElseIf(t.z.greaterThan(1-1e-4),()=>{n.assign(oe(0,0,-1))}).Else(()=>{const r=s.sample(t.add(oe(-.01,0,0))).r.sub(s.sample(t.add(oe(.01,0,0))).r),o=s.sample(t.add(oe(0,-.01,0))).r.sub(s.sample(t.add(oe(0,.01,0))).r),a=s.sample(t.add(oe(0,0,-.01))).r.sub(s.sample(t.add(oe(0,0,.01))).r);n.assign(oe(r,o,a))}),n.normalize()});const ra=new Un;class Y1 extends Wa{static get type(){return"PassTextureNode"}constructor(t,e){super(e),this.passNode=t,this.setUpdateMatrix(!1)}setup(t){return t.object.isQuadMesh&&this.passNode.build(t),super.setup(t)}clone(){return new this.constructor(this.passNode,this.value)}}class Zf extends Y1{static get type(){return"PassMultipleTextureNode"}constructor(t,e,n=!1){super(t,null),this.textureName=e,this.previousTexture=n}updateTexture(){this.value=this.previousTexture?this.passNode.getPreviousTexture(this.textureName):this.passNode.getTexture(this.textureName)}setup(t){return this.updateTexture(),super.setup(t)}clone(){return new this.constructor(this.passNode,this.textureName,this.previousTexture)}}class Xa extends sn{static get type(){return"PassNode"}constructor(t,e,n,i={}){super("vec4"),this.scope=t,this.scene=e,this.camera=n,this.options=i,this._pixelRatio=1,this._width=1,this._height=1;const r=new Wh;r.isRenderTargetTexture=!0,r.name="depth";const o=new Xp(this._width*this._pixelRatio,this._height*this._pixelRatio,Fs({type:jM},i));o.texture.name="output",o.depthTexture=r,this.renderTarget=o,this._textures={output:o.texture,depth:r},this._textureNodes={},this._linearDepthNodes={},this._viewZNodes={},this._previousTextures={},this._previousTextureNodes={},this._cameraNear=Je(0),this._cameraFar=Je(0),this._mrt=null,this._layers=null,this._resolution=1,this.isPassNode=!0,this.updateBeforeType=Fe.FRAME}setResolution(t){return this._resolution=t,this}getResolution(){return this._resolution}setLayers(t){return this._layers=t,this}getLayers(){return this._layers}setMRT(t){return this._mrt=t,this}getMRT(){return this._mrt}isGlobal(){return!0}getTexture(t){let e=this._textures[t];return e===void 0&&(e=this.renderTarget.texture.clone(),e.name=t,this._textures[t]=e,this.renderTarget.textures.push(e)),e}getPreviousTexture(t){let e=this._previousTextures[t];return e===void 0&&(e=this.getTexture(t).clone(),this._previousTextures[t]=e),e}toggleTexture(t){const e=this._previousTextures[t];if(e!==void 0){const n=this._textures[t],i=this.renderTarget.textures.indexOf(n);this.renderTarget.textures[i]=e,this._textures[t]=e,this._previousTextures[t]=n,this._textureNodes[t].updateTexture(),this._previousTextureNodes[t].updateTexture()}}getTextureNode(t="output"){let e=this._textureNodes[t];return e===void 0&&(e=ot(new Zf(this,t)),e.updateTexture(),this._textureNodes[t]=e),e}getPreviousTextureNode(t="output"){let e=this._previousTextureNodes[t];return e===void 0&&(this._textureNodes[t]===void 0&&this.getTextureNode(t),e=ot(new Zf(this,t,!0)),e.updateTexture(),this._previousTextureNodes[t]=e),e}getViewZNode(t="depth"){let e=this._viewZNodes[t];if(e===void 0){const n=this._cameraNear,i=this._cameraFar;this._viewZNodes[t]=e=Gp(this.getTextureNode(t),n,i)}return e}getLinearDepthNode(t="depth"){let e=this._linearDepthNodes[t];if(e===void 0){const n=this._cameraNear,i=this._cameraFar,r=this.getViewZNode(t);this._linearDepthNodes[t]=e=pa(r,n,i)}return e}setup({renderer:t}){return this.renderTarget.samples=this.options.samples===void 0?t.samples:this.options.samples,t.backend.isWebGLBackend===!0&&(this.renderTarget.samples=0),this.renderTarget.texture.type=t.getColorBufferType(),this.scope===Xa.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(t){const{renderer:e}=t,{scene:n}=this;let i,r;const o=e.getOutputRenderTarget();o&&o.isXRRenderTarget===!0?(r=1,i=e.xr.getCamera(),e.xr.updateCamera(i),ra.set(o.width,o.height)):(i=this.camera,r=e.getPixelRatio(),e.getSize(ra)),this._pixelRatio=r,this.setSize(ra.width,ra.height);const a=e.getRenderTarget(),c=e.getMRT(),l=i.layers.mask;this._cameraNear.value=i.near,this._cameraFar.value=i.far,this._layers!==null&&(i.layers.mask=this._layers.mask);for(const h in this._previousTextures)this.toggleTexture(h);e.setRenderTarget(this.renderTarget),e.setMRT(this._mrt),e.render(n,i),e.setRenderTarget(a),e.setMRT(c),i.layers.mask=l}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio*this._resolution,i=this._height*this._pixelRatio*this._resolution;this.renderTarget.setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Xa.COLOR="color";Xa.DEPTH="depth";oe(1.6605,-.1246,-.0182),oe(-.5876,1.1329,-.1006),oe(-.0728,-.0083,1.1187);oe(.6274,.0691,.0164),oe(.3293,.9195,.088),oe(.0433,.0113,.8956);function Zp(s){let t;const e=s.context.getViewZ;return e!==void 0&&(t=e(this)),(t||bi.z).negate()}Ie(([s,t],e)=>{const n=Zp(e);return Fh(s,t,n)});Ie(([s],t)=>{const e=Zp(t);return s.mul(s,e,e).negate().exp().oneMinus()});Ie(([s,t])=>wi(t.toFloat().mix(Bf.rgb,s.toVec3()),Bf.a));class $1 extends te{constructor(t){super(),this.scope=t}generate(t){const{scope:e}=this,{renderer:n}=t;n.backend.isWebGLBackend===!0?t.addFlowCode(`	// ${e}Barrier 
`):t.addLineFlowCode(`${e}Barrier()`,this)}}tt($1);class hi extends sn{static get type(){return"AtomicFunctionNode"}constructor(t,e,n,i=null){super("uint"),this.method=t,this.pointerNode=e,this.valueNode=n,this.storeNode=i}getInputType(t){return this.pointerNode.getNodeType(t)}getNodeType(t){return this.getInputType(t)}generate(t){const e=this.method,n=this.getNodeType(t),i=this.getInputType(t),r=this.pointerNode,o=this.valueNode,a=[];a.push(`&${r.build(t,i)}`),o!==null&&a.push(o.build(t,i));const c=`${t.getMethod(e,n)}( ${a.join(", ")} )`;if(this.storeNode!==null){const l=this.storeNode.build(t,i);t.addLineFlowCode(`${l} = ${c}`,this)}else t.addLineFlowCode(c,this)}}hi.ATOMIC_LOAD="atomicLoad";hi.ATOMIC_STORE="atomicStore";hi.ATOMIC_ADD="atomicAdd";hi.ATOMIC_SUB="atomicSub";hi.ATOMIC_MAX="atomicMax";hi.ATOMIC_MIN="atomicMin";hi.ATOMIC_AND="atomicAnd";hi.ATOMIC_OR="atomicOr";hi.ATOMIC_XOR="atomicXor";tt(hi);Ie(([s=Ga()],{renderer:t,material:e})=>{const n=jn(1).toVar(),i=Np(s.mul(2).sub(1));if(e.alphaToCoverage&&t.samples>1){const r=jn(i.fwidth()).toVar();n.assign(Fh(r.oneMinus(),r.add(1),i).oneMinus())}else i.greaterThan(1).discard();return n});function Z1(){const s=vf.load("static/3.jpg");s.magFilter=Fn;const t=vf.load("static/smoke_05.png");return console.log("紋理已加載"),{gradientTexture:s,particlesTexture:t}}function K1(s){const t=new A_({color:AM,gradientMap:s.gradientTexture}),e=new Yd({alphaMap:s.particlesTexture,color:wM,sizeAttenuation:!0,size:38,transparent:!0,depthWrite:!1,opacity:.25});return console.log("材質已加載"),{material:t,particlesMaterial:e}}function j1(s){const t=new In(new xh(1,.45,12,48),s),e=new In(new _h(1,2,24),s),n=new In(new yh(.8,.35,80,16),s);t.position.y=-4*0,e.position.y=-4*1,n.position.y=-4*2,t.position.x=2,e.position.x=-2,n.position.x=2;const i=[t,e,n];return console.log("模型已加載"),i}function J1(s,t){const e=new Float32Array(Mf*3),n=t.length>0?t.length:3;for(let o=0;o<Mf;o++){const a=o*3;e[a+0]=(Math.random()-.5)*10,e[a+1]=Bl*.5-Math.random()*Bl*n*2,e[a+2]=(Math.random()-.5)*14}const i=new zn;i.setAttribute("position",new Kn(e,3));const r=new E_(i,s);return console.log("粒子系統已加載"),r}function yi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Kp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tr={duration:.5,overwrite:!1,delay:0},Xh,He,pe,ri=1e8,Ze=1/ri,ql=Math.PI*2,Q1=ql/4,tA=0,jp=Math.sqrt,eA=Math.cos,nA=Math.sin,Be=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},Ri=function(t){return typeof t=="number"},qh=function(t){return typeof t=="undefined"},ci=function(t){return typeof t=="object"},un=function(t){return t!==!1},Yh=function(){return typeof window!="undefined"},oa=function(t){return Me(t)||Be(t)},Jp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},je=Array.isArray,Yl=/(?:-?\.?\d|\.)+/gi,Qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tm=/[+-]=-?[.\d]+/,em=/[^,'"\[\]\s]+/gi,iA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_e,Qn,$l,$h,En={},wa={},nm,im=function(t){return(wa=Er(t,En))&&mn},Zh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},oo=function(t,e){return!e&&console.warn(t)},sm=function(t,e){return t&&(En[t]=e)&&wa&&(wa[t]=e)||En},ao=function(){return 0},sA={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},rA={suppressEvents:!0},Kh={},Zi=[],Zl={},rm,vn={},Hc={},Kf=30,ga=[],jh="",Jh=function(t){var e=t[0],n,i;if(ci(e)||Me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ga.length;i--&&!ga[i].targetTest(e););n=ga[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Rm(t[i],n)))||t.splice(i,1);return t},As=function(t){return t._gsap||Jh(Ln(t))[0]._gsap},om=function(t,e,n){return(n=t[e])&&Me(n)?t[e]():qh(n)&&t.getAttribute&&t.getAttribute(e)||n},fn=function(t,e){return(t=t.split(",")).forEach(e)||t},Te=function(t){return Math.round(t*1e5)/1e5||0},Re=function(t){return Math.round(t*1e7)/1e7||0},ur=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},oA=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ba=function(){var t=Zi.length,e=Zi.slice(0),n,i;for(Zl={},Zi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},am=function(t,e,n,i){Zi.length&&!He&&ba(),t.render(e,n,He&&e<0&&(t._initted||t._startAt)),Zi.length&&!He&&ba()},cm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(em).length<2?e:Be(t)?t.trim():t},lm=function(t){return t},An=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},aA=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Er=function(t,e){for(var n in e)t[n]=e[n];return t},jf=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ci(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ca=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},eo=function(t){var e=t.parent||_e,n=t.keyframes?aA(je(t.keyframes)):An;if(un(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},cA=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},hm=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},qa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ts=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ws=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},lA=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Kl=function(t,e,n,i){return t._startAt&&(He?t._startAt.revert(ma):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},hA=function s(t){return!t||t._ts&&s(t.parent)},Jf=function(t){return t._repeat?Ar(t._tTime,t=t.duration()+t._rDelay)*t:0},Ar=function(t,e){var n=Math.floor(t=Re(t/e));return t&&n===t?n-1:n},Ra=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ya=function(t){return t._end=Re(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ze)||0))},$a=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ya(t),n._dirty||ws(n,t)),t},um=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ra(t.rawTime(),e),(!e._dur||wo(0,e.totalDuration(),n)-e._tTime>Ze)&&e.render(n,!0)),ws(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},ei=function(t,e,n,i){return e.parent&&ts(e),e._start=Re((Ri(n)?n:n||t!==_e?Nn(t,n,e):t._time)+e._delay),e._end=Re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hm(t,e,"_first","_last",t._sort?"_start":0),jl(e)||(t._recent=e),i||um(t,e),t._ts<0&&$a(t,t._tTime),t},fm=function(t,e){return(En.ScrollTrigger||Zh("scrollTrigger",e))&&En.ScrollTrigger.create(e,t)},dm=function(t,e,n,i,r){if(tu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!He&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rm!==Mn.frame)return Zi.push(t),t._lazy=[r,i],1},uA=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},jl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},fA=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&uA(t)&&!(!t._initted&&jl(t))||(t._ts<0||t._dp._ts<0)&&!jl(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=wo(0,t._tDur,e),h=Ar(c,a),t._yoyo&&h&1&&(o=1-o),h!==Ar(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||He||i||t._zTime===Ze||!e&&t._zTime){if(!t._initted&&dm(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Ze:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&Kl(t,e,n,!0),t._onUpdate&&!n&&Sn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Sn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ts(t,1),!n&&!He&&(Sn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},dA=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wr=function(t,e,n,i){var r=t._repeat,o=Re(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Re(o*(r+1)+t._rDelay*r):o,a>0&&!i&&$a(t,t._tTime=t._tDur*a),t.parent&&Ya(t),n||ws(t.parent,t),t},Qf=function(t){return t instanceof nn?ws(t):wr(t,t._dur)},pA={_start:0,endTime:ao,totalDuration:ao},Nn=function s(t,e,n){var i=t.labels,r=t._recent||pA,o=t.duration()>=ri?r.endTime(!1):t._dur,a,c,l;return Be(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(je(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},no=function(t,e,n){var i=Ri(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=un(c.vars.inherit)&&c.parent;o.immediateRender=un(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new be(e[0],o,e[r+1])},ns=function(t,e){return t||t===0?e(t):e},wo=function(t,e,n){return n<t?t:n>e?e:n},$e=function(t,e){return!Be(t)||!(e=iA.exec(t))?"":e[1]},mA=function(t,e,n){return ns(n,function(i){return wo(t,e,i)})},Jl=[].slice,pm=function(t,e){return t&&ci(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ci(t[0]))&&!t.nodeType&&t!==Qn},gA=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Be(i)&&!e||pm(i,1)?(r=n).push.apply(r,Ln(i)):n.push(i)})||n},Ln=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Be(t)&&!n&&($l||!br())?Jl.call((e||$h).querySelectorAll(t),0):je(t)?gA(t,n):pm(t)?Jl.call(t,0):t?[t]:[]},Ql=function(t){return t=Ln(t)[0]||oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ln(e,n.querySelectorAll?n:n===t?oo("Invalid scope")||$h.createElement("div"):t)}},mm=function(t){return t.sort(function(){return .5-Math.random()})},gm=function(t){if(Me(t))return t;var e=ci(t)?t:{each:t},n=bs(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Be(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,m=o[g],p,T,S,x,w,b,A,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,ri])[1],!y){for(A=-1e8;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=c?Math.min(y,g)*h-.5:i%y,T=y===ri?0:c?g*u/y-.5:i/y|0,A=0,R=ri,b=0;b<g;b++)S=b%y-p,x=T-(b/y|0),m[b]=w=l?Math.abs(l==="y"?x:S):jp(S*S+x*x),w>A&&(A=w),w<R&&(R=w);i==="random"&&mm(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:l?l==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=$e(e.amount||e.each)||0,n=n&&g<0?wm(n):n}return g=(m[f]-m.min)/m.max||0,Re(m.b+(n?n(g):g)*m.v)+m.u}},th=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ri(n)?0:$e(n))}},_m=function(t,e){var n=je(t),i,r;return!n&&ci(t)&&(i=n=t.radius||ri,t.values?(t=Ln(t.values),(r=!Ri(t[0]))&&(i*=i)):t=th(t.increment)),ns(e,n?Me(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=ri,h=0,u=t.length,f,d;u--;)r?(f=t[u].x-a,d=t[u].y-c,f=f*f+d*d):f=Math.abs(t[u]-a),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:o,r||h===o||Ri(o)?h:h+$e(o)}:th(t))},xm=function(t,e,n,i){return ns(je(t)?!e:n===!0?!!(n=0):!i,function(){return je(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},_A=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},xA=function(t,e){return function(n){return t(parseFloat(n))+(e||$e(n))}},yA=function(t,e,n){return vm(t,e,0,1,n)},ym=function(t,e,n){return ns(n,function(i){return t[~~e(i)]})},vA=function s(t,e,n){var i=e-t;return je(t)?ym(t,s(0,t.length),e):ns(n,function(r){return(i+(r-t)%i)%i+t})},MA=function s(t,e,n){var i=e-t,r=i*2;return je(t)?ym(t,s(0,t.length-1),e):ns(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},co=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?em:Yl),n+=t.substr(e,i-e)+xm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},vm=function(t,e,n,i,r){var o=e-t,a=i-n;return ns(r,function(c){return n+((c-t)/o*a||0)})},SA=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var o=Be(t),a={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(je(t)&&!je(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Er(je(t)?[]:{},t));if(!h){for(c in e)Qh.call(a,t,c,"get",e[c]);r=function(_){return iu(_,a)||(o?t.p:t)}}}return ns(n,r)},td=function(t,e,n){var i=t.labels,r=ri,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Sn=function(t,e,n){var i=t.vars,r=i[e],o=pe,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Zi.length&&ba(),a&&(pe=a),h=c?r.apply(l,c):r.call(l),pe=o,h},Kr=function(t){return ts(t),t.scrollTrigger&&t.scrollTrigger.kill(!!He),t.progress()<1&&Sn(t,"onInterrupt"),t},rr,Mm=[],Sm=function(t){if(t)if(t=!t.name&&t.default||t,Yh()||t.headless){var e=t.name,n=Me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ao,render:iu,add:Qh,kill:zA,modifier:OA,rawVars:0},o={targetTest:0,get:0,getSetter:nu,aliases:{},register:0};if(br(),t!==i){if(vn[e])return;An(i,An(Ca(t,r),o)),Er(i.prototype,Er(r,Ca(t,o))),vn[i.prop=e]=i,t.targetTest&&(ga.push(i),Kh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}sm(e,i),t.register&&t.register(mn,i,dn)}else Mm.push(t)},le=255,jr={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},Gc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},Tm=function(t,e,n){var i=t?Ri(t)?[t>>16,t>>8&le,t&le]:0:jr.black,r,o,a,c,l,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),jr[t])i=jr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Yl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Gc(c+1/3,r,o),i[1]=Gc(c,r,o),i[2]=Gc(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Qp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Yl)||jr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/le,o=i[1]/le,a=i[2]/le,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Em=function(t){var e=[],n=[],i=-1;return t.split(Ki).forEach(function(r){var o=r.match(sr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ed=function(t,e,n){var i="",r=(t+i).match(Ki),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(f){return(f=Tm(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Em(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Ki,"1").split(sr),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(Ki),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},Ki=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in jr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),TA=/hsl[a]?\(/,Am=function(t){var e=t.join(" "),n;if(Ki.lastIndex=0,Ki.test(e))return n=TA.test(e),t[1]=ed(t[1],n),t[0]=ed(t[0],n,Em(t[1])),!0},lo,Mn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,f,d,_=function g(m){var p=s()-i,T=m===!0,S,x,w,b;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,S=w-o,(S>0||T)&&(b=++u.frame,f=w-u.time*1e3,u.time=w=w/1e3,o+=S+(S>=r?4:r-S),x=1),T||(c=l(g)),x)for(d=0;d<a.length;d++)a[d](w,f,b,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){nm&&(!$l&&Yh()&&(Qn=$l=window,$h=Qn.document||{},En.gsap=mn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(mn.version),im(wa||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),Mm.forEach(Sm)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},lo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),lo=0,l=ao},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,T){var S=p?function(x,w,b,A){m(x,w,b,A),u.remove(S)}:m;return u.remove(m),a[T?"unshift":"push"](S),br(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),br=function(){return!lo&&Mn.wake()},Gt={},EA=/^[\d.\-M][\d.\-,\s]/,AA=/["']/g,wA=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(AA,"").trim():+l,i=c.substr(a+1).trim();return e},bA=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},CA=function(t){var e=(t+"").split("("),n=Gt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wA(e[1])]:bA(t).split(",").map(cm)):Gt._CE&&EA.test(t)?Gt._CE("",t):n},wm=function(t){return function(e){return 1-t(1-e)}},bm=function s(t,e){for(var n=t._first,i;n;)n instanceof nn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},bs=function(t,e){return t&&(Me(t)?t:Gt[t]||CA(t))||e},Is=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return fn(t,function(a){Gt[a]=En[a]=r,Gt[o=a.toLowerCase()]=n;for(var c in r)Gt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Gt[a+"."+c]=r[c]}),r},Cm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Wc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ql*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*nA((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Cm(a);return r=ql/r,c.config=function(l,h){return s(t,l,h)},c},Xc=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Cm(n);return i.config=function(r){return s(t,r)},i};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Is(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;Is("Elastic",Wc("in"),Wc("out"),Wc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Is("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Is("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Is("Circ",function(s){return-(jp(1-s*s)-1)});Is("Sine",function(s){return s===1?1:-eA(s*Q1)+1});Is("Back",Xc("in"),Xc("out"),Xc());Gt.SteppedEase=Gt.steps=En.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ze;return function(a){return((i*wo(0,o,a)|0)+r)*n}}};Tr.ease=Gt["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jh+=s+","+s+"Params,"});var Rm=function(t,e){this.id=tA++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:om,this.set=e?e.getSetter:nu},ho=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wr(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),lo||Mn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(br(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for($a(this,n),!r._dp||r.parent||um(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),am(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ar(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ra(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(wo(-Math.abs(this._delay),this._tDur,r),i!==!1),Ya(this),lA(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ei(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ra(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=rA);var i=He;return He=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),He=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Nn(this,n),un(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,un(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ze)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Me(n)?n:lm,a=function(){var l=i.then;i.then=null,Me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Kr(this)},s}();An(ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var nn=function(s){Kp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=un(n.sortChildren),_e&&ei(n.parent||_e,yi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&fm(yi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return no(0,arguments,this),this},e.from=function(i,r,o){return no(1,arguments,this),this},e.fromTo=function(i,r,o,a){return no(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,eo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new be(i,r,Nn(this,o),1),this},e.call=function(i,r,o){return ei(this,be.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new be(i,o,Nn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,eo(o).immediateRender=un(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,eo(a).immediateRender=un(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Re(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,g,m,p,T,S,x,w,b,A;if(this!==_e&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,S=this._ts,p=!S,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Re(h%m),h===c?(g=this._repeat,f=l):(w=Re(h/m),g=~~w,g&&g===w&&(f=l,g--),f>l&&(f=l)),w=Ar(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),b&&g&1&&(f=l-f,A=1),g!==w&&!this._lock){var R=b&&w&1,y=R===(b&&g&1);if(g<w&&(R=!R),a=R?0:h%l?l:h,this._lock=1,this.render(a||(A?0:Re(g*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,a=R?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;bm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=dA(this,Re(a),Re(f)),T&&(h-=f-(f=T._start))),this._tTime=h,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(Sn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){T=0,_&&(h+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,o||He&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){T=0,_&&(h+=this._zTime=v?-1e-8:Ze);break}}d=_}}if(T&&!r&&(this.pause(),T.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ya(this),this.render(i,r,o);this._onUpdate&&!r&&Sn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&ts(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Sn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ri(r)||(r=Nn(this,r,i)),!(i instanceof ho)){if(je(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Be(i))return this.addLabel(i,r);if(Me(i))i=be.delayedCall(0,i);else return this}return this!==i?ei(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof be?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Be(i)?this.removeLabel(i):Me(i)?this.killTweensOf(i):(i.parent===this&&qa(this,i),i===this._recent&&(this._recent=this._last),ws(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Re(Mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Nn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=be.delayedCall(0,r||ao,o);return a.data="isPause",this._hasPause=1,ei(this,a,Nn(this,i))},e.removePause=function(i){var r=this._first;for(i=Nn(this,i);r;)r._start===i&&r.data==="isPause"&&ts(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Wi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ln(i),c=this._first,l=Ri(r),h;c;)c instanceof be?oA(c._targets,a)&&(l?(!Wi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Nn(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,_=be.to(o,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Ze,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&wr(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,An({startAt:{time:Nn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),td(this,Nn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),td(this,Nn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return ws(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=ri,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ei(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;wr(o,o===_e&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(_e._ts&&(am(_e,Ra(i,_e)),rm=Mn.frame),Mn.frame>=Kf){Kf+=Tn.autoSleep||120;var r=_e._first;if((!r||!r._ts)&&Tn.autoSleep&&Mn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Mn.sleep()}}},t}(ho);An(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var RA=function(t,e,n,i,r,o,a){var c=new dn(this._pt,t,e,0,1,Fm,null,r),l=0,h=0,u,f,d,_,g,m,p,T;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=co(i)),o&&(T=[n,i],o(T,t,e),n=T[0],i=T[1]),f=n.match(kc)||[];u=kc.exec(i);)_=u[0],g=i.substring(l,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ur(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=kc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(tm.test(i)||p)&&(c.e=0),this._pt=c,c},Qh=function(t,e,n,i,r,o,a,c,l,h){Me(i)&&(i=i(r||0,t,o));var u=t[e],f=n!=="get"?n:Me(u)?l?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,d=Me(u)?l?LA:Im:eu,_;if(Be(i)&&(~i.indexOf("random(")&&(i=co(i)),i.charAt(1)==="="&&(_=ur(f,i)+($e(f)||0),(_||_===0)&&(i=_))),!h||f!==i||eh)return!isNaN(f*i)&&i!==""?(_=new dn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?UA:Lm,0,d),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Zh(e,i),RA.call(this,t,e,f,i,d,c||Tn.stringFilter,l))},NA=function(t,e,n,i,r){if(Me(t)&&(t=io(t,r,e,n,i)),!ci(t)||t.style&&t.nodeType||je(t)||Jp(t))return Be(t)?io(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=io(t[a],r,e,n,i);return o},Nm=function(t,e,n,i,r,o){var a,c,l,h;if(vn[t]&&(a=new vn[t]).init(r,a.rawVars?e[t]:NA(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new dn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==rr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Wi,eh,tu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,T=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Xh,x=t.timeline,w,b,A,R,y,v,N,O,U,W,Y,G,K;if(x&&(!f||!r)&&(r="none"),t._ease=bs(r,Tr.ease),t._yEase=u?wm(bs(u===!0?r:u,Tr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(O=m[0]?As(m[0]).harness:0,G=O&&i[O.prop],w=Ca(i,Kh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?ma:sA),g._lazy=0),o){if(ts(t._startAt=be.set(m,An({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&un(c),startAt:null,delay:0,onUpdate:l&&function(){return Sn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He||!a&&!d)&&t._startAt.revert(ma),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),A=An({overwrite:!1,data:"isFromStart",lazy:a&&!g&&un(c),immediateRender:a,stagger:0,parent:p},w),G&&(A[O.prop]=G),ts(t._startAt=be.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He?t._startAt.revert(ma):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ze,Ze);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&un(c)||c&&!_,b=0;b<m.length;b++){if(y=m[b],N=y._gsap||Jh(m)[b]._gsap,t._ptLookup[b]=W={},Zl[N.id]&&Zi.length&&ba(),Y=T===m?b:T.indexOf(y),O&&(U=new O).init(y,G||w,t,Y,T)!==!1&&(t._pt=R=new dn(t._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(k){W[k]=R}),U.priority&&(v=1)),!O||G)for(A in w)vn[A]&&(U=Nm(A,w,t,Y,y,T))?U.priority&&(v=1):W[A]=R=Qh.call(t,y,A,"get",w[A],Y,T,0,i.stringFilter);t._op&&t._op[b]&&t.kill(y,t._op[b]),S&&t._pt&&(Wi=t,_e.killTweensOf(y,W,t.globalTime(e)),K=!t.parent,Wi=0),t._pt&&c&&(Zl[N.id]=1)}v&&Um(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,f&&e<=0&&x.render(ri,!0,!0)},PA=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return eh=1,t.vars[e]="+=0",tu(t,a),eh=0,c?oo(e+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Te(n)+$e(u.e)),u.b&&(u.b=h.s+$e(u.b))},DA=function(t,e){var n=t[0]?As(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=Er({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},IA=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(je(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},io=function(t,e,n,i,r){return Me(t)?t.call(e,n,i,r):Be(t)&&~t.indexOf("random(")?co(t):t},Pm=jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dm={};fn(Pm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Dm[s]=1});var be=function(s){Kp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:eo(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,T=i.parent||_e,S=(je(n)||Jp(n)?Ri(n[0]):"length"in i)?[n]:Ln(n),x,w,b,A,R,y,v,N;if(a._targets=S.length?Jh(S):oo("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||oa(l)||oa(h)){if(i=a.vars,x=a.timeline=new nn({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:S}),x.kill(),x.parent=x._dp=yi(a),x._start=0,f||oa(l)||oa(h)){if(A=S.length,v=f&&gm(f),ci(f))for(R in f)~Pm.indexOf(R)&&(N||(N={}),N[R]=f[R]);for(w=0;w<A;w++)b=Ca(i,Dm),b.stagger=0,p&&(b.yoyoEase=p),N&&Er(b,N),y=S[w],b.duration=+io(l,yi(a),w,y,S),b.delay=(+io(h,yi(a),w,y,S)||0)-a._delay,!f&&A===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(y,b,v?v(w,y,S):0),x._ease=Gt.none;x.duration()?l=h=0:a.timeline=0}else if(_){eo(An(x.vars.defaults,{ease:"none"})),x._ease=bs(_.ease||i.ease||"none");var O=0,U,W,Y;if(je(_))_.forEach(function(G){return x.to(S,G,">")}),x.duration();else{b={};for(R in _)R==="ease"||R==="easeEach"||IA(R,_[R],b,_.easeEach);for(R in b)for(U=b[R].sort(function(G,K){return G.t-K.t}),O=0,w=0;w<U.length;w++)W=U[w],Y={ease:W.e,duration:(W.t-(w?U[w-1].t:0))/100*l},Y[R]=W.v,x.to(S,Y,O),O+=Y.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return d===!0&&!Xh&&(Wi=yi(a),_e.killTweensOf(S),Wi=0),ei(T,yi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===Re(T._time)&&un(u)&&hA(yi(a))&&T.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),m&&fm(yi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Ze&&!h?c:i<Ze?0:i,f,d,_,g,m,p,T,S,x;if(!l)fA(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,S=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(f=Re(u%g),u===c?(_=this._repeat,f=l):(m=Re(u/g),_=~~m,_&&_===m?(f=l,_--):f>l&&(f=l)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=l-f),m=Ar(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(S&&this._yEase&&bm(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Re(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(dm(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(x||this._ease)(f/l),this._from&&(this.ratio=T=1-T),f&&!a&&!r&&!_&&(Sn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Kl(this,i,r,o),Sn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Sn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Kl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ts(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Sn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){lo||Mn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||tu(this,l),h=this._ease(l/this._dur),PA(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):($a(this,0),this.parent||hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Kr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!He),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Wi&&Wi.vars.overwrite!==!0)._first||Kr(this),this.parent&&o!==this.timeline.totalDuration()&&wr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Ln(i):a,l=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!r||r==="all")&&cA(a,c))return r==="all"&&(this._pt=0),Kr(this);for(u=this._op=this._op||[],r!=="all"&&(Be(r)&&(g={},fn(r,function(T){return g[T]=1}),r=g),r=DA(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],r==="all"?(u[p]=r,_=f,d={}):(d=u[p]=u[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&qa(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Kr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return no(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return no(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return _e.killTweensOf(i,r,o)},t}(ho);An(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(s){be[s]=function(){var t=new nn,e=Jl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var eu=function(t,e,n){return t[e]=n},Im=function(t,e,n){return t[e](n)},LA=function(t,e,n,i){return t[e](i.fp,n)},FA=function(t,e,n){return t.setAttribute(e,n)},nu=function(t,e){return Me(t[e])?Im:qh(t[e])&&t.setAttribute?FA:eu},Lm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},UA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Fm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},iu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},OA=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},zA=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?qa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},BA=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Um=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},dn=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Lm,this.d=c||this,this.set=l||eu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=BA,this.m=n,this.mt=r,this.tween=i},s}();fn(jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Kh[s]=1});En.TweenMax=En.TweenLite=be;En.TimelineLite=En.TimelineMax=nn;_e=new nn({sortChildren:!1,defaults:Tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Am;var Cs=[],_a={},VA=[],nd=0,kA=0,qc=function(t){return(_a[t]||VA).map(function(e){return e()})},nh=function(){var t=Date.now(),e=[];t-nd>2&&(qc("matchMediaInit"),Cs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Qn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),qc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),nd=t,qc("matchMedia"))},Om=function(){function s(e,n){this.selector=n&&Ql(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kA++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Me(n)&&(r=i,i=n,n=Me);var o=this,a=function(){var l=pe,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=Ql(r)),pe=o,u=i.apply(o,arguments),Me(u)&&o._r.push(u),pe=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Me?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof nn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof be)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Cs.length;o--;)Cs[o].id===this.id&&Cs.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),HA=function(){function s(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ci(n)||(n={matches:n});var o=new Om(0,r||this.scope),a=o.conditions={},c,l,h;pe&&!o.selector&&(o.selector=pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=Qn.matchMedia(n[l]),c&&(Cs.indexOf(o)<0&&Cs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(nh):c.addEventListener("change",nh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Na={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sm(i)})},timeline:function(t){return new nn(t)},getTweensOf:function(t,e){return _e.getTweensOf(t,e)},getProperty:function(t,e,n,i){Be(t)&&(t=Ln(t)[0]);var r=As(t||{}).get,o=n?lm:cm;return n==="native"&&(n=""),t&&(e?o((vn[e]&&vn[e].get||r)(t,e,n,i)):function(a,c,l){return o((vn[a]&&vn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Ln(t),t.length>1){var i=t.map(function(h){return mn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=vn[e],a=As(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;rr._pt=0,u.init(t,n?h+n:h,rr,0,[t]),u.render(1,u),rr._pt&&iu(1,rr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=mn.to(t,An((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return _e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=bs(t.ease,Tr.ease)),jf(Tr,t||{})},config:function(t){return jf(Tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!vn[a]&&!En[a]&&oo(e+" effect requires "+a+" plugin.")}),Hc[e]=function(a,c,l){return n(Ln(a),An(c||{},r),l)},o&&(nn.prototype[e]=function(a,c,l){return this.add(Hc[e](a,ci(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Gt[t]=bs(e)},parseEase:function(t,e){return arguments.length?bs(t,e):Gt},getById:function(t){return _e.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new nn(t),i,r;for(n.smoothChildTiming=un(t.smoothChildTiming),_e.remove(n),n._dp=0,n._time=n._tTime=_e._time,i=_e._first;i;)r=i._next,(e||!(!i._dur&&i instanceof be&&i.vars.onComplete===i._targets[0]))&&ei(n,i,i._start-i._delay),i=r;return ei(_e,n,0),n},context:function(t,e){return t?new Om(t,e):pe},matchMedia:function(t){return new HA(t)},matchMediaRefresh:function(){return Cs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||nh()},addEventListener:function(t,e){var n=_a[t]||(_a[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=_a[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:vA,wrapYoyo:MA,distribute:gm,random:xm,snap:_m,normalize:yA,getUnit:$e,clamp:mA,splitColor:Tm,toArray:Ln,selector:Ql,mapRange:vm,pipe:_A,unitize:xA,interpolate:SA,shuffle:mm},install:im,effects:Hc,ticker:Mn,updateRoot:nn.updateRoot,plugins:vn,globalTimeline:_e,core:{PropTween:dn,globals:sm,Tween:be,Timeline:nn,Animation:ho,getCache:As,_removeLinkedListItem:qa,reverting:function(){return He},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return Xh=t}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Na[s]=be[s]});Mn.add(nn.updateRoot);rr=Na.to({},{duration:0});var GA=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},WA=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=GA(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Yc=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Be(r)&&(c={},fn(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}WA(a,r)}}}},mn=Na.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)He?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Yc("roundProps",th),Yc("modifiers"),Yc("snap",_m))||Na;be.version=nn.version=mn.version="3.12.7";nm=1;Yh()&&br();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var id,Xi,fr,su,Es,sd,ru,XA=function(){return typeof window!="undefined"},Ni={},xs=180/Math.PI,dr=Math.PI/180,er=Math.atan2,rd=1e8,ou=/([A-Z])/g,qA=/(left|right|width|margin|padding|x)/i,YA=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ih=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$A=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KA=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Bm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},jA=function(t,e,n){return t.style[e]=n},JA=function(t,e,n){return t.style.setProperty(e,n)},QA=function(t,e,n){return t._gsap[e]=n},tw=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ew=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},nw=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},xe="transform",pn=xe+"Origin",iw=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ni&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=vi(i,a)}):this.tfm[t]=o.x?o[t]:vi(i,t),t===pn&&(this.tfm.zOrigin=o.zOrigin);else return ii.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=xe}(r||e)&&this.props.push(t,e,r[t])},Vm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},sw=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(ou,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ru(),(!r||!r.isStart)&&!n[xe]&&(Vm(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},km=function(t,e){var n={target:t,props:[],revert:sw,save:iw};return t._gsap||mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Hm,sh=function(t,e){var n=Xi.createElementNS?Xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xi.createElement(t);return n&&n.style?n:Xi.createElement(t)},oi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ou,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Cr(e)||e,1)||""},od="O,Moz,ms,Ms,Webkit".split(","),Cr=function(t,e,n){var i=e||Es,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(od[o]+t in r););return o<0?null:(o===3?"ms":o>=0?od[o]:"")+t},rh=function(){XA()&&window.document&&(id=window,Xi=id.document,fr=Xi.documentElement,Es=sh("div")||{style:{}},sh("div"),xe=Cr(xe),pn=xe+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hm=!!Cr("perspective"),ru=mn.core.reverting,su=1)},ad=function(t){var e=t.ownerSVGElement,n=sh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),fr.appendChild(n);try{r=i.getBBox()}catch(o){}return n.removeChild(i),fr.removeChild(n),r},cd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Gm=function(t){var e,n;try{e=t.getBBox()}catch(i){e=ad(t),n=1}return e&&(e.width||e.height)||n||(e=ad(t)),e&&!e.width&&!e.x&&!e.y?{x:+cd(t,["x","cx","x1"])||0,y:+cd(t,["y","cy","y1"])||0,width:0,height:0}:e},Wm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Gm(t))},Ds=function(t,e){if(e){var n=t.style,i;e in Ni&&e!==pn&&(e=xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ou,"-$1").toLowerCase())):n.removeAttribute(e)}},qi=function(t,e,n,i,r,o){var a=new dn(t._pt,e,n,0,1,o?Bm:zm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},ld={deg:1,rad:1,turn:1},rw={grid:1,flex:1},es=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Es.style,c=qA.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!r||ld[i]||ld[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),p=t.getCTM&&Wm(t),(d||o==="%")&&(Ni[e]||~e.indexOf("adius")))return _=p?t.getBBox()[c?"width":"height"]:t[h],Te(d?r/_*u:r/100*_);if(a[c?"width":"height"]=u+(f?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Xi||!g.appendChild)&&(g=Xi.body),m=g._gsap,m&&d&&m.width&&c&&m.time===Mn.time&&!m.uncache)return Te(r/m.width*u);if(d&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=u+i,_=t[h],T?t.style[e]=T:Ds(t,e)}else(d||o==="%")&&!rw[oi(g,"display")]&&(a.position=oi(t,"position")),g===t&&(a.position="static"),g.appendChild(Es),_=Es[h],g.removeChild(Es),a.position="absolute";return c&&d&&(m=As(g),m.time=Mn.time,m.width=g[h]),Te(f?_*r/u:_&&r?u/_*r:0)},vi=function(t,e,n,i){var r;return su||rh(),e in ii&&e!=="transform"&&(e=ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ni[e]&&e!=="transform"?(r=fo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Da(oi(t,pn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Pa[e]&&Pa[e](t,e,n)||oi(t,e)||om(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?es(t,e,r,n)+n:r},ow=function(t,e,n,i){if(!n||n==="none"){var r=Cr(e,t,1),o=r&&oi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new dn(this._pt,t.style,e,0,1,Fm),c=0,l=0,h,u,f,d,_,g,m,p,T,S,x,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=oi(t,e)||i,g?t.style[e]=g:Ds(t,e)),h=[n,i],Am(h),n=h[0],i=h[1],f=n.match(sr)||[],w=i.match(sr)||[],w.length){for(;u=sr.exec(i);)m=u[0],T=i.substring(c,u.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=ur(d,m)+x),p=parseFloat(m),S=m.substr((p+"").length),c=sr.lastIndex-S.length,S||(S=S||Tn.units[e]||x,c===i.length&&(i+=S,a.e+=S)),x!==S&&(d=es(t,e,g,S)||0),a._pt={_next:a._pt,p:T||l===1?T:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Bm:zm;return tm.test(i)&&(a.e=0),this._pt=a,a},hd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aw=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=hd[n]||n,e[1]=hd[i]||i,e.join(" ")},cw=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Ni[a]&&(c=1,a=a==="transformOrigin"?pn:xe),Ds(n,a);c&&(Ds(n,xe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fo(n,1),o.uncache=1,Vm(i)))}},Pa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new dn(t._pt,e,n,0,0,cw);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},uo=[1,0,0,1,0,0],Xm={},qm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ud=function(t){var e=oi(t,xe);return qm(e)?uo:e.substr(7).match(Qp).map(Te)},au=function(t,e){var n=t._gsap||As(t),i=t.style,r=ud(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?uo:r):(r===uo&&!t.offsetParent&&t!==fr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,fr.appendChild(t)),r=ud(t),c?i.display=c:Ds(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):fr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},oh=function(t,e,n,i,r,o){var a=t._gsap,c=r||au(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],T=c[5],S=e.split(" "),x=parseFloat(S[0])||0,w=parseFloat(S[1])||0,b,A,R,y;n?c!==uo&&(A=d*m-_*g)&&(R=x*(m/A)+w*(-g/A)+(g*T-m*p)/A,y=x*(-_/A)+w*(d/A)-(d*T-_*p)/A,x=R,w=y):(b=Gm(t),x=b.x+(~S[0].indexOf("%")?x/100*b.width:x),w=b.y+(~(S[1]||S[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&a.smooth?(p=x-l,T=w-h,a.xOffset=u+(p*d+T*g)-p,a.yOffset=f+(p*_+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[pn]="0px 0px",o&&(qi(o,a,"xOrigin",l,x),qi(o,a,"yOrigin",h,w),qi(o,a,"xOffset",u,a.xOffset),qi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+w)},fo=function(t,e){var n=t._gsap||new Rm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=oi(t,pn)||"0",h,u,f,d,_,g,m,p,T,S,x,w,b,A,R,y,v,N,O,U,W,Y,G,K,k,rt,at,gt,Dt,ee,Z,it;return h=u=f=g=m=p=T=S=x=0,d=_=1,n.svg=!!(t.getCTM&&Wm(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[xe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[xe]!=="none"?c[xe]:"")),i.scale=i.rotate=i.translate="none"),A=au(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),l=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),oh(t,K||l,!!K||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,b=n.yOrigin||0,A!==uo&&(N=A[0],O=A[1],U=A[2],W=A[3],h=Y=A[4],u=G=A[5],A.length===6?(d=Math.sqrt(N*N+O*O),_=Math.sqrt(W*W+U*U),g=N||O?er(O,N)*xs:0,T=U||W?er(U,W)*xs+g:0,T&&(_*=Math.abs(Math.cos(T*dr))),n.svg&&(h-=w-(w*N+b*U),u-=b-(w*O+b*W))):(it=A[6],ee=A[7],at=A[8],gt=A[9],Dt=A[10],Z=A[11],h=A[12],u=A[13],f=A[14],R=er(it,Dt),m=R*xs,R&&(y=Math.cos(-R),v=Math.sin(-R),K=Y*y+at*v,k=G*y+gt*v,rt=it*y+Dt*v,at=Y*-v+at*y,gt=G*-v+gt*y,Dt=it*-v+Dt*y,Z=ee*-v+Z*y,Y=K,G=k,it=rt),R=er(-U,Dt),p=R*xs,R&&(y=Math.cos(-R),v=Math.sin(-R),K=N*y-at*v,k=O*y-gt*v,rt=U*y-Dt*v,Z=W*v+Z*y,N=K,O=k,U=rt),R=er(O,N),g=R*xs,R&&(y=Math.cos(R),v=Math.sin(R),K=N*y+O*v,k=Y*y+G*v,O=O*y-N*v,G=G*y-Y*v,N=K,Y=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Te(Math.sqrt(N*N+O*O+U*U)),_=Te(Math.sqrt(G*G+it*it)),R=er(Y,G),T=Math.abs(R)>2e-4?R*xs:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qm(oi(t,xe)),K&&t.setAttribute("transform",K))),Math.abs(T)>90&&Math.abs(T)<270&&(r?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Te(d),n.scaleY=Te(_),n.rotation=Te(g)+a,n.rotationX=Te(m)+a,n.rotationY=Te(p)+a,n.skewX=T+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[pn]=Da(l)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?hw:Hm?Ym:lw,n.uncache=0,n},Da=function(t){return(t=t.split(" "))[0]+" "+t[1]},$c=function(t,e,n){var i=$e(e);return Te(parseFloat(e)+parseFloat(es(t,"x",n+"px",i)))+i},lw=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ym(t,e)},ds="0deg",Yr="0px",ps=") ",Ym=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,S=n.zOrigin,x="",w=p==="auto"&&t&&t!==1||p===!0;if(S&&(u!==ds||h!==ds)){var b=parseFloat(h)*dr,A=Math.sin(b),R=Math.cos(b),y;b=parseFloat(u)*dr,y=Math.cos(b),o=$c(T,o,A*y*-S),a=$c(T,a,-Math.sin(b)*-S),c=$c(T,c,R*y*-S+S)}m!==Yr&&(x+="perspective("+m+ps),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(w||o!==Yr||a!==Yr||c!==Yr)&&(x+=c!==Yr||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ps),l!==ds&&(x+="rotate("+l+ps),h!==ds&&(x+="rotateY("+h+ps),u!==ds&&(x+="rotateX("+u+ps),(f!==ds||d!==ds)&&(x+="skew("+f+", "+d+ps),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ps),T.style[xe]=x||"translate(0, 0)"},hw=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,S=parseFloat(o),x=parseFloat(a),w,b,A,R,y;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=dr,l*=dr,w=Math.cos(c)*u,b=Math.sin(c)*u,A=Math.sin(c-l)*-f,R=Math.cos(c-l)*f,l&&(h*=dr,y=Math.tan(l-h),y=Math.sqrt(1+y*y),A*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),w*=y,b*=y)),w=Te(w),b=Te(b),A=Te(A),R=Te(R)):(w=u,R=f,b=A=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=es(d,"x",o,"px"),x=es(d,"y",a,"px")),(_||g||m||p)&&(S=Te(S+_-(_*w+g*A)+m),x=Te(x+g-(_*b+g*R)+p)),(i||r)&&(y=d.getBBox(),S=Te(S+i/100*y.width),x=Te(x+r/100*y.height)),y="matrix("+w+","+b+","+A+","+R+","+S+","+x+")",d.setAttribute("transform",y),T&&(d.style[xe]=y)},uw=function(t,e,n,i,r){var o=360,a=Be(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?xs:1),l=c-i,h=i+l+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-360)),u==="cw"&&l<0?l=(l+o*rd)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*rd)%o-~~(l/o)*o)),t._pt=f=new dn(t._pt,e,n,i,l,$A),f.e=h,f.u="deg",t._props.push(n),f},fd=function(t,e){for(var n in e)t[n]=e[n];return t},fw=function(t,e,n){var i=fd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[xe]=e,a=fo(n,1),Ds(n,xe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[xe],o[xe]=e,a=fo(n,1),o[xe]=l);for(c in Ni)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(d=$e(l),_=$e(h),u=d!==_?es(n,c,l,_):parseFloat(l),f=parseFloat(h),t._pt=new dn(t._pt,a,c,u,f-u,ih),t._pt.u=_||0,t._props.push(c));fd(a,i)};fn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Pa[t>1?"border"+s:s]=function(a,c,l,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return vi(a,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,d,u)}});var $m={name:"css",register:rh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,f,d,_,g,m,p,T,S,x,w,b,A,R;su||rh(),this.styles=this.styles||km(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(vn[g]&&Nm(g,e,n,i,t,r)))){if(d=typeof h,_=Pa[g],d==="function"&&(h=h.call(n,i,t,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=co(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ki.lastIndex=0,Ki.test(l)||(m=$e(l),p=$e(h)),p?m!==p&&(l=es(t,g,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],Be(l)&&~l.indexOf("random(")&&(l=co(l)),$e(l+"")||l==="auto"||(l+=Tn.units[g]||$e(vi(t,g))||""),(l+"").charAt(1)==="="&&(l=vi(t,g))):l=vi(t,g),f=parseFloat(l),T=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),u=parseFloat(h),g in ii&&(g==="autoAlpha"&&(f===1&&vi(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),qi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ii[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Ni,S){if(this.styles.save(g),x||(w=t._gsap,w.renderTransform&&!e.parseTransform||fo(t,e.parseTransform),b=e.smoothOrigin!==!1&&w.smooth,x=this._pt=new dn(this._pt,a,xe,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new dn(this._pt,w,"scaleY",w.scaleY,(T?ur(w.scaleY,T+u):u)-w.scaleY||0,ih),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(pn,0,a[pn]),h=aw(h),w.svg?oh(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&qi(this,w,"zOrigin",w.zOrigin,p),qi(this,a,g,Da(l),Da(h)));continue}else if(g==="svgOrigin"){oh(t,h,1,b,0,this);continue}else if(g in Xm){uw(this,w,g,f,T?ur(f,T+h):h);continue}else if(g==="smoothOrigin"){qi(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){fw(this,h,t);continue}}else g in a||(g=Cr(g)||g);if(S||(u||u===0)&&(f||f===0)&&!YA.test(h)&&g in a)m=(l+"").substr((f+"").length),u||(u=0),p=$e(h)||(g in Tn.units?Tn.units[g]:m),m!==p&&(f=es(t,g,l,p)),this._pt=new dn(this._pt,S?w:a,g,f,(T?ur(f,T+u):u)-f,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?KA:ih),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=ZA);else if(g in a)ow.call(this,t,g,l,T?T+h:h);else if(g in t)this.add(t,g,l||t[g],T?T+h:h,i,r);else if(g!=="parseTransform"){Zh(g,h);continue}S||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,l||t[g])),o.push(g)}}A&&Um(this)},render:function(t,e){if(e.tween._time||!ru())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:vi,aliases:ii,getSetter:function(t,e,n){var i=ii[e];return i&&i.indexOf(",")<0&&(e=i),e in Ni&&e!==pn&&(t._gsap.x||vi(t,"x"))?n&&sd===n?e==="scale"?tw:QA:(sd=n||{})&&(e==="scale"?ew:nw):t.style&&!qh(t.style[e])?jA:~e.indexOf("-")?JA:nu(t,e)},core:{_removeProperty:Ds,_getMatrix:au}};mn.utils.checkPrefix=Cr;mn.core.getStyleSaver=km;(function(s,t,e,n){var i=fn(s+","+t+","+e,function(r){Ni[r]=1});fn(t,function(r){Tn.units[r]="deg",Xm[r]=1}),ii[i[13]]=s+","+t,fn(n,function(r){var o=r.split(":");ii[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Tn.units[s]="px"});mn.registerPlugin($m);var Zm=mn.registerPlugin($m)||mn;Zm.core.Tween;const Ia={x:0,y:0};let Zc=0;function dw(s){!Array.isArray(s)||s.length===0||(window.addEventListener("scroll",()=>{const t=window.scrollY,e=Math.round(t/an.height);e!=Zc&&(Zc=e,Zm.to(s[Zc].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))}),console.log("滾動事件監聽器已設置"))}function pw(){window.addEventListener("mousemove",s=>{Ia.x=s.clientX/an.width-.5,Ia.y=s.clientY/an.height-.5}),console.log("鼠標移動事件監聽器已設置")}function dd(s){if(!s||s.length<3)return;const t=window.innerWidth<bM;s[0].position.x=t?0:2,s[1].position.x=t?0:-2,s[2].position.x=t?0:2}function mw(s,t,e){window.addEventListener("resize",()=>{an.width=window.innerWidth,an.height=window.innerHeight,s.aspect=an.width/an.height,s.updateProjectionMatrix(),t.setSize(an.width,an.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),dd(e),console.log("窗口尺寸已更新")}),dd(),console.log("響應式監聽器已設置")}function gw(s,t){const e=document.getElementById("meshColorPicker"),n=document.getElementById("particleColorPicker");e&&n?(s&&(e.value="#"+s.color.getHexString()),t&&(n.value="#"+t.color.getHexString()),e.addEventListener("input",a=>{const c=a.target.value;s.color.set(c)}),n.addEventListener("input",a=>{const c=a.target.value;t.color.set(c)}),console.log("顏色選擇器已設置")):console.error("顏色選擇器未找到");const i=document.getElementById("toggleColorButton"),r=document.querySelector(".color-controls");i&&r?(i.addEventListener("click",a=>{a.stopPropagation(),r.classList.toggle("is-open")}),document.addEventListener("click",a=>{r.classList.contains("is-open")&&!r.contains(a.target)&&!i.contains(a.target)&&r.classList.remove("is-open")}),console.log("顏色選擇器面板已設置")):console.error("顏色選擇器面板或按鈕未找到");const o=document.querySelectorAll(".glass-container ul li");if(o.length>0){const a=()=>{o.forEach(c=>{c.classList.remove("touch-hover")})};o.forEach(c=>{c.addEventListener("touchstart",function(h){a(),this.classList.add("touch-hover")},{passive:!0});const l=()=>c.classList.remove("touch-hover");c.addEventListener("touchend",l,{passive:!0}),c.addEventListener("touchcancel",l,{passive:!0})}),window.addEventListener("scroll",a,{passive:!0}),console.log("觸控裝置的 hover 效果已應用")}else console.error("觸控裝置的 hover 效果未應用，未找到導航欄項目");console.log("所有 DOM 交互已設置")}console.log("interactions.js 載入完成");const _w=new O_;let pd=0;function xw(s,t,e,n,i){const r=()=>{const o=_w.getElapsedTime(),a=o-pd;pd=o;const c=window.scrollY;t.position.y=-c/an.height*Bl;const l=Ia.x*.5,h=-Ia.y*.5;if(e.position.x+=(l-e.position.x)*5*a,e.position.y+=(h-e.position.y)*5*a,i&&i.length>0)for(const u of i)u.rotation.x+=a*.2,u.rotation.y+=a*.12;n.render(s,t),window.requestAnimationFrame(r)};r(),console.log("動畫循環已啟動")}console.log("動畫模組已加載");const md=document.querySelector("canvas.webgl");if(md){const s=MM(),{camera:t,cameraGroup:e}=TM(s),n=EM(md);SM(s);const i=Z1(),r=K1(i),o=j1(r.material);s.add(...o);const a=J1(r.particlesMaterial,o);s.add(a),mw(t,n,o),dw(o),pw(),gw(r.material,r.particlesMaterial),xw(s,t,e,n,o)}else throw new Error("錯誤：無法在頁面中找到 canvas.webgl 元素。應用無法初始化。");console.log("應用初始化完成！");
