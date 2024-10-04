import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageLimit=5;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageLimit} category="general"/>}/>
            <Route exact path="/business" element={<News key="business" pageSize={this.pageLimit} category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageLimit} category="entertainment"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={this.pageLimit} category="health"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={this.pageLimit} category="science"/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageLimit} category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageLimit} category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

