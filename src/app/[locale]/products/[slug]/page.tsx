import Image from 'next/image'
import { createClient } from '@/utils/supabase/server';


export default async function Page({ params }: { params: { slug: string, locale: string } }) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', params.slug)
    .single();
  if (error) {
    console.error(error);
    return (<p>Error</p>);
  }
  const imagesArray = data.images || [];
  return (
    <div>
      <div className="relative block w-full max-w-1440p mx-auto p-8">
        <h1 className="font-sans font-bold text-25p leading-30p text-black mb-2">{data.name}</h1>
        <Image
            src={`/images/${data.image_cover}`}
            alt={data.name}
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
            className="w-full h-auto hidden sm:block mb-8"
          />
        
        <div className="relative w-full flex flex-wrap justify-start items-start mb-0 sm:mb-4">

          <div className="w-full">
            <p className="font-sans font-normal text-base text-black mb-4">
           
              {data.text.ca }

            
            </p>

          </div>
        </div>
      </div>
      <div className="relative block bg-soft-gray w-full">
        <div className="relative block w-full max-w-1440p mx-auto px-8 py-16 text-center">
 
        <ul className="relative w-full flex-wrap flex justify-between items-center list-none mb-12 gap-2">
          {imagesArray.map((imageObject: { image: string }, index: number) => (
          <li className="md:w-[calc(50%-16px)] w-full mb-6">
            <Image
            src={`/images/${imageObject.image}`}
            alt={`${data.name} number ${index}`}
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
            className="w-full h-auto object-cover aspect-43"
          />
            </li>
        ))}
        </ul>

        </div>
      </div>
    </div>
  );
};
