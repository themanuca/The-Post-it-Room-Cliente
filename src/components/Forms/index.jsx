import React from "react";
import { Container,Content } from "./styles";

export default function Forms(){
    return (
        <Container>
            <Content>
                <h2>Sign Up</h2>
                <form>
                    <div className="field-1">
                        <label><span>First Name</span></label>
                        <input type="text" name='fistname'/>
                    
                    </div>

                    <div className="field">
                        <label><span>Username</span></label>
                        <input type="text" name='username'/>
                    </div>

                    <div className="field">
                        <label><span>Email</span></label>
                        <input type="email" name='email'/>
                    </div>

                    <div className="field">
                        <label><span>Password</span></label>
                        <input type="password" name='password'/>
                    </div>
                
                    <input type="submit" value='Enviar'/>
                </form>
            </Content>
        </Container>
    )
}