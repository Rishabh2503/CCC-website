// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyB9V3EhQm3A3wjUcVimh9wZWAhZwK-YG20",
    authDomain: "ccc-website-8471b.firebaseapp.com",
    databaseURL: "https://ccc-website-8471b-default-rtdb.firebaseio.com",
    projectId: "ccc-website-8471b",
    storageBucket: "ccc-website-8471b.appspot.com",
    messagingSenderId: "505257686858",
    appId: "1:505257686858:web:f36434ef6b8e840e9533b3",
    measurementId: "G-99VG8Y0412",
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref("messages");
  
  // Listen for form submit
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var name = getInputVal("name");
    var role = getInputVal("role");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");
  
    // Save message
    saveMessage(name, role, email, phone, message);
  
    // Show alert
    document.querySelector(".alert").style.display = "block";
  
    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Clear form
    document.getElementById("contactForm").reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, role, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      role: role,
      email: email,
      phone: phone,
      message: message,
    });
  }