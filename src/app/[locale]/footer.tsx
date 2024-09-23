'use client'

import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useLocale } from "next-intl";


export default function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <footer className="relative block bg-black py-12 w-full">
      <div className="px-8 max-w-1440p mx-auto">
        <ul
          className="list-none w-full text-left relative flex justify-start items-start font-sans font-normal text-lg mb-1 tracking-wide sm:mb-2 sm:text-lg text-white">
          <li><a href="/ca" className="link-menu-popi"><span 
            className={`before:top-23p before:!bg-white ${locale === 'ca' ? 'font-bold' : ''}`}>Catalan</span>
          </a></li>
          <li className="mx-2"> / </li>
          <li><a href="/en" className="link-menu-popi"><span
            className={`before:top-23p before:!bg-white ${locale === 'en' ? 'font-bold' : ''}`}>English</span></a></li>
        </ul>
        <ul
          className="list-none w-full text-left relative flex justify-start items-start font-sans font-normal text-lg mb-1 tracking-wide sm:mb-2 sm:text-lg text-white">
          <li><Link href="/privacy-policy" className={`hover:text-hover-black link-menu-popi ${pathname === '/'+locale+'/privacy-policy' ? 'font-bold' : ''}`}><span
            className="before:top-23p  before:!bg-white">Privacy policy</span>
          </Link></li>
          <li className="mx-2"> / </li>
          <li><Link href="/cookies-policy" className={`hover:text-hover-black link-menu-popi ${pathname === '/'+locale+'/cookies-policy' ? 'font-bold' : ''}`}>
            <span
              className="before:top-23p before:!bg-white">Cookies policy</span></Link>
          </li>
        </ul>
        <ul
          className="list-none w-full text-left relative flex justify-start items-start font-sans font-normal text-lg mb-1 tracking-wide sm:mb-2 sm:text-lg text-white">
          <li><a href="mailto:hello@acme.cat"
            className="link-menu-popi"><span
              className="before:top-23p before:!bg-white">hello@acme.cat</span></a>
          </li>
          <li className="mx-2"> / </li>
          <li><a href="tel:+34600000000" className="link-menu-popi"><span
            className="before:top-23p  before:!bg-white">+34 600 00 00 00</span>
          </a></li>
        </ul>
      </div>

    </footer>
  );
}