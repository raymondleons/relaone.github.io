import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      
        <div className="container-fluid">
            <div className="row">
                <nav className="footer-nav">
                    <ul>
                        <li>
                            <a href="#" target="_blank">About</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Term</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="credits ml-auto">
                    <span className="copyright">
                        ©
                        <script>
                        document.write(new Date().getFullYear())
                        </script> 2019 - RELAONE TIM
                    </span>
                </div>
            </div>
        </div>
    )
  }
}
