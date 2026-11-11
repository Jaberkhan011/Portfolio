import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  BriefcaseBusiness,
  Check,
  CodeXml,
  Mail,
  Network,
  Phone,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import Topography from "./components/Topography";
import {
  certifications,
  education,
  profile,
  projects,
  skillGroups,
  training,
} from "./data/portfolio";

const skillIcons = [
  CodeXml,
  BrainCircuit,
  Network,
  Sparkles,
  ChartNoAxesCombined,
  Boxes,
  Search,
  Wrench,
] as const;

function App() {
  return (
    <>
      <div className="topography-backdrop" aria-hidden="true">
        <Topography
          color="#F97316"
          lineCount={26}
          lineWidth={1.1}
          elevation={1.1}
          foreground={0.25}
          tilt={32}
          speed={0}
          direction="forward"
          glow={0.4}
          depthOfField={0.25}
          fog={0.35}
          hoverEffect="lift"
          clickEffect="none"
          scale={1.15}
          detail={0.4}
          opacity={0.7}
          intro={false}
          lightMode={false}
          dpr={1}
        />
      </div>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero page-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AI / ML ENGINEER</p>
            <h1 id="hero-title">Jaber Khan<br /><span>Afrooz</span></h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work <ArrowDownRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-text" href={profile.resume} download>
                Download resume <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-socials" aria-label="Professional profiles">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <CodeXml size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-aside" aria-label="A retrieval-augmented generation workflow">
            <div className="aside-heading">
              <span className="mono">CURRENT FOCUS</span>
              <span className="aside-index">01 — 03</span>
            </div>
            <div className="workflow">
              <div className="workflow-node">
                <span className="workflow-number">01</span>
                <div><strong>Source material</strong><span>PDF · text · evidence</span></div>
                <span className="workflow-symbol">↗</span>
              </div>
              <div className="workflow-connector"><span /></div>
              <div className="workflow-node">
                <span className="workflow-number">02</span>
                <div><strong>Hybrid retrieval</strong><span>BM25 + dense search</span></div>
                <span className="workflow-symbol">⌕</span>
              </div>
              <div className="workflow-connector"><span /></div>
              <div className="workflow-node workflow-node-active">
                <span className="workflow-number">03</span>
                <div><strong>Grounded response</strong><span>Relevant context, retrieved</span></div>
                <Check size={16} aria-hidden="true" />
              </div>
            </div>
            <div className="aside-caption">
              <span>Systems designed to retrieve, reason, and respond.</span>
              <span className="mono">PYTHON · RAG · ML</span>
            </div>
          </div>

          <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
            <span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" />
          </a>
        </section>

        <section className="content-section about-section page-shell" id="about">
          <Reveal>
            <div className="section-heading">
              <span className="section-index mono">01 / ABOUT</span>
              <h2>Curiosity, with<br />a practical edge.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="about-copy">
              <p className="about-lead">
                I’m a Computer Science and Engineering graduate from Osmania University, interested in building AI systems that are useful, measurable, and grounded in evidence.
              </p>
              <p>
                My work spans retrieval-augmented generation, search evaluation, and mobile machine learning. I enjoy taking a problem from data and model choices through implementation, testing, and deployment—then looking closely at where the system succeeds and where it falls short.
              </p>
              <div className="about-note">
                <span className="note-mark">↳</span>
                <span>Currently focused on entry-level GenAI and AI engineering opportunities.</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="content-section skills-section page-shell" id="skills">
          <Reveal>
            <div className="section-heading section-heading-row">
              <div>
                <span className="section-index mono">02 / TOOLKIT</span>
                <h2>Tools I work with.</h2>
              </div>
              <p className="section-aside-copy">A practical toolkit built through coursework, internships, and independent projects.</p>
            </div>
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const SkillIcon = skillIcons[index];

              return (
              <Reveal key={group.name} delay={index * 0.035}>
                <div className="skill-group">
                  <div className="skill-group-heading">
                    <span className="skill-icon"><SkillIcon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{group.name}</h3>
                    <span className="skill-count mono">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="tag-list">
                    {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </section>

        <section className="content-section projects-section page-shell" id="projects">
          <Reveal>
            <div className="section-heading section-heading-row">
              <div>
                <span className="section-index mono">03 / SELECTED WORK</span>
                <h2>Built to be useful.</h2>
              </div>
              <p className="section-aside-copy">Experiments and applications, described with the decisions and results behind them.</p>
            </div>
          </Reveal>
          <div className="projects-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.06}>
                <ProjectCard project={project} totalProjects={projects.length} />
              </Reveal>
            ))}
          </div>
          <p className="projects-footnote">
            <span className="footnote-rule" />Project descriptions and metrics are from my resume and linked repositories.
          </p>
        </section>

        <section className="content-section experience-section page-shell" id="experience">
          <Reveal>
            <div className="section-heading">
              <span className="section-index mono">04 / EXPERIENCE & EDUCATION</span>
              <h2>Learning, applied.</h2>
            </div>
          </Reveal>
          <div className="experience-grid">
            <Reveal>
              <div className="experience-column">
                <div className="column-heading">
                  <h3>Education</h3><span className="mono">03 ENTRIES</span>
                </div>
                <div className="timeline">
                  {education.map((item, index) => (
                    <article className="timeline-item" key={item.qualification}>
                      <span className={`timeline-marker${index === 0 ? " is-current" : ""}`} />
                      <div className="timeline-title-row">
                        <h4>{item.qualification}</h4>
                        <span className="timeline-period mono">{item.period}</span>
                      </div>
                      <p>{item.institution}</p>
                      <span className="result-label">{item.result}</span>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="experience-column">
                <div className="column-heading">
                  <h3>Virtual internships</h3><span className="mono">2024 — 2025</span>
                </div>
                <div className="training-list">
                  {training.map((item) => (
                    <article className="training-item" key={item.name}>
                      <div className="training-header">
                        <h4>{item.name}</h4><span className="mono">{item.year}</span>
                      </div>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
                <div className="certification-block">
                  <span className="meta-label">Certifications</span>
                  {certifications.map((certification) => (
                    <p className="certification" key={certification}>
                      <Check size={14} aria-hidden="true" />{certification}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="achievement-strip">
              <span className="section-index mono">ADDITIONAL RESULT</span>
              <strong>99.7% test accuracy</strong>
              <p>DistilRoBERTa AI-vs-human text classifier, evaluated alongside 190 out-of-distribution samples.</p>
            </div>
          </Reveal>
        </section>

        <section className="contact-section page-shell" id="contact">
          <Reveal>
            <div className="contact-main">
              <div>
                <span className="section-index mono">05 / CONTACT</span>
                <h2>Let’s build<br /><span>something useful.</span></h2>
              </div>
              <a className="button button-primary contact-cta" href={`mailto:${profile.email}`}>
                Get in touch <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" /><span>{profile.email}</span><ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
                <Phone size={16} aria-hidden="true" /><span>{profile.phone}</span><ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={16} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <CodeXml size={16} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <a className="footer-brand" href="#home">{profile.name}<span>{profile.title}</span></a>
        <span className="footer-note">Thoughtful systems. Measured outcomes.</span>
        <span className="footer-copyright">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </>
  );
}

export default App;
