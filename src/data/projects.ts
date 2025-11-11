
import ibexOg from "@/assets/img/ibex-og.jpg";
import vozziLogo from "@/assets/img/vozzi-logo.png";
import talentIbexLogo from "@/assets/img/talent-ibex-logo.png";
import lobLogo from "@/assets/img/lob-logo.jpg";
import lorryzLogo from "@/assets/img/lorryz-logo.png";
import vwLogo from "@/assets/img/vw-logo.jpeg";
import cubbyLogo from "@/assets/img/cubby-logo.svg";
import work6 from "@/assets/img/work-6.jpg";
import trgWorldOg from "@/assets/img/trg-world-og.jpg";
import seneImg from "@/assets/img/sene-img.webp";
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
    id: "ibex-co",
    title: "ibex.co",
    description: "Web Development project for ibex.co.",
    fullDescription: "A web development project for ibex.co.",
  image: ibexOg,
    tags: ["Web Development"],
    liveLink: "https://www.ibex.co/",
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
    id: "lob",
    title: "LOB",
    description: "Mobile Application project for LOB.",
    fullDescription: "A mobile application project for LOB.",
  image: lobLogo,
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
    id: "sene-studio",
    title: "Sene Studio.",
    description: "Web Development project for Sene Studio.",
    fullDescription: "A web development project for Sene Studio.",
  image: seneImg,
    tags: ["Web Development"],
    liveLink: "https://senestudio.com/",
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
