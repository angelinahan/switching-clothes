import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import "./pdf.css";
import { useWindowHeight } from "@wojtekmaj/react-hooks";

const PageContainer = styled.div`
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const MyDocument = styled(Document)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-height: 80%;
`;

const MyPage = styled(Page)`
  display: flex;
  flex-shrink: 1;
`;

const PageNumber = styled.p`
  font-weight: bold;
`;

export const PDFButton = styled.button`
  width: 100px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: white;
  margin: 0 20px 20px 0;
  padding: 5px;
  font-weight: bold;
  font-family: "Space Mono", sans-serif;
  align-self: flex-end;
  flex-shrink: 1;
  :hover:enabled {
    color: white;
    background-color: black;
  }
  :disabled {
    border: 2px solid lightgray;
  }
`;

/// https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
/// https://github.com/wojtekmaj/react-pdf/pull/923/files
export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  const height = useWindowHeight();

  return (
    <PageContainer>
      <MyDocument
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <MyPage pageNumber={pageNumber} height={Math.min(height * 0.6, 600)} />
      </MyDocument>
      <div>
        <PageNumber>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </PageNumber>
        <PDFButton
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          PREV
        </PDFButton>
        <PDFButton
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          NEXT
        </PDFButton>
      </div>
    </PageContainer>
  );
}
