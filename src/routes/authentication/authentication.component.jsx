import SignIn from '../../components/sign-in/sign-in.components';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import React from 'react';
import './authentication.styles.css';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;