import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import * as ConstantsVar from "./common/constants";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky: 0,
            navbar_height: 0,
            categories: [],
            searchName: ""
        }
        this.navbar_sticky_ref = React.createRef();

        this.handleClick = this.handleClick.bind(this);
        this.btnHandleSearch = this.btnHandleSearch.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.getSearchName = this.getSearchName.bind(this)
    }
    btnHandleSearch () {
        console.log("ok")
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

    updateInputValue(evt) {
        const val = evt.target.value;
        // ...       
        this.setState({
          searchName: val
        });
    }

    getSearchName() {
        if (this.state.searchName === "")
        {
            return "*"
        }
        return this.state.searchName
    }

    componentDidMount() {
        window.onscroll = this.handleClick;
        this.setState({sticky: this.navbar_sticky_ref.current.offsetTop})
        this.setState({navbar_height: document.querySelector('.navbar').offsetHeight})
        fetch( ConstantsVar.API_URL + "/api/book-categories" + "/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({categories: result})
            }
        )
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
                                <h3 className="mb-0"><Link className="text-white" to="/"><FontAwesomeIcon icon={faBookOpenReader} color="red" /> Enjoy Reading</Link></h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="top_1m">
                                <div className="input-group">
                                            <input onChange={evt => this.updateInputValue(evt)} type="text" value={this.state.searchName} className="form-control bg-black" placeholder="Tên truyện..." />
                                            <span className="input-group-btn">
                                                <Link  to={"/book-searching/*/" + this.getSearchName()} className="btn btn text-white bg_red rounded-0 border-0" type="button">
                                                Tìm kiếm</Link>
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
                    <Link className="navbar-brand text-white fw-bold" to="/"><FontAwesomeIcon icon={faBookOpenReader} color="red" /> Enjoy Reading</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page" >Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about-us">Giới thiệu</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Thể loại
                        </a>
                        <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                            {
                                this.state.categories &&
                                this.state.categories.map(
                                    category => (
                                        <li key={"category_" + category.id}><Link className="dropdown-item">{category.name}</Link></li>
                                    )
                                )
                            }
                        </ul>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-link" href="contact.html">Liên hệ</Link>
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