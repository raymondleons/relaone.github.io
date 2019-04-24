import React, { Component } from 'react'
import { connect } from 'react-redux';

// Layout
import Navbar from '../../layouts/navbar/Navbar'

class Dashboard extends Component {
  render() {
    return (
      <div id="admin-dashboard">
        <Navbar />
      </div>
    )
  }
}


export default connect(null)(Dashboard)