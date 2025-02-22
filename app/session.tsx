"use client"
import { SessionProvider } from "next-auth/react";

import React from 'react'
// import { getSession } from 'next-auth/react';

export const Session = async({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return <SessionProvider>
   
    {children}
  </SessionProvider>
}

// export default Providers 