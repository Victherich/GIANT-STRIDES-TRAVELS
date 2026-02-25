
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HotelsPage from './components/HotelsPage';
import HotelDetails from './components/HotelDetails';
import ToursPage from './components/ToursPage';
import TourDetail from './components/TourDetail';
import VisaAssistance from './components/VisaAssistance';
import AirportTransfers from './components/AirportTransfers';
import TravelInsurance from './components/TravelInsurance';
import FlightsPage from './components/FlightsPage';
import AdminLogin from './components/AdminLogin'
import AdminDashborad from './components/AdminDashborad'
import AdminProfile from './components/AdminProfile';
import AdminSignup from './components/AdminSignUp';
import PrivateAdminDashboard from './components/PrivateAdminDashboard'
import AdminForgotPassword from './components/AdminForgotPassword'
import VerifyEmail from './components/VerifyEmail'
import AdminResetPassword from './components/AdminResetPassword'
import AppUpdate from './components/AppUpdate';
import wp from './Images/whatsapplogo.png';


function App() {
  return (
   <BrowserRouter>
   <AppUpdate/>
   <ScrollToTop/>
<Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/hotels' element={<HotelsPage/>}/>
    <Route path='/hotel/:id' element={<HotelDetails/>}/>
    <Route path='/tours' element={<ToursPage/>}/>
    <Route path='/tour/:id' element={<TourDetail/>}/>
    <Route path='/visa-assistance' element={<VisaAssistance/>}/>
    <Route path='/airport-transfers' element={<AirportTransfers/>}/>
    <Route path='/travel-insurance' element={<TravelInsurance/>}/>
    <Route path='/flights' element={<FlightsPage/>}/>


     <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup/>}/>
        <Route path="/adminforgotpassword" element={<AdminForgotPassword />} />
        <Route path="/adminresetpassword/:token" element={<AdminResetPassword />} />
        <Route path="/admin" element={<PrivateAdminDashboard />}>
          <Route path="" element={<AdminDashborad />} />
        </Route>
        <Route path="/verify/:token" element={<VerifyEmail/>}/>

   </Routes>
    <a><img src={wp} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/23408143576329", "_blank")} /></a> 
   <Footer/>
   </BrowserRouter>
  );
}

export default App;



//db cred
//User “hudagiantstridet_db1” was added to the database “hudagiantstridet_db1”.
//pw : huda@2026