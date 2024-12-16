import { createContext, useCallback, useState } from 'react';

interface ContextType {
  user: null;
  signin: (newUser: any, cb: any) => void;
  signout: (cb: any) => void;
}

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    const signin = useCallback((newUser:any, cb:any) => {
        setUser(newUser);
        cb();
    }, [setUser])
  
    const signout = (cb:any) => {
        setUser(null);
        cb();
    }

    const value: ContextType = {user, signin, signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}