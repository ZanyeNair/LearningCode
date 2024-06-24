
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import APItest from './APItest';
import { Provider } from 'react-redux';
import CakeContainer from './CakeContainer';
import HooksCakeContainer from './HooksCakeContainer';
import IceContainer from './IceContainer';
import SmoothieContainer from './smoothieContainer';


// import Counter from './features/Counting/Counter';
// import store from './app/store';


function App() {
  return (
    <div>

{/* 
      <Header />
      <Content />
      <APItest />

      <Footer/> */}
      <HooksCakeContainer />
      <CakeContainer />
      {/* <IceContainer /> */}
      {/* <smoothieContainer /> */}


    </div>
  );
}

export default App;
