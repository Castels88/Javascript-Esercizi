const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function replacer (key, value) {
  if (typeof value === "number" || key == "") {
      return value;
  }
}

const x = [
  "id","age"
]//altro metodo
const json = JSON.stringify(person, replacer, 2)


console.log(JSON.parse(json)); // Should return: { id: 1, age: 25 }