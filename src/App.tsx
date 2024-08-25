import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import { GlobalStyle } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
