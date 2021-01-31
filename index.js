var boy = document.getElementById('boy');
var body = document.getElementsByTagName('body');

var boyLeft = 0;
var boyTop = 500;

    
function anim(e){
    if(e.keyCode==39){
         boyLeft +=20;
         boy.style.left = boyLeft + 'px';
         if(boyLeft >=1100){
            boyLeft -=20;
         }
    }
    if(e.keyCode==37){
         boyLeft -=20;
         boy.style.left = boyLeft + 'px';
         if(boyLeft <=0){
            boyLeft +=20; 
         }
    }
    if(e.keyCode==38){
        boyTop -=20;
        boy.style.top = boyTop + 'px';
        if(boyTop <=0){
            boyTop +=20;
        }
    }
    if(e.keyCode==40){
        boyTop +=20;
        boy.style.top = boyTop + 'px';
        if(boyTop >=500){
            boyTop -=20;
        }
    }
    if(e.keyCode==68){
        boyLeft +=20;
        boy.style.left = boyLeft +'px';
        if(boyLeft >=1100){
            boyLeft -=20;
        }
    }
    if(e.keyCode==65){
        boyLeft -=20;
        boy.style.left = boyLeft +'px';
        if(boyLeft <=0){
            boyLeft +=20;
        }
    }
    if(e.keyCode==87){
        boyTop -=20; 
        boy.style.top = boyTop +'px';
        if(boyTop <=0){
           boyTop +=20;
        }
    }
    if(e.keyCode==83){
        boyTop +=20;
        boy.style.top = boyTop +'px';
        if(boyTop >= 500){
            boyTop -=20;
        }
    }
}



document.onkeydown = anim;dddddd