import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init goes here
var firebaseConfig = {
  apiKey: 'AIzaSyAaDYojUTo0ExprMN09a77Z1l4pLs9JQrE',
  authDomain: 'growrk-8cd13.firebaseapp.com',
  databaseURL: 'https://growrk-8cd13.firebaseio.com',
  projectId: 'growrk-8cd13',
  storageBucket: 'growrk-8cd13.appspot.com',
  messagingSenderId: '994696802178',
  appId: '1:994696802178:web:1a3042bd704229f72fa99b',
  measurementId: 'G-MCTL3YEL1W'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const settings = {}
db.settings(settings)

// firebase collections
/*
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
*/

export {
  db,
  auth,
  currentUser,
  firebase
  /*
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
  */
}
