import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault();
    alert('Simulated login success');
    navigate('/');
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Login</h2>
      <form onSubmit={handle}>
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input className="w-full p-2 border rounded" />
        </div>
        <div className="mb-3">
          <label className="block mb-1">Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button className="w-full p-2 bg-green-600 text-white rounded">Login</button>
      </form>
    </div>
  )
}