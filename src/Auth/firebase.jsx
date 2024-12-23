// firebase.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import firestore module
import { getAuth } from "firebase/auth";
// Firebase is available after the script is loaded
const firebaseConfig = {
  apiKey: "AIzaSyB1dZqeMO4l3l8HXQCBEKFTyRuWsOpvFiM",
  authDomain: "e-commerce-45a82.firebaseapp.com",
  projectId: "e-commerce-45a82",
  storageBucket: "e-commerce-45a82.firebasestorage.app",
  messagingSenderId: "23041770334",
  appId: "1:23041770334:web:d9addc89e5d851ddd285cf",
  measurementId: "G-RX7KNP8XCD"
};
let app;
let auth;
let firestore; // Declare firestore variable

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  firestore = getFirestore(app); 
  // Initialize firestore
  console.log("initializing Firebase: Successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { auth, firestore, AuthContext }; // Export firestore along with auth and AuthContext
