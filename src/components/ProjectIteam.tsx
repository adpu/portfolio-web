import { useLocale } from 'next-intl';

import Image from 'next/image'

interface Project {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  text: {
    ca: string; // Catalan
    en: string; // English
  };
  image_cover: string;
  images: string;
  metatitle: {
    ca: string; // Catalan
    en: string; // English
  };
  metadescription: {
    ca: string; // Catalan
    en: string; // English
  };
  status: boolean;
  updated_at: string;
}

export default function ProjectIteam({ project }: { project: Project }) {
  const locale = useLocale();
  return (
    <li className="w-full mb-8 sm:mb-0 sm:w-1/2 lg:w-1/3 p-2">
      <figure className="relative">
        <a href={`/${locale}/products/${project.slug}`}
          className="mb-0 relative block z-20 transition-all opacity-100 sm:hover:opacity-0 hover:opacity-100">
          <Image
            src={`/images/${project.image_cover}`}
            alt={project.name}
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
            className="w-full h-auto aspect-43 object-cover"
          /></a>

        <figcaption
          className="z-10 text-center relative sm:absolute top-0 bottom-0 content-center right-0 left-0 flex justify-center flex-wrap items-center p-4">
          <h2
            className="block relative w-full text-center font-sans font-bold text-black text-xl leading-30p">
            {project.name}</h2>
          <p
            className="block mx-auto max-w-full sm:max-w-[70%] relative w-full text-center font-sans font-normal text-black text-sm ">
            {project.metadescription.ca}</p>
        </figcaption>
      </figure>
    </li>
  );
}