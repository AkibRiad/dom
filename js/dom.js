const set = document.querySelectorAll("section");


// console.log(set)
for(const se of set){
   // console.log(se);
   se.style.border ='2px solid black'
   se.style.marginTop= '5px'
   se.style.padding= '10px'
   se.style.borderRadius= '10px'
}

const sett = document.getElementsByClassName("adding");

// console.log(sett.classList);
sett.classList.add('yellow-bg');


const addedClass = document.getElementById('abc');

console.log(addedClass);

// addedClass.classList.add('text-right')