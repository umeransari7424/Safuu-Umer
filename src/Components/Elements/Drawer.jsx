import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Sidebar from '../Layout/Sidebar';
import {Link} from 'react-router-dom'


export default function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" style={{background:"rgb(52, 196, 57)",border:"none"}}  onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='container text-center ml-3 '>
        <div className="col-md-3 sidebar2">

        <div>
            <img className='img-fluid' src="Assets/safuu-logo..png" alt="safuu" width={"120px"}/>
            <br /> <br />
            
            
            <Link to="/" className='dashboard'><img className='img-fluid' src="Assets/dashboard.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Dashboard</b></Link>
            <Link to="/account" className='dashboard'><img className='img-fluid' src="Assets/contact.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Account</b></Link>
           

            <Link to="/swap" className='dashboard'><img className='img-fluid' src="Assets/swap.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Swap</b></Link>
          

            <Link to="/calculator" className='dashboard'><img className='img-fluid' src="Assets/calculator.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Calculator</b></Link>
          

            <Link to="/analytics" className='dashboard'><img className='img-fluid' src="Assets/analytics.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Analytics</b></Link>
         

            <Link to="/docs" className='dashboard'><img className='img-fluid' src="Assets/docs.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Docs</b></Link>
            </div>


        
        <br />
        
        </div>
        
    </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
