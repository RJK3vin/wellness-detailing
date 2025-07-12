'use client';

import { ChevronDown, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white/70 backdrop-blur-sm text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            <Image
              fill
              src="/Images/Home/logo.JPEG"
              alt="Wellness Detailing"
              className="rounded-full object-cover bg-gray-200 shadow-inner"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-[15px] font-semibold tracking-tight">
            <Link href="/" className={isActive('/') ? 'text-blue-600 font-semibold' : ''}>Home</Link>

            <Dropdown
              title="Film Service"
              links={[
                { label: 'Window Tinting', href: '/window-tinting' },
                { label: 'Paint Protection Film', href: '/paint-protection-film' },
                { label: 'Vehicle Wraps', href: '/vehicle-wraps' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Exterior"
              links={[
                { label: 'Paint Correction', href: '/paint-correction' },
                { label: 'Ceramic Coating', href: '/ceramic-coating' },
                { label: 'Paint Overspray Removal', href: '/paint-overspray-removal' },
                { label: 'Wash and Wax', href: '/wash-and-wax' },
                { label: 'Engine Cleaning', href: '/engine-cleaning' },
                { label: 'Headlight Restoration', href: '/headlight-restoration' },
                { label: 'Premium Wash', href: '/premium-wash' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Interior"
              links={[
                { label: 'Full Interior Cleaning', href: '/full-interior-cleaning' },
                { label: 'Mini-Interior Detail', href: '/mini-interior-detail' },
                { label: 'Smoke Odor Removal', href: '/smoke-odor-removal' },
                { label: 'Restorative Interior Cleaning', href: '/restorative-interior-cleaning' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Gallery"
              links={[
                { label: 'Engine Cleaning Gallery', href: '/engine-cleaning-gallery' },
                { label: 'Wash and Wax Gallery', href: '/wash-and-wax-gallery' },
                { label: 'Full Interior Cleaning Gallery', href: '/full-interior-cleaning-gallery' },
                { label: 'Paint Correction Gallery', href: '/paint-correction-gallery' }
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="Service Area"
              links={[
                { label: 'Wellness Detailing Shop', href: '/wellness-detailing-shop' },
                { label: 'Poolesville MD Mobile Detailing', href: '/poolesville-md-mobile-car-detailing' },
                { label: 'Columbia Mobile Detailing', href: '/columbia-mobile-detailing' },
                { label: 'College Park Mobile Detailing', href: '/college-park-mobile-car-detailing' },
                { label: 'Damascus MD Mobile Detailing', href: '/damascus-md-car-mobile-detailing' },
                { label: 'Laurel MD Mobile Detailing', href: '/laurel-md-mobile-car-detailing' },
                { label: 'Beltsville MD Mobile Detailing', href: '/beltsville-md-mobile-detailing' },
                { label: 'Silver Spring MD Mobile Detailing', href: '/silver-spring-md-mobile-car-detailing' },
                { label: 'Bethesda MD Mobile Detailing', href: '/bethesda-md-mobile-detailing' },
                { label: 'Potomac MD Mobile Detailing', href: '/potomac-md-mobile-detailing' },
                { label: 'Clarksburg Mobile Detailing', href: '/clarksburg-mobile-detailing' },
                { label: 'Gaithersburg Mobile Detailing', href: '/gaithersburg-mobile-detailing' },
                { label: 'Rockville MD Mobile Detailing', href: '/rockville-md-mobile-detailing' },
                { label: 'Olney MD Mobile Detailing', href: '/olney-md-mobile-detailing' },
              ]}
              currentPath={pathname}
            />

            <Dropdown
              title="About Us"
              links={[
                { label: 'FAQs', href: '/detailing-faqs' },
                { label: 'Our Team', href: '/our-team' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Detailing Methodology', href: '/detailing-methodology' },
                { label: 'Appointment Deposit Policy', href: '/appointment-deposit-policy' }
              ]}
              currentPath={pathname}
            />
          </nav>
          <div className="flex items-center gap-4 text-[15px] font-semibold tracking-tight">
            <div className="hidden lg:flex items-center gap-1 text-blue-600">
              <a href="tel:2406300211" className="flex items-center gap-1">
                <Phone className="w-[20px] h-[20px]" />
                <span>(240) 630-0211</span>
              </a>
            </div>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-200 text-[15px] font-semibold tracking-tight"
            >
              GET A QUOTE
            </a>
            <a
              href="/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-200 text-[15px] font-semibold tracking-tight"
            >
              BOOK NOW
            </a>
          </div>
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
                className={`block px-1 py-2.5 hover:bg-blue-50 transition text-sm whitespace-nowrap ${currentPath === href ? 'text-blue-700 font-semibold bg-blue-100' : ''}`}
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