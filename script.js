const input = document.getElementById("input");

function appendInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = "";
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function sqrt(){
input.value=Math.SQRT1_2(input.value);

}


function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}




