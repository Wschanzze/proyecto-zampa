'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingPill from '@/components/home/FloatingPill';
import CheeseBoard from '@/components/cheese-board/CheeseBoard';

export default function TablaDeQuesosPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#2A2421]">
      <Header />
      <CheeseBoard />
      <Footer />
      <FloatingPill />
    </div>
  );
}

