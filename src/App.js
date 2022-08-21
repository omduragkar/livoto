
import { Box, CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import BottomNavigationBar from './components/nav/BottomNavigation';
import Auth from './pages/Auth';
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
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='space'>
                <Route path=":houseId" element={<Houses/>}/>
              </Route>
              <Route path="auth">
                <Route path="login" element={<Auth login={true}/>}/>
                <Route path="signup" element={<Auth login={false}/>}/>
              </Route>
            </Route>
          </Routes>
          <Box sx={{ 
            ...dFlex,
            height:68,
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
