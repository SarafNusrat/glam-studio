import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import CheckOut from './Pages/Shared/CheckOut/CheckOut';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App">
       <Header>
       </Header>
       <Routes>
         <Route path='/' element = {<Home></Home>}></Route>
         <Route path='/services' element = {<Services></Services>}></Route>
         <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
         <Route path='/about' element = {<About></About>}></Route>
         <Route path='/login' element = {<Login></Login>}></Route>
         <Route path='/register' element = {<Registration></Registration>}></Route>
         <Route path='/checkOut' element = {<CheckOut></CheckOut>}></Route>
         <Route path='*' element = {<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
