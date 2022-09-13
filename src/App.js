import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRouter from './components/ProtectedRouter';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRouter>
                <Account />
              </ProtectedRouter>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
