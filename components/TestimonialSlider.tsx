'use client'

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Sandi Rosenberg',
    date: '2025-06',
    text: "I am so happy with the excellent job that Wellness Detailing did on my car. The attention to every detail and the enthusiasm that they showed made the experience a fabulous one! I would highly recommend Wellness Detailing to anyone who wants the beauty of their car to shine!"
  },
   {
    name: 'Susan Bellamy',
    date: '2025-06',
    text: "Very impressed with David's knowledge and passion for car detailing. I highly recommend getting a detail with Wellness Detailing!"
  },
   {
    name: 'Angelina Sin',
    date: '2025-03',
    text: "I had my car detailed by Wellness Detailing, and it looks brand new! The attention to detail was amazing—inside and out. My car feels fresh, clean, and well taken care of. Highly recommend!"
  },
  {
    name: 'Saul Stern',
    date: '2025-01',
    text: "I have been unable to keep car clean. To most it would not look dirty. Nonetheless, I needed a couple of areas polished and they were able to detail inside and out while car was in garage. The Shadow Black Car looks great. GREAT JOB !!!",
  },
  {
    name: 'Maliha Nuzhat',
    date: '2025-01',
    text: "Wellness Detailing exceeded every expectation I had for a car detailing service. From the moment I scheduled my appointment to the second I drove away, Isaiah and David delivered a level of professionalism, care, and attention to detail that is truly unmatched. The transformation is stunning. The exterior is spotless with no trace of the dirt, grime, and water spots. The interior, though, is where I was completely blown away. Every single crevice, seat, mat, and surface was meticulously cleaned and restored. Stains I thought were permanent? Gone. Dust and crumbs in impossible places? Completely wiped out. The leather feels fresh and soft, and the car smells brand new — not overpowering, just clean and refreshing. It's clear that Isaiah and David don't just clean cars; they elevate them, treating every inch with the care and precision of true professionals. What really sets Wellness Detailing apart, though, is the experience they provide. Isaiah and David were not only efficient and knowledgeable, but also genuinely friendly and passionate about what they do. They took the time to explain the process, answer my questions, and make sure I felt taken care of. You can tell they take pride in their work and care about their customers' satisfaction. This is not just a get it done and move on operation.  It's a personalized, quality service from people who truly care about the results. I've tried other car detailing services in the past, and none of them come close to what Wellness Detailing delivered. If you want to fall back in love with your vehicle, Wellness Detailing is the only place you need to call. I am beyond satisfied and will absolutely be returning for future services. Thank you, Isaiah and David, for bringing my car back to life. I can't stop staring at it, and I'm already recommending you to everyone I know. I can't wait to book my next appointment!",
  },
  {
    name: 'Gary Shark',
    date: '2025-01',
    text: "David did a great job remediating a smoke/odor issue in my daughter's car. I will be engaging David in the overall detailing of all my vehicles. I do not see how I could find a better resource to supply my detailing needs.",
  },
  {
    name: 'Birtina Clayburn',
    date: '2024-11',
    text: "David and his team were wonderful. They did an awesome job on my car. I would recommend them to my family and friends. Very reasonable prices and great attitudes! Thank you so much. I'll definitely be a repeat customer."
  },
  {
    name: 'Gail Vong',
    date: '2024-10',
    text: "I had an incredible experience at Wellness Detailing, thanks to David! From the moment I dropped off my car, I knew it was in good hands. David's attention to detail and expertise truly shone through, as he transformed my car into something even better than when I first bought it from the dealership. The level of care and precision he put into his work exceeded all my expectations. I highly recommend Wellness Detailing to anyone looking for exceptional service and outstanding results. Thank you, David, for your exceptional workmanship and dedication to perfection!"
  },
];

const MAX_PREVIEW_LENGTH = 130;
const MAX_NAME_LENGTH = 18;

const TestimonialSlider = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentStart, setCurrentStart] = useState(0);
  const VISIBLE_COUNT = 3;

  const visibleReviews = reviews.slice(currentStart, currentStart + VISIBLE_COUNT);

  const handlePrev = () => {
    if (currentStart > 0) setCurrentStart(currentStart - 1);
  };

  const handleNext = () => {
    if (currentStart + VISIBLE_COUNT < reviews.length) setCurrentStart(currentStart + 1);
  };

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto mb-10">
        Genuine Experiences, Real Transformations: Our Customer Testimonials
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        {currentStart > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Right Arrow */}
        {currentStart + VISIBLE_COUNT < reviews.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Content Container */}
        <div className="flex justify-center items-start gap-6 px-12">
          {/* Company Info Card */}
          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-64 flex-shrink-0">
            <div className='relative w-12 h-12'>
              <Image
                fill
                src="/Images/Home/logo.JPEG"
                alt="Wellness Detailing Logo"
                className="rounded-full object-cover"
              />
            </div> 
            <p className="font-semibold mt-2">Wellness Detailing</p>
            <div className="flex text-yellow-400 mt-1">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <p className="text-base text-gray-500 mt-1">91 Google reviews</p>
            <a
              href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJgdYny294ySARzwzRJQokYuc"
              target="_blank"
              className="mt-3 bg-blue-600 text-white text-base px-4 py-2 rounded hover:bg-blue-700"
            >
              Write a review
            </a>
          </div>

          {/* Review Cards */}
          {visibleReviews.map((review, index) => {
            const isExpanded = expandedIndex === index;
            const displayName = review.name.length > MAX_NAME_LENGTH ? review.name.slice(0, MAX_NAME_LENGTH) + '...' : review.name;
            const displayText = isExpanded ? review.text : (review.text.length > MAX_PREVIEW_LENGTH ? review.text.slice(0, MAX_PREVIEW_LENGTH) + '...' : review.text);

            return (
              <div key={index} className="relative border rounded-lg bg-gray-50 p-4 text-left w-64 flex-shrink-0 transition duration-200 ease-in-out">
                <div className='absolute top-3 right-3 w-4 h-4'> 
                  <Image
                    fill
                    src="/google-icon.png"
                    alt="Google Logo"
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-purple-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-base leading-tight">{displayName}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-gray-700">
                  {displayText}
                </p>
                {review.text.length > MAX_PREVIEW_LENGTH && (
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-xs text-blue-600 mt-2 hover:underline"
                  >
                    {isExpanded ? 'Hide' : 'Read more'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;