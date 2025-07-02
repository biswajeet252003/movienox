import React, { useState, useEffect } from 'react';
import { seriesData } from '../../data/seriesData';
import SeriesGrid from '../SeriesGrid/SeriesGrid';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../../firebase';
import { FaTools } from 'react-icons/fa';
import './SeriesPage.css';

const MOBILE_WIDTH = 600;

const SeriesPage = () => {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= MOBILE_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const db = getDatabase(app);
    const maintenanceRef = ref(db, 'settings/seriesMaintenance');
    
    const unsubscribe = onValue(maintenanceRef, (snapshot) => {
      if (snapshot.exists()) {
        setIsMaintenance(snapshot.val().isMaintenance);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching maintenance status: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'white', fontSize: '24px' }}>
        Loading...
      </div>
    );
  }

  if (isMaintenance) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        padding: '20px',
        color: 'white',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          padding: isMobile ? '20px' : '40px',
          borderRadius: '15px',
          textAlign: 'center',
          maxWidth: '90vw',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <FaTools style={{
            fontSize: isMobile ? '3rem' : '5rem',
            color: '#38e7b0',
            marginBottom: '20px'
          }} />
          <h1 style={{
            fontSize: isMobile ? '1.5rem' : '2.5rem',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>We're Improving Our Series Section!</h1>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1.2rem',
            lineHeight: '1.6',
            color: '#e0e0e0',
            marginBottom: '10px'
          }}>
            To bring you more amazing content and a better experience, we're currently performing some essential updates.
          </p>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1.2rem',
            lineHeight: '1.6',
            color: '#e0e0e0',
            marginBottom: '25px'
          }}>
            We appreciate your patience and will be back online shortly.
          </p>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '10px 20px',
            borderRadius: '8px',
            display: 'inline-block',
            fontSize: isMobile ? '0.9rem' : '1.1rem'
          }}>
            Status: <strong>Work in Progress</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="series-page-container">
      <h1 className='text-3xl text-white font-bold m-4 text-center'>All Series</h1>
      <SeriesGrid series={seriesData} />
    </div>
  );
};

export default SeriesPage; 