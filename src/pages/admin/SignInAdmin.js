import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../../redux/action/adminActions';
import axios from 'axios'

class SignInAdmin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: ''
    }
  }
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state.username, this.state.password)
    this.setState({
      username: "",
      password: ""
    });
  }

  componentDidUpdate() {
    console.log(this.props.role)
    this.props.role === 'admin' && this.props.history.push('/dashboard')
  }

  render() {

    return (
      <div className="auth-container auth-admin">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign In | Admin</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="emailStudent">Email</Label>
                <Input
                  required
                  type="text"
                  name="username"
                  id="emailStudent"
                  placeholder="type your email"
                  onChange={this.onChange}
                  value={this.state.username}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  required
                  type="password"
                  name="password"
                  id="passwordauth"
                  placeholder="type your password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </FormGroup>
              <div className="text-center">
                <Button color="primary">Sign In</Button>
                <p className="mt-3">
                  Doesn't have an account?{" "}
                  <Link to="/signup">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  }
}

const mapDispatchToProps = dispatch => {
  return{
    signIn: (username, password) => {
      axios
        .post("https://relaonebinar.herokuapp.com/api/admin/login", {
          'username':username,
          'password':password
        })
        .then(res => {
          console.log(res);
          dispatch(signIn(username, password, res.data.message));
          console.log(this.props)

        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInAdmin)) ;
