import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import styles from "../styles/signin.module.css";
import { useRouter } from 'next/router'
import { useState } from "react";




export default function Signin() {
  const [user, setUser] = useState({
    emai: "",
    password: "",
  });

let router= useRouter()

  const onChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <MDBRow>
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
                    feedback="Please Enter Valid USername/Email"
                    invalid
                    className="mb-4"
                  >
                    <MDBInput
                      name="password"
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

                  <MDBRow className="mb-4">
                    <MDBCol className="d-flex justify-content-center">
                      <MDBCheckbox
                        id="form2Example3"
                        label="Remember me"
                        
                      />
                    </MDBCol>
                    <MDBCol>
                      <a href=""   onClick={()=>{router.push('/forgotpassword')}}>Forgot password?</a>
                    </MDBCol>
                  </MDBRow>

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
                      <MDBIcon fab icon="microsoft" />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className="mx-3">
                      <MDBIcon fab icon="google" />
                    </MDBBtn>
                  </div>
                  <p className=" text-primary fw-bold ">
                    Create an Account With Us
                  </p>
                  <MDBBtn
                    type="submit"
                    className="mb-4 border border-primary"
                    block
                    color="tertiary"
                    onClick={()=>{router.push('/signup')}}
                  >
                    Get Started
                  </MDBBtn>
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
