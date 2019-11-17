import firebase from 'firebase';
import '@firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDX5wTmc-AnzGwIkIgpLmGCd9p_RrIuUS0',
  authDomain: 'proman-app-dev.firebaseapp.com',
  databaseURL: 'https://proman-app-dev.firebaseio.com',
  projectId: 'proman-app-dev',
  storageBucket: 'proman-app-dev.appspot.com',
  messagingSenderId: '885094963501',
  appId: '1:885094963501:web:10f35537cc8a58084c1ba4',
  measurementId: 'G-T3DDEGYXFT'
};

// Initialize Firebase
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
