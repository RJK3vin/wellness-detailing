import GalleryHero from "@/components/GalleryHero"
import QuoteForm from "@/components/QuoteForm"
import Image from "next/image"

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