import Navbar from "../components/Navbar";
import HistoryCard from "../components/HistoryCard";
import Footer from "../components/Footer";
import QrReader from "react-qr-reader";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Scan() {
  const history = useHistory();
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      const id = data.split("/")[data.split("/").length - 1];
      setResult(id);
      history.push("/product/" + id);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
      <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="container mx-auto px-4 mt-4 mb-10">
        <div className="mx-auto max-w-lg p-6 bg-gray-100 my-10 rounded-lg shadow-xl">
          <QrReader
            delay={100}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
          <div className="relative bottom-10 flex justify-center">
            <p className="inline border rounded-md px-2 py-1 bg-white text-xs">
              <span>QR Code: </span>
              {JSON.stringify(result)}
            </p>
          </div>
          {/* <h1 className="text-2xl text-blue-700 leading-tight pl-2 pt-4 pb-5 text-center">
          { result }
        </h1> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
