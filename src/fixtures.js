import Person from './models/personModel';
import connectToDB from './connectToDB';

connectToDB(() => {
  personList.forEach(person => {
    const personModel = new Person(person);
    personModel.save();
  });
});

const personList = [
  { name: 'John', surname: 'Smith', email: 'john.smith@example.com', gender: 'male' },
  { name: 'Johny', surname: 'Ive', email: 'johny.ive@example.com', gender: 'male' },
  { name: 'Joe', surname: 'Doe', email: 'joe.doe@example.com', gender: 'male' }
];
