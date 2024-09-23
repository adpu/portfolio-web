import { useTranslations } from 'next-intl';


export default function Page(props: { params: { locale: string } }) {
    const t = useTranslations('Privacy');
    return (
        <div className="relative block bg-soft-gray w-full height-contact">
            <div className="relative flex flex-wrap justify-between items-start w-full max-w-1440p mx-auto p-8">
                <div className="w-full md:mb-0 mb-8">
                    <h1 className="font-sans font-bold text-23p leading-35p text-black mb-4"><span
                        className=" border-b-2 pb-1 border-b-black">{t('privacy1')}</span></h1>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('privacy2')}</p>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('privacy3')}</p>


                    <h2 className="mt-8 font-sans font-bold text-23p leading-35p text-black mb-4">{t('privacy4')}</h2>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('privacy5')}</p>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('privacy6')}</p>
                    <h2 className="mt-8 font-sans font-bold text-23p leading-35p text-black mb-4">{t('privacy7')}</h2>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('privacy8')}</p>
                    <p className="font-sans font-normal text-23p leading-35p text-black mb-8">{t('privacy9')}</p>

                </div>

            </div>
        </div>
    )
}