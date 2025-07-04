import GalleryHero from "@/components/GalleryHero"
import QuoteForm from "@/components/QuoteForm"
import Image from "next/image"

export default function EngineCleaningGallery() {
    return (
        <>
            <GalleryHero header="Engine Cleaning Gallery" button="Learn More About Engine Cleaning Service" url="https://placehold.co/1920x1080" loc="services/exterior/engine-cleaning" />
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={`/images/engine-cleaning-${i}.jpg`}
                                        alt={`Engine Cleaning ${i}`}
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