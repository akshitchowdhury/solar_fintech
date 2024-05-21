import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">About Solar Fintech</h1>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Empowering Users</h3>
              <p>Provide microshares to users, making solar energy investment accessible to everyone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Sustainable Energy</h3>
              <p>Promote sustainable energy solutions by offering affordable solar panel options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Corporate Partnerships</h3>
              <p>Collaborate with corporates to implement large-scale solar panel installations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Inclusive Investment</h3>
              <p>Enable fractional investments in solar projects to democratize energy ownership.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Innovative Financing</h3>
              <p>Develop fintech solutions that facilitate easy and transparent solar investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Sustainability Goals</h3>
              <p>Support global sustainability goals by reducing carbon footprints through solar energy.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
