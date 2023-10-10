const person = {
  firstName: 'Penelope',
  lastName: 'Lee',
  hobby: 'photography',
};
console.log(person);

const fullName = 'Penelope' + ' ' + 'Lee';
console.log("The person's name is:", fullName);

person.job = 'Architect';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Designer';
console.log("The person's previous job was:", person['previousJob']);

console.log(person);
