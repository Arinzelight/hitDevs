const principal = document.getElementById('principal');
const years = document.getElementById('years');
const rate = document.getElementById('rate');

const result = document.getElementById('result');
const compute = document.querySelector('.btn');


compute.addEventListener('click', function(){
    P = principal.value;
    T = years.value;
    R = rate.value;
    interest = P * T * R/100

    if (P <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    } else if(T == 1){
        result.innerHTML = `<mark> Your Simple Interest on N${P} for ${T}year at ${R}% rate is N${interest}`
    }else {
            result.innerHTML = `<mark> Your Simple Interest on N${P} for ${T}years at ${R}% rate is N${interest}`
    }
  
});