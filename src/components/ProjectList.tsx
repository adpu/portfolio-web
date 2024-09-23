import { useLocale, useTranslations } from 'next-intl';
import ProjectIteam from './ProjectIteam';
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

export default function ProjectList({ projects }: { projects: Project[] }) {
  const locale = useLocale();
  return (
    <div>
      {projects ? (
        <ul className="relative w-full flex-wrap flex justify-between items-center list-none mb-12">
          {projects.map((project) => (

            <ProjectIteam project={project} />
          ))}
        </ul>
      ) : (
        <p>No projects</p>
      )}
    </div>
  );
}