/* global google */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../store/actions/blockchainAction";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '400px',
  marginLeft: '200px'
};

const center = {
  lat: -2.275363,
  lng: 115.5910824
};

export default function Detail () {   
  const { id } = useParams()
  const dispatch = useDispatch()
  const { blockchainDetail, qrCodeLink, isLoading, error } = useSelector(
    (state) => state.blockchain
  )

  const markersData = [
    {
      lat: -6.326408257521328,
      lng: 106.68169899207008
    },

    {
      lat: -6.3314878,
      lng: 106.701706
    }
  ]
  const [ markers, setMarkers ] = useState([])

  useEffect(() => {
    dispatch(getDetails(id))
    setMarkers(blockchainDetail.chain.map(locationData => {
        return locationData.location
      }))
  }, [blockchainDetail])

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{ JSON.stringify(error) }</p>

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6 text-center">
      {/* <p>{JSON.stringify(blockchainDetail.chain, null, 4)} ini blockchain detail</p> */}
      <h1 className="form-text font-bold text-2xl my-5 self-center">
        Product Details
      </h1>
      <div className="grid grid-cols-2 my-5 py-5 justify-items-center border-b-4">
        <p>{blockchainDetail.name}</p>
        <div>
          <QRCode
            value={"http://localhost:3000/product/" + blockchainDetail._id}
          />
        </div>
      </div>

      <div className="my-5 py-5 border-b-4">
      {blockchainDetail.chain
        .slice(0)
        .reverse()
        .map((history) => {
          return (
            <div
              key={history.index}
              className="mx-auto max-w-lg p-6 mt-4 bg-white rounded-lg shadow-xl"
            >
              <div className="grid grid-cols-2">
                <p className="self-center">{ new Date(history.timestamp).toLocaleDateString() }</p>
                <div>
                  <div>
                    {typeof history.data === "string" ? (
                      "your item's history starts here"
                    ) : (
                      <div>
                        {
                          // JSON.stringify(Object.keys(history.data))
                          Object.keys(history.data).map((key, index) => {
                            return (
                              <p key={index}>
                                {key}: {history.data[key]}
                              </p>
                            );
                          })
                        }
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        <div className="grid grid-cols-1 my-5 py-5 justify-items-center border-b-4">
        <LoadScript
      googleMapsApiKey="AIzaSyAVwNowxQbWmi9tjKODixI_lXesf6ISsZw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {
          markers.map((marker) => (
            <Marker
              key={ marker.index }
              position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
            />
          ))
        }
        <></>
      </GoogleMap>
    </LoadScript>
      </div>
    </div>
    <Footer />
    </>
  )
}