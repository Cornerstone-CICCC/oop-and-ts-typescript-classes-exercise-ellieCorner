/**
 * Exercise 1: Access Modifiers
 *
 * Instructions:
 * - Create a class `Smartphone` with:
 *   - public property: `brand` (string)
 *   - private property: `batteryLevel` (number, 0-100)
 *   - protected property: `os` (string)
 * - Methods:
 *   - `charge(amount: number)` increases batteryLevel but max 100
 *   - `showInfo()` logs brand, batteryLevel, and os
  * - Create a subclass `AndroidPhone` with a method of upgradeOS that accepts a string parameter and updates the `os` property with that parameter.
 */

class Smartphone {
  
}

class AndroidPhone extends Smartphone {
  
}

// Driver code
const phone = new AndroidPhone("Samsung", 50, "Android 12");
phone.charge(30);
phone.upgradeOS("Android 13");
phone.showInfo(); // Samsung, Battery: 80%, OS: Android 13