console.log("START");


const added_section= document.getElementById("main-body");

const section = document.createElement('section');


section.innerHTML=`
<h1>Number One</h1>
        <ul>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
        </ul>
`

const section2 = document.createElement('section');

section2.innerHTML=`
<h1>Number One</h1>
        <ul>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
        </ul>
        `

        added_section.appendChild(section);
        added_section.appendChild(section2);

       const sections=document.querySelectorAll('section');
       for(const sec of sections){
        sec.style.color='green';
        sec.style.backgroundColor='pink'
        sec.style.padding='5px'
        sec.style.margin='5px'
        sec.style.borderRadius='10px'
       }

       function bg(){
        document.body.style.backgroundColor='tomato';
       }

       document.getElementById('third').addEventListener('click',function(){
        document.body.style.backgroundColor='black'
       })

       document.getElementById('update').addEventListener('click',function(){
        const inputValue= document.getElementById('inputs');
        
        const valueOne =inputValue.value;

        document.getElementById('text').innerText=valueOne;
        inputValue.value='';
         })


        document.getElementById('clicked').addEventListener('click',function(){
            const takingComment = document.getElementById('comment');
            
            const valueTwo= takingComment.value;


            const com = document.getElementById('myComment');

            const p = document.createElement('p');
            p.innerText= valueTwo;
            com.appendChild(p)
            takingComment.value='';

        })

     
       