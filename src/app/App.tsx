import React from 'react';
import MainPage from '../pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};

export default App;