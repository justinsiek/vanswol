'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import FeaturedCollections from './components/FeaturedCollections';
import Anticipation from './components/Anticipation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandStory />
      <FeaturedCollections />
      <Anticipation />
      <Footer />
    </main>
  );
}