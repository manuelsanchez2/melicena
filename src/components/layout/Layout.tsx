import ContactSection from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import FastMarquee from '@/components/marquee/Marquee';
import * as React from 'react';

export default function Layout({
  children,
  marqueeData,
}: {
  children: React.ReactNode;
  marqueeData?: any;
}) {
  return (
    <>
      <FastMarquee data={marqueeData} />
      <Header />

      <main>
        {children}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
