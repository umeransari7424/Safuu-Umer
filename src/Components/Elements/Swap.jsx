import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { AiTwotoneSetting,AiOutlineArrowDown } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


function Swap() {
  return (
    <div className="swap">
      <div className="container text-center ">
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-6 ">
            <div
              className="card card1 py-2 mt-5 text-start"
              style={{ width: "500px" }}
            >
              <div className="d-flex justify-content-between px-4 pt-4">
                <div>
                  <h5>
                    <b>S w a p</b>
                  </h5>
                  <h5>Fast, Secure, KYC-Free.</h5>
                </div>
                <div className="swapicon">
                  <span>
                    <IoMdRefresh size={"33px"} style={{ color: "white" }} />
                  </span>{" "}
                  &nbsp;
                  <span>
                    <AiTwotoneSetting size={"30px"} />
                  </span>
                </div>
              </div>
              <div
                className="card card2 py-2 mt-3 text-center"
                style={{ width: "450px" }}
              >
                <div className="d-flex justify-content-between px-4">
                  <div>
                    <h5>
                      <b>From:</b>
                    </h5>
                    <h5 className="mt-2">0.00</h5>
                  </div>
                  <div>
                    <h5>
                      <b>Balance: 0</b>
                    </h5>
                    <div className="swapicon">
                      <h5 className="mt-1 MAX">
                        <b >Max</b>
                      </h5>{" "}
                      &nbsp;
                      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <img className="img-fluid" src="Assets/bnb.svg" alt="BNB" /> &nbsp;
                          <b>BNB</b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">
        <img className="img-fluid" src="Assets/bnb.svg" alt="BNB" /> &nbsp;
                          <b>BNB</b>
        </Dropdown.Item>
        <Dropdown.Item href="/">
          <img className="img-fluid" src="Assets/safu.png" alt="BNB" width={"25px"} /> &nbsp;
          <b>SAFUU</b></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
                    
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="arowicon">

              <AiOutlineArrowDown size={"25px"}/>
              </div>
              <div
                className="card card2 py-2 mt-3 text-center"
                style={{ width: "450px" }}
              >
                <div className="d-flex justify-content-between px-4">
                  <div>
                    <h5>
                      <b>To:</b>
                    </h5>
                    <h5 className="mt-2">0.00</h5>
                  </div>
                  <div>
                    <h5>
                      <b>Balance: 0</b>
                    </h5>
                    <div className="swapicon">
                      
                      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <img className="img-fluid" src="Assets/safu.png" alt="BNB" width={"25px"} /> &nbsp;
                          <b>SAFUU</b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="/">
        <img className="img-fluid" src="Assets/bnb.svg" alt="BNB" /> &nbsp;
                          <b>BNB</b>
        </Dropdown.Item>
        <Dropdown.Item href="/">
          <img className="img-fluid" src="Assets/safu.png" alt="BNB" width={"25px"} /> &nbsp;
          <b>SAFUU</b></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    
                    </div>
                  </div>
                </div>
              </div>
              <br />
            
              <div className="d-flex justify-content-between px-4">
                <div>
                  <h5>
                    <b>Slippage Tolerance</b>
                  </h5>
                </div>
                <div className="swapicon">
                <h5>
                    <b>0.1%</b>
                  </h5>
                </div>
              </div>
              <button type="button" className="btn btn-danger btn2">Connect Wallet</button>

              <div
                className="card card2 py-2 mt-3 text-center"
                style={{ width: "450px" }}
              >
                <div className="d-flex justify-content-between px-4">
                  <div className="text-start">
                    <h5>
                      <b>Minimum received</b>
                    </h5>
                    <h5>
                      <b>Price Impact</b>
                    </h5>
                    <h5>
                      <b>Liquidity Provider Fee</b>
                    </h5>
                    <h5>
                      <b>Route</b>
                    </h5>
                    
                  </div>
                  <div className="text-end">
                    <h5>
                      <b>0 SAFUU</b>
                    </h5>
                    <div >
                      <h5 className="mt-1">
                        <b >0%</b>
                      </h5>
                      <h5 className="mt-1">
                        <b >0% - No Fee</b>
                      </h5>
                      <h5 className="mt-1">
                        <b >SAFUU  --  BNB</b>
                      </h5>
                      
                      
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
