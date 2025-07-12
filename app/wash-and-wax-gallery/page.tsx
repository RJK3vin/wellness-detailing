import GalleryHero from "@/components/GalleryHero"
import QuoteForm from "@/components/QuoteForm"
import Image from "next/image"

export const metadata = {
  title: "Wash and Wax Gallery | Wellness Detailing",
  description:
    "Explore our Wash and Wax gallery showcasing detailed before-and-after shots of vehicle transformations. See the quality of our work for yourself.",
  keywords: [
    "Wash and Wax",
    "Auto Detailing",
    "Car Wash Gallery",
    "Exterior Car Cleaning",
    "Wellness Detailing",
    "Car Detailing Services",
    "Vehicle Waxing",
    "Car Shine",
    "Paint Protection",
  ],
  openGraph: {
    title: "Wash and Wax Gallery | Wellness Detailing",
    description:
      "See how our Wash and Wax service can transform your vehicle. View the gallery of our recent work.",
    url: "https://wellnessdetailing.com/wash-and-wax-gallery",
    siteName: "Wellness Detailing",
    type: "website",
  },
};

export default function WashAndWaxGallery() {
    return (
        <>
            <GalleryHero header="View Our Wash and Wax Work" button="Learn More About Wash & Wax Service" url="https://placehold.co/1920x1080" loc="services/exterior/wash-and-wax" />
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={`/images/wash-and-wax-${i}.jpg`}
                                        alt={`Wash and Wax ${i}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}