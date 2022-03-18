import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/banner'>
            <Banner></Banner>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
          <Route exact path='/courses'>
            <Courses></Courses>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
