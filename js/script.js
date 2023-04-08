// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

function calculatePressed() {
  // Input through textfields
  const hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  const hourlyRate = parseFloat(document.getElementById("hourly-rate").value)
  const TAX_RATE = 0.18

  // Process
  const pay = hoursWorked * hourlyRate
  const taxedMoney = hoursWorked * hourlyRate * TAX_RATE

  const takeHomePay = pay - taxedMoney

  // Output
  document.getElementById("pay").innerHTML =
    "Your take-home pay is: $" + takeHomePay.toFixed(2)
  document.getElementById("taxed").innerHTML =
    "The government will take: $" + taxedMoney.toFixed(2)
}
