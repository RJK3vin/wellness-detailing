import GalleryHero from "@/components/GalleryHero";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";

export default function OurTeam() {
    const team = [
        { name: 'David Castillo', img: '/images/david.jpg' },
        { name: 'Maddie Andrus', img: '/images/maddie.jpg'},
        { name: 'Isai Castillo', img: '/images/isai.jpg' },
        { name: 'Miguel Parada', img: '/images/miguel.jpg' },
        { name: 'Joe El Khatib', img: '/images/joe.jpg' },
        { name: 'Noah Andrus', img: '/images/noah.jpg'},
        { name: 'Jonathan Argueta', img: '/images/jonathan'},
        { name: 'Amber Vong', img: '/images/amber'},
        { name: 'Kevin Ritthaworn', img: '/images/kevin'},
        { name: 'Placeholder', img: '/images/placeholder'},
    ];

    return (
        <>
            <GalleryHero header="MEET THE CREW!" button="Get A Free Quote" url="https://placehold.co/1920x1080" loc="contact" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 py-16 px-4 md:px-10 text-gray-800 place-items-center">
                {team.map((person) => (
                    <div key={person.name} className="text-center">
                        <div className="relative w-36 h-36 mx-auto shadow-lg rounded-full overflow-hidden">
                            <Image
                                src={person.img}
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