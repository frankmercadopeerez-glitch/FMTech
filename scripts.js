/**
 * FMTech - Agencia Web Cartagena
 * Scripts principales con efectos profesionales
 * Bilingüe: Español (por defecto) / English
 */

document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // CONFIGURACIÓN DE TRADUCCIONES
  // ============================================
  const translations = {
    en: {
      // Preloader
      preloader_text: "Loading experience...",

      // Header
      header_tagline: "Web Design",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_process: "Process",
      nav_faq: "FAQ",
      nav_cta: "Schedule Call",

      // Hero
      hero_badge: "#1 Agency in Cartagena, Colombia",
      hero_title_1: "We create websites that",
      hero_title_2: "convert visitors into customers",
      hero_subtitle:
        "Professional web design, local SEO and digital strategy for businesses in Cartagena and all of Colombia. Your online presence, redefined.",
      hero_cta: "Schedule Free Consultation",
      hero_cta_secondary: "View Projects",
      hero_trust: "Trusted by businesses in",
      scroll_down: "Scroll",

      // Stats
      stat_projects: "Projects Delivered",
      stat_satisfaction: "% Satisfaction",
      stat_years: "Years Experience",
      stat_response: "Response Time",

      // Problems
      problem_label: "The Problem",
      problem_title: "Is your website not generating results?",
      problem_subtitle:
        "Many businesses in Cartagena have an online presence, but few have one that actually works.",
      prob_1_title: "Zero Visibility",
      prob_1_desc:
        "Your potential customers can't find you on Google. Your competition does appear.",
      prob_2_title: "Slow Website",
      prob_2_desc:
        "A slow website drives away customers. Google penalizes slow mobile loading.",
      prob_3_title: "Not Responsive",
      prob_3_desc:
        "70% of your visitors come from mobile. Does your site look good there?",
      prob_4_title: "Doesn't Convert",
      prob_4_desc:
        "You have visits but no contacts. Your website doesn't guide visitors to action.",
      prob_5_title: "Outdated Design",
      prob_5_desc:
        "An old design transmits distrust. Your image is your first salesperson.",
      prob_6_title: "No Support",
      prob_6_desc:
        "Your developer disappeared. You have nobody to update or fix your website.",

      // Services
      services_label: "Services",
      services_title: "Solutions that drive your business",
      services_subtitle:
        "We don't just make pretty websites. We create customer-generating machines.",
      service_1_title: "Premium Web Design",
      service_1_desc:
        "Custom websites with modern design, optimized to convert visitors into customers. No generic templates.",
      service_1_f1: "100% custom design",
      service_1_f2: "Mobile optimized",
      service_1_f3: "Ultra-fast on Google",
      service_2_title: "Local SEO Cartagena",
      service_2_desc:
        "Google ranking so customers in Cartagena find you first. Technical and content SEO.",
      service_2_f1: "Google My Business",
      service_2_f2: "Local keywords",
      service_2_f3: "Measurable results",
      service_3_title: "Optimization & Speed",
      service_3_desc:
        "We improve your current site speed to load in under 3 seconds so Google ranks you better.",
      service_3_f1: "Core Web Vitals",
      service_3_f2: "Image optimization",
      service_3_f3: "Cache and CDN",

      // Portfolio
      portfolio_label: "Portfolio",
      portfolio_title: "Projects that speak for themselves",
      portfolio_view_all: "View all projects",

      // Clients
      clients_label: "Companies that trust us",

      // Process
      process_label: "Process",
      process_title: "Simple, fast and effective",
      process_subtitle:
        "A clear process so you know exactly what to expect at each step.",
      step_1_title: "Free Call",
      step_1_desc: "We discuss your business and goals with no commitment",
      step_2_title: "Proposal",
      step_2_desc: "We send you a detailed plan with fixed price",
      step_3_title: "Development",
      step_3_desc: "We build your site with unlimited revisions",
      step_4_title: "Launch",
      step_4_desc: "We publish and teach you to manage everything",

      // Pricing
      pricing_label: "Investment",
      pricing_title: "Websites starting from",
      pricing_desc:
        "Each project is unique. Schedule a free call to learn about your business and give you an exact quote. We adapt to your budget.",
      pricing_f1: "No hidden costs",
      pricing_f2: "Split payments",
      pricing_f3: "Support included",
      pricing_cta: "Schedule Free Call",

      // Testimonials
      testimonials_label: "Testimonials",
      testimonials_title: "What our clients say",

      // Contact
      contact_label: "Contact",
      contact_title: "Let's talk about your project",
      contact_subtitle:
        "Schedule a free 15-minute call. No commitment, no pressure. We just want to know your business and see how we can help.",
      contact_location_title: "Location",
      form_name: "Full name",
      form_email: "Email",
      form_phone: "WhatsApp",
      form_service: "What do you need?",
      form_opt_web: "New website",
      form_opt_redesign: "Existing site redesign",
      form_opt_seo: "SEO / Positioning",
      form_opt_speed: "Speed optimization",
      form_opt_other: "Other service",
      form_message: "Tell us about your project",
      form_submit: "Send Message",

      // WhatsApp
      whatsapp_cta: "Contact us!",

      // Footer
      footer_tagline: "Web Design Cartagena",
      footer_desc:
        "We create professional websites that convert visitors into customers. Design, development and local SEO in Cartagena, Colombia.",
      footer_links: "Links",
      footer_services: "Services",
      footer_contact: "Contact",
      footer_rights: "All rights reserved.",
      footer_privacy: "Privacy",
      footer_terms: "Terms",

      // FAQ Page
      faq_hero_title: "Frequently Asked Questions",
      faq_hero_sub: "Clear answers for your digital journey.",
      q1: "How long does a project take?",
      a1: "It depends on the complexity. A landing page can take 1 week, while a full corporate site with booking systems can take 4-8 weeks. We provide a timeline in our proposal.",
      q2: "Will this work for my specific niche?",
      a2: "Absolutely. We specialize in creating websites for any type of business. We understand your customer's mindset.",
      q3: "What happens after the free consultation?",
      a3: "We send you a detailed proposal with a strategy roadmap and a custom quote. No strings attached.",
      q4: "Do I need to replace my current website?",
      a4: "Not always. Sometimes we can optimize what you have. We'll tell you honestly during the evaluation if a redesign or new build is better.",
      q5: "What is included in the service?",
      a5: "It's tailored to you. Can range from SEO audits to full web development, content creation, and lead generation setups.",
      q6: "What is the minimum investment?",
      a6: "Our custom engagements start at $150 USD. We focus on delivering value that exceeds the investment.",
      q7: "What if I am not satisfied?",
      a7: "We work in milestones. You approve designs and strategies before we build. Your satisfaction is our priority.",
      q8: "Is there support after launch?",
      a8: "Yes. We offer maintenance and growth retainers to ensure your digital presence keeps performing.",

      // How It Works Page
      how_title: "Our Process",
      how_sub: "A structured approach to digital success.",
      step1_title: "Discovery & Analysis",
      step1_d:
        "We dive deep into your business model to understand your true needs.",
      step2_title: "Strategy & Blueprint",
      step2_d:
        "We design the solution architecture before writing a single line of code.",
      step3_title: "Development & Launch",
      step3_d:
        "Building, rigorous testing, and deployment of your new digital asset.",
      step4_title: "Growth & Optimization",
      step4_d:
        "It doesn't end at launch. We analyze data for continuous improvement.",

      // Portfolio Page
      port_page_title: "Success Cases",
      port_filter_all: "All",
      view_site: "View Site →",

      // Blog Page
      blog_page_title: "Digital Strategy: Trends & Tips",
    },
    es: {
      // Preloader
      preloader_text: "Cargando experiencia...",

      // Header
      header_tagline: "Web Design",
      nav_services: "Servicios",
      nav_portfolio: "Portafolio",
      nav_process: "Proceso",
      nav_faq: "FAQ",
      nav_cta: "Agendar Llamada",

      // Hero
      hero_badge: "Agencia #1 en Cartagena, Colombia",
      hero_title_1: "Creamos sitios web que",
      hero_title_2: "convierten visitantes en clientes",
      hero_subtitle:
        "Diseño web profesional, SEO local y estrategia digital para negocios en Cartagena y toda Colombia. Tu presencia online, redefinida.",
      hero_cta: "Agendar Consulta Gratis",
      hero_cta_secondary: "Ver Proyectos",
      hero_trust: "Confianza de negocios en",
      scroll_down: "Scroll",

      // Stats
      stat_projects: "Proyectos Entregados",
      stat_satisfaction: "% Satisfacción",
      stat_years: "Años de Experiencia",
      stat_response: "Tiempo de Respuesta",

      // Problems
      problem_label: "El Problema",
      problem_title: "¿Tu sitio web no genera resultados?",
      problem_subtitle:
        "Muchos negocios en Cartagena tienen presencia online, pero pocos tienen una presencia que realmente funcione.",
      prob_1_title: "Cero Visibilidad",
      prob_1_desc:
        "Tus clientes potenciales no te encuentran en Google. Tu competencia sí aparece.",
      prob_2_title: "Sitio Lento",
      prob_2_desc:
        "Un sitio lento espanta clientes. Google penaliza la velocidad baja en móviles.",
      prob_3_title: "No es Responsivo",
      prob_3_desc:
        "El 70% de tus visitantes vienen desde celular. ¿Tu sitio se ve bien ahí?",
      prob_4_title: "No Convierte",
      prob_4_desc:
        "Tienes visitas pero no contactos. Tu web no guía al visitante hacia la acción.",
      prob_5_title: "Diseño Anticuado",
      prob_5_desc:
        "Un diseño viejo transmite desconfianza. Tu imagen es tu primer vendedor.",
      prob_6_title: "Sin Soporte",
      prob_6_desc:
        "Tu desarrollador desapareció. No tienes quién actualice o arregle tu sitio.",

      // Services
      services_label: "Servicios",
      services_title: "Soluciones que impulsan tu negocio",
      services_subtitle:
        "No solo hacemos sitios web bonitos. Creamos máquinas de generar clientes.",
      service_1_title: "Diseño Web Premium",
      service_1_desc:
        "Sitios web a medida con diseño moderno, optimizados para convertir visitantes en clientes. Sin plantillas genéricas.",
      service_1_f1: "Diseño 100% personalizado",
      service_1_f2: "Optimizado para móvil",
      service_1_f3: "Ultra rápido en Google",
      service_2_title: "SEO Local Cartagena",
      service_2_desc:
        "Posicionamiento en Google para que clientes en Cartagena te encuentren primero. SEO técnico y de contenido.",
      service_2_f1: "Google My Business",
      service_2_f2: "Keywords locales",
      service_2_f3: "Resultados medibles",
      service_3_title: "Optimización & Velocidad",
      service_3_desc:
        "Mejoramos la velocidad de tu sitio actual para que cargue en menos de 3 segundos y Google te posicione mejor.",
      service_3_f1: "Core Web Vitals",
      service_3_f2: "Optimización de imágenes",
      service_3_f3: "Caché y CDN",

      // Portfolio
      portfolio_label: "Portafolio",
      portfolio_title: "Proyectos que hablan por sí solos",
      portfolio_view_all: "Ver todos los proyectos",

      // Clients
      clients_label: "Empresas que confían en nosotros",

      // Process
      process_label: "Proceso",
      process_title: "Simple, rápido y efectivo",
      process_subtitle:
        "Un proceso claro para que sepas exactamente qué esperar en cada paso.",
      step_1_title: "Llamada Gratis",
      step_1_desc: "Hablamos de tu negocio y objetivos sin compromiso",
      step_2_title: "Propuesta",
      step_2_desc: "Te enviamos un plan detallado con precio fijo",
      step_3_title: "Desarrollo",
      step_3_desc: "Construimos tu sitio con revisiones ilimitadas",
      step_4_title: "Lanzamiento",
      step_4_desc: "Publicamos y te enseñamos a manejar todo",

      // Pricing
      pricing_label: "Inversión",
      pricing_title: "Sitios web desde",
      pricing_desc:
        "Cada proyecto es único. Agenda una llamada gratuita para conocer tu negocio y darte una cotización exacta. Nos ajustamos a tu presupuesto.",
      pricing_f1: "Sin costos ocultos",
      pricing_f2: "Pagos fraccionados",
      pricing_f3: "Soporte incluido",
      pricing_cta: "Agendar Llamada Gratuita",

      // Testimonials
      testimonials_label: "Testimonios",
      testimonials_title: "Lo que dicen nuestros clientes",

      // Contact
      contact_label: "Contacto",
      contact_title: "Hablemos de tu proyecto",
      contact_subtitle:
        "Agenda una llamada gratuita de 15 minutos. Sin compromiso, sin presión. Solo queremos conocer tu negocio y ver cómo podemos ayudarte.",
      contact_location_title: "Ubicación",
      form_name: "Nombre completo",
      form_email: "Email",
      form_phone: "WhatsApp",
      form_service: "¿Qué necesitas?",
      form_opt_web: "Sitio web nuevo",
      form_opt_redesign: "Rediseño de sitio existente",
      form_opt_seo: "SEO / Posicionamiento",
      form_opt_speed: "Optimización de velocidad",
      form_opt_other: "Otro servicio",
      form_message: "Cuéntanos sobre tu proyecto",
      form_submit: "Enviar Mensaje",

      // WhatsApp
      whatsapp_cta: "¡Contáctanos!",

      // Footer
      footer_tagline: "Web Design Cartagena",
      footer_desc:
        "Creamos sitios web profesionales que convierten visitantes en clientes. Diseño, desarrollo y SEO local en Cartagena, Colombia.",
      footer_links: "Enlaces",
      footer_services: "Servicios",
      footer_contact: "Contacto",
      footer_rights: "Todos los derechos reservados.",
      footer_privacy: "Privacidad",
      footer_terms: "Términos",

      // FAQ Page
      faq_hero_title: "Preguntas Frecuentes",
      faq_hero_sub: "Respuestas claras para tu viaje digital.",
      q1: "¿Cuánto tiempo tarda un proyecto?",
      a1: "Depende de la complejidad. Una landing page puede tomar 1 semana, mientras que un sitio corporativo completo con reservas puede tomar 4-8 semanas. Proveemos un cronograma en nuestra propuesta.",
      q2: "¿Funcionará para mi nicho específico?",
      a2: "Absolutamente. Nos especializamos en crear sitios web para cualquier tipo de negocio. Entendemos la mentalidad de tu cliente.",
      q3: "¿Qué pasa después de la consultoría gratuita?",
      a3: "Te enviamos una propuesta detallada con una hoja de ruta estratégica y un presupuesto personalizado. Sin compromiso.",
      q4: "¿Necesito cambiar mi sitio web actual?",
      a4: "No siempre. A veces podemos optimizar lo que ya tienes. Te diremos honestamente durante la evaluación si es mejor un rediseño o una nueva construcción.",
      q5: "¿Qué incluye el servicio?",
      a5: "Está hecho a medida. Puede ir desde auditorías SEO hasta desarrollo web completo, creación de contenido y configuración de generación de leads.",
      q6: "¿Cuál es el mínimo de inversión?",
      a6: "Nuestros compromisos personalizados comienzan en $600.000 COP. Nos enfocamos en entregar valor que supere la inversión.",
      q7: "¿Qué pasa si no estoy satisfecho?",
      a7: "Trabajamos por hitos. Apruebas diseños y estrategias antes de que construyamos. Tu satisfacción es nuestra prioridad.",
      q8: "¿Hay soporte después del lanzamiento?",
      a8: "Sí. Ofrecemos mantenimiento y planes de crecimiento para asegurar que tu presencia digital siga rindiendo.",

      // How It Works Page
      how_title: "Nuestro Proceso",
      how_sub: "Un enfoque estructurado para el éxito digital.",
      step1_title: "Descubrimiento y Análisis",
      step1_d:
        "Profundizamos en tu modelo de negocio para entender tus verdaderas necesidades.",
      step2_title: "Estrategia y Planos",
      step2_d:
        "Diseñamos la arquitectura de la solución antes de escribir una sola línea de código.",
      step3_title: "Desarrollo y Lanzamiento",
      step3_d:
        "Construcción, pruebas rigurosas y despliegue de tu nuevo activo digital.",
      step4_title: "Crecimiento y Optimización",
      step4_d:
        "No termina en el lanzamiento. Analizamos datos para mejorar continuamente.",

      // Portfolio Page
      port_page_title: "Casos de Éxito",
      port_filter_all: "Todos",
      view_site: "Ver Sitio →",

      // Blog Page
      blog_page_title: "Estrategia Digital: Tendencias y Tips",
    },
  };

  // Testimonials data
  const testimonialsData = [
    {
      author: "Carlos Mendoza",
      role: "CEO, TechDiving",
      text_en:
        "Our bookings increased by 40% since we launched the new website. Professional, fast, and precise.",
      text_es:
        "Nuestras reservas aumentaron un 40% desde que lanzamos el nuevo sitio web. Profesionales, rápidos y precisos.",
    },
    {
      author: "María Rodríguez",
      role: "Directora, Restaurante El Caribe",
      text_en:
        "Now customers find us on Google first. The investment was worth every peso.",
      text_es:
        "Ahora los clientes nos encuentran primero en Google. La inversión valió cada peso.",
    },
    {
      author: "James Willis",
      role: "CEO, Willis Custom Yachts",
      text_en:
        "Finally, an agency that understands what we need. The website is a masterpiece.",
      text_es:
        "Finalmente, una agencia que entiende lo que necesitamos. El sitio web es una obra maestra.",
    },
    {
      author: "Ana García",
      role: "Fundadora, Boutique Elegance",
      text_en:
        "They completely transformed our online presence. Sales doubled in 3 months.",
      text_es:
        "Transformaron completamente nuestra presencia online. Las ventas se duplicaron en 3 meses.",
    },
    {
      author: "Roberto Jiménez",
      role: "Owner, Caribe Tours",
      text_en:
        "We were invisible on Google. FMTech fixed that and now we're #1 for our keywords.",
      text_es:
        "Éramos invisibles en Google. FMTech arregló eso y ahora somos #1 para nuestras palabras clave.",
    },
  ];

  // ============================================
  // LANGUAGE DETECTION & MANAGEMENT
  // ============================================
  let currentLang = localStorage.getItem("fmtech-lang");

  // Auto-detect language from browser if not set
  if (!currentLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    currentLang = browserLang.startsWith("es") ? "es" : "en";
    localStorage.setItem("fmtech-lang", currentLang);
  }

  function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-translate-key]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-translate-key");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update language toggle buttons
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("bg-indigo-500", "text-white");
        btn.classList.remove("text-slate-400");
      } else {
        btn.classList.remove("bg-indigo-500", "text-white");
        btn.classList.add("text-slate-400");
      }
    });
  }

  // Language toggle click handler
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      currentLang = lang;
      localStorage.setItem("fmtech-lang", lang);
      applyTranslations(lang);
      renderTestimonials();
    });
  });

  // Apply initial translations
  applyTranslations(currentLang);

  // ============================================
  // PRELOADER
  // ============================================
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }, 800);
    });
  }

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.getElementById("header");
  if (header) {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }

      lastScroll = currentScroll;
    });
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle("active", menuOpen);

      // Animate hamburger icon
      const lines = menuBtn.querySelectorAll(".menu-line");
      if (menuOpen) {
        lines[0].style.transform = "rotate(45deg) translate(4px, 4px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
        lines[2].style.width = "100%";
      } else {
        lines[0].style.transform = "";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "";
        lines[2].style.width = "";
      }

      // Prevent body scroll when menu is open
      document.body.style.overflow = menuOpen ? "hidden" : "";
    });

    // Close menu when clicking on links
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuOpen = false;
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";

        const lines = menuBtn.querySelectorAll(".menu-line");
        lines[0].style.transform = "";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "";
        lines[2].style.width = "";
      });
    });
  }

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ============================================
  // COUNTER ANIMATION
  // ============================================
  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-target"));

          if (target && !counter.classList.contains("counted")) {
            counter.classList.add("counted");

            const duration = 2000;
            const steps = 60;
            const stepValue = target / steps;
            let current = 0;

            const interval = setInterval(() => {
              current += stepValue;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, duration / steps);
          }
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  // ============================================
  // TESTIMONIALS SLIDER
  // ============================================
  function renderTestimonials() {
    const slider = document.getElementById("testimonial-slider");
    if (!slider) return;

    slider.innerHTML = testimonialsData
      .map(
        (t, i) => `
            <div class="flex-shrink-0 w-[320px] md:w-[400px] snap-start bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                <div class="flex gap-1 mb-4">
                    ${"★"
                      .repeat(5)
                      .split("")
                      .map(() => '<span class="text-amber-400">★</span>')
                      .join("")}
                </div>
                <p class="text-slate-300 mb-6 leading-relaxed">"${currentLang === "en" ? t.text_en : t.text_es}"</p>
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        ${t.author.charAt(0)}
                    </div>
                    <div>
                        <div class="font-bold text-white">${t.author}</div>
                        <div class="text-sm text-slate-400">${t.role}</div>
                    </div>
                </div>
            </div>
        `,
      )
      .join("");
  }

  renderTestimonials();

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ============================================
  // FORM HANDLING
  // ============================================
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Create WhatsApp message
      const message = `Hola! Me interesa el servicio de ${data.service}.

*Nombre:* ${data.name}
*Email:* ${data.email}
*WhatsApp:* ${data.phone || "No proporcionado"}

*Mensaje:*
${data.message || "Me gustaría más información"}`;

      // Encode and open WhatsApp
      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/573044301112?text=${encodedMsg}`, "_blank");

      // Reset form
      this.reset();
    });
  }

  // ============================================
  // FAQ ACCORDION
  // ============================================
  document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".icon-plus");
      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      // Close all others
      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.style.maxHeight = "0px";
      });
      document.querySelectorAll(".icon-plus").forEach((i) => {
        i.textContent = "+";
      });

      // Toggle current
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        if (icon) icon.textContent = "−";
      }
    });
  });

  // ============================================
  // PORTFOLIO FILTER
  // ============================================
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.dataset.filter;

      // Update button styles
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("bg-indigo-500", "text-white");
        b.classList.add("bg-slate-800", "text-slate-300");
      });
      this.classList.add("bg-indigo-500", "text-white");
      this.classList.remove("bg-slate-800", "text-slate-300");

      // Filter projects
      document.querySelectorAll(".project-item").forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "";
          item.classList.add("reveal", "active");
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // ============================================
  // PARALLAX ON SCROLL (subtle effect)
  // ============================================
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;

        // Hero parallax elements
        document.querySelectorAll(".blob").forEach((blob, i) => {
          const speed = i === 0 ? 0.3 : 0.2;
          blob.style.transform = `translateY(${scrolled * speed}px)`;
        });

        ticking = false;
      });
      ticking = true;
    }
  });

  // ============================================
  // LAZY LOADING IMAGES
  // ============================================
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // PERFORMANCE: Reduce motion for users who prefer it
  // ============================================
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty(
      "--animation-duration",
      "0.01ms",
    );
    document
      .querySelectorAll(".blob, .float, .animate-bounce, .pulse-glow")
      .forEach((el) => {
        el.style.animation = "none";
      });
  }

  console.log("🚀 FMTech - Sitio cargado correctamente");
});
