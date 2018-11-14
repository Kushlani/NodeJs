class student {
	constructor(name,age) {
		this.name = "Kush";
		this.age = "31";
	}
	details() {
		console.log(`${this.name}, ${this.age}`);
	}
}

class primaryStudent extends student {
	constructor(address,grade) {
		super();
		this.address = address;
		this.grade = grade;
	}

	newDetails() {
		console.log(`${this.name}, ${this.age}, ${this.address}, ${this.grade}`);
	}
}

var Kush = new primaryStudent("Sydney", "12-G");
Kush.newDetails();
Kush.details();