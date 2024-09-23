import ProjectList from '@/components/ProjectList';
import { createClient } from '@/utils/supabase/server';
 
export default async function HomePage() {
  const supabase = createClient();
  const { data: projects, error } = await supabase.from("projects").select();
  
  if (error) {
    console.error("Error fetching projects:", error);
    return <p>Failed to load projects.</p>;
  }

  return (
    <div>
    <div className="relative block w-full px-6 max-w-1440p mx-auto">
      <ProjectList projects={projects || []} />     
    </div>
 
  </div>
);
}