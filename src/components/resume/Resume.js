import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import './Resume.css';

const Resume = () => {

  const [numPage, setNumPage] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess =({numPage}) => {
    setNumPage(numPage);
    setPageNumber(1);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const changePageBack = () => changePage(-1)
  

  const changePageNext =() => changePage(+1)

  return (

 <div className='resumeContainer'>

        <Document file='./resume.pdf' onDocumentLoadSuccess={onDocumentLoadSuccess}>
          <Page 
            pageNumber={pageNumber}
            height='950'
          ></Page>
        </Document>
        <p>
          Page {pageNumber} of {numPage}
        </p>
        {pageNumber > 1 && <button onClick={changePageBack}> Previous Page</button>}
        {pageNumber < numPage && <button onClick={changePageNext}>Next Page</button>}

       </div>
       
  )
}

export default Resume
