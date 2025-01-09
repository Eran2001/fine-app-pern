import "./UserReview.css"

const UserReviews = () => {
  const reviews = [
    {
      avatar: "https://via.placeholder.com/50",
      header: "John Doe",
      text: "This is an amazing service! Highly recommend it.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Jane Smith",
      text: "I had a great experience, the team was very professional.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Alice Johnson",
      text: "Incredible attention to detail, very satisfied!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Bob Brown",
      text: "Exceeded my expectations, fantastic work!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Carol White",
      text: "Reliable and efficient service, will use again.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "David Green",
      text: "They delivered everything on time, very impressed.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Ella Blue",
      text: "Amazing quality and fast delivery, great job!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Frank Black",
      text: "A seamless experience from start to finish.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Grace Pink",
      text: "Wonderful service, very attentive to my needs.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Henry Yellow",
      text: "Very professional and skilled team, highly recommended!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "John Doe",
      text: "This is an amazing service! Highly recommend it.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Jane Smith",
      text: "I had a great experience, the team was very professional.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Alice Johnson",
      text: "Incredible attention to detail, very satisfied!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Bob Brown",
      text: "Exceeded my expectations, fantastic work!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Carol White",
      text: "Reliable and efficient service, will use again.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "David Green",
      text: "They delivered everything on time, very impressed.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Ella Blue",
      text: "Amazing quality and fast delivery, great job!",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Frank Black",
      text: "A seamless experience from start to finish.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Grace Pink",
      text: "Wonderful service, very attentive to my needs.",
    },
    {
      avatar: "https://via.placeholder.com/50",
      header: "Henry Yellow",
      text: "Very professional and skilled team, highly recommended!",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#2934b1] p-20 div-animate">
      <div className="flex animate-scroll">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 flex-col items-center p-6 m-4 bg-white rounded-lg shadow-lg text-center w-70 div-animate-single"
          >
            <img
              src={review.avatar}
              alt={review.header}
              className="w-16 h-16 rounded-full mb-3 avatar-animate"
            />
            <h3 className="text-lg font-bold mb-2">{review.header}</h3>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
