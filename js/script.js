/* ============================================
   FM Tech - Enhanced JavaScript
   Modern Interactions and Animations
   ============================================ */

// PayPal Client ID Configuration
const PAYPAL_CLIENT_ID = "YOUR_CLIENT_ID_GOES_HERE";

// ===== Translation System =====
const translations = {
    en: {
        nav_solutions: "Solutions",
        nav_pricing: "Pricing",
        nav_portfolio: "Portfolio",
        nav_clients: "Clients",
        nav_faq: "FAQs",
        nav_blog: "Blog",
        nav_contact: "Contact",
        nav_home: "Home",
        
        hero_title: "The Website Your Business Needs to <span class='brand-text'>Grow</span>",
        hero_subtitle: "We design professional and effective websites for businesses, helping you stand out and attract more customers.",
        hero_cta1: "See Our Work",
        hero_cta2: "Request Free Consultation",
        
        why_us_title: "Why Choose FM Tech?",
        why_us_subtitle: "Your success is our main goal.",
        why_us_item1_title: "💰 Fair Prices",
        why_us_item1_desc: "We offer high-quality solutions with no hidden costs. A smart investment with a clear return for your business.",
        why_us_item2_title: "⚡ Speed & Performance",
        why_us_item2_desc: "Websites optimized to load quickly, improving user experience and your Google ranking.",
        why_us_item3_title: "📈 Conversion-Focused",
        why_us_item3_desc: "We design every element with one goal: to turn visitors into customers and measurably increase your sales.",
        why_us_item4_title: "🤝 Ongoing Support",
        why_us_item4_desc: "We don't disappear after launch. We offer support and advice so your site continues to grow with you.",
        
        services_carousel_title: "What We Offer",
        services_carousel_subtitle: "Solutions for a powerful and secure online presence.",
        service1_title: "Secure Pages (HTTPS)",
        service1_desc: "Protect your data and build trust with your visitors.",
        service2_title: "Responsive Design",
        service2_desc: "Perfect display on any device, from mobiles to desktops.",
        service3_title: "Basic SEO Optimization",
        service3_desc: "Be found on Google and attract more organic traffic.",
        service4_title: "Fast Loading Speed",
        service4_desc: "Optimize performance for an excellent user experience.",
        service5_title: "Modern & Attractive Design",
        service5_desc: "Captivate your audience with an intuitive and aesthetic look.",
        service6_title: "Social Media Integration",
        service6_desc: "Connect your networks and expand your digital reach.",
        service7_title: "Google Analytics Setup",
        service7_desc: "Measure your traffic and understand your visitors' behavior.",
        service8_title: "Google Maps Integration",
        service8_desc: "Help your customers find your physical location easily.",
        
        pricing_title: "Our Plans",
        pricing_subtitle: "Choose the perfect plan to get your business online. Special promotion!",
        pricing_discount: "-30%",
        
        countdown_title: "Offer ends in:",
        countdown_days: "Days",
        countdown_hours: "Hours",
        countdown_minutes: "Minutes",
        countdown_seconds: "Seconds",
        
        plan_popular: "Most Popular",
        plan_cta: "Get Started",
        plan_maintenance_mention: "<b>Optional:</b> Add $20/mo for 4 hours of monthly maintenance (updates, changes, etc.).",
        
        plan_basic_title: "Basic",
        plan_basic_price: `$180 <span class="text-gray-400 text-base">USD</span>`,
        plan_basic_price_before: "Before: $234 USD",
        plan_basic_feat1: "1 Landing Page",
        plan_basic_feat2: "3 Days Delivery",
        
        plan_standard_title: "Standard",
        plan_standard_price: `$350 <span class="text-gray-400 text-base">USD</span>`,
        plan_standard_price_before: "Before: $455 USD",
        plan_standard_feat1: "Up to 4 Pages",
        plan_standard_feat2: "5 Days Delivery",
        
        plan_premium_title: "Premium",
        plan_premium_price: `$500 <span class="text-gray-400 text-base">USD</span>`,
        plan_premium_price_before: "Before: $650 USD",
        plan_premium_feat1: "E-commerce Ready",
        plan_premium_feat2: "8 Days Delivery",
        
        plan_all_feat1: "Free Domain (1 Year)",
        plan_all_feat2: "Free Hosting (1 Year)",
        plan_all_feat3: "Responsive Design",
        plan_all_feat4: "Social Media Integration",
        plan_all_feat5: "Google Maps Integration",
        
        projects_title: "Recent Projects",
        projects_subtitle: "A showcase of our commitment to quality and design.",
        view_project_btn: "View Website",
        view_full_portfolio: "View Full Portfolio",
        project_cosmetics_title: "Hoffman Cosmetics",
        project_cosmetics_desc: "Luxury web design for a cosmetic dentistry clinic in Chicago, focusing on elegance and a premium user experience.",
        project_diving_title: "TechDiving",
        project_diving_desc: "Website for a commercial diving institute, showcasing its history, courses, and career opportunities for future professionals.",
        
        clients_title: "What Our Clients Say",
        clients_subtitle: "Trust and results are our best introduction.",
        t1_text: `"The new site is fast, modern, and we've seen a real increase in inquiries. Highly recommended!"`,
        t1_author: "- Hoffman Cosmetics",
        t2_text: `"Professionalism from start to finish. Our institute's website now reflects the quality of our training."`,
        t2_author: "- TechDiving",
        t3_text: `"The website they created for our shipyard is impressive. It perfectly communicates our heritage and capability."`,
        t3_author: "- Willis Custom Yachts",
        t4_text: `"Our website now looks incredibly professional. The process was simple, and the final result is flawless."`,
        t4_author: "- Genoa Design",
        t5_text: `"FM Tech gave us the online presence we were missing. A clean design that builds trust with our patients."`,
        t5_author: "- Oakland Smile Dental",
        t6_text: `"As a heavy machinery manufacturer, we needed a site that conveyed strength and reliability. They nailed it."`,
        t6_author: "- TBailey LLC",
        t7_text: `"Our new website finally shows the scale and heritage of our shipyard. Excellent work."`,
        t7_author: "- Scarano Boat Building",
        t8_text: `"The site works as a perfect catalog for our designs. Plan sales have increased."`,
        t8_author: "- Devlin Designing Boats",
        t9_text: `"The corporate website conveys the trust and scale we needed for our naval projects."`,
        t9_author: "- Chesapeake Shipbuilding",
        
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Find answers to common questions about our process.",
        faq1_q: "What do I need to provide to start my website?",
        faq1_a: "You need to provide your logo (if you have one), the text content for the pages, and any specific images you want to use. If you don't have images, we can use high-quality stock photos to match your brand.",
        faq2_q: "Is the domain and hosting really free?",
        faq2_a: "Yes, all our plans include professional web hosting and one domain name (like .com or .net) free for the first year. After the first year, standard renewal fees apply, which we will inform you about in advance.",
        faq3_q: "What does 'E-commerce Ready' mean?",
        faq3_a: "The Premium plan includes setting up a product showcase, integrating a shopping cart, and connecting a payment gateway like PayPal. This allows you to start selling products or services directly from your site.",
        faq4_q: "What if I need changes after the site is live?",
        faq4_a: "For minor changes, we're here to help. For frequent updates, we highly recommend our monthly maintenance add-on, which gives you up to 4 hours of professional support for any modifications you need.",
        faq5_q: "How does the payment process work?",
        faq5_a: "We accept payments in USD via PayPal directly on our site for your convenience. For payments in COP, you can select your plan and click 'Get Started' (when in Spanish) to contact us and arrange the payment through other methods like bank transfer.",
        
        blog_title: "Boost Your Business: Digital Insights",
        blog_subtitle: "Guides and articles to help you grow in the digital world.",
        blog_title_page: "Digital Insights & Marketing Tips",
        blog_subtitle_page: "Guides and articles to help you grow your business in the digital world. Here we explore topics on web design, AI, SEO, and more.",
        
        b1_title: "5 Reasons Your Business Needs a Website in 2025",
        b1_desc: "Discover how a professional website can increase your visibility, credibility, and sales.",
        b1_full_p1: "In the digital age, your website is much more than a business card; it's your main salesperson, your operations center, and the foundation of your credibility. If you're still unsure, here are 5 reasons why investing in a professional website is not an option, but a necessity.",
        b1_full_h1: "1. Credibility and Professionalism",
        b1_full_p2: "Modern consumers expect legitimate businesses to have an online presence. A well-designed and functional website positions you as an authority in your sector and generates instant trust, differentiating you from competitors who only rely on social media profiles.",
        b1_full_h2: "2. Your 24/7 Storefront",
        b1_full_p3: "Unlike your physical location, your website never closes. It allows potential customers to discover your products, services, and hours at any time and from anywhere, capturing sales opportunities even while you sleep.",
        b1_full_h3: "3. Total Control Over Your Brand",
        b1_full_p4: "On social media, you're subject to their algorithms and rules. On your own website, you have total control over the design, message, and user experience, ensuring your brand is presented exactly as you want.",
        
        b2_title: "Google Business Profile: Your Best Local Ally",
        b2_desc: "Learn how to set up and optimize your profile to appear first in local searches and on Google Maps.",
        b2_full_p1: "If you own a local business, Google Business Profile (formerly Google My Business) is the most powerful free tool at your disposal. Optimizing your profile can skyrocket your visibility in local searches and on Google Maps, attracting customers who are nearby and ready to buy.",
        b2_full_h1: "Key Steps to Optimize Your Profile",
        b2_full_p2: "Make sure to fill out every section: add your address, phone number, hours, and, very importantly, select the correct categories for your business. Upload high-quality photos of your premises, products, and team. Post regular updates, like offers or events. And most crucially: encourage your satisfied customers to leave reviews. Positive ratings are the most influential factor for new customers.",
        
        b3_title: "How to Use WhatsApp to Sell More",
        b3_desc: "Turn your WhatsApp into a sales machine with catalogs, quick replies, and exceptional customer service.",
        b3_full_p1: "WhatsApp has evolved from just a messaging app into a powerful sales tool. With WhatsApp Business, you can professionalize your communication and close sales more efficiently.",
        b3_full_h1: "Strategies That Work",
        b3_full_p2: "<strong>Create a Catalog:</strong> Showcase your products or services directly in the app. Each item can have its own photo, description, and price. <strong>Set Up Quick Replies:</strong> Save time by saving messages for frequently asked questions (hours, payment methods, etc.). <strong>Use Labels:</strong> Organize your chats to know which stage of the sales process each customer is in ('New customer', 'Payment pending', 'Shipped'). This organization will allow you to follow up effectively and not miss any opportunities.",
        
        b4_title: "AI in Web Design: The New Frontier",
        b4_desc: "Learn how Artificial Intelligence is personalizing user experiences and automating web development.",
        b4_full_p1: "Artificial Intelligence (AI) is no longer a futuristic concept; it's actively reshaping web design. From personalized user experiences to automated coding, AI is becoming an indispensable tool for creating smarter, more effective, and highly engaging websites.",
        b4_full_h1: "1. Hyper-Personalization at Scale",
        b4_full_p2: "AI algorithms can analyze user behavior in real-time. This allows a website to dynamically change its content, layout, and recommendations to match individual preferences. Imagine an e-commerce site that reorganizes its homepage to show products you're most likely to buy, or a blog that suggests articles based on your previous reading history. This level of personalization dramatically increases engagement and conversion rates.",
        b4_full_h2: "2. AI-Powered Chatbots (That Actually Help)",
        b4_full_p3: "Modern AI chatbots, powered by Natural Language Processing (NLP), are miles ahead of their predecessors. They can understand complex queries, provide instant 24/7 customer support, guide users through sales funnels, and even book appointments. This frees up human resources and provides immediate value to visitors.",
        b4_full_h3: "3. Automated Design and A/B Testing",
        b4_full_p4: "AI tools can generate thousands of design variations in seconds. They can test different button colors, headlines, and layouts simultaneously (a process known as multivariate testing) and learn which combination performs best. This data-driven approach removes guesswork from design, ensuring the final product is optimized for its goals.",
        
        b5_title: "Beyond Keywords: AI-Powered SEO",
        b5_desc: "Discover how AI is changing SEO, focusing on user intent and semantic search to rank higher.",
        b5_full_p1: "Search Engine Optimization (SEO) has evolved far beyond simply stuffing keywords into a page. Today, Google and other search engines use sophisticated AI models to understand the *intent* behind a search query. This means your content strategy needs to be smarter, focusing on quality, context, and user value.",
        b5_full_h1: "1. Understanding Semantic Search",
        b5_full_p2: "AI-driven search engines no longer just match keywords; they understand synonyms, context, and the relationship between topics. This is 'semantic search.' Instead of writing an article just for 'best running shoes,' you should create a comprehensive guide that also covers 'running shoe types,' 'how to choose shoes for pronation,' and 'best running shoe brands 2025.' This signals to AI that you are an authority on the *topic*, not just the keyword.",
        b5_full_h2: "2. The Rise of E-E-A-T",
        b5_full_p3: "Google's AI places huge importance on E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness. AI models scan your site for signals of this. Who wrote the content? Do they have credentials? Is the information accurate and supported by other authoritative sources? Building a strong author profile and creating well-researched, trustworthy content is now a primary SEO factor.",
        
        read_more: "Read more &rarr;",
        view_all_posts: "View All Posts",
        more_articles: "More Articles",
        read_full_article: "Read Full Article &rarr;",
        
        contact_title: "Ready to Take Your Business to the Next Level?",
        contact_subtitle: "Let's talk about your project. We offer a free consultation to understand your needs and propose the best digital solution.",
        contact_cta1: "Chat on WhatsApp",
        contact_cta2: "Send an Email",
        
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms & Conditions",
        footer_rights: "All rights reserved."
    },
    es: {
        nav_solutions: "Soluciones",
        nav_pricing: "Planes",
        nav_portfolio: "Portafolio",
        nav_clients: "Clientes",
        nav_faq: "FAQs",
        nav_blog: "Blog",
        nav_contact: "Contacto",
        nav_home: "Inicio",
        
        hero_title: "La Página Web que tu Negocio Necesita para <span class='brand-text'>Crecer</span>",
        hero_subtitle: "Diseñamos sitios web profesionales y efectivos para negocios, ayudándote a destacar y atraer más clientes.",
        hero_cta1: "Ver Nuestro Trabajo",
        hero_cta2: "Solicitar Asesoría Gratuita",
        
        why_us_title: "¿Por Qué Elegir FM Tech?",
        why_us_subtitle: "Tu éxito es nuestro principal objetivo.",
        why_us_item1_title: "💰 Precios Justos",
        why_us_item1_desc: "Ofrecemos soluciones de alta calidad sin costos ocultos. Una inversión inteligente con un retorno claro para tu negocio.",
        why_us_item2_title: "⚡ Velocidad y Rendimiento",
        why_us_item2_desc: "Sitios web optimizados para cargar rápidamente, mejorando la experiencia del usuario y tu posicionamiento en Google.",
        why_us_item3_title: "📈 Enfoque en Conversión",
        why_us_item3_desc: "Diseñamos cada elemento con un objetivo claro: convertir visitantes en clientes y aumentar tus ventas de manera medible.",
        why_us_item4_title: "🤝 Soporte Continuo",
        why_us_item4_desc: "No desaparecemos tras el lanzamiento. Ofrecemos soporte y asesoría para que tu sitio siga creciendo contigo.",
        
        services_carousel_title: "Lo Que Ofrecemos",
        services_carousel_subtitle: "Soluciones para una presencia online potente y segura.",
        service1_title: "Páginas Seguras (HTTPS)",
        service1_desc: "Protege tus datos y genera confianza con tus visitantes.",
        service2_title: "Diseño Adaptable (Responsive)",
        service2_desc: "Visualización perfecta en cualquier dispositivo, de móviles a ordenadores.",
        service3_title: "Optimización SEO Básica",
        service3_desc: "Haz que te encuentren en Google y atrae más tráfico orgánico.",
        service4_title: "Velocidad de Carga Rápida",
        service4_desc: "Optimiza el rendimiento para una excelente experiencia de usuario.",
        service5_title: "Diseño Moderno y Atractivo",
        service5_desc: "Causa impacto visual con un diseño intuitivo y estético.",
        service6_title: "Integración de Redes Sociales",
        service6_desc: "Conecta tus redes y amplía tu alcance digital.",
        service7_title: "Configuración de Google Analytics",
        service7_desc: "Mide tu tráfico y comprende el comportamiento de tus visitantes.",
        service8_title: "Integración de Google Maps",
        service8_desc: "Ayuda a tus clientes a encontrar tu ubicación física fácilmente.",
        
        pricing_title: "Nuestros Planes",
        pricing_subtitle: "Elige el plan perfecto para lanzar tu negocio online. ¡Promoción especial!",
        pricing_discount: "-30%",
        
        countdown_title: "La oferta termina en:",
        countdown_days: "Días",
        countdown_hours: "Horas",
        countdown_minutes: "Minutos",
        countdown_seconds: "Segundos",
        
        plan_popular: "Más Popular",
        plan_cta: "Comenzar",
        plan_maintenance_mention: "<b>Opcional:</b> Añade $20/mes por 4 horas de mantenimiento mensual (actualizaciones, cambios, etc.).",
        
        plan_basic_title: "Básico",
        plan_basic_price: `$180 <span class="text-gray-400 text-base">USD</span>`,
        plan_basic_price_before: "Antes: $234 USD",
        plan_basic_feat1: "1 Página de Aterrizaje",
        plan_basic_feat2: "Entrega en 3 Días",
        
        plan_standard_title: "Estándar",
        plan_standard_price: `$350 <span class="text-gray-400 text-base">USD</span>`,
        plan_standard_price_before: "Antes: $455 USD",
        plan_standard_feat1: "Hasta 4 Páginas",
        plan_standard_feat2: "Entrega en 5 Días",
        
        plan_premium_title: "Premium",
        plan_premium_price: `$500 <span class="text-gray-400 text-base">USD</span>`,
        plan_premium_price_before: "Antes: $650 USD",
        plan_premium_feat1: "E-commerce Listo",
        plan_premium_feat2: "Entrega en 8 Días",
        
        plan_all_feat1: "Dominio Gratis (1 Año)",
        plan_all_feat2: "Hosting Gratis (1 Año)",
        plan_all_feat3: "Diseño Responsive",
        plan_all_feat4: "Integración Redes Sociales",
        plan_all_feat5: "Integración Google Maps",
        
        projects_title: "Proyectos Recientes",
        projects_subtitle: "Una muestra de nuestro compromiso con la calidad y el diseño.",
        view_project_btn: "Ver Sitio Web",
        view_full_portfolio: "Ver Portafolio Completo",
        project_cosmetics_title: "Hoffman Cosmetics",
        project_cosmetics_desc: "Diseño web de lujo para una clínica de odontología cosmética en Chicago, enfocado en elegancia y una experiencia de usuario premium.",
        project_diving_title: "TechDiving",
        project_diving_desc: "Sitio web para un instituto de buceo comercial, mostrando su historia, cursos y oportunidades de carrera para futuros profesionales.",
        
        clients_title: "Lo Que Dicen Nuestros Clientes",
        clients_subtitle: "La confianza y los resultados son nuestra mejor presentación.",
        t1_text: `"El nuevo sitio es rápido, moderno, y hemos visto un aumento real en las consultas. ¡Muy recomendado!"`,
        t1_author: "- Hoffman Cosmetics",
        t2_text: `"Profesionalismo de principio a fin. El sitio web de nuestro instituto ahora refleja la calidad de nuestra formación."`,
        t2_author: "- TechDiving",
        t3_text: `"El sitio web que crearon para nuestro astillero es impresionante. Comunica perfectamente nuestra herencia y capacidad."`,
        t3_author: "- Willis Custom Yachts",
        t4_text: `"Nuestro sitio web ahora se ve increíblemente profesional. El proceso fue simple y el resultado final es impecable."`,
        t4_author: "- Genoa Design",
        t5_text: `"FM Tech nos dio la presencia online que nos faltaba. Un diseño limpio que genera confianza con nuestros pacientes."`,
        t5_author: "- Oakland Smile Dental",
        t6_text: `"Como fabricante de maquinaria pesada, necesitábamos un sitio que transmitiera fuerza y confiabilidad. Lo clavaron."`,
        t6_author: "- TBailey LLC",
        t7_text: `"Nuestro nuevo sitio web finalmente muestra la escala y el legado de nuestro astillero. Excelente trabajo."`,
        t7_author: "- Scarano Boat Building",
        t8_text: `"El sitio funciona como un catálogo perfecto para nuestros diseños. Las ventas de planos han aumentado."`,
        t8_author: "- Devlin Designing Boats",
        t9_text: `"El sitio corporativo transmite la confianza y escala que necesitábamos para nuestros proyectos navales."`,
        t9_author: "- Chesapeake Shipbuilding",
        
        faq_title: "Preguntas Frecuentes",
        faq_subtitle: "Encuentra respuestas a preguntas comunes sobre nuestro proceso.",
        faq1_q: "¿Qué necesito proporcionar para iniciar mi sitio web?",
        faq1_a: "Necesitas proporcionar tu logo (si tienes uno), el contenido de texto para las páginas, y cualquier imagen específica que quieras usar. Si no tienes imágenes, podemos usar fotos de stock de alta calidad que coincidan con tu marca.",
        faq2_q: "¿El dominio y hosting son realmente gratis?",
        faq2_a: "Sí, todos nuestros planes incluyen hosting web profesional y un nombre de dominio (como .com o .net) gratis por el primer año. Después del primer año, se aplican tarifas de renovación estándar, las cuales te informaremos con anticipación.",
        faq3_q: "¿Qué significa 'E-commerce Listo'?",
        faq3_a: "El plan Premium incluye la configuración de una vitrina de productos, la integración de un carrito de compras y la conexión de una pasarela de pago como PayPal. Esto te permite comenzar a vender productos o servicios directamente desde tu sitio.",
        faq4_q: "¿Qué pasa si necesito cambios después de que el sitio esté en vivo?",
        faq4_a: "Para cambios menores, estamos aquí para ayudar. Para actualizaciones frecuentes, recomendamos encarecidamente nuestro complemento de mantenimiento mensual, que te da hasta 4 horas de soporte profesional para cualquier modificación que necesites.",
        faq5_q: "¿Cómo funciona el proceso de pago?",
        faq5_a: "Aceptamos pagos en USD a través de PayPal directamente en nuestro sitio para tu conveniencia. Para pagos en COP, puedes seleccionar tu plan y hacer clic en 'Comenzar' para contactarnos y organizar el pago a través de otros métodos como transferencia bancaria.",
        
        blog_title: "Impulsa tu Negocio: Ideas Digitales",
        blog_subtitle: "Guías y artículos para ayudarte a crecer en el mundo digital.",
        blog_title_page: "Ideas Digitales y Consejos de Marketing",
        blog_subtitle_page: "Guías y artículos para ayudarte a crecer tu negocio en el mundo digital. Aquí exploramos temas de diseño web, IA, SEO y más.",
        
        b1_title: "5 Razones por las que tu Negocio Necesita una Web en 2025",
        b1_desc: "Descubre cómo una página web profesional puede aumentar tu visibilidad, credibilidad y ventas.",
        b1_full_p1: "En la era digital, tu página web es mucho más que una tarjeta de presentación; es tu principal vendedor, tu centro de operaciones y la base de tu credibilidad. Si aún dudas, aquí te damos 5 razones por las que invertir en una web profesional no es una opción, sino una necesidad.",
        b1_full_h1: "1. Credibilidad y Profesionalismo",
        b1_full_p2: "Los consumidores modernos esperan que los negocios legítimos tengan una presencia online. Un sitio web bien diseñado y funcional te posiciona como una autoridad en tu sector y genera confianza instantánea, diferenciándote de la competencia que solo depende de perfiles en redes sociales.",
        b1_full_h2: "2. Tu Vitrina Abierta 24/7",
        b1_full_p3: "A diferencia de tu local físico, tu sitio web nunca cierra. Permite que clientes potenciales descubran tus productos, servicios y horarios en cualquier momento y desde cualquier lugar, capturando oportunidades de venta incluso mientras duermes.",
        b1_full_h3: "3. Control Total sobre tu Marca",
        b1_full_p4: "En las redes sociales, estás sujeto a sus algoritmos y reglas. En tu propio sitio web, tú tienes el control total del diseño, el mensaje y la experiencia del usuario, asegurando que tu marca se presente exactamente como tú quieres.",
        
        b2_title: "Google Mi Negocio: Tu Mejor Aliado Local",
        b2_desc: "Aprende a configurar y optimizar tu perfil para aparecer primero en las búsquedas locales y en Google Maps.",
        b2_full_p1: "Si tienes un negocio local, Google Business Profile (antes Google Mi Negocio) es la herramienta gratuita más poderosa a tu disposición. Optimizar tu perfil puede disparar tu visibilidad en búsquedas locales y en Google Maps, atrayendo clientes que están cerca y listos para comprar.",
        b2_full_h1: "Pasos Clave para Optimizar tu Perfil",
        b2_full_p2: "Asegúrate de completar cada sección: añade tu dirección, teléfono, horarios y, muy importante, selecciona las categorías correctas para tu negocio. Sube fotos de alta calidad de tu local, productos y equipo. Publica actualizaciones regularmente, como ofertas o eventos. Y lo más crucial: incentiva a tus clientes satisfechos a dejar reseñas. Las valoraciones positivas son el factor más influyente para nuevos clientes.",
        
        b3_title: "Cómo Usar WhatsApp para Vender Más",
        b3_desc: "Transforma tu WhatsApp en una máquina de ventas con catálogos, respuestas rápidas y un servicio al cliente excepcional.",
        b3_full_p1: "WhatsApp ha dejado de ser solo una app de mensajería para convertirse en una potente herramienta de ventas. Con WhatsApp Business, puedes profesionalizar tu comunicación y cerrar ventas de forma más eficiente.",
        b3_full_h1: "Estrategias que Funcionan",
        b3_full_p2: "<strong>Crea un Catálogo:</strong> Muestra tus productos o servicios directamente en la app. Cada artículo puede tener su foto, descripción y precio. <strong>Configura Respuestas Rápidas:</strong> Ahorra tiempo guardando mensajes para las preguntas más frecuentes (horarios, métodos de pago, etc.). <strong>Usa las Etiquetas:</strong> Organiza tus chats para saber en qué etapa del proceso de venta se encuentra cada cliente ('Nuevo cliente', 'Pago pendiente', 'Enviado'). Esta organización te permitirá hacer un seguimiento efectivo y no perder ninguna oportunidad.",
        
        b4_title: "IA en Diseño Web: La Nueva Frontera",
        b4_desc: "Aprende cómo la Inteligencia Artificial está personalizando experiencias de usuario y automatizando el desarrollo web.",
        b4_full_p1: "La Inteligencia Artificial (IA) ya no es un concepto futurista; está remodelando activamente el diseño web. Desde experiencias de usuario personalizadas hasta codificación automatizada, la IA se está convirtiendo en una herramienta indispensable para crear sitios web más inteligentes, efectivos y atractivos.",
        b4_full_h1: "1. Hiper-Personalización a Escala",
        b4_full_p2: "Los algoritmos de IA pueden analizar el comportamiento del usuario en tiempo real. Esto permite que un sitio web cambie dinámicamente su contenido, diseño y recomendaciones para adaptarse a las preferencias individuales. Imagina un sitio de comercio electrónico que reorganiza su página de inicio para mostrar los productos que es más probable que compres, o un blog que sugiere artículos basados en tu historial de lectura. Este nivel de personalización aumenta drásticamente la participación y las tasas de conversión.",
        b4_full_h2: "2. Chatbots con IA (Que Realmente Ayudan)",
        b4_full_p3: "Los chatbots de IA modernos, impulsados por Procesamiento de Lenguaje Natural (NLP), están a años luz de sus predecesores. Pueden entender consultas complejas, brindar soporte al cliente instantáneo 24/7, guiar a los usuarios a través de embudos de venta e incluso reservar citas. Esto libera recursos humanos y proporciona valor inmediato a los visitantes.",
        b4_full_h3: "3. Diseño Automatizado y Pruebas A/B",
        b4_full_p4: "Las herramientas de IA pueden generar miles de variaciones de diseño en segundos. Pueden probar diferentes colores de botones, titulares y diseños simultáneamente (un proceso conocido como prueba multivariante) y aprender qué combinación funciona mejor. Este enfoque basado en datos elimina las conjeturas del diseño, asegurando que el producto final esté optimizado para sus objetivos.",
        
        b5_title: "Más Allá de las Keywords: SEO con IA",
        b5_desc: "Descubre cómo la IA está cambiando el SEO, enfocándose en la intención del usuario y la búsqueda semántica.",
        b5_full_p1: "La Optimización de Motores de Búsqueda (SEO) ha evolucionado mucho más allá de simplemente rellenar una página con palabras clave. Hoy, Google y otros motores de búsqueda usan sofisticados modelos de IA para entender la *intención* detrás de una consulta de búsqueda. Esto significa que tu estrategia de contenido debe ser más inteligente, centrándose en la calidad, el contexto y el valor para el usuario.",
        b5_full_h1: "1. Entendiendo la Búsqueda Semántica",
        b5_full_p2: "Los motores de búsqueda impulsados por IA ya no solo coinciden con palabras clave; entienden sinónimos, contexto y la relación entre temas. Esto es la 'búsqueda semántica'. En lugar de escribir un artículo solo para 'mejores zapatillas para correr', deberías crear una guía completa que también cubra 'tipos de zapatillas para correr', 'cómo elegir zapatillas para pronación' y 'mejores marcas de zapatillas 2025'. Esto le indica a la IA que eres una autoridad en el *tema*, no solo en la palabra clave.",
        b5_full_h2: "2. El Auge de E-E-A-T",
        b5_full_p3: "La IA de Google da una importancia enorme a E-E-A-T: Experiencia, Expertise (Conocimiento), Autoridad y Confianza (Trustworthiness). Los modelos de IA escanean tu sitio en busca de señales de esto. ¿Quién escribió el contenido? ¿Tienen credenciales? ¿Es la información precisa y está respaldada por otras fuentes autorizadas? Construir un perfil de autor sólido y crear contenido bien investigado y confiable es ahora un factor de SEO principal.",
        
        read_more: "Leer más &rarr;",
        view_all_posts: "Ver Todas las Publicaciones",
        more_articles: "Más Artículos",
        read_full_article: "Leer Artículo Completo &rarr;",
        
        contact_title: "¿Listo para Llevar tu Negocio al Siguiente Nivel?",
        contact_subtitle: "Hablemos de tu proyecto. Ofrecemos una consultoría gratuita para entender tus necesidades y proponer la mejor solución digital.",
        contact_cta1: "Chatear por WhatsApp",
        contact_cta2: "Enviar un Correo",
        
        footer_privacy: "Política de Privacidad",
        footer_terms: "Términos y Condiciones",
        footer_rights: "Todos los derechos reservados."
    }
};

// ===== Language Management =====
function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-switcher a').forEach(a => a.classList.remove('active'));
    const langElement = document.querySelector(`#lang-${lang}`);
    if (langElement) langElement.classList.add('active');
    const langMobileElement = document.querySelector(`#lang-${lang}-mobile`);
    if (langMobileElement) langMobileElement.classList.add('active');
}

// ===== Countdown Timer =====
function startCountdown() {
    const countdownDaysEl = document.getElementById('countdown-days');
    const countdownHoursEl = document.getElementById('countdown-hours');
    const countdownMinutesEl = document.getElementById('countdown-minutes');
    const countdownSecondsEl = document.getElementById('countdown-seconds');

    if (!countdownDaysEl) return;

    let targetDate = new Date();
    let targetDay = 15;
    
    // If today is after the 15th, target is the 15th of next month
    if (targetDate.getDate() > targetDay) {
        targetDate.setMonth(targetDate.getMonth() + 1);
    }
    targetDate.setDate(targetDay);
    targetDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDaysEl.textContent = String(days).padStart(2, '0');
        countdownHoursEl.textContent = String(hours).padStart(2, '0');
        countdownMinutesEl.textContent = String(minutes).padStart(2, '0');
        countdownSecondsEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ===== PayPal Integration =====
function initPayPalButtons() {
    if (PAYPAL_CLIENT_ID === "YOUR_CLIENT_ID_GOES_HERE") {
        console.warn("PayPal Client ID is not set. Payment buttons will not render.");
        return;
    }

    const plans = [
        { id: 'basic', basePrice: '180.00', name: 'Basic Plan' },
        { id: 'standard', basePrice: '350.00', name: 'Standard Plan' },
        { id: 'premium', basePrice: '500.00', name: 'Premium Plan' }
    ];

    plans.forEach(plan => {
        const container = document.getElementById(`paypal-button-${plan.id}-container`);
        if (!container || typeof paypal === 'undefined') return;

        paypal.Buttons({
            style: {
                layout: 'vertical',
                color: 'blue',
                shape: 'rect',
                label: 'pay'
            },
            createOrder: function(data, actions) {
                const description = `FM Tech - ${plan.name} (One-time Payment)`;
                return actions.order.create({
                    purchase_units: [{
                        description: description,
                        amount: {
                            value: plan.basePrice,
                            currency_code: 'USD'
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    showPaymentSuccessModal(details.payer.name.given_name);
                });
            },
            onError: function(err) {
                console.error('PayPal Error:', err);
                showPaymentErrorModal();
            }
        }).render(`#paypal-button-${plan.id}-container`);
    });
}

// ===== Payment Modals =====
function showPaymentSuccessModal(payerName) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 100; display: flex; align-items: center; justify-content: center;">
            <div style="background: #161B22; color: #C9D1D9; padding: 2rem; border-radius: 0.5rem; text-align: center; border: 1px solid #30363D;">
                <h3 style="font-size: 1.5rem; font-weight: 600; color: #58A6FF;">Payment Successful!</h3>
                <p style="margin-top: 1rem;">Thank you, ${payerName}. We have received your payment.</p>
                <p style="margin-top: 0.5rem;">We will contact you shortly to begin your project.</p>
                <button id="close-modal-btn" style="background-color: #2563EB; color: white; padding: 0.5rem 1.5rem; border-radius: 0.5rem; margin-top: 1.5rem; cursor: pointer;">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('close-modal-btn').onclick = () => document.body.removeChild(modal);
}

function showPaymentErrorModal() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 100; display: flex; align-items: center; justify-content: center;">
            <div style="background: #161B22; color: #C9D1D9; padding: 2rem; border-radius: 0.5rem; text-align: center; border: 1px solid #30363D;">
                <h3 style="font-size: 1.5rem; font-weight: 600; color: #F87171;">Payment Error</h3>
                <p style="margin-top: 1rem;">There was an issue processing your payment.</p>
                <p style="margin-top: 0.5rem;">Please try again or contact us for assistance.</p>
                <button id="close-modal-btn" style="background-color: #2563EB; color: white; padding: 0.5rem 1.5rem; border-radius: 0.5rem; margin-top: 1.5rem; cursor: pointer;">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('close-modal-btn').onclick = () => document.body.removeChild(modal);
}

// ===== 3D Card Effect =====
function init3DEffect() {
    const cards = document.querySelectorAll('.card-container');

    cards.forEach(card => {
        const cardBody = card.querySelector('.card-body');
        if (!cardBody) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const { width, height } = rect;
            const rotateX = (y - height / 2) / (height / 2) * -5;
            const rotateY = (x - width / 2) / (width / 2) * 10;

            cardBody.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            cardBody.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
}

// ===== Carousel Initialization =====
function initCarousels() {
    // Testimonial Carousel
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (testimonialTrack) {
        const numTestimonialSlides = testimonialTrack.children.length / 2;
        testimonialTrack.style.setProperty('--num-slides', numTestimonialSlides);
        testimonialTrack.style.setProperty('--animation-duration', '40s');
    }

    // Services Carousel
    const servicesTrack = document.querySelector('.services-track');
    if (servicesTrack) {
        const numServiceSlides = servicesTrack.children.length / 2;
        servicesTrack.style.setProperty('--num-slides', numServiceSlides);
        servicesTrack.style.setProperty('--animation-duration', '30s');
    }
}

// ===== Scroll Animations with Intersection Observer =====
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        document.querySelectorAll('.mobile-menu-link, #menu-btn').forEach(el => {
            el.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        });
    }
}

// ===== Smooth Scroll for Blog Links =====
function initSmoothScroll() {
    document.querySelectorAll('a.read-more').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== Language Switcher Event Listeners =====
function initLanguageSwitcher() {
    ['lang-en', 'lang-es', 'lang-en-mobile', 'lang-es-mobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                setLanguage(id.includes('en') ? 'en' : 'es');
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.add('hidden');
            });
        }
    });
}

// ===== Main Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    // Set language from localStorage or default to English
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
    
    // Initialize all features
    startCountdown();
    initPayPalButtons();
    init3DEffect();
    initCarousels();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    initLanguageSwitcher();
});
