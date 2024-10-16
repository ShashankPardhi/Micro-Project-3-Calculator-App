window.onload = function () {
  document.getElementById("calc-display").value = "0";
};

function appendValue(value) {
  const display = document.getElementById("calc-display");
  if (display.value === "0" || display.value === "") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calDelete() {
  const display = document.getElementById("calc-display");
  if (display.value.length === 1) {
    display.value = "0";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function reset() {
  document.getElementById("calc-display").value = "0";
}

function calculate() {
  try {
    const display = document.getElementById("calc-display");
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    document.getElementById("calc-display").value = "Error";
  }
}
