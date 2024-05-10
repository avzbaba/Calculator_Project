let outputScreen = document.getElementById("display");

function appendToDisplay(num){
  outputScreen.value += num;
}

function calculateResult(){
  outputScreen.value = eval(outputScreen.value)
}

