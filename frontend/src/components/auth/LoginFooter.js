import React, { Component } from 'react';

export class LoginFooter extends Component {
    render() {
        return (
            <footer className="page-footer font-small mt-5  bg-light">

  <div className="container text-center mb-5 pb-5 m-50 " style={{height: 100}}>

    <div className="row ">

      <div className="col-md-12 py-5 ">
        <div className="mb-5 flex-center">

          <a className="fb-ic" href="https://facebook.com/">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a className="tw-ic" href="https://twitter.com/">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="gplus-ic" href="https://plus.google.com/">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic" href="https://www.linkedin.com/">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="ins-ic" href="https://www.instagram.com/">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a className="pin-ic" href="https://www.pinterest.com/">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
      

    </div>
  

  </div>
 

 
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> SDA.com</a>
  </div>
 

</footer>

        )
    }
}

export default LoginFooter
