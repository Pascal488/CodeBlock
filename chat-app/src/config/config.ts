import { initializeApp}from 'firebase/app';

import { getAuth}from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

import { getStorage } from "firebase/storage";





 const firebaseConfig= {
    
        apiKey: "AIzaSyCxXuGIQO-cQmVk-Yfd938lraOW6tFTVDs",

        authDomain: "chat-app-f23b6.firebaseapp.com",
      
        projectId: "chat-app-f23b6",
      
        storageBucket: "chat-app-f23b6.appspot.com",
        
        messagingSenderId: "853614425737",
      
        appId: "1:853614425737:web:2c7e940ffb2b2e90953858",
      
        measurementId: "G-N3GDJ52DTM"
    
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

export const storage = getStorage();


