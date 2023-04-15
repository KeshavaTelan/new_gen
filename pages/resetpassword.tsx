import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function ResetPassword() {
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
                  Reset Password ?
                </h2>
                <p className=" text-primary fw-bold ">
                Your new password must be different from<br /> previous used password
                </p>
                <MDBInput
                  className="mb-3 mt-4"
                  type="password"
                  id="frgt1"
                  label="Set new Password"
                />
                 <MDBInput
                  className="mb-3 mt-4"
                  type="password"
                  id="frgt2"
                  label="Conform Password"
                />

                <div className="text-center" >
                  <MDBBtn
                    type="submit"
                    className="mt-4 mb-2 border border-primary"
                    block
                    color="secondary"
                 
                  >
                   Reset
                  </MDBBtn>

                  <MDBBtn
                    type="submit"
                    className="mb-2 border border-primary"
                    block
                    color="tertiary"
                  >
                   Cancel
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
