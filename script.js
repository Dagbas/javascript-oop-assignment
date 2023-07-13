// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#

// Encapsulation example
class Car {
	constructor(Make, Model, Year, Color) {
		this.make = Make;
		this.model = Model;
		this.year = Year;
		this.color = Color;

	}

	getMake () {
		return this.make
	};

	getModel () {
		return this.model
	};

	getYear () {
		return this.year
	};

	getColor () {
		return this.color
	};
}

let vehicle = new Car('Toyota', 'Land Cruiser', '2022', 'Gunmetal Grey');
console.log(vehicle)



	
