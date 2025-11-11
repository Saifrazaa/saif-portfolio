import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Saif Raza</h3>
              <p className="text-muted-foreground">
                Building exceptional digital experiences with modern technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/saifrazaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saif-raza-22832a107/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:razasaif171@gmail.com"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
