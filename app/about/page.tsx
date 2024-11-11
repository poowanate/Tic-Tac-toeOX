// pages/about.tsx

import React from 'react';


const About: React.FC = () => {
  return (
    <div>
   
      <main className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of passionate developers building cool stuff.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Section 1: Mission */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                We aim to create intuitive and innovative solutions for everyday problems.
              </p>
            </div>

            {/* Section 2: Vision */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
              <p className="mt-4 text-gray-600">
                To revolutionize the way people interact with technology through design and innovation.
              </p>
            </div>

            {/* Section 3: Values */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600">Our Values</h2>
              <p className="mt-4 text-gray-600">
                We believe in honesty, integrity, and the power of collaboration.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-gray-800">Join Our Team</h3>
            <p className="mt-4 text-gray-600">
              If you share our values and vision, we'd love to hear from you! Get in touch with us.
            </p>
            <a href="/contact" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
