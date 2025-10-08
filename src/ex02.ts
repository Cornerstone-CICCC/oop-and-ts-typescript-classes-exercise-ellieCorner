/**
 * Exercise 2: Abstract Class
 *
 * Instructions:
 * - Create an abstract class `Appliance`:
 *   - public property: `brand` (string)
 *   - concrete method `turnOn()` logs turning on
 *   - abstract method `energyConsumption()` that returns kWh (number)
 * - Create subclasses `WashingMachine` and `Refrigerator` implementing energyConsumption and returns the kWh consumption (WashingMachine: 2.5, Refrigerator: 1.2)
 */

abstract class Appliance {

}

class WashingMachine extends Appliance {

}

class Refrigerator extends Appliance {

}

// Driver code
const wm = new WashingMachine("LG");
wm.turnOn(); // LG is now ON
console.log("Energy:", wm.energyConsumption(), "kWh"); // Energy: 2.5 kWh

const fridge = new Refrigerator("Samsung");
fridge.turnOn(); // Samsung is now ON
console.log("Energy:", fridge.energyConsumption(), "kWh"); // Energy: 1.2 kWh