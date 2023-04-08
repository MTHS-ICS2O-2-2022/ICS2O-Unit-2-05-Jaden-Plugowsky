// Created by: Jaden Plugowsky
// Created on: March 2023
//
// This program finds take-home pay

package main

import "fmt"

func main() {
	// This function finds take-home pay
	var hoursWorked float64
	var hourlyRate float64
	var taxRate = 0.18
	var pay float64
	var taxedMoney float64
	var takeHomePay float64

	// Input
	fmt.Println("\nThis program finds take-home pay using given values.")
	fmt.Println()
	fmt.Print("Enter how many hours you've worked: ")
	fmt.Scanln(&hoursWorked)
	fmt.Print("Enter your pay per hour ($/hr): ")
	fmt.Scanln(&hourlyRate)

	// Process
	pay = hoursWorked * hourlyRate
	taxedMoney = (hoursWorked * hourlyRate) * taxRate

	takeHomePay = pay - taxedMoney

	// Output
	fmt.Printf("\nYour take-home pay is: $%.2f", takeHomePay)
	fmt.Printf("\nThe government takes: $%.2f", taxedMoney)

	fmt.Println("\n\nDone.")
}
