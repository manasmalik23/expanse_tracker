import React from 'react';
import './App.css';
import { Layout } from "antd";
import { BrowserRouter, Link, Route, Navigate, Routes } from 'react-router-dom';
import ExpenseTracker  from './components/ExpenseTracker';
import Expense from './components/Expense';
import AppHeader from './components/AppHeader';

const { Content, Footer } = Layout;
function App() {
  return(
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{ padding: "0 250px", marginTop: 164 }}
      >
      <BrowserRouter>
        <Routes>
          <Route path="/Expense" element={<Expense income={undefined} expense={undefined}/>}/>
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        </Routes >
      </BrowserRouter>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker
      </Footer>
    </Layout>

    )
}


export default App;
