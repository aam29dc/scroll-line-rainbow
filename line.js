"use strict";

function getVerticalScrollPercentage(elm){
    let p = elm.parentNode;
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight);
}

document.addEventListener('scroll', function(){ 
    let line = document.getElementById('line');
    let pos = getVerticalScrollPercentage(document.body);
    let [a,b,c] = [0,0,0];

    if(pos < 1/6){      //red -> yellow
        a = 255;
        b = (pos - 0)*6*255;
        c = 0;
    }
    else if(pos >= 1/6 && pos < 2/6){   //yellow -> green
        a = 255 - (pos - 1/6)*6*255;
        b = 255;
        c = 0;
    }
    else if(pos >= 2/6 && pos < 3/6){   //green -> sky
        a = 0;
        b = 255;
        c = (pos - 2/6)*6*255;
    }
    else if(pos >= 3/6 && pos < 4/6){   //sky -> blue
        a = 0;
        b = 255 - (pos - 3/6)*6*255;
        c = 255;
    }
    else if(pos >= 4/6 && pos < 5/6){   //blue -> pink
        a = (pos - 4/6)*6*255;
        b = 0;
        c = 255;
    }
    else if(pos >= 5/6 && pos <= 6/6){  //pink -> red
        a = 255;
        b = 0;
        c = 255 - (pos - 5/6)*6*255;
    }

    line.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
    line.style.top = '' + pos*100 + '%';
});