import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import styles from "../styles/signin.module.css";

export default function Signin() {
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
                <form className="mt-5">
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="form2Example1"
                    label="Email address"
                  />
                  <MDBInput
                    className="mb-4"
                    type="password"
                    id="form2Example2"
                    label="Password"
                  />

                  <MDBRow className="mb-4">
                    <MDBCol className="d-flex justify-content-center">
                      <MDBCheckbox
                        id="form2Example3"
                        label="Remember me"
                        defaultChecked
                      />
                    </MDBCol>
                    <MDBCol>
                      <a href="#!">Forgot password?</a>
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
                    <p className=" text-primary fw-bold ">
                  Create an Account With Us
                </p>
                <MDBBtn
                    type="submit"
                    className="mb-4 border border-primary"
                    block
                    color='tertiary'
                  >Get Started
                  </MDBBtn>
                  </div>
                </form>
              </div>
            </MDBContainer>
            <br />
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}
