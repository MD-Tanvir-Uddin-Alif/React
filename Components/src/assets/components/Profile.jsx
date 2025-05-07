import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [profile, setprofile] = useState(null);
    const [error, seterror] = useState(true);
    const [loading, setloading] = useState('');

    useEffect(()=>{
        const fetchUserData = async()=>{
            const token = localStorage.getItem('token');

            if(!token){
                seterror("token not found");
                setloading(false);
                return;
            }

            try{
                const responce = await axios.get('https://dummyjson.com/auth/me',{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                    credentials:'include'
                });

                setprofile(responce.data);
                setloading(false);
            }catch(err){
                seterror(err.responce?.data?.message || "SOmething occured");
                setloading(false);
            }
        };

        fetchUserData();
    },[]);

    if (loading) {
        return <div className="text-center mt-10">Loading profile...</div>;
      }

      if (error) {
        return <div className="text-center mt-10 text-red-500">{error}</div>;
      }
    
  return (
    <div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-green-600 mb-4">User Profile</h2>
      <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Age:</strong> {profile.age}</p>
    </div>
    </div>
  )
}

export default Profile