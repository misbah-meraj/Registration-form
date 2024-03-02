// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  ref,
  set,
  getDatabase,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGhfIPPaemZaEoy-ao9scBOL3PxG0TZSA",
  authDomain: "registration-for-3a96c.firebaseapp.com",
  databaseURL: "https://registration-for-3a96c-default-rtdb.firebaseio.com",
  projectId: "registration-for-3a96c",
  storageBucket: "registration-for-3a96c.appspot.com",
  messagingSenderId: "818599599189",
  appId: "1:818599599189:web:5c8633bf5b02903e4d48dc",
  measurementId: "G-9H16XQ2QK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var city = document.getElementById("city");
var course = document.getElementById("course");
var fullname = document.getElementById("fullname");
var fathername = document.getElementById("fathername");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cnic = document.getElementById("cnic");
var fatherCnic = document.getElementById("fatherCnic");
var dateOfBirth = document.getElementById("dateOfBirth");
var gender = document.getElementById("gender");
var address = document.getElementById("address");
var lastqualification = document.getElementById("qualification");
var laptop = document.getElementById("laptop");
var picture = document.getElementById("picture");
window.add = function () {
  var obj = {
    City: city.value,
    Course: course.value,
    Fullname: fullname.value,
    Fathername: fathername.value,
    Email: email.value,
    Phone: phone.value,
    Cnic: cnic.value,
    FatherCNIC: fatherCnic.value,
    DateOfBirth: dateOfBirth.value,
    Gender: gender.value,
    Address:address.value,
    Qualification:lastqualification.value,
    Laptop:laptop.value,
    Picture: picture.value,
  };

  
  obj.id = push(ref(database, "Users/")).key;
  var reference = ref(database, `Users/${obj.id}`);
  set(reference, obj);
};

function getData() {
  var reference = ref(database, "Users/");

  onValue(reference, function (data) {
    console.log(data.val());
  });
}
getData();

