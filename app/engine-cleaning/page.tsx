import ServiceHero from "@/components/ServiceHero";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import Image from "next/image"

export const metadata = {
    title: "Engine Cleaning | Wellness Detailing",
    description:
        "Learn why professional engine cleaning matters. Explore our step-by-step process, benefits, FAQs, and gallery. Schedule your service today.",
    keywords: [
        "engine cleaning Maryland",
        "engine bay detailing",
        "auto detailing MD",
        "Wellness Detailing services",
        "car maintenance Maryland"
    ],
    robots: "index, follow",
    alternates: {
        canonical: "https://wellnessdetailing.com/engine-cleaning",
    },
    openGraph: {
        title: "Engine Cleaning | Wellness Detailing",
        description:
            "Don't neglect your car's engine! Learn how Wellness Detailing's safe, effective engine cleaning service can boost performance and extend lifespan.",
        url: "https://wellnessdetailing.com/engine-cleaning",
        siteName: "Wellness Detailing",
        type: "website",
    },
};

export default function EngineCleaning() {
    return (
        <>
            <ServiceHero
                header="Power Up Performance: Safe and Effective Engine Cleaning by Wellness Detailing"
                subheader="Don't neglect your car's heart! Our meticulous engine cleaning service removes grime, buildup, and contaminants, optimizing performance and extending engine life."
                url="https://placehold.co/1920x1080"
            />

            <div className="space-y-20 py-16 bg-white text-gray-800">

                <section className="max-w-6xl mx-auto space-y-8 px-4 md:px-8">
                    <h1 className="text-3xl font-bold text-center">
                        Why Choose Professional Engine Cleaning?
                    </h1>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="w-full h-[450px] relative rounded-lg shadow-md border border-gray-300">
                            <Image
                                src="/engine-placeholder.jpg"
                                alt="Engine Cleaning"
                                fill
                                className="object-cover rounded-lg"
                                sizes="100vw"
                            />
                        </div>
                        <ul className="list-disc pl-6 space-y-3 text-left text-gray-700">
                            <p>
                                Your car's engine is the heart of its performance. Over time,
                                grime, road dust, oil leaks, and other contaminants can
                                accumulate in the engine bay, hindering performance and
                                potentially leading to more serious issues. Here's why regular
                                professional engine cleaning is crucial:
                            </p>
                            <li><strong>Improved Performance:</strong> A clean engine bay allows for optimal airflow and heat dissipation, contributing to smoother operation and potentially even better fuel efficiency.</li>
                            <li><strong>Enhanced Engine Life:</strong> Removing grime and contaminants prevents corrosion and premature wear of engine components, extending your engine's lifespan.</li>
                            <li><strong>Easier Maintenance:</strong> A clean engine bay allows for easier access and inspection during routine maintenance or repairs.</li>
                            <li><strong>Increased Resale Value:</strong> A well-maintained car with a clean engine bay will undoubtedly fetch a higher price when you decide to sell.</li>
                            <li><strong>Peace of Mind:</strong> Knowing your engine is clean and operating efficiently gives you peace of mind on the road.</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>

                <section className="space-y-10 max-w-6xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center">
                        Our Safe and Effective Engine Cleaning Process
                    </h2>
                    <p className="max-w-3xl mx-auto text-center text-gray-600">
                        At Wellness Detailing, we understand the importance of safe and meticulous engine cleaning. Here's what you can expect during our service:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "Pre-Cleaning Inspection",
                            "Protective Measures",
                            "Eco-Friendly Cleaning Solutions"
                        ].map((title, i) => (
                            <div key={i} className="bg-white border rounded-lg p-4 shadow-sm space-y-2 text-center">
                                <div className="text-blue-600 text-2xl font-bold">{i + 1}</div>
                                <h3 className="font-bold">{title}</h3>
                                <p className="text-sm text-gray-700">
                                    {[
                                        "Our detail experts will thoroughly inspect your engine bay to identify any potential concerns and ensure the cleaning process is safe for your specific vehicle.",
                                        "We take all necessary precautions to protect sensitive electrical components from moisture.",
                                        "We use high-quality, eco-friendly cleaning solutions that effectively remove grime and contaminants without harming your engine or the environment."
                                    ][i]}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {["Degreasing & Detailing", "Final Touches"].map((title, i) => (
                            <div key={i} className="bg-white border rounded-lg p-4 shadow-sm space-y-2 text-center">
                                <div className="text-blue-600 text-2xl font-bold">{i + 4}</div>
                                <h3 className="font-bold">{title}</h3>
                                <p className="text-sm text-gray-700">
                                    {[
                                        "A targeted degreasing process removes built-up oil, grease, and road grime. We then meticulously detail the engine bay, cleaning all surfaces and components.",
                                        "Following a thorough rinse and drying process, we ensure a spotless and well-presented engine bay."
                                    ][i]}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>

                <section className="space-y-4 max-w-3xl mx-auto text-center">
                    <p>Don't let a dirty engine compromise your car's performance and lifespan. Invest in a professional engine cleaning service by Wellness Detailing.</p>
                    <ul className="list-disc list-inside space-y-1 text-left mx-auto max-w-md text-black font-semibold">
                        <li>Restore peak performance.</li>
                        <li>Extend engine life.</li>
                        <li>Enjoy peace of mind on the road.</li>
                    </ul>
                </section>

                <section className="space-y-10 max-w-5xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center">Engine Cleaning FAQs: Get Your Answers Here!</h2>
                    <p className="text-center text-gray-600">
                        At Wellness Detailing, we understand you might have questions about our professional engine cleaning service. Here are answers to some of the most frequently asked questions:
                    </p>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="font-bold">1. How often should I get my engine cleaned?</p>
                            <p>
                                The frequency depends on various factors like driving conditions, climate, and the overall cleanliness of your engine bay. Generally, we recommend engine cleaning every 12–18 months, or more frequently if you drive in dusty environments or experience frequent oil leaks.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-bold">2. Will engine cleaning damage my car's electrical components?</p>
                            <p>
                                Not if done properly. At Wellness Detailing, we take all necessary precautions to protect sensitive electrical components from moisture during the cleaning process. We avoid using high-pressure water and use specialized techniques to ensure a safe and effective clean.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-bold">3. What's included in your engine cleaning service?</p>
                            <p>Our engine cleaning service includes a comprehensive process:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Pre-cleaning inspection</strong> to assess your engine bay and identify any concerns.</li>
                                <li><strong>Protective measures</strong> to safeguard electrical components.</li>
                                <li><strong>Degreasing and detailing:</strong> We use eco-friendly cleaning solutions to remove built-up grime, oil, and road dust.</li>
                                <li><strong>Thorough rinsing and drying</strong> to ensure a spotless finish.</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <p className="font-bold">4. Can I clean my engine myself?</p>
                            <p>
                                You can attempt to clean your engine yourself, but it's crucial to use the right techniques and products to avoid damaging sensitive components. If you're not comfortable doing it yourself, a professional service like ours is the safer option.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-bold">5. What are some signs that my engine bay needs cleaning?</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Visible grime, oil buildup, or road dust accumulating in the engine bay.</li>
                                <li>A noticeable oil leak.</li>
                                <li>Strange odors emanating from the engine bay.</li>
                                <li>Overheating engine (in some cases)</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <p className="font-bold">6. Will engine cleaning improve my car's fuel efficiency?</p>
                            <p>
                                While a clean engine bay may contribute to smoother operation, the impact on fuel efficiency might be minimal. Regular maintenance, proper tire inflation, and driving habits have a more significant influence on fuel economy.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-bold">7. What if my engine bay is very dirty or greasy?</p>
                            <p>
                                Our cleaning process is effective for even heavily soiled engines. We use degreasers specifically formulated to tackle tough grime and oil buildup.
                            </p>
                        </div>

                    </div>

                    <div className="text-center space-y-4 pt-4">
                        <p className="font-bold">
                            Ready to breathe new life into your car's engine and optimize its performance? Schedule Your Engine Cleaning Today!
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>

                <section className="space-y-6 max-w-6xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center">Engine Cleaning Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-full h-[250px] bg-gray-100 rounded-lg border border-gray-300 overflow-hidden relative"
                            >
                                <Image
                                    src={`/images/gallery-placeholder-${i}.jpg`}
                                    alt={`Gallery Placeholder ${i}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
            </div>
            <QuoteForm />
        </>
    );
}

