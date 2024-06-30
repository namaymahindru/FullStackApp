import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // setFormData
  const handleChange = (e) => {

    setFormData(
      {

        ...formData,// it is spread operator for 
        [e.target.id]: e.target.value,

      }
    );

  };
  //console.log(formData);
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      
    } catch (error)
    {
      
    }
    setLoading(true);
    const res = await fetch('/api/auth/signup',
      {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),


      }
      
    );
    const data = await res.json();

    if (data.success == false) {
      setLoading(false);
      setError(data.message);
      
      return;
    }
    setLoading(false);
   
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>

        Sign Up

     </h1>
    
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        
      <input type='text' placeholder='username' className='border p-3 rounded-lg focus:outline-none' id='username' onChange={handleChange} />
      <input type='email' placeholder='email' className='border p-3 rounded-lg focus:outline-none' id='email' onChange={handleChange} />

      <input type='password' placeholder='password' className='border p-3 rounded-lg focus:outline-none' id='password' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:placeholder-opacity-80'>
          {loading ? 'Loading...':'Sign Up'}
        </button>

      </form>
      
      <div className=' flex gap-2 mt-5 '>

      <p className=''>Have an Account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700 '>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
