import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [a, setA] = useState();
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }} a={{ a, setA }}>
            {children}
        </UserContext.Provider>
    );
};
