import React, { useEffect, useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {

  const url = 'http://api.postiefs.com/api/auth/login';
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: '{"email":"manoj@gmail.com","password":"1123456"}'
  };

  const apiFetch = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.data.access_token);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    apiFetch();
  }, [])
  return (
   <div></div>
  )
}
