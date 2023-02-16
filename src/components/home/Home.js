import React from 'react'

// import css
import './Home.css';

// image grid
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// footer
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Home() {
    return (
        
        <div className='home'>
        <p  className='para'>Welcome to Zizi Cinemas, where the future is Iconic!!</p>
        {/* images */}
            <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU' 
                alt='movieees' style={{minHeight:"35vh", height:"2px"}}></img>
        </MDBCol>
        <MDBCol size='md'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDLWkYoRPDJzEPENnVqMr9-mKkbG9xj_WBw&usqp=CAU' 
                alt='movieees' style={{minHeight:"35vh"}}></img>
        </MDBCol>
        {/* <MDBCol size='md'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8t7Ge6b-r-HKvpLqOibprv1Rgt8rw_dPEw&usqp=CAU' 
                alt='movieees' style={{minHeight:"35vh"}}></img>
        </MDBCol>
        <MDBCol size='md'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8t7Ge6b-r-HKvpLqOibprv1Rgt8rw_dPEw&usqp=CAU' 
                alt='movieees' style={{minHeight:"35vh"}}></img>
        </MDBCol> */}
      </MDBRow>
    </MDBContainer>
                       
                
                <h1>The appeal of cinema lies in the fear of death</h1>

            {/* footer */}
            <MDBFooter bgColor='dark' className='text-center text-lg-left' id='footer'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:Group 4{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
        </div>
    )


}
