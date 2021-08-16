var angle;
var listItems = $('li').find('img').toArray();
//console.log('emoji img elements: ' + listItems  );
var windowWidth = $( window ).width();
var windowHeight = $( window ).height();
var containerHeight = 0;
var containerWidth = 0;
var $emojiListDiv = $('#emojiListDiv');
var emojiListDiv = document.getElementById('emojiListDiv');
var myStyle = '<link href="static/css/myStyle.css" rel="stylesheet" type="text/css"/>';
var cssLeft = 0;
var cssRight = 0;
var cssLeftEst = 0;
var cssTopEst = 0;
var forInterval;
var i = 0;
var emojiSize = 50;

function addEmoji(){ 
        angle = 0.1 * i;
        cssLeft = ( 100 + ( i * 0.66 )) * Math.cos((angle*1.8+(angle)/3)) +(angle*0.24) + $(window).width()/2 - emojiSize/2;
        cssTop  = ( 100 + ( i * 0.66 )) * Math.sin((angle*1.8+(angle)/3))+(angle*0.24);
        $(listItems[i]).css({'left':  cssLeft,
                             'top': cssTop,
                              'transform': 'rotateZ(' + (angle*angle*2 + 270) + 'deg)',
                              'opacity':0.6  + angle/100,
                             'width': emojiSize,
                             //windowWidth/40 +(angle/10),
                             'z-index':'10000',
                             'height':'auto',
                             'position': 'absolute'});
        $emojiListDiv.append(listItems[i]);
        containerHeight = $emojiListDiv.height();
        containerWidth = $emojiListDiv.width();
        $emojiListDiv.css({'top' : windowHeight/2  + emojiSize/2,
                           'left': windowWidth/2 - containerWidth/2});
                           
        if( i >= listItems.length){
        clearInterval(forInterval);}
        i++;
}

//add desktop css animation
$('title').append(myStyle);
//add emoji to mandala
forInterval = setInterval( addEmoji, 100 );
