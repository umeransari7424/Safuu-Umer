import React from 'react'

function Accounts() {
  return (
    <div className='dashboard-market'>
        <div className="container text-center dash">
            <div className="row ">

                <div className="col-md-3">

                </div>
                
                <div className="col-md-8 py-5  ">
                    <div className="card py-2 mt-3" style={{width:"800px"}}>
                        <span className='market'>Your Balance</span>
                        <span className='accountval'>$0</span>
                        <span className='market'>0 SAFUU</span>
                    </div>
                    <div className="card py-2 mt-3" style={{width:"800px"}}>
                        <span className='market'>APY</span>
                        <span className='accountval'>383,025.8%</span>
                        <span className='market'>Daily ROI 2.28%</span>
                    </div>
                    <div className="card py-2 mt-3" style={{width:"800px"}}>
                        <span className='market'>Next Rebase:</span>
                        <span className='accountval'>00:12:10</span>
                        <span className='market'>Rebasing...</span>
                    </div>
                    <div className="card py-2 mt-3 text-start" style={{width:"800px"}}>
                    
                        <div className='d-flex justify-content-between px-4'>
                        <h5>Current SAFUU Price</h5>
                        <h5 className='market'>$1.55</h5>                       
                        </div>

                        <div className='d-flex justify-content-between px-4 pt-3'>
                        <h5>Next Reward Amount</h5>
                        <h5 className='market'>0 SAFUU</h5>
                        </div>

                        <div className='d-flex justify-content-between px-4 pt-3'>
                        <h5 >Next Reward Amount USD</h5>
                        <h5 className='market'>$0</h5>
                        </div>

                        <div className='d-flex justify-content-between px-4 pt-3'>
                        <h5 >Next Reward Yield</h5>
                        <h5 className='market'>0.02355%</h5>
                        </div>

                        <div className='d-flex justify-content-between px-4 pt-3'>
                        <h5 >ROI(1-Day Rate) USD</h5>
                        <div className='market'>$0</div>
                        </div>

                        <div className='d-flex justify-content-between px-4 pt-3'>
                        <h5 h5>ROI(5-Day Rate)</h5>
                        <h5 className='market'>11.96%</h5>
                        </div>

                        <div className='d-flex justify-content-between px-4 pt-3'>
                        <h5 >ROI(5-Day Rate) USD</h5>
                        <h5 className='market'>$0</h5>
                        </div>
                        
                    </div>

                </div>
                
            </div>
            
            
                
            </div>
    
    </div>
  )
}

export default Accounts