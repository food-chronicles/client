import React from 'react';
import { Link } from 'react-router-dom'
const AfterRegis = () => {

    return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Thank You For Join Food Chronicles
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          Please Check Your email inbox to get more information
        </p>
        <Link to='/'>
                <button className='button-form p-2 rounded-lg' type="submit">Back to Home</button>
        </Link>
      </div>
    </div>
    );
};

export default AfterRegis;