import { useState } from 'react';

import artikelFile from '/artikel/artikel.pdf';
import { Document, Page } from 'react-pdf';


function Artikel ()  {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentSucces ({numPages}) {
    setNumPages(numPages)
  }

  return (
    <div className='align-items-center justify-content-center'>
      <Document file={artikelFile} onLoadSucces={onDocumentSucces}>
        {
          Array(numPages).fill().map(( _, i) => {
            <Page pageNumber={i + 1}></Page>
          })
        }
      </Document>
    </div>
  )
};

export default Artikel;