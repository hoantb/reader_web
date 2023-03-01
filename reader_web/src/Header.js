import React, { Component } from "react";
 
class Header extends Component {
    constructor(props) {
        super(props);
        // var navbar_sticky = document.getElementById("navbar_sticky");
        // var sticky = navbar_sticky.offsetTop;
        // var navbar_height = document.querySelector('.navbar').offsetHeight;
        this.state = {
            sticky: 0,
            navbar_height: 0
        }
        this.navbar_sticky_ref = React.createRef();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {

        // if (window.pageYOffset >= this.state.sticky + this.state.navbar_height) 
        // {
        //     this.navbar_sticky_ref.current.classList.add("sticky")
        //     document.body.style.paddingTop = this.state.navbar_height + 'px';
        // } 
        // else 
        // {
        //     this.navbar_sticky_ref.current.classList.remove("sticky");
        //     document.body.style.paddingTop = '0'
        // }
        
    }

    componentDidMount() {
        window.onscroll = this.handleClick;
        this.setState({sticky: this.navbar_sticky_ref.current.offsetTop})
        this.setState({navbar_height: document.querySelector('.navbar').offsetHeight})
    }
    useEffect() {
        
    }
  render() {
    return (
        <div>
            <section id="top">
                <div className="container">
                    <div className="row top_1">
                        <div className="col-md-3">
                            <div className="top_1l pt-1">
                                <h3 className="mb-0"><a className="text-white" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Enjoy Reading</a></h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="top_1m">
                                <div className="input-group">
                                            <input type="text" className="form-control bg-black" placeholder="Tên truyện..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn text-white bg_red rounded-0 border-0" type="button">
                                                Tìm kiếm</button>
                                            </span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top_1r text-end">
                                <ul className="social-network social-circle mb-0">
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
                <nav className="navbar navbar-expand-md navbar-light" id="navbar_sticky" ref={this.navbar_sticky_ref}>
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="index.html"><i className="fa fa-video-camera col_red me-1"></i> Planet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="about.html">Giới thiệu</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Thể loại
                        </a>
                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                            <li><a className="dropdown-item border-0" href="blog_detail.html">Blog Detail</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="contact.html">Liên hệ</a>
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