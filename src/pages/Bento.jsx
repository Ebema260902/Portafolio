import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { translations } from "../translations/translations.js";

/* ─── SVG Icons ─────────────────────────────────────────────────────── */
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

/* ─── Project card — image-only, hover reveals controls ─────────────── */
const ProjectCard = ({ project, language, isDark, heightPx }) => {
    const cardStyle = heightPx ? { height: `${heightPx}px` } : {};

    return (
        <div
            className={`group relative rounded-2xl overflow-hidden ${
                isDark ? "bg-[#111]" : "bg-neutral-200"
            }`}
            style={cardStyle}
        >
            {/* Image */}
            <img
                src={project.image}
                alt={project.name}
                className={`w-full ${heightPx ? "h-full" : "aspect-video"} object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105`}
                loading="lazy"
                onError={(e) => { e.target.style.opacity = "0"; }}
            />

            {/* Dim overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top — project name pill */}
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <span className="bg-white text-black text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {project.name}
                </span>
            </div>

            {/* Bottom — GitHub + View buttons */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-black/85 backdrop-blur-sm text-white text-[11px] font-medium py-2 rounded-full hover:bg-black transition-colors"
                >
                    <GitHubIcon />
                    GitHub
                </a>
                {project.isExternal ? (
                    <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur-sm text-black text-[11px] font-medium py-2 rounded-full hover:bg-white transition-colors"
                    >
                        {language === "es" ? "Ver sitio" : "View site"} →
                    </a>
                ) : (
                    <Link
                        to={project.siteLink}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur-sm text-black text-[11px] font-medium py-2 rounded-full hover:bg-white transition-colors"
                    >
                        {language === "es" ? "Ver proyecto" : "View project"} →
                    </Link>
                )}
            </div>
        </div>
    );
};

/* ─── Placeholder card ───────────────────────────────────────────────── */
const Placeholder = ({ height, isDark, label }) => (
    <div
        className={`rounded-2xl border-2 border-dashed flex items-center justify-center transition-colors ${
            isDark ? "border-[#1d1d1d]" : "border-neutral-300"
        }`}
        style={{ height: `${height}px` }}
    >
        <span className={`text-[9px] tracking-[0.2em] uppercase ${isDark ? "text-[#222]" : "text-neutral-300"}`}>
            {label}
        </span>
    </div>
);

/* ─── Info card ──────────────────────────────────────────────────────── */
const InfoCard = ({ language, t }) => (
    <div className="rounded-2xl bg-white p-7 flex flex-col justify-between" style={{ minHeight: "330px" }}>
        <div>
            <h1 className="text-[2rem] font-bold leading-[1.05] tracking-tight text-gray-900 mb-4">
                Emanuel<br />Agüero
            </h1>
            <p className="text-[13px] font-semibold text-gray-500 mb-2">
                {t.home?.subtitle}
            </p>
            <p className="text-[13px] leading-relaxed text-gray-400 mb-5">
                {t.home?.description}
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-gray-100 text-gray-400">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Palmares, Costa Rica
            </div>
        </div>

        <div className="space-y-2 mt-5">
            {/* GitHub — black full-width */}
            <a
                href="https://github.com/Ebema260902"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-black text-white hover:bg-neutral-800 font-semibold text-sm transition-colors"
            >
                <div className="flex items-center gap-2.5">
                    <GitHubIcon />
                    <span>GitHub</span>
                </div>
                <span aria-hidden>→</span>
            </a>

            {/* LinkedIn + Resume — side by side */}
            <div className="grid grid-cols-2 gap-2">
                <a
                    href="https://linkedin.com/in/emanuel-aguero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    <LinkedInIcon />
                    LinkedIn
                </a>
                <a
                    href="/Developer Emanuel-Agüero-Resume.pdf"
                    download="CV_Emanuel_Aguero.pdf"
                    className="flex items-center justify-center py-2.5 rounded-xl text-[12px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    {language === "es" ? "CV ↓" : "Resume ↓"}
                </a>
            </div>
        </div>
    </div>
);

/* ─── Main page ──────────────────────────────────────────────────────── */
const Bento = () => {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const t = translations[language];
    const isDark = theme === "dark";

    const soon = language === "es" ? "próximamente" : "coming soon";

    // External projects first, then internal
    const projects = [
        {
            name: "agencia-de-carros",
            image: "/assets/images/agencia/image.png",
            technologies: ["Next.js", "React"],
            siteLink: "https://agencia-de-carros.vercel.app/",
            isExternal: true,
            github: "https://github.com/Ebema260902/Agencia-de-Carros",
        },
        {
            name: "perfumeria",
            image: "/assets/images/perfumeria/image.png",
            technologies: ["Shopify", "Liquid"],
            siteLink: "https://perfume-store-9757.myshopify.com/",
            isExternal: true,
            github: "https://github.com/Ebema260902",
        },
        {
            name: "cafeteria",
            image: "/assets/images/cafeteria/cafeteria.webp",
            technologies: ["Next.js", "TailwindCSS"],
            siteLink: "https://cafeteria-red-eta.vercel.app/",
            isExternal: true,
            github: "https://github.com/Ebema260902",
        },
        {
            name: "ticolancer",
            image: "/assets/images/ticolancer/ticolancer-home.png",
            technologies: ["Laravel", "React", "MySQL"],
            siteLink: "/ticolancer",
            isExternal: false,
            github: "https://github.com/Ebema260902",
        },
        {
            name: "jint",
            image: "/assets/images/jint/jint5.png",
            technologies: ["React", "Laravel"],
            siteLink: "/jint",
            isExternal: false,
            github: "https://github.com/Ebema260902",
        },
    ];

    const pc = (p) => <ProjectCard project={p} language={language} isDark={isDark} />;
    const ph = (h) => <Placeholder height={h} isDark={isDark} label={soon} />;

    return (
        <main
            id="main-content"
            className={`min-h-screen transition-colors ${isDark ? "bg-[#0c0c0c]" : "bg-[#e8e8e8]"}`}
            role="main"
        >
            <div className="w-full px-3 py-3">

                {/* ══ DESKTOP — 4 explicit flex columns ══════════════════
                     Order mirrors reference:
                     Col 1 → info + ticolancer
                     Col 2 → agencia (feature, same height as info) + cafeteria
                     Col 3 → ph + perfumeria + phs
                     Col 4 → ph + jint + phs
                ══════════════════════════════════════════════════════════ */}
                <div className="hidden lg:flex gap-3 items-start">

                    {/* Col 1 — info card + ticolancer (internal) */}
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                        <InfoCard language={language} t={t} />
                        {pc(projects[3])}
                        {ph(150)}
                        {ph(140)}
                    </div>

                    {/* Col 2 — agencia (feature, matches info height) + cafeteria */}
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                        <ProjectCard project={projects[0]} language={language} isDark={isDark} heightPx={330} />
                        {pc(projects[2])}
                        {ph(150)}
                        {ph(140)}
                    </div>

                    {/* Col 3 — small ph + perfumeria + phs */}
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                        {ph(150)}
                        {pc(projects[1])}
                        {ph(150)}
                        {ph(140)}
                    </div>

                    {/* Col 4 — small ph + jint (internal) + phs */}
                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                        {ph(150)}
                        {pc(projects[4])}
                        {ph(150)}
                        {ph(140)}
                    </div>
                </div>

                {/* ══ MOBILE — single column ══════════════════════════ */}
                <div className="flex flex-col gap-3 lg:hidden">
                    <InfoCard language={language} t={t} />
                    {projects.map((p) => (
                        <ProjectCard key={p.name} project={p} language={language} isDark={isDark} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Bento;
