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
  const [longLink, setlongLink] = useState('');
  const [alias, setalias] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    'testUrl0.com', 'testUrl1.com', 'testUrl2.com',
  ];

  return (
    <div className="card flex justify-content-center">

      <label>Shorten a long URL</label>
      <br />
      <br />
      <InputText id="longLink" placeholder="Enter long link here" value={longLink} onChange={(e) => setlongLink(e.target.value)} />
      <br />
      <br />
      <br />

      <div className="card flex flex-wrap justify-content-center gap-6">

        <label>Customize your link</label>
        <br />
        <br />
        <Dropdown placeholder="Select a URL template" value={selectedCity} onChange={(e) => { setSelectedCity(e.value); }} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        <InputText id="alias" placeholder="Enter alias" value={alias} onChange={(e) => setalias(e.target.value)} />
      </div>

    </div>
  )
}

export default App
