import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Laurel Mobile Detailing | Premium Mobile Car Care in Laurel, MD",
    description:
        "Laurel Mobile Detailing offers top-tier mobile car detailing services in Laurel, MD. We come to you with interior cleaning, paint protection, ceramic coating, and more.",
    keywords: [
        "Laurel Mobile Detailing",
        "mobile detailing Laurel MD",
        "car detailing near me",
        "ceramic coating Laurel",
        "interior detailing Laurel MD",
        "Wellness Detailing"
    ],
    alternates: {
        canonical: "https://wellnessdetailing.com/laurel-md-mobile-car-detailing",
    },
    openGraph: {
        title: "Laurel Mobile Detailing | Wellness Detailing",
        description:
            "Explore high-quality mobile car detailing in Laurel, MD. From paint correction to smoke odor removal, our expert team delivers results right at your driveway.",
        url: "https://wellnessdetailing.com/laurel-md-mobile-car-detailing",
        siteName: "Wellness Detailing",
        type: "website",
    },
};

export default function LaurelDetailing() {
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
            <ServiceHero header="Laurel Mobile Detailing: Revive Your Ride's Shine at Your Place" subheader="Welcome to Laurel Mobile Detailing, your one-stop shop for professional and meticulous car detailing in Laurel, MD! We combine a passion for exceeding expectations with the utmost convenience. Our mobile detailing services bring the shine directly to your driveway, transforming your car's appearance without the hassle of traveling to a detail shop." url="https://placehold.co/1920x1080" />
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-12">

                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold">
                        Skip the wait and stress - Laurel Mobile Detailing comes to you!
                    </h2>
                    <p className="mx-auto max-w-4xl text-left">
                        detailers are experts in their craft, wielding top-of-the-line equipment and premium products to deliver
                        exceptional results. We'll leave your car gleaming, protected, and ready to turn heads as you cruise through
                        Laurel
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-center">
                        About Laurel Mobile Detailing: Your Local Laurel Car Care Experts
                    </h2>
                    <p>
                        Laurel Mobile Detailing is a locally owned and operated business with deep roots in the Laurel community. We
                        understand the unique challenges Laurel drivers face, from harsh weather to relentless commutes. That's why
                        we're dedicated to providing the highest quality detailing services in Laurel, MD, tailored to restore your
                        car's shine and shield it from the elements, keeping it looking its best for years to come.
                    </p>
                    <p>
                        Our team of certified detailers is highly trained and experienced in all aspects of car detailing. We use
                        only the best car care products and equipment to achieve exceptional, long-lasting results. We are committed
                        to providing exceptional service, convenience, and competitive pricing to our valued customers in Laurel. Let
                        Laurel Mobile Detailing be your trusted partner in keeping your car looking amazing!
                    </p>
                </section>

                <section className="space-y-6 text-center">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <div className="relative w-full sm:w-1/2 h-[500px] border border-gray-400 overflow-hidden">
                            <Image
                                src="/images/split-1.jpg"
                                alt="Image Placeholder 1"
                                fill
                                className="object-cover text-gray-500"
                            />
                        </div>

                        <div className="relative w-full sm:w-1/2 h-[500px] border border-gray-400 overflow-hidden">
                            <Image
                                src="/images/split-2.jpg"
                                alt="Image Placeholder 2"
                                fill
                                className="object-cover text-gray-500"
                            />
                        </div>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
                    >
                        Get A Free Quote
                    </Link>
                </section>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-10">
                <h2 className="text-3xl font-bold text-center">
                    Services We Offer: Tailored Detailing Solutions for Your Laurel Car
                </h2>

                <div className="space-y-4">
                    <p>
                        At Laurel Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Laurel, MD to
                        cater to your specific car's needs and your budget. Here's a glimpse into what we can do for you:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
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
                            <strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative
                            service tackles embedded dirt, grime, and stains, bringing your car's inside back to life.
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

                    <p>
                        <strong>Laurel Mobile Detailing: Let us make your car shine!</strong>
                    </p>
                    <p>
                        Contact us today to request a free quote and experience the Laurel Mobile Detailing difference. We guarantee
                        exceptional results, right at your convenience in Laurel, MD.
                    </p>
                </div>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Laurel Mobile Detailing Service Areas: Bringing the Shine Throughout Laurel, MD
                        </h2>
                        <p className="mb-4">
                            Laurel Mobile Detailing proudly serves Laurel, Maryland, and the surrounding areas. We understand your busy
                            lifestyle, and that's why we bring the convenience of mobile detailing to your driveway or workplace.
                            Whether you're in the heart of Laurel or call a nearby community home, we can help you keep your car looking
                            its best.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {serviceAreas.map((location) => {
                                const isCurrent = location.href === '/laurel-md-mobile-car-detailing';
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
                        </ul>

                        <p className="mb-2">
                            <strong>Not sure if we service your specific area?</strong>
                        </p>
                        <p>
                            Contact us today! We are always expanding our service coverage in Laurel, MD and surrounding areas. We'd be
                            happy to discuss your detailing needs and answer any questions you may have.
                        </p>
                    </div>

                    <div className="relative w-full h-[700px] border rounded overflow-hidden">
                        <Image
                            src="/images/feature.jpg"
                            alt="Large Feature Image"
                            fill
                            className="object-cover text-gray-500"
                        />
                    </div>

                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <h2 className="text-3xl font-bold mb-6">
                    Laurel Mobile Detailing FAQs: Your Laurel Car Detailing Questions Answered!
                </h2>

                <p className="mb-4">
                    We understand you might have questions about our mobile detailing services in Laurel, MD. Here are some frequently asked questions to help you decide if Laurel Mobile Detailing is right for you:
                </p>

                <div className="space-y-6">
                    <div>
                        <p className="font-semibold">What sets Laurel Mobile Detailing apart from a car wash?</p>
                        <p>
                            Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">How often should I get my car detailed in Laurel?</p>
                        <p>
                            The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Laurel, MD to maintain a fresh look and protect your car's finish.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">Do you offer mobile detailing packages in Laurel?</p>
                        <p>
                            Absolutely! We understand that every car has unique needs. That's why we offer a variety of mobile detailing packages in Laurel, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">Can you remove smoke odors from my car's interior in Laurel?</p>
                        <p>
                            Yes! We offer professional smoke odor removal services using proven techniques to eliminate lingering odors and restore a fresh scent to your car's interior in Laurel, MD.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Laurel, MD Mobile detailing Gallery
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 24 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative w-full h-48 border bg-gray-200 overflow-hidden"
                        >
                            <Image
                                src={`/images/gallery/thumb-${index + 1}.jpg`}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover text-sm text-gray-500"
                            />
                        </div>
                    ))}
                </div>
                <br></br>
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </div>

            <QuoteForm />
        </>
    )
}