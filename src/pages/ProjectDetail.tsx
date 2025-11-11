import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, TrendingUp, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="hero">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/projects">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <div className="flex gap-3">
              <Button variant="hero" size="sm" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-primary/10 text-foreground text-sm rounded-full border border-border">
                {project.year}
              </span>
              <span className="px-3 py-1 bg-primary/10 text-foreground text-sm rounded-full border border-border">
                {project.client}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-4xl animate-fade-in">
              {project.fullDescription}
            </p>

            <div className="mb-8 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-2">Role</p>
              <p className="text-lg font-semibold text-foreground">{project.role}</p>
            </div>

            <div className="flex flex-wrap gap-2 animate-fade-in">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card text-card-foreground rounded-lg border border-border hover:border-accent transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-card-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-card-foreground">{solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Results & Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-card-foreground font-medium">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Technologies Used</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-foreground mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Tools & Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.tools.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm available for freelance projects and consultations. Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="hero" size="lg">
                  Get In Touch
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
