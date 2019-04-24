import React, { Component } from "react";
import Sidebar from "../../../layouts/sidebar/EventSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layouts/navbar/EventNavbar'
import Footer from '../../../layouts/Footer'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import {
  getEvent,
  delEvent } from '../../../redux/action/adminActions'

class Article extends Component {

  componentDidMount(){
    this.props.getEvent();
  }

  delete = (id) => {
    this.props.delEvent(id)
  }



  render() {
    const events = this.props.events

    const displayEvent = events.length ? (
      events.map(({_id, title, location, quotaMax}, i) => {
        return(
          <tr>
            <td>{i +1}</td>
            <td key={_id} >{title}</td>
            <td key={_id}>{location}</td>
            <td key={_id}>{quotaMax}</td>
            <td key={_id}>
                        <Button color="link" className="event-action">
                        <Link to={'/admin/users/edit/' + _id}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>

                        </Button>
                        <Button color="link" className="event-action" onClick={() => this.delete(_id)}> 
                        <i class="fa fa-trash" aria-hidden="true"></i>

                        </Button>
                    </td>
        </tr>
      )
  })
) : (
  <tr>Loading ..</tr>
);

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
                  <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                <h5 className="card-title">List Event</h5>
                <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead class=" text-primary">
                      <th>
                        No.
                      </th>
                      <th style={{textAlign:"center"}}>
                        Title
                      </th>
                      <th>
                        Location
                      </th>
                        <th>
                          Quota
                        </th>
                      <th className="right">
                        Action
                      </th>
                    </thead>
                    <tbody>
                    {displayEvent}
                    </tbody>
                    </table>
                </div>
              </div>
                </div>
            </div>
    </div>
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
    events: state.event.events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: () => { dispatch(getEvent())},
      delEvent: (id) => { dispatch(delEvent(id))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
