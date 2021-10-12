// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCfmMdkmIvfUOhqMjYfEIL0O9b7SpGzwes",
  authDomain: "kwitter-e2035.firebaseapp.com",
  databaseURL: "https://kwitter-e2035-default-rtdb.firebaseio.com",
  projectId: "kwitter-e2035",
  storageBucket: "kwitter-e2035.appspot.com",
  messagingSenderId: "846828463396",
  appId: "1:846828463396:web:bf1fdd8b2bd772d81dffb1"
};
//firebaseC
// Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem("User_name");
document.getElementById("User_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding Room (room.exe)"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name " + Room_names);
      row = '<div class="room_name" id="' + Room_names + '" onclick="redirectToRoomName(this.id)">' + Room_names + '</div>';
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name", nama);
  window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}