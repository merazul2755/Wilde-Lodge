
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFount/NotFound';
import SignUp from './components/SignUp/SignUp';
import useServices from './hooks/useService';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Thanks from './components/Thanks/Thanks';

function App() {
  const [service] = useServices();
  return (
    <div>
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route
          path="/checkout/:checkout"
          element={<CheckOut service={service}></CheckOut>}
        ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/thanks' element={<Thanks></Thanks>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
