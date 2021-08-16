var counter = 0;
var span = document.getElementById('span');
var counterInc = 0; 
var JsListItems = document.getElementById('hook').querySelectorAll('img');
var scriptFlag = false; 

for(i=0;i<=JsListItems.length-1;i++){
JsListItems[i].addEventListener( 'load', incrementCounter );
};
setTimeout(function(){
        if(counter < 10){
            window.location.reload();
        }
    },4000);
function incrementCounter() {
   // console.log( `Image no. ${counter} downloaded.` );
    
    counterInc = counter;
    setTimeout(function(){
        if(JsListItems[counter + 1] && JsListItems[counter + 1].readyState != 'complete'){
        JsListItems[counter + 1].src = "https://emojipedia-us.s3.amazonaws.com/cache/89/54/8954f263b0d0f32f2a5be99bbee83082.png";
        }
    },1000);
    counter++;
     bar.style.width = counter/23.71 + '%'; 
     span.innerHTML = `${counter} Emoji's loaded / ${JsListItems.length}`;
     
     if (counter >= 2360 && scriptFlag == false){
        if (mobileCheck == true){
        animationScript.src = 'static/javascript_mobile.js';
        document.body.appendChild(animationScript);
        }else{
        animationScript.src = 'static/javascript.js';
        document.body.appendChild(animationScript);
        }
        scriptFlag = true;
        }
}