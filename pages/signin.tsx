import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Signin() {
    return (
      <>
      <div >
        <MDBRow>
          <MDBCol xl="6" className="d-none d-xl-block d-xxl-block">
            <img src="/side.svg" />
          </MDBCol>
          <MDBCol xl="6" className=" my-auto ">
            <div className=" d-flex align-items-center justify-content-center">
              <img src="/doctor.svg" />
            </div>

            <br />
            <h2 className="text-center display-6 fw-bold text-primary">
              Welcome to the Clinic Demo
            </h2>
          </MDBCol>
        </MDBRow>
      </div>
    </>
    )
  }