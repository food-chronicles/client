import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../store/actions/userAction'
import { successToaster, errorToaster } from "../utils/toaster";

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [company_name, setCompany] = useState('')
  const [category, setCategory] = useState('')

  const dispatch = useDispatch()

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleCompany = (e) => {
    setCompany(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username) {
      return errorToaster("Missing field!", "Username is required");
    }

    if (!password) {
      return errorToaster("Missing field!", "Password is required");
    }

    if (!email) {
      return errorToaster("Missing field!", "Email must be uploaded");
    }

    if (!company_name) {
      return errorToaster("Missing field!", "Company Name must be uploaded");
    }

    if (!category) {
      return errorToaster("Missing field!", "Category must be uploaded");
    }

    let payload = {
      username,
      password,
      email,
      company_name,
      category
    }

    dispatch(register(payload))
    successToaster('Success', 'Registraion Complete')
  }

  return (
    <div className="max-w-md mx-auto justify-center p-6 flex bg-gray-100 mt-10 rounded shadow-xl">
          <form className='w-full' action='' onSubmit={handleLogin}>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="username">Username</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleUsername} type="text" name="username" id="username" required />
              </div>
              <div className='flex flex-col text-left mb-4'>
                <label className='form-text mr-3 font-bold text-lg' for="password">Password</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handlePassword} type="password" name="password" id="password" required />
              </div>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="email">Email</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleEmail} type="text" name="email" id="email" required />
              </div>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="company">Company Name</label>
                <input className='border border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleCompany} type="text" name="company" id="company" required />
              </div>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="category">category</label>
                <select className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleCategory} name="category" id="category">
                  <option value="Producer">Producer</option>
                  <option value="Manufacture">Manufacture</option>
                  <option value="Retail">Retail</option>
                </select>
              </div>
              <Link to='/done'>
                <button className='button-form p-2 rounded-lg' type="submit">Register</button>
              </Link>
          </form>
    </div>
  );
};

export default Form;