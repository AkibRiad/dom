console.log("This is DOM event.")



function green(){
    document.body.style.backgroundColor='green';
}



const makeRed = document.getElementById("make-red");

makeRed.onclick = function(){
    document.body.style.backgroundColor='red';
}


const makePink =document.getElementById("make-pink");
makePink.addEventListener('click',function(){
    document.body.style.backgroundColor='pink'
})

document.getElementById('tomato').addEventListener('click',function(){
    document.body.style.backgroundColor='tomato'
})
document.getElementById('golden').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'
})





