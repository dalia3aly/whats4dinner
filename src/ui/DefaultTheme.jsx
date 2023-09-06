import { createTheme } from "@mui/material/styles";


 const DefaultTheme = createTheme({
  palette: {
    primary: { 
        main: "#214D4C", 
        contrastText: "#efefef" 
    },
    secondary: { main: "#b24d2c", contrastText: "#ffffff" },
  },
  typography: {
    fontFamily: ["Roboto",
    "Helvetica Neue",
    "Arial"],
    fontSize: 14,
    color: "#FFFFFF",
    h1: { fontSize: 30 },
  },
  shape: { 
    borderRadius: 0 
  },
  components: {
    MuiAppBar: {
        styleOverrides: {
            color: "#FFFFFF",
            height: 64,
            backgroundColor: "#214D4C",
            boxShadow: "none",

        },
    },
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },

    MuiButton: { 
    styleOverrides: {
        root: {
          borderRadius: '12px',
          height: '50px',  // set height
          width: '100px',  // set width
          fontSize: '18px', // set font size
        },
    },

        
    },
    MuiTextField: { 
        defaultProps: { 
            variant: "filled" 
        } 
    },


    MuiDrawer: {
        styleOverrides: {
            paper: {
                backgroundColor: "#214D4C",
                color: "#FFFFFF",
                width: 150,
                textAlign: "left",
                display: "fixed",
                padding: "20px",
                fontSize: "16",

            },
          },
        },
    
  },
});

export default DefaultTheme;