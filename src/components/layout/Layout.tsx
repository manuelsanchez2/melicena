import ContactSection from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import FastMarquee from '@/components/marquee/Marquee';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <FastMarquee />
      <Header />

      <main>
        {children}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
