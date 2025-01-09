import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const PostOffices = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-20 home">
        Welcome Post Office
      </h1>
      <button
        className="block w-1/4 mx-auto mt-10 mb-20 bg-[#0438e4] hover:bg-[#070250] text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/post-office-login")}
      >
        Post Office Login
      </button>
      <Footer />
    </div>
  );
};

export default PostOffices;
