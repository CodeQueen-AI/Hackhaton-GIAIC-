
const reviewsData = [
    {
      text: "Sarah M.",
      description:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      date: "2024-12-05",
    },
    {
      text: "Alex K.",
      description:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      date: "2024-12-04",
    },
    {
      text: "James L.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      date: "2024-12-03",
    },
    {
      text: "Emily R.",
      description:
        "The customer service at Shop.co is top-notch! They were incredibly helpful in assisting me with my order. I will definitely be returning for more shopping.",
      date: "2024-12-02",
    },
    {
      text: "Michael T.",
      description:
        "I appreciate how Shop.co prioritizes quality without compromising on affordability. Their collection is a breath of fresh air in the fashion world.",
      date: "2024-12-01",
    },
    {
      text: "Olivia P.",
      description:
        "Shop.co has completely revolutionized my shopping experience. Their user-friendly platform, coupled with amazing products, makes for an unbeatable combo!",
      date: "2024-11-30",
    },
  ];
  
  export default function Reviews() {
    return (
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Customer Reviews</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
            >
              <h2 className="text-lg font-semibold text-blue-600">{review.text}</h2>
              <p className="text-gray-600 mt-2">{review.description}</p>
              <p className="text-sm text-gray-500 mt-4">Reviewed on {review.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  