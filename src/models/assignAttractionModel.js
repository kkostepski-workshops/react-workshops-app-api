import mongoose from 'mongoose';

const assignAttractionSchema = mongoose.Schema({
  personId: {
    type: String,
    required: true
  },
  attractionId: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

let AssignAttraction;
try {
  AssignAttraction = mongoose.model('assignAttraction');
} catch {
  AssignAttraction = mongoose.model('assignAttraction', assignAttractionSchema);
}

AssignAttraction.get = (callback, limit) => {
  AssignAttraction.find(callback).limit(limit);
};

export default AssignAttraction;
