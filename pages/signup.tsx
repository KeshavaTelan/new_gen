import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBContainer,
    MDBIcon,
    MDBValidation,
    MDBValidationItem,
  } from "mdb-react-ui-kit";
  import styles from "../styles/signin.module.css";
  import { useRouter } from 'next/router'
  import { useState } from "react";
  import React, { useMemo } from 'react';

  
  
  
  export default function Signup() {
    const [user, setUser] = useState({
      emai: "",
      password: "",
    });

    const selectData = useMemo(() => [
        { text: 'One', value: 1, defaultSelected: true },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
      ], []);
  
  let router= useRouter()
  
    const onChange = (e: any) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    return (
      <>
        <div>   

      
          <MDBRow className="">

 
            <MDBCol xl="6" className="d-none d-xl-block d-xxl-block">
   
              <img src="/doctorall.svg" />
            </MDBCol>
  
            <MDBCol xl="6" className=" my-auto ">
              <MDBContainer className="w-50">
                <div className="  ">
                  <h2 className=" display-6 fw-bold text-primary">
                    Welcome Back !!
                  </h2>
                  <p className=" text-primary fw-bold ">
                    To keep connected with us please <br />
                    login with your personal info
                  </p>
  
                  <MDBValidation className="mt-5">
  
                  <MDBValidationItem
                      feedback="Please Enter Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="Pname"
                        onChange={onChange}
                        required
                        type="test"
                        label="Enter Practise Name"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>

                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >


                      <MDBInput
                        name="Ptype"
                        onChange={onChange}
                        required
                        type="text"
                        label="Practise Type"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>

                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="CPN"
                        onChange={onChange}
                        required
                        type="text"
                        label="Contact Person Name"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>

                    <MDBRow  className='g-2'>

                    <MDBCol md="8">
                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="specility"
                        onChange={onChange}
                        required
                        type="text"
                        label="Select Speciality"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>
                    </MDBCol>

                    <MDBCol md="4">
                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="Pcode"
                        onChange={onChange}
                        required
                        type="text"
                        label="Practise code"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>
                    </MDBCol>
                    </MDBRow>

                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="WBN"
                        onChange={onChange}
                        required
                        type="mobile"
                        label="Whatsapp For Busines Number"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>

                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="Pemail"
                        onChange={onChange}
                        required
                        type="email"
                        label="Practise Email"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>

                    
                    <MDBValidationItem
                      feedback="Please Enter Valid Deatils"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="WCN"
                        onChange={onChange}
                        required
                        type="mobile"
                        label="Whatsapp For contact Number"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>
  
                    <MDBValidationItem
                      feedback="Please Enter Valid USername/Email"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="username"
                        onChange={onChange}
                        required
                        type="email"
                        label="Username"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>
  
                    <MDBValidationItem
                      feedback="Password DO not Match Please Try Again"
                      invalid
                      className="mb-4"
                    >
                      <MDBInput
                        name="password"
                        onChange={onChange}
                        required
                        label="Password"
                        className="form-control "
                        color="secondary"
                      />
                    </MDBValidationItem>

  
                    <MDBBtn
                      type="submit"
                      className="mb-4 border border-primary"
                      block
                      color="secondary"
                    >
                      Sign in
                    </MDBBtn>
                  </MDBValidation>
                  <div className="text-center">
                    <div className={styles.textcenter}>
                      <div className={styles.texthr}>
                        <span className={styles.texthrtext}>Or Login With</span>
                      </div>
                    </div>
  
                    <div className="my-4">
                      <MDBBtn floating color="secondary" className="mx-3">
                        <MDBIcon fab icon="facebook-f" />
                      </MDBBtn>
  
                      <MDBBtn floating color="secondary" className="mx-3">
                        <MDBIcon fab icon="google" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBContainer>
              <br />
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
  }
  