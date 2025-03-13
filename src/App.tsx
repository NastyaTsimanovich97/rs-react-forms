import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import UncontrolledForm from './components/UncontrolledForm';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="uncontrolled-form" element={<UncontrolledForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
