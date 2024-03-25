import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import ClassesPage from './Components/ServicesPage/ClassesPage/ClassesPage';
import EventsPage from './Components/ServicesPage/EventsPage/EventsPage';
import StudioPage from './Components/ServicesPage/StudioPage/StudioPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/classes' element={<ClassesPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/studio-access' element={<StudioPage />} />
      </Routes>
    </BrowserRouter>
  );
}