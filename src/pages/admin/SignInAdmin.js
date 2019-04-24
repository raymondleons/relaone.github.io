import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { signInAdmin } from '../../redux/action/adminActions';
import { getRole } from "../../redux/action/mainActions";
import history from '../../history'
import axios from 'axios'

class SignInAdmin extends Component {
  componentDidMount(){
    let role = localStorage.getItem('role')
    if ( role === 'admin' ) {
      history.push('/admin')
    } else if (role === 'member') {
      history.push('/')
    } else if (role === 'admin') {
      history.push('/')
    }

    window.scrollTo(0, 0);
    document.title= "Login Admin - RelaOne"
}

constructor(props) {
  super(props)

  this.state = {
     username: '',
     password: ''
  }
}

onChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
  e.preventDefault();

  let days = 7;
  let now = new Date().getTime();
  let setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
      localStorage.setItem('setupTime', now)
  } else {
      if(now-setupTime > days*24*60*60*1000) {
          localStorage.clear()
      }
  }
  
  this.props.signInAdmin(this.state.username, this.state.password)
  this.setState({
    username: '',
    password: ''
  });
}

  render() {
    this.props.role === "admin" && this.props.history.push("/admin")

    return (
      <div className="auth-container auth-admin">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Admin Panel</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="emailStudent">Username</Label>
                <Input
                  required
                  type="text"
                  name="username"
                  id="emailStudent"
                  placeholder="type your username"
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
  return {
    signInAdmin: (username, password) => {
      dispatch(signInAdmin(username, password));
    },
    getRole: () => {
      dispatch(getRole())
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInAdmin)) ;
