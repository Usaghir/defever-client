import React, {useState} from 'react';

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        
        <div className="card-body ">
            <div className="d-flex flex-row">
                <div className="form-group mr-5">
                    <label>Email:</label>
                    <input 
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group mr-3">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="form-control" 
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="form-group d-flex flex-row" >
                
                    <button 
                        className="btn btn-info	ml-4" 
                        style={{height: 38, position:"relative",  top: 31}}
                        onClick={() => onSubmit({email, password})}>
                        Login
                        
                        
                    </button>
                    
                </div>
            </div>
        </div>
        
    );
}

export default LoginForm;