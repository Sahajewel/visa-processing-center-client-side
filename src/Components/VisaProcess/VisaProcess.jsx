import React from 'react';

const VisaProcessSteps = () => {
  const steps = [
    {
      title: 'Step 1: Choose Your Visa Type',
      description: 'Select the type of visa you need based on your travel purpose (e.g., tourist, work, student).',
      icon: '🌍',
    },
    {
      title: 'Step 2: Submit Your Documents',
      description: 'Upload the required documents like your passport, photos, and supporting documents.',
      icon: '📑',
    },
    {
      title: 'Step 3: Application Processing',
      description: 'Our experts will review your application and process it quickly and efficiently.',
      icon: '⚙️',
    },
    {
      title: 'Step 4: Receive Your Visa',
      description: 'Once approved, your visa will be sent to you, ready for your journey!',
      icon: '✈️',
    },
  ];

  return (
    <div className="bg-gray-400 py-10 w-10/12 mx-auto my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white py-8 text-center mb-8">
          Our Simple 4-Step Visa Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl text-indigo-600 mb-4 text-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaProcessSteps;
