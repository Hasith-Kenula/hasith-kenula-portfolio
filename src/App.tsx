import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  Code2,
  Smartphone,
  Database,
  Layers3,
  ExternalLink,
  Download,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Salon Reservation App",
    category: "Mobile application",
    description:
      "A salon booking platform designed around customers, salon owners and employees, with reservation management and real-time updates.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "SQL"],
    status: "Personal project",
    link: "#",
    github: "https://github.com/Hasith-Kenula",
  },
  {
    number: "02",
    title: "Library Records Management System",
    category: "Desktop application",
    description:
      "A second-year academic project built to manage library records, including book borrowing records, through a Windows desktop application.",
    stack: ["C#", "WPF"],
    status: "Second-year academic project",
    link: "#",
    github: "https://github.com/Hasith-Kenula",
  },
  {
    number: "03",
    title: "Dino Game",
    category: "Web game",
    description:
      "A browser-based dinosaur game project with a simple gameplay experience and an optional administration area.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Personal project",
    link: "https://hasith-kenula.github.io/dino-game-for-you/",
    github: "https://github.com/Hasith-Kenula",
  },
  // {
  //   number: "04",
  //   title: "TeamFlow",
  //   category: "Web application",
  //   description:
  //     "A team workflow application project with a structured backend, database connectivity and health-check endpoint.",
  //   stack: ["TypeScript", "Node.js", "Express", "MySQL"],
  //   status: "Personal project",
  //   link: "#",
  //   github: "https://github.com/Hasith-Kenula",
  // },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: Layers3,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "C#"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "SQL", "Database design"],
  },
  {
    icon: Smartphone,
    title: "Mobile & tools",
    items: ["React Native", "Expo", "WPF", "Git", "GitHub"],
  },
];

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(
    () =>
      (localStorage.getItem("portfolio-theme") as "dark" | "light") || "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">H</span> hasith
          <span className="brand-dot">.</span>
        </a>
        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES
            </div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>
              Hasith Kenula
              <br />
              <span>Fernando.</span>
            </h1>
            <h2>
              Full Stack Developer <i>in progress.</i>
            </h2>
            <p className="hero-description">
              I’m a final-year BIT undergraduate passionate about building
              useful web and mobile applications. I enjoy turning ideas into
              practical solutions and continuously learning new technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <Mail size={17} />
              </a>
            </div>
            <div className="social-row">
              <a
                href="https://github.com/Hasith-Kenula"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hasithkenula"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <span className="location-label">Based in Sri Lanka</span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Decorative developer illustration"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="code-window">
              <div className="window-top">
                <span />
                <span />
                <span />
                <small>developer.ts</small>
              </div>
              <div className="code-lines">
                <p>
                  <b>const</b> developer = {"{"}
                </p>
                <p className="indent">
                  <i>name</i>: <em>"Hasith"</em>,
                </p>
                <p className="indent">
                  <i>focus</i>: <em>"Full Stack"</em>,
                </p>
                <p className="indent">
                  <i>learning</i>: [
                </p>
                <p className="indent2">
                  <em>"Build"</em>, <em>"Learn"</em>,
                </p>
                <p className="indent2">
                  <em>"Improve"</em>
                </p>
                <p className="indent">],</p>
                <p className="indent">
                  <i>available</i>: <b className="bool">true</b>
                </p>
                <p>{"}"};</p>
                <p className="code-cursor">▌</p>
              </div>
            </div>
            <div className="floating-chip chip-react">
              <span>⚛</span> React
            </div>
            <div className="floating-chip chip-ts">TS&nbsp; TypeScript</div>
            <div className="floating-chip chip-node">⬡&nbsp; Node.js</div>
            <div className="hero-caption">
              BUILDING ONE PROJECT AT A TIME <ArrowDown size={14} />
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span /> Scroll to explore
          </a>
        </section>

        <section className="section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span>Developer by passion.</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <p className="lead">
                I’m an aspiring software developer focused on{" "}
                <strong>full-stack and mobile application development.</strong>
              </p>
              <p>
                As a final-year Bachelor of Information Technology (BIT)
                undergraduate, I build personal and academic projects to
                strengthen my development skills. I enjoy working across the
                frontend and backend, connecting applications to APIs and
                databases, and solving practical problems through code.
              </p>
              <p>
                I’m looking for an opportunity to learn from an experienced
                team, contribute to real-world projects and grow into a
                professional developer.
              </p>
            </div>
            <div className="about-facts">
              <div>
                <span>01</span>
                <p>Career focus</p>
                <strong>Full Stack Development</strong>
              </div>
              <div>
                <span>02</span>
                <p>Education</p>
                <strong>Bachelor of IT (BIT) — Final year</strong>
              </div>
              <div>
                <span>03</span>
                <p>Experience</p>
                <strong>Personal & academic projects</strong>
              </div>
              <div>
                <span>04</span>
                <p>Currently seeking</p>
                <strong>Internship opportunities</strong>
              </div>
            </div>
          </div>
          <div className="note-strip">
            <span className="note-icon">✳</span>
            <p>
              <strong>A little about how I work</strong>
              <br />I value curiosity, consistency, clean code and feedback. I’m
              always ready to learn something new and improve with every
              project.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">02 / TOOLKIT</p>
              <h2>
                Technologies I <span>work with.</span>
              </h2>
              <p className="section-intro">
                A growing toolkit built through learning and project work.
              </p>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-icon">
                    <group.icon size={22} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="skill-footnote">
              Skills reflect technologies explored through personal and academic
              projects; proficiency varies by technology.
            </p>
          </div>
        </section>

        <section className="section section-wrap" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Things I’ve <span>built.</span>
              </h2>
            </div>
            <p className="section-intro">
              A selection of personal and academic projects. More details and
              live links can be added as they become available.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number} / {projects.length}</span>
                  <span className="project-type">{project.category}</span>
                </div>
                <div className="project-symbol">
                  <Code2 size={26} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-bottom">
                  <span>{project.status}</span>
                  <div>
                    <a
                      href={project.github}
                      aria-label={`${project.title} GitHub`}
                      title="GitHub Profile"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href={project.link}
                      aria-label={`${project.title} project link`}
                      title="Project Link"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* <p className="edit-hint">
            Tip: replace the placeholder links in <code>src/App.tsx</code> with
            your actual GitHub repositories and live demos.
          </p> */}
        </section>

        <section className="section section-muted" id="contact">
          <div className="section-wrap contact-section">
            <div>
              <p className="eyebrow">04 / CONTACT</p>
              <h2>
                Have an opportunity?
                <br />
                <span>Let’s connect.</span>
              </h2>
              <p className="contact-copy">
                I’m interested in software development internships and
                opportunities to learn, contribute and grow as a developer.
              </p>
            </div>
            <div className="contact-panel">
              <a href="mailto:hasithkenula@gmail.com">
                <span>
                  <Mail /> Email
                </span>
                <strong>
                  hasithkenula@gmail.com <ArrowUpRight size={16} />
                </strong>
              </a>
              <a
                href="https://github.com/Hasith-Kenula"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Github /> GitHub
                </span>
                <strong>
                  github.com/Hasith-Kenula <ArrowUpRight size={16} />
                </strong>
              </a>
              <a
                href="https://www.linkedin.com/in/hasithkenula"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Linkedin /> LinkedIn
                </span>
                <strong>
                  linkedin.com/in/hasithkenula <ArrowUpRight size={16} />
                </strong>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">H</span> hasith
          <span className="brand-dot">.</span>
        </a>
        <p>Designed & built with curiosity by Hasith Kenula Fernando.</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
        <small>© {new Date().getFullYear()} Hasith Kenula Fernando</small>
      </footer>
    </div>
  );
}
export default App;
