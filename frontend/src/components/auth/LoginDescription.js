import React, { Component } from "react";

class LoginDescription extends Component {
    render() {
        return (
            <div className="card  mt-4 text-dark" style = {{width:700}}>
                <div className="card-body">
                    <h4 className="card-title  text-primary">Welcome to the WEBIA </h4>
                    <p>     WEBIA is a public forum that provides information and opportunity
                                                                to discuss regarding most popular web development
                                                                technologies topics as mentioned
                                                                below:</p>
                    <ul className = "list-group list-group-flush">
                        <li class="list-group-item"> Front-end Web-development</li>
                        <li class="list-group-item"> Back-end Web-development </li>
                        <li class="list-group-item"> Database using </li>
                        <li class="list-group-item"> Version Control </li>
                        <li class="list-group-item"> UX & UI </li>
                       
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoginDescription;