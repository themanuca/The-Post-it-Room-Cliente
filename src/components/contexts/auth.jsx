import React, {createContext, useState} from "react";


export const AuthContext = createContext();



// export const AuthProvider=({childrem})=>{

//     const [user, setUser] = useState(null);

//     const logar = (email, senha)=>{
//         console.log("logar", {email, senha});
//         setUser({id:"123", email})
//     };

//     //user != null
//     //authenticated = true

//     const logout = ()=>{
//         console.log("logout")
//     };

//     return(
//         <AuthContext.Provider 
//         value={{authenticated: !!user,user, 
//             logar, logout}}
//         >

//             {childrem}
//         </AuthContext.Provider>
//     );
// };