// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'



// const Login = () => {

//   return (
//     <>
//       <div className='containerSignUp'>
//         <section className='signSection'>
//           <div className='leftdata1'>
//             <h2 className='col-lg-6 text-center'>Sign In</h2>

//             <Form className='form'>
//               <Form.Group className="fieldForm" controlId="formBasicEmail">
//                 <Form.Control type="email" name='email' placeholder="Email" />
//               </Form.Group>

//               <Form.Group className="fieldForm" controlId="formBasicPassword">
//                 <Form.Control type="password" name='password' placeholder="Password" />
//               </Form.Group>

//               <Button className='inbtn' type="submit">
//                 Submit
//               </Button>
//             </Form>

//             <p className='link'>Don't have an Account? <span> <NavLink to="/signUp"  className='link'>Sign Up</NavLink> </span> </p>
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }

// export default Login;

import React, { useState,useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import Form from 'react-bootstrap/Form';
import { Navigate, useLocation, useNavigate} from 'react-router-dom';
import './Components/registration.css';
import auth from './Components/firebase.initialize';
import { NavLink } from 'react-router-dom';







const TestLogin = () => {

  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nid, setNid] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';
  // react-router-hooks
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);
  



  // functions
  const userToken = (localStorage.getItem('userToken'));
  console.log(userToken)
  
 useEffect(() =>{
  if (userToken) {
    setRegistered(true);
    // <Navigate to="\" />
    window.location='/';
 }
 },[userToken])
  
 

  const handleNameBlur = event => {
    setName(event.target.value);
  }
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleNidBlur = event => {
    setNid(event.target.value);
  }
  const handlePhoneBlur = event => {
    setPhone(event.target.value);
  }
  const handleAddressBlur = event => {
    setAddress(event.target.value);
  }
  const handleRegisteredChange = event => {
    setRegistered(event.target.checked)
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.?[#?!@$%^&-])/.test(password)) {
      setError('Password Should contain at least one special character');
      return;
    }
    setValidated(true);
    setError('');

    if (registered) {
      signInWithEmailAndPassword(email, password)
      event.preventDefault();
      console.log(email);  
      // .then(result => {

      alert("Looged In Successfully");
      localStorage.clear( userToken );
     window.localStorage.setItem('userToken',email)
    
    }
    else {
      createUserWithEmailAndPassword(email, password)
        .then(result => {
        
          alert("Registration Complete!!")
          
          setEmail('');
          setPassword('');
          // verifyEmail();
          // setUserName();
          console.log(email);
        })

        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    event.preventDefault();
  }




  return (
    <div>
      <div className='containerSignUp'>
      <section className='signSection'>
      <div className='leftdata1'>
          {/* <h2 className='col-lg-6 text-center'>Sign In</h2> */}

        <h2>{registered ? 'Login' : 'Register'}</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='form'>
          {!registered &&
          <>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Address" required />
          <Form.Control.Feedback type="invalid">
            Please provide your Address.
          </Form.Control.Feedback>

        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control onBlur={handlePhoneBlur} type="text" placeholder="Phone No" required />
         <Form.Control.Feedback type="invalid">
           Please provide your name.
         </Form.Control.Feedback>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control onBlur={handleNidBlur} type="text" placeholder="National ID No" required />
         <Form.Control.Feedback type="invalid">
           Please provide your name.
         </Form.Control.Feedback>
       </Form.Group>

       
       </>
          
          }

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password(Number & Special character only)" required />
            <p>Minimum password length 8</p>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

            {/* <Button className='inbtn' type="submit">
                 Submit
               </Button> */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>
          {/* <p className='link'>Don't have an Account? <span> <NavLink to="/signUp"  className='link'>Sign Up</NavLink> </span> </p> */}

          <p className="text-danger">{error}</p>
          {/* <Button variant="link">Forget Password?</Button>  */}
          <br />
           {/* <Button className='btn-log' variant="primary" type="submit"> */}
           <Button variant="primary" className='inbtn col-lg-5' value='Submit' type="submit" style={
                      { marginLeft: "110px" }
                    }>
                    
            {registered ? 'Login' : 'Register'}
          </Button> 

        </Form>


        </div>
        </section>
      </div>
    </div>
  );
};
export default TestLogin;


