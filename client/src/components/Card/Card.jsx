import { useNavigate } from "react-router-dom";
import "./Card.css"

const Card = () => {
  const navigate = useNavigate();

  return (
    <div className="flex p-20 space-x-20 justify-center bg-[#fff] mt-[-40px] mb-20">
      <div className="card-3 max-w-sm bg-white  border-gray-200 rounded-lg dark:bg-gray-800 dark:border-[#00e3dc] border-2 shadow-lg shadow-blue-500">
        <a href="#">
          <img
            className="pay-card pay-card1 rounded-t-lg"
            src="/payment.svg"
            alt=""
            width="90%"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pay a Fine
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#fff]">
            Discover how we create lon-term value by investing in emerging
            technologies and innovative solutions.
          </p>
          <button
            onClick={() => navigate("/fine")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#00e3dc] rounded-lg hover:bg-[#070250] border-2 border-[#00e3dc] hover:text-[#FFF]"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="card-3 max-w-sm bg-white  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-[#00e3dc] border-2 shadow-lg shadow-blue-500">
        <a href="#">
          <img
            className="pay-card rounded-t-lg pt-2"
            src="/report_new.svg"
            alt=""
            width="111%"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Online Report
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#fff]">
            Be a part of a global network committed to unlocking the potential
            of markets and driving sustainable growth.
          </p>
          <button
            onClick={() => navigate("/report")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#00e3dc] rounded-lg hover:bg-[#070250] border-2 border-[#00e3dc] hover:text-[#FFF]"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="card-3 max-w-sm bg-white  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-[#00e3dc] border-2 shadow-lg shadow-blue-500">
        <a href="#">
          <img
            className="pay-card rounded-t-lg pt-12"
            src="/new_al.svg"
            alt=""
            width="110%"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Traffic ALerts
            </h5>
          </a>
          <p className="btn-3 mb-3 font-normal text-[#fff]">
            Begin your investment journey with us and leverage our expertise to
            achieve your financial goals.
          </p>
          <button
            onClick={() => navigate("/traffic")}
            className="btn-3 mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#00e3dc] rounded-lg hover:bg-[#070250] border-2 border-[#00e3dc] hover:text-[#FFF]"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
