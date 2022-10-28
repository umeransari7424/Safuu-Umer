import React from 'react';


function Analytics() {
  return (
    <div className='analytics'>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-9 ">
              <div className='d-flex investcard'>

              
              <div className="card card1  mt-5 m-2" style={{ width: "300px" }}>
                <div>
                  <h4><b>How much you have <br />
                   invested so far?</b></h4>
                </div>
                <div >
                  <img src="Assets/earn.png" alt="earn" />
                </div>
                <div>
                  <h2><b>Total <br /> Investment</b></h2>
                </div>
                
                <button type="button" class="btn btn-success m-3 p-2"><b>$0</b></button>
              
              </div>
              <div className="card card1 mt-5 m-2" style={{ width: "300px" }}>
                <div className='mt-3'>
                  <h4>Risk Meter</h4>
                </div>
                <div className='position-relative back'>
                <img className='img-fluid mt-4' src="Assets/meter.png" alt="Meter" />

                  {/* <img className='img-fluid position-absolute' src="Assets/meterarrow.png"  alt="Meter" /> */}
                        
                </div>
              </div>
              <div className="card card1 mt-5 m-2" style={{ width: "300px" }}>
                <div>
                  <h4><b>How much you have withdrawn so far?</b></h4>
                </div>
                <div >
                  <img src="Assets/earn.png" alt="earn" />
                </div>
                <div>
                  <h2><b>Total <br /> Earned</b></h2>
                </div>
                
                <button type="button" class="btn btn-success m-3 p-2"><b>$0</b></button>
              
              </div>
            </div>
            <div className="card card1 card3 text-center mb-4"style={{ width: "840px" ,height:"400px"}}>
              <div>
              <button type="button" class="btn btn-danger recent m-3 px-5 py-3"><b>Recent Trading History</b></button>

              </div>
              <div className='d-flex justify-content-between mx-3 transaction'>
                <a href="/"><b>Transaction Hash</b></a> 
                <a href="/"><b>Block Number</b></a> 
                <a href="/"><b>Method</b></a> 
                <a href="/"><b>Date</b></a> 
                <a href="/"><b>Amount</b></a> 
                <a href="/"><b>$ SAFUU</b></a> 
                <a href="/"><b>$ BNB</b></a> 
                 
                

              </div>
              <hr  className='mx-2 ' />

            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Analytics