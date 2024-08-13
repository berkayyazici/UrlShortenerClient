import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Router } from 'react-router-dom'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { FloatLabel } from 'primereact/floatlabel';
import { Dropdown } from 'primereact/dropdown';

function App() {
  const [value, setValue] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'testUrl0.com' },
    { name: 'testUrl1.com' },
    { name: 'testUrl2.com' },
  ];

  return (
    <div className="card flex justify-content-center">

      <label>Shorten a long URL</label>
      <br />
      <br />
      <InputText id="username" placeholder="Enter long link here" value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <br />
      <br />

      <div className="card flex justify-content-center">

        <label>Customize your link</label>
        <br />
        <br />
        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />

      </div>

    </div>
  )
}

export default App
