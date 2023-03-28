// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

function buttonOneClicked() {
  // Input through textfields
  const hoursWorked = parseInt(document.getElementById("hours-worked").value)
  const salary = parseInt(document.getElementById("salary").value)
  const pay = (hoursWorked * salary) * (1.00 * TAX_RATE)
  const taxedMoney = (hoursWorked * salary) * TAX_RATE

  const takeHomePay = pay - taxedMoney
  const TAX_RATE = 0.18

  // Process


  // Output
  document.getElementById("answer").innerHTML =
    "Your take-home pay is: " + takeHomePay
}
