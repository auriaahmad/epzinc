import React from 'react';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const industries = [
  { label: 'Medical Equipment', icon: <MedicalServicesIcon /> },
  { label: 'Government Hardware', icon: <AccountBalanceIcon /> },
  { label: 'Telecom Equipment', icon: <NetworkCheckIcon /> },
  { label: 'Aerospace and Defense', icon: <MilitaryTechIcon /> },
  { label: 'Electronics Equipment', icon: <DevicesOtherIcon /> },
  { label: 'Marine Equipment', icon: <DirectionsBoatIcon /> },
  { label: 'Food Equipment', icon: <RestaurantMenuIcon /> },
  { label: 'Agriculture Equipment', icon: <AgricultureIcon /> },
  { label: 'Oil & Gas Hardware', icon: <LocalGasStationIcon /> },
];

const IndustriesList = () => {
  return (
    <section className="w-full bg-white pb-16">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-4 text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-500">
          We provide top-notch services across various industries.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-screen-xl mx-auto px-4">
        {/* Vertical Dotted Line */}
        <div className="lg:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-dotted border-gray-300"></div>

        {/* Industry Items */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className="flex items-center">
                {/* Left Side Content */}
                <div className="w-1/2 flex justify-end pr-2">
                  {!isEven && (
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 max-w-full sm:max-w-sm">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {industry.label}
                      </h3>
                      {/* Optional: Add more details about the industry here */}
                    </div>
                  )}
                </div>

                {/* Icon on the Line */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-500 text-white shadow-lg">
                      {industry.icon}
                    </div>
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="w-1/2 flex justify-start pl-2">
                  {isEven && (
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 max-w-full sm:max-w-sm">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {industry.label}
                      </h3>
                      {/* Optional: Add more details about the industry here */}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesList;