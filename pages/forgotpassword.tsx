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
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Forgotpassword() {
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

                <MDBCheckbox
                
                  label="Receive OTP on Contact Number"
                />
                <MDBCheckbox
                
                  label="Receive OTP on Email ID"
                />

                <div className="text-center">
                  <MDBBtn
                    type="submit"
                    className="mt-4 mb-2 border border-primary"
                    block
                    color="secondary"
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
    </>
  );
}
