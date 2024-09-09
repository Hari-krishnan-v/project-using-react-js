
import React, { useState } from 'react';
import Header from '../header/Header';
import Sheet from '../sidebar-sheet/Sheet'; 
import MainContent from './home-parts/HomeContent';
import Footer from '../footer/Footer';

export const UserHome = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={() => setSheetOpen(!isSheetOpen)} />
      <div className="flex flex-1">
        
        <MainContent />
      </div>
      <Footer />
      <Sheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} /> 
    </div>
  );
};
export default UserHome;