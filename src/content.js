// Real content pulled from https://macbytesecurity.com/ (home page, /about-us, /services)
// including the JS-rendered "What Our Clients Are Saying" widget on the homepage.
// Only wording that exists on the live site is used here — design/layout is what changed.
// Two verbatim client quotes had obvious typos ("sevice" -> "service") and a grammar slip
// ("I are highly recommended" -> "I highly recommend them") corrected for publication;
// no substance was changed.

export const brand = {
  name: "Macbyte Security",
}

export const nav = {
  links: [
    { label: "Solutions", href: "#services" },
    { label: "Services", href: "/services", route: true },
    { label: "Our Expertise", href: "#about" },
    { label: "About Us", href: "/about-us", route: true },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Book a Consultation",
  ctaHref: "#booking",
}

export const hero = {
  eyebrow: "Canadian Cybersecurity & Managed IT",
  headline: "Cybersecurity Solutions for Your Business",
  subheadline: "CyberSecurity consultation tailored to your business needs.",
  primaryCta: "Get Started",
  secondaryCta: "Find out more",
}

export const servicesIntro = {
  eyebrow: "What We Do",
  headline: "What can we do for you?",
  body:
    "We provide expert Cybersecurity solutions for your businesses including Endpoint, Network and Cloud protection. At MacBytesSecurity, we provide expert cybersecurity solutions to keep Canadian businesses safe.",
  closing: "Cyber threats are always evolving; stay ahead with MacBytes Security.",
  learnMore: {
    text: "Explore our full consulting services",
    href: "/services",
  },
}

export const services = [
  {
    title: "Email Protection & Gateway Security",
    description: "Blocks phishing scams and prevents harmful emails from reaching you.",
    icon: "MailWarning",
  },
  {
    title: "Cloud & Network Security",
    description: "Strengthens your infrastructure to stop malicious activities.",
    icon: "CloudCog",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description:
      "Identifies and fixes security weaknesses before attackers can exploit them, ensuring your cybersecurity solutions are robust.",
    icon: "ShieldAlert",
  },
  {
    title: "Endpoint Protection",
    description: "Secures all devices, from computers to phones, against cyber threats.",
    icon: "Laptop",
  },
  {
    title: "Managed IT Services",
    description: "Expert guidance to optimize and protect your business's technology.",
    icon: "Settings2",
  },
  {
    title: "Compliance & Governance",
    description: "Ensures organizations meet industry security standards and regulatory frameworks.",
    icon: "ClipboardCheck",
  },
  {
    title: "End-to-End Security",
    description: "Complete protection to keep your business safe at every level.",
    icon: "Layers",
  },
]

// Dedicated Services page — sourced from macbytesecurity.com/services.
export const servicesPage = {
  eyebrow: "In a Nutshell",
  headline: "Comprehensive IT Solutions for Your Business",
  intro:
    "At MacbyteSecurity, we provide a suite of comprehensive IT services including tailored Cybersecurity services to help your business succeed. Our team of experienced professionals can assist you with everything from Network/Cloud infrastructure design to Compliance & Standardization ensuring business have the right approach to succeed in today's market.",
  approach:
    "We take a personalized approach to every project, working closely with our clients to develop solutions that meet their specific needs.",
  cta: {
    eyebrow: "Ready to Get Started?",
    body:
      "Contact us today to schedule a consultation and find out how our managed solutions can benefit your business.",
    label: "Schedule a Consultation",
    href: "/#booking",
  },
  sectionTitle: "Consulting Services by Macbyte Security",
  consulting: [
    {
      title: "IT Strategy Consulting",
      summary:
        "We collaborate with our clients to create a comprehensive IT strategy that aligns with their business goals and objectives.",
      detail:
        "Our team of experts will assess your current IT infrastructure, conduct a vulnerability assessment to identify gaps and opportunities, and provide tailored recommendations for improvement.",
      icon: "Compass",
    },
    {
      title: "Cloud Computing Services",
      summary:
        "We help our clients leverage the power of cloud computing to improve their operational efficiency, reduce costs, and enhance their ability to innovate through advanced cybersecurity solutions.",
      detail:
        "Our team has extensive experience in designing and implementing cloud solutions within Azure, AWS and Nutanix.",
      icon: "CloudCog",
    },
    {
      title: "Cybersecurity Consulting",
      summary:
        "We provide a comprehensive range of cybersecurity solutions to help our clients protect their critical assets and data from cyber threats.",
      detail:
        "Our team of experts specializes in XDR, NDR and MDR all within a centralized data system so that you can stay ahead of the threat.",
      icon: "ShieldCheck",
    },
    {
      title: "Data Analytics Consulting",
      summary:
        "We help our clients leverage the power of data to drive business growth and innovation while ensuring robust cybersecurity solutions are in place.",
      detail:
        "Our team of experts, with extensive experience in data analytics, data warehousing, and business intelligence, are happy to digest business data to facilitate real growth.",
      icon: "BarChart3",
    },
    {
      title: "Managed IT Services",
      summary:
        "We provide a range of managed IT services, including infrastructural support to help our clients improve their IT operations and reduce costs.",
      detail:
        "Our team of experts can handle everything from day-to-day support to strategic planning and implementation, ensuring smooth business operations to drive profitability.",
      icon: "Settings2",
    },
    {
      title: "Digital Transformation Consulting",
      summary:
        "We help organizations modernize their IT ecosystems, enhance operational efficiency, and strengthen their cybersecurity posture while embracing emerging technologies.",
      detail:
        "In today's fast-paced digital economy, success depends on agility, data intelligence, and secure innovation. Our consultants partner with your leadership to align technology initiatives with business objectives, streamline workflows, and integrate modern solutions.",
      icon: "Sparkles",
    },
  ],
  collaborationsTitle: "Business Collaborations",
  collaborations: [
    {
      title: "Strategic Technology Partnerships",
      icon: "Handshake",
      points: [
        "Partnering with top-tier vendors and solution providers to deliver reliable, secure, and scalable IT ecosystems.",
        "Leveraging industry-leading platforms such as Microsoft, Sophos, and VMware to maximize performance and protection.",
        "Providing end-to-end solution architecture — from procurement to deployment and lifecycle management.",
      ],
    },
    {
      title: "Co-Managed IT Services",
      icon: "Users2",
      points: [
        "Collaborating with internal IT teams to strengthen operations and improve service delivery.",
        "Reducing operational costs by optimizing resources while maintaining high service reliability.",
        "Enabling your team to focus on strategic initiatives while Macbyte Security handles the heavy technical lifting.",
      ],
    },
    {
      title: "Training & Knowledge Exchange",
      icon: "GraduationCap",
      points: [
        "Delivering tailored cybersecurity and IT workshops for technical and non-technical staff.",
        "Empowering teams through real-world simulations, awareness programs, and certification training.",
        "Promoting continuous skill development in areas like cloud security, compliance, and incident response.",
      ],
    },
  ],
}

export const visuals = {
  eyebrow: "Behind the Protection",
  headline: "Enterprise-grade infrastructure, monitored around the clock",
  items: [
    {
      image: "server-room",
      caption: "Resilient infrastructure",
      body: "Secure, redundant systems built to keep your data available and protected.",
    },
    {
      image: "security-operations",
      caption: "Round-the-clock monitoring",
      body: "Analysts watching for threats so issues get caught before they become incidents.",
    },
  ],
}

export const about = {
  eyebrow: "About Macbyte Security",
  headline: "We empower and help businesses build trust",
  mission:
    "At Macbyte Security, we empower and help businesses build trust, stay compliant, and operate confidently in a digital-first world.",
  expertise: [
    "Cybersecurity Compliance & Governance",
    "Managed Security Operations",
    "Network & Infrastructure Security",
    "Penetration Testing & Vulnerability Management",
    "IT & Infrastructure Support",
  ],
  approach:
    "We believe that every business is unique, which is why a customized approach to IT consulting is essential. We take the time to understand our clients' specific needs and challenges, allowing us to develop tailored solutions, including advanced cybersecurity solutions, effective endpoint protection, and comprehensive vulnerability assessments that meet their unique requirements.",
  results:
    "We are committed to delivering results for our clients through advanced cybersecurity solutions. Whether it's optimizing their IT infrastructure, enhancing their cybersecurity posture with robust endpoint protection, or conducting a thorough vulnerability assessment to streamline their operations, we work tirelessly to ensure that our clients achieve their goals and see measurable results.",
}

export const trustPillars = [
  {
    title: "Proactive, not reactive",
    description: "We don't just defend against threats — we anticipate them and neutralize them before they land.",
  },
  {
    title: "Customized, not templated",
    description: "Every business is unique, which is why a customized approach to IT consulting is essential.",
  },
  {
    title: "Built on real-world experience",
    description: "Principles of proactive defense and strategic precision, carried over from military and law-enforcement discipline.",
  },
]

// Homepage teaser — the fuller story (including leadership) lives on the dedicated About Us page.
export const trust = {
  eyebrow: "Why Businesses Trust Macbyte",
  headline: "Proactive defense, unwavering commitment, strategic precision",
  body:
    "Macbyte Security was founded on protecting Canadians and their businesses from cyber threats by combining IT engineering, network security, and ethical hacking expertise.",
  pillars: trustPillars,
  learnMore: {
    text: "Meet the team behind Macbyte",
    href: "/about-us",
  },
}

// Dedicated About Us page — sourced from macbytesecurity.com/about-us.
export const aboutPage = {
  eyebrow: "About Us",
  headline: "Top Ethical Hacking Services for Your Business",
  intro:
    "Macbyte Security was founded on protecting Canadians and their businesses from cyber threats by combining IT engineering, network security, and ethical hacking expertise.",
  philosophy:
    "Cybersecurity is about more than just technology—it's about trust, strategy, and staying ahead of the enemy. We don't just defend against threats—we anticipate them, neutralize them, and ensure our clients stay secure.",
  clientBase:
    "Macbyte Security serves Canadian businesses ranging from small enterprises to large corporations, offering customized solutions for data breach prevention, information protection, and network architecture design.",
  pillars: trustPillars,
  leader: {
    name: "James Hayworth",
    title: "Chief Executive Officer",
    bio:
      "James Hayworth's background includes military service and law enforcement, which he credits as foundational to the company's principles of proactive defense, unwavering commitment, and strategic precision.",
  },
}

export const testimonials = {
  eyebrow: "Testimonials",
  headline: "What Our Clients Are Saying",
  reviews: [
    {
      quote:
        "Macbytes Security are a group of competent individuals that understood my needs from the very first day. They were able to provide such excellent service in a short amount of time.",
      author: "Adeola Shobande",
      title: "CEO",
      company: "Bleu Fairy",
      date: "2024-02-13",
    },
    {
      quote:
        "Macbytes was able to deliver as promised and remain a trusted adviser till this day. I highly recommend them.",
      author: "James H.",
      company: "Hayworth Leather",
      date: "2024-03-20",
    },
  ],
}

export const booking = {
  eyebrow: "Book Online",
  headline: "Schedule Your Free Consultation",
  body:
    "Contact us today for a free consultation and take the first step towards stronger protection.",
  cta: "Confirm Booking",
}

export const contact = {
  eyebrow: "Get In Touch",
  headline: "Better yet, see us in person!",
  body:
    "We love our customers and invite you to visit and discuss with our teams on how to drive Cybersecurity needs into actualization.",
  email: "info@macbytesecurity.com",
  supportEmail: "support@macbytesecurity.com",
  hours: "09:00 a.m. – 05:00 p.m.",
  hoursNote: "Open today",
  formDisclaimer:
    "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.",
}

export const newsletter = {
  body: "Sign up to hear from us.",
  cta: "Sign up",
}

export const footer = {
  copyright: "Copyright © 2026 MacbyteSecurity - All Rights Reserved.",
  links: [
    { label: "Home", href: "/", route: true },
    { label: "Services", href: "/services", route: true },
    { label: "About Us", href: "/about-us", route: true },
  ],
}
