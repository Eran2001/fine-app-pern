import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Traffic = () => {
  return (
    <div className="font-sans relative z-10 bg-[#fff]">
      <Navbar />
      {/* Header Section */}
      <div className="relative">
        <img
          alt="Road with trees and a network of orange lines and dots"
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
          src="/traffic.jpg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Traffic Alerts</h1>
          {/* <p className="text-lg mt-2">CONVENIENT. SIMPLE TO USE. PEACE OF MIND.</p> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 sm:px-8 lg:px-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Traffic Alerts Details
        </h3>
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
          The payCity website and app give you an easy and convenient way to view and make payment for your traffic fines online.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
          payCity accesses fine information for fines issued against the CPA (Criminal Procedures Act) as well as fines issued against the AARTO (Administrative Adjudication of Road Traffic Offences) Act.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
          The payCity website is a viewing and payment portal that allows offenders to view the full offence details and also view images and documents associated to the traffic fine where available.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-7">
          Payment for the traffic fine or infringement can then also be made either via credit / debit card or via instant EFT.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Traffic;
