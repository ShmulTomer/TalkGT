import './boxicons/css/boxicons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Start from './pages/Start';
import FAQ from './pages/FAQ';
import Add from './pages/Add';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<AppLayout />}>
                  <Route index element={<Dashboard />} />
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
