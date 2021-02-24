import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AfterRegis() {
  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar />
    <div className="max-w-lg mx-auto flex justify-center p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight text-center">
          Thank you for joining Food Chronicles
        </h1>
        <p className="text-base text-gray-700 leading-normal text-center">
          Please check your email to get more information
        </p>
        <div className="flex mt-10 my-4 justify-center">
          <Link to="/">
            <button className="button-form p-2 rounded-lg" type="submit">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
