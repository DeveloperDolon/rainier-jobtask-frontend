import { createContext, useState } from 'react';
import PropTypes from "prop-types";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const authValues = {
        user,
        setUser
    }

   return (
    <AuthContext.Provider value={authValues}>
        {children}
    </AuthContext.Provider>
   )
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}