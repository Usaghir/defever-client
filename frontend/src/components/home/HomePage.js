import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card ">
                <div className="card-body ">
                    <h4 className="card-title text-primary ">Web Development Resources </h4>
                    <p > Here one can find the links to the most popular programming Languages and technologies used in Web development. 

                    </p>
                    <ul className = "list-group list-group-flush">
                        
                        <li class="list-group-item"> Markup Language for front-end development is  <a href="https://www.w3schools.com/html/">HTML</a></li>
                        <li class="list-group-item"> Styling language for front-end development is  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> CSS</a></li>
                        <li class="list-group-item"> CSS framework used for styling the webpages is<a href="https://getbootstrap.com/"> Bootstrap</a></li>
                        <li class="list-group-item"> Programming language for front-end development is <a href="https://www.javascript.com/"> JavaScript</a></li>
                        <li class="list-group-item"> Most popular framework for front-end development is <a href="https://reactjs.org/"> React</a></li>
                        <li class="list-group-item"> Widely used programming language for back-end development is <a href="https://www.java.com/"> JAVA</a></li>
                        <li class="list-group-item"> Most popular framework for Java development is <a href="https://spring.io/">Spring</a></li>
                        <li class="list-group-item"> Most popular relational database language is <a href="https://www.mysql.com/">SQL</a></li>
                        <li class="list-group-item"> Most popular non-relational database language is <a href="https://www.mongodb.com/">MongoDB</a></li>
                        <li class="list-group-item"> Most popular version control system is <a href="https://gitHub.com/"> GitHub</a></li>
                        <li class="list-group-item"> Second most popular version control system is<a href="https://www.gitLab.com/"> GitLab</a></li>
                       
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;