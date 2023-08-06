'use client'
import "../globals.css";
import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEffect } from 'react';
import Head from "next/head";
const Header = dynamic(() => import("../../components/Header"), { ssr: false })
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })

interface IProps {
  children: ReactNode,
  session: any
}

export default function RootLayout({

  children,
  session
}: IProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="qIuNUBGmQ2EpiBUHYcmBJZdQjd4643hwJD2sSd98isk" />
        <title>Can Cook</title>
      </Head>
      <body>
        <div className="container-fluid">
          <div>
            <SessionProvider session={session}>
              <Header />
              {children}
              <Footer />
            </SessionProvider>
          </div >
        </div >
      </body >
    </html >
  )
}
