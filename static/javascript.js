var pediaStyle = document.createElement('link');
    pediaStyle.setAttribute('href', "static/css/emojipedia.5146e661821a.css");
    pediaStyle.setAttribute('rel', 'stylesheet');
    pediaStyle.setAttribute('type', 'text/css');
    document.head.appendChild(pediaStyle);
var angle;
//var JsListItems = document.getElementById('hook').querySelectorAll('img');
var windowWidth = window.innerWidth;
var jsWindowWidth = windowWidth;
var windowHeight = window.clientWidth;
var containerHeight = 0;
var containerWidth = 0;
var emojiListDiv = document.getElementById('emojiListDiv');
var head = document.getElementsByTagName("head");
var myStyle = document.createElement("link");
myStyle.setAttribute('href' , 'static/css/myStyle.css');
myStyle.setAttribute('rel', 'stylesheet');
myStyle.setAttribute('type', 'text/css');
var cssLeft = 0;
var cssRight = 0;
var cssLeftEst = 0;
var cssTopEst = 0;
var forInterval;
var i = 0;
var emojiSize = 50;
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
    },10000);
    var fadeSlow = document.getElementById('landing');
    fadeSlow.className += " fadeSlow";
    setTimeout(function(){
                fadeSlow.style.display = "none";
    },3000);
    forInterval = setInterval( addEmoji, 120 );


function addEmoji(){ 
        angle = 0.1 * i;
        cssLeft = ( 100 + ( i * 1.1 )) * Math.cos((angle*1.8+(angle)/3)) +(angle*0.24) + windowWidth/2 - emojiSize;
        cssTop  = ( 100 + ( i * 1.1 )) * Math.sin((angle*1.8+(angle)/3))+(angle*0.24);
        JsListItems[i].style.cssText = `position: absolute;
                             left: ${cssLeft}px;
                             top: ${cssTop}px;
                             transform: rotateZ( ${angle * angle * 2}deg);
                             opacity:calc(0.6 + ${angle/100});
                             width: ${emojiSize};
                             z-index: 10000;
                             height: auto;
                             `;
        emojiListDiv.appendChild(JsListItems[i]);
//        emojiListDiv.style.cssText += `left: ${( $(emojiListDiv).width()/getScale())/2 }px`;
//        console.log(`window width: ${windowWidth/2}`);
//        console.log(`div width: ${$(emojiListDiv).width()/2}`);
//        console.log(`div scale: ${getScale()}`);
//        console.log(`calculation: ${ $(emojiListDiv).width()/getScale()/2}`);
//        console.log(`window - div: ${(windowWidth/2 - $(emojiListDiv).width())/2}`);
//     
                           
        if( i >= JsListItems.length){
        clearInterval(forInterval);}
        i++;
}

//add desktop css animation

document.head.appendChild(myStyle);

function getScale(å)
{
   var matrix = $(emojiListDiv).css('transform');
var values = matrix.match(/-?[\d\.]+/g);
    return values[1];
    //Return the value AS STRING (with the unit)
}
