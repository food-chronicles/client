/* global google */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../store/actions/blockchainAction";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import LoadingBall from "../assets/4316-loading-gaocaisheng.json";
import Lottie from "lottie-react";
import { dateFormatLong } from "../utils/dateFormat";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -0.5728859,
  lng: 120.0487244
};

const style = {
  height: 500,
  width: 500,
};

export default function Detail () {   
  const { id } = useParams()
  const dispatch = useDispatch()
  const { blockchainDetail, qrCodeLink, isLoading, error } = useSelector(
    (state) => state.blockchain
  )

  const [ markers, setMarkers ] = useState([])

  useEffect(() => {
    dispatch(getDetails(id))
    setMarkers(blockchainDetail.chain.map(locationData => {
        return locationData.location
      }))
  }, [blockchainDetail])

  if (isLoading) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <p>
          <Lottie animationData={LoadingBall} style={style} />;
        </p>
        ;
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p>{JSON.stringify(error)}</p>;
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <p className="break-all">
        {/* {JSON.stringify(blockchainDetail, null, 4)} ini blockchain detail */}
      </p>
      <h1 className="form-text font-bold text-2xl my-5 self-center pb-2 text-center">
        Product Details
      </h1>
      <div className="md:flex no-wrap md:mx-2 border-b-2 border-t-2 border-blue-400 py-4 mb-10">
        {/* Bagian Kiri */}
        <div className="w-full md:w-9/12 md:mx-2 text-center md:text-left mb-5 md:mb-0">
          <div className="bg-white p-3 md:pl-20">
            <h1 className="text-gray-900 font-bold text-2xl leading-8 my-1">
              {blockchainDetail.name}
            </h1>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              {blockchainDetail._id}
            </p>
            <div>
              <span className="text-gray-600 font-lg text-semibold leading-6">
                Created at:{" "}
              </span>
              <span className="text-bold text-gray-900">
                {dateFormatLong(blockchainDetail?.chain[0]?.timestamp)}
              </span>
            </div>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              Last updated:{" "}
              <span className="text-bold text-gray-900">
                {dateFormatLong(
                  blockchainDetail?.chain[blockchainDetail?.chain?.length - 1]
                    ?.timestamp
                )}
              </span>
            </h3>
          </div>
        </div>

        <div className="w-full md:w-3/12 mx-2 self-center flex justify-center">
          <div className="mx-auto">
            <QRCode
              value={"http://localhost:3000/product/" + blockchainDetail._id}
            />
          </div>
        </div>
      </div>

      <h1 className="form-text font-bold text-2xl text-center mb-4">History</h1>
      <div className="text-center">
      </div>
      {blockchainDetail.chain
        .slice(0)
        .reverse()
        .map((history, index) => {
          return (
            <section
              key={index}
              className="mx-auto md:max-w-2xl mb-2 p-6 mt-4 bg-white rounded-lg shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <div className="md:w-1/3 overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={
                      history.image_url !== "Genesis block"
                        ? history.image_url
                        : "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    }
                    alt=""
                  />
                </div>

                <div className="md:w-2/3">
                  <small className="uppercase text-blue-400">
                    {dateFormatLong(history.timestamp)}
                  </small>
                  <div className="mb-2">
                    <h3 className="text-2xl font-semibold">
                      {history.user.company_name}
                    </h3>
                    <p className="text-gray-500">{history.user.category}</p>
                  </div>
                  <div className="mb-2">
                    <p>
                      <span>
                        {history.location.city && history.location.city + ", "}
                      </span>
                      {history.location.region}
                    </p>
                    <p>{history.location.country}</p>
                  </div>
                  <div className="text-black">
                    {typeof history.data === "string" ? (
                      "Your product's history starts here"
                    ) : (
                      <div>
                        {Object.keys(history.data)
                          .sort(function (a, b) {
                            return b - a;
                          })
                          .map((key, index) => {
                            return (
                              <p key={index}>
                                <small>{capitalizeFirstLetter(key)}</small>:{" "}
                                {history.data[key]}
                              </p>
                            );
                          })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}


      <div className="ml-1 bg-gray-100 rounded-lg mr-1 mt-10 mb-7">
        <LoadScript
      googleMapsApiKey="AIzaSyAVwNowxQbWmi9tjKODixI_lXesf6ISsZw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
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