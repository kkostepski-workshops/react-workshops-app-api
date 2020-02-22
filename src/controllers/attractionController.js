import Attraction from '../models/attractionModel';

export default {
  index: (req, res) => {
    Attraction.get((err, attractions) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        status: 'success',
        message: null,
        data: attractions
      });
    });
  },

  new: (req, res) => {
    const attraction = new Attraction();
    attraction.name = req.body.name ? req.body.name : attraction.name;

    attraction.save(err => {
      if (err) {
        res.json(err);
      } else {
        res.json({
          message: 'New attraction has been added',
          data: attraction
        });
      }
    });
  },

  view: (req, res) => {
    Attraction.findById(req.params.id, (err, attraction) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: null,
          data: attraction
        });
      }
    });
  },

  update: (req, res) => {
    Attraction.findById(req.params.id, (err, attraction) => {
      if (err) {
        res.send(err);
      } else {
        attraction.name = req.body.name ? req.body.name : attraction.name;

        attraction.save(err => {
          if (err) {
            res.json(err);
          } else {
            res.json({
              message: 'Attraction has been updated',
              data: attraction
            });
          }
        });
      }
    });
  },

  delete: (req, res) => {
    Attraction.remove(
      {
        _id: req.params.id
      },
      (err, attraction) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            status: 'success',
            message: 'Attraction has been removed'
          });
        }
      }
    );
  }
};
