import React, { Component } from 'react'

import {connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';

// Component
import Dashboard from '../../components/admin/Dashboard'

class Navbar extends Component {
  render() {



    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <a className="navbar-brand" href="#pablo">Dashboard</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">      
                    <ul className="navbar-nav">
                        <p className="navbar-title">Hi,</p>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      logOut: () => dispatch({type: "LOG_OUT"})
    }
  }

export default connect(mapDispatchToProps) (Navbar);