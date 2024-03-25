
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import './App.css'
import Navbar from './components/NavBar'
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from "@mui/material";
import  DefaultTheme  from "./ui/DefaultTheme";
import ResponsiveDrawer from "./components/LeftDrawer";
import Footer from "./ui/Footer";


function App() {


  return (
    <ThemeProvider theme={DefaultTheme}>
   
    <Router>
          
      <div>
        <Link to="/">
          <img src="https://i.pinimg.com/originals/9e/68/6f/9e686ff5abd85987d374a11dfa5e28ec.png" alt="Logo" style={{ height: 350 }} />
        </Link>
      </div>
      <ResponsiveDrawer />  
       <AppRoutes />
        <Footer />

    </Router>
 
    </ThemeProvider>
  )
}

export default App;
