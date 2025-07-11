import Link from "next/link";

const blogData = [
  {
    date: "March 28, 2025",
    title: "6 Reasons Why Mobile Detailing is the Future of Car Care",
    to: "/mobile-detailing-future-car-care-2",
  },
  {
    date: "March 26, 2025",
    title: "Why Regular Car Washes are Essential for Maintaining Your Car's Health",
    to: "/essential-car-wash-benefits",
  },
  {
    date: "March 24, 2025",
    title: "Can Interior Car Cleaning Remove Stains and Odors?",
    to: "/interior-car-cleaning-benefits-4",
  },
  {
    date: "March 24, 2025",
    title: "What Does Auto Detailing Include?",
    to: "/auto-detailing-inclusive-services",
  },
  {
    date: "March 21, 2025",
    title: "7 Professional Detailing Tips to Keep Your Car Looking New",
    to: "/professional-detailing-tips-2",
  },
  {
    date: "March 17, 2025",
    title: "Mobile Car Wash: A Game-Changer in Preserving Your Car's Aesthetics and Value",
    to: "/mobile-car-wash-benefits-4",
  },
  {
    date: "March 13, 2025",
    title: "Can Interior Car Cleaning Remove Stains and Odors?",
    to: "/interior-car-cleaning-benefits-3",
  },
  {
    date: "March 11, 2025",
    title: "6 Reasons Why Mobile Detailing is the Future of Car Care",
    to: "/mobile-detailing-future-car-care",
  },
];

const Blogs = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((blog, index) => (
          <Link
            key={index}
            href={blog.to}
            className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
          >
            <p className="text-sm text-gray-200 mb-2">{blog.date} | By</p>
            <h3 className="font-semibold text-lg leading-snug">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

