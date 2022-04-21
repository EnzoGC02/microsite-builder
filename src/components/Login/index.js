import React, { useEffect, useState } from 'react';
import Logo from '../../assets/img/logo.png';
import { auth, firestore } from '../Firebase';

const LoginComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnText, setBtnText] = useState('Submit');
  const [userId, setUserId] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      if (res.user) {
        const userId = res.user.uid;
        setUserId(userId);
      }
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUserId(user.uid);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
      console.log(userId, 'userId Set');
      firestore
        .collection('users')
        .where('userId', '==', userId)
        .get()
        .then((res) => {
          localStorage.setItem('userDocId', res.docs[0].id);
          localStorage.setItem('userType', res.docs[0].data().type);
          localStorage.setItem('firstName', res.docs[0].data().firstName);
          localStorage.setItem('lastName', res.docs[0].data().lastName);
          localStorage.setItem('email', res.docs[0].data().email);
          localStorage.setItem('accountId', res.docs[0].data().accountId);
        })
        .then(() => {
          window.location.replace('/home');
        });
    }
  }, [userId]);

  if (loggedIn) {
    return (
      <>
        <div className='loginPage'>
          <div className='container'>
            <div className='row'>
              <img src={Logo} alt='' className='logo' />
              <h5>Login</h5>
            </div>
            <div className='row'>
              <div className='loader'>
                <img
                  src={require('../../assets/img/loader2.gif').default}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='loginPage'>
          <div className='container'>
            <div className='row'>
              <img src={Logo} alt='' className='logo' />
              <h5>Login</h5>
            </div>
            <div className='row'>
              <form
                id='loginForm'
                className='loginForm'
                onSubmit={handleSubmit}
              >
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type='submit'
                  id='btn-save'
                  className='btn btn-save'
                  dangerouslySetInnerHTML={{ __html: btnText }}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default LoginComponent;
