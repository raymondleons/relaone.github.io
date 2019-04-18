import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/themify-icons.css";

// import Footer from "./layouts/Footer";
// import MainPage from "./pages/main";
import AdminPage from "./pages/admin";
import SignInAdmin from "./pages/admin/SignInAdmin"
// import SignInMentor from "./pages/mentor/SignInPage"
// import SignUpMentor from "./pages/mentor/SignUpPage"
// import MentorPage from "./pages/mentor/MentorDashboard"




import { connect } from "react-redux";

class App extends Component {
  render() {
    
    return (
      <Router>
        {/* <Route exact path="/signin-mentor" component={SignInMentor} />
        <Route exact path="/signup-mentor" component={SignUpMentor} /> */}
        {/* <Route exact path="/mentor" component={MentorPage}/> */}

        <Route exact path="/signin-admin" component={SignInAdmin} />
        <Route exact path="/admin" component={AdminPage}/>
        {/* <Route path="/" component={MainPage}/> */}
        {/* <Footer /> */}
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
