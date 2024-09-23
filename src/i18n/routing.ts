import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ca'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales
    '/': '/',
    // If locales use different paths, you can
    // specify each external path per locale
   
    '/company': {
      en: '/company',
      ca: '/empresa'
    },
    '/contact': {
      en: '/contact',
      ca: '/contacte'
    },
    '/privacy-policy': {
      en: '/privacy-policy',
      ca: '/politica-privacitat'
    },
    '/cookies-policy': {
      en: '/cookies-policy',
      ca: '/politica-cookies'
    },
 
    // Dynamic params are supported via square brackets
    '/products/[slug]':{
      en: '/products/[slug]',
      ca: '/productes/[slug]'
    }
    
  }
   
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);