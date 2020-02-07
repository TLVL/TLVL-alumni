const router = require('express').Router();
const alumniController = require('./alumniController');
const mock = require('./alumniMock');

router.route('/')
  .get((req, res) => {
    res.json({
      alumni: mock.mockAlumni()
    });
  });

router
  .route('/count')
  .get(alumniController.getAlumniCount);

module.exports = router;
