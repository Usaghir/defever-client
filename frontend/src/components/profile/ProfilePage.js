import React from "react";
import UserApi from "../../api/UserApi";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        name: this.props.user.name,
        email: this.props.user.email,
        password: "",
      });
    }, 400);
  }

  handleSubmit() {
    const updatedUser = { ...this.props.user };
    updatedUser.name = this.state.name;
    updatedUser.password = this.state.password.length
      ? this.state.password
      : this.props.user.password;
    UserApi.updateUser(updatedUser).then((res) => {
      this.setState({
        name: res.data.name,
        email: res.data.email,
        password: "",
      });
      window.location.reload();
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body" style={{ borderRadius: "0px" }}>
          <label>Username:</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              style={{ borderRadius: "10px" }}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
        </div>

        <div className="card-body" style={{ borderRadius: "0px" }}>
          <label>Email:</label>
          <div className="input-group">
            <input
              disabled
              type="text"
              placeholder="What is your e-mail?"
              className="form-control"
              style={{ borderRadius: "10px" }}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
        </div>

        <div className="card-body" style={{ borderRadius: "0px" }}>
          <label>Password:</label>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              style={{ borderRadius: "10px" }}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
        </div>
        <div className="card-body">
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => this.handleSubmit()}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
