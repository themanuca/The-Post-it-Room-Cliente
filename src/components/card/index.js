import React from "react";
import "./index.css";
import { useEffect } from "react";



export default function Card({texto, cor}){
    return(
        
            <div className="container">
                
                <div className="card">
                    <div className="box" style={{backgroundColor:cor}}>
                        <div className="content" style={{backgroundColor:cor}}>
                            <p style={{backgroundColor:cor}} >{texto}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
    )
}