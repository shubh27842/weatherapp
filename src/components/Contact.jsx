import React, { useState } from 'react'


const Contact = () => {

    const [info,setInfo] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        age: "",
        email: "",
        profile: "",
    });
    const [show,setShow] = useState(true);

    const handleChange = (e) => {
        setInfo({...info,
        [e.target.name] :e.target.value
        })
    }

    const onSubmitForm = () => {
        setShow(false);
    }

    
    return (
       <div>
           {    
               show ? 
               <div className="form-container">
            <div className="form-header d-flex justify-content-center">
                <h1 className=" mx-auto" style={{
                    color: "#000"
                }}>Contact Form</h1>
            </div>
            <div className="form-body">
                <div className="type-1 first">
                    <label for="name">First Name</label>
                    <input onChange={handleChange} className="input-bar" id="firstName" placeholder="Enter First Name Here" type="text" name="firstName" required />
                </div>
                <div className="type-1 ">
                    <label for="name">Last Name</label>
                    <input onChange={handleChange} className="input-bar" id="lastName" placeholder="Enter Last Name Here" type="text" name="lastName" required />
                </div>
                <div className="type-1 ">
                    <label for="name">Mobile</label>
                    <input onChange={handleChange} className="input-bar" id="mobile" placeholder="Enter Mobile Here" type="text" name="mobile" required />
                </div>

                <div className="type-1">
                    <label for="email">Email</label>
                    <input onChange={handleChange} className="input-bar" id="email" placeholder="abc@mail.com" type="email" name="email" required />
                </div>
                <div className="type-1">
                    <label for="age">Age </label>
                    <input onChange={handleChange} className="input-bar" id="age" placeholder="Age" type="number" name="age" />
                </div>
                <div className="type-1">
                    <label for="age">Profile</label>
                    <input onChange={handleChange} className="input-bar" id="profile" placeholder="Age" type="text" name="profile" />
                </div>
                <div className="type-1 last">
                    <input onClick={onSubmitForm} className="input-bar button-color"    type="submit" value="Submit" />
                </div>
            </div>
        </div> :

           <div className="form-container">
            <div className="form-header d-flex justify-content-center">
                <h1 className=" mx-auto" style={{
                    color: "#000"
                }}>Contact Information</h1>
            </div>
            <div className="form-body py-3">
                <div className="type-1 d-flex">
                    <label for="name">First Name:</label>
                    <p className="mx-4">{info ? info.firstName : ""}</p>
                </div>
                <div className="type-1 d-flex">
                    <label for="name">Last Name:</label>
                    <p className="mx-4">{info ? info.lastName : ""}</p>
                </div>
                <div className="type-1 d-flex">
                    <label for="name">Mobile:</label>
                    <p className="mx-4">{info ? info.mobile : ""}</p>
                </div>

                <div className="type-1 d-flex">
                    <label for="email">Email:</label>
                    <p className="mx-4">{info ? info.email : ""}</p>
                </div>
                <div className="type-1 d-flex">
                    <label for="age">Age:</label>
                    <p className="mx-4 d-flex">{info ? info.age : ""}</p>
                </div>
                <div className="type-1 d-flex">
                    <label for="age ">Profile:</label>
                    <p className="mx-4">{info ? info.profile : ""}</p>
                </div>
            </div>
        </div> }
       </div>
    )
}


export default Contact;