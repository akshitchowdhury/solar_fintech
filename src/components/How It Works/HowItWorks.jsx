import React from 'react';
import Industry from './Industry/Industry';

const HowItWorks = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section for Investors */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works for Investors</h2>
        <div className="flex flex-col lg:flex-col items-start">
          {/* Step-by-step guide */}
          {/* <div className="lg:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">Step-by-step Guide</h3>
            <ol className="list-decimal list-inside">
              <li className="mb-2">Sign up and create an account.</li>
              <li className="mb-2">Browse available microshare opportunities.</li>
              <li className="mb-2">Select the microshare you'd like to invest in.</li>
              <li className="mb-2">Complete the purchase process.</li>
              <li className="mb-2">Track your investments and returns through your dashboard.</li>
            </ol>
          </div> */}
          <Industry/>
          {/* Investment process */}
          <div className="lg:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">Investment Process</h3>
            <p className="mb-4">Our platform allows you to invest in solar projects easily and securely. You can expect potential returns based on the performance of the projects you invest in. However, as with any investment, there are risks involved, including the potential for loss of principal.</p>
            <p>Investments are diversified across multiple projects to minimize risk and maximize potential returns.</p>
          </div>
        </div>
        {/* Visual aids */}
        <div className="mt-8 flex justify-center">
          <img src="/images/investor-process-diagram.png" alt="Investment Process Diagram" className="w-full max-w-xl"/>
        </div>
      </section>

      {/* Section for Corporates */}
      <section className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works for Corporates</h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Benefits */}
          <div className="lg:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">Benefits of Installing Solar Panels</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">Reduce electricity costs and carbon footprint.</li>
              <li className="mb-2">Enhance corporate sustainability initiatives.</li>
              <li className="mb-2">Potential tax incentives and rebates.</li>
              <li className="mb-2">Increase property value.</li>
            </ul>
          </div>
          {/* Installation process */}
          <div className="lg:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">Steps to Partner with Us</h3>
            <ol className="list-decimal list-inside">
              <li className="mb-2">Contact us for a consultation.</li>
              <li className="mb-2">Get a customized solar plan and quote.</li>
              <li className="mb-2">Approve the plan and schedule installation.</li>
              <li className="mb-2">Installation and setup of solar panels.</li>
              <li className="mb-2">Monitor performance and savings through our dashboard.</li>
            </ol>
          </div>
        </div>
        {/* Visual aids */}
        <div className="mt-8 flex justify-center">
          <img src="/images/corporate-process-flowchart.png" alt="Corporate Process Flowchart" className="w-full max-w-xl"/>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
