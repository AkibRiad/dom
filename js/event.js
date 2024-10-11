console.log("This is DOM event.")



function green(){
    document.body.style.backgroundColor='green';
}



const makeRed = document.getElementById("make-red");

makeRed.onclick = function(){
    document.body.style.backgroundColor='red';
}


