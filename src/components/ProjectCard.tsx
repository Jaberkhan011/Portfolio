import { useState } from "react";
import { ArrowDown, ArrowUpRight, GitBranch } from "lucide-react";

type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  contribution: string;
  details: readonly string[];
  technologies: readonly string[];
  outcomes?: readonly { value: string; label: string }[];
  repository?: string;
};

type ProjectCardProps = {
  project: Project;
  totalProjects: number;
};

export function ProjectCard({ project, totalProjects }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`project-card${expanded ? " is-expanded" : ""}`}>
      <div className="project-card-top">
        <span className="mono project-number">
          {project.number} / {String(totalProjects).padStart(2, "0")}
        </span>
        <span className="project-category">{project.category}</span>
      </div>

      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>

      {project.outcomes && (
        <div className={`project-outcomes${project.outcomes.length === 1 ? " single" : ""}`}>
          {project.outcomes.map((outcome) => (
            <div className="outcome" key={outcome.label}>
              <span className="outcome-value">{outcome.value}</span>
              <span className="outcome-label">{outcome.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-meta">
        <span className="meta-label">Stack</span>
        <div className="tag-list">
          {project.technologies.map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <button
          className="text-button project-expand"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Less detail" : "Project details"}
          <ArrowDown size={14} className={expanded ? "rotate-icon" : ""} aria-hidden="true" />
        </button>
        {project.repository && (
          <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
            <GitBranch size={15} aria-hidden="true" />
            <span>Repository</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>

      <div className={`project-detail${expanded ? " is-visible" : ""}`} aria-hidden={!expanded}>
        <div className="detail-block">
          <span className="meta-label">The problem</span>
          <p>{project.problem}</p>
        </div>
        <div className="detail-block">
          <span className="meta-label">My contribution</span>
          <p>{project.contribution}</p>
        </div>
        <div className="detail-block">
          <span className="meta-label">Implementation</span>
          <ul>
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
