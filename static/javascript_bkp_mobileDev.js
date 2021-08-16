var angle;
var listItems = $('li').find('img').toArray();
var JsListItems  = $.makeArray(listItems); 
//console.log('emoji img elements: ' + listItems  );
var windowWidth = $( window ).width();
var jsWindowWidth = windowWidth;
var windowHeight = $( window ).height();
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

function addEmoji(){ 
        angle = 0.1 * i;
        cssLeft = ( 100 + ( i * 1.1 )) * Math.cos((angle*1.8+(angle)/3)) +(angle*0.24) + jsWindowWidth/2 - emojiSize;
        cssTop  = ( 100 + ( i * 1.1 )) * Math.sin((angle*1.8+(angle)/3))+(angle*0.24);
        JsListItems[i].style.cssText = `position: absolute;
                             left: ${cssLeft}px;
                             top: ${cssTop}px;
                             transform: rotateZ( ${angle * angle * 2 +270}deg);
                             opacity:calc(0.6 + ${angle/100});
                             width: ${emojiSize};
                             z-index: 10000;
                             height: auto;
                             `;
        emojiListDiv.appendChild(JsListItems[i]);
        containerHeight = emojiListDiv.offsetHeight;
        containerWidth = emojiListDiv.offsetWidth;
        emojiListDiv.style.cssText = `top : ${windowHeight/2}px;
                                      left: ${ - emojiSize}px`;
        console.log(`
        mandala top is: ${windowHeight/2}px
        mandala left is: ${ - emojiSize}px`);                   
        if( i >= JsListItems.length){
        clearInterval(forInterval);}
        i++;
}

//add desktop css animation

document.head.appendChild(myStyle);
//add emoji to mandala
$( document ).imagesLoaded({ },function(){ 
                            $("article, .sponsor, header, .container").addClass("fadeOut");
                            $('#landing').addClass("fadeSlow");
                            forInterval = setInterval( addEmoji, 100 );
                            }
                            );
