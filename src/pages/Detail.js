import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../store/actions/blockchainAction";
import Lottie from "lottie-react";
import LoadingBall from "../assets/4316-loading-gaocaisheng.json";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Polyline,
} from "@react-google-maps/api";
import { dateFormatLong } from "../utils/dateFormat";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const style = {
  height: 500,
  width: 500,
};

function ProductDetails() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const blockchainId = params.id;
  const { blockchainDetail, qrCodeLink, isLoading, error } = useSelector(
    (state) => state.blockchain
  );

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState({});
  const onSelect = (item) => {
    setSelected(item);
    console.log(selected, "ini yang dipilih");
  };

  useEffect(() => {
    setMarkers(
      blockchainDetail.chain.map((locationData) => {
        return locationData.location;
      })
    );
  }, [blockchainDetail]);

  const mapCenter = {
    lat:
      blockchainDetail?.chain[blockchainDetail.chain.length - 1]?.location
        ?.latitude,
    lng:
      blockchainDetail?.chain[blockchainDetail.chain.length - 1]?.location
        ?.longitude,
  };

  useEffect(() => {
    dispatch(getDetails(blockchainId));
  }, []);

  if (isLoading) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <Lottie animationData={LoadingBall} style={style} />
      </div>
    );
  }

  if (error === 404) {
    history.push('/scan')
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p>{JSON.stringify(error)}</p>;
      </div>
    );
  }
  return (
    <div className="flex flex-col h-screen justify-between">
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
              {/* <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              {blockchainDetail._id}
            </p> */}
              <div>
                <span className="text-gray-500 font-lg text-semibold leading-6">
                  Created at:{" "}
                </span>
                <span className="text-bold text-gray-900">
                  {dateFormatLong(blockchainDetail?.chain[0]?.timestamp)}
                </span>
              </div>
              <h3 className="text-gray-500 font-lg text-semibold leading-6">
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
                value={
                  process.env.REACT_APP_CLIENT_URL +
                  "/product/" +
                  blockchainDetail._id
                }
              />
            </div>
          </div>
        </div>

        <h1 className="form-text font-bold text-2xl text-center mb-4">
          History
        </h1>

        <div className="flex flex-col md:flex-row gap-4 no-wrap md:mx-2 mb-10">
          {/* Bagian Kiri */}
          <div className="w-full md:w-2/3 md:mx-2 mb-5 md:mb-0">
            {blockchainDetail.chain
              .slice(0)
              .reverse()
              .map((history, index) => {
                return (
                  <section
                    key={index}
                    className="mx-auto mb-2 p-6 mt-4 bg-white rounded-lg shadow-xl"
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
                        <div className="my-2">
                          <h3 className="text-2xl font-semibold">
                            {history.user.company_name}
                          </h3>
                          <p className="text-gray-500">
                            {history.user.category}
                          </p>
                        </div>
                        <div className="mb-2">
                          <p>
                            <span>
                              {history.location.city &&
                                history.location.city + ", "}
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
                                      <small>
                                        {capitalizeFirstLetter(key)}
                                      </small>
                                      : {history.data[key]}
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
          </div>

          {/* Bagian Kanan */}
          {markers.length > 0 && (
            <div className="w-full h-full md:w-1/3 my-10 md:my-8 rounded-lg overflow-hidden flex justify-center">
              <div className="container">
                <LoadScript googleMapsApiKey="AIzaSyAVwNowxQbWmi9tjKODixI_lXesf6ISsZw">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={mapCenter}
                    zoom={5}
                  >
                    {markers.map((marker, index) => (
                      <Marker
                        // label={blockchainDetail.chain[index].user.category}
                        key={index}
                        position={{
                          lat: Number(marker?.latitude),
                          lng: Number(marker?.longitude),
                        }}
                        onClick={() => onSelect(blockchainDetail.chain[index])}
                      />
                    ))}
                    {selected.location && (
                      <InfoWindow
                        position={{
                          lat: selected.location.latitude,
                          lng: selected.location.longitude,
                        }}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                      >
                        <div className="p-1">
                          <small className="my-2">
                            {dateFormatLong(selected.timestamp)}
                          </small>
                          <p className="font-bold mt-1">
                            {selected.user.company_name}
                          </p>
                          <p className="mb-2">{selected.user.category}</p>
                          {Object.keys(selected.data)
                            .sort(function (a, b) {
                              return b - a;
                            })
                            .map((key, index) => {
                              return (
                                <p key={index}>
                                  <small>{capitalizeFirstLetter(key)}</small>:{" "}
                                  {selected.data[key]}
                                </p>
                              );
                            })}
                        </div>
                      </InfoWindow>
                    )}
                    <Polyline
                      path={blockchainDetail.chain.slice(1).map((stop) => {
                        return {
                          lat: stop.location.latitude,
                          lng: stop.location.longitude,
                        };
                      })}
                      options={{
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.35,
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          )}
        </div>
        {/* <p>
        {JSON.stringify(
          blockchainDetail.chain.slice(1).map((stop) => {
            return {
              lat: stop.location.latitude,
              lng: stop.location.longitude,
            };
          })
        )}
      </p> */}

        {/* {JSON.stringify(blockchainDetail.chain, null, 4)} */}
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
