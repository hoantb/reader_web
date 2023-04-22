import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ConstantsVar from "./common/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
 
class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/books?sort-type=popular")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({books: result.results})
            }
        )
    }
  render() {
    return (
        <section id="popular" className="pt-4 pb-5 bg_grey">
            <div className="container">
            <div className="row trend_1">
            <div className="col-md-12">
            <div className="trend_1l">
                <h4 className="mb-0"><FontAwesomeIcon icon={faBookOpen} color="red" /> Đọc <span className="col_red">nhiều nhất</span></h4>
            </div>
            </div>
            </div>
            <div className="popular_2 row mt-4">
            <div className="tab-content">
                <div className="tab-pane active" id="home">
                <div className="popular_2i row">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        {
                            this.state.books && this.state.books[0] &&
                            <div className="grid">
                                <figure className="effect-jazz mb-0">
                                    <Link to={"/book-preview/" + this.state.books[0].id}><img src={this.state.books[0].image_preview} className="w-100" alt="img25" /></Link>
                                </figure>
                            </div>
                        }
                    </div>
                    </div>
                    </div>
                    <div className="col-md-8 col-8">
                    <div className="popular_2i1r">
                    {
                        this.state.books && this.state.books[0] &&
                        <div>
                            <h5><Link className="col_red" to={"/book-preview/" + this.state.books[0].id}>{this.state.books[0].title}</Link></h5>
                            <h6>Action, Thriller</h6>
                            <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                            <p>{this.state.books[0].description}</p>
                            <h6 className="mb-0"><Link className="button" to={"/book-preview/" + this.state.books[0].id}> Chi tiết</Link></h6>
                        </div>
                    }
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        {
                            this.state.books && this.state.books[1] &&
                            <div className="grid">
                                <figure className="effect-jazz mb-0">
                                    <Link to={"/book-preview/" + this.state.books[1].id}><img src={this.state.books[1].image_preview} className="w-100" alt="img25" /></Link>
                                </figure>
                            </div>
                        }
                    </div>
                    </div>
                    </div>
                    <div className="col-md-8 col-8">
                        <div className="popular_2i1r">
                            {
                                this.state.books && this.state.books[1] &&
                                <div>
                                    <h5><Link className="col_red" to={"/book-preview/" + this.state.books[1].id}>{this.state.books[1].title}</Link></h5>
                                    <h6>Action, Thriller</h6>
                                    <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                                    <p>{this.state.books[1].description}</p>
                                    <h6 className="mb-0"><a className="button" href="#"> Chi tiết</a></h6>
                                </div>
                            }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="popular_2i row mt-4">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        {
                            this.state.books && this.state.books[2] &&
                            <div className="grid">
                                <figure className="effect-jazz mb-0">
                                    <Link to={"/book-preview/" + this.state.books[2].id}><img src={this.state.books[2].image_preview} className="w-100" alt="img25" /></Link>
                                </figure>
                            </div>
                        }
                    </div>
                    </div>
                    </div>
                    <div className="col-md-8 col-8">
                    <div className="popular_2i1r">
                    {
                        this.state.books && this.state.books[2] &&
                        <div>
                            <h5><Link className="col_red" to={"/book-preview/" + this.state.books[2].id}>{this.state.books[2].title}</Link></h5>
                            <h6>Action, Thriller</h6>
                            <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                            <p>{this.state.books[2].description}</p>
                            <h6 className="mb-0"><Link className="button" to={"/book-preview/" + this.state.books[2].id}> Chi tiết</Link></h6>
                        </div>
                    }
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        {
                            this.state.books && this.state.books[3] &&
                            <div className="grid">
                                <figure className="effect-jazz mb-0">
                                    <Link to={"/book-preview/" + this.state.books[3].id}><img src={this.state.books[3].image_preview} className="w-100" alt="img25" /></Link>
                                </figure>
                            </div>
                        }
                    </div>
                    </div>
                    </div>
                    <div className="col-md-8 col-8">
                    <div className="popular_2i1r">
                        {
                            this.state.books && this.state.books[3] &&
                            <div>
                                <h5><Link className="col_red" to={"/book-preview/" + this.state.books[3].id}>{this.state.books[3].title}</Link></h5>
                                <h6>Action, Thriller</h6>
                                <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                                <p>{this.state.books[3].description}</p>
                                <h6 className="mb-0"><Link className="button" to={"/book-preview/" + this.state.books[3].id}> Chi tiết</Link></h6>
                            </div>
                        }
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="tab-pane" id="profile">
                <div className="popular_2i row">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/22.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Semp Porta</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/23.jpg" className="w-100" alt="img25" /></a>
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
                    <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="popular_2i row mt-4">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/24.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Quis Sem</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/25.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="tab-pane" id="settings">
                <div className="popular_2i row">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/26.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Semp Porta</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/27.jpg" className="w-100" alt="img25" /></a>
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
                    <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="popular_2i row mt-4">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/28.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Quis Sem</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/29.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                
                <div className="tab-pane" id="settings_o">
                    <div className="popular_2i row">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/18.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Semp Porta</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.2  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/19.jpg" className="w-100" alt="img25" /></a>
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
                    <h6> Imdb 8.3  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="popular_2i row mt-4">
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/20.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Quis Sem</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.4  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="popular_2i1 row">
                    <div className="col-md-4 col-4">
                    <div className="popular_2i1lm position-relative clearfix">
                    <div className="popular_2i1lm1 clearfix">
                        <div className="grid">
                    <figure className="effect-jazz mb-0">
                        <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/frontend/img/21.jpg" className="w-100" alt="img25" /></a>
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
                    <h5><a className="col_red" href="#">Ipsum Lorem</a></h5>
                    <h6>Action, Thriller</h6>
                    <h6> Imdb 8.6  <span className="ms-2"><i className="fa fa-star col_red me-1"></i></span> Year : 2022 <span className="ms-2">Số tập: 45</span></h6>
                    <p>Four waves of increasingly deadly alien attacks have left most of  ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                    <h6 className="mb-0"><a className="button" href="#"> More Info - Trailer</a></h6>
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

    );
  }
}
 
export default Popular;