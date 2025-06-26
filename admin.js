// FIREBASE SK CONFIG CODE
const firebaseConfig = {
  apiKey: "AIzaSyACJCczAd4xuzwZ8YbOk2ArecT1Zsme1K8",
  authDomain: "grievance-system-430a0.firebaseapp.com",
  projectId: "grievance-system-430a0",
  storageBucket: "grievance-system-430a0.firebasestorage.app",
  messagingSenderId: "615464275841",
  appId: "1:615464275841:web:7549c612b7db3e1568a280",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Load grievances
db.ref("grievances").on("child_added", snapshot => {
  const data = snapshot.val();
  addToTable(data);
});

function addToTable(grievance) {
  const table = document.getElementById("grievanceBody");
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  const timeCell = document.createElement("td");
  const messageCell = document.createElement("td");

  nameCell.textContent = grievance.name || "Anonymous";
  timeCell.textContent = grievance.time || "N/A";
  messageCell.textContent = grievance.message || "—";

  row.appendChild(nameCell);
  row.appendChild(timeCell);
  row.appendChild(messageCell);
  table.appendChild(row);
}
