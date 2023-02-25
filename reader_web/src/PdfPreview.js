import React, { Component } from "react";

import PDFViewer from 'pdf-viewer-reactjs'

import { Modal } from "react-bootstrap";

class PdfPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({modal: true});
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div>
          <button onClick={this.handleToggle}>show pdf</button>

          <Modal show={this.state.modal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <PDFViewer
                document={{ url: "https://arxiv.org/pdf/quant-ph/0410100.pdf" }}
              />
            </Modal.Body>
          </Modal>
      </div>
    )
  }
}

export default PdfPreview