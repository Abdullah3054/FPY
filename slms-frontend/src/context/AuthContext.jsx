import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, role) => setUser({ email, role });
  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout, isAuthenticated: Boolean(user) }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
