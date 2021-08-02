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
//Variables for "T-Shirt" section
const shirtDesigns = document.querySelector('#design');
const shirtColors = document.querySelector('#color');
const colorOption = document.querySelectorAll('#color option');
//Event listener that only allows applicable shir color options depending on shirt theme chosen
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
    //Shows default color option per theme
    shirtColors.disabled = false;
    if(designChoice === 'js puns') {
        colorOption[1].selected = true;
    } else if (designChoice === 'heart js'){
        colorOption[4].selected = true;
    }
 });
    //Variables for "Register for Activities" section
    const activities = document.querySelector('#activities');
    const activitiesCheckboxes = document.querySelectorAll('#activities input');
    const activitiesCost= document.querySelector('#activities-cost');
    const activitiesBox = document.querySelector('#activities-box');
    let totalCost= 0;
    const activityLabel = document.querySelectorAll('#activities-box label');
    //Event listeners to focus or blur activities when using 'tab'
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


    //Event Listener that disables conflicting activities and tracks total cost
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
                    activitiesCheckboxes[i].parentNode.className = 'disabled';
                } 
                    else if (activityTime !== checkboxTime && activitiesCheckboxes[i].disabled === true) {
                    activitiesCheckboxes[i].disabled = true;
                    activitiesCheckboxes[i].parentNode.className = 'disabled';
                }
                    else {
                    activitiesCheckboxes[i].disabled = false;
                } 
            }
             else if(!activity.checked && activityTime === checkboxTime) {
                    activitiesCheckboxes[i].disabled = false;
                    activitiesCheckboxes[i].parentNode.className = '';
                }
         }

        for( let i = 0; i < activitiesCheckboxes.length; i++) {
            if (activity.checked && activity === activitiesCheckboxes[i]) {    
                totalCost += cost;
                activitiesCost.innerHTML = `Total: $${totalCost}`;
        }
            else if (!activity.checked && activity === activitiesCheckboxes[i]) {
                totalCost -= cost;
                activitiesCost.innerHTML = `Total: $${totalCost}`;
            }
        }
    });
    //Payment variables
    const payment = document.querySelector('#payment');
    const creditCard = document.querySelector('#credit-card');
    const payPal = document.querySelector('#paypal');
    const bitCoin = document.querySelector('#bitcoin');
    //Sets credit card as default payment option and shows only selected payment option
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
    //Validation variables
    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    const emailHint = document.querySelector('#email-hint');
    const cardNum = document.querySelector('#cc-num');
    const zip = document.querySelector('#zip');
    const cvv = document.querySelector('#cvv');
    const reqField = document.querySelectorAll('.asterisk');
    const activitiesHint = document.querySelector('#activities-hint');
    console.log(activitiesHint);

    //Event listener that provides real time validation for email address     
    email.addEventListener('keyup', ()=>{
        emailHint.style.display = 'block';
        emailHint.textContent = 'Please enter an email address.'
        if (email.value.length > 0 && !email.validity.valid) {
            emailHint.textContent = 'Email address must be formatted correctly';
            emailHint.style.display = 'block';
            validationFail(email);
        }else if (email.value.length > 0 && email.validity.valid){
            emailHint.style.display = 'none';
            validationPass(email);   
        }
    });

    //Validation helper functions that apply validation styling
    const validationPass = (input)=>{
    
        input.parentElement.classList.add('valid');
        input.parentElement.classList.remove('not-valid');
        input.parentElement.lastElementChild.hidden = true;
    }

    const validationFail = (input)=>{
        input.parentElement.classList.add('not-valid');
        input.parentElement.classList.remove('valid');
        input.parentElement.lastElementChild.hidden = false;
        input.nextElementSibling.style.display = 'block';
    }

    //Listens to validator functions and either provides errors or submits completed form
    form.addEventListener('submit', (e)=>{
 
    const nameValidator = () => {
        const nameValue = nameField.value;
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        // if (nameIsValid){
        //     validationPass(nameField);
        // } 
        return nameIsValid;
    }

    const emailValidator = () => {
        const emailValue = email.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailValue);
        // if(emailIsValid){
        //     validationPass(email);
        // }
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
        // if (cardIsValid){
        //     validationPass(cardNum);
        // }
        return cardIsValid;
    }
    
    const zipValidator = () => {
        const zipValue = +zip.value;
        const zipIsValid = /^\d{5}$/.test(zipValue);
        // if (zipIsValid){
        //     validationPass(zip);
        // }
        return zipIsValid;
    }

    const cvvValidator = () => {
        const cvvValue = +cvv.value;
        const cvvValid = /^\d{3}$/.test(cvvValue);
        // if (cvvValid){
        //     validationPass(cvv);
        // }
        return cvvValid;
    }
    //tests all 'submit' validator functions
        if(payment.children[1].selected === true){
            for(let i = 1; i< reqField.length; i++){
                if(reqField[i].parentNode.children[1] === nameField && !nameValidator()){
                    e.preventDefault();
                    validationFail(nameField);
                }else if(reqField[i].parentNode.children[1] === nameField && nameValidator()){
                    validationPass(nameField);
                }else if (reqField[i].parentNode.children[1] === email && !emailValidator()){
                    e.preventDefault();
                    validationFail(email);
                }else if(reqField[i].parentNode.children[1] === email && emailValidator()){
                    validationPass(email);
                }else if (reqField[i].parentNode.parentNode === activities && !activitiesValidator()){
                    e.preventDefault();
                    validationFail(activitiesBox);
                    activitiesHint.style.display = 'block';
                }else if(reqField[i].parentNode.parentNode === activities && activitiesValidator()){
                    validationPass(activitiesBox);
                }else if (reqField[i].parentNode.children[1] === cardNum && !cardValidator()){
                    e.preventDefault();
                    validationFail(cardNum);
                } else if(reqField[i].parentNode.children[1] === cardNum && cardValidator()){
                    validationPass(cardNum);
                }else if (reqField[i].parentNode.children[1] === zip && !zipValidator()){
                    e.preventDefault();
                    validationFail(zip);
                } else if(reqField[i].parentNode.children[1] === zip && zipValidator()){
                    validationPass(zip);
                }else if (reqField[i].parentNode.children[1] === cvv && !cvvValidator()){
                    e.preventDefault();
                    validationFail(cvv);
                }else if(reqField[i].parentNode.children[1] === cvv && cvvValidator()){
                        validationPass(cvv);
                    }
            }
        } else if (payment.children[1].selected === false) {
                for(let i = 1; i < reqField.length - 3; i++){
                    if (reqField[i].parentNode.children[1] === nameField && !nameValidator()){
                        e.preventDefault();
                        validationFail(nameField);
                    } else if (reqField[i].parentNode.children[1] === nameField && nameValidator()){
                        validationPass(nameField);
                    } else if (reqField[i].parentNode.children[1] === email && !emailValidator()){
                        e.preventDefault();
                        validationFail(email);
                    } else if (reqField[i].parentNode.children[1] === email && emailValidator()){
                        validationPass(email);
                    } else if (reqField[i].parentNode.parentNode === activities && !activitiesValidator()){
                        e.preventDefault();
                        validationFail(activitiesBox);
                        activitiesHint.style.display = 'block';
                    } else if(reqField[i].parentNode.parentNode === activities && activitiesValidator()){
                        validationPass(activitiesBox);
                }
             }
         }
    });
});
