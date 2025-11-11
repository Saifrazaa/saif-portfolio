import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Proficient in both frontend and backend technologies, creating end-to-end solutions."
    },
    {
      icon: Rocket,
      title: "Performance-Driven",
      description: "Building fast, scalable applications optimized for the best user experience."
    },
    {
      icon: Users,
      title: "Global Collaboration",
      description: "Successfully delivered projects for clients across multiple countries and industries."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate Software Engineer with 6 years of experience specializing in 
              front-end web and mobile application development. My expertise spans React.js, 
              React Native, Node.js, Vue.js, and Shopify development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 mb-4">
                Throughout my career, I've had the privilege of working with diverse clients—from 
                innovative startups to established enterprises—both locally and internationally. 
                I take pride in delivering high-quality, user-friendly applications that not only 
                meet but exceed client expectations.
              </p>
              <p className="text-foreground/90">
                As a recognized <span className="text-accent font-semibold">Shopify expert</span>, 
                I have deep knowledge of theme customization, Liquid templates, and app integration. 
                Whether it's building a custom e-commerce solution or optimizing an existing store, 
                I bring technical excellence and creative problem-solving to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
