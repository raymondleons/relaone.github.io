import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {
    getUserTotal,
    getArticleTotal,
    getOrganizationTotal,
    getEventTotal
}   from '../../redux/action/adminActions'

class Dashboard extends Component {
    
    componentDidMount(){
        document.title = 'Dashboard Admin - RelaOne';
        this.props.getUserTotal();
        this.props.getArticleTotal();
        this.props.getEventTotal();
        this.props.getOrganizationTotal();
    }
    
  render() {

    const users = this.props.users 
    const events = this.props.events
    const articles = this.props.articles
    const organizations = this.props.organizations
    console.log(users)
    console.log(events)
    console.log(articles)
    console.log(organizations)
      const displayUser = users.length ? (
          users.map(({_id}, i) => {
            return(
              <tr>
              </tr>
            )
          })
      ) : (
        <tr>
        Loading
        </tr>
      );

      const displayEvent = events.length ? (
        events.map(({_id}, i) => {
          return(
            <tr>
            </tr>
          )
        })
    ) : (
      <tr>
      Loading
      </tr>
    );

    const displayArticle = articles.length ? (
        articles.map(({_id}, i) => {
          return(
            <tr>
            </tr>
          )
        })
    ) : (
      <tr>
      Loading
      </tr>
    );

    const displayOrganization = organizations.length ? (
        organizations.map(({_id}, i) => {
          return(
            <tr>
            </tr>
          )
        })
    ) : (
      <tr>
      Loading
      </tr>
    );

    return (
        
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-single-02 text-warning"></i>
                            </div>
                        </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category">Users</p>
                                    <p class="card-title">{this.props.users.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="stats">
                                <i className="fa fa-refresh"></i> Update Now
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-single-copy-04 text-success"></i>
                            </div>
                        </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category">Article</p>
                                    <p class="card-title">{this.props.articles.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="stats">
                                <i className="fa fa-refresh"></i> Update Now
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-shop text-urgent"></i>
                            </div>
                        </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category">Organization</p>
                                    <p class="card-title">{this.props.organizations.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="stats">
                                <i className="fa fa-refresh"></i> Update Now
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-5 col-md-4">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-album-2 text-danger"></i>
                            </div>
                        </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p class="card-category">Event</p>
                                    <p class="card-title">{this.props.events.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="card-footer">
                            <hr/>
                            <div className="stats">
                                <i className="fa fa-refresh"></i> Update Now
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        events: state.event.events,
        articles: state.article.articles,
        organizations: state.organization.organizations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserTotal: () => { dispatch(getUserTotal())},
        getEventTotal: () => { dispatch(getEventTotal())},
        getArticleTotal: () => { dispatch(getArticleTotal())},
        getOrganizationTotal: () => { dispatch(getOrganizationTotal())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);