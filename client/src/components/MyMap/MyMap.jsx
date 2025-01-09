
const containerStyle = {
  width: "100%",
  height: "700px",
  backgroundColor: "#0438e4",
  position: "relative",
};

function MyMap() {
  return (
    <div className="myMap flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="shadow-lg rounded-lg overflow-hidden w-[90%] max-w-[1500px] h-[700px] mx-auto" style={containerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.8039219457!2d79.81500585318638!3d6.92192208483755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1735886943401!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default MyMap;