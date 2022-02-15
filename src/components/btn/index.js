import React from "react";
import {Button} from "./styles";

export default function Butão({texto,onclick}){
    return(
        <Button>
            <button onClick={onclick}>{texto}</button>
        </Button>
    )
}