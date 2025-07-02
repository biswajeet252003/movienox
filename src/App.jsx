import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
// import MovieList from './components/MovieList/MovieList';
import MovieGrid from './components/MovieGrid/MovieGrid';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';
import ScrollToTop from './components/ScrollToTop';
import SeriesPage from './components/SeriesPage/SeriesPage';
import SeriesDetailPage from './components/SeriesDetailPage/SeriesDetailPage';
import GenresPage from './components/GenresPage/GenresPage';
import GenreMovieListPage from './components/GenreMovieListPage/GenreMovieListPage';
import AboutUs from './components/AboutUs/AboutUs';
import RequestForm from './components/MovieRequest/RequestForm';
import RequestHistory from './components/MovieRequest/RequestHistory';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';
import { UserContext } from './components/Navbar/UserContext';
import AdminDashboard from './components/AdminDashboard';
import LinkProtector from './components/DownloadPage/LinkProtector';

function HomePage() {
  return (
    <>
      <Hero />
      <MovieGrid />
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{color:'#fff',textAlign:'center',marginTop:'100px'}}>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser, showLogin, setShowLogin }}>
      {location.pathname !== '/admin/dashboard' && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/request" element={user ? <RequestForm /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/requests" element={user ? <RequestHistory /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/movie/:movieId" element={user ? <MovieDetailPage /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/series" element={user ? <SeriesPage /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/series/:seriesId" element={user ? <SeriesDetailPage /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/genres" element={user ? <GenresPage /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/genre/:genreName" element={user ? <GenreMovieListPage /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/download/:movieId" element={user ? <LinkProtector /> : <Navigate to="/" state={{ from: location, error: 'login-required' }} replace />} />
      </Routes>
      {location.pathname !== '/admin/dashboard' && <Footer />}
    </UserContext.Provider>
  )
}

export default App
