// FIREBASE SK CONFIG CODE
const firebaseConfig = {
  apiKey: "AIzaSyACJCczAd4xuzwZ8YbOk2ArecT1Zsme1K8",
  authDomain: "grievance-system-430a0.firebaseapp.com",
  projectId: "grievance-system-430a0",
  storageBucket: "grievance-system-430a0.firebasestorage.app",
  messagingSenderId: "615464275841",
  appId: "1:615464275841:web:7549c612b7db3e1568a280",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const form = document.getElementById("grievanceForm");
const grievanceText = document.getElementById("grievanceText");
// const grievanceList = document.getElementById('grievanceList');

// // Load grievances on page load
// window.onload = () => {
//   const saved = JSON.parse(localStorage.getItem("grievances")) || [];
//   // saved.forEach(addGrievanceToUI);
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user=localStorage.getItem('grievanceUser')
  const text = grievanceText.value.trim();
  if (!text || !user ) return;

  const grievance = {
    name: user,
    message: text,
    time: new Date().toLocaleString(),
  };

  //save to firebase
  db.ref('grievances').push(grievance);


  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem("grievances")) || [];
  saved.push(grievance);
  localStorage.setItem("grievances", JSON.stringify(saved));

  // Update UI
  // addGrievanceToUI(grievance);
  grievanceText.value = "";
  Username.value=" ";
  
});
