import React, { createContext } from 'react';

export const AuthContest = createContext();

const AuthProvider = ({children}) => {
    const user = {displayName : 'batas ali'}


    const authInfo = {user};

    return (
        <AuthContest.Provider value={ authInfo }>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;