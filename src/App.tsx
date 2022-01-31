import React from 'react';
import { Layout } from './components/Layout';
import { Routes } from './components/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Layout header={<Header />} footer={<Footer />}>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
