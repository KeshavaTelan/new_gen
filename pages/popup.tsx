interface Props {
  show: Boolean;
  onHide: () => void;
}

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import styles from "../styles/popup.module.css";
import React from "react";

const popup: React.FC<Props> = ({ show, onHide }) => {
  return (
    <>
      <div className={styles.containerpop}>
        <div className={styles.contentpop}>
          <h2 className=" display-6 fw-bold text-primary">Verification</h2>
          <p>Enter the 6 digit OTP sent to email Useremail@email.com</p>

         
            <form action="" className="mt-4 text-center">
              <input className={styles.forminputt} type="text" />

              <input className={styles.forminputt} type="text" />

              <input className={styles.forminputt} type="text" />

              <input className={styles.forminputt} type="text" />

              <input className={styles.forminputt} type="text" />
            </form>
        <div className="d-flex mt-3">
        <p className="fw-bold text-primary ">59 sec</p>
        <p className="mx-2 ">sec</p>
        </div>
        <MDBBtn
                    type="submit"
                    className="mt-1 mb-2 border border-primary"
                    block
                    color="secondary"
                 
                  >
                   Verify
                  </MDBBtn>

                  <MDBBtn
                    type="submit"
                    className="mb-2 border border-primary"
                    block
                    color="tertiary"
                    onClick={()=>{onHide()}}
                  >
                    Cancel
                  </MDBBtn>
        </div>
      </div>
    </>
  );
};

export default popup;
