import React, {useState} from "react";


function HomeChat(){

  
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-4 mt-3">People Online</h4>
                <div>
                    <div className="form-group">
                        <label>RajaU</label>
                        <button className="btn ml-3 btn-success">Chat</button>
                    </div>

                    <div className="form-group">
                        <label>FeiFei</label>
                        <button className="btn ml-3 btn-success">Chat</button>
                    </div>

                    <div className="form-group">
                        <label>Imanol</label>
                        
                    
                        <button className="btn ml-2 btn-success">Chat</button>
                    </div>

                   

                </div>
            </div>
        </div>
    );

    }
export default HomeChat;