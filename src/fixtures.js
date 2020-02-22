import mongoose from 'mongoose';

import Person from './models/personModel';
import Attraction from './models/attractionModel';
import connectToDB from './connectToDB';

connectToDB(() => {
  // remove old entries
  mongoose.connection.db.dropDatabase();

  personList.forEach(person => {
    const personModel = new Person(person);
    personModel.save();
  });

  attractionList.forEach(attraction => {
    const attractionModel = new Attraction(attraction);
    attractionModel.save();
  });
});

const personList = [
  { name: 'John', surname: 'Smith', email: 'john.smith@example.com', gender: 'male' },
  { name: 'Johny', surname: 'Ive', email: 'johny.ive@example.com', gender: 'male' },
  { name: 'Joe', surname: 'Doe', email: 'joe.doe@example.com', gender: 'male' }
];

const attractionList = [{ name: 'Bowling' }, { name: 'Quads' }, { name: 'Drinking' }];
