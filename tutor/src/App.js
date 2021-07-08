import React from 'react'
import "./App.css";
import useSticky from './hooks/useSticky';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/Signup';



export const App = () => {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky}/>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/about'>
        <About element={element}/>
      </Route>

      <Route path='/contact'>
        <Contact/>
      </Route>

      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/signup'>
        <SignUp/>
      </Route>
    </>
  )
}

export default App;
