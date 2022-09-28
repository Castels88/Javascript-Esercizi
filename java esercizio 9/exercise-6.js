function getKeys(obj) {
const name = []
for ( let esercio in obj) {
name.push(esercio)
}
console.log(name)
} 


  
    


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
