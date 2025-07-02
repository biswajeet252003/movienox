import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollReveal.css';

const ScrollReveal = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`scroll-reveal ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollReveal; 