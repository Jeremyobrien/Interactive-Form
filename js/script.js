window.addEventListener('load', () =>{

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
const colorOption = document.querySelectorAll('#color option');
shirtColors.disabled = true; 
shirtDesigns.addEventListener('change', (e)=>{
    const designChoice = e.target.value;
    for (let i = 0; i < shirtColors.length; i++){    
        const dataTheme =  shirtColors[i].getAttribute('data-theme');  
        if(designChoice === dataTheme) {
            shirtColors[i].hidden = false;
            shirtColors[i].setAttribute('selected', true);
            } else {
                shirtColors[i].hidden = true;
                shirtColors[i].setAttribute('selected', false);
            }     
    }
    shirtColors.disabled = false;
    if(designChoice === 'js puns') {
        colorOption[1].selected = true;
    } else if (designChoice === 'heart js'){
        colorOption[4].selected = true;
    }
 });

    const activities = document.querySelector('#activities');
    const activitiesCheckboxes = document.querySelectorAll('#activities input');
    const activitiesCost= document.querySelector('#activities-cost');
    const activitiesBox = document.querySelector('#activities-box');
    let totalCost= 0;
    const activityLabel = document.querySelectorAll('#activities-box label');
    activityLabel[0].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[0].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })

    activityLabel[1].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[1].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })

    activityLabel[2].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[2].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })

    activityLabel[3].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[3].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })

    activityLabel[4].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[4].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })

    activityLabel[5].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[5].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })

    activityLabel[6].firstElementChild.addEventListener('focus', (e) => {
        e.target.parentNode.className = 'focus';
    })
    activityLabel[6].firstElementChild.addEventListener('blur', (e) => {
        e.target.parentNode.className = '';
    })



    activities.addEventListener('change', (e)=>{
        const activity = e.target;
        const activityTime = e.target.getAttribute('data-day-and-time');
        let cost = e.target.getAttribute('data-cost');
        cost =  +cost;
        for( let i = 0; i < activitiesCheckboxes.length; i++) {
             const checkboxTime = activitiesCheckboxes[i].getAttribute('data-day-and-time');
             if(activity.checked) {
                if(activityTime === checkboxTime && activity !== activitiesCheckboxes[i]) {
                    activitiesCheckboxes[i].disabled = true;
                } 
                    else if (activityTime !== checkboxTime && activitiesCheckboxes[i].disabled === true) {
                    activitiesCheckboxes[i].disabled = true;
                }
                    else {
                    activitiesCheckboxes[i].disabled = false;
                } 
            }
             else if(!activity.checked && activityTime === checkboxTime) {
                
                    activitiesCheckboxes[i].disabled = false;
                }
         }

        for( let i = 0; i < activitiesCheckboxes.length; i++) {
            if (activity.checked && activity === activitiesCheckboxes[i]) {    
                totalCost += cost;
                activitiesCost.innerHTML = `<b>Total: $${totalCost}</b>`;
        }
            else if (!activity.checked && activity === activitiesCheckboxes[i]) {
                totalCost -= cost;
                activitiesCost.innerHTML = `<b>Total: $${totalCost}</b>`;
            }
        }
    });
    
    const payment = document.querySelector('#payment');
    const creditCard = document.querySelector('#credit-card');
    const payPal = document.querySelector('#paypal');
    const bitCoin = document.querySelector('#bitcoin');
    payPal.style.display = 'none';
    bitCoin.style.display = 'none';
    payment.children[1].setAttribute('selected', true);
    payment.addEventListener('change', (e)=> {
            const payChoice = e.target.value;          
            if (payChoice === 'credit-card'){
                 creditCard.style.display = 'block';
                 payPal.style.display = 'none';
                 bitCoin.style.display = 'none';              
            } else if(payChoice==='paypal') {       
                 creditCard.style.display = 'none';
                 payPal.style.display = 'block';
                 bitCoin.style.display = 'none';
            } else if(payChoice === 'bitcoin'){
                 creditCard.style.display = 'none';
                 payPal.style.display = 'none';
                 bitCoin.style.display = 'block';
            }
    })

    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    const cardNum = document.querySelector('#cc-num');
    const zip = document.querySelector('#zip');
    const cvv = document.querySelector('#cvv');
    form.addEventListener('submit', (e)=>{

    const validationPass = (input)=>{
    
        input.parentElement.classList.add('valid');
        input.parentElement.classList.remove('not-valid');
        input.parentElement.lastElementChild.hidden = true;
    }

    const validationFail = (input)=>{
        input.parentElement.classList.add('not-valid');
        input.parentElement.classList.remove('valid');
        input.parentElement.lastElementChild.hidden = false;
    }
    const nameValidator = () => {
        const nameValue = nameField.value;
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        if (nameIsValid){
            validationPass(nameField);
        }
        return nameIsValid;
    }

    const emailValidator = () => {
        const emailValue = email.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailValue);  
        if (emailIsValid){
            validationPass(email);
        }
        return emailIsValid;
    }

    const activitiesValidator = () => {
        if (totalCost > 0){
            return true;
        } else {
            return false;
        }
    }

    const cardValidator = () => {
        const cardValue = +cardNum.value;
        const cardIsValid = /^\d{13,16}$/.test(cardValue);
        if (cardIsValid){
            validationPass(cardNum);
        }
        return cardIsValid;
    }
    
    const zipValidator = () => {
        const zipValue = +zip.value;
        const zipIsValid = /^\d{5}$/.test(zipValue);
        if (zipIsValid){
            validationPass(zip);
        }
        return zipIsValid;
    }

    const cvvValidator = () => {
        const cvvValue = +cvv.value;
        const cvvValid = /^\d{3}$/.test(cvvValue);
        if (cvvValid){
            validationPass(cvv);
        }
        return cvvValid;
    }
    
        if(!nameValidator()){
            e.preventDefault();
            validationFail(nameField);
        } else if (!emailValidator()){
            e.preventDefault();
            validationFail(email);
        }else if (!activitiesValidator()){
            e.preventDefault();
            validationFail(activitiesBox);
        }else if (!cardValidator()){
            e.preventDefault();
            validationFail(cardNum);
        }else if (!zipValidator()){
            e.preventDefault();
            validationFail(zip);
        }else if (!cvvValidator()){
            e.preventDefault();
            validationFail(cvv);
        }
    })    
});  
