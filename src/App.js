
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
<Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
