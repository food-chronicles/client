import Navbar from '../components/Navbar'
import HistoryCard from '../components/HistoryCard'
import FooterPage from '../components/Footer'
import QrReader from 'react-qr-reader'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Scan () {
  const history = useHistory();
  const [ result, setResult ] = useState('No result')

  const dummyData = {
    "chain": [{
        "index": 0,
        "timestap": {
            "$date": "2021-02-19T17:57:31.607Z"
        },
        "data": "Genesis block",
        "previousHash": "0",
        "hash": "01ee35799280444c6a8b1a0f035f66b4cfa3f26e88166d98425ab553563c70f0",
        "nonce": 0
    }, {
        "index": 1,
        "timestap": {
            "$date": "2021-02-19T17:57:31.609Z"
        },
        "data": {
            "amount": 5
        },
        "previousHash": "01ee35799280444c6a8b1a0f035f66b4cfa3f26e88166d98425ab553563c70f0",
        "hash": "3e47db5c6113fa3d067b300c1b344d94f8f9b50d5c46d110ebd982d773fee94f",
        "nonce": 0
    }, {
        "index": 2,
        "timestap": {
            "$date": "2021-02-19T18:13:40.332Z"
        },
        "data": {
            "amount": 10,
            "location": "Bandung"
        },
        "previousHash": "3e47db5c6113fa3d067b300c1b344d94f8f9b50d5c46d110ebd982d773fee94f",
        "hash": "6b2df06690da8e938b384c25bde42a173e0cbb6ed4320d3c8e3517a699b24728",
        "nonce": 0
    }, {
        "index": 3,
        "timestap": {
            "$date": "2021-02-19T18:15:18.294Z"
        },
        "data": {
            "amount": 50,
            "location": "Jakarta"
        },
        "previousHash": "6b2df06690da8e938b384c25bde42a173e0cbb6ed4320d3c8e3517a699b24728",
        "hash": "e8e006c4125bdbe8635b00242ee7a8edebd07a9e397f6d15b0bcd9f685ca8743",
        "nonce": 0
    }],
    "name": "Test product",
    "__v": 0
}

  const handleScan = (data) => {
    if (data) {
      const id = data.split('/')[data.split('/').length - 1]
      setResult(id)
      history.push('/product/' + id);
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return(
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-4 mb-10">
      <div className="ml-6 bg-gray-100 rounded-lg mr-5">
        <QrReader
          delay={100}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <h1 className="text-2xl text-blue-700 leading-tight pl-2 pt-4 pb-5 text-center">
          { result }
        </h1>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-4 mb-10">
      <div className="ml-6 bg-gray-100 rounded-lg mr-5 pt-4 overflow-y-auto h-72 grid grid-rows-1">
    {
      dummyData.chain.map(dummy => {
        return <HistoryCard key={ dummy.hash } data={ dummy } name={ dummyData.name } />
      })
    }
      </div>
    </div>
    <FooterPage />
    </>
  )
}