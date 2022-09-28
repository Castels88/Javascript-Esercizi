const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

let anotherName = person2;
anotherName.firstName = "Simon";
console.log(anotherName)

// vengono entrambi gli oggetti modificati perche essendo la const person2 = person1 e anche perche sono in uno scope 
//globale


console.log(person1);
console.log(person2);