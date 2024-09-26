package com.test;

import java.util.Scanner;
import java.text.NumberFormat;
import java.util.Locale;
import java.util.Currency; // Add this import

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // New input for tax-exempt amounts and number of dependents
        System.out.print("Enter salary: ");
        double salary = Double.parseDouble(scanner.nextLine());
        System.out.print("Enter tax-exempt amounts: ");
        double taxExempt = Double.parseDouble(scanner.nextLine());
        System.out.print("Enter number of dependents: ");
        int dependents = Integer.parseInt(scanner.nextLine());
        
        // Updated tax calculation method
        double tax = TaxCalculator.calculateTax(salary, taxExempt, dependents);
        
        // Format the tax amount in VND
        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(new Locale("vi", "VN"));
        currencyFormat.setCurrency(Currency.getInstance("VND")); // Set currency to VND
        if (tax == -1) {
            System.out.println("Invalid input. One of the values is less than or equal to zero.");
        } else {
            System.out.println("Calculated tax: " + currencyFormat.format(tax));
        }
        
        scanner.close();
    }
}

// Updated TaxCalculator class
class TaxCalculator {
    public static double calculateTax(double salary, double taxExempt, int dependents) {
        // Validation for inputs
        if (salary <= 0 || taxExempt <= 0 || dependents < 0) {
            return -1;
        }
        
        // Calculate taxable income
        double taxableIncome = salary - taxExempt - 9_000_000 - dependents * 4_000_000;
        
        if (taxableIncome <= 0) {
            return 0;
        } else if (taxableIncome <= 5_000_000) {
            return 0.05 * taxableIncome; // 5%
        } else if (taxableIncome <= 10_000_000) {
            return 0.10 * taxableIncome - 250000; // 10%
        } else if (taxableIncome <= 20_000_000) {
            return 0.15 * taxableIncome - 750000; // 15%
        } else if (taxableIncome <= 40000000) {
            return 0.20 * taxableIncome - 2250000; // 20%
        } else if (taxableIncome <= 80000000) {
            return 0.25 * taxableIncome - 6250000; // 25%
        } else {
            return 0.30 * taxableIncome - 16250000; // 30%
        }
    }
}