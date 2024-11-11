// pages/index.tsx
"use client";

import { useEffect } from 'react';


const Home: React.FC =async () => {

  return (
    <>

      <h2 className="text-2xl font-bold">Welcome to Tic Tac Toe!</h2>
      <p className="mt-4">This is a simple Tic Tac Toe game built with Next.js and TypeScript.</p>
      </>
  );
};

export default Home;