"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d === 0) {
    let x = -b/(2*a);
    arr = [x];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr = [x1, x2];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonthly = percent/100/12;
  let credit = amount - contribution;
  let payment = credit * (percentMonthly + (percentMonthly / (((1 + percentMonthly)**countMonths) - 1)));
  let totalPayment = payment * countMonths;
  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}