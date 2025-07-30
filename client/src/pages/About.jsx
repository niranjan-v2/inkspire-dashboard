import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function About() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <div className="flex flex-col items-center py-8">
      <Document file="/Niranjan.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          scale={1.5}
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
