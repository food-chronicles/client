import React from 'react'
import FormRegister from '../components/FormRegister'

function Register() {

  return (
    <>
    <div className='container mx-auto p-6 text-center'>
      <h1 className="logo-fc text-2xl text-blue-700 leading-tight">
        <span className='logo-food-color'>Food</span> Chronicles
      </h1>
      <FormRegister />
    </div>
    </>
  );
}

export default Register;
