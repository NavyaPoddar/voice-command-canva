 x = 0
 y = 0
 drawcircle = "" 
 drawrectangle = ""

function setup(){
    canvas=createCanvas(900,600);
}

 SpeechRecognition = window.webkitSpeechRecognition;
 myrecognizer = new.SpeechRecognition();

function btnstart(){
    myrecognizer.start();
    document.getElementById("status").innerHTML = "The system is listening , please speak";
}

myrecognizer.onresult = function(resultarray){
    console.log(resultarray);
    transcript = resultarray.results[0][0].transcript;
    document.getElementById("status").innerHTML = "You said " + transcript;

    if(transcript=="circle"){
        x = Math.floor( Math.random() * 900);
        y = Math.floor( Math.random() * 600);

        document.getElementById("status").innerHTML = "Drawing a circle";

        drawcircle = "draw now";
    }

    if(transcript=="rectangle"){
        x = Math.floor( Math.random() * 900);
        y = Math.floor( Math.random() * 600);

        document.getElementById("status").innerHTML = "Drawing a rectangle";

        drawrectangle = "draw now";
    }
    }


    function draw(){
        if (drawcircle=="draw now"){
            radius= Math.floor(Math.random() * 100);

            circle(x,y,radius);
            drawcircle = "" ;
        }
    
        if(drawrectangle=="draw now"){
            breath = Math.floor(Math.random() * 100);
            length = Math.floor(Math.random() * 200);

            rect(x,y,length,breath);
            drawrectangle = "" ;

        }
    }