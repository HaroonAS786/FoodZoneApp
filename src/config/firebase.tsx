// firebase.ts

// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC5NuNS8Gd_tIzX50X3481O8Yi_XxKMRjc',
    authDomain: 'foodzone-69e30.firebaseapp.com',
    projectId: 'foodzone-69e30',
    storageBucket: 'foodzone-69e30.appspot.com',
    messagingSenderId: '1024260130549',
    appId: '1:1024260130549:web:e2871e091beec9cc53a7bc',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Export authentication
export const auth: Auth = getAuth(app);

export default app;