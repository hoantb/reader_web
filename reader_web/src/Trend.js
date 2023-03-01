import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as ConstantsVar from "./common/constants";

class Trend extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        fetch( ConstantsVar.API_URL + "/api/books")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({books: result.results})
            }
        )
    }
  render() {
    return (
        <section id="trend" className="pt-4 pb-5">
            <div className="container">
            <div className="row trend_1">
            <div className="col-md-6 col-6">
            <div className="trend_1l">
                <h4 className="mb-0"><i className="fa fa-youtube-play align-middle col_red me-1 "></i> Truyện <span className="col_red">mới nhất</span></h4>
            </div>
            </div>
            <div className="col-md-6 col-6">
            <div className="trend_1r text-end">
                <h6 className="mb-0"><a className="button" href="#"> Xem tất cả</a></h6>
            </div>
            </div>
            </div>
            <div className="row trend_2 mt-4">
                <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" className="" aria-current="true"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="trend_2i row">
                            {/* loop item */}
                            {this.state.books.map(
                                book => (
                                    <div className="col-md-3 col-6" key={book.id}>
                                        <div className="trend_2im clearfix position-relative">
                                            <div className="trend_2im1 clearfix">
                                                <div className="grid">
                                                    <figure className="effect-jazz mb-0">
                                                        <Link to={"/book-preview/" + book.id} ><img src={book.image_preview} className="w-100" alt="img25" /></Link>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
                                                <span className="fs-1"></span>
                                            </div>
                                        </div>
                                        <div className="trend_2ilast bg_grey p-3 clearfix">
                                            <h5><a className="col_red" href="#">{book.title}</a></h5>
                                            <p className="mb-2">{book.description}</p>
                                            <span className="col_red">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                            <p className="mb-0">1 Views</p>
                                        </div>
                                    </div>
                                )
                            )
                            }
                            {/* end loop item */}
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
 
export default Trend;