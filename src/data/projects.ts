import projectShopify from "@/assets/project-shopify.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

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
    id: "enterprise-ecommerce",
    title: "Enterprise E-Commerce Platform",
    description: "Custom Shopify store with advanced theme customization, Liquid templates, and third-party integrations. Increased conversion rate by 35% through optimized checkout flow.",
    fullDescription: "A comprehensive e-commerce solution built for a leading fashion retailer, featuring a fully custom Shopify theme, advanced product filtering, wishlist functionality, and seamless integration with their existing ERP system. The project involved complex Liquid template development, custom app integration, and performance optimization.",
    image: projectShopify,
    tags: ["Shopify", "Liquid", "JavaScript", "API Integration"],
    liveLink: "#",
    githubLink: "#",
    category: "E-Commerce",
    year: "2024",
    client: "Fashion Retail Co",
    role: "Lead Shopify Developer",
    challenges: [
      "Complex product variant management with 1000+ SKUs",
      "Integration with legacy ERP system requiring custom middleware",
      "Performance optimization for mobile users in emerging markets",
      "Custom checkout flow to reduce cart abandonment"
    ],
    solutions: [
      "Built custom Shopify app for real-time inventory sync with ERP",
      "Implemented lazy loading and image optimization reducing load time by 60%",
      "Developed custom Liquid sections for flexible content management",
      "Created multi-step checkout with progress indicators and validation"
    ],
    results: [
      "35% increase in conversion rate",
      "60% faster page load times",
      "Cart abandonment reduced by 28%",
      "Mobile sales increased by 45%"
    ],
    technologies: {
      frontend: ["Liquid", "JavaScript ES6+", "Tailwind CSS", "Alpine.js"],
      backend: ["Shopify Admin API", "GraphQL", "Webhooks", "Node.js"],
      tools: ["Shopify CLI", "Theme Kit", "GitHub Actions", "Postman"]
    }
  },
  {
    id: "cross-platform-mobile",
    title: "Cross-Platform Mobile App",
    description: "React Native application serving 50K+ users across iOS and Android. Features real-time data sync, push notifications, and offline functionality.",
    fullDescription: "A feature-rich social productivity app built with React Native, enabling users to collaborate in real-time, share content, and stay connected. The app includes sophisticated offline-first architecture, push notifications, real-time messaging, and seamless cloud synchronization.",
    image: projectMobile,
    tags: ["React Native", "TypeScript", "Firebase", "Redux"],
    liveLink: "#",
    githubLink: "#",
    category: "Mobile Development",
    year: "2023",
    client: "TechStart Inc",
    role: "Senior React Native Developer",
    challenges: [
      "Maintaining performance with 50K+ concurrent users",
      "Implementing reliable offline-first architecture",
      "Real-time sync across multiple devices",
      "Cross-platform consistency between iOS and Android"
    ],
    solutions: [
      "Implemented Redux with redux-persist for robust state management",
      "Built custom synchronization layer using Firebase Firestore",
      "Optimized app bundle size by 40% through code splitting",
      "Created shared component library for platform consistency"
    ],
    results: [
      "4.8★ rating on App Store and Google Play",
      "50K+ active users within 6 months",
      "99.9% crash-free rate",
      "40% reduction in app size"
    ],
    technologies: {
      frontend: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation"],
      backend: ["Firebase", "Cloud Functions", "Firestore", "FCM"],
      tools: ["Expo", "Fastlane", "Jest", "Detox", "CodePush"]
    }
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Modern web dashboard built with React and Node.js for data visualization and reporting. Handles millions of data points with optimized performance.",
    fullDescription: "A sophisticated analytics platform designed for enterprise clients to visualize complex datasets, generate reports, and gain actionable insights. The dashboard features real-time data updates, customizable widgets, advanced filtering, and export capabilities for various data formats.",
    image: projectDashboard,
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    liveLink: "#",
    githubLink: "#",
    category: "Web Application",
    year: "2024",
    client: "FinTech Solutions",
    role: "Full-Stack Developer",
    challenges: [
      "Rendering millions of data points without performance degradation",
      "Real-time data updates with WebSocket connections",
      "Complex data aggregation and filtering logic",
      "Responsive design for various screen sizes and data densities"
    ],
    solutions: [
      "Implemented virtualized rendering for large datasets using React Window",
      "Built WebSocket connection pool with automatic reconnection",
      "Created efficient PostgreSQL queries with indexing strategies",
      "Designed responsive grid system with adaptive chart sizing"
    ],
    results: [
      "Handle 10M+ data points with smooth interactions",
      "Real-time updates with <100ms latency",
      "Reduced server costs by 35% through optimization",
      "Improved user engagement by 60%"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "D3.js", "Recharts", "TanStack Query"],
      backend: ["Node.js", "Express", "PostgreSQL", "Redis", "WebSocket"],
      tools: ["Docker", "AWS", "GitHub Actions", "Grafana", "Sentry"]
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
