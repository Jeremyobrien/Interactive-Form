//'Name' field receives default focus
const nameField = document.querySelector('#name');
nameField.focus();
//Default hide 'otherJobRole' field
const otherJobRole= document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';
//Event listener to hide or show 'otherJobRole' field
const jobRole = document.querySelector('#title');
jobRole.addEventListener('change', (e) =>{
       if(e.target.value == 'other'){
        otherJobRole.style.display = 'block';
        } else {
            otherJobRole.style.display= 'none';
        }
});

const shirtDesigns = document.querySelector('#design');
const shirtColors = document.querySelector('#color');
shirtColors.disabled = true;
shirtDesigns.addEventListener('change', (e)=>{
    shirtColors.disabled = false;
    for (let i = 0; i < shirtColors.children.length; i++){
        const colorChoice = e.target.value;
        const dataTheme =  shirtColors.children[i].getAttribute('data-theme');
        if(colorChoice === dataTheme) {
            shirtColors.children[i].hidden = false;
            shirtColors.children[i].setAttribute('selected', true);
            } else {
                shirtColors.children[i].hidden = true;
                shirtColors.children[i].setAttribute('selected', false);
            }
    }
    });
