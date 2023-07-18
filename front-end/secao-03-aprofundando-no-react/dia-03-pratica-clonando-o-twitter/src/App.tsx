import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Profile from './pages/profile';
import Layout from './components/layout';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={ <Layout handleDarkMode={ handleDarkMode } darkMode={ darkMode } /> }
      >
        <Route index element={ <Home /> } />
        <Route path="/profile/:username" element={ <Profile /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
