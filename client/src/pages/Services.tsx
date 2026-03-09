import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Droplet,
  Sofa,
  Car,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import imgLogo from "@/assets/service_nexus_logo.png";
import zapCleanLogo from "@/assets/final_01.png";
import luckysPlumbingLogo from "@/assets/luckys_plumbing.png";
import imgPlumbingService from "@/assets/service-plumbing.jpeg";
import imgUpholsteryService from "@/assets/service-upholstery.png";
import imgCarWashService from "@/assets/service-car-wash.jpeg";

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/27725767964?text=${encodeURIComponent(message)}`;
  };

  const services = [
    {
      id: 'plumbing',
      name: 'Plumbing Services',
      icon: Droplet,
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      image: imgPlumbingService,
      message: "Hello, I would like to request a plumbing service quote.",
      items: [
        'Leak repairs',
        'Pipe installations',
        'Drain blockages',
        'Plumbing maintenance'
      ]
    },
    {
      id: 'upholstery',
      name: 'Upholstery & Fabric Cleaning',
      icon: Sofa,
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      image: imgUpholsteryService,
      message: "Hello, I would like to request an Upholstery service quote.",
      items: [
        'Couch cleaning',
        'Carpet cleaning',
        'Mattress cleaning',
        'Chair cleaning'
      ]
    },
    {
      id: 'carwash',
      name: 'Car Wash & Valet',
      icon: Car,
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50',
      image: imgCarWashService,
      message: "Hello, I would like to request a Car wash service quote.",
      items: [
        'Standard wash',
        'Wash and polish',
        'Full valet',
        'Premium valet'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <img src={imgLogo} alt="Service Nexus Logo" className="h-24 w-auto object-contain py-2 brightness-0" />
              <span className="ml-2 font-display font-bold text-2xl tracking-tight text-secondary">Service <span className="text-primary">Nexus</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-secondary hover:text-primary transition-colors font-medium">Home</Link>
              <Link href="/services" className="text-primary font-medium">Services</Link>
              <Link href="/pricing" className="text-secondary hover:text-primary transition-colors font-medium">Pricing</Link>
              <Link href="/about" className="text-secondary hover:text-primary transition-colors font-medium">About</Link>
              <a href={getWhatsAppLink("Hello, I would like to book a service.")} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full px-6 bg-primary text-white hover:opacity-90 border-none">
                  Book Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-primary hover:text-accent">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-border shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <Link href="/" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">Home</Link>
              <Link href="/services" className="block w-full text-left px-3 py-2 text-base font-medium text-primary hover:bg-muted rounded-md">Services</Link>
              <Link href="/pricing" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">Pricing</Link>
              <Link href="/about" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">About</Link>
              <a href={getWhatsAppLink("Hello, I would like to book a service.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full justify-start px-3 py-2 text-base font-medium text-white bg-primary rounded-md">Book Now</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-32 pb-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We connect you with trusted, reliable professionals for all your property maintenance and cleaning needs in Johannesburg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
                  <div className="h-56 overflow-hidden relative">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-sm">
                      <Icon className={service.iconColor} size={18} /> <span className={service.iconColor}>{service.name.split(' ')[0]}</span>
                    </div>
                  </div>
                  <CardContent className="p-8 bg-white">
                    <h3 className="text-2xl font-bold text-secondary mb-6">{service.name}</h3>
                    <ul className="space-y-4 mb-8">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-secondary">
                          <CheckCircle2 className={`${service.iconColor} shrink-0`} size={20} />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={getWhatsAppLink(service.message)} target="_blank" rel="noopener noreferrer" className="block w-full mb-3">
                      <Button variant="outline" className={`w-full rounded-xl border-border text-secondary`}>
                        Get Quote on WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
             <Link href="/pricing">
                <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20">
                  View Full Pricing Guide
                </Button>
             </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/5 py-12 text-center text-white/40 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="mb-8 pb-8 border-b border-white/20 w-full">
            <h3 className="text-white text-lg font-bold mb-6">Our Partner Professionals</h3>
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <div className="flex items-center justify-center bg-white/10 rounded-lg p-4 h-24">
                <img src={zapCleanLogo} alt="ZapClean Mobile Cleaning" className="h-20 object-contain" />
              </div>
              <div className="flex items-center justify-center bg-white/10 rounded-lg p-4 h-24">
                <img src={luckysPlumbingLogo} alt="Lucky's Plumbing" className="h-20 object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <span className="text-white/60 text-sm">Service Areas: Johannesburg</span>
            <span className="text-white/60 text-sm">Sandton</span>
            <span className="text-white/60 text-sm">Fourways</span>
            <span className="text-white/60 text-sm">Randburg</span>
            <span className="text-white/60 text-sm">Midrand</span>
          </div>
          <p className="mb-6 max-w-md mx-auto text-white/60">Service Nexus connects you to screened, reliable maintenance professionals in Johannesburg.</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Service Nexus. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink("Hello, I would like to book a service.")}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300 z-50 group flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
      </a>
    </div>
  );
}
