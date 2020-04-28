import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Logo from "./logo.png";
import Auth from "../../services/Auth";

class LoginNavbar extends Component {
    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }
    render() {


    return (
        <nav className=" bg-dark " >
            <div className="  row bg-light justify-content-around" >
                <img className=" mr-5 " src={Logo} alt="#" style={{width:120, height:120}}/>
            
                <div className=" ml-5" id="navbarColor01 "  >
                    <LoginForm onSubmit={this.login} />
                </div>
            </div>
        </nav>
    ); 
}
}
export default LoginNavbar;