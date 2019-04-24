import React, { Component } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import DashboardPage from '../../components/admin/Dashboard';
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Dashboard from "./Dashboard";
import Footer from '../../layouts/Footer'
import User from '../../pages/admin/user/User'
import Content from '../../components/admin/Content'
import { connect } from "react-redux";
import {
  getUsers,
} from '../../redux/action/adminActions'

class AdminPage extends Component {
  componentDidMount(){
    this.props.getUsers();
  }
  render() {
    
    return (
      <Router>
        {/* {this.props.role !== "admin" &&
          this.props.history.push("/signin-admin")} */}
        
        <body className="">
        <div id="wrapper">
          <div className="admin-grid">
            <Sidebar />
              <div className="main-panel">
                <Route exact path="/admin" component={Dashboard} />
                <div className="content">
                  <DashboardPage/> 
                  <div className="row">
                  <Content/>
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
    role: state.auth.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));
