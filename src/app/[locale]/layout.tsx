import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './header';
import Footer from './footer';
import { Public_Sans } from 'next/font/google';
import '../globals.css';

const public_sans = Public_Sans({
  subsets: ['latin'],
 })

export default async function LocaleLayout({
  children,
  params: { locale }
}: {

  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();
 

  return (
    <html lang={locale}>
      <body className={`${public_sans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}