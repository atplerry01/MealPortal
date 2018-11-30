import React from 'react';

const Footer = () => (
   
    <footer className="footer-wrapper">

    <div className="bottom-footer">

      <div className="container">

        <div className="row">

          <div className="col-sm-4 col-md-4">

            <p className="copy-right">&#169; Copyright 2018 NexaPos</p>

          </div>

          <div className="col-sm-4 col-md-4">

            <ul className="bottom-footer-menu">
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>

          </div>

          <div className="col-sm-4 col-md-4">
            <ul className="bottom-footer-menu for-social">
              <li><a href="#"><i className="ri ri-twitter" data-toggle="tooltip" data-placement="top"
                title="twitter"></i></a></li>
              <li><a href="#"><i className="ri ri-facebook" data-toggle="tooltip" data-placement="top"
                title="facebook"></i></a></li>
              <li><a href="#"><i className="ri ri-google-plus" data-toggle="tooltip" data-placement="top"
                title="google plus"></i></a></li>
              <li><a href="#"><i className="ri ri-youtube-play" data-toggle="tooltip" data-placement="top"
                title="youtube"></i></a></li>
            </ul>
          </div>

        </div>

      </div>

    </div>

  </footer>

)

export default Footer