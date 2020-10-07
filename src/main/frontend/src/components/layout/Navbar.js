import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import UserApi from '../../api/UserApi';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    UserApi.current()
      .then(({ data }) => this.setState({ user: data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg  justify-content-around bg-light">
        <img
          className="navbar-brand ml-5"
          src={Logo}
          alt="#"
          style={{ width: 80 }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/homepage"
                className="nav-link font-weight-bold text-uppercase"
                style={{
                  color: '#0C2C54',
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/posts"
                className="nav-link font-weight-bold text-uppercase"
                style={{
                  color: '#0C2C54',
                }}
              >
                Posts
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/chat"
                className="nav-link font-weight-bold text-uppercase"
                style={{
                  color: '#0C2C54',
                }}
              >
                Chat
              </Link>
            </li>
          </ul>

          <div className="navbar-brand">{this.state.user.name}</div>

          <div className="userContainer">
            <a href="/profile">
              <img
                className="navbar-brand"
                src="/avatars/manager.png"
                style={{ width: '40px', height: '40px' }}
                alt="User Avatar"
              />
              <div className="middle"></div>
            </a>
          </div>
          <button
            className="btn btn-primary my-2 my-sm-0 border-0 rounded-0 mr-5 bebas-font"
            style={{
              backgroundColor: '#FA354D',
            }}
            onClick={this.props.onLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;