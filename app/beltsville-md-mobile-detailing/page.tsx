import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beltsville Mobile Detailing | Local Car Care Experts",
  description: "Beltsville Mobile Detailing - High quality mobile car detailing in Beltsville, MD. We come to you!",
  keywords: [
    "Beltsville Mobile Detailing",
    "mobile detailing Beltsville MD",
    "car detailing Beltsville",
    "ceramic coating Beltsville",
    "paint correction Beltsville MD"
  ],
  alternates: {
    canonical: "https://wellnessdetailing.com/beltsville-md-mobile-detailing",
  },
  openGraph: {
    title: "Beltsville Mobile Detailing | Local Car Care Experts",
    description: "Beltsville Mobile Detailing - High quality mobile car detailing in Beltsville, MD. We come to you!",
    url: "https://wellnessdetailing.com/beltsville-md-mobile-detailing",
    siteName: "Wellness Detailing",
    type: "website",
  }
}

export default function BeltsvilleContent() {
  const images = Array.from({ length: 24 });

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
      <ServiceHero header="Beltsville Mobile Detailing: Beltsville's Gloss Revival on Wheels" subheader="Welcome to Beltsville Mobile Detailing, your one-stop shop for transforming your car's appearance right in your Beltsville, MD driveway! We're passionate about exceeding expectations and bringing back that showroom shine, all without the inconvenience of taking your car to a shop." url="https://placehold.co/1920x1080" />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">

        <h2 className="text-3xl font-bold mb-6 text-center">
          About Beltsville Mobile Detailing: Your Local Car Care Experts
        </h2>

        <p className="mb-4">
          Beltsville Mobile Detailing is a local business, owned and operated right here in Beltsville, MD. We understand the challenges faced by Beltsville drivers, from highway commutes to harsh seasonal weather. That&apos;s why we provide the highest quality detailing services specifically designed to revive your car&apos;s shine and shield it from the elements, keeping it looking amazing for years to come.
        </p>
        <p className="mb-4">
          Our certified detailers are highly trained and experienced in all aspects of car care. We use only the best car care products and equipment to ensure exceptional, long-lasting results. We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Beltsville. Let Beltsville Mobile Detailing be your trusted partner in keeping your car looking its best!
        </p>
        <p className="mb-8">
          <strong>Skip the wait and travel - we come to you!</strong> Our Beltsville detailers are certified professionals wielding top-of-the-line equipment and premium products. We&apos;ll leave your car gleaming, protected, and ready to turn heads as you cruise through Beltsville.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="w-full sm:w-1/2 h-[400px] relative border overflow-hidden">
            <Image
              src="/images/image1.jpg"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 h-[400px] relative border overflow-hidden">
            <Image
              src="/images/image1.jpg"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition"
          >
            Get A Free Quote
          </Link>
        </div>

      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-3 font-bold mb-6 text-center">
          Services We Offer: Tailored Detailing Solutions for Your Beltsville Car
        </h2>

        <p className="mb-4">
          At Beltsville Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Beltsville, MD to cater to your specific car&apos;s needs and your budget. Here&apos;s a glimpse into what we can do for you:
        </p>

        <ul className="space-y-4 mb-8">
          <li><strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car&apos;s interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning included), hard surfaces, and windows, and remove any unwanted trash.</li>

          <li><strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules, including vacuuming, surface wiping, window cleaning, and trash removal.</li>

          <li><strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your car&apos;s interior with our professional smoke odor removal service.</li>

          <li><strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative service tackles embedded dirt, grime, and stains, bringing your car&apos;s inside back to life.</li>

          <li><strong>Wash and Wax:</strong> Give your car&apos;s exterior a classic clean and shine with our thorough wash and high-quality wax application.</li>

          <li><strong>Paint Correction:</strong> Restore your car&apos;s paintwork to its former glory with our multi-step paint correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.</li>

          <li><strong>Ceramic Coating (Optional Add-On):</strong> Protect your car&apos;s paint with a ceramic coating, offering superior gloss, scratch resistance, and easier maintenance for years to come.</li>

          <li><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional headlight restoration service.</li>

          <li><strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car&apos;s exterior, returning it to its original condition.</li>

          <li><strong>Paint Protection Film (PPF):</strong> Protect your car&apos;s paint from scratches, chips, and road debris with a virtually invisible paint protection film.</li>

          <li><strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from a variety of colors, designs, and finishes to express your unique style.</li>
        </ul>

        <p className="mb-4 font-semibold">Columbia Mobile Detailing: Let us make your car shine!</p>

        <p className="mb-8">
          Contact us today to request a free quote and experience the Columbia Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Columbia, MD.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition"
          >
            Get A Free Quote
          </Link>
        </div>

      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6">
            Beltsville Mobile Detailing Service Areas: Bringing the Shine Throughout Beltsville, MD
          </h2>
          <p className="mb-4">
            Beltsville Mobile Detailing proudly serves Beltsville, Maryland, and the surrounding areas. We understand your busy lifestyle, and that&apos;s why we bring the convenience of mobile detailing to your driveway or workplace. Whether you&apos;re in the heart of Beltsville or call a nearby community home, we can help you keep your car looking its best.
          </p>

          <ul className="space-y-2 mb-4">
            {serviceAreas.map((area) => {
              const isCurrent = area.href === '/beltsville-md-mobile-detailing';
              return (
                <li key={area.label}>
                  <Link
                    href={area.href}
                    className={`transition-colors ${isCurrent
                      ? 'text-blue-600 font-semibold'
                      : 'text-black hover:text-blue-600'
                      }`}
                  >
                    {area.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mb-2">
            <strong>Not sure if we service your specific area?</strong>
          </p>
          <p className="mb-6">
            Contact us today! We are always expanding our service coverage in Beltsville, MD and surrounding areas. We&apos;d be happy to discuss your detailing needs and answer any questions you may have.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="w-full h-[600px] relative border overflow-hidden">
            <Image
              src="/images/tall-image.jpg"
              alt="Tall Placeholder"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Beltsville Mobile Detailing FAQs: Your Beltsville Car Detailing Questions Answered!
        </h2>

        <p className="mb-4">
          We understand you might have questions about our mobile detailing services in Beltsville, MD. Here are some frequently asked questions to help you decide if Beltsville Mobile Detailing is right for you:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-1">What sets Beltsville Mobile Detailing apart from a car wash?</h3>
            <p>
              Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">How often should I get my car detailed in Beltsville?</h3>
            <p>
              The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Beltsville, MD to maintain a fresh look and protect your car&apos;s finish.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Do you offer mobile detailing packages in Beltsville?</h3>
            <p>
              Absolutely! We understand that every car has unique needs. That&apos;s why we offer a variety of mobile detailing packages in Beltsville, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Can you remove smoke odors from my car&apos;s interior in Beltsville?</h3>
            <p>
              Yes! We offer professional smoke odor removal services using proven techniques to eliminate lingering odors and restore a fresh scent to your car&apos;s interior in Beltsville, MD.
            </p>
          </div>
        </div>

        <p className="mt-8 font-semibold">
          Let Beltsville Mobile Detailing Make Your Car Shine Again!
        </p>
        <p className="mb-6">
          We guarantee exceptional results delivered conveniently at your location in Beltsville, MD. Request a free quote today and let our experts create a customized detailing plan for your car. It&apos;s time to experience the Beltsville Mobile
        </p>
        <div className="text-center">
          <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Get A Free Quote
          </Link>
        </div>
      </section>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Beltsville, MD Mobile Detailing Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((_, i) => (
            <div
              key={i}
              className="w-full aspect-[4/3] relative border overflow-hidden"
            >
              <Image
                src={`/images/gallery/image${i + 1}.jpg`}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-8">
            Get A Free Quote
          </Link>
        </div>
      </section>
      <QuoteForm />
    </>
  )
}