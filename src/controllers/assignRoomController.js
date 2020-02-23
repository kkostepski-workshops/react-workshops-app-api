import mongoose from 'mongoose';
import async from 'async';

import AssignRoom from '../models/assignRoomModel';

export default {
  index: (req, res) => {
    AssignRoom.get((err, assignments) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        status: 'success',
        message: null,
        data: assignments.map(a => a.ids)
      });
    });
  },

  new: (req, res) => {
    mongoose.connection.dropCollection('assignrooms', (success, dropError) => {
      let error = false;
      const models = [];
      async.forEach(req.body.ids, ids => {
        const assignRoom = new AssignRoom();
        assignRoom.ids = ids;
        models.push(assignRoom);
      });

      async.eachSeries(
        models,
        (assignment, asyncdone) => {
          assignment.save(asyncdone);
        },
        err => {
          error = true;
        }
      );

      if (error || dropError) {
        res.json(error);
      } else {
        res.json({
          message: 'New assignments have been added'
        });
      }
    });
  },

  delete: (req, res) => {
    mongoose.connection.dropCollection('assignrooms', (success, dropError) => {
      if (dropError) {
        res.send(dropError);
      } else {
        res.json({
          status: 'success',
          message: 'Assignments have been removed'
        });
      }
    });
  }
};
