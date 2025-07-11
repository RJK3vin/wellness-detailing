import Link from "next/link";

type BlogNavSliderProps = {
  currentIndex: number;
};

const blogRoutes = [
  { path: "/mobile-detailing-future-car-care-2", title: "6 Reasons Why Mobile Detailing is the Future of Car Care" },
  { path: "/essential-car-wash-benefits", title: "Why Regular Car Washes are Essential for Maintaining Your Car's Health" },
  { path: "/interior-car-cleaning-benefits-4", title: "Can Interior Car Cleaning Remove Stains and Odors?" },
  { path: "/auto-detailing-inclusive-services", title: "What Does Auto Detailing Include?" },
  { path: "/professional-detailing-tips-2", title: "7 Professional Detailing Tips to Keep Your Car Looking New" },
  { path: "/mobile-car-wash-benefits-4", title: "Mobile Car Wash: A Game-Changer in Preserving Your Car's Aesthetics and Value" },
  { path: "/interior-car-cleaning-benefits-3", title: "Can Interior Car Cleaning Remove Stains and Odors?" },
  { path: "/mobile-detailing-future-car-care", title: "6 Reasons Why Mobile Detailing is the Future of Car Care" },
];

const BlogNavSlider = ({ currentIndex }: BlogNavSliderProps) => {
  const prev = currentIndex > 0 ? blogRoutes[currentIndex - 1] : null;
  const next = currentIndex < blogRoutes.length - 1 ? blogRoutes[currentIndex + 1] : null;

  return (
    <div className="mt-6 border-t border-gray-200 pt-4 mb-4 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center text-base font-medium text-gray-800">
      {prev ? (
        <Link href={prev.path} className="hover:text-blue-600 transition-colors duration-200">
          ← Previous: {prev.title}
        </Link>
      ) : <div />}

      {next ? (
        <Link href={next.path} className="hover:text-blue-600 transition-colors duration-200 text-right sm:ml-auto">
          Next: {next.title} →
        </Link>
      ) : <div />}
    </div>
  );
};

export default BlogNavSlider;

