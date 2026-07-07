import "./assets/css/style.css"
import AuthProvider from "./AuthProvider";
import DashBoard from "./components/dashboard/DashBoard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<PublicRoute> <Register/> </PublicRoute> } />
          <Route path="/login" element={ <PublicRoute> <Login/> </PublicRoute> } />
          <Route path="/dashboard" element = { <PrivateRoute><DashBoard/></PrivateRoute>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
