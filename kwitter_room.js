var firebaseConfig = {
  apiKey: "AIzaSyD5Lp0kQoXU0ukUjMPk6z3HGXJTMM4TDsk",
  authDomain: "c94-kwitter-webapp---part-2.firebaseapp.com",
  databaseURL: "https://c94-kwitter-webapp---part-2-default-rtdb.firebaseio.com",
  projectId: "c94-kwitter-webapp---part-2",
  storageBucket: "c94-kwitter-webapp---part-2.appspot.com",
  messagingSenderId: "329829934543",
  appId: "1:329829934543:web:f4162daf30d5d74c231eba",
  measurementId: "G-NY2CXTVPTR"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function logout(){
    window.location="index.html"
}


function AddRoom(){
    var room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    }); 
    localStorage.setItem("room_name",room_name);

    window.location="chat.html"

}