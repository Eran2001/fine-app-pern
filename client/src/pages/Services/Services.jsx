import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is in view
      }
    );

    fadeInElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-[]">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 home"></h1>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Fine.lk</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <style>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
          .fade-in {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }
          .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
        </head>
        <body className="bg-white text-gray-800">
          <div className="container mx-auto px-4 py-8">
            {/* Fine.lk Section */}
            <div className="text-center mb-16 fade-in">
              <h3 className="text-7xl font-extrabold mb-4 mt-2 text-blue-600 tracking-wide text-align: center">
                Fine.lk
              </h3>
              <h3 className="text-3xl italic  mb-6 ">Clear Fine, Save Time</h3>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-700">
                Fine.lk simplifies the process of managing traffic fines for
                citizens, officers, and post offices. Pay, report, and resolve
                issues conveniently while staying informed with real-time
                updates.
              </p>
            </div>

            {/* Citizens Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 fade-in">
              <div className="fade-in-left">
                <h3 className="text-2xl font-bold mb-4">Citizens</h3>
                <p className="text-lg mb-4">
                  For individuals, Fine.lk offers an intuitive system to manage
                  traffic fines. Users can easily pay fines online through
                  secure payment gateways or offline at partnered post offices,
                  ensuring inclusivity for all. The platform also features an
                  Online Report service, allowing users to file disputes or
                  report issues like lost fine slips, incorrect charges, or
                  grievances, all from the comfort of their homes. Additionally,
                  users can access Traffic Alerts, providing real-time updates
                  on road conditions, congestion, and safety notifications to
                  improve their travel experience.
                </p>
              </div>
              <div>
                <img
                  src="city.jpg"
                  alt="Luxurious hotel lobby with elegant decor and chandeliers"
                  width="600"
                  height="800"
                />
              </div>
            </div>

            {/* Police Offices Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 fade-in">
              <div>
                <img
                  src="po.png"
                  alt="Bustling street in Colombo with shops and people"
                  width="600"
                  height="800"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Police Offices</h3>
                <p className="text-lg">
                  For law enforcement officers, Fine.lk provides tools to issue
                  fines digitally, track payment statuses, and monitor
                  compliance through a centralized dashboard. Officers can also
                  manage dispute resolutions efficiently and generate analytical
                  reports to gain insights into trends and improve operations.
                </p>
              </div>
            </div>

            {/* Post Office Section */}
            <div className="grid md:grid-cols-2 gap-8 fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-4">Post Office</h3>
                <p className="text-lg">
                  For post office officials, the platform streamlines offline
                  payment processing by enabling easy verification of fine
                  details and real-time synchronization of payment data with the
                  central system. Receipts are generated instantly, ensuring
                  accuracy and reducing manual errors.
                </p>
              </div>
              <div>
                <img
                  src="post.png"
                  alt="Elegant dining area with beautifully set tables and ambient lighting"
                  width="600"
                  height="800"
                />
              </div>
            </div>
          </div>
        </body>
      </html>
      <Footer />
    </div>
  );
};

export default Services;
