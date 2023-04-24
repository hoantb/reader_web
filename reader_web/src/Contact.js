import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
 
class Contact extends Component {
  render() {
    return (
        <div>
            <Header />
            <section id="center" className="center_o pt-2 pb-2">
                <div className="container-xl">
                <div className="row center_o1">
                <div className="col-md-5">
                    <div className="center_o1l">
                    <h2 className="mb-0">Liên hệ</h2>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="center_o1r text-end">
                    <h6 className="mb-0 col_red"><Link to="/">Trang chủ</Link> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Liên hệ</h6>
                    </div>
                </div>
                </div>
                </div>
                </section>

                <section id="contact" className="pt-4 pb-4 bg_grey">
                <div className="container-xl">
                <div className="row contact_1 bg_dark  pt-5 pb-5">
                <div className="col-md-3">
                    <div className="contact_1i row">
                    <div className="col-md-2 col-2">
                    <div className="contact_1il">
                    <span className="col_red fs-3"><i className="fa fa-map-marker"></i></span>
                    </div>
                    </div>
                    <div className="col-md-10 col-10">
                    <div className="contact_1ir">
                    <h5 className="col_red">Địa Chỉ</h5>
                    <p className="mb-0">Nguyễn Hiến Lê, Phường 13, Quận Tân Bình, TP HCM</p>
                    </div>
                    </div>
                    </div>
                </div>   
                <div className="col-md-3">
                    <div className="contact_1i row">
                    <div className="col-md-2 col-2">
                    <div className="contact_1il">
                    <span className="col_red fs-3"><i className="fa fa-clock-o"></i></span>
                    </div>
                    </div>
                    <div className="col-md-10 col-10">
                    <div className="contact_1ir">
                    <h5 className="col_red">Giờ Làm Việc</h5>
                    <p className="mb-0">Thứ 2 - Thứ 7</p>
                    <p className="mb-0">8.00AM - 06.00PM</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact_1i row">
                    <div className="col-md-2 col-2">
                    <div className="contact_1il">
                    <span className="col_red fs-3"><i className="fa fa-envelope"></i></span>
                    </div>
                    </div>
                    <div className="col-md-10 col-10">
                    <div className="contact_1ir">
                    <h5 className="col_red">E-mail</h5>
                    <p className="mb-0">admin@ittruyen.com</p>
                    <p className="mb-0">hoan.buithanh91@gmail.com</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="contact_1i row">
                    <div className="col-md-2 col-2">
                    <div className="contact_1il">
                    <span className="col_red fs-3"><i className="fa fa-phone"></i></span>
                    </div>
                    </div>
                    <div className="col-md-10 col-10">
                    <div className="contact_1ir">
                    <h5 className="col_red">Điện Thoại</h5>
                    <p className="mb-0">0342 185 187</p>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row contact_2 mt-4">
                <div className="col-md-3">
                    <div className="contact_2r">
                    <h5 className="mb-3">Văn Phòng HCM</h5>
                    <p><i className="fa fa-car col_red me-1"></i> Nguyễn Hiến Lê, Phường 13, Quận Tân Bình</p>
                    <p><i className="fa fa-phone col_red me-1"></i> 0342 185 187</p>
                    <p><i className="fa fa-globe col_red me-1"></i> <Link href="#">admin@ittruyen.com</Link></p>
                        <p><i className="fa fa-envelope col_red me-1"></i> <Link href="#">hoan.buithanh91@gmail.com</Link></p>
                        <h5 className="mb-3 mt-4">Giờ Làm Việc</h5>
                        <p>Đường dây nóng hoạt động 24/24!..</p>
                        <p>Thứ 2 - Thứ 7 : <span className="fw-bold text-white">8AM - 6PM</span></p>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="contact_2l row">
                    <div className="col-md-12">
                    <h4>Tin Nhắn Góp Ý</h4>
                    </div> 
                    </div>
                    <div className="contact_2l1 mt-3 row">
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Họ Và Tên*" type="text"/>
                    </div>
                    </div> 
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Địa Chỉ Email*" type="text"/>
                    </div>
                    </div>
                    
                    </div>
                    <div className="contact_2l1 mt-3 row">
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Số Điện Thoại*" type="text"/>
                    </div>
                    </div> 
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Tiêu Đề*" type="text"/>
                    </div>
                    </div>
                    
                    </div>
                    <div className="contact_2l1 mt-3 row">
                    <div className="col-md-12">
                    <div className="contact_2l1i">
                        <textarea placeholder="Tin Nhắn" className="form-control form_text"></textarea>
                        <h6 className="mt-3 mb-0"><a className="button" href="#"> Gửi Tin Nhắn</a></h6>
                    </div>
                    </div> 
                    </div>
                </div>
                </div>
                <div className="row contact_3 mt-4">
                <div className="col-md-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0591829855216!2d106.64372977592801!3d10.806779258631295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529443c7992d5%3A0x6278c56b5c41fb2!2zTmd1eeG7hW4gSGnhur9uIEzDqiwgcGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1682303709671!5m2!1sen!2s" width="100%" height="450" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                </div>
                </section>
            <Footer />
        </div>
    );
  }
}
 
export default Contact;