import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const film = [
    {
      name: "Window Tinting",
      lo: "/window-tinting"
    },
    {
      name: "Paint Protection Film",
      lo: "/paint-protection-film"
    },
    {
      name: "Vehicle Wraps",
      lo: "/vehicle-wraps"
    },
  ]
  const company = [
    {
      name: "Home",
      lo: "/"
    },
    {
      name: "About Us",
      lo: "/about-section"
    },
    {
      name: "Review",
      lo: "/reviews"
    },
    {
      name: "Contact",
      lo: "/contact"
    }
  ]

  const exterior = [
    {
      name: "Paint Correction",
      lo: "/paint-correction"
    },
    {
      name: "Ceramic Coating",
      lo: "/ceramic-coating"
    },
    {
      name: "Paint Overspray Removal",
      lo: "/paint-overspray-removal"
    },
    {
      name: "Wash and Wax",
      lo: "/wash-and-wax"
    },
    {
      name: "Engine Cleaning",
      lo: "/engine-cleaning"
    },
    {
      name: "Headlight Restoration",
      lo: "/headlight-restoration"
    },
    {
      name: "Premium Wash",
      lo: "/premium-wash"
    },        
  ]

  const interior = [
    {
      name: "Full Interior Cleaning",
      lo: "/full-interior-cleaning"
    },
    {
      name: "Mini-Interior Detail",
      lo: "/mini-interior-detail"
    },
    {
      name: "Smoke Odor Removal",
      lo: "/smoke-odor-removal"
    },
    {
      name: "Restorative Interior Cleaning",
      lo: "/restorative-interior-cleaning"
    },    
  ]

  const service = [
    {
      name: "Beltsville MD Mobile Detailing",
      lo: "/beltsville-md-mobile-detailing"
    },
    {
      name: "Silver Spring MD Mobile Detailing",
      lo: "/silver-spring-md-mobile-car-detailing"
    },
    {
      name: "Clarksburg mobile detailing",
      lo: "/clarksburg-mobile-detailing"
    },
    {
      name: "Gaithersburg Mobile Detailing",
      lo: "/gaithersburg-mobile-detailing"
    },
    {
      name: "Rockville MD Mobile Detailing",
      lo: "/rockville-md-mobile-detailing"
    },
    {
      name: "Olney MD Mobile Detailing",
      lo: "/olney-md-mobile-detailing"
    },
    {
      name: "Columbia Mobile Detailing",
      lo: "/columbia-mobile-detailing"
    },
    {
      name: "Potomac MD Mobile Detailing",
      lo: "/potomac-md-mobile-detailing"
    },       
  ]

  return (
    <footer className="bg-slate-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">FILM SERVICE</h3>
            <ul className="space-y-1 text-gray-300">
              {film.map((item) => (
                <li key={item.name} className="relative group">
                  <div className="inline-block">
                    <a
                      href={item.lo}
                      className="block py-1 hover:text-blue-400 transition"
                    >
                      {item.name}
                    </a>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                      {item.name}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-1 text-gray-300">
              {company.map((item) => {
                return (
                  <li key={item.name} className="relative group">
                    <div className="inline-block">
                      <a
                        href={item.lo}
                        className="block py-1 hover:text-blue-400 transition"
                      >
                        {item.name}
                      </a>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">EXTERIOR</h3>
          <ul className="space-y-1 text-gray-300">
            {exterior.map((item) => (
              <li key={item.name} className="relative group">
                <div className="inline-block">
                  <a
                    href={item.lo}
                    className="block py-1 hover:text-blue-400 transition"
                  >
                    {item.name}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">INTERIOR</h3>
          <ul className="space-y-1 text-gray-300">
            {interior.map((item) => (
              <li key={item.name} className="relative group">
                <div className="inline-block">
                  <a
                    href={item.lo}
                    className="block py-1 hover:text-blue-400 transition"
                  >
                    {item.name}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">SERVICE AREA</h3>
          <ul className="space-y-1 text-gray-300">
            {service.map((item) => (
              <li key={item.name} className="relative group">
                <div className="inline-block">
                  <a
                    href={item.lo}
                    className="block py-1 hover:text-blue-400 transition"
                  >
                    {item.name}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap">
                    {item.name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:WellnessDetailing@gmail.com" className="hover:text-blue-400 transition">
                WellnessDetailing@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:2406300211" className="hover:text-blue-400 transition">
                (240) 630-0211
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Copyright © 2024 Wellness Detailing - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
