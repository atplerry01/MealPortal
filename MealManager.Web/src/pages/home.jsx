import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }

    render() {
      
        return (
         <div>
             
            <div className="hero">
              <div className="container">

                <h1>Your meal start here...</h1>
                <p>Finding your next meal is increadible</p>

                <div className="main-search-form-wrapper">

                  <form>

                    <div className="form-holder">
                      <div className="row gap-0">

                        <div className="col-xss-6 col-xs-6 col-sm-6">
                          <input className="form-control" placeholder="Looking for the menu" />
                        </div>

                      </div>

                    </div>

                    <div className="btn-holder">
                      <button className="btn"><i className="ion-android-search"></i></button>
                    </div>

                  </form>

                </div>

              </div>

            </div>

            <div className="post-hero">

              <div className="container">

                <div className="row">

                  <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">

                    <div className="ticker-wrapper">

                      <div className="latest-job-ticker ticker-inner">


                        <ul className="ticker-list">
                          <li>
                            <a href="#">
                              <span className="labeling">Latest Job</span>
                              Senoir software engineering at Amanbory Comnay Ltd., <span className="font-italic">38
                                        minutes ago</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="labeling">Latest Job</span>
                              Financial Section Manager at Ribbon Center Co.,Ltd. <span className="font-italic">56
                                        minures ago</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="labeling">Latest Job</span>
                              Electronics Technical Engineer at Planing Global Ltd. <span className="font-italic">
                                3 hours ago</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="labeling">Latest Job</span>
                              Knowledge Transfer Officer at GreenLand Group Ltd. <span className="font-italic">
                                5 hours ago</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="labeling">Latest Job</span>
                              Senior Telemarketing Executive at Barntorn Network Ltd.<span className="font-italic">12
                                        hours ago</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>


                  </div>

                </div>

              </div>

            </div>

         </div>
        );
    }
}


export default Home