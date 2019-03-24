import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { Route } from 'react-router-dom';
import AboutUs from './components/aboutUs/AboutUs';
import CartContainer from './components/cart/CartContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className= 'content'>    
                
            
          <Header />         
          <div style={{width:'1100px', margin:'0 auto'}}>                   
            <Route exact path="/" component={Sidebar}/>
            <Route exact path="/aboutus" component={AboutUs}/>
            <Route  path="/cart" component={CartContainer}/>            
          </div>
        </div>           
        <Footer />               
      </div>
    )
  }
}

export default App;
