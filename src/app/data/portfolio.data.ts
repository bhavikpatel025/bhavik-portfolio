import {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from '../core/models/portfolio.models';

export const PROFILE = {
  name: 'Bhavik Patel',
  title: '.NET Full Stack Developer',
  location: 'Ahmedabad, Gujarat, India',
  email: 'patelbhavik.0017@gmail.com',
  phone: '+91 93271 99315',
  summary:
    'Results-driven .NET Full Stack Developer building scalable enterprise applications with ASP.NET Core Web API, Angular, SQL Server, and Azure.',
  about: [
    "I'm a .NET Full Stack Developer working across the entire stack — from Clean Architecture backends in ASP.NET Core to reactive, signal-driven Angular frontends.",
    'Most of my work centers on structuring applications the way they scale: clear separation between domain, application, and infrastructure layers, JWT-secured APIs, and typed, maintainable Angular components on the other end.',
    "Recently I've been going deeper into practical AI integration — using Groq's vision and language models alongside OCR and Whisper to pull structured data out of real-world documents and voice input, inside a hospital EMR system I built end-to-end.",
    "I enjoy the full loop: designing the data model, building the API, and then making the interface for it feel fast and considered. I'm currently a .NET Full Stack Developer at Ncoresoft Technology.",
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/bhavikpatel025', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bhavik-patel-217a402a5',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:patelbhavik.0017@gmail.com', icon: 'email' },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      'ASP.NET Core Web API',
      'SignalR',
      'C# / .NET Core',
      'AutoMapper',
      'Clean Architecture',
      'RESTful APIs',
      'JWT Authentication',
      '.NET Core MVC',      
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'Angular',
      'TypeScript',
      'Angular Signals',
      'RxJS',
      'Angular Material',
      'Bootstrap 5 / PrimeNG',
      'HTML5 / SCSS',
      'jQuery / AJAX',
    ],
  },
  {
    category: 'Database & Cloud',
    skills: ['SQL Server', 'Entity Framework Core', 'LINQ', 'Microsoft Azure', 'Cloudinary'],
  },
  {
    category: 'AI & Real-time',
    skills: ['Groq AI (Llama 3)', 'Whisper AI', 'Tesseract OCR', 'WebRTC'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git / GitHub', 'Postman', 'Swagger / OpenAPI', 'Software Testing'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: '.NET Full Stack Developer',
    company: 'Ncoresoft Technology',
    startDate: 'Sep 2025',
    endDate: 'Present',
    isCurrent: true,
    points: [
      'Design and develop full-stack web applications using ASP.NET Core Web API (.NET 8) and Angular 19, following Clean Architecture and Repository Pattern principles.',
      'Implement JWT-based authentication, role-based authorization, and Angular route guards to secure applications end-to-end.',
      'Build responsive Angular frontends with Angular Material, Bootstrap 5, and RxJS; integrate SignalR for real-time features including live notifications and viewer counts.',
      'Optimize SQL Server performance through EF Core migrations, efficient CRUD operations, and query tuning; use Git, Postman, and Swagger across all projects.',
      'Architected an AI-powered Electronic Medical Record (EMR) system, integrating Groq Vision AI and Tesseract OCR to automatically extract medical data and generate adaptive clinical summaries.',
    ],
    technologies: ['.NET Core', 'Angular', 'SignalR', 'SQL Server', 'AI Integrations', 'Tesseract OCR'],
  },
  {
    role: '.NET Developer Intern',
    company: 'Atharva IT Services Pvt. Ltd',
    location: 'Ahmedabad',
    startDate: 'Mar 2025',
    endDate: 'Aug 2025',
    isCurrent: false,
    points: [
      'Developed a web-based Student Management System using ASP.NET Core MVC and Web API with server-side searching, sorting, filtering, and CRUD operations using SQL Server.',
      'Integrated jQuery and AJAX for seamless UI interactions; enhanced responsiveness using Bootstrap 5.',
    ],
    technologies: ['ASP.NET Core MVC', 'Web API', 'SQL Server', 'jQuery', 'AJAX', 'Bootstrap 5'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'smart-emr',
    name: 'Smart EMR System',
    tagline: 'AI-powered hospital records platform',
    description:
      'A full-stack Electronic Medical Records system streamlining doctor-patient management, appointment scheduling, and secure document archival, built on Clean Architecture with a hybrid AI extraction engine.',
    problem:
      'Hospitals lose time to manual data entry from handwritten prescriptions and scanned reports, and doctors need clinical summaries fast during OPD hours.',
    role: 'Sole architect and developer — backend, frontend, and AI integration',
    technologies: [
      '.NET Core',
      'Angular',
      'SQL Server',
      'AI Integrations',
      'Tesseract OCR',
      'Cloudinary',
      'JWT',
      'SignalR',
    ],
    highlights: [
      'Integrated Groq Vision AI and Tesseract OCR to auto-extract medications, diagnoses, and lab values from uploaded prescriptions and scan reports.',
      'Built an AI-driven synthesis engine generating real-time, categorized clinical snapshots for physicians.',
      'Added Whisper AI voice-to-text dictation so doctors can record clinical notes via microphone for instant transcription.',
      'Built multilingual e-prescriptions that translate into Hindi and Gujarati with downloadable PDF generation.',
      'Real-time role-based notifications via SignalR for OPD bookings and cancellations.',
      'Cloudinary-integrated cloud storage for scalable, fast retrieval of patient records and scan reports.',
    ],
    githubUrl: 'https://github.com/bhavikpatel025/hospital-EMR',
    liveUrl: 'https://hospital-emr-three.vercel.app',
    featured: true,
  },
  {
    slug: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    tagline: 'Full-stack storefront with admin panel',
    description:
      'A full-stack e-commerce platform with product listing, cart management, order processing, ratings, and a complete admin panel for catalog and category management.',
    problem:
      'Small storefronts need a lean but production-shaped commerce flow — search, filters, cart, orders — without the overhead of a full platform.',
    role: 'Full-stack developer — API design, database, and Angular frontend',
    technologies: ['.NET Core', 'Angular', 'SQL Server', 'EF Core', 'JWT', 'Bootstrap 5', 'AutoMapper'],
    highlights: [
      'Paginated, filterable product browsing by search, category, price range, and stock.',
      'Admin panel for product CRUD with image upload (JPG/PNG/WEBP) and URL-based image input.',
      'JWT authentication with role-based routing (Admin/Customer) and lazy-loaded route guards.',
      'HTTP interceptors auto-attach Bearer tokens to every request.',
      'Clean Architecture backend — Controllers, Services, Repositories, DTOs — with database seeding and soft-delete.',
    ],
    githubUrl: 'https://github.com/bhavikpatel025/E-Commerce',
    featured: true,
  },
  {
    slug: 'google-meet-clone',
    name: 'Video Meet Platform',
    tagline: 'Real-time video conferencing app',
    description:
      'A full-featured video conferencing application with real-time video, audio, chat, screen sharing, reactions, and host-controlled waiting rooms.',
    problem:
      'Understanding what it actually takes to ship reliable real-time communication — signaling, peer connections, and multi-user state — end to end.',
    role: 'Full-stack developer — WebRTC signaling, SignalR hubs, and Angular UI',
    technologies: ['.NET Core', 'Angular', 'WebRTC', 'SignalR', 'SQL Server', 'JWT'],
    highlights: [
      'WebRTC-powered peer-to-peer video and audio with a dynamic video grid.',
      'Host-controlled waiting room with admit/deny and bulk-admit workflows.',
      'Live chat, emoji reactions, and hand-raise, all synced in real time over SignalR.',
      'Screen sharing with real-time state sync across all participants.',
    ],
    githubUrl: 'https://github.com/bhavikpatel025/google-meet-clone',
    liveUrl: 'https://google-meet-clone-three-eta.vercel.app',
    featured: true,
  },
  {
    slug: 'linkedin-clone',
    name: 'Professional Network Platform',
    tagline: 'LinkedIn-style social platform',
    description:
      'A full-stack social media platform for professional networking — profiles, posts, engagement, and a real-time notification system.',
    problem:
      'Modeling a social graph (follows, posts, engagement) and keeping every interaction in sync in real time.',
    role: 'Full-stack developer',
    technologies: ['.NET Core', 'Angular', 'SignalR', 'SQL Server', 'JWT'],
    highlights: [
      'Post creation, likes, nested comments, and a dedicated saved-posts flow.',
      'Follow/unfollow system with connection suggestions.',
      'Real-time notifications for likes, comments, and new followers via SignalR.',
    ],
    githubUrl: 'https://github.com/bhavikpatel025/linkedin-clone',
    featured: false,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'L J University, Ahmedabad',
    startDate: 'Aug 2023',
    endDate: 'May 2025',
    detail: 'SPI: 7.0',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'BDKM College, Palanpur',
    startDate: 'Aug 2020',
    endDate: 'May 2023',
    detail: 'CGPA: 6.61',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Matrushree J R Vidhyalay, Palanpur',
    startDate: '2020',
    endDate: '2020',
    detail: '71.85%',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'Software Testing', issuer: 'Coursera' },
];

export const RESUME_PATH = 'assets/resume/Bhavik_Patel_Resume.pdf';