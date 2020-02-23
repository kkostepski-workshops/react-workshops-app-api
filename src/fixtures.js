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
  { name: 'Joe', surname: 'Doe', email: 'joe.doe@example.com', gender: 'male' },
  { name: 'John', surname: 'Lennon', email: 'john.lennon@example.com', gender: 'male' },
  { name: 'Dan', surname: 'Abramov', email: 'dan.abramov@example.com', gender: 'male' },
  { name: 'Kate', surname: 'Bush', email: 'kate.bush@example.com', gender: 'female' },
  { name: 'Curtney', surname: 'Love', email: 'curtney.love@example.com', gender: 'female' },
  { name: 'Kurt', surname: 'Cobain', email: 'kurt.cobain@example.com', gender: 'male' },
  { name: 'Dido', surname: 'Armstrong', email: 'dido.armstrong@example.com', gender: 'female' },
  {
    name: 'Katarzyna',
    surname: 'Nosowska',
    email: 'katarzyna.nosowskag@example.com',
    gender: 'female'
  },
  { name: 'Joe', surname: 'Bonamassa', email: 'joe.bonamassa@example.com', gender: 'male' },
  { name: 'Jimi', surname: 'Hendrix', email: 'jomi.hendrix@example.com', gender: 'male' },
  { name: 'Monika', surname: 'Borzym', email: 'monika.borzym@example.com', gender: 'female' },
  { name: 'David', surname: 'Gahan', email: 'david.gahan@example.com', gender: 'male' },
  { name: 'Elin', surname: 'Larsson', email: 'elin.Larsson@example.com', gender: 'female' },
  { name: 'Walter', surname: 'Trout', email: 'walter.trout@example.com', gender: 'male' },
  {
    name: 'Agnieszka',
    surname: 'Chylińska',
    email: 'agnieszka.chylińska@example.com',
    gender: 'female'
  },
  {
    name: 'Sandra',
    surname: 'Nasić',
    email: 'sandra.nasic@example.com',
    gender: 'female'
  },
  {
    name: 'Ozzy',
    surname: 'Osbourne',
    email: 'ozzy.osbourne@example.com',
    gender: 'male'
  }
];

const attractionList = [{ name: 'Bowling' }, { name: 'Quads' }, { name: 'Drinking' }];
