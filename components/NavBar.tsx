'use client';

import { ChevronDown, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white/90 backdrop-blur-sm text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative w-10 h-10">
            <Image
              fill
              src="/placeholder-logo.png"
              alt="Wellness Detailing"
              className="rounded-full object-cover bg-gray-200 shadow-inner"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-tight">
            <a href="/" className={isActive('/') ? 'text-blue-600 font-semibold' : ''}>Home</a>

            <Dropdown
              title="Film Service"
              links={[
                { label: 'Window Tinting', href: '/services/film-service/window-tinting' },
                { label: 'Paint Protection Film', href: '/services/film-service/paint-protection-film' },
                { label: 'Vehicle Wraps', href: '/services/film-service/vehicle-wraps' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Exterior"
              links={[
                { label: 'Paint Correction', href: '/services/exterior/paint-correction' },
                { label: 'Ceramic Coating', href: '/services/exterior/ceramic-coating' },
                { label: 'Paint Overspray Removal', href: '/services/exterior/paint-overspray-removal' },
                { label: 'Wash and Wax', href: '/services/exterior/wash-and-wax' },
                { label: 'Engine Cleaning', href: '/services/exterior/engine-cleaning' },
                { label: 'Headlight Restoration', href: '/services/exterior/headlight-restoration' },
                { label: 'Premium Wash', href: '/services/exterior/premium-wash' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Interior"
              links={[
                { label: 'Full Interior Cleaning', href: '/services/interior/full-interior-cleaning' },
                { label: 'Mini-Interior Detail', href: '/services/interior/mini-interior-detail' },
                { label: 'Smoke Odor Removal', href: '/services/interior/smoke-odor-removal' },
                { label: 'Restorative Interior Cleaning', href: '/services/interior/restorative-interior-cleaning' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Gallery"
              links={[
                { label: 'Engine Cleaning Gallery', href: '/gallery/engine-cleaning-gallery' },
                { label: 'Wash and Wax Gallery', href: '/gallery/wash-and-wax-gallery' },
                { label: 'Full Interior Cleaning Gallery', href: '/gallery/full-interior-cleaning-gallery' },
                { label: 'Paint Correction Gallery', href: '/gallery/paint-correction-gallery' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Service Area"
              links={[
                { label: 'Wellness Detailing Shop', href: '/service-area/wellness-detailing' },
                { label: 'Poolesville MD Mobile Detailing', href: '/service-area/poolesville-detailing' },
                { label: 'Columbia Mobile Detailing', href: '/service-area/columbia-detailing' },
                { label: 'College Park Mobile Detailing', href: '/service-area/college-park-detailing' },
                { label: 'Damascus MD Mobile Detailing', href: '/service-area/damascus-detailing' },
                { label: 'Laurel MD Mobile Detailing', href: '/service-area/laurel-detailing' },
                { label: 'Beltsville MD Mobile Detailing', href: '/service-area/beltsville-detailing' },
                { label: 'Silver Spring MD Mobile Detailing', href: '/service-area/silver-spring-detailing' },
                { label: 'Bethesda MD Mobile Detailing', href: '/service-area/bethesda-detailing' },
                { label: 'Potomac MD Mobile Detailing', href: '/service-area/potomac-detailing' },
                { label: 'Clarksburg Mobile Detailing', href: '/service-area/clarksburg-detailing' },
                { label: 'Gaithersburg Mobile Detailing', href: '/service-area/gaithersburg-detailing' },
                { label: 'Rockville MD Mobile Detailing', href: '/service-area/rockville-detailing' },
                { label: 'Olney MD Mobile Detailing', href: '/service-area/olney-detailing' },
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="About Us"
              links={[
                { label: 'FAQs', href: '/faqs' },
                { label: 'Our Team', href: '/our-team' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Detailing Methodology', href: '/detailing-methodology' },
                { label: 'Appointment Deposit Policy', href: '/appointment-deposit-policy' }
              ]}
              currentPath={pathname}
            />
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm font-semibold tracking-tight">
          <div className="hidden lg:flex items-center gap-1 text-blue-600">
            <a href="tel:2406300211" className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(240) 630-0211</span>
            </a>
          </div>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const Dropdown = ({ title, links, currentPath }: { title: string; links: { label: string; href: string }[]; currentPath: string }) => {
  return (
    <div className="relative group">
      <div className={`flex items-center gap-1 cursor-pointer py-2 ${links.some(link => link.href === currentPath) ? 'text-blue-600 font-semibold' : ''}`}>
        {title} <ChevronDown className="w-4 h-4" />
      </div>

      <div className="absolute left-0 top-full w-56 h-2 bg-transparent"></div>
      <div className="absolute left-0 top-full mt-2 w-56 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
        <ul className="py-2">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`block px-4 py-2 hover:bg-blue-50 transition text-xs whitespace-nowrap ${currentPath === href ? 'text-blue-700 font-semibold bg-blue-100' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

