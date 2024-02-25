import React from 'react';
import styles from './App.module.css';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.tsx';
import LoginPage from '../../pages/LoginPage/LoginPage.tsx';

const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
