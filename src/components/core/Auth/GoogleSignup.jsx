
/* global google */
import React, { useState, useEffect } from 'react';
import Tab from '../../common/Tab';
import { ACCOUNT_TYPE } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleSignUp } from '../../../services/operations/authAPI';  
import { toast } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
const clientId = process.env.REACT_APP_CLIENT_ID;

function GoogleSignup() {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.JOBSEEKER);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tabData = [
    {
      id: 1,
      tabName: 'JobSeeker',
      type: ACCOUNT_TYPE.JOBSEEKER,
    },
    {
      id: 2,
      tabName: 'Creator',
      type: ACCOUNT_TYPE.CREATOR,
    },
  ];


  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    const { email_verified } = userObject;
    if (email_verified) {
      setUserInfo(userObject);
    }
  }

  const  handleGoogleSignIn = () => {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), { theme: 'outline', size: 'large' });
  }

  useEffect(() => {
    handleGoogleSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userInfo.email_verified) {
      handleSignUp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleSignUp = () => {
    const { email_verified } = userInfo;
    if (email_verified) {
      const { given_name, family_name, email } = userInfo;

      const firstName = given_name;
      const lastName = family_name;

      dispatch(
        googleSignUp(
          accountType,
          firstName,
          lastName,
          email,
          navigate
        )
      );
    } else {
      toast.error('Failed to verify email, try again');
      navigate('/signup');
    }
  };

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col gap-4 shadow-lg p-10 dark:bg-slate-800 w-[320px]'>
        <p>Continue as</p>
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
        <div id='signInDiv'></div>
      </div>
    </div>
  );
}

export default GoogleSignup;

