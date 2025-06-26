import GalleryHero from "@/components/GalleryHero"
import QuoteForm from "@/components/QuoteForm"
import Image from "next/image"

export default function EngineCleaningGallery() {
    return (
        <>
            <GalleryHero header="Engine Cleaning Gallery" button="Learn More About Engine Cleaning Service" url="https://placehold.co/1920x1080" loc="enginecleaning" />
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition"
                            >
                                <Image
                                    fill
                                    src={`https://placehold.co/600x400?text=Photo+${i}`}
                                    alt={`Engine Cleaning ${i}`}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <QuoteForm />
        </>
    )
}