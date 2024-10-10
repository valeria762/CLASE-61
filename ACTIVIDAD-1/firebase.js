// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBr7A8F10zmTcgApVXCx6fQXVbhRAvdaiE",
    authDomain: "valeria-b502d.firebaseapp.com",
    projectId: "valeria-b502d",
    storageBucket: "valeria-b502d.appspot.com",
    messagingSenderId: "644719188961",
    appId: "1:644719188961:web:758c2cf01c6174f6a810a0",
    measurementId: "G-4BRN2LRCJT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  export const guardarTarea = (title,description) => {
    addDoc(collection(db,'tareas'),{title,description})
  }