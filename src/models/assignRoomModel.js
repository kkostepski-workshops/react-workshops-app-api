import mongoose from 'mongoose';

const assignRoomSchema = mongoose.Schema({
  ids: {
    type: Array,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

let AssignRoom;
try {
  AssignRoom = mongoose.model('assignRoom');
} catch {
  AssignRoom = mongoose.model('assignRoom', assignRoomSchema);
}

AssignRoom.get = (callback, limit) => {
  AssignRoom.find(callback).limit(limit);
};

export default AssignRoom;
