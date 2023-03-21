import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import withRouter from "./withRouter";
import * as ConstantsVar from "./common/constants";

class BookPreview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            book: {},
            comments: []
        }
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/books" + "/" + this.props.params.id)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({book: result, comments: result.comments})
            }
        )
    }
    

    render() {
        return (
            <div>
                <Header />
                <section id="center" className="center_o pt-2 pb-2">
                    <div className="container-xl">
                        <div className="row center_o1">
                            <div className="col-md-5">
                                <div className="center_o1l">
                                <h2 className="mb-0">Review truyện </h2>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="center_o1r text-end">
                                <h6 className="mb-0 col_red"><Link href="#">Trang chủ</Link> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Review truyện</h6>
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
                                        </div>
                                        <div className="blog_1l1i mt-3">
                                            <h5><i className="fa fa-folder-open col_red me-1"></i> Giới thiệu truyện</h5>
                                            {this.state.book &&
                                                <div>
                                                    <h2 className="mt-3"><a className="col_red" href="#"></a>{this.state.book.title}</h2>
                                                    <h6 className="fw-normal mt-3 col_light">
                                                        <span><i className="fa fa-clock-o me-1 align-middle col_red"></i> 14 December 2021</span>
                                                        <span className="ms-3"><i className="fa fa-user me-1 align-middle col_red"></i> {this.state.book.author_name}</span>
                                                    </h6>
                                                    <p className="mt-3">{this.state.book.description}</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        this.state.comments.length > 0 &&
                                        <div>
                                            <div className="blog_1l3 mt-4">
                                                <h3>Bình luận gần đây</h3>
                                            </div>
                                            <div className="blog_1l5 mt-3">
                                                {
                                                    this.state.comments.map(
                                                        comment => (
                                                            <div key={"comment_" + comment.id}>
                                                            <div className="blog_1l5i row">
                                                                <div className="col-md-2 col-2 pe-0">
                                                                <div className="blog_1l5il">
                                                                <img src={comment.visitor.avatar} className="w-100" alt="abc" />
                                                                </div>
                                                                </div>
                                                                <div className="col-md-10 col-10">
                                                                    <div className="blog_1l5ir">
                                                                        <h5><a href="#">{comment.visitor.name}</a> <span className="font_14 col_light">/ 13 July 2017</span></h5>
                                                                        <p className="font_14">{comment.comment}</p>
                                                                    </div> 
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>
                                    }
                                    <div className="blog_1l3 mt-4">
                                    <h3>Bình luận</h3>
                                    </div>
                                    <div className="blog_1l6 mt-3">
                                        <div className="blog_1dt5 row mt-3">
                                            <div className="col-md-6">
                                                <div className="blog_1dt5l">
                                                    <input className="form-control" placeholder="Họ và tên" type="text" />
                                                </div>
                                                <div className="blog_1dt5l mt-3">
                                                    <input className="form-control" placeholder="Email" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog_1dt5 row mt-3">
                                            <div className="col-md-12">
                                                    <div className="blog_1dt5l">
                                                        <textarea placeholder="Comment" className="form-control form_text" style={{height: "173px"}}></textarea>
                                                        <div className="form-check mt-3">
                                                            <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                            <label className="form-check-label" htmlFor="customCheck1">Lưu tên của tôi và email trong trình duyệt này cho lần tiếp theo tôi nhận xét.</label>
                                                        </div>
                                                        <h6 className="mt-3 mb-0"><a className="button" href="#"> Bình luận</a></h6>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_1r">
                                    <div className="blog_1r1 p-4">
                                        <h4>Tập <span className="col_red">truyện</span></h4>
                                        <hr className="line mb-4"/>
                                        {
                                            this.state.book.files &&
                                            this.state.book.files.map(
                                                file => (
                                                    <div key={"file_" + file.id}>
                                                        <div className="blog_1r1i row">
                                                        <div className="col-md-4 col-4">
                                                        <div className="blog_1r1il">
                                                        <div className="grid clearfix">
                                                                <figure className="effect-jazz mb-0">
                                                                    <Link to={"/file-preview/" + file.id}><img src={file.image_preview}  className="w-100" alt="abc"/></Link>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="col-md-8 ps-0 col-8">
                                                        <div className="blog_1r1ir">
                                                        <h6 className="mb-1"><Link className="col_red" to={"/file-preview/" + file.id}>{file.title}</Link></h6>
                                                        <p className="mb-0">{file.description}</p>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <hr/>
                                                    </div>
                                                )
                                            )
                                        }
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