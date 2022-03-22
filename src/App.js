import logo from './logo.svg';
import { createClient } from '@supabase/supabase-js'
import Auth from './components/Auth';
import Account from './pages/Account';
import Display from './components/Display';
import './boxicons/css/boxicons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Blank from './pages/Blank';
import Contact from './pages/Contact';
import Start from './pages/Start';
import FAQ from './pages/FAQ';
import Add from './pages/Add';

import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<AppLayout />}>
                  <Route index element={<Blank />} />
                  <Route path='/start' element={<Start />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/faq' element={<FAQ />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
