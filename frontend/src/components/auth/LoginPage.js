import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import LoginNavbar from "./LoginNavBar";

class LoginPage extends Component {


    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    render() {
        return (
            <div className="wrapper"  >
                <LoginNavbar/>
                <div className="container">
                    
                    <div className="row mt-5" >
                        <div className="col-md-6 " style={{color: "white"}} >
            
                            
                            <div className="col mt-4 mr-5">
                                <h3 >A Web Development</h3>
                                <article style={{width:650}}>   WEBIA is the forum where user can get the information regarding web development 
                                                                and also can discus regarding the different web development topics as well. 
                                                                Some of the topics are mentioned below. 

                                    

                                    </article>
                            </div>
                            
                        </div>

                        <div className="col-md-6" >
                            <div className="row d-flex justify-content-end">
                                <div className="col-7 mt-4 ">
                                    <RegisterForm onSubmit={this.register} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;