import QrReader from 'react-qr-reader'
import { useState } from 'react'

const [ result, setResult ] = useState('No result')

  const handleScan = data => {
    if (data) setResult(data)
  }

  const handleError = err => {
    console.error(err)
  }

{/* <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{ JSON.stringify(result) }</p> */}