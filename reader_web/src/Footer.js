import React, { Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
class Footer extends Component {

  render() {
    return (
        <div>
            <section id="footer">
                <div className="footer_m clearfix">
                <div className="container">
                <div className="row footer_1">
                    <div className="col-md-4">
                        <div className="footer_1i">
                            <h3><a className="text-white" href="index.html"><FontAwesomeIcon icon={faBookOpenReader} color="red" /> Enjoy Reading</a></h3>
                            <p className="mt-3">Chúc bạn có giây phút thư giãn cũng những bộ truyện hấp dẫn từ truyenchoban.com </p>
                            <h6 className="fw-normal"><i className="fa fa-map-marker fs-5 align-middle col_red me-1"></i>Thành phố Hồ Chí Minh, Việt Nam</h6>
                                <h6 className="fw-normal mt-3"><i className="fa fa-envelope fs-5 align-middle col_red me-1"></i> admin@truyenchoban.com</h6>
                                <h6 className="fw-normal mt-3 mb-0"><i className="fa fa-phone fs-5 align-middle col_red me-1"></i>  +123 123 456</h6>
                            </div>
                        </div>
                    <div className="col-md-4">
                    <div className="footer_1i">
                    <h4>Đăng ký  <span className="col_red">bảng tin</span></h4>
                    <p className="mt-3">Đăng ký danh sách bản tin của chúng tôi để nhận tin tức và cập nhật truyện mới nhất từ chúng tôi</p>
                    <div className="input-group">
                                <input type="text" className="form-control bg-black" placeholder="Email" />
                                <span className="input-group-btn">
                                    <button className="btn btn text-white bg_red rounded-0 border-0" type="button">
                                        Subscribe</button>
                                </span>
                        </div>
                        <ul className="social-network social-circle mb-0 mt-4">
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
                </section>

                <section id="footer_b" className="pt-3 pb-3 bg_grey">
                <div className="container">
                <div className="row footer_1">
                    <div className="col-md-8">
                    <div className="footer_1l">
                    <p className="mb-0">© 2023 truyenchoban.com. All Rights Reserved | Design by <a className="col_red" href="admin@truyenchoban.com">admin@truyenchoban.com</a></p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="footer_1r">
                    <ul className="mb-0">
                        <li className="d-inline-block me-2"><a href="/">Trang chủ</a></li>
                        <li className="d-inline-block"><a href="/contact">Liên hệ</a></li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
  }
}
 
export default Footer;