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
                <img src="https://storage.googleapis.com/reader-web-statics/frontend/img/naruto.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block">
                <h1 className="font_60"> Naruto</h1>
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
                <p className="mt-3">Truyện tranh Naruto là một trong những bộ truyện tranh nổi tiếng của Nhật Bản, được tác giả Masashi Kishimoto sáng tác. Naruto kể về câu chuyện của một cậu bé tên là Uzumaki Naruto, người đã bị ám ảnh bởi một con quái vật hồi nhỏ, và muốn trở thành Hokage (trưởng làng) của Làng Lá để được tôn vinh và công nhận.</p>
                <p className="mt-3">Truyện được xây dựng trên nền tảng tình bạn, tình đồng đội, tình yêu, sự hy sinh, sự trưởng thành và sự chiến đấu. Naruto phải trải qua nhiều khó khăn để đạt được mục tiêu của mình, gặp gỡ nhiều nhân vật tuyệt vời và phải đối mặt với nhiều thử thách trong cuộc phiêu lưu của mình.</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Nhân vật chính:</span> Naruto</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Thể loại:</span> truyện tranh nhật bản</p>
                <p><span className="col_red me-1 fw-bold">Số tập:</span> 45</p>	
                <h6 className="mt-4"><Link className="button" to="/book-preview/1"><i className="align-middle me-1"></i> Xem review</Link></h6>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://storage.googleapis.com/reader-web-statics/frontend/img/doreamon.jpg" className="d-block w-100" alt="..." />
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
                    4.5 (Imdb)      Year : 2022
                    <a className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
                </h6>
                <p className="mt-3">Truyện tranh Doraemon là một trong những bộ truyện tranh nổi tiếng của Nhật Bản, được sáng tác bởi Fujiko F. Fujio. Truyện kể về cuộc phiêu lưu của cậu bé Nobita và chú mèo máy Doraemon đến từ tương lai, được gửi về để giúp đỡ Nobita giải quyết các vấn đề trong cuộc sống.</p>
                <p className="mt-3">Doraemon có nhiều chiếc túi đầy đủ các thiết bị tương lai, từ cánh cửa thần kỳ đưa Nobita đến bất kỳ nơi nào trên thế giới, đến những chiếc bút bi giúp Nobita tạo ra các vật thể từ trí tưởng tượng của mình.</p>
                <p className="mt-3">Truyện tranh Doraemon là một bộ truyện tranh hài hước và mang tính giáo dục cao, được yêu thích không chỉ ở Nhật Bản mà còn trên toàn thế giới. Nó mang đến cho người đọc những giá trị về tình bạn, sự thông minh, sáng tạo và ý nghĩa của việc giúp đỡ người khác.</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> Nobita</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
                <p><span className="col_red me-1 fw-bold">Số tập:</span> 45</p>	
                <h6 className="mt-4"><a className="button" href="#"> Xem review</a></h6>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://storage.googleapis.com/reader-web-statics/frontend/img/one_piece.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-md-block">
                <h1 className="font_60"> One Piece</h1>
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
                <p className="mt-3">One Piece là một trong những bộ truyện tranh manga nổi tiếng nhất của Nhật Bản, được sáng tác bởi tác giả Eiichiro Oda. Truyện kể về cuộc hành trình của Luffy và nhóm của mình, đến tìm kiếm kho báu One Piece - kho báu lớn nhất và có giá trị nhất trong vũ trụ.</p>
                <p className="mt-3">Luffy là một cậu bé ăn nhiễm Trái Ác Quỷ (Devil Fruit) và có khả năng biến cơ thể của mình thành cao su. Anh cùng với nhóm của mình bao gồm Zoro, Nami, Sanji, Usopp, Chopper, Robin, Franky và Brook đã cùng nhau phiêu lưu khắp thế giới, đánh bại những kẻ thù đáng sợ và giải quyết những câu đố trên đường đi.</p>
                <p className="mt-3">One Piece là một bộ truyện tranh với nhiều yếu tố hài hước, phiêu lưu, hành động và cảm động. Nó cũng mang đến những thông điệp về tình bạn, tình đồng đội, tình yêu và sự đoàn kết. Truyện tranh đã có sức ảnh hưởng lớn đến nhiều thế hệ trẻ em và người lớn trên toàn thế giới.</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Starring:</span> One Piece</p>
                <p className="mb-2"><span className="col_red me-1 fw-bold">Genres:</span> Music</p>
                <p><span className="col_red me-1 fw-bold">Số tập:</span> 45</p>	
                <h6 className="mt-4 mb-0"><a className="button" href="#"> Xem review</a></h6>
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