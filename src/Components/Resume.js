import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set workerSrc globally
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="ResumePage">
      <Document
        file={pdf}
        className="resumeView"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <a href={pdf} target="_blank" download="Ankit's Resume" rel="noreferrer">
        <button className="downloadCV" type="button">
          <h3>
            <BsDownload />
            &nbsp; Download CV
          </h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
