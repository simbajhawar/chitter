
 var firebaseConfig = {
      apiKey: "AIzaSyAHZXmezX6hlyAdn4MybPA-DpNXgErdRIs",
      authDomain: "chitter-37605.firebaseapp.com",
      databaseURL: "https://chitter-37605-default-rtdb.firebaseio.com",
      projectId: "chitter-37605",
      storageBucket: "chitter-37605.appspot.com",
      messagingSenderId: "569758384885",
      appId: "1:569758384885:web:7c6d1a18b644cd22427bbc"
    };
    

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerhtml="welcome to chitter"+user_name+  "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

      
      });});}
getData();

function addroom()
{
    room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}