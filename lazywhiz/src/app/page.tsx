import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Articles from '../components/home/Articles';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Services />
      <Articles />
      <Contact />
    </main>
  );
} 