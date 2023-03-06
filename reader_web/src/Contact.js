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
                    <h5 className="col_red">Company Address</h5>
                    <p className="mb-0">5311 Ceaver Sidge Td. Pakland, DE 13507</p>
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
                    <h5 className="col_red">Office Hours</h5>
                    <p className="mb-0">Monday To Saturday - 10.00 - 07.00</p>
                    <p className="mb-0">Sunday - Closed</p>
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
                    <p className="mb-0">info@gmail.com</p>
                    <p className="mb-0">info@gmail.com</p>
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
                    <h5 className="col_red">Phone Numbers</h5>
                    <p className="mb-0">+123 123 456</p>
                    <p className="mb-0">+123 123 456</p>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row contact_2 mt-4">
                <div className="col-md-3">
                    <div className="contact_2r">
                    <h5 className="mb-3">LONDON OFFICE</h5>
                    <p><i className="fa fa-car col_red me-1"></i> 111 Queen Sv, WIC 1, India</p>
                    <p><i className="fa fa-phone col_red me-1"></i> +123 123 456</p>
                    <p><i className="fa fa-globe col_red me-1"></i> <a href="#">info@gmail.com</a></p>
                        <p><i className="fa fa-envelope col_red me-1"></i> <a href="#">info@gmail.com</a></p>
                        <h5 className="mb-3 mt-4">BUSINESS HOURS</h5>
                        <p>Hotline is available for 24 hours a day!..</p>
                        <p>Monday – Friday : <span className="fw-bold text-white">9am to 7pm</span></p>
                        <p>Saturday : <span className="fw-bold text-white">11am to 3pm</span></p>
                        <p>Sunday : <span className="fw-bold text-white">Closed</span></p>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="contact_2l row">
                    <div className="col-md-12">
                    <h4>GET IN TOUCH</h4>
                    </div> 
                    </div>
                    <div className="contact_2l1 mt-3 row">
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Name*" type="text"/>
                    </div>
                    </div> 
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Email*" type="text"/>
                    </div>
                    </div>
                    
                    </div>
                    <div className="contact_2l1 mt-3 row">
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Name*" type="text"/>
                    </div>
                    </div> 
                    <div className="col-md-6">
                    <div className="contact_2l1i">
                        <input className="form-control" placeholder="Email*" type="text"/>
                    </div>
                    </div>
                    
                    </div>
                    <div className="contact_2l1 mt-3 row">
                    <div className="col-md-12">
                    <div className="contact_2l1i">
                        <textarea placeholder="Comment" className="form-control form_text"></textarea>
                        <h6 className="mt-3 mb-0"><a className="button" href="#"> Submit</a></h6>
                    </div>
                    </div> 
                    </div>
                </div>
                </div>
                <div className="row contact_3 mt-4">
                <div className="col-md-12">
                    <iframe height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.46147448797!2d106.41434832066398!3d10.754665783522423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1678102698055!5m2!1sen!2s" style={{ width:"100%", border: 0, allowFullScreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>
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