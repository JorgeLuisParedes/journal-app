// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev / Prod
// const firebaseConfig = {
// 	apiKey: 'AIzaSyClFR_UPJlVh4KL4pZB-6EcBcKS16iRI-o',
// 	authDomain: 'react-cursos-d46a6.firebaseapp.com',
// 	projectId: 'react-cursos-d46a6',
// 	storageBucket: 'react-cursos-d46a6.appspot.com',
// 	messagingSenderId: '781467603595',
// 	appId: '1:781467603595:web:d8803900aedcff9e1bba8e',
// };

// Testing
const firebaseConfig = {
	apiKey: 'AIzaSyCp7C_CVAGBw9PZPO4gxNTnXtpzx7C-uqY',
	authDomain: 'react-cursos-test-64ab9.firebaseapp.com',
	projectId: 'react-cursos-test-64ab9',
	storageBucket: 'react-cursos-test-64ab9.appspot.com',
	messagingSenderId: '146626033361',
	appId: '1:146626033361:web:8c582bfbf7dd1d1c81f7f0',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
