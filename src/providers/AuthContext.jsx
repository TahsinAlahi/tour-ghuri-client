import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const authContext = createContext(null);

function AuthContext({ children }) {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [user, setUser] = useState(null);

  async function registerWithEmail(email, password, displayName, imageUrl) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: displayName,
        photoURL: imageUrl,
      });

      setUser(userCredential.user);
      return { status: "success", message: "User created successfully" };
    } catch (error) {
      console.log(error);
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your connection.";
      }

      return { status: "error", message: errorMessage };
    } finally {
      setIsAuthLoading(false);
    }
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      return { status: "success", message: "User logged in successfully" };
    } catch (error) {
      console.log(error);

      let errorMessage = "An error occurred during login. Please try again.";
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage =
          "The login popup was closed before completing the sign-in.";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "Multiple login attempts detected. Please try again.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid credentials provided. Please try again.";
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        errorMessage =
          "An account already exists with the same email but different credentials.";
      }

      return { status: "error", message: errorMessage };
    }
  }

  useEffect(() => {
    setIsAuthLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthLoading(false);
    });

    console.log(user);

    return () => unsubscribe();
  }, []);

  const value = { user, registerWithEmail };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export function useAuth() {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
}

export default AuthContext;
