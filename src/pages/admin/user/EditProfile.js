import React, { Component } from "react";
import Sidebar from "../../../layouts/sidebar/UserSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layouts/navbar/UserNavbar'
import Footer from '../../../layouts/Footer'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import {
  getUsers } from '../../../redux/action/adminActions'

import Moment from 'moment'

class User extends Component {

  constructor(props) {
      super(props);

      this.state = {
          fullname : "",
          username : "",
      }
  }

  componentWillMount(){
    this.props.getUsers();
  }

  componentWillReceiveProps(props){
    this.setState({
      users : props.users
    })


}  
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editEvent(this.state.title, this.state.description, this.state.location, this.state.deadline, this.state.quotaMax);
     }

  render() {
    console.log(this.state)
    console.log(this.props)

    let users = {}
    if (this.props.users) {
      users = this.props.users
    }

    return (
      <Router>
        {this.props.role !== "admin"}
        
        <body className="">
        <div id="wrapper">
          <div className="admin-grid">
            <Sidebar />
              <div className="main-panel">
                <div className="content">
                  <Navbar/> 
                  <div className="row">
                            {/* USER */}
                        <div className="col-md-12">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <h5 class="card-title">Edit Profile</h5>
                                    </div>
                                    <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div class="col-md-5 pr-1">
                                                <div class="form-group">
                                                    <label>Fullname</label>
                                                    <input type="text" class="form-control" disabled="" placeholder="Company" value="Creative Code Inc."/>
                                                </div>
                                            </div>
                                            <div class="col-md-3 px-1">
                                                <div class="form-group">
                                                    <label>Username</label>
                                                    <input type="text" class="form-control" placeholder="Username" value="michael23"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-1">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" class="form-control" placeholder="Email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div class="form-group">
                                                    <label>Id Identification Number</label>
                                                    <input type="text" class="form-control" placeholder="Company" value="Chet"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 pl-1">
                                                <div class="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" class="form-control" placeholder="Last Name" value="Faker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="text" class="form-control" placeholder="Home Address" value="Melbourne, Australia"/>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Bio</label>
                                                    <textarea class="form-control textarea">I like the way you work it
                                                        No diggity
                                                        I wanna bag it up</textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="update ml-auto mr-auto">
                                            <button type="submit" class="btn btn-primary btn-round">Update Profile</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                </div>
                        </div>

                  {/* END */}
                  </div>
                </div>
                <footer className="footer footer-black footer-white">
                  <Footer/>
                </footer>
              </div>
          </div>
        </div>
        </body>
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
      users: state.user.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getUsers: () => { dispatch(getUsers())}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
