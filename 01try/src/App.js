// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Content from'./Content';
import Footer from './Footer';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';


  

function App() {
   //you can create variables that dont get rturned
  const name = "John Doe";
  return (
    <div className="App">
     <Header />
     {/* <Content /> */}
     {/* <About /> */}
    <Form />
     <Footer />

        {/* you can  make stuff to strings immediatly by encolising them in an {} */}
        {/* Java script expresions use {}*/}
      
     
    </div>
  );
}

export default App;
