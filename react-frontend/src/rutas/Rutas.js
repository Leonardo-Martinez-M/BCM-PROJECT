import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from '../pages/login';
import evidences from '../pages/evidences';
import newCase from '../pages/newCase';
import newEvidence from '../pages/newEvidence';
import newNote from '../pages/newNote';
import notes from '../pages/notes';
import homePage from '../pages/homePage';
import transactionCase from '../pages/transactionCase';
import newAplicantTransaction from '../pages/newAplicantTransaction';

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route exact path='/evidences' Component={evidences} />
        <Route exact path='/newEvidence' Component={newEvidence} />
        <Route exact path='/notes' Component={notes} />
        <Route exact path='/newNote' Component={newNote} />
        <Route exact path='/newCase' Component={newCase} />
        <Route exact path='/homePage'  element={homePage} />
        <Route exact path='/transactionCase' Component={transactionCase} />
        <Route exact path='/newAplicantTransaction' Component={newAplicantTransaction} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
