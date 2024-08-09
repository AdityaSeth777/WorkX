// freelance-marketplace-backend/config/firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('../path/to/your-service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-database-name.firebaseio.com'
});

module.exports = admin;
