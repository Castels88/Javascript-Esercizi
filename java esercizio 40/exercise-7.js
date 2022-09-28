class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get_firstname(){
    return this.firstName;
  }
  set_firstname(value){
    return this.firstName = value;
  }
  get_lastname(){
    return this.lastName;
  }
  set_lastname(value){
    return this.lastName = value;
  }
  get_age(){
    return this.age;
  }
  set_age(value){
    return this.age = value;
  }
  get fullName(){
    return (`${this.firstName} ${this.lastName}`)
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);