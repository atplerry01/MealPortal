import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";

import { myConfig } from "../../app/config";

class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            authenticated: false,
            registering: false,
            errors: [],
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    componentDidMount() {
        const ls = localStorage.getItem("wss.auth");
        const jwtToken = JSON.parse(ls);

        if (jwtToken) {
            this.setState({ authenticated: true });
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;

        var modelData = {
            username, password
        }

        if (modelData.username && modelData.password) {
            this.postLogin(modelData);
        } else {
            this.setState({ error: 'Invalid username/ Password' });
        }
    }

    handleLogout(e) {
        localStorage.removeItem("wss.auth");
        this.setState({ authenticated: false});
        this.props.history.push("/");
    }

    render() {

        const { username, password, confirmPassword, email, authenticated, errors } = this.state;
        const errorLists = () => {
            if (errors && errors.length !== 0) {
                return errors.map((error, index) => {
                    return (
                        <li style={{ color: 'red' }} key={index + 1}>{error.description}</li>
                    )
                })
            }
        }

        return (

            <header id="header">

                <nav className="navbar navbar-default navbar-fixed-top navbar-sticky-function">

                    <div className="container">

                        <div className="logo-wrapper">
                            <div className="logo">
                                <NavLink to="/" style={{ color: '#fff', fontSize: 22, paddingTop: 15 }}>
                                    {/* <img src="assets/images/logo.png" alt="Logo" /> */}
                                    <span >NexaPos</span>
                                </NavLink>
                            </div>
                        </div>

                        <div id="navbar" className="navbar-nav-wrapper navbar-arrow">

                            {authenticated &&

                                <ul className="nav navbar-nav" id="responsive-menu">

                                    <li>
                                        <NavLink to="/dashboard">Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/transactions">Meal Transactions</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/accounts">Accounts</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/extra/departments">Extra</NavLink>
                                    </li>
                                </ul>
                            }

                            {!authenticated &&
                                <ul className="nav navbar-nav" id="responsive-menu"> 
                                    <li>
                                        <NavLink to="/dashboard"></NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to="/transactions"></NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/accounts"></NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/extra/departments"></NavLink>
                                    </li>
                                </ul>
                            }


                        </div>

                        <div className="nav-mini-wrapper">
                            {authenticated && (
                                <ul className="nav-mini sign-in">
                                    <li>
                                        <button onClick={this.handleLogout} type="button" className="btn btn-primary">Logout</button></li>
                                </ul>
                            )}
                            {!authenticated && (
                                <ul className="nav-mini sign-in">
                                    <li><a id="showLogin" data-toggle="modal" href="#loginModal">login</a></li>
                                    <li><a data-toggle="modal" href="#registerModal">register</a></li>
                                </ul>
                            )}
                        </div>

                    </div>

                    <div id="slicknav-mobile"></div>

                </nav>

                <div id="loginModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Sign-in into your account</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div style={{color: 'red'}}>{this.state.error}</div>
                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Username</label>
                                    <input name="username" value={username} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" value={password} onChange={this.handleChange} className="form-control" placeholder="" type="password" />
                                </div>

                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="checkbox-block">
                                    <input id="remember_me_checkbox" name="remember_me_checkbox" className="checkbox" value="First Choice" type="checkbox" />
                                    <label className="" htmlFor="remember_me_checkbox">Remember me</label>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="login-box-link-action">
                                    <a data-toggle="modal" href="#forgotPasswordModal">Forgot password?</a>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12">
                                <div className="login-box-box-action">
                                    No account? <a data-toggle="modal" href="#registerModal">Register</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Log-in</button>
                        <button type="button" id="hideLoginPageModal" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>

                <div id="registerModal" className="modal fade login-box-wrapper" tabIndex="-1" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Create your account for free</h4>
                    </div>

                    <div className="modal-body">

                        <div className="row gap-20">

                            <div className="col-sm-6 col-md-6">
                                <button className="btn btn-facebook btn-block mb-5-xs">Register with Facebook</button>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <button className="btn btn-google-plus btn-block">Register with Google+</button>
                            </div>

                            <div className="col-md-12">
                                <div className="login-modal-or">
                                    <div><span>or</span></div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" placeholder="Min 4 and Max 10 characters" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="form-control" placeholder="Enter your email address" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" placeholder="Min 8 and Max 20 characters" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Password Confirmation</label>
                                    <input className="form-control" placeholder="Re-type password again" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">
                                <div className="checkbox-block">
                                    <input id="register_accept_checkbox" name="register_accept_checkbox" className="checkbox" value="First Choice" type="checkbox" />
                                    <label className="" htmlFor="register_accept_checkbox">By register, I read &amp; accept <NavLink to="#">the
                          terms</NavLink></label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12">
                                <div className="login-box-box-action">
                                    Already have account? <a data-toggle="modal" href="#loginModal">Log-in</a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="modal-footer text-center">
                        <button type="button" className="btn btn-primary">Register</button>
                        <button type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>

                <div id="forgotPasswordModal" className="modal fade login-box-wrapper" tabIndex="-1" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Restore your forgotten password</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div className="col-sm-12 col-md-12">
                                <p className="mb-20">Maids table how learn drift but purse stand yet set. Music me house could
                                    among oh as their. Piqued our sister shy nature almost his wicket. Hand dear so we hour
                  to.</p>
                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="form-control" placeholder="Enter your email address" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">
                                <div className="checkbox-block">
                                    <input id="forgot_password_checkbox" name="forgot_password_checkbox" className="checkbox" value="First Choice" type="checkbox" />
                                    <label className="" htmlFor="forgot_password_checkbox">Generate new password</label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12">
                                <div className="login-box-box-action">
                                    Return to <a data-toggle="modal" href="#loginModal">Log-in</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button type="button" className="btn btn-primary">Restore</button>
                        <button type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>

            </header>

        );
    }

    postLogin = (model) => {
        var data = "grant_type=password&username=" + model.username + "&password=" + model.password;

        return axios.post(myConfig.apiUrl + "/api/token", data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }).then(response => {

            
            localStorage.setItem("wss.auth", JSON.stringify(response.data));
            this.setState({ authenticated: true });
            document.getElementById("hideLoginPageModal").click();
            this.props.history.push("/transactions");

            // if (response.data.isAdmin) {
            //     this.props.history.push("/admin");
            // } else {
            //     this.props.history.push("/dashboard");
            // }

        }).catch(error => {
            // this.setState({errors: error.response.data.errors});
            console.log(error.response.data.errors);
            const errors = {};
            errors.message = "Invalid username/ Password";
            this.setState({ error: 'Invalid username/ Password' });
            // throw error;
        });
    }

}


export default Header