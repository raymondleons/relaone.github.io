import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./assets/css/themify-icons.css";

import AdminPage from "./pages/admin";
import SignInAdmin from "./pages/admin/SignInAdmin"
import User from './pages/admin/user/User'
import Article from './pages/admin/article/Article'
import Organization from './pages/admin/organization/Organization'
import Event from './pages/admin/event/Event'
import SkillSet from './pages/admin/skillset/SkillSet'
import EditProfile from './pages/admin/user/EditProfile'
import CreateNewUser from './pages/admin/user/CreateNewUser'



import { connect } from "react-redux";

class App extends Component {
  render() {
    
    return (
      <Router>
        <Route exact path="/" component={SignInAdmin} />
        <Route exact path="/admin" component={AdminPage}/>
        <Route exact path="/admin/users" component={User}/>
        <Route exact path="/admin/users/create" component={CreateNewUser}/>
        <Route exact path="/admin/article" component={Article}/>
        <Route exact path="/admin/organization" component={Organization}/>
        <Route exact path="/admin/event" component={Event}/>
        <Route exact path="/admin/skill-sett" component={SkillSet}/>
        <Route exact path="/admin/users/edit/:user_id" component={EditProfile}/>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin
  }
}

export default connect(mapStateToProps)(App);
