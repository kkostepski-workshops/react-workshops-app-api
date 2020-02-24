import mongoose from 'mongoose';
import async from 'async';

import AssignAttraction from '../models/assignAttractionModel';

export default {
  index: (req, res) => {
    AssignAttraction.get((err, assignments) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        status: 'success',
        message: null,
        data: assignments.reduce(
          (acc, curr) => ({ ...acc, [curr.personId]: curr.attractionId }),
          {}
        )
      });
    });
  },

  new: (req, res) => {
    mongoose.connection.dropCollection('assignattractions', (success, dropError) => {
      let error = false;
      const models = [];
      const idPairs = Object.entries(req.body);

      async.forEach(idPairs, ids => {
        const assignAttraction = new AssignAttraction();
        assignAttraction.personId = ids[0];
        assignAttraction.attractionId = ids[1];
        models.push(assignAttraction);
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

  view: (req, res) => {
    AssignAttraction.findById(req.params.id, (err, assignment) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: null,
          data: assignment
        });
      }
    });
  },

  update: (req, res) => {
    AssignAttraction.findById(req.params.id, (err, assignment) => {
      if (err) {
        res.send(err);
      } else {
        assignment.name = req.body.name ? req.body.name : assignment.name;

        assignment.save(err => {
          if (err) {
            res.json(err);
          } else {
            res.json({
              message: 'Attraction has been updated',
              data: assignment
            });
          }
        });
      }
    });
  },

  delete: (req, res) => {
    AssignAttraction.remove(
      {
        _id: req.params.id
      },
      (err, assignment) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            status: 'success',
            message: 'Attraction assignment has been removed'
          });
        }
      }
    );
  }
};
