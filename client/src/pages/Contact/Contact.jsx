import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BASE_URL from '../../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
        alert("Message sent successfully!")
      } else {
        setStatus("Failed to send message. Please try again.");
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      setStatus("Error occurred while sending the message.");
      alert(error)
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 home"></h1>
      <section
        className="min-h-screen bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="mt-8 lg:w-1/2 lg:mx-auto">
              <div className="w-full mt-20 px-8 py-10 bg-white shadow-2xl rounded-xl dark:bg-[#070250]">
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                  Contact Form
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter Your Full Name"
                      className="block w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="block w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="block w-full px-4 py-2 border rounded-md"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
                {/* {status && <p className="mt-4 text-sm">{status}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
