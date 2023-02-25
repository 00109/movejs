$('div').attr('id', 'circle').css({'width': '50px',
              'height': '50px',
              'background': 'grey',
              'border-radius': '50%',
              'position': 'absolute',
              'border': '0.1875em solid #0F1C3F'
          });



document.addEventListener('keydown',function(){console.log('hey');});
document.addEventListener('keyup',function(){$('div').fadeOut(2000).fadeIn(2000);});


var left = 0;
window.onkeydown = function move_left(){

    if(event.keyCode==37){
        left=left-100;
        document.getElementById('circle').style.left = left+'px';
    }
        else if(event.keyCode==39){
            left=left+100;
            document.getElementById('circle').style.left= left+ 'px';
        }
};