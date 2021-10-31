// creator, description,top_ownerships, image_url
let nfts = {
   0: {
      emoji_link: "/static/img/node-root-face.png",
      owener: "ronchuck",
      creator: {},
      top_ownerships: [],
      image_url: "",
      emoji_nickname: "OmniMoji",
      link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/73815938769340366384073838527422825549722629275663006887499167190737353703425",
   },
};

const nftList = document.querySelector("#nft > .collection");
var j = 0;
var containerSize = window.innerHeight > document.body.clientWidth
   ?  document.body.clientWidth : window.innerHeight;
var safariCheck = isSafari();
var JsListItems;
var spriteImages = [];
var spriteTempImg = [];
var span = document.getElementById("span");
var counter = 0;
var scriptFlag = false;
var mobileCheck = false;
var spriteSrc = "";
var counterInc = 0;
var date = new Date();
var lastIncrementTime = date.getTime();
var currTime = date.getTime();
var downloadTimeInterval;
var intervalCounter = 0;
var prefixRef;
var head = document.getElementsByTagName("head");
var safariDesktop = document.createElement("div");
safariDesktop.setAttribute("id", "safariDesktop");
safariDesktop.setAttribute("style", "color:cornflowerblue");
var fadeSlow = document.getElementById("landing");
var cssInterval;
var emojiListDiv = document.getElementById("emojiListDiv");
var counterDrop = 0;
var parseCounter = 0;
// console.log(window.innerHeight)
var safariElementAsTextNode =
   '<h2 style="margin:30px;">emojiMandala.net</h2><p>currently in development for Safari on a desktop.<br>please visit with a different browser (Chrome, Firefox, Opera, or IE)<br><br>or visit on your mobile (also in Safari).</p><br><img width="400" src="http://emojimandala.net/static/img/ipad_spiral_light.gif"/><div id="creditSpanSafari"><a href="http://ronErlihStudio.com" target="_blank"><br><br><img width="50" height="auto" src="http://emojimandala.net/static/img/cloud_500.png"/><h3>ronErlihStudio</h3></a>';
var my_style = `
#emojiListDiv img{
   margin:0;padding:0;
}
   .fadeOut {
      -o-animation:fadeOut 10s 1 linear forwards;
      -ms-animation:fadeOut 10s 1 linear forwards;
      -moz-animation:fadeOut 10s 1 linear forwards;
      -webkit-animation:fadeOut 10s 1 linear forwards;
      animation:fadeOut 10s 1 linear forwards}
   .fadeSlow {
      -o-animation:fadeOutSlow 1s 1 linear forwards;
      -ms-animation:fadeOutSlow 1s 1 linear forwards;
      -moz-animation:fadeOutSlow 1s 1 linear forwards;
      -webkit-animation:fadeOutSlow 1s 1 linear forwards;
      animation:fadeOutSlow 1s 1 linear forwards}
   img{opacity:.8 }
   #top-links {
      position: fixed;
      display: inline-block;
      opacity: 1;
      z-index: 1500;
      left: 5px;
      top: 5px;
      padding:5px;
      color: cornflowerblue;
      line-height: 20px;
      
   }
   #top-links  a {text-decoration: revert;}
   #emojiListDiv {
      z-index:1000;
      position:absolute;
      left: ${(document.body.clientWidth - containerSize)/2}px;
      top: calc( calc(100vh - ${ containerSize}px) / 2);
      height:${containerSize}px;
      width:${containerSize}px;
      align-self:center;
      display:grid;
      ;-webkit-animation-name:spin;
      -webkit-animation-duration:54s;
      -webkit-animation-iteration-count:infinite
      ;-webkit-animation-timing-function:linear;
      -moz-animation-name:spin;
      -moz-animation-duration:54s;
      -moz-animation-iteration-count:infinite;
      -moz-animation-timing-function:linear;
      -ms-animation-name:spin;-ms-animation-duration:54s;
      -ms-animation-iteration-count:infinite;
      -ms-animation-timing-function:linear;
      animation-name:spin, scale;
      animation-duration:60s;
      animation-iteration-count:infinite;
      transform-origin: center;
   }
   #emojiListDiv img {
      clip:rect(3px,69px,69px,3px)
   }
  
   // @keyframes spin{
   //    0%{transform:rotate(0) }
   //    100%{transform:rotate(-360deg)}
   // }

   @keyframes spin {
      0% { transform: rotate(0deg)  scale(1.5,1.5);}
     20% { transform: rotate(-72deg) scale(2.9,2.9); }
     40% { transform: rotate(-144deg) scale(1.4,1.4);;}
     70% { transform: rotate(-252deg)  scale(0,0);}
     100% { transform: rotate(-360deg) scale(1.5,1.5); }
 }
   @-o-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}`;
   var mobile_style = my_style;
   "#emoji-container img{margin:0;padding:0}.fadeOut{-o-animation:fadeOut 10s 1 linear forwards;-ms-animation:fadeOut 10s 1 linear forwards;-moz-animation:fadeOut 10s 1 linear forwards;-webkit-animation:fadeOut 10s 1 linear forwards;animation:fadeOut 10s 1 linear forwards}.fadeSlow{-o-animation:fadeOutSlow 1s 1 linear forwards;-ms-animation:fadeOutSlow 1s 1 linear forwards;-moz-animation:fadeOutSlow 1s 1 linear forwards;-webkit-animation:fadeOutSlow 1s 1 linear forwards;animation:fadeOutSlow 1s 1 linear forwards}img{opacity:.8}#emojiListDiv{z-index:1000;position:relative;top:calc(50vh);height:auto;width:auto;-webkit-perspective:500px;-moz-perspective:500px;-o-perspective:500px;perspective:500px;-webkit-animation-name:spin;-webkit-animation-duration:54s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:spin;-moz-animation-duration:54s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:spin;-ms-animation-duration:54s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear;animation-name:spin;animation-duration:54s;animation-iteration-count:infinite;animation-timing-function:linear}@-ms-keyframes spin{0%{-ms-transform:rotate(0) scale(1.5,1.5)}25%{-ms-transform:rotate(-90deg) scale(0,0)}40%{-ms-transform:rotate(-144deg) scale(1,1)}70%{-ms-transform:rotate(-252deg) scale(2.4,2.4)}100%{-ms-transform:rotate(-360deg) scale(1.5,1.5)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0) scale(1.5,1.5)}25%{-moz-transform:rotate(-90deg) scale(0,0)}40%{-moz-transform:rotate(-144deg) scale(1,1)}70%{-moz-transform:rotate(-252deg) scale(2.4,2.4)}100%{-moz-transform:rotate(-360deg) scale(1.5,1.5)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) scale(1.5,1.5)}25%{-webkit-transform:rotate(-90deg) scale(0,0)}40%{-webkit-transform:rotate(-144deg) scale(1,1)}70%{-webkit-transform:rotate(-252deg) scale(2.4,2.4)}100%{-webkit-transform:rotate(-360deg) scale(1.5,1.5)}}@keyframes spin{0%{transform:rotate(0) scale(1.5,1.5)}20%{transform:rotate(-82deg) scale(2.9,2.9)}40%{transform:rotate(-144deg) scale(1.4,1.4)}70%{transform:rotate(-252deg) scale(0,0)}100%{transform:rotate(-360deg) scale(1.5,1.5)}}@-o-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}";
// "#emojiListDiv,img{margin:0;padding:0}.fadeOut{-o-animation:fadeOut 10s 1 linear forwards;-ms-animation:fadeOut 10s 1 linear forwards;-moz-animation:fadeOut 10s 1 linear forwards;-webkit-animation:fadeOut 10s 1 linear forwards;animation:fadeOut 10s 1 linear forwards}.fadeSlow{-o-animation:fadeOutSlow 1s 1 linear forwards;-ms-animation:fadeOutSlow 1s 1 linear forwards;-moz-animation:fadeOutSlow 1s 1 linear forwards;-webkit-animation:fadeOutSlow 1s 1 linear forwards;animation:fadeOutSlow 1s 1 linear forwards}img{opacity:.8}#emojiListDiv{z-index:1000;position:relative;top:calc(50vh);height:auto;width:auto;-webkit-perspective:500px;-moz-perspective:500px;-o-perspective:500px;perspective:500px;-webkit-animation-name:spin;-webkit-animation-duration:54s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:spin;-moz-animation-duration:54s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:spin;-ms-animation-duration:54s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear;animation-name:spin;animation-duration:54s;animation-iteration-count:infinite;animation-timing-function:linear}#emojiListDiv img{clip:rect(2px,70px,70px,2px)}@-ms-keyframes spin{0%{-ms-transform:rotate(0) scale(1.5,1.5)}25%{-ms-transform:rotate(-90deg) scale(0,0)}40%{-ms-transform:rotate(-144deg) scale(1,1)}70%{-ms-transform:rotate(-252deg) scale(2.4,2.4)}100%{-ms-transform:rotate(-360deg) scale(1.5,1.5)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0) scale(1.5,1.5)}25%{-moz-transform:rotate(-90deg) scale(0,0)}40%{-moz-transform:rotate(-144deg) scale(1,1)}70%{-moz-transform:rotate(-252deg) scale(2.4,2.4)}100%{-moz-transform:rotate(-360deg) scale(1.5,1.5)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) scale(1.5,1.5)}25%{-webkit-transform:rotate(-90deg) scale(0,0)}40%{-webkit-transform:rotate(-144deg) scale(1,1)}70%{-webkit-transform:rotate(-252deg) scale(2.4,2.4)}100%{-webkit-transform:rotate(-360deg) scale(1.5,1.5)}}@keyframes spin{0%{transform:rotate(0) scale(1.5,1.5)}20%{transform:rotate(-82deg) scale(2.9,2.9)}40%{transform:rotate(-144deg) scale(1.4,1.4)}70%{transform:rotate(-252deg) scale(0,0)}100%{transform:rotate(-360deg) scale(1.5,1.5)}}@-o-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}";
// "#emojiListDiv,img{margin:0;padding:0}.fadeOut{-o-animation:fadeOut 10s 1 linear forwards;-ms-animation:fadeOut 10s 1 linear forwards;-moz-animation:fadeOut 10s 1 linear forwards;-webkit-animation:fadeOut 10s 1 linear forwards;animation:fadeOut 10s 1 linear forwards}.fadeSlow{-o-animation:fadeOutSlow 1s 1 linear forwards;-ms-animation:fadeOutSlow 1s 1 linear forwards;-moz-animation:fadeOutSlow 1s 1 linear forwards;-webkit-animation:fadeOutSlow 1s 1 linear forwards;animation:fadeOutSlow 1s 1 linear forwards}img{opacity:.8}#emojiListDiv{z-index:1000;position:relative;top:calc(50vh);height:auto;width:auto;-webkit-perspective:500px;-moz-perspective:500px;-o-perspective:500px;perspective:500px;-webkit-animation-name:spin;-webkit-animation-duration:54s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:spin;-moz-animation-duration:54s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:spin;-ms-animation-duration:54s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear;animation-name:spin;animation-duration:54s;animation-iteration-count:infinite;animation-timing-function:linear}#emojiListDiv img{clip:rect(2px,70px,70px,2px)}@-ms-keyframes spin{0%{-ms-transform:rotate(0) scale(1.5,1.5)}25%{-ms-transform:rotate(-90deg) scale(0,0)}40%{-ms-transform:rotate(-144deg) scale(1,1)}70%{-ms-transform:rotate(-252deg) scale(2.4,2.4)}100%{-ms-transform:rotate(-360deg) scale(1.5,1.5)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0) scale(1.5,1.5)}25%{-moz-transform:rotate(-90deg) scale(0,0)}40%{-moz-transform:rotate(-144deg) scale(1,1)}70%{-moz-transform:rotate(-252deg) scale(2.4,2.4)}100%{-moz-transform:rotate(-360deg) scale(0,0)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) scale(0,0)}25%{-webkit-transform:rotate(-90deg) scale(0,0)}40%{-webkit-transform:rotate(-144deg) scale(0,0)}70%{-webkit-transform:rotate(-252deg) scale(0,0)}100%{-webkit-transform:rotate(-360deg) scale(0,0)}}@keyframes spin{0%{transform:rotate(0) scale(1,1)}20%{transform:rotate(-82deg) scale(1,1)}40%{transform:rotate(-144deg) scale(1,1)}70%{transform:rotate(-252deg) scale(0,0)}100%{transform:rotate(-360deg) scale(1,1)}}@-o-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}";
// "#emojiListDiv,img{margin:0;padding:0}.fadeOut{-o-animation:fadeOut 10s 1 linear forwards;-ms-animation:fadeOut 10s 1 linear forwards;-moz-animation:fadeOut 10s 1 linear forwards;-webkit-animation:fadeOut 10s 1 linear forwards;animation:fadeOut 10s 1 linear forwards}.fadeSlow{-o-animation:fadeOutSlow 1s 1 linear forwards;-ms-animation:fadeOutSlow 1s 1 linear forwards;-moz-animation:fadeOutSlow 1s 1 linear forwards;-webkit-animation:fadeOutSlow 1s 1 linear forwards;animation:fadeOutSlow 1s 1 linear forwards}img{opacity:.7}#emojiListDiv{z-index:1000}#emojiListDiv img{clip:rect(2px,70px,70px,2px)}@-ms-keyframes spin{0%{-ms-transform:rotate(0) scale(1.5,1.5)}25%{-ms-transform:rotate(-90deg) scale(0,0)}40%{-ms-transform:rotate(-144deg) scale(1,1)}70%{-ms-transform:rotate(-252deg) scale(2.4,2.4)}100%{-ms-transform:rotate(-360deg) scale(1.5,1.5)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0) scale(1.5,1.5)}25%{-moz-transform:rotate(-90deg) scale(0,0)}40%{-moz-transform:rotate(-144deg) scale(1,1)}70%{-moz-transform:rotate(-252deg) scale(2.4,2.4)}100%{-moz-transform:rotate(-360deg) scale(1.5,1.5)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) scale(1.5,1.5)}25%{-webkit-transform:rotate(-90deg) scale(0,0)}40%{-webkit-transform:rotate(-144deg) scale(1,1)}70%{-webkit-transform:rotate(-252deg) scale(2.4,2.4)}100%{-webkit-transform:rotate(-360deg) scale(1.5,1.5)}}@keyframes spin{0%{transform:rotate(0) scale(1.5,1.5)}20%{transform:rotate(-72deg) scale(2.9,2.9)}40%{transform:rotate(-144deg) scale(1.4,1.4)}70%{transform:rotate(-252deg) scale(0,0)}100%{transform:rotate(-360deg) scale(1.5,1.5)}}@-o-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%,50%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-ms-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutSlow{0%{opacity:1}100%{opacity:0}}";
var createImage = function (src) {
   var spriteImageObject = new Image();
   return spriteImageObject;
};
var spriteStyle = document.createElement("link");
spriteStyle.setAttribute("href", "static/css/cssSprites/emoji-0-lowRes.css");
spriteStyle.setAttribute("rel", "stylesheet");
spriteStyle.setAttribute("type", "text/css");
document.head.appendChild(spriteStyle);

var prefix = browserPrefix();
mobileAndTabletcheck();

$(document).ready(function () {
   platformStylesAndLogic();
});

function Mute() {
   document.getElementById("mute").style.display = "block";
   document.getElementById("unmute").style.display = "none";
   document.getElementById("audio").pause();
}
function Unmute() {
   document.getElementById("mute").style.display = "none";
   document.getElementById("unmute").style.display = "block";
   document.getElementById("audio").play();
}
function cloudLoaded() {
   fadeSlow.style.display = "block";
}
function browserPrefix() {
   var styles = window.getComputedStyle(document.documentElement, ""),
      pre = (Array.prototype.slice
         .call(styles)
         .join("")
         .match(/-(moz|webkit|ms)-/) ||
         (styles.OLink === "" && ["", "o"]))[1],
      dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
   pre = "-" + String(pre) + "-";

   return pre;
}
function mobileAndTabletcheck() {
   var check = false;
   (function (a) {
      if (
         /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            a
         ) ||
         /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
         )
      )
         check = true;
   })(navigator.userAgent || navigator.vendor || window.opera);
   mobileCheck = check;

   return check;
}
function isSafari() {
   return false;

   if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
      var safariCheck = true;
   } else {
      var safariCheck = false;
   }
   return safariCheck;
}

function reloadImageElement() {
   setTimeout(function () {
      this.src = this.src + "?timestamp=" + date.getTime();
      // console.log("in reloadImageElement on: " + this.src);
   }, 1000);
}

function loadEmojis() {
   for (j = 0; j <= 12; j++) {
      spriteTempImg.push(createImage());
      spriteTempImg[j].onload = incrementCounter;
      spriteTempImg[j].onerror = reloadImageElement;
      spriteSrc = "static/css/cssSprites/emoji-" + String(j) + "-lowRes.webp";
      spriteTempImg[j].src = spriteSrc;
   }
   for (i = 0; i <= 2371; i++) {
      spriteImages[i] = document.createElement("img");
      $(spriteImages[i]).attr("id", "emoji_0" + String(i));

      if (i == 2371) {
         spriteImages.shift();
         spriteImages.unshift(document.createElement("img"));
         $(spriteImages[0]).attr("id", "emoji_000");
         $(spriteImages[0]).attr("src", "/static/img/node-root-face.png");
         // console.log("sprite images increment");
         incrementCounter();
      }
   }
}
function cssListen() {
   var cssColorProp = window.getComputedStyle(emojiListDiv).getPropertyValue("color");
   //       console.log(`css property:                     ${cssColorProp}`);
   if (String(cssColorProp) == "rgb(0, 0, 0)") {
      clearInterval(cssInterval);
      $("#bestOnSpan, #loadingSpan, #creditSpan, #studioCredit", "#nft").css("display", "block");
      checkForBodyLoad();
   }
}
function platformStylesAndLogic() {
   if (mobileCheck == true) {
      document.getElementById("best").innerHTML = "(mobile edition)";
      document.getElementById("title-span").innerHTML =
         "<div><em>emojiMandala.net</em>";
      var myStyle = document.createElement("style");
      myStyle.innerHTML = mobile_style;
      document.head.appendChild(myStyle);
      cssInterval = setInterval(cssListen, 120);
   } else {
      if (safariCheck == false) {
         document.getElementById("best").innerHTML = "NFT";
         document.getElementById("title-span").innerHTML = `<div><em>emojiMandala.net</em></div>`;
         var myStyle = document.createElement("link");
         var myStyle = document.createElement("style");
         myStyle.innerHTML = my_style;
         document.head.appendChild(myStyle);
         cssInterval = setInterval(cssListen, 120);
      } else {
         document.body.insertBefore(safariDesktop, document.body.childNodes[0]);
         safariDesktop.innerHTML = safariElementAsTextNode;
      }
   }
   setTimeout(function () {
      if (!$("#myStyle")) {
         window.location.reload();
      }
   }, 4000);
}

function incrementCounter() {
   // console.log("onload event fired on image no. " + counter);
   counter++;

   if (true) {
      bar.style.width = counter / 0.13 + "%";
      if (counter == 13 && scriptFlag == false) {
         JsListItems = $("#hook").find("img");

         desktopClient();
         scriptFlag = true;
      }
   } else {
      bar.style.width = counter / 0.13 + "%";
      if (counter == 13 && scriptFlag == false) {
         mobileClient();

         scriptFlag = true;
      }
   }
}
function checkForBodyLoad() {
   fetchOpeanSeaApi();

   var lastEmoji = document.getElementById("lastBodyEmoji");
   lastEmoji.addEventListener("load", loadEmojis());
   if ($(this).complete) {
      lastEmoji.trigger("load");
   }
   lastEmoji.src = "static/img/emoji_00081.png";
}
function fetchOpeanSeaApi() {
   // fetch(
   //    "https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/73815938769340366384073838527422825549722629275663006887499167190737353703425/?format=json"
   // )
   //    .then((res) => res.json())
   //    .then((apiNfts) => {
   //       if (Array.isArray(apiNfts)) {
   //          return console.log({ apiNfts });
   //       }
   //       const { creator, description, top_ownerships, image_url, traits } = apiNfts;
   //       nfts = { 0: { creator, description, top_ownerships, image_url, traits } };

   //       loadNFTs();
   //    });
fetch(
   'https://nft.emojimandala.net/nfts'
)
   .then(res => res.json())
   .then((apiNfts) => {
      apiNfts.forEach(nft => {
         nfts[nft.emoji_id] = nft
      })
      console.log({nfts})
      loadNFTs();
     

   });
}
function loadNFTs() {
   Object.values(nfts).forEach((nft) => {
      const itmeEl = document.createElement("li");
      itmeEl.classList.add("collection-item", "avatar");
      // creator, description,top_ownerships, image_url
      itmeEl.innerHTML = `
           <img class="nft-icon " src=${nft.image_url} alt="" class="circle">
           <div class="nft-title"><em>${nft.name}</em><strong>${nft.nickname}</strong></div>
           <p style='display:flex; flex:1.5; align-items:center'> patron: 
           <img class="nft-icon" src=${nft.top_ownerships[0]?.owner.profile_img_url} alt="" class="circle">
           <em>${nft.top_ownerships[0]?.owner?.user?.username || "openSea"}</em>
           </p>
           <div class="nft-link">
            <a href=${nft.link} ><i class="material-icons">View on OpenSea.io</i></a>
           </div>

         `;
      nftList.appendChild(itmeEl);
   });
}
function desktopClient() {
   var angle;
   var windowWidth = window.innerWidth;
   var jsWindowWidth = windowWidth;
   var windowHeight = window.clientWidth;
   var containerHeight = 0;
   var containerWidth = 0;
   var emojiListDiv = document.getElementById("emojiListDiv");
   var cssLeft = 0;
   var cssRight = 0;
   var cssLeftEst = 0;
   var cssTopEst = 0;
   var forInterval;
   var i = 0;
   var emojiSize = 72;
   var article = document.getElementsByTagName("article");
   var header = document.getElementsByTagName("header");
   var sponsor = document.getElementsByClassName("sponsor");
   var container = document.getElementsByClassName("container");
   var adheader = document.getElementsByClassName("ad-header");

   if (document.getElementById("audio")) {
      document.getElementById("audio").play();
      Unmute();
   }
   var fadeOut = document.querySelectorAll("article, header, .sponsor, .container");
   for (x = 0; x <= fadeOut.length - 1; x++) {
      fadeOut[x].className += " fadeOut";
   }
   setTimeout(function () {
      for (x = 0; x <= header.length - 1; x++) {
         header[x].style.display = "none";
      }
      for (x = 0; x <= sponsor.length - 1; x++) {
         sponsor[x].style.display = "none";
      }
      for (x = 0; x <= container.length - 1; x++) {
         container[x].style.display = "none";
      }
      for (x = 0; x <= adheader.length - 1; x++) {
         adheader[x].style.display = "none";
      }
   }, 20000);
   fadeSlow.className += " fadeSlow";
   setTimeout(function () {
      fadeSlow.style.zIndex = -10;
      forInterval = setInterval(addEmoji, 120);
   }, 1000);

   function addEmoji() {
      if (i === 10) console.log(spriteImages[i])
      if (nfts[i]) {
         const nicknameContainer = document.createElement("div");
         nicknameContainer.style.position = "relative";
         nicknameContainer.style.zIndex = "30";
         const nicknameEl = document.createElement("div");
         const imgNftContainer = document.createElement("div");
         // nicknameEl.classList.add("rotateHue");

         nicknameEl.style = `
         font-size: 1em;
         word-spacing: 2px;
         font-family: georgia;
         color: cornflowerblue;
         left: 78px;
         font-style: italic;
         top: 33px;
         width: 160px;
         font-weight: 600;
         position: absolute;
         border-radius: 80px;
`
         imgNftContainer.style = `
         border: 2px dashed cornflowerblue;
         border-radius: 45px;
         
         width: 72px;         `
         // creator, description,top_ownerships, image_url

         const nicknameText = nfts[i].nickname;
         if(i === 609) console.log('img:',spriteImages[i])

         if (nicknameText) {
            
            nicknameEl.textContent = nicknameText
            nicknameContainer.classList.add("nft-emoji");
            nicknameContainer.appendChild(nicknameEl);
            spriteImages[i].classList.add("circle");

         }
         spriteImages[i].style.width = "72px";
         if (!nicknameText) {nicknameContainer.appendChild(spriteImages[i]);}
         else { imgNftContainer.appendChild(spriteImages[i]);
            nicknameContainer.appendChild(imgNftContainer)
         }
         spriteImages[i] = nicknameContainer;
      }

      angle = 0.1 * i + 0.1;

      cssLeft = (100 + i * 1.1) * Math.cos(angle * 1.8 + angle / 3) + ( containerSize /2 - emojiSize/1.8)  ;
      cssTop = (100 + i * 1.1) * Math.sin(angle * 1.8 + angle / 3) +  ( containerSize / 2 - emojiSize/2);

      if (i <= JsListItems.length - 1) {
         JsListItems[i].style.cssText = "display: none;";
      }
      spriteImages[i].style.cssText =
         "position: absolute;" +
         "left: " +
         cssLeft +
         "px;" +
         "top: " +
         cssTop +
         "px;" +
         prefix +
         "transform: rotateZ(" +
         (angle * angle * 2 + 220) +
         "deg) ;" +
         "opacity:calc(0.6 + " +
         angle / 100 +
         ");" +
         "width: " +
         emojiSize +
         "px!important;" +
         "height: " +
         emojiSize +
         "px!important;" +
         `z-index: ${nfts[i] ? '200!important;' : '200;'}` +
         "border: 0;" +
         "height: auto; display:block;visibility:visible;";

      emojiListDiv.appendChild(spriteImages[i]);

      emojiListDiv.style.cssText += "left: " + screen.width / 2 - $(emojiListDiv).width() / 2 + "px;";
      i++;
      if (i >= spriteImages.length) {
         clearInterval(forInterval);
      }
   }
}

function mobileClient() {
   var angle;

   var windowWidth = window.innerWidth;
   // console.log("screen width: " + windowWidth);
   var jsWindowWidth = windowWidth;
   var windowHeight = screen.height;
   var containerHeight = 0;
   var containerWidth = 0;
   var head = document.getElementsByTagName("head");

   var cssLeft = 0;
   var cssRight = 0;
   var cssLeftEst = 0;
   var cssTopEst = 0;
   var forInterval;
   var i = 0;
   //var emojiSize = jsWindowWidth * 0.25;
   var emojiSize = 72;
   var article = $("article").hide();
   var header = $("header").hide();
   var sponsor = $(".sponsor").hide();
   var container = $(".container").hide();
   var adheader = $(".ad-header").hide();

   document.getElementById("landing").style.display = "none";
   document.getElementById("mute").style.display = "block";

   forInterval = setInterval(addEmoji, 130);

   function addEmoji() {
      angle = 0.1 * i;
      spriteImages[i].style.cssText =
         "position: absolute;" +
         "left: " +
         (windowWidth - emojiSize) / 2 +
         "px ;" +
         "top: " +
         (windowHeight * 0.4 - emojiSize / 2) +
         "px;" +
         prefix +
         "transform: rotateZ(" +
         angle * angle * 2 +
         "deg) ;" +
         "width: " +
         emojiSize +
         "px!important;" +
         "height: " +
         emojiSize +
         "px!important;" +
         "display:block;visibility:visible;";
      emojiListDiv.appendChild(spriteImages[i]);
      i++;
      if (i >= spriteImages.length) {
         i--;
         for (var j = 0; j <= 5; j++) {
            spriteImages[i - j].style.display = "none";
         }
         clearInterval(forInterval);
         i = 0;
         forInterval = setInterval(addEmojiLoop, 130);
      }
      if (i >= 5) {
         spriteImages[i - 5].style.display = "none";
      }
   }

   function addEmojiLoop() {
      angle = 0.1 * i;
      $(spriteImages[i]).toggle("displayBlock");
      if (i == spriteImages.length) {
         for (j = 0; j <= 5; j++) {
            spriteImages[spriteImages.length - 1 - j].style.display = "none";
         }
         i = 0;
      }
      if (i >= 5) {
         spriteImages[i - 5].style.display = "none";
      }
      i++;
   }
}
