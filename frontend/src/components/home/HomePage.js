import React, { Component } from "react";
import HomeFooter from "./HomeFooter.js";
import HomeLikes from "./HomeLikes.js";
import HomePosts from "./HomePosts.js";
import HomeComments from "./HomeComments.js";
import HomeChat from "./HomeChat.js";


class HomePage extends Component {
    render() {
        return (
           
                <div className="container" >
                   
                    <div className="row mt-5" >
                        <div className="col-md-6 " style={{color: "white"}} >
                            
                           
                           <HomePosts text1="By Raja Umer"/>
                           <HomePosts text1="By FeiFei"/>
                           <HomePosts text1="By Imanol"/>
                           <HomePosts text1="By Riaz"/>
                           <HomePosts text1="By Akateh"/>
                           <HomePosts text1="By Simon"/>
                           <HomePosts text1="By Rasmus"/>
                           <HomePosts text1="By Sladjan"/>
                           <HomePosts text1="By Erika"/>

                        </div>

                        <div className="col-md-6" >
                            <div className="col d-flex justify-content-end">
                                <div>
                                <div className = "mt-4">
                                        <HomeChat/>
                                    </div>
                                    <div className = "mt-4">
                                        <HomeComments/>
                                    </div>

                                    <div className=" mt-4 ">
                                        <HomeLikes  />
                                    </div>
                                    
                                    <HomeFooter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            
        );
    }
}

export default HomePage;