import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../store/actions/userAction'

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
    let payload = {
      username,
      password,
      email,
      company_name,
      category
    }
    dispatch(register(payload))
    console.log(payload);
  }

  return (
    <div className="max-w-md mx-auto justify-center p-6 flex bg-gray-100 mt-10 rounded shadow-xl">
          <form className='w-full' action='' onSubmit={handleLogin}>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="username">Username</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleUsername} type="text" name="username" id="username" />
              </div>
              <div className='flex flex-col text-left mb-4'>
                <label className='form-text mr-3 font-bold text-lg' for="password">Password</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handlePassword} type="password" name="password" id="password" />
              </div>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="email">Email</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleEmail} type="text" name="email" id="email" />
              </div>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="company">Company Name</label>
                <input className='border border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleCompany} type="text" name="company" id="company" />
              </div>
              <div className='flex flex-col w-full text-left mb-4'>
                <label className='form-text mr-2 font-bold text-lg' for="category">category</label>
                <input className='border w-full border-blue-400 rounded-md py-2 px-3 text-grey-darknest' onChange={handleCategory} type="text" name="category" id="category" />
              </div>
              <Link to='/done'>
                <button className='button-form p-2 rounded-lg' type="submit">Register</button>
              </Link>
          </form>
    </div>
  );
};

export default Form;