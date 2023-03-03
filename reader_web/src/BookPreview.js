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
                                            <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
                                                <ul>
                                                <li className="d-inline-block"><a href="#"><i className="fa fa-link col_red"></i></a></li>
                                                <li className="d-inline-block"><a href="#"><i className="fa fa-search col_red"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog_1l1i mt-3">
                                            <h5><i className="fa fa-folder-open col_red me-1"></i> Giới thiệu truyện</h5>
                                            {this.state.book.image_preview &&
                                                <h2 className="mt-3"><a className="col_red" href="#"></a>{this.state.book.title}</h2>
                                            }
                                            <h6 className="fw-normal mt-3 col_light">
                                            <span><i className="fa fa-clock-o me-1 align-middle col_red"></i> 14 December 2021</span>
                                            <span className="ms-3"><i className="fa fa-user me-1 align-middle col_red"></i> Admin</span>
                                            <span className="ms-3"><i className="fa fa-comment me-1 align-middle col_red"></i> Comment</span>
                                            </h6>
                                            <p className="mt-3">Nhà phát triển đại học Consectetuer có đường kính, Offset Euismod Estat tincidalal đến LAOREET một khoản tiền lớn vào cuối tuần. Để sôi sục cho Minimatisa Come, người đã tập thể dục Tation Ullamcorper Suscipit Carton Player. Tên sách được coi là không tải tùy chọn tùy chọn không có phần</p>
                                        </div>
                                    </div>
                                    <div className="blog_1l2">
                                        <p>Bài tập về nhà hoặc anh ta là người tiêu dùng ở Cục trong một công thức công thức nhân viên ngoài trời hoặc đau đớn Feugiat Nulla Nulla Chất chống oxy hóa nhưng đậu phộng và lớp và thường xuyên. Bản thân Lorem chỉ đơn giản là văn bản giả của ngành in và sắp chữ. Lorem là văn bản tiêu chuẩn của ngành kể từ những năm 1500, khi một máy in không xác định lấy một loại galley và tranh giành nó để tạo ra một mẫu vật mà nó đã phát triển không chỉ năm thế kỷ, mà còn là bước nhảy vọt vào việc sắp xếp điện tử.</p>
                                        <blockquote className="blockquote bg_dark p-4 pt-3 mt-4">
                                                                        <p>Provident tránh các mùa, kiến ​​trúc sư của đa số cuộc gặp gỡ lớn hơn khi được làm hài lòng kiến ​​trúc sư Auny Koi Thako, và lời buộc tội nhỏ nhất trong sự cản trở của họ và</p>
                                                                        <h6 className="fw-normal mb-0"><strong>- Dapibus Diam </strong>of Google Inc.</h6>
                                                                    </blockquote>
                                        <p>Nó đã được phổ biến vào những năm 1980 với việc phát hành các tờ Letraset chứa Lorem rất nhiều đoạn, và gần đây hơn với phần mềm xuất bản máy tính để bàn như Aldus Pagemaker bao gồm cả văn bản rất quan trọng. Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi sẽ ở trong một bản nhạc, và nỗi đau của một thời gian tuyệt vời. Ví dụ, với sự ngạc nhiên, ai đã thực hiện bất kỳ việc thực hiện việc thực hiện bất kỳ việc thực hiện việc làm nào, nhưng như là sự tiện lợi của sự thuận tiện. Bài tập về nhà hoặc một nỗi đau trong niềm vui bị chỉ trích là một cặp thoát khỏi nỗi đau. Ngoại trừ họ là những người rèm háo hức không làm nguyên tắc, họ là những món ăn nhẹ iest.</p>
                                        <ul>
                                            <li className="d-inline-block me-3"><a href="#"><i className="fa fa-tag me-1 col_red"></i> Blog</a></li>
                                            <li className="d-inline-block me-3"><a href="#"><i className="fa fa-tag me-1 col_red"></i> Creative</a></li>
                                            <li className="d-inline-block me-3"><a href="#"><i className="fa fa-tag me-1 col_red"></i> Business</a></li>
                                            <li className="d-inline-block"><a href="#"><i className="fa fa-tag me-1 col_red"></i> News</a></li>
                                        </ul>	
                                        <ul className="social-network social-circle mb-0 mt-3">
                                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>					
                                    </div>
                                    <div className="blog_1l3 mt-4">
                                        <h3>Bình luận gần đây</h3>
                                    </div>
                                    <div className="blog_1l5 mt-3">
                                        {
                                            this.state.book.comments &&
                                            this.state.book.comments.map(
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
                                    <div className="blog_1l3 mt-4">
                                    <h3>Bình luận</h3>
                                    </div>
                                    <div className="blog_1l6 mt-3">
                                        <div className="blog_1dt5 row mt-3">
                                            <div className="col-md-6">
                                                <div className="blog_1dt5l">
                                                <textarea placeholder="Comment" className="form-control form_text"></textarea>
                                                <div className="form-check mt-3">
                                                <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <label className="form-check-label" htmlFor="customCheck1">Lưu tên của tôi và email trong trình duyệt này cho lần tiếp theo tôi nhận xét.</label>
                                            </div>
                                                <h6 className="mt-3 mb-0"><a className="button" href="#"> Bình luận</a></h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="blog_1dt5l">
                                                    <input className="form-control" placeholder="Name" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_1r">
                                    <div className="blog_1r1 p-4">
                                        <h4>Tập <span class="col_red">truyện</span></h4>
                                        <hr class="line mb-4"/>
                                        {
                                            this.state.book.files &&
                                            this.state.book.files.map(
                                                file => (
                                                    <div key={"file_" + file.id}>
                                                        <div class="blog_1r1i row">
                                                        <div class="col-md-4 col-4">
                                                        <div class="blog_1r1il">
                                                        <div class="grid clearfix">
                                                                <figure class="effect-jazz mb-0">
                                                                    <Link to={"/file-preview/" + file.id}><img src={file.image_preview}  class="w-100" alt="abc"/></Link>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="col-md-8 ps-0 col-8">
                                                        <div class="blog_1r1ir">
                                                        <h6 class="mb-1"><Link class="col_red" to={"/file-preview/" + file.id}>{file.title}</Link></h6>
                                                        <p class="mb-0">{file.description}</p>
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