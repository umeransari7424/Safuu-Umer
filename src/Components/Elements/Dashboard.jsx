import React from 'react'

function Dashboard() {
  return (
    <div className='dashboard-market'>
        <div className="container text-center dash">
            <div className="row ">

                <div className="col-md-4">

                </div>
                
                <div className="col-md-7 py-5 dashboardcards ">
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>Market Value of Treasury Asset</span>
                        <span className='marketval'>$58,734,873</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>Total Supply</span>
                        <span className='marketval'>61,634,066.59</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>Circulating Supply</span>
                        <span className='marketval'>45,337,883.34</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>SAFUU PRICE</span>
                        <span className='marketval'>$1.55</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>SAFUU Insurance Fund Value</span>
                        <span className='marketval'>$8,693</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>MarketCap</span>
                        <span className='marketval'>$70,281,999</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>Pool Value</span>
                        <span className='marketval'>$9,152,489</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'># Value of FirePit</span>
                        <span className='marketval'>16,296,183.24 SAFUU</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>$ Value of FirePit</span>
                        <span className='marketval'>$25,262,060</span>


                    </div>
                    <div className="card py-2 mt-3" style={{width:"600px"}}>
                        <span className='market'>% FirePit : Supply</span>
                        <span className='marketval'>26.44%</span>


                    </div>

                </div>
                
            </div>
            
            
                
            </div>
    
    </div>
  )
}

export default Dashboard