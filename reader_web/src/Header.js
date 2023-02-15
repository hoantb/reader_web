import React, { Component } from "react";
 
class Header extends Component {
  render() {
    return (
        <div>
            <section id="top">
                <div className="container">
                    <div className="row top_1">
                        <div className="col-md-3">
                            <div className="top_1l pt-1">
                                <h3 className="mb-0"><a class="text-white" href="index.html"><i class="fa fa-video-camera col_red me-1"></i> Planet</a></h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="top_1m">
                                <div className="input-group">
                                            <input type="text" className="form-control bg-black" placeholder="Search Site..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn text-white bg_red rounded-0 border-0" type="button">
                                                    Search</button>
                                            </span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top_1r text-end">
                                <ul className="social-network social-circle mb-0">
                                        <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="header">
                <nav className="navbar navbar-expand-md navbar-light" id="navbar_sticky">
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Planet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="about.html">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Blog
                        </a>
                        <ul class="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                            <li><a class="dropdown-item border-0" href="blog_detail.html">Blog Detail</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="services.html">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="team.html">Team</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                        </a>
                        <ul class="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="about.html">About Us</a></li>
                            <li><a className="dropdown-item" href="services.html">Services</a></li>
                            <li><a className="dropdown-item" href="team.html">Team</a></li>
                            <li><a className="dropdown-item border-0" href="contact.html">Contact</a></li>
                        </ul>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </section>
        </div>
    );
  }
}
 
export default Header;