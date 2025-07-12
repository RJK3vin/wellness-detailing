import GalleryHero from "@/components/GalleryHero"
import QuoteForm from "@/components/QuoteForm"
import Image from "next/image"

export const metadata = {
  title: "Paint Correction Gallery | Wellness Detailing",
  description:
    "See the stunning results of our paint correction service. View before-and-after shots that show how we restore your car's paint to a flawless finish.",
  keywords: [
    "Paint Correction",
    "Car Detailing",
    "Auto Paint Restoration",
    "Scratch Removal",
    "Swirl Mark Removal",
    "Car Buffing",
    "Exterior Detailing",
    "Paint Enhancement",
    "Wellness Detailing",
    "Car Paint Shine",
  ],
  openGraph: {
    title: "Paint Correction Gallery | Wellness Detailing",
    description:
      "Explore our Paint Correction gallery to see how we eliminate scratches, swirl marks, and imperfections, bringing your car's paint back to life.",
    url: "https://wellnessdetailing.com/paint-correction-gallery",
    siteName: "Wellness Detailing",
    type: "website",
  },
};

export default function PaintCorrectionGallery() {
    return (
        <>
            <GalleryHero header="Paint Correction Gallery" button="Learn More About Paint Correction Service" url="https://placehold.co/1920x1080" loc="services/exterior/paint-correction" />
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
                                        src={`/images/paint-correction-${i}.jpg`}
                                        alt={`Paint Correction ${i}`}
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