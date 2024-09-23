import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Page(props: { params: { locale: string } }) {
  const t = useTranslations('Company');
  return (

    <div className="relative block bg-soft-gray w-full height-contact">
      <div className="relative flex flex-wrap justify-between items-start w-full max-w-1440p mx-auto p-8">
        <div className="w-full md:w-1/2 md:mb-0 mb-8">
          <div className="pr-0 md:pr-24">
            <h1 className=" font-bold text-23p leading-35p text-black mb-4">Avery Sterling</h1>
            <p className=" font-normal text-23p leading-35p text-black mb-8">{t('company1')}</p>
            <p className=" font-normal text-23p leading-35p text-black mb-8">{t('company2')}</p>
            <p className=" font-normal text-23p leading-35p text-black mb-8">{t('company3')}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2  md:mb-0 mb-8">
          <Image
            priority
            src="/images/66c4384702f8f.avif"
            width={0}
            height={0}
            sizes="100vw"
            className='image-me'
            style={{ width: '100%', display: 'block' }}
            alt="acme-image"
          />

        </div>
      </div>
    </div>

  );
}