import mongoose from 'mongoose';

const attractionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

let Attraction;
try {
  Attraction = mongoose.model('attraction');
} catch {
  Attraction = mongoose.model('attraction', attractionSchema);
}

Attraction.get = (callback, limit) => {
  Attraction.find(callback).limit(limit);
};

export default Attraction;
