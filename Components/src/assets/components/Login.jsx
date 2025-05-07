import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [formData, setformData] = useState({username:"",password:""});

    const handleChange = (e)=> {
        setformData({
            ...formData, [e.target.name]:e.target.value,
        })
    };

    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');

    const handleSubmit = async (e)=> {
        e.preventDefault();

        setError('');
        setSucess('');

        try {
            const responce = await axios.post(`https://dummyjson.com/auth/login`,{
                username:formData.username,
                password:formData.password
            });

            if(responce.status === 200){
                setSucess("Loign sucessfully");
                const token = localStorage.setItem('token', responce.data.token);
                console.log("user info: ", responce.data);
                // console.log(token);
            }

        }catch(err){
            setError(err.responce?.data?.messsage || 'Something went Wrong');
        }
    };


  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}
        {sucess && <div className="text-green-500 text-sm">{sucess}</div>}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login