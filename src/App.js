import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './pages/gallery/UsersList';
import Home from './pages/home/HomePage';
import NavBar from './pages/navbar';
import Buttons from './pages/btns/Buttons';
import CardPage from './pages/gallery/CardPage';
import Users from './components/Users';


function App() {
  return (
    <>

      <BrowserRouter>
      <NavBar/>
          <Routes>
          <Route path='/13' element={<Buttons/>}/>

          <Route path='/' element={<Home/>}/>

            <Route path='/users' element={<UsersList/>}/>
            <Route path='/users/:userID' element={<CardPage/>}/>

          </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
