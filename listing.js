import React, {useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/footer';
import './Components/listing.css';
import './Components/registration.css';
import listing from './Components/Images/listing.jpg';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import FileItem from "./Components/FileItem"

function listingProperty() {

  const axios = require('axios').default;
  const { register, handleSubmit } = useForm();
  const [files, setFiles] = useState([
  //   {
  //   name: 'myFile.pdf'
  // }, {
  //   name: 'myFile 2.pdf'
  // }, {
  //   name: 'myFile 3.pdf'
  // }
])

  const removeFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName))
  }

  const listed = () => {
    alert("Your aprtment listed Successfully");
  }

  console.log(files)

  const uploadHandler = (event) => {
      const file = event.target.files[0];
      file.isUploading = true;
      setFiles([...files, file])

      const formData = new FormData();
      formData.append(
        file.name,
        file,
        file.name
      )

      axios.post('http://localhost:4000/upload', formData)
      .then((res) => {
        file.isUploading = false;
      setFiles([...files, file])
      })
      .catch((err) => {
        console.error(err)
        removeFile(file.name)
      })

      alert("File Uploaded Successfully");
      
  }

  const deleteFileHandler = (_name) => {
    axios.delete('http://localhost:4000/upload?name=${_name}')
    .then((res) => removeFile(_name))
    .catch((err) => console.error(err))
  }
    
  const onSubmit = data => {
      console.log(data);
      const url = `http://localhost:4000/apartment`;
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(result =>{
          console.log(result);
      } )
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <section className='listingPart'>
        <div className='left'>
          <img src={listing} style = {
                       { height: "900px",
                        width: "700px" }}/>

          <p>List your property,</p>
          <p>get renter in lesser time</p>
          <p>& earn money.....</p>
        </div>
        <div className='right'>
          <h6>To list your property sign-in as landlord first. <NavLink to="/login" className=''>Sign In</NavLink> </h6>
          <br></br>

          <h5>Property Details :</h5>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <label>Bedroom :</label>
              <input className="fieldForm" placeholder="Enter no. of bedrooms" {...register("bedroom", { required: true, maxLength: 20 })} />

              <label>Room :</label>
              <input className="fieldForm" placeholder="Enter no. of total rooms" {...register("totalRoom", { required: true, maxLength: 20 })} />

              <label>Washroom :</label>
              <input className="fieldForm" placeholder="Enter no. of washrooms" {...register("washRoom", { required: true, maxLength: 20 })}/>

              <label>Balcony :</label>
              <input className="fieldForm" placeholder="Enter no. of balcony" {...register("balcony", { required: true, maxLength: 20 })}/>
 
              <label>Area Size :</label>
              <input className="fieldForm" placeholder="Enter size of area in sq. ft" {...register("areaSize", { required: true, maxLength: 20 })}/>

              <label>Rent :</label>
              <input className="fieldForm" placeholder="Enter the rent" {...register("rent", { required: true, maxLength: 20 })}/>

          <h5>Other Facilities :</h5>
          <input type="text" className='desc' rows="4" cols="50" {...register("desc", { required: true, maxLength: 20 })}/>

           
          <h5>Attach image file :</h5> 
          <div className='file-card'>
               <div className='file-inputs'>
                   <input type='file' onChange={uploadHandler}/>
                   <button >
                       <i><FontAwesomeIcon icon={faPlus}/></i>
                       Upload
                   </button>
               </div>
               <p className='main'>Supported files</p>
               <span className='info'>JPG, PNG</span>
          </div>
          <ul className='fileList'>
            {
              files &&
              files.map(f => <FileItem 
              key={f.name}
              file={f}
              deleteFile={deleteFileHandler}/>)
            }
          </ul>
          

          <h5>Address :</h5> 
          <input type="text"  className='desc' rows="4" cols="50" {...register("address", { required: true, maxLength: 20 })}/>
          <input className='listed' type="submit" value="List it" onClick={listed}/>
        </form>

        
        </div>

      </section>


      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default listingProperty;