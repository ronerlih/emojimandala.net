
var j = 0;
var safariCheck = isSafari();
var JsListItems;
var spriteImages = [];
var spriteTempImg = [];
var span = document.getElementById('span');
var counter = 0;
var scriptFlag = false;
var mobileCheck = false;
var spriteSrc = "";
//var spriteImages = $("div[class^='emoji_000']").toArray();
var counterInc = 0;
var date = new Date();
var lastIncrementTime = date.getTime();
var currTime = date.getTime();
var downloadTimeInterval;
var intervalCounter = 0;
var prefixRef;
var head = document.getElementsByTagName("head");
var safariDesktop = document.createElement('div');
safariDesktop.setAttribute('id', 'safariDesktop');
safariDesktop.setAttribute('style', 'color:cornflowerblue');
var fadeSlow = document.getElementById('landing');
var cssInterval;
var emojiListDiv = document.getElementById('emojiListDiv');
var counterDrop = 0;
var parseCounter = 0;
var safariElementAsTextNode = '<h2 style="margin:30px;">emojiMandala.net</h2><p>currently in development for Safari on a desktop.<br>please visit with a different browser (Chrome, Firefox, Opera, or IE)<br><br>or visit on your mobile (also in Safari).</p><br><img width="400" src="http://emojimandala.net/static/img/ipad_spiral_light.gif"/><div id="creditSpanSafari"><a href="http://ronErlihStudio.com" target="_blank"><br><br><img width="50" height="auto" src="http://emojimandala.net/static/img/cloud_500.png"/><h3>ronErlihStudio</h3></a>';

var createImage = function(src) {
    var spriteImageObject = new Image();
    return spriteImageObject;
};
var spriteStyle = document.createElement('link');
spriteStyle.setAttribute('href', "static/css/cssSprites/emoji-0-lowRes.css");
spriteStyle.setAttribute('rel', 'stylesheet');
spriteStyle.setAttribute('type', 'text/css');
document.head.appendChild(spriteStyle);

//var pediaStyle = document.createElement('link');
//pediaStyle.setAttribute('href', "static/css/emojipedia.5146e661821a.css");
//pediaStyle.setAttribute('rel', 'stylesheet');
//pediaStyle.setAttribute('type', 'text/css');
//document.head.appendChild(pediaStyle);

var prefix = browserPrefix();
mobileAndTabletcheck();

$(document).ready(function() {
    platformStylesAndLogic();
});

function Mute(){
    document.getElementById('mute').style.display = "block";
    document.getElementById('unmute').style.display = "none";
    document.getElementById('audio').pause();
}
function Unmute(){
    document.getElementById('mute').style.display = "none";
    document.getElementById('unmute').style.display = "block";
    document.getElementById('audio').play();
}
function cloudLoaded(){
    fadeSlow.style.display = "block";
}
function browserPrefix() {
    var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
    .call(styles)
    .join('') 
    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    pre = "-" + String(pre) + "-";
    //console.log("prefix browser: " + pre);

    return pre;
};
function mobileAndTabletcheck() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) 
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    mobileCheck = check;

    return check;
};
function isSafari() {
    //var ua = navigator.userAgent.toLowerCase();
    if (navigator.userAgent.indexOf('Safari') != - 1 && navigator.userAgent.indexOf('Chrome') == - 1) {
        var safariCheck = true;
    } else {
        var safariCheck = false;
    }
    return safariCheck;

}

//function loadEmojis(){
//    for(i=0;i<=spriteImages.length-1;i++){
//        spriteImages[i].addEventListener( 'load', incrementCounter );
//    };
//}
function reloadImageElement(){
    this.src = this.src + "?timestamp=" + date.getTime();
    console.log('in reloadImageElement on: ' + this.src);
}

function loadEmojis() {
    for (j = 0; j <= 12; j++) {
        spriteTempImg.push(createImage());
        spriteTempImg[j].onload = incrementCounter;
        spriteTempImg[j].onerror = reloadImageElement;
        //$(document).head.appendChild(spriteTempImg[i]);
        spriteSrc = "static/css/cssSprites/emoji-" + String(j) + "-lowRes.png";
        spriteTempImg[j].src = spriteSrc;
        // if (this.complete) incrementCounter();
       // console.log(`${j} sprite added /n`)
    }
    console.log('sprite images onload for loop is done');
    for (i = 0; i <= 2371; i++) {
        spriteImages[i] = document.createElement('img');
        $(spriteImages[i]).attr('id', "emoji_0" + String(i));
        //document.head.appendChild(spriteImages[i]); 

        //if (spriteTempImg[i].complete) incrementCounter();
        //console.log(`prite src: ${spriteSrc}`);
        
//
//        if (mobileCheck == true) {
//            $(spriteImages[i]).addClass('spriteMobile');
//        }
        if(i == 2371)
        {
            console.log('sprite images increment');
             incrementCounter();
        }
    }

    
}
function cssListen() {
    var cssColorProp = window.getComputedStyle(emojiListDiv).getPropertyValue('color');
    //       console.log(`css property:                     ${cssColorProp}`);
    if ( String(cssColorProp) == "rgb(0, 0, 0)") {
        clearInterval(cssInterval);
        $('#bestOnSpan, #loadingSpan, #creditSpan, #studioCredit').css('display', 'block');
        //setTimeout(function(){loadEmojis();},100);
        //console.log(`css listen`);
        checkForBodyLoad();
    }
}
function platformStylesAndLogic() {
    if (mobileCheck == true) {
        document.getElementById("best").innerHTML = "(mobile edition)";
        document.getElementById("title-span").innerHTML = "<em>emojiMandala.net</em><br>web art | 2017<br><em style='font-size:0.8em'>mobile edition</em>";
        var myStyle = document.createElement("link");
        myStyle.setAttribute('rel', 'stylesheet');
        myStyle.setAttribute('type', 'text/css');
        myStyle.setAttribute('id', 'myStyle');
        myStyle.setAttribute('href' , 'static/css/mobile_style.css');
        document.head.appendChild(myStyle);
        cssInterval = setInterval(cssListen, 120);

        //$( window ).on("load", mobileClient);
    } else {
        if ( safariCheck == false ) {
            var myStyle = document.createElement("link");
            myStyle.setAttribute('href' , 'static/css/myStyle.css');
            myStyle.setAttribute('rel', 'stylesheet');
            myStyle.setAttribute('type', 'text/css');
            myStyle.setAttribute('id', 'myStyle');
            document.head.appendChild(myStyle);
            cssInterval = setInterval(cssListen, 120);
            //$( window ).on("load", desktopClient);
        } else {
            document.body.insertBefore(safariDesktop, document.body.childNodes[0]);
            safariDesktop.innerHTML = safariElementAsTextNode;
        }
    }
    setTimeout(
    function() {
        if (!$("#myStyle")) {
            window.location.reload();
        }
    }, 4000);
}
//function checkImgDownload() {
//    clearInterval(downloadTimeInterval);
//    $(JsListItems[counter]).src = "";
//
//}
function incrementCounter() {
    //console.log( `Image no. ${counter} downloaded.` );
    //clearInterval(downloadTimeInterval);
    //downloadTimeInterval = setInterval(checkImgDownload, 1000);
    console.log('onload event fired on image no. ' + counter);
    counter++;
    //if (counter-10 >= counterDrop){
    //     counterDrop = counter;
    //      span.innerHTML = counter + " Emoji's loaded / " + 2372;
    if (mobileCheck == false) {
                bar.style.width = (counter/0.13) + '%'; 
        if (counter == 13 && scriptFlag == false) {
            //             clearInterval(downloadTimeInterval);
                         JsListItems = $('#hook').find('img');

            
                desktopClient();
            scriptFlag = true;
        }
    } else {
               bar.style.width = counter/0.13 + '%'; 
        if (counter == 13 && scriptFlag == false) {
            //          clearInterval(downloadTimeInterval);
            
                mobileClient();
            
            scriptFlag = true;
        }
    }
    // }
}
function checkForBodyLoad() {

    var lastEmoji = document.getElementById("lastBodyEmoji");
    lastEmoji.addEventListener('load', loadEmojis());
    if ($(this).complete) {
        lastEmoji.trigger('load');
    }
    lastEmoji.src = 'static/img/emoji_00081.png';
}
function desktopClient() {

    var angle;
    //var JsListItems = document.getElementById('hook').querySelectorAll('img');
    var windowWidth = window.innerWidth;
    var jsWindowWidth = windowWidth;
    var windowHeight = window.clientWidth;
    var containerHeight = 0;
    var containerWidth = 0;
    var emojiListDiv = document.getElementById('emojiListDiv');
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

    if(document.getElementById('audio'))
    {
        document.getElementById('audio').play();
        Unmute();
    }
    var fadeOut = document.querySelectorAll("article, header, .sponsor, .container");
    for (x = 0; x <= fadeOut.length - 1; x++) {
        fadeOut[x].className += " fadeOut";
    }
    setTimeout(function() {
        //        for(x=0;x<=article.length-1;x++){
        //                article[x].style.display = "none";
        //            }
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
    setTimeout(function() {
        fadeSlow.style.display = "none";
        forInterval = setInterval( addEmoji, 120 );
    }, 1000);



    function addEmoji() {
        angle = 0.1 * i;

        cssLeft = ( 100 + ( i * 1.1 )) * Math.cos((angle * 1.8 + (angle) / 3)) + (angle * 0.24) + windowWidth / 2 - emojiSize / 2;
        cssTop = ( 100 + ( i * 1.1 )) * Math.sin((angle * 1.8 + (angle) / 3)) + (angle * 0.24) - emojiSize / 2;
        if (i <= JsListItems.length - 1) {
            JsListItems[i].style.cssText = "display: none;";
            //emojiListDiv.appendChild(JsListItems[i]);
        }
        spriteImages[i].style.cssText = "position: absolute;" + 
        "left: " + cssLeft + "px;" +
        "top: " + cssTop + "px;" +
        prefix + "transform: rotateZ(" + (angle * angle * 2 + 220) + "deg) ;" +
        "opacity:calc(0.6 + " + (angle / 100) + ");" +
        "width: " + emojiSize + "px!important;" +
        "height: " + emojiSize + "px!important;" + 
        "z-index: 10000;" +
        "border: 0;" +
        "height: auto; display:block;visibility:visible;";
        //console.log(JsListItems[i].style.cssText);

        emojiListDiv.appendChild(spriteImages[i]);

        emojiListDiv.style.cssText += "left: " + screen.width / 2 - $(emojiListDiv).width() / 2 + "px;";
        i++;
        if ( i >= spriteImages.length) {
            clearInterval(forInterval);
        }
    }

    //add desktop css animation


}

function mobileClient() {

    var angle;

    //console.log('emoji img elements: ' + listItems  );
    var windowWidth = window.innerWidth;
    console.log('screen width: ' + windowWidth);
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

    //    for (i = 0; i<=2371; i++){
    //    spriteImages[i].class = 'spriteMobile';
    //}
    document.getElementById('landing').style.display = "none";
    document.getElementById('mute').style.display = "block";

    forInterval = setInterval( addEmoji, 130 );

    function addEmoji() {
        angle = 0.1 * i;
        spriteImages[i].style.cssText = "position: absolute;" + 
        "left: " + ((windowWidth - emojiSize) / 2) + "px ;" +
        "top: " + ((windowHeight * 0.4) - (emojiSize / 2)) + "px;" +
        prefix + "transform: rotateZ(" + (angle * angle * 2 ) + "deg) ;" +
        "width: " + emojiSize + "px!important;" +
        "height: " + emojiSize + "px!important;" + "display:block;visibility:visible;";
        emojiListDiv.appendChild(spriteImages[i]);
        i++;
        if ( i >= spriteImages.length) {
            i--;
            for (var j = 0; j <= 5; j++) {
                spriteImages[i - j ].style.display = "none";
            }
            clearInterval(forInterval);
            i = 0;
            forInterval = setInterval( addEmojiLoop, 130 );
        }
        if (i >= 5) {
            spriteImages[i - 5].style.display = "none";
        }

    }

    function addEmojiLoop() {
        angle = 0.1 * i;
        $(spriteImages[i]).toggle("displayBlock");
        if ( i == spriteImages.length) {
            for (j = 0; j <= 5; j++) {
                spriteImages[spriteImages.length - 1 - j ].style.display = "none";
                //            console.log(
                //            "images: deleted: " + JsListItems[JsListItems.length - j].attr(src) +"\n" +
                //            "i = " + i +
                //            "j = " + j);
            }
            i = 0;
        }
        if (i >= 5) {
            spriteImages[i - 5].style.display = "none";
        }
        i++;
    }
    //add desktop css animation


}


