export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const desktopNavigationData = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Resume', href: '/resume' },
  { title: 'Projects', href: '/projects' },
];

export const mobileNavigationData = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Resume', href: '/resume' },
  { title: 'Projects', href: '/projects' },
  { title: 'Hire Me', href: '/contact' },
];
export const about = {
  title: 'About Me',
  description:
    'I build high-quality web applications using modern technologies, focusing on performance, scalability, and real-world results. I enjoy solving complex problems, learning new tools, and staying persistent until every solution is fully functional and ready for production.',
  data: [
    {
      title: 'Name',
      value: 'Ahmed Haitham',
    },
    {
      title: 'Email',
      value: 'ah607k@gmail.com',
    },
    {
      title: 'Phone',
      value: '+971 50 126 7437',
    },
    {
      title: 'Location',
      value: 'United Arab Emirates',
    },
    {
      title: 'Experience',
      value: '1.5+ Years',
    },
    {
      title: 'Nationality',
      value: 'Syrian',
    },
    {
      title: 'Languages',
      value: 'English, Arabic',
    },
    {
      title: 'Freelance',
      value: 'Available',
    },
  ],
};

export const builds_development = {
  title: 'Builds & Development',
  description:
    "I've built multiple full-stack applications from concept to deployment, working across frontend, backend, and database layers. Through real projects, I've gained hands-on experience in API design, scalable architecture, and writing maintainable, production-ready code.",
  data: [
    'Built end-to-end web applications, handling everything from backend architecture to frontend design ',
    'Developed scalable web applications with server-side rendering, optimized routing, and strong SEO foundations',
    'Designed application structures that support scalability, readability, and long-term development',
    'Designed secure RESTful APIs and managed PostgreSQL and MongoDB databases ',
    'Implemented robust authentication flows with protected routes and role-based access ',
    'Structured projects for team collaboration, maintainability, and future expansion ',
  ],
};
export const education = {
  title: 'My Education',
  description:
    "I hold a Bachelor's degree in Computer Science supported by hands-on training through web development bootcamps and courses. My education built a strong foundation in programming, problem-solving, and software engineering practices that I apply when building real-world applications.",

  data: [
    {
      title: "Bachelor's Degree in Computer Science",
      subtitle: 'California, USA — CGPA: 3.96 / 4.0',
    },
    {
      title: 'Web Development Bootcamps & Courses',
      subtitle: 'Full-stack development with hands-on project experience',
    },
  ],
};
export const phoneNumber = '+971 50 126 7437';
export const email = 'ah607k@gmail.com';

export const services = [
  'Full-Stack Web Applications',
  'Fronted Development',
  'Backend Development',
];
