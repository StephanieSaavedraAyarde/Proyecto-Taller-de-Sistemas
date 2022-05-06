const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBeCIAPzlNkY6JKStoPFNqVNDxGGGWRH-c",
  authDomain: "supermercado-estrella.firebaseapp.com",
  projectId: "supermercado-estrella",
  storageBucket: "supermercado-estrella.appspot.com",
  messagingSenderId: "84186120355",
  appId: "1:84186120355:web:0b37c7c534561dc6be7f16",
  measurementId: "G-7XENZMQY1N"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const Provider = db.collection("Provider");
const User = db.collection("User");
const Customer = db.collection('Cliente')
const Product = db.collection('Products')
const Sale = db.collection('Ventas')
const Cupon = db.collection('Cupon')

module.exports = {Provider, User, Customer, Product, Sale,Cupon}
