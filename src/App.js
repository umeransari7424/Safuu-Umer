
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Base from './Components/Layout/Base';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Account from './Pages/Account';





function App() {
  return (
    <div >
     <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/account" element={<Account />} />
          {/* <Route index path="/swap" element={<Swap />} /> */}
          {/* <Route index path="/account" element={<Account />} /> */}
          {/* <Route index path="/account" element={<Account />} /> */}
          {/* <Route index path="/account" element={<Account />} /> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
