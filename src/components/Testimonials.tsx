import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "George L",
      role: "Head - Product & Growth at LORRYZ",
      company: "UAE",
      text: "We contacted Saif R. to develop our company website and Saif has done a wonderful job and delivered before time. Saif is a professional and hard-working person and I will contact him again for any future work. Highly recommend!!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "E-Commerce Director",
      company: "Fashion Retail Co",
      text: "I highly recommend Saif, an exceptional Front-end Engineer specializing in React.js, Vue.js, React Native, and JavaScript. His expertise in transforming UX into intuitive UI and his passion for web development make him a standout professional. Saif’s innovative thinking and collaborative spirit significantly enhance any team he joins",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "FinTech Solutions",
      text: "I've worked with Saif on several projects related to web and mobile development. We shared insights over frontend development while working together. As my senior Saif has helped me on multiple occasions whenever I came to him with a problem. I find him really polite and humble person to work with. I would recommend him for the role of frontend developer. He knows his job.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border border-border relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-accent">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
