import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
 
class AboutUs extends Component {
  render() {
    return (
        <div>
            <Header />
            <section id="center" className="center_o pt-2 pb-2">
                <div className="container-xl">
                <div className="row center_o1">
                <div className="col-md-5">
                    <div className="center_o1l">
                    <h2 className="mb-0">Giới thiệu</h2>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="center_o1r text-end">
                    <h6 className="mb-0 col_red"><Link to="/">Trang chủ</Link> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Giới thiệu</h6>
                    </div>
                </div>
                </div>
                </div>
                </section>

                <section id="about_pg">
                <div className="about_pgm">
                <div className="container-xl">
                <div className="row about_pg1">
                    <div className="col-md-12">
                    <h2>
                        <span className="col_red">It Truyện</span>
                        <br />Enjoy Reading
                    </h2>
                    <p className="mt-3 w-50">Chào bạn! Trang web truyện tranh là một nơi tuyệt vời để thưởng thức các bộ truyện tranh miễn phí trực tuyến. Trên trang web này, bạn có thể tìm thấy nhiều loại truyện tranh khác nhau, từ truyện tranh Nhật Bản (manga), truyện tranh Hàn Quốc (manhwa), đến truyện tranh Trung Quốc (manhua), và cả truyện tranh từ các nước khác nhau.</p>
                    <p className="w-50">Trang web truyện tranh thường có các chuyên mục để người đọc dễ dàng tìm kiếm và lựa chọn truyện tranh mình thích, bao gồm các thể loại như: hành động, phiêu lưu, tình cảm, kinh dị, võ thuật, fantasy, siêu năng lực, và nhiều hơn nữa.</p>
                    <p className="w-50">Ngoài ra, trang web truyện tranh còn cung cấp các chức năng đọc truyện online, tải về, chia sẻ, đánh giá và bình luận. Bạn cũng có thể đăng ký tài khoản để lưu lại những truyện tranh yêu thích và theo dõi các bộ truyện mới được cập nhật.</p>
                    <p className="w-50">Tuy nhiên, khi đọc truyện tranh trên trang web này, bạn cần lưu ý rằng không phải tất cả các truyện đều được cập nhật đầy đủ và đảm bảo chất lượng. Vì vậy, nếu bạn muốn đọc truyện tranh chất lượng cao và đầy đủ, bạn có thể cân nhắc mua các bản dịch chính thức hoặc các tác phẩm đã được xuất bản.</p>
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
 
export default AboutUs;