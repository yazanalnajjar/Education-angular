import firebase from 'firebase/app';
import 'firebase/storage';


var firebaseConfig = {
  apiKey: "AIzaSyDnAnBgRkh72A6z8wVZOGWa74HT3igfz4M",
  authDomain: "edu-angular.firebaseapp.com",
  databaseURL: "https://edu-angular.firebaseio.com",
  projectId: "edu-angular",
  storageBucket: "edu-angular.appspot.com",
  messagingSenderId: "253398627266",
  appId: "1:253398627266:web:b536657cb34cf6f3"
};
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  // var database = firebase.database();



  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
