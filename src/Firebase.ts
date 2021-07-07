import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtMMSO4gYrrRucD5vqU8OmIqeYOjJx0TY",
    authDomain: "bodaclausanti.firebaseapp.com",
    databaseURL: "https://bodaclausanti.firebaseio.com",
    projectId: "bodaclausanti",
    storageBucket: "bodaclausanti.appspot.com",
    messagingSenderId: "132602810695",
    appId: "1:132602810695:web:e416e12754b49a21bf3c62",
    measurementId: "G-SV936EXZYW"
};

const firebaseConf = firebase.initializeApp(config);
export default firebaseConf;
