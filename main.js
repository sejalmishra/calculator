let number = document.querySelectorAll('.numbers div');
let operator = document.querySelectorAll('.operators div');
let result = document.querySelector('.result');
let screen = document.querySelector('.screen');
let cancel = document.querySelector('.cancel');
let back = document.querySelector('.back');
let resultonscreen = false;
for(let i=0;i<number.length;i++){
    number[i].addEventListener("click", function(e) {
    let stringold=screen.innerHTML;
    let lastchar = stringold[stringold.length-1];
    if(resultonscreen===false){
      screen.innerHTML+=e.target.innerHTML;
    }else if(resultonscreen===true && lastchar==="+" || lastchar==="-" || lastchar==="*" || lastchar==="/"){
      resultonscreen=false;
      screen.innerHTML+=e.target.innerHTML;
    }else{
      resultonscreen=false;
      screen.innerHTML="";
      screen.innerHTML+=e.target.innerHTML;
    }
    })
}
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener("click", function(e){
    let stringold= screen.innerHTML;
    let lastchar=stringold[stringold.length-1];
    if(stringold==""){
      console.log("click a number first");
    }
    else if(lastchar=="+" || lastchar=="-" || lastchar=="*" || lastchar=="/"){
      newstring=stringold.substring(0,stringold.length-1,)+e.target.innerHTML;
      screen.innerHTML=newstring;
    }else{
    screen.innerHTML+=e.target.innerHTML;
    }
  })
}


result.addEventListener("click", function(e){
  let expression = screen.innerHTML;
  let lastchar = expression[expression.length-1];
  if(lastchar==="+" || lastchar==="-" || lastchar==="*" || lastchar==="/"){
    expression=expression.substring(0,expression.length-1);
  }
  console.log(expression);
  let numbers=expression.split(/\+|\-|\*|\//g);
  console.log(numbers);
  let operators=expression.replace(/[0-9]|\./g,"").split("");
  console.log(operators);
  let divide=operators.indexOf("/");
  while(divide!=-1){
    numbers.splice(divide,2,numbers[divide]/numbers[divide+1]);
    operators.splice(divide,1);
    divide=operators.indexOf("/");
    console.log(numbers);
    console.log(operators);
  }

  let multiply = operators.indexOf("*");
  while(multiply!=-1){
    numbers.splice(multiply,2,numbers[multiply]*numbers[multiply+1]);
    operators.splice(multiply,1);
    multiply=operators.indexOf("*");
     console.log(numbers);
    console.log(operators);
  }

  let add = operators.indexOf("+");
  while(add!=-1){
    numbers.splice(add,2,parseFloat(numbers[add])+parseFloat(numbers[add+1]));
    operators.splice(add,1);
    add=operators.indexOf("+");
    console.log(numbers);
    console.log(operators);
  }

  let subtract=operators.indexOf("-");
  while(subtract!=-1){
    numbers.splice(subtract,2,numbers[subtract]-numbers[subtract+1]);
    operators.splice(subtract,1);
    subtract=operators.indexOf("-");
     console.log(numbers);
    console.log(operators);
  }
  screen.innerHTML=numbers[0];
  resultonscreen=true;
})

cancel.addEventListener("click",function(e){
  screen.innerHTML="";
})

back.addEventListener("click",function(){
  let expression=screen.innerHTML;
  if(expression!=""){
    expression=expression.substring(0,expression.length-1);
    screen.innerHTML=expression;
  }
})