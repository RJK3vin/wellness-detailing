import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image"

export const metadata = {
    title: "Gaithersburg Mobile Detailing | Local Car Care Experts",
    description:
        "Gaithersburg Mobile Detailing - Professional mobile car detailing in Gaithersburg, MD. We offer interior cleaning, paint correction, ceramic coating, and more at your location.",
    keywords: [
        "Gaithersburg Mobile Detailing",
        "mobile car detailing Gaithersburg",
        "interior detailing Gaithersburg MD",
        "ceramic coating Gaithersburg",
        "auto detailing near me",
        "Wellness Detailing"
    ],
    alternates: {
        canonical: "https://wellnessdetailing.com/gaithersburg-mobile-detailing",
    },
    openGraph: {
        title: "Gaithersburg Mobile Detailing | Wellness Detailing",
        description:
            "High-quality mobile detailing in Gaithersburg, MD. Interior and exterior detailing, smoke odor removal, paint protection, and more brought to your driveway.",
        url: "https://wellnessdetailing.com/gaithersburg-mobile-detailing",
        siteName: "Wellness Detailing",
        type: "website",
    },
};

export default function GaithersburgDetailing() {

    const areas = [
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
            <ServiceHero header="Gaithersburg Mobile Detailing: Revive Your Ride's Shine at Your Place" subheader="Welcome to Gaithersburg Mobile Detailing, your trusted source for professional and meticulous car detailing in Gaithersburg, MD! We combine a passion for exceeding expectations with the utmost convenience." url="https://placehold.co/1920x1080" />
            <section className="px-4 md:px-12 py-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Gaithersburg Mobile Detailing: Your Local Car Care Authority</h2>
                <p className="mb-4">
                    Gaithersburg Mobile Detailing is a locally owned and operated business with deep roots in the Gaithersburg community.
                    We understand the unique challenges Gaithersburg cars face, from enduring summer heat and humidity to occasional winter snowstorms.
                    That&apos;s why we provide the highest quality detailing services specifically designed to restore your car&apos;s luster, shield it from the elements,
                    and keep it looking its best year-round.
                </p>
                <p className="mb-4">
                    Our team of certified detailers is highly trained and experienced in all aspects of car detailing.
                    We use only the best car care products and equipment to achieve exceptional, long-lasting results.
                    We are committed to providing exceptional service, convenience, and competitive pricing to our valued customers in Gaithersburg.
                    Let Gaithersburg Mobile Detailing become your trusted partner in keeping your car looking amazing!
                </p>
                <p className="mb-8">
                    <strong>Skip the wait and stress - Gaithersburg Mobile Detailing comes to you!</strong>
                    Our certified detailers are experts in their craft, wielding top-of-the-line equipment and premium products to deliver exceptional results.
                    We&apos;ll leave your car gleaming, protected, and ready to turn heads as you navigate the vibrant streets of Gaithersburg.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="w-full md:w-1/2 relative border rounded-md overflow-hidden">
                        <Image fill src="/images/gaithersburg1.jpg" alt="Gaithersburg detailing service 1" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 relative border rounded-md overflow-hidden h-[500px]">
                        <Image fill src="/images/gaithersburg2.jpg" alt="Gaithersburg detailing service 2" className="w-full h-auto" />
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>
            <section className="px-4 md:px-12 py-12 max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-center">Services Offered: Personalized Detailing Solutions for Your Gaithersburg Car</h3>

                <ul className="list-disc list-outside space-y-3 mb-6">
                    <p>At Gaithersburg Mobile Detailing, we offer a comprehensive menu of mobile detailing services in Gaithersburg, MD to cater to your specific car&apos;s needs and your budget. Here&apos;s a glimpse into what we can do for you:</p>
                    <li><strong>Full Interior Cleaning:</strong> This in-depth cleaning service tackles every inch of your car&apos;s interior, leaving no spot untouched. We thoroughly clean carpets, upholstery, leather seats (conditioning included), hard surfaces, and windows, and remove any unwanted trash.</li>
                    <li><strong>Mini-Interior Detail:</strong> Short on time? Our mini detail is a perfect pick-me-up for busy schedules, including vacuuming, surface wiping, window cleaning, and trash removal.</li>
                    <li><strong>Smoke Odor Removal:</strong> Eliminate lingering smoke odors and restore a fresh, clean scent to your car&apos;s interior with our professional smoke odor removal service.</li>
                    <li><strong>Restorative Interior Cleaning:</strong> For neglected interiors that need a revival, our restorative service tackles embedded dirt, grime, and stains, bringing your car&apos;s inside back to life.</li>
                    <li><strong>Wash and Wax:</strong> Give your car&apos;s exterior a classic clean and shine with our thorough wash and high-quality wax application.</li>
                    <li><strong>Paint Correction:</strong> Restore your car&apos;s paintwork to its former glory with our multi-step paint correction service. This process removes minor scratches, swirl marks, and oxidation for a mirror-like finish.</li>
                    <li><strong>Ceramic Coating (Optional Add-On):</strong> Protect your car&apos;s paint with a ceramic coating, offering superior gloss, scratch resistance, and easier maintenance for years to come..</li>
                    <li><strong>Headlight Restoration:</strong> Restore clarity and improve nighttime visibility with our professional headlight restoration service.</li>
                    <li><strong>Paint Overspray Removal:</strong> We can expertly remove unwanted paint overspray from your car&apos;s exterior, returning it to its original condition.</li>
                    <li><strong>Paint Protection Film (PPF):</strong> Protect your car&apos;s paint from scratches, chips, and road debris with a virtually invisible paint protection film.</li>
                    <li><strong>Vehicle Wraps:</strong> Completely transform the look of your car with a custom vehicle wrap. Choose from a variety of colors, designs, and finishes to express your unique style.</li>
                </ul>

                <p className="mb-4 font-semibold">Gaithersburg Mobile Detailing: Let us make your car shine!</p>
                <p className="mb-6">Contact us today to request a free quote and experience the Gaithersburg Mobile Detailing difference. We guarantee exceptional results, right at your convenience in Gaithersburg, MD.</p>
                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
                    >
                        Get A Free Quote
                    </Link>
                </div>
            </section>

            <section className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">
                            Gaithersburg Mobile Detailing Service Areas: Bringing the Shine Throughout Gaithersburg
                        </h2>
                        <p className="mb-4">
                            Gaithersburg Mobile Detailing proudly serves Gaithersburg, Maryland, and the surrounding areas. We&apos;re constantly expanding our reach to bring the convenience of mobile detailing to more drivers! Whether you&apos;re parked in the heart of Gaithersburg or call a nearby community home, we can help you keep your car looking its best.
                        </p>
                        <ul className="space-y-2">
                            {areas.map((location) => {
                                const isCurrent = location.href === '/gaithersburg-mobile-detailing';
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
                        <p className="mt-6">
                            <strong className="mb-4">Not sure if we service your specific area? Not to worry!</strong>
                            <span className="block mt-2">
                                Contact us today! We&apos;d be happy to discuss your detailing needs and answer any questions you may have. We&apos;re always looking for ways to expand our service coverage in Montgomery Village and surrounding areas, so there&apos;s a good chance we can brighten your car&apos;s day!
                            </span>
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="relative w-full h-[800px] rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/hero-main.jpg"
                                alt="Main Hero Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-6 md:px-16 py-12">

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Gaithersburg Mobile Detailing FAQs: Your Gaithersburg Car Detailing Questions Answered!</h2>
                    <p className="mb-4">We understand you might have questions about our mobile detailing services in Gaithersburg, MD. Here are some frequently asked questions to help you decide if Gaithersburg Mobile Detailing is right for you:</p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-xl mb-4">What sets Gaithersburg Mobile Detailing apart from a car wash?</h3>
                            <p>Mobile detailing is significantly more comprehensive than a car wash. We provide a meticulous cleaning, polishing, and protection process for both the interior and exterior of your car, unlike a car wash that focuses primarily on a quick exterior clean.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-4">How often should I get my car detailed in Gaithersburg?</h3>
                            <p>The frequency depends on your driving habits and how well you maintain your car. Generally, a professional detail every 6-12 months is recommended in Gaithersburg, MD to maintain a fresh look and protect your car&apos;s finish.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-4">Do you offer mobile detailing packages in Gaithersburg?</h3>
                            <p>Absolutely! We understand that every car has unique needs. That&apos;s why we offer a variety of mobile detailing packages in Gaithersburg, MD to fit your specific budget and requirements. Browse our options online or contact us for a free quote.</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold text-center">
                        Gaithersburg Mobile Detailing Gallery
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {Array.from({ length: 24 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative w-full h-48 border border-gray-400 overflow-hidden"
                            >
                                <Image
                                    src={`/images/gallery/thumb-${index + 1}.jpg`}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
            </div>
            <QuoteForm />
        </>
    )
}