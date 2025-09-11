// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light"
    this.init()
  }

  init() {
    this.applyTheme()
    this.bindEvents()
  }

  applyTheme() {
    document.documentElement.classList.toggle("dark", this.theme === "dark")
    this.updateThemeIcon()
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector(".theme-icon")
    if (themeIcon) {
      themeIcon.textContent = this.theme === "dark" ? "☀️" : "🌙"
    }
  }

  toggle() {
    this.theme = this.theme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", this.theme)
    this.applyTheme()
  }

  bindEvents() {
    const themeToggle = document.getElementById("themeToggle")
    if (themeToggle) {
      themeToggle.addEventListener("click", () => this.toggle())
    }
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn")
    this.navLinks = document.getElementById("navLinks")
    this.init()
  }

  init() {
    this.bindEvents()
    this.handleScroll()
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", () => this.toggleMobileMenu())
    }

    // Close mobile menu when clicking on links
    const navLinksElements = document.querySelectorAll(".nav-link")
    navLinksElements.forEach((link) => {
      link.addEventListener("click", () => this.closeMobileMenu())
    })

    // Handle scroll for navbar styling
    window.addEventListener("scroll", () => this.handleScroll())

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-container")) {
        this.closeMobileMenu()
      }
    })
  }

  toggleMobileMenu() {
    this.mobileMenuBtn.classList.toggle("active")
    this.navLinks.classList.toggle("active")
  }

  closeMobileMenu() {
    this.mobileMenuBtn.classList.remove("active")
    this.navLinks.classList.remove("active")
  }

  handleScroll() {
    const navbar = document.querySelector(".nav-container")
    if (window.scrollY > 50) {
      navbar.style.background = this.theme === "dark" ? "rgba(15, 23, 42, 0.98)" : "rgba(255, 255, 255, 0.98)"
    } else {
      navbar.style.background = this.theme === "dark" ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)"
    }
  }
}

// Animation Observer
class AnimationObserver {
  constructor() {
    this.init()
  }

  init() {
    this.createObserver()
    this.observeElements()
  }

  createObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, options)
  }

  observeElements() {
    const elements = document.querySelectorAll(".service-card, .portfolio-item, .feature-item")
    elements.forEach((el) => {
      el.classList.add("fade-in")
      this.observer.observe(el)
    })
  }
}

// Form Management
class FormManager {
  constructor() {
    this.form = document.getElementById("contactForm")
    this.init()
  }

  init() {
    if (this.form) {
      this.bindEvents()
    }
  }

  bindEvents() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e))
  }

  async handleSubmit(e) {
    e.preventDefault()

    const submitBtn = this.form.querySelector(".form-submit")
    const originalText = submitBtn.innerHTML

    // Show loading state
    submitBtn.innerHTML = `
            <svg class="btn-icon animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Sending...
        `
    submitBtn.disabled = true

    // Simulate form submission (replace with actual API call)
    try {
      await this.simulateSubmission()
      this.showSuccess(submitBtn)
      this.form.reset()
    } catch (error) {
      this.showError(submitBtn, originalText)
    }
  }

  simulateSubmission() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }

  showSuccess(submitBtn) {
    submitBtn.innerHTML = `
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Message Sent!
        `
    submitBtn.classList.add("success")

    setTimeout(() => {
      submitBtn.innerHTML = `
                Send Message
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            `
      submitBtn.classList.remove("success")
      submitBtn.disabled = false
    }, 3000)
  }

  showError(submitBtn, originalText) {
    submitBtn.innerHTML = "Error - Try Again"
    submitBtn.style.background = "#ef4444"

    setTimeout(() => {
      submitBtn.innerHTML = originalText
      submitBtn.style.background = ""
      submitBtn.disabled = false
    }, 3000)
  }
}

// Smooth Scrolling Utility
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = document.querySelector(".nav-container").offsetHeight
    const elementPosition = element.offsetTop - navHeight

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Performance Optimization
class PerformanceOptimizer {
  constructor() {
    this.init()
  }

  init() {
    this.lazyLoadImages()
    this.preloadCriticalResources()
  }

  lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]')

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }
  }

  preloadCriticalResources() {
    // Preload critical fonts
    const fontLink = document.createElement("link")
    fontLink.rel = "preload"
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    fontLink.as = "style"
    document.head.appendChild(fontLink)
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all managers
  const themeManager = new ThemeManager()
  const navigationManager = new NavigationManager()
  const animationObserver = new AnimationObserver()
  const formManager = new FormManager()
  const performanceOptimizer = new PerformanceOptimizer()

  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Add loading animation to buttons
  document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.disabled) {
        this.style.transform = "scale(0.98)"
        setTimeout(() => {
          this.style.transform = ""
        }, 150)
      }
    })
  })

  // Console welcome message
  console.log("%c🚀 AdeWeb Website Loaded Successfully!", "color: #6366f1; font-size: 16px; font-weight: bold;")
  console.log("%cBuilt with modern web technologies", "color: #6b7280; font-size: 12px;")
})

// Error Handling
window.addEventListener("error", (e) => {
  console.error("Application Error:", e.error)
})

// Service Worker Registration (for future PWA features)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Uncomment when service worker is implemented
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('SW registered'))
    //     .catch(error => console.log('SW registration failed'));
  })
}

// Export utilities for global use
window.AdeWeb = {
  scrollToSection,
  themeManager: null, // Will be set after initialization
}
