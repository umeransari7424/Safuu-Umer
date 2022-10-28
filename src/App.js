
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import Base from './Components/Layout/Base';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Account from './Pages/Account';
import Swaps from './Pages/Swaps';
import Analytic from './Pages/Analytic';
import Cal from './Pages/Cal';






function App() {
  return (
    <div >
     <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/account" element={<Account />} />
          <Route index path="/swap" element={<Swaps />} />
          <Route index path="/analytics" element={<Analytic />} />
          <Route index path="/calculator" element={<Cal/>} />
          {/* <Route index path="/account" element={<Account />} /> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
