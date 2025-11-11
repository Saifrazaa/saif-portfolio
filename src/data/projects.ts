
import seneImg from "@/assets/img/sene-img.webp";
import seneDash from "@/assets/img/sene-dashboard.png";
import ibexOg from "@/assets/img/ibex-og.jpg";
import rashmiKumari from "@/assets/img/rashmi-kumari.png";
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
    role: "Front-end Engineer",
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
    description: "Shopify store for a renowned Pakistani designer with celebrity clientele.",
    fullDescription: "Rashmi Kumari is a Shopify-based online store created for one of Pakistan's most well-known designers, whose clients include celebrities from the country's film and drama industries. Before this project, Rashmi did not have any online platform to sell her designer dresses, relying solely on direct customer approaches via Instagram or WhatsApp. Recognizing the need for a dedicated e-commerce solution, I developed a complete Shopify store, including the purchase and customization of a premium theme. The project had a very short deadline of just 2 months, and I single-handedly delivered the entire platform within this period, enabling Rashmi to sell her dresses online for the first time.",
    image: rashmiKumari,
    tags: ["Shopify", "E-commerce", "Web Development", "Premium Theme"],
    liveLink: "https://rashmi-kumari.com",
    githubLink: "",
    category: "E-commerce",
    year: "2025",
    client: "Rashmi Kumari (Fashion Designer)",
    role: "Shopify Developer & E-commerce Consultant",
    challenges: [
      "No existing online platform for Rashmi Kumari to sell designer dresses; all sales were managed through Instagram or WhatsApp.",
      "Needed to launch a fully functional e-commerce store within a strict 2-month deadline.",
      "Required a premium, visually appealing theme to match the brand's high-profile clientele."
    ],
    solutions: [
      "Developed a complete Shopify store from scratch, tailored to the needs of a celebrity designer.",
      "Purchased and customized a premium Shopify theme to ensure a luxurious and user-friendly shopping experience.",
      "Handled all aspects of store setup, product listing, and configuration solo, delivering the project within the tight deadline."
    ],
    results: [
      "Enabled Rashmi Kumari to sell her designer dresses online for the first time, expanding her reach beyond direct social media inquiries.",
      "Launched the store within 2 months, meeting the urgent business requirements.",
      "Provided a scalable and professional e-commerce platform for a high-profile client base."
    ],
    technologies: {
      frontend: ["Shopify", "Shopify Liquid", "Premium Theme", "Javascript"],
      backend: ["Shopify"],
      tools: ["Shopify Admin", "Git"]
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
    id: "lorryz",
    title: "Lorryz",
    description: "Marketing website and dashboard for LORRYZ, a leading UAE-based shipment company.",
    fullDescription: "I developed the marketing website and a complete dashboard for LORRYZ, a well-known shipment company based in the UAE. My role focused on front-end development, where I used HTML, CSS, SCSS, and JavaScript to build the user interface. The front-end was designed for seamless integration by Angular developers, enabling them to connect the UI with their business logic and functionalities. The main challenge was that LORRYZ's previous website was outdated and did not reflect a modern brand image. We addressed this by creating a new website from scratch, delivering a fresh, modern look and improved user experience.",
    image: lorryzLogo,
    tags: ["Web Development", "HTML", "CSS", "SCSS", "JavaScript", "Dashboard", "Marketing Website"],
    liveLink: "https://lorryz.com/",
    githubLink: "",
    category: "Web Development",
    year: "2021",
    client: "LORRYZ (UAE)",
    role: "Front-end Developer",
    challenges: [
      "LORRYZ was using a very outdated and old website that did not represent their brand effectively.",
      "Needed a modern marketing website and dashboard to support business growth and digital presence.",
      "Required a front-end solution that could be easily integrated by Angular developers."
    ],
    solutions: [
      "Designed and developed a new marketing website and dashboard from scratch with a modern look and feel.",
      "Built the front-end using HTML, CSS, SCSS, and JavaScript, ensuring clean code and modular structure for easy Angular integration.",
      "Collaborated closely with Angular developers to facilitate smooth integration of UI with business logic."
    ],
    results: [
      "Transformed LORRYZ's digital presence with a modern, user-friendly website and dashboard.",
      "Enabled the company to better showcase their services and manage operations online.",
      "Provided a scalable and maintainable front-end foundation for future enhancements."
    ],
    technologies: {
      frontend: ["HTML", "CSS", "SCSS", "JavaScript"],
      backend: [],
      tools: []
    }
  },
  {
    id: "trg-world",
    title: "TRG World.",
    description: "Investor portal website for TRG, a leading BPO company in Pakistan, featuring a modern, fast, and fully responsive static site.",
    fullDescription: "I created the investor portal website for TRG, a well-known BPO company in Pakistan. The site, trgworld.com, is a static website designed to provide information about TRG's products and leadership. Despite being static, the website is exceptionally smooth, fast, and features a modern design. The project was completed in just one week and is fully responsive across all devices, built using HTML, CSS, SCSS, and JavaScript.",
    image: trgWorldOg,
    tags: ["Web Development", "HTML", "CSS", "SCSS", "JavaScript", "Static Website", "Responsive Design"],
    liveLink: "https://trgworld.com/",
    githubLink: "",
    category: "Web Development",
    year: "2022", // Update year if needed
    client: "TRG (The Resource Group)",
    role: "Front-end Developer",
    challenges: [
      "Needed to create a modern, fast, and smooth static website for TRG's investor portal.",
      "Project required completion within a tight 1-week deadline.",
      "Site had to be fully responsive and visually appealing across all devices."
    ],
    solutions: [
      "Designed and developed a static informational website using HTML, CSS, SCSS, and JavaScript.",
      "Focused on delivering a modern, clean, and fast user experience.",
      "Ensured full responsiveness and cross-device compatibility."
    ],
    results: [
      "Launched trgworld.com within 1 week, meeting all client requirements.",
      "Provided a smooth, fast, and modern static website for TRG's investor relations.",
      "Enhanced TRG's digital presence with a professional and informative portal."
    ],
    technologies: {
      frontend: ["HTML", "CSS", "SCSS", "JavaScript"],
      backend: [],
      tools: []
    }
  },
  {
    id: "vozzi-go",
    title: "Vozzi Go",
    description: "Mobile app for ticket booking system with chat, authentication, and QR code features for a US client.",
    fullDescription: "I worked with a US client to develop Vozzi Go, a mobile application for booking tickets to matches. The app features a robust ticket booking system, integrated chat functionality powered by Firebase messaging, user authentication, customizable templates, and QR code generation and scanning for ticket validation. Built using React Native, I implemented Firebase messaging to enable real-time chat and notifications, ensuring a seamless user experience from booking to event entry.",
    image: vozziLogo,
    tags: ["Mobile Application", "React Native", "Firebase", "Ticket Booking", "Chat", "QR Code", "Authentication"],
    liveLink: "https://play.google.com/store/apps/details?id=com.vozzigo&hl=en",
    githubLink: "",
    category: "Mobile Application",
    year: "2023", // Update year if needed
    client: "US Client",
    role: "React Native Developer",
    challenges: [
      "Needed to build a mobile app for booking match tickets with real-time chat and notifications.",
      "Required secure authentication and QR code functionality for ticket validation.",
      "Integration of Firebase messaging for chat and push notifications."
    ],
    solutions: [
      "Developed the app using React Native for cross-platform compatibility.",
      "Implemented Firebase authentication and messaging for secure login and real-time chat.",
      "Added QR code generation and scanning for seamless ticket validation at events.",
      "Created customizable templates for ticket and event details."
    ],
    results: [
      "Delivered a feature-rich ticket booking app for matches, enhancing user convenience.",
      "Enabled real-time communication and notifications via Firebase messaging.",
      "Streamlined event entry with QR code-based ticket validation."
    ],
    technologies: {
      frontend: ["React Native"],
      backend: ["Firebase"],
      tools: ["Firebase Messaging", "QR Code"]
    }
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
    id: "enteract-engage",
    title: "Enteract Engage.",
    description: "Web Development project for Enteract Engage.",
    fullDescription: "A web development project for Enteract Engage.",
    image: enteractLogo,
    tags: ["Web Development"],
    liveLink: "https://enteract.live/",
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
