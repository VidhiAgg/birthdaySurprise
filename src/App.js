
import './App.css';
import MainPage from './pages/MainPage';
import {BirthdayContextProvider} from './Context/BirthdayContext';
import {  Route, Routes } from 'react-router-dom';
import MessagePage from './pages/MessagePage';

 export const  App = ()=> {
  return (
    <div className="App">
      <BirthdayContextProvider>
     
     <Routes>
      <Route path="/" element={<MainPage />} ></Route>
      <Route path = "/message" element={<MessagePage/>} ></Route>

     </Routes>
      </BirthdayContextProvider>
     
    </div>
  );
}


