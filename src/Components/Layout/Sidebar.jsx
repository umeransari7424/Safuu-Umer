import React from 'react'

function Sidebar() {
  return (
    <div className='container-fluid text-center '>
        <div className="col-md-3  sidebar">

        <div>
            <img className='img-fluid' src="Assets/safuu-logo..png" alt="safuu" width={"120px"}/>
            <br /> <br />
            
            

            <a href="/" className='dashboard'><img className='img-fluid' src="Assets/dashboard.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Dashboard</b></a >
           
            <a href="/" className='dashboard'><img className='img-fluid' src="Assets/contact.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Account</b></a>
           

            <a href="/" className='dashboard'><img className='img-fluid' src="Assets/swap.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Swap</b></a>
          

            <a href="/" className='dashboard'><img className='img-fluid' src="Assets/calculator.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Calculator</b></a>
          

            <a href="/" className='dashboard'><img className='img-fluid' src="Assets/analytics.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Analytics</b></a>
         

            <a href="/" className='dashboard'><img className='img-fluid' src="Assets/docs.png" alt="Dashboard" width={"20px"} /> &nbsp; &nbsp; <b>Docs</b></a>
            </div>


        
        <br />
        
        </div>
        
    </div>
  )
}

export default Sidebar