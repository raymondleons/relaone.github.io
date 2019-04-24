import React, { Component } from 'react'

// CSS
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/paper-dashboard.css'
import '../../assets/css/demo/demo.css'

// Img
import Logo from '../../assets/img/logo-small.png'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
           <a href="#" className="simple-text logo-mini">
            <div className="logo-image-small">
              <img src={Logo} alt=""/>
            </div>
           </a>
           <a href="#" className="simple-text logo-normal">
            Relaone Tim
           </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li>
              <a href="/admin">
                <i className="nc-icon nc-bank"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="/admin/users">
                <i className="nc-icon nc-single-02"></i>
                <p>Users</p>
              </a>
            </li>
            <li >
              <a href="/admin/article">
                <i className="nc-icon nc-single-copy-04"></i>
                <p>Article</p>
              </a>
            </li>
            <li>
              <a href="/admin/organization">
                <i className="nc-icon nc-shop"></i>
                <p>Organization</p>
              </a>
            </li>
            <li>
              <a href="/admin/event">
                <i className="nc-icon nc-album-2"></i>
                <p>Event</p>
              </a>
            </li>
            <li className="active">
              <a href="/admin/skill-sett">
                <i className="nc-icon nc-align-left-2"></i>
                <p>Skill Set</p>
              </a>
            </li>
            <li className="active-pro">
              <a href="#">
                <i className="nc-icon nc-spaceship"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
