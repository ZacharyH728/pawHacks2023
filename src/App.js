import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { Form, DropdownForm, MyForm } from './components/form';

function App() {

  return (
    <div className='main'>
      <DropdownForm label="Please select your current major" label2={"Please select your desired major"} />
    </div>
  );
}

export default App;
