
var firebaseConfig = {
      apiKey: "AIzaSyBZDXATHRaqNviSbF-ej_QM2v8TywRJ3DY",
      authDomain: "kwitter-5e631.firebaseapp.com",
      databaseURL: "https://kwitter-5e631-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e631",
      storageBucket: "kwitter-5e631.appspot.com",
      messagingSenderId: "1033997868943",
      appId: "1:1033997868943:web:65321c6a2b51fcb968b5fa"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
