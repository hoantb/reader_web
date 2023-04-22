import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import * as ConstantsVar from "./common/constants";
import withRouter from "./withRouter";

class BookSearching extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            currentPage: 1,
            pages: [],
            eachPage: 4
        }

        this.changePage = this.changePage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage(this)

    }

    componentDidMount() {
        console.log(this.props.params)
        let searchName = "";
        if (this.props.params.name != null && this.props.params.name != undefined) {
            searchName = this.props.params.name;
        }
        fetch( ConstantsVar.API_URL + "/api/books?sort-type=" + this.props.params.sortType + "&title=" + searchName)
        .then(res => res.json())
        .then(
            (result) => {
                let totalPages = 0
                if (result.count % this.state.eachPage === 0) {
                    totalPages = Math.floor(result.count / this.state.eachPage )
                }
                else {
                  totalPages = Math.floor(result.count / this.state.eachPage) + 1
                }
                let pages = []
                for (let i = 0; i < totalPages; i ++)
                {
                    pages.push(i + 1)
                }
                this.setState({books: result.results, pages: pages})
            }
        )
    }

    nextPage() {

    }

    previousPage() {


    }

    changePage(event) {
        // fetch( ConstantsVar.API_URL + "/api/books")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         let totalPages = 0
        //         if (result.count % 4 === 0) {
        //             totalPages = result.count / 4
        //         }
        //         else {
        //           totalPages = result.count / 4 + 1
        //         }
        //         let pages = []
        //         for (let i = 0; i < totalPages; i ++)
        //         {
        //             pages.push(i + 1)
        //         }
        //         this.setState({books: result.results, pages: pages})
        //     }
        // )
    }

    render() {
      return (
          <div>
              <Header />
              <section id="center" className="center_o pt-2 pb-2">
                <div className="container-xl">
                  <div className="row center_o1">
                  <div className="col-md-5">
                    <div className="center_o1l">
                    <h2 className="mb-0">Tìm kiếm truyện</h2>
                  </div>
                  </div>
                  <div className="col-md-7">
                    <div className="center_o1r text-end">
                    <h6 className="mb-0 col_red"><Link to="/">Trang chủ</Link> <span className="me-2 ms-2 text-light"><i className="fa fa-caret-right align-middle"></i></span> Tìm kiếm truyện</h6>
                  </div>
                  </div>
                  </div>
                </div>
                </section>

                <section id="blog" className="pt-4 pb-4 bg_grey">
                <div className="container-xl">
                  <div className="row blog_1">
                  <div className="col-md-8">
                    <div className="blog_1l">
                  <div className="blog_1l1">
                        {
                            this.state.books &&
                            this.state.books.map(
                                book => (
                                    <div key={"book_" + book.id}>
                                        <div className="popular_2i1lm position-relative clearfix">
                                            <div className="popular_2i1lm1 clearfix">
                                                <div className="grid">
                                                  <figure className="effect-jazz mb-0">
                                                  <Link to={"/book-preview/" + book.id}><img src={book.image_preview} height="450" className="w-100" alt="img25"/></Link>
                                                  </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog_1l1i mt-3">
                                            <h2 className="mt-3"><Link className="col_red" to={"/book-preview/" + book.id}>{book.title}</Link></h2>
                                            <h6 className="fw-normal mt-3 col_light">
                                            <span><i className="fa fa-clock-o me-1 align-middle col_red"></i> 14 December 2021</span>
                                            <span className="ms-3"><i className="fa fa-user me-1 align-middle col_red"></i> Admin</span>
                                            <span className="ms-3"><i className="fa fa-comment me-1 align-middle col_red"></i> Comment</span>
                                            </h6>
                                            <p className="mt-3">{book.description}</p>
                                            <h6 className="mt-3 mb-0"><Link to={"/book-preview/" + book.id} className="button" ><i className="fa fa-long-arrow-right align-middle me-1"></i> Chi tiết</Link></h6>
                                            <hr/>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        
                  </div>
                  <div className="pages">
                    <div className="col-md-12">
                      <ul className="mb-0">
                      <li><Link onClick={this.previousPage}><i className="fa fa-chevron-left"></i></Link></li>
                          {
                              this.state.pages &&
                              this.state.pages.map(
                                  page => (
                                      <li key={"page_" + page}><Link className="act" onClick={ (e) => this.changePage(e)}>{page}</Link></li>
                                  )
                              )
                          }
                      <li><Link onClick={this.nextPage}><i className="fa fa-chevron-right"></i></Link></li>
                      </ul>
                    </div>
                  </div>
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
 
export default withRouter(BookSearching);