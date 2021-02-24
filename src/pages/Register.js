import React from "react";
import FormRegister from "../components/FormRegister";
import fc_logo_md from "../assets/fc_logo_md.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="container mx-auto p-6 text-center">
        <div className="flex justify-center">
          <img src={fc_logo_md} className="w-96" alt="logo"></img>
        </div>
        <FormRegister />
      </div>
      <Footer />
    </div>
  );
}
