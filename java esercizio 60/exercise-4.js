const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve,reject)=>{
    if(persons.find(item => item.id == id)){
      return resolve(persons.find(item => item.id == id))
    }else reject("error")
  })
}
function fetchJobById(id){
  return new Promise((resolve,reject)=>{
    if(jobs.find(item => item.id == id)){
      return resolve(jobs.find(item => item.id == id))
    }else reject("error")
  })
}
Promise.all([fetchPersonById(1),fetchJobById(2)])
console.log(fetchPersonById(1),fetchJobById(2))