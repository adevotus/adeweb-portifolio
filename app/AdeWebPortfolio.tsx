"use client"

import { useState, useEffect } from "react"

const BI = ({ name, className = "" }) => (<i className={`bi bi-${name} ${className}`}></i>)

const projects = [
    {
        id: 1,
        title: "CardioCare Tanzania",
        category: "Healthcare",
        url: "https://cardiocare.co.tz/",
        description: "Advanced cardiac care and diagnostics platform for Tanzania's leading cardiology centre. Features appointment booking, multi-specialty clinical service pages, telemedicine integration, and patient facing content for adult & pediatric cardiology, ICU, surgical services, and imaging.",
        impact: "Improved patient access to Tanzania's top cardiac specialists online",
        tags: ["Healthcare", "Telemedicine", "SEO"],
        biIcon: "heart-pulse-fill",
    },
    {
        id: 2,
        title: "Tanzania Startup Week",
        category: "Events & Ecosystem",
        url: "https://startupweek.co.tz/",
        description: "Official platform for Tanzania's premier startup event held at PSSF Auditorium, Millennium Towers. Includes program agenda, speaker profiles, deal room access, partner events, publications, and the AIIA 2025 awards  powering the national innovation ecosystem.",
        impact: "Central hub for Tanzania's biggest annual startup gathering",
        tags: ["Events", "Deal Room", "Ecosystem"],
        biIcon: "rocket-takeoff-fill",
    },
    {
        id: 3,
        title: "Hansel |Spare Parts Management",
        category: "Inventory & Retail",
        url: "https://uat.hansel.adeweb.co.tz/",
        description: "A modern management system built for spare parts retail from small shops to multi location operations. Features real-time inventory tracking, automated low-stock alerts, seamless sales processing, and integrated customer communication tools.",
        impact: "Eliminates manual stocktaking; scales from single shop to chain",
        tags: ["Spare Parts", "Inventory", "Real-time"],
        biIcon: "gear-wide-connected",
    },
    {
        id: 4,
        title: "UrbanFlexs  Fintech for Africa",
        category: "Fintech / SaaS",
        url: "https://urbanflexs.com/",
        description: "A comprehensive fintech platform empowering African entrepreneurs across East Africa. Manages vehicle fleet rentals, property portfolios, retail shops, loan tracking, and debtor collections replacing spreadsheets with full operational visibility and mobile apps on iOS & Android.",
        impact: "Serving growing businesses across multiple East African countries",
        tags: ["Fintech", "SaaS", "Loan", "Debit Collections"],
        biIcon: "credit-card-2-front-fill",
    },
    {
        id: 5,
        title: "AfricanHub E-Learning",
        category: "EdTech",
        url: "https://africanhub.co.tz/",
        description: "Modern online learning platform with interactive courses, progress tracking, video streaming, and comprehensive student management  built to democratize quality education across Africa.",
        impact: "Making quality courses accessible to learners across the continent",
        tags: ["Accounting", "Learning", "EdTech"],
        biIcon: "mortarboard-fill",
    },
    {
        id: 6,
        title: "Medical Pharmacy System",
        category: "Healthcare",
        url: "https://pharmacy.adeweb.co.tz/",
        description: "Comprehensive pharmacy management system with real-time inventory tracking, prescription management, and analytics dashboards for healthcare providers.",
        impact: "Streamlining pharmacy operations and reducing medication errors",
        tags: ["Inventory","Healthcare"],
        biIcon: "capsule-pill",
    },

    {
        id: 8,
        title: "Tanzania Startup Association",
        category: "NGO / Ecosystem",
        url: "https://tsa.co.tz/",
        description: "Membership-based umbrella organisation bringing together stakeholders of Tanzania's startup ecosystem to lobby, advocate, and drive frameworks for a conducive business environment.",
        impact: "Unifying Tanzania's entire startup ecosystem under one voice",
        tags: ["Ecosystem", "Startups", "SEO"],
        biIcon: "globe-americas",
    },
]

const categories = [
    { label: "All", icon: "grid-fill" },
    { label: "Healthcare", icon: "heart-pulse-fill" },
    { label: "Fintech / SaaS", icon: "credit-card-2-front-fill" },
    { label: "EdTech", icon: "mortarboard-fill" },
    { label: "Events & Ecosystem", icon: "calendar-event-fill" },
    { label: "Inventory & Retail", icon: "boxes" },
    { label: "NGO / Ecosystem", icon: "globe-americas" },
]

export default function AdeWebPortfolio() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [featured, setFeatured] = useState(projects[0])

    useEffect(() => {
        if (!document.getElementById("bi-css")) {
            const link = document.createElement("link")
            link.id = "bi-css"
            link.rel = "stylesheet"
            link.href =
                "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            document.head.appendChild(link)
        }
    }, [])

    const filtered =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory)

    return (
        <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Header ── */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 project-title">Projects & Portfolios</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 project-title-label">Some of the works and projects we have proudly delivered
                    </p>
                </div>

                {/* ── Stats Bar ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-indigo-600 rounded-2xl text-white">
                    {[
                        { icon: "folder-fill", n: "8+", label: "Live Projects" },
                        { icon: "building-fill", n: "5+", label: "Industries" },
                        { icon: "people-fill", n: "10+", label: "Happy Clients" },
                        { icon: "calendar-check-fill", n: "4+", label: "Years Building" },
                    ].map((s, i) => (
                        <div key={i} className="text-center">
                            <BI name={s.icon} className="text-indigo-200 text-2xl mb-2" />
                            <div className="text-3xl font-bold">{s.n}</div>
                            <div className="text-indigo-200 text-sm mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* ── Featured Spotlight ── */}
                <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2 gap-0">

                        {/* Left – project detail */}
                        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                            {/* Top bar accent */}
                            <div className="w-12 h-1 bg-indigo-600 rounded-full mb-6" />

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                                    <BI name={featured.biIcon} className="text-2xl text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full">
                  {featured.category}
                </span>
                                <span className="text-xs text-gray-400 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <BI name="star-fill" className="text-indigo-500" /> Featured
                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {featured.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                                {featured.description}
                            </p>

                            <div className="flex items-start gap-3 mb-5 p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                                <BI name="check-circle-fill" className="text-indigo-600 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-200 text-sm">{featured.impact}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {featured.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-sm rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-100 dark:border-indigo-800"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <a
                                href={featured.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
                            >
                                <BI name="box-arrow-up-right" />
                                View Live Project
                            </a>
                        </div>

                        {/* Right – project selector */}
                        <div className="p-6 md:p-8">
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <BI name="hand-index-fill" className="text-indigo-400" /> Select a project
                            </p>
                            <div className="space-y-1.5">
                                {projects.map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => setFeatured(p)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 ${
                                            featured.id === p.id
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                                        }`}
                                    >
                                        <div
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                featured.id === p.id
                                                    ? "bg-indigo-500"
                                                    : "bg-indigo-100 dark:bg-indigo-900"
                                            }`}
                                        >
                                            <BI
                                                name={p.biIcon}
                                                className={`text-lg ${
                                                    featured.id === p.id
                                                        ? "text-white"
                                                        : "text-indigo-600 dark:text-indigo-400"
                                                }`}
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div
                                                className={`font-semibold text-sm truncate ${
                                                    featured.id === p.id ? "text-white" : "text-gray-900 dark:text-white"
                                                }`}
                                            >
                                                {p.title}
                                            </div>
                                            <div
                                                className={`text-xs truncate ${
                                                    featured.id === p.id ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"
                                                }`}
                                            >
                                                {p.category}
                                            </div>
                                        </div>
                                        {featured.id === p.id && (
                                            <BI name="chevron-right" className="text-white flex-shrink-0" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Filter Tabs ── */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    {categories.map(({ label, icon }) => (
                        <button
                            key={label}
                            onClick={() => setActiveCategory(label)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                                activeCategory === label
                                    ? "bg-indigo-600 text-white shadow-md"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400"
                            }`}
                        >
                            <BI name={icon} />
                            {label}
                        </button>
                    ))}
                </div>

                {/* ── Project Grid ── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setFeatured(project)}
                            className="group cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                                <BI
                                    name={project.biIcon}
                                    className="text-xl text-indigo-600 dark:text-indigo-400"
                                />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h4>

                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.tags.slice(0, 2).map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800"
                                    >
                    {t}
                  </span>
                                ))}
                                {project.tags.length > 2 && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                    +{project.tags.length - 2}
                  </span>
                                )}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                                >
                                    <BI name="box-arrow-up-right" className="text-xs" />
                                    View Project
                                </a>
                                <div className="flex items-center text-indigo-600 dark:text-indigo-400">
                                    <svg
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="text-center">
                    <button
                        onClick={() => {
                            const el = document.getElementById("contact")
                            if (el) el.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                    >
                        <BI name="send-fill" />
                        Start Your Project
                    </button>
                </div>

            </div>
        </section>
    )
}