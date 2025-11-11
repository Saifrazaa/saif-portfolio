
import seneImg from "@/assets/img/sene-img.webp";
import seneDash from "@/assets/img/sene-dashboard.png";
import ibexOg from "@/assets/img/ibex-og.jpg";
import vozziLogo from "@/assets/img/vozzi-logo.png";
import talentIbexLogo from "@/assets/img/talent-ibex-logo.png";
import lobLogo from "@/assets/img/lob-logo.jpg";
import lorryzLogo from "@/assets/img/lorryz-logo.png";
import vwLogo from "@/assets/img/vw-logo.jpeg";
import cubbyLogo from "@/assets/img/cubby-logo.svg";
import work6 from "@/assets/img/work-6.jpg";
import trgWorldOg from "@/assets/img/trg-world-og.jpg";
import enteractLogo from "@/assets/img/enteract-logo.svg";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  category: string;
  year: string;
  client: string;
  role: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export const projects: Project[] = [
  {
    id: "sene-dashboard",
    title: "Sene Dashboard.",
    description: "A complete dashboard for senestudio Shopify store to manage non-customer tasks for the CX team.",
    fullDescription: "Sene Dashboard is a comprehensive dashboard built for the senestudio Shopify store, enabling the CX team to efficiently manage non-customer tasks such as order management, fit-updates, remakes, returns, and more. The dashboard was designed to replace manual processes previously handled via Excel sheets or paper, streamlining workflows and improving productivity. Built from scratch with a modern tech stack, it provides robust features tailored for the CX team's needs.",
    image: seneDash,
    tags: ["Web Development", "Vue.js", "Tailwind CSS", "Django", "AWS", "Docker"],
    liveLink: "https://senestudio.com/",
    githubLink: "",
    category: "Web Development",
    year: "2023",
    client: "senestudio",
    role: "Full Stack Developer",
    challenges: [
      "The CX team was managing all order-related and operational tasks manually using Excel sheets or on paper, leading to inefficiencies and errors.",
      "Needed to centralize and digitize complex workflows such as fit-updates, remakes, returns, and order management."
    ],
    solutions: [
      "Designed and developed a custom dashboard from scratch tailored to the CX team's requirements.",
      "Implemented the frontend using Vue.js, @headlessui/vue for UI components, and Tailwind CSS for styling.",
      "Set up backend services with Python Django, leveraging AWS for cloud infrastructure and Docker for containerization.",
      "Integrated Sentry for error tracking and monitoring, and used Vitest for unit testing.",
      "Migrated all manual processes to a digital platform, improving data accuracy and accessibility."
    ],
    results: [
      "Significantly reduced manual workload and errors for the CX team.",
      "Centralized dashboard improved operational efficiency and task tracking.",
      "Enabled real-time management of orders, fit-updates, remakes, and returns.",
      "Enhanced error tracking and system reliability with Sentry integration."
    ],
    technologies: {
      frontend: ["Vue.js", "@headlessui/vue", "Tailwind CSS", "Vitest"],
      backend: ["Python", "Django", "AWS", "Docker", "ML"],
      tools: ["GitHub", "Git", "Docker", "Postgres", "Sentry"]
    }
  },
  {
    id: "sene-studio",
    title: "Sene Studio",
    description: "Shopify-based custom clothing store for the US market, maintained and enhanced with new features and integrations.",
    fullDescription: "Sene Studio is the American branch of senestudio.com, offering custom clothing built on Shopify. The store leverages Vue.js for core functionality and Tailwind CSS for styling. I am responsible for maintaining and enhancing the store, including adding new features and fixing legacy bugs. Notably, I introduced a standard size functionality that increased sales by up to 20%. I am currently leading a complex theme migration, ensuring seamless transfer of features from the old theme to the new one. Additionally, I set up a partner store for bulk orders and partnerships with other companies. This was my first Shopify project, so I learned Shopify from scratch and have been working on it for over two years, consistently exceeding client expectations.",
    image: seneImg,
    tags: ["Shopify", "Vue.js", "Tailwind CSS", "Web Development", "E-commerce"],
    liveLink: "https://senestudio.com/",
    githubLink: "",
    category: "E-commerce",
    year: "2023-2025",
    client: "senestudio (US branch)",
    role: "Shopify Developer & Frontend Engineer",
    challenges: [
      "First experience working with Shopify, requiring rapid upskilling and adaptation to a new platform.",
      "Inherited a codebase built by another team, necessitating bug fixes and ongoing maintenance without original developer support.",
      "Implementing complex new features (e.g., standard size functionality) in a live production store.",
      "Managing a challenging theme migration, ensuring all custom features are preserved and enhanced.",
      "Setting up a partner store for bulk orders and B2B partnerships."
    ],
    solutions: [
      "Quickly learned Shopify development from scratch and applied best practices for store management.",
      "Introduced and implemented a standard size feature, resulting in a significant sales increase.",
      "Led the migration of features from the old theme to a new, modern theme, minimizing downtime and ensuring feature parity.",
      "Established a partner store to facilitate bulk orders and partnerships with other companies.",
      "Provided ongoing maintenance, bug fixes, and performance improvements, ensuring high client satisfaction."
    ],
    results: [
      "Standard size feature increased sales by up to 20%.",
      "Successful theme migration in progress, with no loss of critical features.",
      "Partner store enabled new B2B revenue streams.",
      "Client satisfaction remains extremely high after two years of continuous work.",
      "Personal growth in Shopify and e-commerce development."
    ],
    technologies: {
      frontend: ["Vue.js", "Tailwind CSS", "Shopify Liquid", "Javascript"],
      backend: ["Shopify"],
      tools: ["Git", "Shopify CLI", "Partner Dashboard"]
    }
  },
  {
    id: "lob",
    title: "LOB (League of Basketball)",
    description: "Cross-platform mobile app for Hilton Pharma's basketball tournament, featuring live match updates, fixtures, results, teams, players, and news.",
    fullDescription: "LOB stands for League of Basketball. It's a cross-platform mobile application developed for Hilton Pharma, one of the largest pharmaceutical companies, to manage and showcase their basketball tournament. The app provides live updates of matches using web sockets, and includes modules for fixtures, results, teams, players, and basketball news. In addition to the mobile app, we built a web dashboard using React.js and websockets, allowing admins to add and update match stats in real time. These stats are instantly reflected in the mobile apps, ensuring everything stays in sync. The main challenge was the absence of a platform for users to check league stats without attending live matches. LOB solves this by allowing users to access all tournament information and global basketball news within the app. Styled-components were used for UI, and Appetize.io was leveraged for online APK demos, enabling clients to test the app on various devices via a shared link.",
    image: lobLogo,
    tags: ["Mobile Application", "React Native", "Web Sockets", "Cross Platform", "Styled Components"],
    liveLink: "https://apps.apple.com/pk/app/league-of-basketball/id6749572941",
    githubLink: "",
    category: "Mobile Application",
    year: "2024",
    client: "Hilton Pharma",
    role: "React Native Developer",
    challenges: [
      "No existing platform for users to check league stats and updates remotely.",
      "Needed real-time updates for matches and tournament events.",
      "Required seamless cross-platform experience for both Android and iOS.",
      "Client needed a way to demo and test the app online on multiple devices."
    ],
    solutions: [
      "Developed a React Native app with web sockets for live match updates.",
      "Built a React.js web dashboard for admins to add and update match stats in real time, syncing instantly with the mobile app.",
      "Implemented modules for fixtures, results, teams, players, and news.",
      "Used styled-components for modular and maintainable UI.",
      "Integrated Appetize.io for online APK demos, allowing client testing on various devices."
    ],
    results: [
      "Provided users with a comprehensive platform to follow the basketball league remotely.",
      "Enabled real-time access to match stats, results, and news.",
      "Streamlined client feedback and testing process via Appetize.io demos."
    ],
    technologies: {
      frontend: ["React Native", "React.js", "Styled Components"],
      backend: ["Web Sockets"],
      tools: ["Appetize.io"]
    }
  },
  {
    id: "rashmi-kumari",
    title: "Rashmi Kumari",
    description: "A modern website for ibex (Leading BPO Company of Pakistan).",
    fullDescription: "A web development project for ibex.co.",
    image: ibexOg,
    tags: ["Web Development", "React.js", "Javascript"],
    liveLink: "https://www.ibex.co/",
    githubLink: "",
    category: "Web Development",
    year: "2020",
    client: "ibex (Leading BPO Company of Pakistan)",
    role: "Front-end Engineer",
    challenges: [
      "Redesigning and developing a high-traffic corporate website to enhance user experience and performance.",
      "Integrating modern web technologies while ensuring compatibility with existing backend systems."
    ],
    solutions: [
      "Implemented a responsive design using React.js and styled-components to ensure optimal viewing across devices.",
      "Collaborated with backend developers to seamlessly integrate the new frontend with the existing PHP/Laravel backend."
    ],
    results: [
      "More than 32k daily visitors worldwide.",
      "Modernized the website with a new tech stack, improving performance and user experience."
    ],
    technologies: {
      frontend: ["React.js", "styled-components", "Javascript", "marketo-forms"],
      backend: ["PHP", 'Laravel'],
      tools: ["Git", "AWS"]
    }
  },
  {
    id: "ibex-co",
    title: "ibex.co",
    description: "A modern website for ibex (Leading BPO Company of Pakistan).",
    fullDescription: "A web development project for ibex.co.",
    image: ibexOg,
    tags: ["Web Development", "React.js", "Javascript"],
    liveLink: "https://www.ibex.co/",
    githubLink: "",
    category: "Web Development",
    year: "2020",
    client: "ibex (Leading BPO Company of Pakistan)",
    role: "Front-end Engineer",
    challenges: [
      "Redesigning and developing a high-traffic corporate website to enhance user experience and performance.",
      "Integrating modern web technologies while ensuring compatibility with existing backend systems."
    ],
    solutions: [
      "Implemented a responsive design using React.js and styled-components to ensure optimal viewing across devices.",
      "Collaborated with backend developers to seamlessly integrate the new frontend with the existing PHP/Laravel backend."
    ],
    results: [
      "More than 32k daily visitors worldwide.",
      "Modernized the website with a new tech stack, improving performance and user experience."
    ],
    technologies: {
      frontend: ["React.js", "styled-components", "Javascript", "marketo-forms"],
      backend: ["PHP", 'Laravel'],
      tools: ["Git", "AWS"]
    }
  },
  {
    id: "vozzi-go",
    title: "Vozzi Go",
    description: "Mobile Application project for Vozzi Go.",
    fullDescription: "A mobile application project for Vozzi Go.",
    image: vozziLogo,
    tags: ["Mobile Application"],
    liveLink: "https://play.google.com/store/apps/details?id=com.vozzigo&hl=en&gl=US",
    githubLink: "",
    category: "Mobile Application",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "talent-ibex",
    title: "talent ibex.",
    description: "Mobile Application project for talent ibex.",
    fullDescription: "A mobile application project for talent ibex.",
    image: talentIbexLogo,
    tags: ["Mobile Application"],
    liveLink: "https://play.google.com/store/apps/details?id=com.talent.ibex&hl=en&gl=US&pli=1",
    githubLink: "",
    category: "Mobile Application",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "lorryz",
    title: "Lorryz",
    description: "Web Development project for Lorryz.",
    fullDescription: "A web development project for Lorryz.",
    image: lorryzLogo,
    tags: ["Web Development"],
    liveLink: "/lorryz/",
    githubLink: "",
    category: "Web Development",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "trg-world",
    title: "TRG World.",
    description: "Web Development project for TRG World.",
    fullDescription: "A web development project for TRG World.",
    image: trgWorldOg,
    tags: ["Web Development"],
    liveLink: "https://trgworld.com/",
    githubLink: "",
    category: "Web Development",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "virtual-world",
    title: "Virtual World",
    description: "Web Development project for Virtual World.",
    fullDescription: "A web development project for Virtual World.",
    image: vwLogo,
    tags: ["Web Development"],
    liveLink: "https://virtualworld.live/",
    githubLink: "",
    category: "Web Development",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "cubby",
    title: "Cubby",
    description: "Mobile Application project for Cubby.",
    fullDescription: "A mobile application project for Cubby.",
    image: cubbyLogo,
    tags: ["Mobile Application"],
    liveLink: "#",
    githubLink: "",
    category: "Mobile Application",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "meticulous",
    title: "Meticulous",
    description: "Mobile Application project for Meticulous.",
    fullDescription: "A mobile application project for Meticulous.",
    image: work6,
    tags: ["Mobile Application"],
    liveLink: "#",
    githubLink: "",
    category: "Mobile Application",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  },
  {
    id: "enteract-engage",
    title: "Enteract Engage.",
    description: "Web Development project for Enteract Engage.",
    fullDescription: "A web development project for Enteract Engage.",
    image: enteractLogo,
    tags: ["Web Development"],
    liveLink: "https://enteract.live/1.0/dashboard.html",
    githubLink: "",
    category: "Web Development",
    year: "",
    client: "",
    role: "",
    challenges: [],
    solutions: [],
    results: [],
    technologies: { frontend: [], backend: [], tools: [] }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
