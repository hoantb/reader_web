import React, { Component } from "react";
// import { Document, Page } from 'react-pdf';
import * as ConstantsVar from "./common/constants";
import withRouter from "./withRouter";
import { Document, Page,pdfjs } from 'react-pdf';
import Center from './Center'
import Header from "./Header";
import './PdfPreview.css'

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
            isLoaded:false
        };
        this.document_ref = React.createRef()
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        this.changePage = this.changePage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
      this.setState(
        {
           isLoaded: true,
           numPages: numPages
        }
      )
  }

  changePage(offset) {
    this.setState({
        pageNumber: this.state.pageNumber + offset
    })
  }
  
  previousPage() {
    this.changePage(-1);
  }
  
  nextPage() {
    this.changePage(1);
  }

  componentDidMount() {
    
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      console.log(this.props.params)
      fetch( ConstantsVar.API_URL + "/api/files" + "/" + this.props.params.id)
      .then(res => res.json())
      .then(
          (result) => {
              console.log(result);
              this.setState({file: result})
          }
      )
      // console.log(this.document_ref.current.classList)
  }
  
  render() {
    return (
      <div>
        <Header />
          <section id="center" className="center_home">
              <div className="carousel-inner">
                  {this.state.file &&
                      <Document className="centerPdf" loading="??ang t???i truy???n vui l??ng ch???..." file={this.state.file.file} onLoadSuccess={ this.onDocumentLoadSuccess }>
                          <Page className="centerPdf" pageNumber={this.state.pageNumber} renderAnnotationLayer={this.state.render_anotate} renderForms={this.state.render_anotate}/>
                      </Document>

                  }
                  { this.state.isLoaded &&
                    <div className="centerButtonPdf">
                        Page {this.state.pageNumber || (this.state.numPages ? 1 : '--')} of { this.state.numPages || '--'}
                        <ul >
                            <li className="d-inline-block me-2">
                                  <button className="btn btn text-white bg_red rounded-0 border-0" type="button" onClick={this.previousPage}> Trang tr?????c</button>
                            </li>
                            <li className="d-inline-block">
                                  <button className="btn btn text-white bg_red rounded-0 border-0" type="button" onClick={this.nextPage}> Trang k??? ti???p</button>
                            </li>
                        </ul>
                  </div>
                }
              </div>
            </section>
      </div>
    )
  }
}

export default withRouter(PdfPreview);