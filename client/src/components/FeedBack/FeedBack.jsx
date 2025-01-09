const FeedBack = () => {
  return (
    <div className="bg-[#070250] p-20">
      <div className="container mx-auto pb-10 px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-20 text-[#fff]">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-20 mb-20">
          {/* Feedback Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-20 max-w-sm feed border dark:border-[#00e3dc] shadow-[#00e3dc]">
            <p className="text-gray-600 italic mb-4">
              The service was exceptional, and the team was incredibly helpful
              and professional.
            </p>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full border-2 border-red-500"
                src="https://via.placeholder.com/150"
                alt="Client 1"
              />
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
          </div>
          {/* Feedback Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-20 max-w-sm feed border dark:border-[#00e3dc] shadow-[#00e3dc]">
            <p className="text-gray-600 italic mb-4">
              I highly recommend their services. They exceeded all my
              expectations!
            </p>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full border-2 border-red-500"
                src="https://via.placeholder.com/150"
                alt="Client 2"
              />
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Jane Smith</h4>
                <p className="text-sm text-gray-500">Designer, ArtStudio</p>
              </div>
            </div>
          </div>
          {/* Feedback Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-20 max-w-sm feed border dark:border-[#00e3dc] shadow-[#00e3dc]">
            <p className="text-gray-600 italic mb-4">
              A wonderful experience! Professional and timely in every aspect.
            </p>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full border-2 border-red-500"
                src="https://via.placeholder.com/150"
                alt="Client 3"
              />
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Emily Johnson</h4>
                <p className="text-sm text-gray-500">Manager, BizWorld</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
