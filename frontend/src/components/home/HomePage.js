import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Web Development Forum </h4>
                    <p>WEBIA is a forum that provides its users information and opportunity to discuss about WEB development as mentioned below :</p>
                    <ul>
                        <li><a href="https://spring.io/projects/spring-boot">Back-end Development</a></li>
                        <li><a href="https://www.postgresql.org">Front-end Development</a></li>
                        <li><a href="https://reactjs.org">Database</a></li>
                        <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">UX-UI</a></li>
                        <li><a href="https://github.com/axios/axios">Version Control</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;