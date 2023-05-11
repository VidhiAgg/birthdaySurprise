
import './App.css';
import MainPage from './pages/MainPage';
import {BirthdayContextProvider} from './Context/BirthdayContext';
import { NavLink, Route, Routes } from 'react-router-dom';
import MessagePage from './pages/MessagePage';
import NotFound from './pages/NotFound';

 export const  App = ()=> {
  return (
    <div className="App">
      <BirthdayContextProvider>
     
     <Routes>
      <Route path="/" element={<MainPage />} ></Route>
      <Route path = "/message" element={<MessagePage/>} ></Route>
      {/* <Route path = "/*" element={<NotFound/>}/> */}
     </Routes>
      </BirthdayContextProvider>
     
    </div>
  );
}


