import GalleryHero from "@/components/GalleryHero"
import QuoteForm from "@/components/QuoteForm"
import Image from "next/image"

export const metadata = {
  title: "Interior Cleaning Gallery | Wellness Detailing",
  description:
    "View our Full Interior Cleaning gallery and see how we restore vehicle interiors to like-new condition. From carpets to consoles, our deep-cleaning work speaks for itself.",
  keywords: [
    "Interior Car Cleaning",
    "Car Detailing Gallery",
    "Full Interior Detail",
    "Car Upholstery Cleaning",
    "Deep Clean Vehicle",
    "Car Carpet Shampoo",
    "Car Odor Removal",
    "Vehicle Interior Detailing",
    "Stain Removal Auto",
    "Wellness Detailing Services"
  ],
  openGraph: {
    title: "Interior Cleaning Gallery | Wellness Detailing",
    description:
      "Explore before-and-after results of our full interior car cleaning service. See how we tackle stains, odors, and grime to restore your car’s interior.",
    url: "https://wellnessdetailing.com/full-interior-cleaning-gallery",
    siteName: "Wellness Detailing",
    type: "website",
  },
};

export default function FullInteriorCleaningGallery() {
    return (
        <>
            <GalleryHero header="Interior Cleaning Gallery" button="Learn More About Interior Cleaning Service" url="https://placehold.co/1920x1080" loc="services/interior/full-interior-cleaning" />
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={`/images/interior-cleaning-${i}.jpg`}
                                        alt={`Interior Cleaning ${i}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            <QuoteForm />
        </>
    )
}