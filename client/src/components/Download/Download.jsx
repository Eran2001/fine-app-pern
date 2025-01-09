import "./Download.css";

const Download = () => {
  return (
    <div>
      <div className="bg-[#fff] pb-10 main-download">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mt-10 mb-3 text-[#2934b1]">Download our Fine.lk app</h3>
            <p className="text-[#2934b1]">Stay fit. All day, every day.</p>
            <div className="flex justify-center my-10">
              <div className="border-color flex items-center border w-52 rounded-lg px-4 py-2 mx-2 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  alt="Google Play Icon"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-[#2934b1]">Download on</p>
                  <p className="text-sm md:text-base text-[#2934b1]">Google Play Store</p>
                </div>
              </div>
              <div className="border-color flex items-center border w-52 rounded-lg px-4 py-2 mx-2 cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  alt="Apple Store Icon"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-[#2934b1]">Download on</p>
                  <p className="text-sm md:text-base text-[#2934b1]">Apple Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
