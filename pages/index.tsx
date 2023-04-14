// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import '/styles/Home.module.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.bg1}>
               <MDBRow className={styles.bg1}>
      <MDBCol xl='6' className='imge'>
       {/* <Image src={'/side.svg'} alt='side' width={100} height={100}/>  */}
       tests1
      </MDBCol>
      <MDBCol xl='6'>
        test 2
      </MDBCol>
    </MDBRow>
    </div>
    </>
  )
}
