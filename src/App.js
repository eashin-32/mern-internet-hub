import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import BookService from './Components/Dashboard/BookService/BookService';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';

export const userContext = createContext();
export const productContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
        name: '',
        email: '',
        avatar: '',
        
  })

  const [selectedProduct, setSelectedProduct] = useState({title: '', price:''})
  
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <productContext.Provider value={[setSelectedProduct, selectedProduct]}>
          <Router>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <PrivateRoute path='/dashboard'>
                    <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path='/dash/booking'>
                  <BookService></BookService>
                </PrivateRoute>
                <PrivateRoute path='/dash/booking-list'>
                  <BookingList></BookingList>
                </PrivateRoute>
                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
                
              </Switch>
          </Router>
          </productContext.Provider>
    </userContext.Provider>
  );
}

export default App;
