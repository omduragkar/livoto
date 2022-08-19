
import { Box, CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import BottomNavigationBar from './components/nav/BottomNavigation';
import Header from './components/nav/Header';
import Home from './pages/Home';
import Houses from './pages/Houses';
import { dFlex } from './theme/commonStyles';

function App() {
  
  return (
    <>
      <CssBaseline/>
      <Box sx={{
        ...dFlex,
        flexDirection:"column",
        height:"100vh"
      }}>
        <BrowserRouter>
          <Box>
            <Header/>
          </Box>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='space'>
                <Route path=":houseId" element={<Houses/>}/>
              </Route>
            </Route>
          </Routes>
          <Box sx={{ 
            ...dFlex,
            minHeight:50,
            borderTop:"1px solid #ddd",
            position:"relative",
            display:{
              xs:"block",
              md:"none"
            },
            backgroundColor:"transparent"
          }}>
            <BottomNavigationBar/>
          </Box>
          
        </BrowserRouter>
      </Box>
      
    </>

  );
}

export default App;
