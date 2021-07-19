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

    const activities = document.querySelector('#activities');
    const activitiesCost= document.querySelector('#activities-cost');
    let totalCost= 0;
    activities.addEventListener('change', (e)=>{
        let cost = e.target.getAttribute('data-cost');
        cost =  +cost;
        if(e.target.checked){
             totalCost += cost;
             activitiesCost.innerHTML = `Total: $${totalCost}`;
        }else if (!e.target.checked){
             totalCost -= cost;
             activitiesCost.innerHTML = `Total: $${totalCost}`;
        }
    })

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
    
    const nameValidator = () => {
        const nameValue = nameField.value;
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        return nameIsValid;
    }

    const emailValidator = () => {
        const emailValue = email.value;
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailValue);
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
        return cardIsValid;
    }
    
    const zipValidator = () => {
        const zipValue = +zip.value;
        const zipIsValid = /^\d{5}$/.test(zipValue);
        return zipIsValid;
    }

    const cvvValidator = () => {
        const cvvValue = +cvv.value;
        const CvvValid = /^\d{3}$/.test(cvvValue);
        return CvvValid;
    }


    form.addEventListener('submit', (e)=>{
        if(!nameValidator()){
            e.preventDefault();
            console.log('name invalid');
        } else if (!emailValidator()){
            e.preventDefault();
            console.log('email invalid');
        }else if (!activitiesValidator()){
            e.preventDefault();
            console.log('select at least one activity');
        }else if (!cardValidator()){
            e.preventDefault();
            console.log('card number invalid');
        }else if (!zipValidator()){
            e.preventDefault();
            console.log('zip invalid');
        }else if (!cvvValidator()){
            e.preventDefault();
            console.log('cvv invalid');
        }
    })
    
