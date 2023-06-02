








































import React, { useEffect, useState, Component } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './Components/registration.css';
import axios from 'axios';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from './Components/firebase.initialize';
  
  
const signUp = () => {

  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [nid, setNid] = useState('');
  const [error, setError] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth);


















  const handleNameBlur = event => {
    setName(event.target.value);
  }
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleAddressBlur = event => {
    setAddress(event.target.value);
  }
  const handlePhoneBlur = event => {
    setPhone(event.target.value);
  }
  const handleNidBlur = event => {
    setNid(event.target.value);
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

    //   alert("Looged In Successfully");
    //   localStorage.clear( userToken );
    //  window.localStorage.setItem('userToken',email)
    
    }
    else {
      createUserWithEmailAndPassword(email, password)
        .then(result => {
        
          alert("Registration Complete!!")
          setName('');
          setAddress('');
          setPhone('');
          setEmail('');
          setPassword('');
          setNid('');
          
          // verifyEmail();
          // setUserName();
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    event.preventDefault();
  }
  // const handleRegisteredChange = event => {
  //   setRegistered(event.target.checked)
  // }

      return (
        <div>
          <div className='containerSignUp'>
            <section className='signSection'>
              <div className='leftdata'>
                <h2 className='col-lg-6 text-center'>Sign Up</h2>
  
                <div className='toForm'>
                  <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='form'>
  
  
                    <Form.Group className="fieldForm" id='name'>
                      <Form.Control onBlur={handleNameBlur} type="text" name='name' placeholder="Your Name" required/>
                    </Form.Group>
  
  
{/*   
                    <Form.Group className="fieldForm" controlId="formIdentity">
                      <FormControl>
                        <FormLabel className="row-radio-buttons-group-label" style={{ color: "white", fontWeight: "bold" }}>Gender</FormLabel>
                        <RadioGroup
                          row aria-labelledby="row-radio-buttons-group-label"
                          name="radio-buttons-group"
                         >
                          <FormControlLabel className="radio" value={"Renter"} onChange={this.changePosition} control={<Radio />} label="Renter" />
                          <FormControlLabel className="radio" value={"Landlord"} onChange={this.changePosition} control={<Radio />} label="Landlord" />
                          {/* <FormControlLabel className="radio" value="other" control={<Radio />} label="Other" /> */}
                        {/* </RadioGroup>
                      </FormControl>
                    </Form.Group> */} 
                    <br></br>
  
  
  
                    <Form.Group className="fieldForm" controlId='address'>
                      <Form.Control onBlur={handleAddressBlur} type="text" name='address' placeholder="Address" />
                    </Form.Group>
  
  
                    <Form.Group className="fieldForm" controlId='email'>
                      <Form.Control onBlur={handleEmailBlur} type="text" name='email' placeholder="Email" />
                    </Form.Group>
  
  
                    <Form.Group className="fieldForm" controlId="formPhone">
                      <Form.Control onBlur={handlePhoneBlur} type="text" name='phone' placeholder="Phone No" />
                    </Form.Group>
  
  
                    <Form.Group className="fieldForm" controlId='formNID'>
                      <Form.Control onBlur={handleNidBlur} type="text" name='nid' placeholder="National ID No" />
                    </Form.Group>
  
  
                    <Form.Group className="fieldForm" controlId='password' >
                      <Form.Control onBlur={handlePasswordBlur} type="password" name='password' placeholder="Create a Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
  
                    <Button variant="primary" className='inbtn col-lg-5' value='Submit' type="submit" style={
                      { marginLeft: "110px" }
                    }>
                      Submit
                    </Button>
                  </Form>
                </div>
                <p className='link mt-3'>Already Have an Account? <span> <NavLink to="/login" className='link'>Sign In</NavLink> </span> </p>
              </div>
            </section>
          </div>
        </div>
      )
    }
export default signUp;


// class signUp extends Component {
  
//   render() {
//     return (
//       <div>
//         <div className='containerSignUp'>
//           <section className='signSection'>
//             <div className='leftdata'>
//               <h2 className='col-lg-6 text-center'>Sign Up</h2>

//               <div className='toForm'>
//                 <Form className='form' onSubmit={this.onSubmit}>


//                   <Form.Group className="fieldForm" id='Name'>
//                     <Form.Control type="text" name='name' placeholder="Your Name" required/>
//                   </Form.Group>



//                   <Form.Group className="fieldForm" controlId="formIdentity">
//                     <FormControl>
//                       <FormLabel className="row-radio-buttons-group-label" style={{ color: "white", fontWeight: "bold" }}>Gender</FormLabel>
//                       <RadioGroup
//                         row aria-labelledby="row-radio-buttons-group-label"
//                         name="radio-buttons-group"
//                        >
//                         <FormControlLabel className="radio" value={"Renter"} onChange={this.changePosition} control={<Radio />} label="Renter" />
//                         <FormControlLabel className="radio" value={"Landlord"} onChange={this.changePosition} control={<Radio />} label="Landlord" />
//                         {/* <FormControlLabel className="radio" value="other" control={<Radio />} label="Other" /> */}
//                       </RadioGroup>
//                     </FormControl>
//                   </Form.Group>
//                   <br></br>



//                   <Form.Group className="fieldForm" controlId="formAddress">
//                     <Form.Control type="text" name='address' placeholder="Address" />
//                   </Form.Group>


//                   <Form.Group className="fieldForm" id='email'>
//                     <Form.Control type="text" name='email' placeholder="Email" />
//                   </Form.Group>


//                   <Form.Group className="fieldForm" controlId="formPhone">
//                     <Form.Control type="text" name='phone' placeholder="Phone No" />
//                   </Form.Group>


//                   <Form.Group className="fieldForm" controlId="formNID">
//                     <Form.Control type="text" name='nid' placeholder="National ID No" />
//                   </Form.Group>


//                   <Form.Group className="fieldForm" id='password' >
//                     <Form.Control type="password" name='password' placeholder="Create a Password" />
//                   </Form.Group>


//                   <Button variant="primary" className='inbtn col-lg-5' onSubmit={this.onSubmit} value='Submit' type="submit" style={
//                     { marginLeft: "110px" }
//                   }>
//                     Submit
//                   </Button>
//                 </Form>
//               </div>
//               <p className='link mt-3'>Already Have an Account? <span> <NavLink to="/login" className='link'>Sign In</NavLink> </span> </p>
//             </div>


//           </section>

//         </div>
//       </div>
//     )
//   }
// }

