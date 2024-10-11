

const sett = document.getElementsByClassName("adding");

console.log(sett);
// sett.classList.add('bold');



const addedClass = document.getElementById('abc');

console.log(addedClass.childNodes[3].childNodes);

addedClass.classList.add('text-right')
addedClass.classList.add('bold')


addedClass.classList.add('bold')



const addingSection = document.getElementById('sections');

const section =document.createElement('section');

section.innerHTML =`
<h1>nasta list</h1>
            <ul>
                <li>kola</li>
                <li>ruti</li>
                <li>singara</li>
                <li>noodles</li>
            </ul>
`
addingSection.appendChild(section)

const set = document.querySelectorAll("section");


// console.log(set)
for(const se of set){
   // console.log(se);
   se.style.border ='2px solid black'
   se.style.marginTop= '5px'
   se.style.padding= '10px'
   se.style.borderRadius= '10px'
}