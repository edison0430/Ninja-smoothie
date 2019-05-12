import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtqs9y81Fr5zItW616MPWCtqA9T6n99nA",
    authDomain: "udemy-ninja-smoothies-a12fb.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-a12fb.firebaseio.com",
    projectId: "udemy-ninja-smoothies-a12fb",
    storageBucket: "udemy-ninja-smoothies-a12fb.appspot.com",
    messagingSenderId: "304063072600",
    appId: "1:304063072600:web:62a01a2acc50e014"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore()