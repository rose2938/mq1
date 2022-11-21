
const firebaseConfig = {
      apiKey: "AIzaSyDGBS00bq0kRt-GgZjJj8qqC3ciARqQLC0",
      authDomain: "kwitter-ab173.firebaseapp.com",
      databaseURL: "https://kwitter-ab173-default-rtdb.firebaseio.com",
      projectId: "kwitter-ab173",
      storageBucket: "kwitter-ab173.appspot.com",
      messagingSenderId: "303341731619",
      appId: "1:303341731619:web:3d894323edec4983359696"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("username").innerHTML="hi "+ user_name+" how are you? ";
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding toom name"
  });

localStorage.setItem("room_name", room_name);
window.location ="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }

 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }