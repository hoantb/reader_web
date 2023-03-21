import React, { Component } from "react";
// import { Document, Page } from 'react-pdf';
import * as ConstantsVar from "./common/constants";
import withRouter from "./withRouter";
import { Document, Page,pdfjs } from 'react-pdf';
import Center from './Center'
import Header from "./Header";
import './PdfPreview.css'
import Footer from "./Footer";

// const styles = StyleSheet.create({
//   page: { backgroundColor: 'tomato' },
//   section: { color: 'white', textAlign: 'center', margin: 30 }
// });



const url = "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"

class PdfPreview extends Component {

  constructor(props) {
        super(props);
        this.state = {
            file: null,
            pageNumber: 1,
            numPages: 10,
            render_anotate: false,
            isLoaded:false,
            width: 500,
            height: 800,
            ratio: 0,
            toggelFullScreen: false,
            currentPage: null
        };
        this.document_ref = React.createRef()
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        this.changePage = this.changePage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.toggelFullScreen = this.toggelFullScreen.bind(this);
        this.getPage = this.getPage.bind(this);
        this.playSound = this.playSound.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
      this.setState(
        {
           isLoaded: true,
           numPages: numPages
        }
      )
  }

  toggelFullScreen(evt)
  {
      
      let toggel = !this.state.toggelFullScreen;
      
      if (toggel) {
        this.setState({toggelFullScreen: toggel, height: window.innerHeight, ratio: window.innerWidth / window.innerHeight})
        this.setState({height: window.innerHeight + 200})
        this.setState({ratio: window.innerWidth / window.innerHeight})
        evt.target.innerHTML = "Thoát toàn cửa sổ"
      }
      else {
        this.setState({toggelFullScreen: toggel, width: window.innerWidth, ratio: window.innerWidth / window.innerHeight})
        this.setState({height: window.innerHeight})
        this.setState({ratio: window.innerWidth / window.innerHeight})
        evt.target.innerHTML = "Xem toàn cửa sổ"
      }
  }

  changePage(offset) {
    let num = this.state.pageNumber + offset
    if (num > 0 && num < this.state.numPages)
    {
        let page = this.getPage(num);
        console.log(page);
        this.setState({
          pageNumber: num,
          currentPage: page
      })
    }
    
  }
  
  previousPage() {
    this.changePage(-1);
  }
  
  nextPage() {
    this.changePage(1);
  }

  componentDidMount() {
      console.log(window.innerWidth / window.innerHeight)
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      console.log(this.props.params)
      fetch( ConstantsVar.API_URL + "/api/files" + "/" + this.props.params.id)
      .then(res => res.json())
      .then(
          (result) => {
              console.log(result);
              this.setState({file: result, width: window.innerWidth, height:window.innerHeight, ratio: window.innerWidth / window.innerHeight})
          }
      )
      // console.log(this.document_ref.current.classList)
  }

  getPage(num) {
    let pages = this.state.file.pages;
    console.log(pages.length)
    for (let i = 0; i < pages.length; i++ )
    {
        console.log(pages[i])
        if (pages[i]["number"] == num) {
            return pages[i];
        }
    }
    return null;
  }

  playSound() {
    let currentPage = this.state.currentPage;
    let audio = new Audio(currentPage.audio);
    audio.play();
  }
  
  render() {
    return (
      <div>
          {!this.state.toggelFullScreen &&
              <Header />
          }
          <section id="center" className="center_home">
              <div className="carousel-inner">
                      {this.state.file &&
                        <div className="d-flex align-items-center justify-content-center col-md-12">
                            <button className="carousel-control-prev" type="button" onClick={this.previousPage}>
                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" onClick={this.nextPage}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <Document className="centerPdf" loading="Đang tải truyện vui lòng chờ..." file={this.state.file.file} onLoadSuccess={ this.onDocumentLoadSuccess }>
                                {this.state.ratio > 1 &&
                                    <Page className="centerPdf" height={this.state.height - 200} pageNumber={this.state.pageNumber} renderAnnotationLayer={this.state.render_anotate} renderForms={this.state.render_anotate} renderTextLayer={this.state.render_anotate}/>
                                }
                                {
                                  this.state.ratio <= 1 &&
                                    <Page className="centerPdf" width={this.state.width} pageNumber={this.state.pageNumber} renderAnnotationLayer={this.state.render_anotate} renderForms={this.state.render_anotate} renderTextLayer={this.state.render_anotate}/>
                                }
                            </Document>
                        </div>
                      }
                      { this.state.isLoaded &&
                        <div className="d-flex align-items-center justify-content-center">
                            Page {this.state.pageNumber || (this.state.numPages ? 1 : '--')} of { this.state.numPages || '--'}
                            <div className="d-flex align-items-center justify-content-center">
                                {this.state.ratio <= 1 &&
                                    <ul >
                                        <li className="d-inline-block me-2">
                                              <button className="btn btn text-white bg_red rounded-0 border-0" type="button" onClick={this.previousPage}> Trang trước</button>
                                        </li>
                                        <li className="d-inline-block">
                                              <button className="btn btn text-white bg_red rounded-0 border-0" type="button" onClick={this.nextPage}> Trang kế tiếp</button>
                                        </li>
                                    </ul>
                                }
                                {this.state.ratio > 1 &&
                                    <button className="btn btn text-white bg_red rounded-0 border-0" type="button" onClick={this.toggelFullScreen}> Xem toàn cửa sổ</button>
                                }
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                {
                                  this.state.currentPage &&
                                  this.state.currentPage.audio &&
                                  <button className="btn btn text-white bg_red rounded-0 border-0" type="button" onClick={this.playSound}> Doc trang</button>
                                }
                            </div>
                      </div>
                  
                      }
                  </div>
            </section>
      </div>
    )
  }
}

export default withRouter(PdfPreview);