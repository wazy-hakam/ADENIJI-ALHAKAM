class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I’m ${this.age} years old.`);
  }
}

const p1 = new Person("Hakam", 20);
p1.greet();
