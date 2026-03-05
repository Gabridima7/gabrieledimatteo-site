import { motion } from 'framer-motion';

interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  type: string;
  country: string;
  countryFlag?: string;
  services: string[];
  image: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const flag = project.countryFlag || project.country.split(' ')[0];

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="block group rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111111] transition-all duration-300 hover:border-[rgba(0,37,255,0.4)] hover:shadow-[0_0_30px_rgba(0,37,255,0.1)]"
      data-cursor="spotlight"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <h3 className="text-lg font-bold text-white">{project.name}</h3>
        <p className="text-sm text-[#888] line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          {project.services.map((service, j) => (
            <span
              key={j}
              className="px-4 py-1.5 rounded-full text-sm bg-[rgba(255,255,255,0.08)] text-white border border-[rgba(255,255,255,0.1)]"
            >
              {service}
            </span>
          ))}
          <span className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-lg leading-none">
            {flag}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
export type { Project };
