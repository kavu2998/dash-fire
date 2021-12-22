import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import itemReducer from './utilities/itemReducer';
import thunk from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Card from "./components/Card";

const rootReducer = combineReducers({itemReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))


function App() {
  return (
    <Router>
      <Provider store = {store}>
        <ToastContainer position="top-right" />
        <Header /> 
        <Routes>
         <Route path="/" element = {<Card />} /> 
         <Route path="/add" element={<AddItem />} />
         <Route path="/edit/:id" element={<AddItem />} /> 
       </Routes> 

      </Provider>
    </Router>
  );
}

export default App;
