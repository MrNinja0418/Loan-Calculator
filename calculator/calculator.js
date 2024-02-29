window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("form submitted");
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  console.log("updating...");
  const values = getCurrentUIValues();
  console.log("current values", values);
  const monthlyPayMent = calculateMonthlyPayment(values);
  console.log("monthly payment:", monthlyPayMent);
  updateMonthly(monthlyPayMent);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const years = values.years;
  const rate = values.rate / 100;
  const monthlyRate = rate / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment =
    principal *
    (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)));

  // two decimal places
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}
