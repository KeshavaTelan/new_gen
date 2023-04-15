import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import styles from "../styles/forgotpassword.module.css";
import { useState } from "react";




export default function Forgotpassword() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

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
                  Forgot Password ?
                </h2>
                <p className=" text-primary fw-bold ">
                  Don’t worry! We will help you <br />
                  recover your password.
                </p>
                <MDBInput
                  className="mb-3 mt-4"
                  type="email"
                  id="form1Example1"
                  label="Practise Email/Contact Number"
                />

                <MDBCheckbox label="Receive OTP on Contact Number" />
                <MDBCheckbox label="Receive OTP on Email ID" />

                <div className="text-center" style={{}}>
                  <MDBBtn
                    type="submit"
                    className="mt-4 mb-2 border border-primary"
                    block
                    color="secondary"
                    onClick={toggleShow}
                  >
                    Send OTP
                  </MDBBtn>

                  <MDBBtn
                    type="submit"
                    className="mb-2 border border-primary"
                    block
                    color="tertiary"
                  >
                    Back to Login
                  </MDBBtn>
                </div>
              </div>
            </MDBContainer>
            <br />
          </MDBCol>
        </MDBRow>
       
      </div>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
          
                <h4 className=" fw-bold text-primary">
                  Verification
                </h4>
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                              <p>
                Enter the six digit OTP sent to email usermail@email.com
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
