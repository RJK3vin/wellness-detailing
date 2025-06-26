import Link from "next/link";

const blogData = [
  {
    date: "March 28, 2025",
    title: "6 Reasons Why Mobile Detailing is the Future of Car Care",
    to: "/blogs/blog-one",
  },
  {
    date: "March 26, 2025",
    title: "Why Regular Car Washes are Essential for Maintaining Your Car's Health",
    to: "/blogs/blog-two",
  },
  {
    date: "March 24, 2025",
    title: "Can Interior Car Cleaning Remove Stains and Odors?",
    to: "/blogs/blog-three",
  },
  {
    date: "March 24, 2025",
    title: "What Does Auto Detailing Include?",
    to: "/blogs/blog-four",
  },
  {
    date: "March 21, 2025",
    title: "7 Professional Detailing Tips to Keep Your Car Looking New",
    to: "/blogs/blog-five",
  },
  {
    date: "March 17, 2025",
    title: "Mobile Car Wash: A Game-Changer in Preserving Your Car's Aesthetics and Value",
    to: "/blogs/blog-six",
  },
  {
    date: "March 13, 2025",
    title: "Can Interior Car Cleaning Remove Stains and Odors?",
    to: "/blogs/blog-seven",
  },
  {
    date: "March 11, 2025",
    title: "6 Reasons Why Mobile Detailing is the Future of Car Care",
    to: "/blogs/blog-eight",
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

