import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ModeToggle } from './components/mode-toggle';
import NavBar from './components/nav-bar';
import { ThemeProvider } from './components/theme-provider';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ModeToggle />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
