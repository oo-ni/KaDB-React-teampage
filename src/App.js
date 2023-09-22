import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./pages/Layout.css"

import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;