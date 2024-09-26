package com.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class TaxCalculatorTest {

    @Test
    public void testCalculateTax_ValidInputs() {
        assertEquals(0, TaxCalculator.calculateTax(9000000, 1000000, 2)); // Taxable income = 0
        assertEquals(0, TaxCalculator.calculateTax(10000000, 1000000, 1)); // 10% of 5000000 - 250000
        assertEquals(0, TaxCalculator.calculateTax(20000000, 1000000, 4)); // 15% of 5000000 - 750000
        assertEquals(1950000, TaxCalculator.calculateTax(40000000, 1000000, 3)); // 20% of 5000000 - 2250000
        assertEquals(8250000, TaxCalculator.calculateTax(80000000, 1000000, 3)); // 25% of 5000000 - 6250000
        assertEquals(9550000, TaxCalculator.calculateTax(100000000, 1000000, 1)); // 30% of 5000000 - 16250000
    }

    @Test
    public void testCalculateTax_InvalidInputs() {
        assertEquals(-1, TaxCalculator.calculateTax(0, 8, 8)); // Invalid salary
        assertEquals(-1, TaxCalculator.calculateTax(10000000, -1, 0)); // Invalid tax exempt
        assertEquals(-1, TaxCalculator.calculateTax(10000000, 1000000, -1)); // Invalid dependents
    }
}