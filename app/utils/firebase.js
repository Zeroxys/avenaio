import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDmaN7cVDZ2r_31HRcWa79c67Aje1rn2T4",
  authDomain: "regcitas-a03ee.firebaseapp.com",
  projectId: "regcitas-a03ee",
  storageBucket: "regcitas-a03ee.appspot.com",
  messagingSenderId: "240343262113",
  appId: "1:240343262113:web:af3a0173ff40e44ec221e0"
  };
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
