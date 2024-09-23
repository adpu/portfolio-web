import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Page(props: { params: { locale: string } }) {
    const t = useTranslations('Contact');
    return (
        <div className="relative block bg-soft-gray w-full height-contact">
            <div className="relative flex flex-wrap justify-between items-start w-full max-w-1440p mx-auto p-8">
                <div className="w-full md:w-1/2 md:mb-0 mb-8">
                    <div className="pr-0 md:pr-24">
                        <h1 className="font-sans font-bold text-23p leading-35p text-black mb-4">{t('contact1')}</h1>
                        <p className="font-sans font-normal text-23p leading-35p text-black">{t('contact2')}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2  md:mb-0 mb-8">
                    <h2 className="font-sans font-bold text-23p leading-35p text-black">{t('contact3')}</h2>
                    <p className="font-sans font-normal text-23p leading-35p text-black"><a
                        href="mailto:hello@acme.cat"
                        className="link-menu-popi"><span className="before:top-23p">hello@acme.cat</span></a><br />
                        <a href="tel:+34600000000" className="link-menu-popi"><span className="before:top-23p">+34 600 00 00
                            00</span></a>
                    </p>
                    <h2 className=" mt-8 font-sans font-bold text-23p leading-35p text-black">{t('contact4')}</h2>
                    <p className="font-sans font-normal text-23p leading-35p text-black"><a href="https://www.linkedin.com/" target="_blank"
                        className="link-menu-popi"><span className="before:top-23p">Linkedin</span></a><br />
                        <a href="https://github.com/" target="_blank" className="link-menu-popi"><span className="before:top-23p">Github</span></a>
                    </p>
                </div>
            </div>
        </div>
    );
}