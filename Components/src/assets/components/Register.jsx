import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {

    const [formData, setformData] = useState({
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        contact_info:"",
        password1:"",
        password2:""
    });

    const [sucess, setsucess] = useState();
    const [error, seterror] = useState();

    const handleChange = (e)=> {
        setformData({
            ...formData, [e.target.id]:e.target.value,
        });

    const handleSubmission = async (e)=>{
        e.preventDefault();
        seterror('');
        setsucess('');

        if(formData.password1 !== formData.password2)
        {
            seterror('password do not match');
            return;
        };

        try{
            const responce = await axios.post(`your register api`, {
                firstName: formData.firstname,
                lastName: formData.lastname,
                userName: formData.lastname,
                email: formData.email,
                contactNumber: formData.contact_info,
                password1: formData.password1,
                password2: formData.password2,
            });

            if(responce.status === 201 || responce.status === 200){
                setsucess('Registration is sucessfull');
                setformData({
                    firstname:"",
                    lastname:"",
                    username:"",
                    email:"",
                    contact_info:"",
                    password1:"",
                    password2:"",
                })
            };
        } catch(error){
            seterror(error.responce?.data?.message || 'Something went wrong');
        };

    };
    };

  return (
    <div></div>
  )
}

export default Register