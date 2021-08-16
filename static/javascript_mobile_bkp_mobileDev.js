var angle;
var listItems = $('article').find('img').toArray();
var JsListItems  = $.makeArray(listItems); 
//console.log('emoji img elements: ' + listItems  );
var windowWidth = $( window ).width();
var jsWindowWidth = windowWidth;
var windowHeight = $( window ).height();
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
var emojiSize = windowWidth * 0.75;

function addEmoji(){ 
        angle = 0.1 * i;
        JsListItems[i].style.cssText = `
                             display: block;
                             position: absolute;
                             left: ${windowWidth/2 - emojiSize/2}px ;
                             top: ${windowHeight/2 - emojiSize/2}px;
                             transform: rotateZ( ${angle * angle * 2 }deg);
                             opacity:0.7;
                             width: ${emojiSize}px;
                             z-index: 10000;
                             height: auto;
                             `;
        emojiListDiv.appendChild(JsListItems[i]);             
        i++;
        if( i >= JsListItems.length){
        i--;
            for(var j=0; j<=10;j++){
            JsListItems[i - j ].style.display = "none";
            }
        clearInterval(forInterval);
        i=0;
        forInterval = setInterval( addEmojiLoop, 120 );
        }
        if(i >=10){
        JsListItems[i-10].style.display = "none";
        }
       
}

function addEmojiLoop(){ 
        angle = 0.1 * i;
        JsListItems[i].style.display = "block";
        if( i >= JsListItems.length - 10){
        for(j=1;j<=10;j++){
            JsListItems[JsListItems.length - j ].style.display = "none";
            }
        i=0;
        }
        if(i >=10){
        JsListItems[i-10].style.display = "none";
        }
        i++;
}
//add desktop css animation

document.head.appendChild(myStyle);
//add emoji to mandala
$( document ).imagesLoaded({ },function(){ 
                            $("article, .sponsor, header, .container").addClass("fadeOut");
                            $('#landing').addClass("fadeSlow");
                            forInterval = setInterval( addEmoji, 120 );
                            }
                            );

