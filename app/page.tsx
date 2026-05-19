"use client"

import { useEffect, useState } from "react"
import './component.css'
import AdeWebPortfolio from "@/app/AdeWebPortfolio";

export default function AdeWebHomepage() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    // Theme toggle functionality
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5)
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              {/* <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">AdeWeb</span> */}
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"><img src="../adeweb-logo.png" alt="AdeWeb Logo" className="h-10" /></span>
              {/* <span className="text-sm text-gray-600 dark:text-gray-400">ICT Consulting</span> */}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? "☀️" : "🌙"}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    scrollToSection("home")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection("services")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection("portfolio")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact")
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
       id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight" style={{ fontFamily: "Times New Roman, sans-serif",fontWeight: 700,fontSize:'50px' }}>
                Transforming Ideas Into <span className="text-indigo-600 dark:text-indigo-400">Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed" style={{ fontFamily: "Pappin, sans-serif",fontWeight: 300,fontSize:'17px' }}>
                Professional ICT consulting and software development services that drive innovation and growth for your
                business in Tanzania and beyond.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-white project-status">4+</div>
                  <div className="text-sm dark:text-white project-status-label">Years Experience</div>
                </div>
                <div className="text-center"> 
                  <div className="text-3xl font-bold text-indigo-600 dark:text-white project-status">10+</div>
                  <div className="text-sm  dark:text-white project-status-label">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-white project-status">8+</div>
                  <div className="text-sm  dark:text-white project-status-label">Projects Completed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg font-semibold transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-800 dark:text-gray-200">
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">solution</span>{" "}
                    <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
                    <span className="text-green-600 dark:text-green-400">"innovative"</span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    <span className="text-purple-600 dark:text-purple-400">function</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">buildSuccess</span>
                    <span className="text-gray-600 dark:text-gray-400">()</span>{" "}
                    <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200 pl-4">
                    <span className="text-purple-600 dark:text-purple-400">return</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">expertise</span>{" "}
                    <span className="text-gray-600 dark:text-gray-400">+</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">innovation</span>
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 project-title">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 project-title-label">  We bring worlds together to move your world forward.  </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Creative & Experience Design */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "Pappin, sans-serif" }}
              >
                Creative & Experience Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                User-centered design solutions that create engaging and intuitive digital experiences for your
                customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• User Interface Design</li>
                <li>• User Experience Research</li>
                <li>• Prototyping & Wireframing</li>
                <li>• Brand Identity Design</li>
              </ul>
            </div>

            {/* Technology and Operations */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "Pappin, sans-serif" }}
              >
                Technology and Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive technology solutions and operational excellence to streamline your business processes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Custom Software Development</li>
                <li>• System Integration</li>
                <li>• Cloud Infrastructure</li>
                <li>• DevOps & Automation</li>
              </ul>
            </div>

            {/* Customer Data & Analytics */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "Pappin, sans-serif" }}
              >
                Customer Data & Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transform your data into actionable insights to drive better business decisions and customer
                experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Data Analytics & Reporting</li>
                <li>• Business Intelligence</li>
                <li>• Customer Insights</li>
                <li>• Performance Metrics</li>
              </ul>
            </div>

            {/* Customer & Commercial Strategy */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "Pappin, sans-serif" }}
              >
                Customer & Commercial Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Strategic consulting to help you develop winning customer acquisition and commercial growth strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Market Research & Analysis</li>
                <li>• Customer Journey Mapping</li>
                <li>• Growth Strategy Development</li>
                <li>• Digital Marketing Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white project-title">About AdeWeb</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed project-title-label">
                We are a leading ICT consulting firm based in Tanzania, dedicated to helping businesses harness the
                power of technology. With over 5 years of experience, we've successfully delivered innovative solutions
                to clients across various industries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Quick turnaround times without compromising quality
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality Assured</h4>
                    <p className="text-gray-600 dark:text-gray-300">Rigorous testing and quality control processes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Round-the-clock technical support and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-team-working-on-computers-in-modern-o.jpg"
                alt="AdeWeb team at work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
     <AdeWebPortfolio/>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 project-title">Trusted by Leading Companies</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 project-title-label">
              Partnering with innovative businesses across Tanzania and beyond
            </p>
          </div>

          {/* Desktop Slider */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-center space-x-12">
              {[
                { src: "/aw-06.png", alt: "mzawadie", name: "mzawadie" },
                { src: "/aw-07.png", alt: "Tanzania Telecom", name: "TSA" },
                { src: "/aw-08.png", alt: "Eco Valley", name: "EcoValley" },
                { src: "/aw-ph-04.png", alt: "Alternative Solutions", name: "Alternative Solutions" },
                { src: "/aw-ph-06.png", alt: "Go Right", name: "G07EIGHT" },
                { src: "/aw-ph-07.png", alt: "Wonders Choirs", name: "Wonders Choirs" },
                { src: "/aw-ph-05.png", alt: "Wonders Choirs", name: "GSA Africa" },
              ].map((client, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    index === currentSlide ? "scale-110 opacity-100" : "scale-90 opacity-60 hover:opacity-80"
                  }`}
                >
                  <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center p-4 mb-3">
                    <img
                      src={client.src || "/placeholder.svg"}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{client.name}</span>
                </div>
              ))}
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-indigo-600 dark:bg-indigo-400"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-6">
            {[
              { src: "/generic-company-logo.png", alt: "TechCorp Solutions", name: "TechCorp" },
              { src: "/tanzania-telecom-logo.jpg", alt: "Tanzania Telecom", name: "Tanzania Telecom" },
              { src: "/eco-valley-company-logo.jpg", alt: "Eco Valley", name: "Eco Valley" },
              { src: "/alternative-solutions-logo.jpg", alt: "Alternative Solutions", name: "Alternative Solutions" },
            ].map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-xl shadow-lg flex items-center justify-center p-3 mb-2">
                  <img
                    src={client.src || "/placeholder.svg"}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 project-title">Get In Touch</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 project-title-label">
                  Ready to transform your business with innovative technology solutions? Let's discuss your project.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@adeweb.co.tz</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+255 653321198</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.instagram.com/adevoweb" className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5-1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="creative-design">Creative & Experience Design</option>
                    <option value="technology-operations">Technology and Operations</option>
                    <option value="data-analytics">Customer Data & Analytics</option>
                    <option value="commercial-strategy">Customer & Commercial Strategy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">AdeWeb</h3>
              <p className="text-gray-400">Transforming ideas into digital solutions</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Creative & Experience Design
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Technology and Operations
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Customer Data & Analytics
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Customer & Commercial Strategy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors">Projects & Portfolios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AdeWeb ICT Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
