import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import ClassesPage from './Components/ServicesPage/ClassesPage/ClassesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/classes' element={<ClassesPage />} />
      </Routes>
    </BrowserRouter>
  );
}