function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function(){
    console.log(`${firstName} ${lastName}`)
  }  
}   
const john = new Person("john","doe")
const simon = new Person("simon","collins")
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins