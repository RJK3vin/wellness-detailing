import GalleryHero from "@/components/GalleryHero";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";

export default function OurTeam() {
    const team = [
        { name: 'David Castillo', img: '/images/david.jpg' },
        { name: 'Isai Castillo', img: '/images/isai.jpg' },
        { name: 'Joe El Khatib', img: '/images/joe.jpg' },
        { name: 'Miguel Parada', img: '/images/miguel.jpg' },
    ];

    return (
        <>
            <GalleryHero header="MEET THE CREW!" button="Get A Free Quote" url="https://placehold.co/1920x1080" loc="contact" />
            <div className="flex justify-center items-center gap-10 py-16 px-4 md:px-10 flex-wrap text-gray-800">
                {team.map((person) => (
                    <div key={person.name} className="text-center">
                        <div className="relative w-36 h-36 mx-auto shadow-lg rounded-full overflow-hidden">
                            <Image
                                src="/images/your-image.jpg"
                                alt={person.name}
                                fill
                                className="object-cover"
                                sizes="144px"
                            />
                        </div>
                        <p className="mt-3 font-medium">{person.name}</p>
                    </div>
                ))}
            </div>
            <QuoteForm />
        </>
    )
}