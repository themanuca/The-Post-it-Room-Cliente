import React,{useState, useContext, Children, useEffect} from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
    Navigate

}from "react-router-dom";


import Login from "../../../pages/admin/login/index"
import Register from "../../../pages/admin/register/index";

import Dashboard from "../../../pages/admin/dashboard";
import Dashboard_post from "../../../pages/admin/dashboard/post";

import api from "../../../services/api";

import Home from "../../../pages/home";

import { AuthContext } from "../../contexts/auth";


const AppRoutes = ()=>{
    

    const [user, setUser] = useState(null);
    const [loagin, setLoagin] = useState(true);

    useEffect(()=>{
        const recoverUser = localStorage.getItem("user");

        if(recoverUser){
            setUser(JSON.parse(recoverUser));
        }
        setLoagin(false);

    },[]);
  
    const Logar = (email, senha,userID, token)=>{
        
        //const naviagate = useNavigate();
        //console.log("logar", {email, senha});
        
        const logerdados = {
            userID,
            email,
        };
        
        localStorage.setItem("user", JSON.stringify(logerdados));
        //localStorage.setItem("tokenn", token);

        // api.defaults.headers.Authorization = `Bearer ${token}`;


        setUser(logerdados);
    };

    //user != null
    //authenticated = true

    const Logout = ()=>{
        console.log("logout")
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        api.defaults.headers.Authorization = null;

        setUser(null);
        const navigate = useNavigate();

        navigate("/");
    };


    const Private = ({children})=>{
        const {authenticated, loagin} = useContext(AuthContext);

        if(loagin){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to="/login"/>
        }

        return children;
    }

    return(
        <Router>
            <AuthContext.Provider 
                value={{authenticated: !!user,user,loagin, 
                Logar, Logout,setUser}}
             >
                <Routes>
                    {/* ROTA CLIENTE */}
                    <Route path="/" element={<Home/>} />

                    {/* ROTA ADMIN */}
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/dashboard/:id' element={<Private><Dashboard/></Private>}/>
                    <Route path='/dashboard/:id/post' element={<Private><Dashboard_post/></Private>}/>
                
                </Routes>
            </AuthContext.Provider>
        </Router> 
    )
}

export default AppRoutes;