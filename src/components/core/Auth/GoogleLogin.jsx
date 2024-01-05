/* global google */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../../../services/operations/authAPI';
import { toast } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
const clientId = process.env.REACT_APP_CLIENT_ID;

function GoogleLogin() {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    const { email_verified } = userObject;
    if (email_verified) {
      setUserInfo(userObject);
    }
  };

  const handleGoogleLogin = () => {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  };

  useEffect(() => {
    handleGoogleLogin();
  }, []);

  const handleLogin = () => {
    const { email_verified } = userInfo;
    if (email_verified) {
      const { email } = userInfo;

      dispatch(googleLogin(email, navigate));

    } else {
      toast.error('Failed to login, try again');
      navigate('/login');
    }
  };

  useEffect(() => {
    if (userInfo.email_verified) {
      handleLogin();
    }
  }, [userInfo]);

  return (
    <div className='flex items-center justify-center shadow-lg h-[150px] sm:w-[260px] w-[300px] dark:bg-slate-800'>
        <div id='signInDiv'></div>
    </div>
  );
}

export default GoogleLogin;
