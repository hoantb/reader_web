import React, { Component } from "react";
 
class Footer extends Component {
    myFunction() 
    {
        if (window.pageYOffset >= sticky + navbar_height) {
            navbar_sticky.classNameList.add("sticky")
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            navbar_sticky.classNameList.remove("sticky");
            document.body.style.paddingTop = '0'
        }
    }
  render() {
    return (
        <div>
            <section id="footer">
                <div className="footer_m clearfix">
                <div className="container">
                <div className="row footer_1">
                    <div className="col-md-4">
                    <div className="footer_1i">
                    <h3><a className="text-white" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Planet</a></h3>
                    <p className="mt-3">Lorem ipsum dolor sit amet consect etur adi pisicing elit sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet consect etur. </p>
                    <h6 className="fw-normal"><i className="fa fa-map-marker fs-5 align-middle col_red me-1"></i> 5311 Ceaver Sidge Td.
                Pakland, DE 13507</h6>
                        <h6 className="fw-normal mt-3"><i className="fa fa-envelope fs-5 align-middle col_red me-1"></i> info@gmail.com</h6>
                        <h6 className="fw-normal mt-3 mb-0"><i className="fa fa-phone fs-5 align-middle col_red me-1"></i>  +123 123 456</h6>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="footer_1i">
                    <h4>Flickr <span className="col_red">Stream</span></h4>
                    <div className="footer_1i1 row mt-4">
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/4.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/5.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/6.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/7.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer_1i1 row mt-3">
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/8.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/9.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/10.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-3">
                        <div className="footer_1i1i">
                        <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                    <a href="#"><img src="https://storage.googleapis.com/reader-web-statics/img/11.jpg" height="70" className="w-100" alt="abc" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="footer_1i">
                    <h4>Sign  <span className="col_red">Newsletter</span></h4>
                    <p className="mt-3">Subscribe to our newsletter list to get latest news and updates from us</p>
                    <div className="input-group">
                                <input type="text" className="form-control bg-black" placeholder="Email" />
                                <span className="input-group-btn">
                                    <button className="btn btn text-white bg_red rounded-0 border-0" type="button">
                                        Subscribe</button>
                                </span>
                        </div>
                        <ul className="social-network social-circle mb-0 mt-4">
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
                </section>

                <section id="footer_b" className="pt-3 pb-3 bg_grey">
                <div className="container">
                <div className="row footer_1">
                    <div className="col-md-8">
                    <div className="footer_1l">
                    <p className="mb-0">© 2013 Your Website Name. All Rights Reserved | Design by <a className="col_red" href="http://www.templateonweb.com">TemplateOnWeb</a></p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="footer_1r">
                    <ul className="mb-0">
                        <li className="d-inline-block me-2"><a href="#">Home</a></li>
                        <li className="d-inline-block me-2"><a href="#">Features</a></li>
                        <li className="d-inline-block me-2"><a href="#">Pages</a></li>
                        <li className="d-inline-block me-2"><a href="#">Portfolio</a></li>
                        <li className="d-inline-block me-2"><a href="#">Blog</a></li>
                        <li className="d-inline-block"><a href="#">Contact</a></li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <script>
                window.onscroll = function() {myFunction()};

                var navbar_sticky = document.getElementById("navbar_sticky");
                var sticky = navbar_sticky.offsetTop;
                var navbar_height = document.querySelector('.navbar').offsetHeight;
                
            </script>
        </div>
    );
  }
}
 
export default Footer;