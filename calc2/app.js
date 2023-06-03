"use strict"
const btn = document.querySelectorAll('span')
const value = document.getElementById('value')

for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', function (){
        if(this.innerHTML == "=")try{
            value.innerHTML = eval(value.innerHTML); 
        }catch(err){
            alert('invalid input')
        }else if(this.innerHTML == 'Clear'){
            value.innerHTML = " ";
        }else if(this.innerHTML == "Del"){
            value.innerHTML = value.innerHTML.slice(0, -1);
        }else{
            value.innerHTML += this.innerHTML
        }      
        
    })
}