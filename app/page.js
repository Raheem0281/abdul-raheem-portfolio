"use client";

import { useState } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  Layers,
  ShieldCheck,
  FlaskConical,
  Sparkles,
  Menu,
  X,
  Linkedin,
} from "lucide-react";

// lucide-react doesn't ship a WhatsApp glyph, so this is a small
// hand-drawn brand icon that matches the stroke style of the other icons.
function WhatsappIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.46 3.484 1.334 5.002L2 22l5.116-1.32a9.958 9.958 0 0 0 4.888 1.318h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.071a9.937 9.937 0 0 0-7.072-2.927zm5.83 15.826a8.283 8.283 0 0 1-5.83 2.415h-.003a8.28 8.28 0 0 1-4.22-1.155l-.303-.18-3.037.784.81-2.96-.198-.304a8.264 8.264 0 0 1-1.268-4.412c0-4.583 3.73-8.312 8.317-8.312a8.26 8.26 0 0 1 5.878 2.435 8.259 8.259 0 0 1 2.435 5.878 8.283 8.283 0 0 1-2.581 5.81z" />
    </svg>
  );
}

const skillGroups = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "AI",
    items: ["Gemini API", "Prompt Engineering", "AI Integration"],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Postman", "Admin Dashboards"],
  },
  {
    category: "Programming",
    items: ["Python", "C++"],
  },
];

const projects = [
  {
    title: "AI-Powered Portfolio Assistant",
    status: "Live",
    icon: Sparkles,
    description:
      "An AI-powered portfolio assistant built with Next.js and Google Gemini API, featuring portfolio-specific prompt engineering, smart response routing and interactive AI-driven exploration of my professional background.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/Raheem0281/ai-portfolio-assistant",
    live: "https://ai-portfolio-assistant-two.vercel.app",
  },

  {
    title: "Security Agency Management System",
    status: "Completed",
    icon: ShieldCheck,
    description:
      "A professional web-based management system for managing guards, clients, duty locations, attendance, weapons, licenses, payroll and reports for a security agency.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Raheem0281/security-agency-management-system",
    live: "https://security-agency-management-system-one.vercel.app",
  },

  {
    title: "Clinic Appointment System",
    status: "Completed",
    icon: FlaskConical,
    description:
      "A web-based healthcare management platform featuring authentication, patient management, appointments, test handling, reports and role-based access.",
    tech: ["Next.js", "Node.js", "MySQL", "Supabase", "JWT Auth"],
    github: "https://github.com/Raheem0281/clinic-appointment-app",
  },

  {
    title: "Personal Portfolio Website",
    status: "Live",
    icon: Code2,
    description:
      "A modern responsive developer portfolio built to showcase my technical skills, projects, certifications and professional background with a responsive UI and interactive sections.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Raheem0281/portfolio-site",
    live: "https://abdul-raheem-portfolio-nine.vercel.app",
  },

  {
    title: "Task Management System",
    status: "Completed",
    icon: Code2,
    description:
      "A task management application developed to efficiently organize daily tasks with CRUD functionality and a simple user-friendly interface.",
    tech: ["Java", "JavaFX", "SQLite"],
  },

  {
    title: "Student Portal",
    status: "Academic Project",
    icon: Layers,
    description:
      "A student management portal designed to provide students with an organized interface for managing academic information and university-related activities.",
    tech: ["Web Development", "JavaScript", "HTML", "CSS"],
  },

  {
    title: "Text Adventure Game",
    status: "Academic Project",
    icon: Code2,
    description:
      "A command-line text adventure game focused on programming logic, user interaction, decision making and object-oriented programming concepts.",
    tech: ["Java", "OOP", "Problem Solving"],
  },

  {
    title: "Weather App",
    status: "Live",
    icon: FlaskConical,
    description:
      "A responsive weather application built with HTML, CSS and JavaScript to provide a clean and user-friendly weather experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://weather-app-brown-ten-21.vercel.app/",
  },
  {
    title: "Drag & Drop Image Uploader",
    status: "Live",
    icon: Code2,
    description:
      "A frontend image uploader with drag-and-drop functionality, built using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://drag-drop-uploader.vercel.app/",
  },
  {
    title: "Multi-Step Form",
    status: "Live",
    icon: Layers,
    description:
      "A multi-step form interface developed with HTML, CSS and JavaScript, providing a structured and interactive form experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://multi-step-form-gold-eight.vercel.app/",
  },
  {
    title: "Real-Time Chat App",
    status: "Live",
    icon: Code2,
    description:
      "A real-time chat application frontend built using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://real-time-chat-iota-mauve.vercel.app/",
  },
  {
    title: "Frontend Best Practices Website",
    status: "Live",
    icon: Sparkles,
    description:
      "A frontend development website built using HTML, CSS and JavaScript, focused on frontend best practices.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://frontend-best-practices.vercel.app/",
  },
];

const navItems = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "certifications",
  "contact",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#9333ea44,transparent_35%)]" />

      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-wide hover:text-blue-400 transition"
          >
            Abdul<span className="text-blue-400">Raheem</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative hover:text-blue-400 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden text-slate-200 hover:text-blue-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-1 px-5 pb-5 bg-slate-950/95 border-t border-white/10 animate-fadeUp">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 rounded-lg hover:bg-white/5 hover:text-blue-400 transition capitalize font-semibold text-slate-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="scroll-mt-24 max-w-6xl mx-auto px-5 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="animate-fadeUp">
          <p className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4">
            <Sparkles size={18} /> Full Stack Developer • AI System Builder
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Full Stack Developer building{" "}
            <span className="text-blue-400">modern web applications</span>{" "}
            and AI-powered systems.
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Hi, I am Abdul Raheem, a Software Engineering graduate focused on
            building modern full-stack web applications and AI-powered
            systems using Next.js, React, Node.js, MongoDB and Gemini API.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 font-bold shadow-lg shadow-blue-600/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-white/20 hover:border-blue-400 hover:text-blue-400 hover:scale-105 transition-all duration-300 font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-float">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
              <Code2 size={46} className="text-blue-400" />
              <h2 className="text-3xl font-black mt-6">Available for Projects</h2>
              <p className="text-slate-300 mt-4 leading-7">
                Business websites, portfolio websites, dashboards, bug fixing,
                API integration and full-stack web apps.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {["Next.js", "MERN", "Dashboards", "UI Design"].map((x) => (
                  <span
                    key={x}
                    className="bg-white/10 rounded-xl px-4 py-3 hover:bg-blue-600/30 transition"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-black">About Me</h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-8">
            I am a Software Engineering graduate and Full Stack Developer
            focused on building modern, responsive and scalable web
            applications. I work with Next.js, React, Node.js, Express.js,
            MongoDB and MySQL, and I also integrate AI capabilities using
            Google Gemini API. I enjoy turning real-world requirements into
            practical, user-friendly and reliable software solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              ["Frontend", "Responsive UI using Next.js, React and Tailwind CSS.", Layers],
              ["Backend", "REST APIs using Node.js, Express and database integration.", Code2],
              ["Systems", "Admin dashboards, authentication, reports and management systems.", ShieldCheck],
            ].map(([title, desc, Icon]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 hover:border-blue-400/60 transition-all duration-300"
              >
                <Icon className="text-blue-400" />
                <h3 className="font-bold text-xl mt-5">{title}</h3>
                <p className="text-slate-300 mt-3 leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section
        id="experience"
        className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]"
      >
        <div className="max-w-6xl mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-black">Experience</h2>
          <p className="mt-4 text-slate-300">
            Internship and professional development experience.
          </p>
          <div className="mt-10 space-y-6">
            {/* Fusion Tech */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-7 hover:-translate-y-2 hover:border-blue-400/60 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div>
                  <p className="text-blue-400 font-bold">
                    May 2024 – July 2025
                  </p>
                  <h3 className="text-2xl font-black mt-2">
                    Web Development Intern
                  </h3>
                  <p className="text-slate-300 mt-2 font-semibold">
                    Fusion Tech, Layyah
                  </p>
                  <ul className="mt-5 space-y-3 text-slate-300 leading-7 list-disc list-inside">
                    <li>
                      Built and styled responsive web page layouts using HTML and CSS
                      as part of front-end development tasks.
                    </li>
                    <li>
                      Collaborated with the development team to implement
                      structured, cross-browser-compatible page designs.
                    </li>
                  </ul>
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 w-fit">
                  Internship
                </span>
              </div>
            </div>
            {/* Internee.pk */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-7 hover:-translate-y-2 hover:border-blue-400/60 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div>
                  <p className="text-blue-400 font-bold">
                    2-Month Virtual Internship
                  </p>
                  <h3 className="text-2xl font-black mt-2">
                    HTML CSS JS Internship Intern
                  </h3>
                  <p className="text-slate-300 mt-2 font-semibold">
                    Internee.pk
                  </p>
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 w-fit">
                  Internship
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="scroll-mt-24 max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Skills</h2>
        <p className="mt-4 text-slate-300">Technologies I use to build websites and web apps.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <h3 className="font-bold text-blue-400 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-black">Projects</h2>
          <p className="mt-4 text-slate-300">
            Selected projects demonstrating my experience in full-stack
            development, AI integration, dashboards and software systems.
          </p>

          <div className="grid md:grid-cols-2 gap-7 mt-10">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group rounded-3xl bg-white/5 border border-white/10 p-7 hover:-translate-y-3 hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="text-blue-400 group-hover:scale-110 transition" size={38} />
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mt-6">{project.title}</h3>
                  <p className="text-slate-300 mt-4 leading-7">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-white/10 px-3 py-2 rounded-lg text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold transition-all duration-300 hover:scale-105"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:border-blue-400 hover:text-blue-400 font-bold transition-all duration-300 hover:scale-105"
                      >
                        GitHub
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section id="certifications" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-black">
            Certifications &amp; Professional Learning
          </h2>

          <p className="mt-4 text-slate-300">Professional learning and industry experience.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Advanced Software Engineering Job Simulation",
                organization: "Walmart Global Tech",
              },
              {
                title: "Data Analytics Job Simulation",
                organization: "Deloitte Australia",
              },
              {
                title: "Freelancing",
                organization: "DigiSkills",
              },
              {
                title: "Graphic Design",
                organization: "DigiSkills",
              },
              {
                title: "HTML CSS JS Internship Certificate",
                organization: "Internee.pk",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 hover:border-blue-400/60 transition-all duration-300"
              >
                <Sparkles className="text-blue-400" size={28} />

                <h3 className="text-xl font-bold mt-5">{cert.title}</h3>

                <p className="text-blue-400 mt-2 font-semibold">{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="scroll-mt-24 max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Contact Me</h2>
        <p className="mt-4 text-slate-300">
          Need a website, dashboard or web app? Let us discuss your project.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <a
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 hover:border-blue-400 transition-all duration-300"
            href="mailto:raheem0281@gmail.com"
          >
            <Mail className="text-blue-400" />
            <h3 className="font-bold text-xl mt-4">Email</h3>
            <p className="text-slate-300 mt-2">raheem0281@gmail.com</p>
          </a>

          <a
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 hover:border-blue-400 transition-all duration-300"
            href="https://github.com/Raheem0281"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 className="text-blue-400" />
            <h3 className="font-bold text-xl mt-4">GitHub</h3>
            <p className="text-slate-300 mt-2">github.com/Raheem0281</p>
          </a>

          <a
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 hover:border-blue-400 transition-all duration-300"
            href="https://www.linkedin.com/in/abdul-raheem-juttt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-blue-400" />
            <h3 className="font-bold text-xl mt-4">LinkedIn</h3>
            <p className="text-slate-300 mt-2">LinkedIn.com/abdul-raheem-juttt</p>
          </a>

          <a
            className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 hover:border-blue-400 transition-all duration-300"
            href="https://wa.me/923058437103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon className="text-blue-400" size={24} />
            <h3 className="font-bold text-xl mt-4">WhatsApp</h3>
            <p className="text-slate-300 mt-2">+923058437103</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-14 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10">
          <h3 className="text-2xl font-black">Let's Work Together</h3>
          <p className="text-slate-300 mt-2">
            Fill the form below and I'll get back to you soon.
          </p>

          <form
            action="https://formspree.io/f/xkgzwrdb"
            method="POST"
            className="mt-8 grid gap-5"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

            <div>
              <label className="text-sm font-semibold text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 outline-none focus:border-blue-400 transition text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 outline-none focus:border-blue-400 transition text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-300">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 outline-none focus:border-blue-400 transition text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 font-bold shadow-lg shadow-blue-600/30 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Abdul Raheem. All rights reserved.</p>
      </footer>
    </main>
  );
}
