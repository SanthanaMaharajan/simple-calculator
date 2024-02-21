let display=document.getElementById("display");


function insert(val) { 
    if (display.value==="0"){
        display.value=val;
    }else{
        if(display.value==="Error"){
            display.value=""
        }
        display.value+=val;
    }    
}

function clearAll(){
    display.value="";
}

function deleteChar(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value="Error";
    }
}