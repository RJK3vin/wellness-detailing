import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link"
import Image from "next/image";

export const metadata = {
    title: "Smoke Odor Removal Services | Wellness Detailing",
    description:
        "Say goodbye to lingering smoke smells in your vehicle. Our smoke odor removal service uses enzyme treatment, deep cleaning, and optional ozone to fully eliminate odors.",
    keywords: [
        "smoke odor removal car",
        "car detailing smoke smell",
        "ozone treatment Maryland",
        "cigarette odor removal vehicle",
        "Wellness Detailing services"
    ],
    robots: "index, follow",
    alternates: {
        canonical: "https://wellnessdetailing.com/smoke-odor-removal",
    },
    openGraph: {
        title: "Smoke Odor Removal Services | Wellness Detailing",
        description:
            "Professional smoke odor elimination using advanced methods like ozone treatment and enzyme cleaning. Freshen your car interior today.",
        url: "https://wellnessdetailing.com/smoke-odor-removal",
        siteName: "Wellness Detailing",
        type: "website",
    },
};

export default function SmokeOdorRemoval() {
    return (
        <>
            <ServiceHero header="Eliminate Stubborn Smoke Odors: Breathe Easy with Wellness Detailing" subheader="Has smoke permeated your car's interior? We offer professional smoke odor removal services to eliminate lingering smells and restore a fresh, clean environment." url="https://placehold.co/1920x1080" />
            <div className="px-4 md:px-12 py-16 space-y-20 lg:px-24 text-gray-800">

                <section className="space-y-6 text-center">
                    <h1 className="text-3xl font-bold">Don&apos;t Mask It, Eliminate It: Effective Smoke Odor Removal</h1>
                    <p className="text-left mx-auto max-w-4xl">
                        Stubborn smoke odors from cigarettes, cigars, or even lingering campfire smells can cling to your car&apos;s interior for a long time. Air fresheners only mask the problem, not solve it. At Wellness Detailing, we provide professional smoke odor removal services that eliminate the odor at its source, leaving your car smelling fresh and clean.
                    </p>
                    <ul className="list-disc text-left mx-auto max-w-4xl pl-6 space-y-2">
                        <li><strong>Neutralize, Not Mask:</strong> Our multi-step process goes beyond temporary masking agents. We use powerful yet safe neutralizing enzymes that target and destroy smoke odor molecules.</li>
                        <li><strong>Deep Cleaning & Odor Source Removal:</strong> We meticulously clean all interior surfaces, including carpets, upholstery, headliners, and air vents, to remove embedded smoke particles.</li>
                        <li><strong>Ozone Treatment (Optional):</strong> For heavily smoke-infested cars, we offer ozone treatment as an add-on service. Ozone effectively eliminates smoke odors and kills bacteria.</li>
                    </ul>
                    <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">Get A Free Quote</Link>
                </section>

                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold">Our Smoke Odor Removal Process: Restoring Freshness</h2>
                    <p className="text-left mx-auto max-w-4xl pl-6 space-y-2">Our proven smoke odor removal process tackles the odor at its core:</p>
                    <ul className="list-disc text-left mx-auto max-w-4xl pl-6 space-y-2">
                        <li><strong>Thorough Inspection:</strong> We begin with a detailed inspection to identify the source and intensity of the smoke odor.</li>
                        <li><strong>High-Powered Vacuuming:</strong> Loose debris, ashes, and dust are removed from carpets, upholstery, and crevices using high-powered vacuums with HEPA filters.</li>
                        <li><strong>Enzyme Treatment:</strong> Professional-grade enzyme cleaners are applied to all interior surfaces to break down and neutralize smoke odor molecules.</li>
                        <li><strong>Agitation & Steam Cleaning (Optional):</strong> For deep-seated smoke particles, we may use additional methods like agitation and steam cleaning for carpets and upholstery.</li>
                        <li><strong>Air Vent Cleaning:</strong> Air vents are cleaned and deodorized to eliminate smoke odor trapped within the ventilation system.</li>
                        <li><strong>Ozone Treatment (Optional Add-On):</strong> In severe cases, ozone treatment can be used to further neutralize odors and eliminate lingering smoke particles.</li>
                    </ul>
                    <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">Get A Free Quote</Link>
                </section>

                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold">Breathe Easy on the Road Again: Schedule Today!</h2>
                    <p className="mx-auto max-w-2xl">Don&apos;t settle for lingering smoke odors in your car. Our professional smoke odor removal service will leave your car smelling fresh and clean.</p>
                    <div className="mx-auto max-w-xl font-bold text-lg">
                        <div className="border border-gray-300 bg-white rounded p-6 space-y-4 shadow max-w-xl mx-auto text-gray-700 font-semibold text-center">
                            <div>Eliminate Stubborn Smoke Smells</div>
                            <div>Enjoy a Fresh & Clean Car Interior</div>
                            <div>Breathe Easy on Every Drive</div>
                            <div>Schedule Your Smoke Odor Removal Service Today!</div>
                        </div>
                    </div>
                    <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">Get A Free Quote</Link>
                </section>

                <section className="space-y-8 text-center">
                    <h2 className="text-3xl font-bold">Get Your Car Wrap Questions Answered!</h2>

                    <div className="text-left max-w-4xl mx-auto space-y-6 text-base">
                        <p>We understand you might have questions about car wraps. Here are answers to some of the most frequently asked questions:</p>
                        <div className="space-y-4">
                            <p className="mb-1"><strong>1. How much does a car wrap cost?</strong></p>
                            <p className="mb-5">The cost of a car wrap depends on several factors, including the size and complexity of your car, the design complexity, and the type of wrap material used. We offer free consultations where we can provide a transparent quote based on your specific needs and desired wrap design.</p>
                            <p className="mb-1"><strong>2. How long does it take to get a car wrap installed?</strong><br /></p>
                            <p className="mb-5">The car wrap installation process typically takes 1-3 days depending on the size and complexity of your car and the design chosen. During your consultation, we&apos;ll provide a more accurate timeframe based on your project.</p>
                            <p className="mb-1"><strong>3. Can I design my own car wrap?</strong><br /></p>
                            <p className="mb-5">Absolutely! We welcome your creativity. You can provide your own design files, collaborate with our designers to create a custom wrap, or choose from our extensive library of pre-designed wrap options.</p>
                            <p className="mb-1"><strong>4. Is car wrapping bad for my car&apos;s paint?</strong><br /></p>
                            <p className="mb-5">No, professional car wrap installation using high-quality vinyl will not damage your car&apos;s paint. In fact, car wrap acts as a protective layer, shielding your original paint from scratches, chips, and UV rays. Additionally, upon removal by a professional, the vinyl peels off cleanly without affecting the paint underneath.</p>
                            <p className="mb-1"><strong>5. How long does a car wrap last?</strong><br /></p>
                            <p className="mb-5">High-quality car wraps, properly cared for, can last anywhere from 5 to 7 years. Factors affecting longevity include the quality of the vinyl, exposure to sunlight and weather, and proper maintenance practices.</p>
                            <p className="mb-1"><strong>6. How do I care for my car wrap?</strong><br /></p>
                            <p className="mb-5">We&apos;ll provide detailed aftercare instructions to ensure the longevity of your car wrap. Generally, hand washing with mild soap and water is recommended. Avoid using harsh chemicals or automated car washes.</p>
                            <p className="font-bold text-center">Ready to unleash your creativity and transform your car? Schedule a Free Car Wrap Design Consultation with Wellness Detailing today!</p>
                        </div>
                    </div>

                    <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">Get A Free Quote</Link>
                </section>
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Restorative Cleaning Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="relative w-[300px] h-[220px] border border-gray-300 bg-gray-50 rounded-lg shadow overflow-hidden"
                            >
                                <Image
                                    src={`/images/example-${i}.jpg`}
                                    alt={`Gallery Image ${i}`}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 768px) 45vw, 300px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <QuoteForm />
        </>
    )
}