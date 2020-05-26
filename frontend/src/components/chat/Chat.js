import React, { Component } from 'react'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './Chattest.css';

let stompClient = null;
export class Chat extends Component {
    
    state = 
    { 
        username: '',
        ChatPageDisplay: "hidden",
        UserPageDisplay:'',
        messageContent: ''
    };


    constructor(props){
        super(props);
        this.handleUser = this.handleUser.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.connect=this.connect.bind(this);
        this.send=this.send.bind(this);
        this.onConnected = this.onConnected.bind(this);
        this.onMessageReceived= this.onMessageReceived.bind(this);
        
      }

      handleUser = event => {
        this.setState({ username: event.target.value });
        this.connect ();
      };

      handleMessage = event => {
        this.setState({ messageContent: event.target.value });
        console.log('raja');
        this.send();
    

        
      };

      

      connect (){
        let socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, this.onConnected, this.onError);
        this.setState({ ChatPageDisplay: '' });
        this.setState({ UserPageDisplay: 'hidden' }); //'hidden'
       

    
}
   


 onConnected(){
    console.log('connected');

    stompClient.subscribe('/topic/public', this.onMessageReceived);

    // Tell your username to the server
    stompClient.send("/app/chat.register",
        {},
        JSON.stringify({sender: this.state.username, type: 'JOIN'})
    )
}

send(){

    var chatMessage = {
        sender: this.state.username,
        content: this.state.messageContent,
        type: 'CHAT'
    };

    stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
    
}

 onError(){
    console.log('error');
}



 onMessageReceived(){
    console.log('message received ');
}


      render() {
        return (

            <div id="username-page">
          <div className = {this.state.UserPageDisplay}>
          <h1 className="title">Type your username</h1>
            <form id="usernameForm" name="usernameForm">
              <div className="form-group">
              <label>username</label>
              <input
                id="name" 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleUser}
                className="accent username-submit"
              />
              </div>
            </form>
     
            <h3>Your username is: {this.state.username}</h3>
            </div>
            
	<div className = {this.state.ChatPageDisplay} id="chat-page">
		<div className="chat-container">
			<div className="chat-header">
				<h2>Defever Global Chat Box</h2>
			</div>
			<div className="connecting">Connecting...</div>
			<ul id="messageArea">

			</ul>
            <form  id="messageForm">
              <div className= "form-group clearfix">
              <label >chatbox</label>
              <input
              className = "form-control primary"
              id="message" 
                type="text"
                name="messageContent"
                value={this.state.messageContent}
                onChange={this.handleMessage}
              />
              </div>
            </form>
            <h3>Your message is: {this.state.messageContent}</h3>
		</div>
	</div>
        
          </div>
        );
      }
     }
     
export default Chat
