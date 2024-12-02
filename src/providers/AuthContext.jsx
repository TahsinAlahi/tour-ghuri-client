import { createContext, useContext } from "react";

const authContext = createContext(null);

function AuthContext({ children }) {
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
