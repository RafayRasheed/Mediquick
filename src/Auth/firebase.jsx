// firebase.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import firestore module
import { getAuth } from "firebase/auth";
// Firebase is available after the script is loaded
const firebaseConfig = {
  apiKey: "AIzaSyBwiXUNzt2achGM4_i6uGJwjJl4V86z6tQ",
  authDomain: "mediquick-78b23.firebaseapp.com",
  projectId: "mediquick-78b23",
  storageBucket: "mediquick-78b23.firebasestorage.app",
  messagingSenderId: "494570771144",
  appId: "1:494570771144:web:a83f99d12b84c5e392cbfd",
  measurementId: "G-DG9E90VRZC",
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
