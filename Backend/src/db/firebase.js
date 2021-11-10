const admin = require('firebase-admin');
const serviceAccount = require('./experts-51d7f-7c6552077fa4.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;