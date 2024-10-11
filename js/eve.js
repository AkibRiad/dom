document.getElementById('change').addEventListener('click',function(){
    const text = document.getElementById('change-Text');
    text.innerText='New Text';

})

document.getElementById('update').addEventListener('click',function(){
    const newtext = document.getElementById("updateText");
    const nneeww= newtext.value;

    document.getElementById('newText').innerText=nneeww;
    newtext.value= '';
    




})