import ClarksburgContent from "./ClarksburgContent"

export const metadata = {
    title: "Clarksburg Mobile Detailing | Your Local Car Care Champions",
    description: "Clarksburg Mobile Detailing provides high-quality car detailing services in Clarksburg, WV. Locally owned, certified experts, top-tier products, and mobile convenience!",
    keywords: [
        "Clarksburg Mobile Detailing",
        "mobile car detailing Clarksburg WV",
        "ceramic coating Clarksburg",
        "paint correction Clarksburg",
        "Clarksburg detailing services"
    ],
    alternates: {
        canonical: "https://wellnessdetailing.com/clarksburgmobiledetailing",
    },
    openGraph: {
        title: "Clarksburg Mobile Detailing | Your Local Car Care Champions",
        description: "Explore our expert detailing services in Clarksburg, WV. Interior cleaning, ceramic coating, paint correction, and more—delivered to your location!",
        url: "https://wellnessdetailing.com/clarksburgmobiledetailing",
        siteName: "Wellness Detailing",
        type: "website",
    }
}

export default function Page() {
    return <ClarksburgContent />
}