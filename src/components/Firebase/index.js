import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';

var firebaseConfig = {
  apiKey: 'AIzaSyBvPUKNNkzGzcVAoS6A_DgLW7SJ8Syxj7s',
  authDomain: 'simpragma-airtel.firebaseapp.com',
  databaseURL: 'https://simpragma-airtel.firebaseio.com',
  projectId: 'simpragma-airtel',
  storageBucket: 'simpragma-airtel.appspot.com',
  messagingSenderId: '591901923995',
  appId: '1:591901923995:web:f6412a1ad6d47d8700c43e',
  measurementId: 'G-YVMBYVY74Y',
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
const functions = firebase.functions();

export { firestore, auth, storage, database, functions };
