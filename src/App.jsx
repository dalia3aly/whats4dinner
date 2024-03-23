
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
          <img src="./src/assets/Logo.png" alt="Logo" style={{ height: 350 }} />
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
