var firebase = require('firebase')

var firebaseObj = {
  firebaseConfig: {
    apiKey: 'AIzaSyBRjv9TRGjiC9W_fCpiu7yYt4R9f4cYdjk',
    authDomain: 'group-formative-b.firebaseapp.com',
    databaseURL: 'https://group-formative-b.firebaseio.com',
    projectId: 'group-formative-b',
    storageBucket: 'group-formative-b.appspot.com',
    messagingSenderId: '599602191213',
    appId: '1:599602191213:web:5f3d2d104dd7e5377e1864'
  },
  getDb: function () {
    const firebaseApp = firebase.initializeApp(firebaseObj.firebaseConfig)
    const db = firebaseApp.firestore()
    return db
  }
}

module.exports = firebaseObj.getDb()
