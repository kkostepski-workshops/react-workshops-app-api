import express from 'express';

import personController from './controllers/personController';
import attractionController from './controllers/attractionController';
// import matchController from './controllers/matchController'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'React Workshops API works.',
    message: null
  });
});

router
  .route('/person')
  .get(personController.index)
  .post(personController.new);

router
  .route('/person/:id')
  .get(personController.view)
  .put(personController.update)
  .delete(personController.delete);

router
  .route('/attraction')
  .get(attractionController.index)
  .post(attractionController.new);

router
  .route('/attraction/:id')
  .get(attractionController.view)
  .put(attractionController.update)
  .delete(attractionController.delete);

// router.route('/matching')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

export default router;
