import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Center from "./Center";
import withRouter from "./withRouter";
import * as ConstantsVar from "./common/constants";

class BookPreview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            book: {}
        }
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/books" + "/" + this.props.params.id)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({book: result})
            }
        )
    }
    

    render() {
        return (
            <div>
                <p > {this.props.name}</p>
                <Header />
                <section id="center" className="center_o pt-2 pb-2">
                    <div className="container-xl">
                    <div className="row center_o1">
                    <div className="col-md-5">
                        <div className="center_o1l">
                        <h2 className="mb-0">Blog Detail</h2>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="center_o1r text-end">
                        <h6 className="mb-0 col_red"><a href="#">Home</a> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Blog Detail</h6>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                
                <section id="blog" className="pt-4 pb-4 bg_grey">
                <div className="container-xl">
                <div className="row blog_1">
                <div className="col-md-8">
                    <div className="blog_1l">
                    <div className="blog_1l1">
                    <div className="popular_2i1lm position-relative clearfix">
                        <div className="popular_2i1lm1 clearfix">
                            <div className="grid">
                        <figure className="effect-jazz mb-0">
                            {this.state.book.image_preview &&
                                <a href="#"><img src={this.state.book.image_preview} height="450" className="w-100" alt="img25" /></a>
                            }
                        </figure>
                    </div>
                        </div>
                        <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
                            <ul>
                            <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
                            <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
                            </ul>
                        </div>
                        </div>
                    <div className="blog_1l1i mt-3">
                        <h5><i className="fa fa-folder-open col_red me-1"></i> Movie News</h5>
                        {this.state.book.image_preview &&
                            <h2 className="mt-3"><a className="col_red" href="#"></a>{this.state.book.title}</h2>
                        }
                        <h6 className="fw-normal mt-3 col_light">
                        <span><i className="fa fa-clock-o me-1 align-middle col_red"></i> 14 December 2021</span>
                        <span className="ms-3"><i className="fa fa-user me-1 align-middle col_red"></i> Admin</span>
                        <span className="ms-3"><i className="fa fa-comment me-1 align-middle col_red"></i> Comment</span>
                        </h6>
                        <p className="mt-3">Consectetuer adipiscing elit sedare diam nonummy nibh euismod estat tinciduntal ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minimatisa veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl. Name liber tempor cum soluta nobis eleifend option congue nihil imperdietes</p>
                    </div>
                    </div>
                    <div className="blog_1l2">
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has urvived not only five centuries, but also the leap into electronic typesetting.</p>
                    <blockquote className="blockquote bg_dark p-4 pt-3 mt-4">
                                                    <p>Provident fugiat tempora architecto mollitia quos maiores perspiciatis obcaecati placeat aunty koi thako Architecto eaque accusamus minima in earum impedit atque</p>
                                                    <h6 className="fw-normal mb-0"><strong>- Dapibus Diam </strong>of Google Inc.</h6>
                                                </blockquote>
                    <p>It was popularised in the 1980s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including text are in so Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation quis nostrud exercitation quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt iest laborum.</p>
                    <ul>
                        <li className="d-inline-block me-3"><a href="#"><i className="fa fa-tag me-1 col_red"></i> Blog</a></li>
                        <li className="d-inline-block me-3"><a href="#"><i className="fa fa-tag me-1 col_red"></i> Creative</a></li>
                        <li className="d-inline-block me-3"><a href="#"><i className="fa fa-tag me-1 col_red"></i> Business</a></li>
                        <li className="d-inline-block"><a href="#"><i className="fa fa-tag me-1 col_red"></i> News</a></li>
                        </ul>	
                        <ul className="social-network social-circle mb-0 mt-3">
                                    <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-skype"></i></a></li>
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>					
                    </div>
                    <div className="blog_1l3 mt-4">
                    <h3>Related Blogs</h3>
                    </div>
                    <div className="blog_1l4 mt-3">
                    <div className="popular_2i1 row">
                        <div className="col-md-4 col-4">
                        <div className="popular_2i1lm position-relative clearfix">
                        <div className="popular_2i1lm1 clearfix">
                            <div className="grid">
                        <figure className="effect-jazz mb-0">
                            <a href="#"><img src="img/32.jpg" className="w-100" alt="img25" /></a>
                        </figure>
                    </div>
                        </div>
                        <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
                            <ul>
                            <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
                            <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-8 col-8">
                        <div className="popular_2i1r">
                        <h5><a className="col_red" href="#">Eget Diam</a></h5>
                        <h6>Action, Thriller</h6>
                        <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 2h 29m</span></h6>
                        <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                        <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                        </div>
                        </div>
                        </div>
                        <div className="popular_2i1 mt-3 row">
                        <div className="col-md-4 col-4">
                        <div className="popular_2i1lm position-relative clearfix">
                        <div className="popular_2i1lm1 clearfix">
                            <div className="grid">
                        <figure className="effect-jazz mb-0">
                            <a href="#"><img src="img/33.jpg" className="w-100" alt="img25" /></a>
                        </figure>
                    </div>
                        </div>
                        <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
                            <ul>
                            <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
                            <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-8 col-8">
                        <div className="popular_2i1r">
                        <h5><a className="col_red" href="#">Eget Diam</a></h5>
                        <h6>Action, Thriller</h6>
                        <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Runtime: 2h 29m</span></h6>
                        <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                        <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="blog_1l3 mt-4">
                    <h3>Recent Comments</h3>
                    </div>
                    <div className="blog_1l5 mt-3">
                    <div className="blog_1l5i row">
                        <div className="col-md-2 col-2 pe-0">
                        <div className="blog_1l5il">
                        <img src="img/34.jpg" className="w-100" alt="abc" />
                        </div>
                        </div>
                        <div className="col-md-10 col-10">
                        <div className="blog_1l5ir">
                        <h5><a href="#">Mr Eget Nulla</a> <span className="font_14 col_light">/ 13 July 2017</span></h5>
                        <p className="font_14">Hi, this is a comment.<br />
                To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.</p>
                <h6 className="font_14 mb-0 mt-3"><a className="button p-3 pt-2 pb-2" href="#"> Reply</a></h6>
                        </div> 
                        </div>
                    </div><hr />
                    <div className="blog_1l5i row">
                        <div className="col-md-2 col-2 pe-0">
                        <div className="blog_1l5il">
                        <img src="img/35.jpg" className="w-100" alt="abc" />
                        </div>
                        </div>
                        <div className="col-md-10 col-10">
                        <div className="blog_1l5ir">
                        <h5><a href="#">Mr Semp Porta</a> <span className="font_14 col_light">/ 13 July 2017</span></h5>
                        <p className="font_14">Hi, this is a comment.<br />
                To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.</p>
                <h6 className="font_14 mb-0 mt-3"><a className="button p-3 pt-2 pb-2" href="#"> Reply</a></h6>
                        </div> 
                        </div>
                    </div><hr />
                    <div className="blog_1l5i row">
                        <div className="col-md-2 col-2 pe-0">
                        <div className="blog_1l5il">
                        <img src="img/36.jpg" className="w-100" alt="abc" />
                        </div>
                        </div>
                        <div className="col-md-10 col-10">
                        <div className="blog_1l5ir">
                        <h5><a href="#">Mr Quis Sem</a> <span className="font_14 col_light">/ 13 July 2017</span></h5>
                        <p className="font_14">Hi, this is a comment.<br />
                To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.</p>
                <h6 className="font_14 mb-0 mt-3"><a className="button p-3 pt-2 pb-2" href="#"> Reply</a></h6>
                        </div> 
                        </div>
                    </div>
                    </div>
                    <div className="blog_1l3 mt-4">
                    <h3>Leave a  Comment</h3>
                    </div>
                    <div className="blog_1l6 mt-3">
                    <div className="blog_1dt5 row mt-3">
                    <div className="col-md-6">
                        <div className="blog_1dt5l">
                        <textarea placeholder="Comment" className="form-control form_text"></textarea>
                        <div className="form-check mt-3">
                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                        <label className="form-check-label" htmlFor="customCheck1">Save my name and email in this browser for the next time I comment.</label>
                    </div>
                        <h6 className="mt-3 mb-0"><a className="button" href="#"> Comment</a></h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog_1dt5l">
                        <input className="form-control" placeholder="Name" type="text" />
                        <input className="form-control mt-3" placeholder="Email" type="text" />
                        <input className="form-control mt-3" placeholder="Website" type="text" />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>   
                <div className="col-md-4">
                    <div className="blog_1r">
                    <div className="blog_1r1 p-4">
                    <h4>Main <span className="col_red">Menu</span></h4>
                    <hr className="line mb-4" />
                    <h6><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> Audio <span className="pull-right">(12)</span></a></h6>
                        <hr />
                        <h6><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> Magazine <span className="pull-right">(03)</span></a></h6>
                        <hr />
                        <h6><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> News <span className="pull-right">(08)</span></a></h6>
                        <hr />
                        <h6><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> Photoshop <span className="pull-right">(12)</span></a></h6>
                        <hr />
                        <h6><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> Technical <span className="pull-right">(07)</span></a></h6>
                        <hr />
                        <h6><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> Uncategorized <span className="pull-right">(09)</span></a></h6>
                        <hr />
                        <h6 className="mb-0"><a href="blog_detail.html"><i className="fa fa-chevron-right me-1 col_red font_12"></i> Video <span className="pull-right">(04)</span></a></h6>
                    </div>
                    <div className="blog_1r1 p-4 mt-4">
                    <h4>Sidebar  <span className="col_red">News</span></h4>
                    <hr className="line mb-4" />
                    <div className="blog_1r1i row">
                        <div className="col-md-4 col-4">
                        <div className="blog_1r1il">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="blog_detail.html"><img src="img/4.jpg"  className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 ps-0 col-8">
                        <div className="blog_1r1ir">
                        <h6 className="mb-1"><a className="col_red" href="blog_detail.html">Company Foundation Provides</a></h6>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        </div>
                    </div><hr />
                    <div className="blog_1r1i row">
                        <div className="col-md-4 col-4">
                        <div className="blog_1r1il">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="blog_detail.html"><img src="img/5.jpg"  className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 ps-0 col-8">
                        <div className="blog_1r1ir">
                        <h6 className="mb-1"><a className="col_red" href="blog_detail.html">Company Foundation Provides</a></h6>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        </div>
                    </div><hr />
                    <div className="blog_1r1i row">
                        <div className="col-md-4 col-4">
                        <div className="blog_1r1il">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="blog_detail.html"><img src="img/6.jpg"  className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 ps-0 col-8">
                        <div className="blog_1r1ir">
                        <h6 className="mb-1"><a className="col_red" href="blog_detail.html">Company Foundation Provides</a></h6>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        </div>
                    </div><hr />
                    <div className="blog_1r1i row">
                        <div className="col-md-4 col-4">
                        <div className="blog_1r1il">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="blog_detail.html"><img src="img/7.jpg"  className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 ps-0 col-8">
                        <div className="blog_1r1ir">
                        <h6 className="mb-1"><a className="col_red" href="blog_detail.html">Company Foundation Provides</a></h6>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="blog_1r1 p-4 mt-4">
                    <h4>Accordion  <span className="col_red">Module</span></h4>
                    <hr className="line mb-4" />
                    <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Vestibulum Ante Ipsum Prin Orci
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet consec tetuer adipiscing elit Suspendissete justo consec tetuer elite.consectetuer adipiscing hendrerit augue .
                    </div>
                </div>
                </div>
                
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Cras Eleifend Lacus Ullamcorper
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet consec tetuer adipiscing elit Suspendissete justo consec tetuer elite.consectetuer adipiscing hendrerit augue .
                    </div>
                </div>
                </div>
                
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Suspendisse Lacinia Turpis Convallis
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet consec tetuer adipiscing elit Suspendissete justo consec tetuer elite.consectetuer adipiscing hendrerit augue .
                    </div>
                </div>
                </div>
                </div>
                    </div>
                    <div className="blog_1r1 p-4 mt-4">
                    <h4>Login   <span className="col_red">Form</span></h4>
                    <hr className="line mb-4" />
                    <div className="input-group input-group-merge">
                    <div className="input-group-text bg-transparent text-white border-right-0" data-password="false">
                            <span className="fa fa-user"></span>
                        </div>
                        <input type="username" id="username" className="form-control bg-transparent" placeholder="Username" />
                        
                    </div>
                    <div className="input-group input-group-merge mt-3">
                    <div className="input-group-text bg-transparent text-white border-right-0" data-password="false">
                            <span className="fa fa-user"></span>
                        </div>
                        <input type="password" id="username" className="form-control bg-transparent" placeholder="password" />
                        
                    </div>
                    <div className="form-check mt-3">
                            <input type="checkbox" className="form-check-input" id="checkmeout0" />
                            <label className="form-check-label" htmlFor="checkmeout0">Remember Me</label>
                        </div>
                        <h6 className="mt-3"><a className="button" href="blog_detail.html"><i className="fa fa-long-arrow-right align-middle me-1"></i> Login</a></h6>
                        <h6 className="mt-3"><a className="col_red" href="blog_detail.html">Create an account <i className="fa fa-long-arrow-right ms-1"></i></a></h6>
                        <h6 className="mt-3"><a className="col_red" href="blog_detail.html">Forgot your username? </a></h6>
                        <h6 className="mt-3 mb-0"><a className="col_red" href="blog_detail.html">Forgot your password? </a></h6>
                    </div>
                    <div className="blog_1r1 p-4 mt-4">
                    <h4>Popular   <span className="col_red">Tags</span></h4>
                    <hr className="line mb-4" />
                    <ul className="mb-0">
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Analyze</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Audio</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Blog</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Business</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Creative</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Design</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Experiment</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">News</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Expertize</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Express</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Share</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Sustain</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Video</a></li>
                        <li className="d-inline-block"><a className="d-block" href="blog_detail.html">Youtube</a></li>
                    </ul>
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
 
export default withRouter(BookPreview);