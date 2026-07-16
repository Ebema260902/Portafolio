import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

/* ── Icons ─────────────────────────────────────────────────── */
const IconGH = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const IconLI = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconPin = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

/* ── Profile card — INFO, no image, no tag, no arrow ────────── */
const ProfileCard = ({ language, t, style }) => (
  <div
    className="rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between p-6"
    style={style}
  >
    <div>
      <span className="inline-flex items-center gap-2 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        {language === 'es' ? 'Disponible para trabajar' : 'Available for work'}
      </span>
      <h1 className="text-[30px] font-extrabold text-white tracking-tight leading-[1.04] mb-2">
        Emanuel<br />Agüero
      </h1>
      <p className="text-sm text-neutral-400 mb-1.5">Full-Stack Dev &amp; UX/UI Designer</p>
      <p className="flex items-center gap-1.5 text-[11px] text-neutral-600 mb-4">
        <IconPin /> Palmares, Costa Rica
      </p>
      <p className="text-[12.5px] text-neutral-400 leading-relaxed">{t.home?.description}</p>
    </div>

    <div className="mt-6 space-y-2">
      <a
        href="https://github.com/Ebema260902"
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white text-sm font-medium transition-colors"
      >
        <span className="flex items-center gap-2.5"><IconGH /> GitHub</span>
        <span className="text-neutral-500">→</span>
      </a>
      <div className="grid grid-cols-2 gap-2">
        <a
          href="https://linkedin.com/in/emanuel-aguero"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-400 text-xs font-medium transition-colors"
        >
          <IconLI /> LinkedIn
        </a>
        <a
          href="/Developer Emanuel-Agüero-Resume.pdf" download
          className="flex items-center justify-center px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-400 text-xs font-medium transition-colors"
        >
          {language === 'es' ? 'CV ↓' : 'Resume ↓'}
        </a>
      </div>
    </div>
  </div>
);

/* ── Skills card — INFO, no image, no tag, no arrow ─────────── */
const SkillsCard = ({ language }) => (
  <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col gap-5">
    <div>
      <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-neutral-600 mb-1">
        {language === 'es' ? 'Experiencia' : 'Experience'}
      </p>
      <p className="text-[52px] font-extrabold text-white tracking-tighter leading-none">4+</p>
      <p className="text-[13px] text-neutral-400 font-medium mt-1">
        {language === 'es' ? 'años desarrollando' : 'years building'}
      </p>
    </div>

    <div>
      <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-neutral-600 mb-2.5">Stack</p>
      <div className="flex flex-wrap gap-1.5">
        {['React', 'Laravel', 'Next.js', 'MySQL', 'Tailwind', 'Figma'].map(s => (
          <span key={s} className="px-2 py-1 rounded-md text-[10.5px] font-mono font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700/80">
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-center text-[10.5px] font-bold tracking-[0.14em] text-neutral-300 font-mono">
      OPEN TO WORK
    </div>
  </div>
);

/* ── Project card — IMAGE card with tag + arrow button ──────── */
const ProjectCard = ({ project, featured = false, className = '' }) => {
  const [hov, setHov] = useState(false);
  const active = hov && !!project.link;

  const handlers = { onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false) };
  const wrapClass = `relative overflow-hidden rounded-2xl block h-full ${className}`;
  const wrapStyle = { textDecoration: 'none' };

  const inner = (
    <>
      {/* Full-bleed image — original colors, brightness controlled */}
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: project.imagePos ?? 'center center',
          filter: active ? 'brightness(1)' : 'brightness(0.75)',
          transform: active ? 'scale(1.02)' : 'scale(1)',
          transition: 'filter 0.45s ease, transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        onError={(e) => { e.target.style.opacity = '0'; }}
      />

      {/* Permanent bottom gradient — text legibility regardless of brightness */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      {/* Type tag — top left */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={[
            'inline-block text-[9px] font-bold tracking-[0.16em] uppercase px-2.5 py-[5px] rounded-[4px]',
            project.comingSoon
              ? 'text-amber-300/90 bg-amber-950/70 border border-amber-700/50'
              : 'text-white/60 bg-black/55 border border-white/10',
          ].join(' ')}
        >
          {project.tag}
        </span>
      </div>

      {/* Bottom: title + description + arrow */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="flex items-end justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3
              className="font-bold text-white leading-tight"
              style={{ fontSize: featured ? '19px' : '14px' }}
            >
              {project.name}
            </h3>
            <p className="text-neutral-400 text-[11px] leading-relaxed mt-0.5">{project.shortDesc}</p>
          </div>
          {project.link && (
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{
                background: active ? '#ffffff' : 'rgba(255,255,255,0.09)',
                color: active ? '#0a0a0a' : 'rgba(255,255,255,0.40)',
              }}
            >
              <span className="text-[14px] leading-none">↗</span>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (!project.link)
    return <div className={wrapClass} style={wrapStyle} {...handlers}>{inner}</div>;
  if (project.isExternal)
    return <a href={project.link} target="_blank" rel="noopener noreferrer" className={wrapClass} style={wrapStyle} {...handlers}>{inner}</a>;
  return <Link to={project.link} className={wrapClass} style={wrapStyle} {...handlers}>{inner}</Link>;
};

/* ── Bento page ──────────────────────────────────────────────── */
const Bento = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations['es'];
  const es = language === 'es';

  /*
    Project render order in the right sub-grid:
    Row 1 (3 cols): Reckless [0] | Cafetería [1] | Casa Agüero [2]
    Row 2 (3 cols): Perfumería [3] | Toyo [4] | Safari [5]
    Row 3 (3 cols): Ticolancer [6] (col-span-2) | Jint [7] (col-span-1)
  */
  const projects = [
    /* 0 */ {
      name: 'Reckless Studio',
      shortDesc: es ? 'Sitio web para barbería premium en Costa Rica.' : 'Website for a premium barbershop in Costa Rica.',
      tag: es ? 'BARBERÍA' : 'BARBERSHOP',
      image: '/assets/images/barberia/barberia.jpeg',
      imagePos: 'center center',
      link: 'https://reckless-nu.vercel.app/',
    },
    /* 1 */ {
      name: 'Cafetería',
      shortDesc: es ? 'Menú digital y galería para cafetería artesanal.' : 'Digital menu and gallery for artisan coffee shop.',
      tag: es ? 'CAFETERÍA' : 'COFFEE SHOP',
      image: '/assets/images/cafeteria/cafeteria-real.webp',
      imagePos: 'center center',
      link: 'https://cafeteria-red-eta.vercel.app/',
      isExternal: true,
    },
    /* 2 */ {
      name: 'Casa Agüero',
      shortDesc: es ? 'Presencia digital para negocio familiar artesanal.' : 'Digital presence for local artisan family business.',
      tag: es ? 'SITIO WEB' : 'WEBSITE',
      image: '/assets/images/agueroartesanal/agueroartesanal.png',
      imagePos: 'center center',
      link: null,
    },
    /* 3 */ {
      name: 'Perfumería',
      shortDesc: es ? 'Tienda online con experiencia de compra premium.' : 'Online store with premium shopping experience.',
      tag: 'E-COMMERCE',
      image: '/assets/images/perfumeria/image.png',
      imagePos: 'top center',
      link: 'https://perfume-store-9757.myshopify.com/',
      isExternal: true,
    },
    /* 4 */ {
      name: 'Agencia de vehículos',
      shortDesc: es ? 'Landing page para agencia de vehículos.' : 'Landing page for vehicle dealership.',
      tag: 'LANDING PAGE',
      image: '/assets/images/toyo/catalogagencia.png',
      imagePos: 'top center',
      link: 'https://agencia-de-carros.vercel.app/',
    },
    /* 5 */ {
      name: 'Plaza Zona Safari',
      shortDesc: es ? 'Directorio digital para centro comercial.' : 'Digital directory for shopping center.',
      tag: es ? 'PRÓXIMAMENTE' : 'COMING SOON',
      image: '/assets/images/zonasafari/safari.jpg',
      imagePos: 'center center',
      link: null,
      comingSoon: true,
    },
    /* 6 */ {
      name: 'Ticolancer',
      shortDesc: es
        ? 'Plataforma para conectar freelancers con clientes en Costa Rica.'
        : 'Platform connecting freelancers with clients in Costa Rica.',
      tag: es ? 'PLATAFORMA WEB' : 'WEB PLATFORM',
      image: '/assets/images/ticolancer/ticolancer-home.png',
      imagePos: 'top center',
      link: '/ticolancer',
      isExternal: false,
    },
    /* 7 */ {
      name: 'Jint',
      shortDesc: es ? 'App web de gestión de tareas y proyectos.' : 'Task and project management web app.',
      tag: 'APP WEB',
      image: '/assets/images/jint/jint5.png',
      imagePos: 'top center',
      link: '/jint',
      isExternal: false,
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-neutral-950 p-4 lg:p-6">
      {/*
        Master two-column layout:
        • Left  (300px fixed) — info column: Profile + Skills stacked
        • Right (1fr)        — projects sub-grid: 3 cols on lg, 2 on md, 1 on mobile
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 max-w-7xl mx-auto w-full">

        {/* ── LEFT: unified info column ──────────────────────── */}
        <div className="flex flex-col gap-6 h-full">
          <ProfileCard language={language} t={t} style={{ flex: 1 }} />
          <SkillsCard language={language} />
        </div>

        {/* ── RIGHT: projects sub-grid ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">

          {/* Row 1 — freelance trio */}
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />

          {/* Row 2 — freelance trio */}
          <ProjectCard project={projects[3]} />
          <ProjectCard project={projects[4]} />
          <ProjectCard project={projects[5]} />

          {/* Row 3 — featured close: Ticolancer 2/3 + Jint 1/3 */}
          <ProjectCard project={projects[6]} featured className="lg:col-span-2" />
          <ProjectCard project={projects[7]} />

        </div>
      </div>
    </main>
  );
};

export default Bento;
