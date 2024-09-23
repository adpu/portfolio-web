'use client'
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useLocale } from "next-intl";
import {useTranslations} from 'next-intl';

export default function Header() {
  const locale = useLocale();
  const [showMe, setShowMe] = useState(false);
 
  function toggle() {
    setShowMe(!showMe);
  }
  const t = useTranslations('Routes');
  const n = useTranslations('Menu');
  const pathname = usePathname();

  return (
    <header>
      <div
        className="relative flex justify-between content-center items-center w-full my-8 sm:my-12 px-8 max-w-1440p mx-auto">
        <i className="hidden sm:block text-4xl leading-none text-black icon-logo"></i>
        <i className="block sm:hidden  text-4xl leading-none text-black icon-logo-mobile"></i>

        <ul
          className="hidden sm:flex relative w-full  justify-end items-center list-none font-sans font-normal text-black text-23p leading-none ">
          <li className="ml-8"><Link href="/" className={`hover:text-hover-black link-menu-popi ${pathname === '/'+locale ? 'font-bold' : ''}`}>
            <span
              className="before:top-23p">{n('menu1')}</span></Link></li>
          <li className="ml-8"><Link href="/company" className={`hover:text-hover-black link-menu-popi ${pathname === '/'+locale+'/' + t('route-company') ? 'font-bold' : ''}`}>
            <span
              className="before:top-23p">{n('menu2')}</span></Link>
          </li>
          <li className="ml-8"><Link href="/contact" className={`hover:text-hover-black link-menu-popi ${pathname === '/'+locale+'/' + t('route-contact') ? 'font-bold' : ''}`}><span
            className="before:top-23p">{n('menu3')}</span></Link>
          </li>
        </ul>
        <button onClick={toggle} className="flex items-center content-center border-0 bg-transparent my-0 sm:hidden"
        >
          <i className="icon-hamburguer-menu my-0 text-black leading-none text-3xl" ></i>

        </button>

      </div>

      <div className={`fixed w-full sm:hidden h-auto top-0 left-0 py-32p bg-white px-8 z-50 transition-all duration-300 ${showMe ? 'block' : 'hidden'
        }`}>

        <div className="relative flex justify-between content-center items-center w-full mb-32p">
          <a href="/">
            <i className="block text-64p leading-none text-black icon-logo-mobile"></i>
          </a>
          <button onClick={toggle} className="flex items-center content-center border-0 bg-transparent my-0">
            <i className="my-0 text-black leading-none  text-5xl icon-close-button"></i>
          </button>

        </div>

        <ul className="block relative w-full list-none font-sans font-bold text-black text-32p my-12 leading-none">
          <li className="mb-4"><a href="/"
            className="hover:text-hover-black link-menu-popi"><span
              className="before:top-8">{n('menu1')}</span></a>
          </li>
          <li className="mb-4"><a href="/company"
            className="hover:text-hover-black link-menu-popi"><span
              className="before:top-8">{n('menu2')}</span></a>
          </li>
          <li className="mb-4"><a
            href="/contact"
            className="hover:text-hover-black link-menu-popi"><span
              className="before:top-8">{n('menu1')}</span></a>
          </li>
        </ul>
      </div>

    </header>
  );
}