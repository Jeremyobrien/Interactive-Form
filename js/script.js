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
        for (let i=1; i < payment.children.length; i++) {
            const payChoice = document.querySelector(`#${e.target.value}`);
            const paymentIterable = document.querySelector(`#${payment.children[i].value}`);
            
            if (payChoice === paymentIterable){
                return payChoice.style.display = 'block';
            } else {       
                paymentIterable.hidden =  true;
            }
        }
    })
    
