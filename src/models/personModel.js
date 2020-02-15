import mongoose from 'mongoose';

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Person = mongoose.model('person', personSchema);

Person.get = (callback, limit) => {
  Person.find(callback).limit(limit);
};

export default Person;
