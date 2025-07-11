import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Silver Spring Mobile Detailing Services | Expert Car Care in Silver Spring, MD",
    description:
        "Silver Spring Mobile Detailing provides high-quality mobile car detailing in Silver Spring, MD. Interior & exterior detailing, ceramic coatings, and more — at your doorstep.",
    keywords: [
        "Silver Spring MD Mobile Detailing",
        "mobile car detailing Silver Spring",
        "car detailing near Silver Spring MD",
        "ceramic coating Silver Spring",
        "smoke odor removal Silver Spring",
        "eco-friendly detailing Silver Spring"
    ],
    alternates: {
        canonical: "https://wellnessdetailing.com/silverspringmdmobiledetailing",
    },
    openGraph: {
        title: "Silver Spring Mobile Detailing | Expert Car Care at Your Doorstep",
        description:
            "Top-rated mobile detailing in Silver Spring, MD. Get interior and exterior services without leaving home.",
        url: "https://wellnessdetailing.com/silverspringmdmobiledetailing",
        siteName: "Wellness Detailing",
        type: "website",
    },
};

export default function SilverSpringDetailing() {

    const serviceAreas = [
        { label: 'Poolesville MD Mobile Detailing', href: '/service-area/poolesville-detailing' },
        { label: 'Columbia Mobile Detailing', href: '/service-area/columbia-detailing' },
        { label: 'College Park Mobile Detailing', href: '/service-area/college-park-detailing' },
        { label: 'Damascus MD Mobile Detailing', href: '/service-area/damascus-detailing' },
        { label: 'Laurel MD Mobile Detailing', href: '/service-area/laurel-detailing' },
        { label: 'Beltsville MD Mobile Detailing', href: '/service-area/beltsville-detailing' },
        { label: 'Silver Spring MD Mobile Detailing', href: '/service-area/silver-spring-detailing' },
        { label: 'Bethesda MD Mobile Detailing', href: '/service-area/bethesda-detailing' },
        { label: 'Potomac MD Mobile Detailing', href: '/service-area/potomac-detailing' },
        { label: 'Clarksburg Mobile Detailing', href: '/service-area/clarksburg-detailing' },
        { label: 'Gaithersburg Mobile Detailing', href: '/service-area/gaithersburg-detailing' },
        { label: 'Rockville MD Mobile Detailing', href: '/service-area/rockville-detailing' },
        { label: 'Olney MD Mobile Detailing', href: '/service-area/olney-detailing' },
    ]

    return (
        <>
            <ServiceHero header="Silver Spring Mobile Detailing: Revive Your Ride's Shine at Your Place" subheader="Welcome to Silver Spring Mobile Detailing, your one-stop shop for transforming your car from everyday driver to showroom showstopper, all within the comfort of your Silver Spring driveway! We ditch the hassle of taking your car to a detail shop and bring the shine directly to you." url="https://placehold.co/1920x1080" />
            <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">

                <h2 className="text-2xl font-bold mb-6 text-center">About Silver Spring Mobile Detailing: Your Local Car Care Champions</h2>

                <p className="mb-4">
                    Silver Spring Mobile Detailing is a local business, owned and operated right here in Silver Spring, MD. We understand the unique challenges Silver Spring cars endure, from springtime pollen blizzards to road salt during harsh winters. That's why we provide the highest quality detailing services specifically designed to revive your car's shine, shield it from the elements, and keep it looking its best, year after year.
                </p>

                <p className="mb-4">
                    Our team of certified detailers is highly trained and experienced in all aspects of car restoration. We use only the best car care products and equipment to achieve exceptional, long-lasting results. We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Silver Spring. Let Silver Spring Mobile Detailing become your trusted partner in keeping your car looking amazing!
                </p>

                <p className="mb-6">
                    Skip the wait and experience the Silver Spring Mobile Detailing difference! Our certified detailers are passionate car care specialists wielding top-of-the-line equipment and premium products. We'll leave your car gleaming, protected, and ready to turn heads as you navigate the vibrant streets of Silver Spring.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative w-full sm:w-1/2 aspect-video border overflow-hidden h-[400px]">
                        <Image
                            src="/Images/ServiceArea/SilverSpring/first.webp"
                            alt="Image 1"
                            fill
                            className="object-cover text-sm text-gray-500"
                        />
                    </div>

                    <div className="relative w-full sm:w-1/2 aspect-video border overflow-hidden">
                        <Image
                            src="/Images/Home/ppf.webp"
                            alt="Image 2"
                            fill
                            className="object-cover text-sm text-gray-500"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Services We Offer: Personalized Detailing Solutions for Your Silver Spring Car
                </h2>

                <p className="mb-4">
                    At Silver Spring Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Silver Spring, MD to cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
                </p>

                <ul className="list-disc list-inside space-y-3 mb-6">
                    <li><strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car's interior, leaving no spot untouched...</li>
                    <li><strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up...</li>
                    <li><strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent...</li>
                    <li><strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival...</li>
                    <li><strong>Wash and Wax:</strong> Give your car's exterior a classic clean and shine...</li>
                    <li><strong>Paint Correction:</strong> Restore your car's paintwork to its former glory...</li>
                    <li><strong>Ceramic Coating (Optional Add-On):</strong> Protect your car's paint with a ceramic coating...</li>
                    <li><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility...</li>
                    <li><strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray...</li>
                    <li><strong>Paint Protection Film (PPF):</strong> Protect your car's paint from scratches, chips, and debris...</li>
                    <li><strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom wrap...</li>
                </ul>

                <p className="mb-4 font-semibold">Silver Spring Mobile Detailing: Let us make your car shine!</p>
                <p className="mb-6">
                    Contact us today to request a free quote and experience the Silver Spring Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Silver Spring, MD.
                </p>
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">

                <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-6">
                            Silver Spring Mobile Detailing Service Areas: Bringing the Shine Throughout Silver Spring, MD
                        </h2>

                        <p className="mb-4">
                            Silver Spring Mobile Detailing proudly serves Silver Spring, Maryland, and the surrounding areas. We understand your busy lifestyle, and that's why we bring the convenience of mobile detailing to your driveway or workplace. Whether you're cruising through the heart of Silver Spring or call a nearby community home, we can help you keep your car looking its best.
                        </p>

                        <div className="space-y-2 mb-4">
                            {serviceAreas.map((location) => {
                                const isCurrent = location.href === '/service-area/college-park-detailing';
                                return (
                                    <Link
                                        key={location.label}
                                        href={location.href}
                                        className={`block font-medium transition-colors ${isCurrent ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                            }`}
                                    >
                                        {location.label}
                                    </Link>
                                );
                            })}
                        </div>

                        <p className="mb-2">
                            <strong>Not sure if we service your specific area? Not to worry!</strong> Contact us today! We'd be happy to discuss your detailing needs and answer any questions you may have. We're always looking for ways to expand our service coverage in Poolesville, MD and surrounding areas, so there's a good chance we can brighten your car's day!
                        </p>
                    </div>

                    <div className="relative lg:w-1/2 w-full h-[750px] aspect-video border overflow-hidden">
                        <Image
                            src="/images/feature.jpg"
                            alt="Feature Placeholder"
                            fill
                            className="object-cover text-sm text-gray-500"
                        />
                    </div>

                </div>
            </section>
            <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Silver Spring Mobile Detailing FAQs: Your Silver Spring Car Detailing Questions Answered!
                </h2>

                <p className="mb-4">
                    We understand you might have questions about our mobile detailing services in Silver Spring, MD. Here are some frequently asked questions to help you decide if Silver Spring Mobile Detailing is right for you:
                </p>

                <div className="space-y-6">
                    <div>
                        <p className="font-semibold">
                            What sets Silver Spring Mobile Detailing apart from a car wash?
                        </p>
                        <p>
                            Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">
                            How often should I get my car detailed in Silver Spring?
                        </p>
                        <p>
                            The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Silver Spring, MD to maintain a fresh look and protect your car's finish.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">
                            Do you offer mobile detailing packages in Silver Spring?
                        </p>
                        <p>
                            Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages in Silver Spring, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">
                            Can you remove smoke odors from my car's interior in Silver Spring?
                        </p>
                        <p>
                            Yes! We offer professional smoke odor removal services using proven techniques to eliminate lingering odors and restore a fresh scent to your car's interior in Silver Spring, MD.
                        </p>
                    </div>
                </div>

                <p className="mt-8 font-semibold">
                    Let Silver Spring Mobile Detailing Make Your Car Shine Again!
                </p>

                <p className="mb-6">
                    We guarantee exceptional results delivered conveniently at your location in Silver Spring, MD. Request a free quote
                </p>
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <section className="px-4 md:px-12 py-16 bg-white">

                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Silver Spring, MD Mobile Detailing Gallery
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 24 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="relative w-full h-40 rounded shadow-sm overflow-hidden"
                        >
                            <Image
                                src={`/images/gallery/gallery-${idx + 1}.jpg`}
                                alt={`Gallery Image ${idx + 1}`}
                                fill
                                className="object-cover text-sm text-gray-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/contact"
                        className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-semibold px-6 py-3 rounded transition-colors"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}