// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBly4qLCJaBhuCIJ7EdF7DQ8pzBMYR6ql0",
  authDomain: "attendancemgmt-d115e.firebaseapp.com",
  databaseURL: "https://attendancemgmt-d115e-default-rtdb.firebaseio.com",
  projectId: "attendancemgmt-d115e",
  storageBucket: "attendancemgmt-d115e.appspot.com",
  messagingSenderId: "581689292674",
  appId: "1:581689292674:web:8f5b29f961645583ed019b",
  measurementId: "G-88E3MB7LYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
  
    // Add attendance record to Firestore
    try {
      await db.collection('attendance').add({
        name: name,
        status: status,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  
    // Add attendance record to table
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${status}</td>
    `;
    tableBody.appendChild(row);
  
    form.reset();
  });
  
