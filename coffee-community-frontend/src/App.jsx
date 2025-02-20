import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Search from "./pages/Search";
import Forum from "./pages/Forum";
import CafeDetail from "./pages/CafeDetail";
import Account from "./pages/Account";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="tabs-container">
        <nav className="tabs">
          <NavLink to="/" className="tab" activeClassName="active-tab" exact>
            Home
          </NavLink>
          <NavLink to="/search" className="tab" activeClassName="active-tab">
            Search Cafes
          </NavLink>
          <NavLink to="/account" className="tab" activeClassName="active-tab">
            Account
          </NavLink>
          <NavLink to="/forum" className="tab" activeClassName="active-tab">
            Forum
          </NavLink>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={
            <div>
              <h1 style={{ fontSize: "5rem", textAlign: "center" }}>Welcome to Third Place!</h1>
              <p style={{ fontSize: "2rem", textAlign: "center" }}>
                Find your home-away-from-home through third spaces such as cafes, gyms, and bookstores. Build a community and cultivate bonds by discovering local gems, social events, and earning rewards in style!
              </p>
            </div>
          } />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cafe/:cafeId" element={<CafeDetail />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
