const person = {
  set firstName (nome){
    this.firstName = nome;
  },
  get firstName(){
    return this.firstName;
  },
  set lastName (cognome){
    this.lastName = cognome;
  },
  get lastName(){
    return this.lastName;
  },

  fullName(){
    return (`${this.firstName}`) (`${this.lastName}`);
  }
}
const john = Object.create(person)
john.firstName = "john";
john.lastName = "doe";

const simon = Object.create(person);
simon.firstName = "simon";
simon.lastName = "collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins