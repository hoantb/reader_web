import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Center extends Component {
  render() {
    return (
        <section id="center" className="center_home">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="" aria-current="true"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://storage.googleapis.com/reader-web-statics/img/1.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block">
                <h1 className="font_60"> Doreamon</h1>
                <h6 className="mt-3">
                    <span className="col_red me-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    </span>
                    4.5 (Tốt)      Năm : 2022
                    <Link className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" to="/book-preview/1">Đọc ngay</Link>
                </h6>
                <p className="mt-3">Bốn đợt tấn công ngày càng nguy hiểm của người ngoài hành tinh đã khiến phần lớn Trái đất bị hủy hoại. Cassie đang chạy trốn, cố gắng hết sức để cứu em trai mình.</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Nhân vật chính:</span> Nobita</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Thể loại:</span> truyện tranh nhật bản</p>
                <p><span className="col_red me-1 fw-bold">Số tập:</span> 45</p>	
                <h6 className="mt-4"><Link className="button" to="/book-preview/1"><i className="align-middle me-1"></i> Xem review</Link></h6>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://storage.googleapis.com/reader-web-statics/img/2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block">
                <h1 className="font_60"> Lorem Semper Nulla</h1>
                <h6 className="mt-3">
                    <span className="col_red me-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    </span>
                    4.5 (Imdb)      Year : 2022
                    <a className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
                </h6>
                <p className="mt-3">Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> Eget Nulla Semper Porta Dapibus Diam Ipsum</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
                <p><span className="col_red me-1 fw-bold">Runtime:</span> 1h 32m</p>	
                <h6 className="mt-4"><a className="button" href="#"><i className="fa fa-play-circle align-middle me-1"></i> Watch Trailer</a></h6>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://storage.googleapis.com/reader-web-statics/img/3.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block">
                <h1 className="font_60"> Eget Diam Ipsum</h1>
                <h6 className="mt-3">
                    <span className="col_red me-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    </span>
                    4.5 (Imdb)      Year : 2022
                    <a className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
                </h6>
                <p className="mt-3">Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> Eget Nulla Semper Porta Dapibus Diam Ipsum</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
                <p><span className="col_red me-1 fw-bold">Runtime:</span> 1h 32m</p>	
                <h6 className="mt-4 mb-0"><a className="button" href="#"><i className="fa fa-play-circle align-middle me-1"></i> Watch Trailer</a></h6>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </section>

    );
  }
}
 
export default Center;