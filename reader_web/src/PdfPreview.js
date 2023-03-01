import React, { Component } from "react";
// import { Document, Page } from 'react-pdf';
import * as ConstantsVar from "./common/constants";
import withRouter from "./withRouter";
import { Document, Page,pdfjs } from 'react-pdf';

const url = 
"https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"

class PdfPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      pageNumber: 1,
      numPages: 10
   };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.changePage = this.changePage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
      this.state.numPages = numPages;
    
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
  }
  
  render() {
    return (
      <div>
        {
          this.state.file &&
          <React.Fragment>
            <Document file={this.state.file.file} onLoadSuccess={ this.onDocumentLoadSuccess }>
            <Page pageNumber={this.state.pageNumber} />
          </Document>
            <div>
                  <div className="pagec">
                      Page {this.state.pageNumber || (this.state.numPages ? 1 : '--')} of { this.state.numPages || '--'}
                  </div>
                  <div className="buttonc">
                      <button
                        type="button"
                        onClick={this.previousPage}
                        className="Pre"
                          
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={this.nextPage}
                        
                      >
                        Next
                      </button>
                  </div>
            </div>
          </React.Fragment>
        }
            
      </div>
    )
  }
}

export default withRouter(PdfPreview);