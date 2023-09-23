// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore,  addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ue9JUNWql1X0MZPjdwz4XmyRCDLQgF0",
  authDomain: "it-base-d4d0f.firebaseapp.com",
  projectId: "it-base-d4d0f",
  storageBucket: "it-base-d4d0f.appspot.com",
  messagingSenderId: "529286456091",
  appId: "1:529286456091:web:c8e993bfb93faa07a269be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const elevCol = collection(db, 'elever')

const fornavn = document.getElementById('fornavn');
const etternavn = document.getElementById('etternavn');
const telefon = document.getElementById('telefon');
const email = document.getElementById('email')
const registrer = document.getElementById('registrer');
const container = document.querySelector('.container');

registrer.addEventListener('submit', async(event) => {
  event.preventDefault();
  const nyElev = await addDoc(
    elevCol,{
      fornavn: fornavn.value,
      etternavn: etternavn.value,
      telefon: telefon.value,
      email: email.value,
    });
    console.log('Nytt doc skrevet til database med id: ', nyElev.id);
});

const snapshot = await getDocs(
  elevCol
);

snapshot.forEach((doc) => {
  container.innerHTML += `
    <div class="resultat">
    ID: ${doc.id}
    Fornavn: ${doc.data(). fornavn}<br>
    Etternavn: ${doc.data(). etternavn}<br>
    Telefon: ${doc.data(). telefon}<br>
    E-mail: ${doc.data(). e-mail}
  `
});






