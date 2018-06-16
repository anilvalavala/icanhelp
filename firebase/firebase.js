import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_AP_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// database.ref().on('value', 
// (snapshot) => {
//     const helpItems = [];

//     snapshot.forEach((childSnapshot) => {
//         helpItems.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(helpItems);
// },
// (e) => {
//     console.log('Error while retrieving the data')
// });

// database.ref().push({
//     title: 'Books',
//     description: 'Books available for donation',
//     fromDate: 1212121212,
//     toDate: 2121212121,
//     email: 'anilkumar.v@hotmail.com'
// });

// database.ref().push({
//     title: 'Food',
//     description: 'Food available for donation',
//     fromDate: 1212121212,
//     toDate: 2121212121,
//     email: 'anilkumar.v@hotmail.com'
// });