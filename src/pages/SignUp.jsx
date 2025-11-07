import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../api/auth'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert('Registered successfully — redirecting to login');
      navigate('/login');
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input {...register('email', { required: 'Email required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email' } })} className="w-full p-2 border rounded" />
          {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label className="block mb-1">Password</label>
          <input type="password" {...register('password', { required: 'Password required', minLength: { value: 6, message: 'Minimum 6 characters' } })} className="w-full p-2 border rounded" />
          {errors.password && <p className="text-red-600 mt-1">{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={mutation.isLoading} className="w-full p-2 bg-blue-600 text-white rounded">
          {mutation.isLoading ? 'Creating...' : 'Create account'}
        </button>
      </form>
    </div>
  );
}