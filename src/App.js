import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Read from './components/read';
import Content from './components/content';
import Create from './components/create';
import Navigation_Bar from './components/navigation';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './components/edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation_Bar />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
