import React, { useState, useEffect } from "react";
import './App.css'
import './style.css'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function App() {
  const [longLink, setLongLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [alias, setAlias] = useState('');
  const [selectedLink, setSelectedLink] = useState('');
  const [data, setData] = useState(null);
  const url = "http://localhost:5066/api/Url";

  const request = {
    longUrl: longLink,
    headerLink: selectedLink,
    shortUrl: ''
  }

  const links = [
    'testUrl0.com', 'testUrl1.com', 'testUrl2.com',
  ];



  function sendGetAllUrlRequest() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error:', error));
  }

  function sendCreateShortUrlRequest() {
    fetch(url + '/GetShortUrl?longUrl=' + request.longUrl + '&headerLink=' + request.headerLink, {
      method: 'POST',
    })
      .then(response => { response.text() })
      .then(data => {
        sendGetAllUrlRequest()
      })
      .catch(error => console.error('Error:', error));
  }


  return (

    <div className="card flex flex-wrap justify-content-center ">

      <label>Shorten a long URL</label>
      <br />
      <br />
      <InputText id="longLink" placeholder="Enter long link here" value={longLink} onChange={(e) => setLongLink(e.target.value)} />
      <br />
      <br />
      <br />

      <div className="card flex flex-wrap justify-content-center gap-3">

        <label>Customize your link</label>
        <br />
        <br />
        <Dropdown placeholder="Select a URL template" style={{ marginRight: '10px' }} value={selectedLink} onChange={(e) => { setSelectedLink(e.value); }} options={links} optionLabel="name" className="w-full md:w-14rem" />
        <InputText id="alias" placeholder="Enter alias" value={alias} onChange={(e) => setAlias(e.target.value)} />
      </div>

      <div className="card flex flex-wrap justify-content-center gap-3">
        <Button onClick={sendCreateShortUrlRequest} className="button-spacing">Create Shorten URL</Button>
        <Button onClick={sendGetAllUrlRequest}>Get All Shorten URL</Button>
      </div>

      <br></br>

      <div>
        <DataTable value={data}>
          <Column field="id" header="ID"></Column>
          <Column field="shortUrl" header="SHORT URL"></Column>
          <Column field="longUrl" header="LONG URL"></Column>
        </DataTable>
      </div>

    </div>
  )
}

export default App
