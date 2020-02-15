import mongoose from 'mongoose';

const connectToDB = callback => {
  mongoose.connect(
    'mongodb://localhost/react-workshops',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    callback
  );

  if (!mongoose.connection) {
    console.log('Error connecting DB');
  } else {
    console.log('DB connected successfully');
  }
};

export default connectToDB;
