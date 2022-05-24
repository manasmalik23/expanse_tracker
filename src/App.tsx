import React from 'react';
import './App.css';
import { Layout } from "antd";
import { BrowserRouter, Link, Route, Navigate, Routes } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import Expense from './components/Expense';
import AppHeader from './components/AppHeader';

const { Content, Footer } = Layout;
function App() {

  return (
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{ marginTop: 100 }}
      >
        <Content>
        </Content>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
          <Route path="/Expense" element={<Expense />} />
        </Routes >
        {/* </BrowserRouter> */}
      </Content>
      <Footer style={{ textAlign: "center", marginTop: 350 }}>
        Expense Tracker
      </Footer>
    </Layout>

  )
}


export default App;
