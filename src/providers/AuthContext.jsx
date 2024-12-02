import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const authContext = createContext(null);

function AuthContext({ children }) {
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setAuthLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoading(false);
    });

    console.log(user);

    return () => unsubscribe();
  }, []);

  const value = {};
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
