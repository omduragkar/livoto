
import { Box, CssBaseline } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import BottomNavigationBar from './components/nav/BottomNavigation';
import { CUSTOMERS, DASHBOARD, MESSAGES, PROPERTIES, TICKETS, TRANSACTIONS } from './constants/navConstantsAdmin';
import Dashboard from './pages/admin/Dashboard';
import Auth from './pages/users/Auth';
import Home from './pages/users/Home';
import Houses from './pages/users/Houses';
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
              <Route path='user'>
                <Route path='space'>
                  <Route path=":houseId" element={<Houses/>}/>
                </Route>
                <Route path="auth">
                  <Route path="login" element={<Auth admin={false} login={true}/>}/>
                  <Route path="signup" element={<Auth admin={false} login={false}/>}/>
                </Route>
              </Route>
              <Route path="admin">
                <Route path="login" element={<Auth admin={true} login={true}/>}/>
                <Route path="dashboard" element={<Dashboard data={DASHBOARD}/>}/>
                <Route path="tickets" element={<Dashboard data={TICKETS}/>}/>
                <Route path="properties" element={<Dashboard data={PROPERTIES}/>}/>
                <Route path="messages" element={<Dashboard data={MESSAGES}/>}/>
                <Route path="transactions" element={<Dashboard data={TRANSACTIONS}/>}/>
                <Route path="customers" element={<Dashboard data={CUSTOMERS}/>}/>
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
