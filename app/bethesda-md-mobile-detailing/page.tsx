import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Bethesda Mobile Detailing | Premium Car Detailing in Bethesda, MD",
  description: "Bethesda Mobile Detailing provides high-quality mobile car detailing services in Bethesda, MD. Interior cleaning, paint correction, and more—all brought to you.",
  keywords: [
    "Bethesda Mobile Detailing",
    "mobile detailing Bethesda MD",
    "car detailing Bethesda",
    "ceramic coating Bethesda",
    "paint correction Bethesda MD",
  ],
  alternates: {
    canonical: "https://wellnessdetailing.com/bethesda-md-mobile-detailing",
  },
  openGraph: {
    title: "Bethesda Mobile Detailing",
    description: "Top-rated mobile car detailing in Bethesda, MD. We bring the shine to you.",
    url: "https://wellnessdetailing.com/bethesda-md-mobile-detailing",
    siteName: "Wellness Detailing",
    type: "website",
  }
}

export default function BethesdaContent() {

  const serviceAreas = [
    { label: 'Poolesville MD Mobile Detailing', href: '/poolesville-md-mobile-car-detailing' },
    { label: 'Columbia Mobile Detailing', href: '/columbia-mobile-detailing' },
    { label: 'College Park Mobile Detailing', href: '/college-park-mobile-car-detailing' },
    { label: 'Damascus MD Mobile Detailing', href: '/damascus-md-car-mobile-detailing' },
    { label: 'Laurel MD Mobile Detailing', href: '/laurel-md-mobile-car-detailing' },
    { label: 'Beltsville MD Mobile Detailing', href: '/beltsville-md-mobile-detailing' },
    { label: 'Silver Spring MD Mobile Detailing', href: '/silver-spring-md-mobile-car-detailing' },
    { label: 'Bethesda MD Mobile Detailing', href: '/bethesda-md-mobile-detailing' },
    { label: 'Potomac MD Mobile Detailing', href: '/potomac-md-mobile-detailing' },
    { label: 'Clarksburg Mobile Detailing', href: '/clarksburg-mobile-detailing' },
    { label: 'Gaithersburg Mobile Detailing', href: '/gaithersburg-mobile-detailing' },
    { label: 'Rockville MD Mobile Detailing', href: '/rockville-md-mobile-detailing' },
    { label: 'Olney MD Mobile Detailing', href: '/olney-md-mobile-detailing' },
  ]
  return (
    <>
      <ServiceHero header="Bethesda Mobile Detailing: Revive Your Ride's Shine at Your Place" subheader="Welcome to Potomac Mobile Detailing, your premier destination for reviving the elegance and enhancing the value of your car in Potomac, MD. We bring the showroom shine directly to your driveway, eliminating the need to travel to a detail shop." url="https://placehold.co/1920x1080" />
      <div className="bg-white text-gray-800">
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">
            About Bethesda Mobile Detailing: Your Local Car Care Experts
          </h1>

          <div className="max-w-3xl mx-auto text-left space-y-6">
            <p>
              Bethesda Mobile Detailing is a locally owned and operated business with deep roots in the Bethesda
              community. We understand the unique challenges Bethesda cars face, from enduring summer heat to the
              occasional winter snowstorm. That's why we provide the highest quality detailing services in Bethesda,
              MD, tailored to restore your car's shine, shield it from the elements, and keep it looking its best
              year-round.
            </p>
            <p>
              Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use
              only the best car care products and equipment to achieve exceptional, long-lasting results. We are
              committed to providing exceptional service, convenience, and competitive pricing to our valued customers
              in Bethesda. Let Bethesda Mobile Detailing be your trusted partner in keeping your car looking amazing!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
            <div className="w-[350px] h-[400px] relative border rounded-md overflow-hidden">
              <Image
                src="/images/card1.jpg"
                alt="Card 1"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-[350px] h-[400px] relative border rounded-md overflow-hidden">
              <Image
                src="/images/card2.jpg"
                alt="Card 2"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>


        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Services We Offer: Personalized Detailing Solutions for Your Bethesda Car
          </h2>
          <div className="space-y-4">
            <p>
              At Bethesda Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Bethesda, MD to
              cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li>
                <strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's
                interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning
                included), hard surfaces, and windows, and remove any unwanted trash.
              </li>
              <li>
                <strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy
                schedules, including vacuuming, surface wiping, window cleaning, and trash removal.
              </li>
              <li>
                <strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to
                your car's interior with our professional smoke odor removal service.
              </li>
              <li>
                <strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our
                restorative service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.
              </li>
              <li>
                <strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine with our thorough wash
                and high-quality wax application.
              </li>
              <li>
                <strong>Paint Correction:</strong> Restore your car's paintwork to its former glory with our multi-step
                paint correction service. This process removes minor scratches, swirl marks, and oxidation for a
                mirror-like finish.
              </li>
              <li>
                <strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating,
                offering superior gloss, scratch resistance, and easier maintenance for years to come.
              </li>
              <li>
                <strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our
                professional headlight restoration service.
              </li>
              <li>
                <strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car's
                exterior, returning it to its original condition.
              </li>
              <li>
                <strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and road
                debris with a virtually invisible paint protection film.
              </li>
              <li>
                <strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap.
                Choose from a variety of colors, designs, and finishes to express your unique style.
              </li>
            </ul>
            <p className="mt-6">Bethesda Mobile Detailing: Bring Back Your Car's Shine at Home!</p>
            <p>
              <strong>Contact us today for a free quote and experience the Bethesda Mobile Detailing difference!</strong> We guarantee
              exceptional results delivered conveniently at your location in Bethesda, MD. Let us make your car shine
              again!
            </p>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-white text-gray-800">

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Bethesda Mobile Detailing Service Areas: Bringing the Shine Throughout Bethesda, MD (and Beyond!)
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <p>
                Bethesda Mobile Detailing proudly serves Bethesda, Maryland, and the surrounding areas. We're constantly
                expanding our reach to bring the convenience of mobile detailing to more drivers! Whether you're parked in
                the heart of Bethesda or call a nearby community home, we can help you keep your car looking its best.
              </p>

              <ul className="list-disc list-inside space-y-1">
                {serviceAreas.map((area) => {
                  const isCurrent = area.href === '/bethesda-md-mobile-detailing';
                  return (
                    <p key={area.label}>
                      <Link
                        href={area.href}
                        className={`${isCurrent
                          ? "text-blue-600 font-semibold"
                          : "text-black hover:text-blue-600 transition-colors"
                          }`}
                      >
                        {area.label}
                      </Link>
                    </p>
                  );
                })}
              </ul>

              <p>
                <strong>Not sure if we service your specific area? Not to worry!</strong> Contact us today! We'd be happy
                to discuss your detailing needs and answer any questions you may have. We're always looking for ways to
                expand our service coverage in Potomac and Chevy Chase, MD, so there's a good chance we can brighten your
                car's day!
              </p>
            </div>

            <div className="flex-1">
              <div className="w-full h-[600px] relative rounded-md overflow-hidden">
                <Image
                  src="/images/vertical.jpg"
                  alt="Tall Image"
                  fill
                  className="object-cover relative border rounded-md"
                />
              </div>
            </div>
          </div>

        </section>
      </div>
      <div className="bg-white text-gray-800">

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Bethesda Mobile Detailing FAQs: Your Bethesda Car Detailing Questions Answered!
          </h2>
          <div className="space-y-6">
            <p>
              We understand you might have questions about our mobile detailing services in Bethesda, MD. Here are some
              frequently asked questions to help you decide if Bethesda Mobile Detailing is right for you:
            </p>

            <div>
              <h3 className="font-semibold mb-2">What sets Bethesda Mobile Detailing apart from a car wash?</h3>
              <p>
                Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning,
                polishing, and protection process for both the interior and exterior of your car, unlike a car wash that
                focuses primarily on a quick exterior clean.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">How often should I get my car detailed in Bethesda?</h3>
              <p>
                The frequency depends on your driving habits and how well you maintain your car. Generally, a professional
                detail every 6-12 months is recommended in Bethesda, MD to maintain a fresh look and protect your car's
                finish.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Do you offer mobile detailing packages in Bethesda?</h3>
              <p>
                Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile
                detailing packages in Bethesda, MD to fit your specific budget and requirements. Browse our options online
                or contact us for a free quote.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can you remove pet hair from my car's interior in Bethesda?</h3>
              <p>
                Yes! We offer specialized pet hair removal services using proven techniques to eliminate embedded fur and
                restore your vehicle's interior.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Bethesda, MD Mobile Detailing Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-full h-40 relative rounded-md overflow-hidden">
                  <Image
                    src={`/images/gallery/thumb${i + 1}.jpg`}
                    alt={`Gallery Thumbnail ${i + 1}`}
                    fill
                    className="object-cover relative border rounded-md"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
      <QuoteForm />
    </>
  )
}
