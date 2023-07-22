import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © 2023
          <NavLink to="/">CryptoWatch Inc.</NavLink>
          <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
          <NavLink to="/exchanges" activeClassName="active-link">Exchanges</NavLink>
          <NavLink to="/news" activeClassName="active-link">News</NavLink>
        </Space>
      </div>
    </div>
  </div>
);

export default App;