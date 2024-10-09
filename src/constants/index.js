import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import z8tech from "../assets/company/z8tech.png";
import areiatech from "../assets/company/areiatech.png";
import cu from "../assets/education/cu.png";
import amc from "../assets/education/amc.png";
import muuphs from "../assets/education/muuphs.jpeg";

// nav links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// services
const services = [
  {
    id: 1,
    title: "Web Developer",
    icon: web,
  },
  {
    id: 2,
    title: "Database Query Specialist",
    icon: mobile,
  },
  {
    id: 3,
    title: "Backend Developer",
    icon: backend,
  },
  {
    id: 4,
    title: "PHP/Laravel Specialist",
    icon: creator,
  },
  {
    id: 5,
    title: "Frontend Developer",
    icon: backend,
  },
  {
    id: 6,
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    id: 7,
    title: "API Developer",
    icon: web,
  },
  {
    id: 8,
    title: "Laravel Expert",
    icon: mobile,
  },
];

// experiences
const experiences = [
  {
    id: 4,
    title: "Software Engineer",
    company_name: "Z-Eight Tech",
    icon: z8tech,
    iconBg: "#E6DEDD",
    date: "1st January 2024 - Present",
    points: [
      "Architecting and developing robust, scalable web applications using Laravel, Vue.js, React.js, and other modern frameworks.",
      "Leading collaborative efforts with cross-functional teams including designers, project managers, and developers to ensure smooth project execution.",
      "Implementing complex backend systems, optimizing APIs, and ensuring secure data handling practices.",
      "Reviewing and enhancing code quality by conducting peer reviews, optimizing performance, and providing mentorship to junior developers.",
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    company_name: "Z-Eight Tech",
    icon: z8tech,
    iconBg: "#E6DEDD",
    date: "1st June 2023 - 1st December 2023",
    points: [
      "Developed dynamic and responsive web applications using PHP, Laravel, and JavaScript libraries.",
      "Collaborated with UI/UX designers and product managers to turn designs into functional web pages.",
      "Ensured cross-browser compatibility, SEO optimization, and performance enhancements.",
      "Managed web application deployment and maintenance, including bug fixing and feature updates.",
    ],
  },
  {
    id: 2,
    title: "Web Developer (Professional)",
    company_name: "Z-Eight Tech",
    icon: z8tech,
    iconBg: "#E6DEDD",
    date: "3rd March 2023 - 1st June 2023",
    points: [
      "Assisted in building and maintaining frontend components of web applications using React.js.",
      "Worked closely with senior developers to gain hands-on experience in web development best practices.",
      "Conducted bug fixes and minor updates to ensure smooth functionality across different devices.",
      "Learned and applied key concepts of responsive design and version control using Git.",
    ],
  },
  {
    id: 1,
    title: "Full Stack Developer",
    company_name: "Areia Tech",
    icon: areiatech,
    iconBg: "#E6DEDD",
    date: "5th March 2022 - 1st April 2023",
    points: [
      "Developed full-stack web applications using React.js for frontend and Node.js for backend.",
      "Integrated third-party services and APIs to enhance web app functionality and user experience.",
      "Led the design and implementation of databases using MongoDB and MySQL, ensuring efficient data handling.",
      "Ensured code quality through unit testing, version control, and following software development best practices.",
    ],
  },
];

// education
const educations = [
  {
    id: 4,
    course: "Laravel Developer (Internship)",
    institute: "Areia Tech",
    icon: areiatech,
    iconBg: "#E6DEDD",
    date: "2nd January 2022 - 2nd March 2022",
    points: [
      "Gained hands-on experience developing web applications using Laravel, focusing on backend development.",
      "Assisted in building RESTful APIs and integrating them with frontend applications.",
      "Collaborated with senior developers to understand Laravel's ecosystem, including Eloquent ORM and Blade templates.",
      "Contributed to testing and debugging features to ensure seamless functionality in various environments.",
    ],
  },
  {
    id: 3,
    course: "Bachelor of Science (Bsc) in CSE",
    institute: "University of Chittagong, Chittagong",
    icon: cu,
    iconBg: "#E6DEDD",
    date: "2nd January 2017 - 2nd June 2022",
    points: [
      "Studied core software engineering principles, including design patterns, object-oriented programming, and software architecture.",
      "Worked on full-stack development projects utilizing modern frameworks, tools, and methodologies.",
      "Gained proficiency in algorithms, data structures, and system design, with a focus on scalability and performance.",
      "Participated in team-based projects applying Agile methodologies and version control systems like Git.",
      "Developed strong problem-solving and analytical skills through real-world projects and case studies.",
    ],
  },
  {
    id: 2,
    course: "Higher Secondary School Certificate (Science)",
    institute: "Govt. Ashek Mahmud College, Jamalpur",
    icon: amc,
    iconBg: "#E6DEDD",
    date: "1st February 2014 - 2nd March 2016",
    points: [
      "Developed a strong foundation in core science subjects such as Physics, Chemistry, and Mathematics.",
      "Participated in extracurricular activities, including science fairs and technical seminars.",
      "Achieved excellent results in the HSC exams with a focus on science and technology subjects.",
      "Worked on projects that enhanced problem-solving and analytical skills.",
    ],
  },
  {
    id: 1,
    course: "Secondary School Certificate (Science)",
    institute: "Melandah Umir Uddin Pilot High School, Jamalpur",
    icon: muuphs,
    iconBg: "#E6DEDD",
    date: "1st January 2012 - 1st January 2014",
    points: [
      "Developed a solid understanding of fundamental science subjects, including Mathematics, Physics, and Biology.",
      "Participated in various school-level science competitions and projects.",
      "Excelled in academic performance with a special focus on science subjects.",
      "Cultivated a strong interest in technology and software development.",
    ],
  },
];

// technologies or Skills
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
