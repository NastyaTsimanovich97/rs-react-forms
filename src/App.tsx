import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import UncontrolledForm from './components/UncontrolledForm';
import Main from './components/Main';
import HookForm from './components/HookForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="uncontrolled-form" element={<UncontrolledForm />} />
        <Route path="hook-form" element={<HookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
