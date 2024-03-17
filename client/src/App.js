import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { Form, DropdownForm, MyForm } from './components/form';
import { Table1, Table2, Table3, Table4 } from './components/table';
import { API } from './components/api';

import { Route, Routes } from "react-router-dom"

import { HomePage } from './components/homepage';
import TablePage from './components/tablepage';

function App() {

  return (
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/schedule' Component={TablePage} />
    </Routes>
  );
}

export default App;
