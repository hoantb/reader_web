import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
 
class AboutUs extends Component {
  render() {
    return (
        <div>
            <Header />
            <section id="center" className="center_o pt-2 pb-2">
                <div className="container-xl">
                <div className="row center_o1">
                <div className="col-md-5">
                    <div className="center_o1l">
                    <h2 className="mb-0">Giới thiệu</h2>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="center_o1r text-end">
                    <h6 className="mb-0 col_red"><Link to="/">Trang chủ</Link> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Giới thiệu</h6>
                    </div>
                </div>
                </div>
                </div>
                </section>

                <section id="about_pg">
                <div className="about_pgm">
                <div className="container-xl">
                <div className="row about_pg1">
                    <div className="col-md-12">
                    <h2>
                        <span className="col_red">It Truyện</span>
                        <br />Enjoy Reading
                    </h2>
                    <p className="mt-3 w-50">Providing you with the most actionable Movie Production Services. Planis creates and distribute Video Content.</p>
                    <p className="w-50">Planet Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply Video Content  dummy industry. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                    <h6 className="mb-0"><a className="button" href="#">Learn More</a></h6>
                    </div>
                </div>
                </div>
                </div>
                </section>

                <section id="team" className="pt-4 pb-5">
                <div className="container-xl">
                <div className="row trend_1">
                <div className="col-md-12">
                <div className="trend_1l">
                    <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1"></i> Meet <span className="col_red">The Team</span></h4>
                </div>
                </div>
                </div>
                <div className="row team_1 mt-4">
                    <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" className="" aria-current="true"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="team_1i row">
                    <div className="col-md-4">
                        <div className="team_1i1 clearfix position-relative">
                        <div className="team_1i1i clearfix">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="img/37.jpg" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                        <h4 className="col_red">Semp Porta</h4>
                        <h6>Manager</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                        <ul className="social-network social-circle mb-0 mt-3">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team_1i1 clearfix position-relative">
                        <div className="team_1i1i clearfix">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="img/38.jpg" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                        <h4 className="col_red">Dapibus Diam</h4>
                        <h6>Trainer</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                        <ul className="social-network social-circle mb-0 mt-3">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team_1i1 clearfix position-relative">
                        <div className="team_1i1i clearfix">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="img/39.jpg" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                        <h4 className="col_red">Eget Nulla</h4>
                        <h6>Designer</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                        <ul className="social-network social-circle mb-0 mt-3">
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
                    
                    </div>
                    <div className="carousel-item">
                    <div className="team_1i row">
                    <div className="col-md-4">
                        <div className="team_1i1 clearfix position-relative">
                        <div className="team_1i1i clearfix">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="img/40.jpg" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                        <h4 className="col_red">Semp Porta</h4>
                        <h6>Manager</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                        <ul className="social-network social-circle mb-0 mt-3">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team_1i1 clearfix position-relative">
                        <div className="team_1i1i clearfix">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="img/41.jpg" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                        <h4 className="col_red">Dapibus Diam</h4>
                        <h6>Trainer</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                        <ul className="social-network social-circle mb-0 mt-3">
                            <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team_1i1 clearfix position-relative">
                        <div className="team_1i1i clearfix">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="img/42.jpg" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                        <h4 className="col_red">Eget Nulla</h4>
                        <h6>Designer</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. Aliquam ut elit venenatis, congue dolor ut, mattis leo</p>
                        <ul className="social-network social-circle mb-0 mt-3">
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
                    </div>
                    
                </div>

                </div>
                </div>
                </div>
                </section>
            <Footer />
        </div>
    );
  }
}
 
export default AboutUs;