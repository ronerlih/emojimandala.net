var pediaStyle = document.createElement('link');
    pediaStyle.setAttribute('href', "static/css/emojipedia.5146e661821a.css");
    pediaStyle.setAttribute('rel', 'stylesheet');
    pediaStyle.setAttribute('type', 'text/css');
    document.head.appendChild(pediaStyle);
    
var angle;
var JsListItems = document.getElementById('hook').querySelectorAll('img');

//console.log('emoji img elements: ' + listItems  );
var windowWidth = screen.width;
var jsWindowWidth = windowWidth;
var windowHeight = screen.height;
var containerHeight = 0;
var containerWidth = 0;
var emojiListDiv = document.getElementById('emojiListDiv');
    emojiListDiv.style.cssText = `top : ${windowHeight/2}px;
                                  left: ${ - emojiSize}px`;
var head = document.getElementsByTagName("head");
var myStyle = document.createElement("link");
myStyle.setAttribute('href' , 'static/css/mobile_style.css');
myStyle.setAttribute('rel', 'stylesheet');
myStyle.setAttribute('type', 'text/css');
var cssLeft = 0;
var cssRight = 0;
var cssLeftEst = 0;
var cssTopEst = 0;
var forInterval;
var i = 0;
var emojiSize = jsWindowWidth * 0.18;
var article = document.getElementsByTagName("article");
var header = document.getElementsByTagName("header");
var sponsor = document.getElementsByClassName("sponsor");
var container = document.getElementsByClassName("container");
var adheader = document.getElementsByClassName("ad-header");


    var fadeOut = document.querySelectorAll("article, header, .sponsor, .container");
    for(x=0;x<=fadeOut.length-1;x++){
        fadeOut[x].className += " fadeOut";
    }
    setTimeout(function(){
    for(x=0;x<=article.length-1;x++){
            article[x].style.display = "none";
        }
    for(x=0;x<=header.length-1;x++){
            header[x].style.display = "none";        }
    for(x=0;x<=sponsor.length-1;x++){
            sponsor[x].style.display = "none";
        }
    for(x=0;x<=container.length-1;x++){
            container[x].style.display = "none";
        }
      for(x=0;x<=adheader.length-1;x++){
            adheader[x].style.display = "none";
        }
        document.getElementById("footer").style.display = "none";    
    },12000);
    var fadeSlow = document.getElementById('landing');
    fadeSlow.className += " fadeSlow";
    setTimeout(function(){
                fadeSlow.style.display = "none";
    },3000);
    forInterval = setInterval( addEmoji, 120 );

function addEmoji(){ 
        angle = 0.1 * i;
        JsListItems[i].style.cssText = `
                             position: absolute;
                             left: ${windowWidth/2 - emojiSize/2}px ;
                             top: ${windowHeight*0.4 - emojiSize/2}px;
                             transform: rotateZ( ${angle * angle * 2 }deg);
                             opacity:0.7;
                             width: ${emojiSize}px;
                             height: auto;
                             `;
        emojiListDiv.appendChild(JsListItems[i]);             
        i++;
        if( i >= JsListItems.length){
        i--;
            for(var j=0; j<=20;j++){
            JsListItems[i - j ].style.display = "none";
            }
        clearInterval(forInterval);
        i=0;
        forInterval = setInterval( addEmojiLoop, 120 );
        }
        if(i >=20){
        JsListItems[i-20].style.display = "none";
        }
       
}

function addEmojiLoop(){ 
        angle = 0.1 * i;
        JsListItems[i].style.display = "block";
        if( i >= JsListItems.length - 20){
        for(j=1;j<=20;j++){
            JsListItems[JsListItems.length - j ].style.display = "none";
            }
        i=0;
        }
        if(i >=20){
        JsListItems[i-20].style.display = "none";
        }
        i++;
}
//add desktop css animation

document.head.appendChild(myStyle);
//add emoji to mandala

                           
// JsListItems[i].style.cssText = '
//                             display: block;
//                             position: absolute;
//                             left: ${windowWidth/2 - emojiSize/2}px ;
//                             top: ${windowHeight/2 - emojiSize/2}px;
//                             transform: rotateZ( ${angle * angle * 2 }deg);
//                             opacity:0.7;
//                             width: ${emojiSize}px;
//                             z-index: 10000;
//                             height: auto;
//                             ';