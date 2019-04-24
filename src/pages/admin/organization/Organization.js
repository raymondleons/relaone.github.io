import React, { Component } from "react";
import Sidebar from "../../../layouts/sidebar/OrganizationSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layouts/navbar/OrganizationNavbar'
import Footer from '../../../layouts/Footer'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import {
  getOrganization,
  delOrganization } from '../../../redux/action/adminActions'

class Organization extends Component {

  componentDidMount(){
    this.props.getOrganization();
  }

  delete = (id) => {
    this.props.delOrganization(id)
  }



  render() {
    const organizations = this.props.organizations

    const displayOrganization = organizations.length ? (
      organizations.map(({_id, organizationName, createBy, createdAt, address}, i) => {
        return(
          <tr>
            <td>{i +1}</td>
            <td key={_id} >{organizationName}</td>
            <td key={_id}>{}</td>
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
                <h5 className="card-title">List Organization</h5>
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
                        Author
                      </th>

                      <th className="right">
                        Action
                      </th>
                    </thead>
                    <tbody>
                    {displayOrganization}
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
    organizations: state.organization.organizations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrganization: () => { dispatch(getOrganization())},
      delOrganization: (id) => { dispatch(delOrganization(id))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Organization));
