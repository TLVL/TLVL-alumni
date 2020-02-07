const router = require('express').Router();

const authenticationRoutes = require('./authenticationRoutes');
const accountRoutes = require('./accountRoutes');
const signupController = require('../controllers/signupController');
const others = require('../controllers/others');

router.use('/', authenticationRoutes);
router.use('/account', accountRoutes);

router.get('/map', others.mapList);
router.get('/about', others.aboutPage);
router.get('/signup', signupController.renderSignupPage);
router.post('/signup', signupController.signup);
router.get('/login', others.loginPage);
router.get('/', (req, res) => res.redirect('/map'));

module.exports = router;
