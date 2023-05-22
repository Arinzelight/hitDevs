const principal = document.getElementById('principal');
const years = document.getElementById('years');
const rate = document.getElementById('rate');

const result = document.getElementById('result');
const compute = document.querySelector('.btn');


compute.addEventListener('click', function(){
    const P = principal.value;
    const T = years.value;
    const R = rate.value;
    const interest = P * T * R/100

    if (P <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }else {
        const year = T == 1 ? "year" : "years" //Ternary
        result.innerHTML = `<mark> Your Simple Interest on N${P} for ${T}${year} at ${R}% rate is N${interest}`
    }
  
});