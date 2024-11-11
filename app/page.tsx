

import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function Home({  }) {
  const { accessToken } = await getAccessToken();

 
  return (
    <>
   
      <div className="mt-16">
   
            <h3 className="text-3xl font-semibold text-gray-800">Welcome to my project</h3>
            <p className="mt-4 text-gray-600">
             คลิกเพื่อเข้าสู่เกม XO
            </p>
            <a href="/game" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Start
            </a>
          </div>
      </>
  );
};

