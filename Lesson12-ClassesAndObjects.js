class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    // Class method 
    printInfo() {
        return `Person has name ${this.name}, has age ${this.age}, and lives in ${this.city}`;
    }

    // Static data member
    static country = 'USA';

    printCountry() {
        return `${this.name} lives in ${Person.country}`;
    }
}

console.log(new Person('steve', 25, 'london').printInfo());
console.log(new Person(...['alex', 32, 'New York']).printCountry());

// Inheritance concept
class Student extends Person {
    constructor(name, age, city, major, percentage) {
        super(name, age, city); // Call to parent class constructor
        this.major = major;
        this.percentage = percentage;
    }

    printStudentInfo() {
        return `major ${this.major} and has percentage ${this.percentage}`;
    }
    static someStaticMethod=()=>`I am a static method`

    // Function overriding 
    printInfo() {
        // Call to Person class printInfo 
        const parentInfo = super.printInfo(); // storing result
        return `${parentInfo} ${this.name} has major in ${this.major} and has percentage ${this.percentage}`
    }
}

console.log(new Student('micheal', 29, 'denver', 'cs', 60).printStudentInfo());
console.log(new Student('micheal', 22, 'denver', 'math', 80).printInfo());
console.log(Student.someStaticMethod())
