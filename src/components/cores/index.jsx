import React from "react";
import "./styles.css"

export default function SelectCores({onChange, disabled}){

    


    return(
        <div  className="container-cara">
            <div className="content-cara">
                <input type="checkbox" onChange={onChange} className="amarelo" id="scales" name="scales" value="#ffdd00" disabled={disabled} />
               
            </div>
            <div className="content-cara">
                <input type="checkbox"   onChange={onChange} className="rosa" id="scales" name="scales" value="#f40ab0" disabled={disabled} />
               
            </div>
            <div className="content-cara">
                <input type="checkbox"  onChange={onChange} className="verde" id="scales" name="scales" value="#c6ef35" disabled={disabled} />
                
            </div>
            <div className="content-cara">
                <input type="checkbox"  onChange={onChange} className="azul" id="scales" name="scales" value="#67e3f9" disabled={disabled} />
              
            </div>
        </div>
    )
}