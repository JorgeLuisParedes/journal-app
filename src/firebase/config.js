// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyClFR_UPJlVh4KL4pZB-6EcBcKS16iRI-o',
	authDomain: 'react-cursos-d46a6.firebaseapp.com',
	projectId: 'react-cursos-d46a6',
	storageBucket: 'react-cursos-d46a6.appspot.com',
	messagingSenderId: '781467603595',
	appId: '1:781467603595:web:d8803900aedcff9e1bba8e',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
