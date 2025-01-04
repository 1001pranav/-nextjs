// import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';
//
// type LayoutProps = Required<Pick<NextPage, 'children'>>

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <Head>
        <title>Rinseable</title>
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
