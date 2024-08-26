import React, { useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAppDispatch } from './redux/hooks';
import { initializeUser } from './redux/userSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(initializeUser(user));
    }
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TestPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;