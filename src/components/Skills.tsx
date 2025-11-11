import { Code, Smartphone, Server, ShoppingBag, Layers, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code,
      skills: ["React.js", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "iOS", "Android", "Mobile UI/UX", "App Optimization"]
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Microservices"]
    },
    {
      category: "E-Commerce",
      icon: ShoppingBag,
      skills: ["Shopify", "Liquid", "Theme Development", "App Integration", "Payment Systems"]
    },
    {
      category: "Tools & Platforms",
      icon: Layers,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack"]
    },
    {
      category: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"]
    },
    {
      category: "AI Automation",
      icon: Database,
      skills: ["n8n", "MCP Servers", "Vapi", "Twilio"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/5 text-foreground text-sm rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
