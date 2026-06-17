import React, { useState } from 'react'

function Login({handelLogin}) {

  const [login, setLogin] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
   setLogin({
...login, [e.target.name]:e.target.value

   })
  }

  const submitbtn = (e) => {
    e.preventDefault();
    console.log(login);
    handelLogin(login.email,login.password)
     setLogin({
    name: '',
    email: '',
    password: ''
  })

  }

  return (
    <>
{/* NOTES-> loginform */}
      <div className='h-screen flex items-center justify-center '>

        <form
          onSubmit={submitbtn}
          className='flex flex-col gap-4 border-2 border-blue-300 p-8 rounded-lg shadow-lg'
        >

          <h2 className='text-2xl font-bold text-center mb-5'>
            Login To Your Account
          </h2>

          <input
            type="text"
            name="name"
            placeholder='Enter Your Name'
            className='border p-2 rounded'
            onChange={handleChange}
              value={login.name}

          />

          <input
            type="email"
            name="email"
            placeholder='Email'
            className='border p-2 rounded'
            onChange={handleChange}
              value={login.email}

          />

          <input
            type="text"
            name="password"
            placeholder='Password'
            className='border p-2 rounded'
            onChange={handleChange}
              value={login.password}

          />

          <input
            type="submit"
            value="Submit"
            className='bg-blue-500 text-white p-2 rounded cursor-pointer'
          />

        </form>

      </div>

    </>
  )
}

export default Login