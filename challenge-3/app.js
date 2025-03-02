let formGroup=document.querySelectorAll('.form-group');
const nameDisplay=document.querySelector('#nameDisplay');
const jobDisplay=document.querySelector('#jobDisplay');
const ageDisplay=document.querySelector('#ageDisplay');
const bioDisplay=document.querySelector('#bioDisplay');

formGroup.forEach((group)=>{
    let inputs=group.lastElementChild;
    inputs.addEventListener('input',function(e) {
        let values=e.target.value;
        if (e.target.id==="nameInput") {
            nameDisplay.innerHTML=values.trim().length>0?values:"Not provided";
            nameDisplay.style.textTransform="capitalize";
        }else if(e.target.id==="jobInput"){
            jobDisplay.innerHTML=values.trim().length>0?values:"Not provided";
            jobDisplay.style.textTransform="capitalize";

        }else if(e.target.id==="ageInput"){
            ageDisplay.innerHTML=values.trim().length>0?values:"Not provided";
            ageDisplay.style.textTransform="capitalize";
        }
        else if(e.target.id==="bioInput"){
            bioDisplay.innerHTML=values.trim().length>0?values:"Not provided";
            bioDisplay.style.textTransform="capitalize";
        }
    })
})