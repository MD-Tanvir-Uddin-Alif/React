import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    contact_info: '',
    password1: '',
    password2: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password1 !== formData.password2) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('Ypur api', {
        first_name: formData.firstname,
        last_name: formData.lastname,
        username: formData.username,
        email: formData.email,
        contact_info: formData.contact_info,
        password1: formData.password1,
        password2: formData.password2
      });

      if (response.status === 201 || response.status === 200) {
        setSuccess('Registration successful!');
        setFormData({
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          contact_info: '',
          password1: '',
          password2: ''
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-green-400 rounded-md shadow-lg w-full max-w-2xl">
        <p className="w-full text-lg font-semibold text-white text-center p-3">
          Register Yourself
        </p>
        <div className="px-6 pb-6">
          <form className="space-y-6" onSubmit={handleSubmission}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="First Name" id="firstname" value={formData.firstname} onChange={handleChange} />
              <InputField label="Last Name" id="lastname" value={formData.lastname} onChange={handleChange} />
            </div>

            <InputField label="Username" id="username" value={formData.username} onChange={handleChange} />

            <InputField label="Email" id="email" type="email" value={formData.email} onChange={handleChange} />

            <InputField label="Contact Number" id="contact_info" type="tel" value={formData.contact_info} onChange={handleChange} />

            <InputField label="Password" id="password1" type="password" value={formData.password1} onChange={handleChange} />
            <InputField label="Confirm Password" id="password2" type="password" value={formData.password2} onChange={handleChange} />

            {error && <p className="text-red-700 font-medium">{error}</p>}
            {success && <p className="text-green-800 font-medium">{success}</p>}

            <div className="text-center pt-4">
              <button type="submit" className="bg-white text-green-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-100 transition">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, id, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-white font-medium text-sm mb-1">{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
      required
    />
  </div>
);

export default Register;
