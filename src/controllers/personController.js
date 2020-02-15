import Person from '../models/personModel';

export default {
  index: (req, res) => {
    Person.get((err, people) => {
      if (err) {
        res.json({
          status: 'error',
          message: err
        });
      }

      res.json({
        status: 'success',
        message: null,
        data: people
      });
    });
  },

  new: (req, res) => {
    const person = new Person();
    person.name = req.body.name ? req.body.name : person.name;
    person.gender = req.body.gender;
    person.email = req.body.email;

    person.save(err => {
      if (err) {
        res.json(err);
      } else {
        res.json({
          message: 'New person hes been added',
          data: person
        });
      }
    });
  },

  view: (req, res) => {
    Person.findById(req.params.contact_id, (err, person) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: null,
          data: person
        });
      }
    });
  },

  update: (req, res) => {
    Contact.findById(req.params.contact_id, (err, person) => {
      if (err) {
        res.send(err);
      } else {
        person.name = req.body.name ? req.body.name : person.name;
        person.gender = req.body.gender;
        person.email = req.body.email;
        person.phone = req.body.phone;

        person.save(err => {
          if (err) {
            res.json(err);
          } else {
            res.json({
              message: 'Person has been updated',
              data: person
            });
          }
        });
      }
    });
  },

  delete: (req, res) => {
    Contact.remove(
      {
        _id: req.params.contact_id
      },
      (err, person) => {
        if (err) {
          res.send(err);
        } else {
          res.json({
            status: 'success',
            message: 'Person has been removed'
          });
        }
      }
    );
  }
};
