import { StyledEngineProvider, ThemeProvider, createTheme, Paper, CssBaseline } from '@mui/material';
import './App.css';
import Body from './Body';
import Header from './Header';
import { useState,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#fffbeb",
          },
          divider: "#fde68a",
          background: {
            default: "#ffffff",
            paper: "#ffffff",
          },
          text: {
            primary: "#000",
            secondary: "#27272a",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#dbf4ff",
          },
          divider: "#004282",
          background: {
            default: "#000e21",
            paper: "#000e21",
          },
          text: {
            primary: "#fff",
            secondary: "#71717a",
          },
        }),
  },
});




function App() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state)=> state.theme.darkMode)
  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <div className='App' >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline /> 
          <Paper>
            <Header /> 
            <Body /> 
          </Paper>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
