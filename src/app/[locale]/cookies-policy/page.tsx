import { useTranslations } from 'next-intl';


export default function Page(props: { params: { locale: string } }) {
    const t = useTranslations('Cookies');
    return (
        <div className="relative block bg-soft-gray w-full height-contact">
            <div className="relative flex flex-wrap justify-between items-start w-full max-w-1440p mx-auto p-8">
                <div className="w-full md:mb-0 mb-8">

                    <h1 className="font-sans font-bold text-23p leading-35p text-black mb-4"><span
                        className=" border-b-2 pb-1 border-b-black">{t('cookies1')}</span></h1>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('cookies2')}</p>
                    <h2 className="mt-8 font-sans font-bold text-23p leading-35p text-black mb-4">{t('cookies3')}</h2>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('cookies4')}</p>
                    <h2 className="mt-8 font-sans font-bold text-23p leading-35p text-black mb-4">{t('cookies5')}</h2>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('cookies6')}</p>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('cookies7')}</p>



                    <h2 className="mt-8 font-sans font-bold text-23p leading-35p text-black mb-4">{t('cookies9')}</h2>
                   <ul className="list-disc text-left font-sans font-normal text-23p leading-35p text-black ml-8 mb-8">
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank"
                            className="link-menu-popi"><span className="before:top-23p before:!bg-black">Google
                                Chrome</span></a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                            target="_blank" className="link-menu-popi"><span className="before:top-23p before:!bg-black">Mozilla
                                Firefox</span></a></li>
                        <li><a href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9"
                            target="_blank" className="link-menu-popi"><span className="before:top-23p before:!bg-black">Internet
                                Explorer</span></a></li>
                        <li><a href="http://support.apple.com/kb/ph5042" target="_blank" className="link-menu-popi"><span
                            className="before:top-23p before:!bg-black">Safari</span></a></li>
                    </ul>


                </div>

            </div>
        </div>
    )
}