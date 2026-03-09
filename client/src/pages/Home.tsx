import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Menu, 
  X,
  Sparkles,
  Droplet,
  Sofa,
  Car,
  ClipboardList,
  UserCheck,
  CheckCircle,
  CreditCard,
  MapPin,
  Star,
  Quote
} from "lucide-react";
import { useState } from "react";

// Image Imports
import imgLogo from "@/assets/service_nexus_logo.png";
import zapCleanLogo from "@/assets/final_01.png";
import luckysPlumbingLogo from "@/assets/luckys_plumbing.png";
import imgPlumbingService from "@/assets/images/plumbing-service.jpg";
import imgUpholsteryService from "@/assets/images/upholstery-service.jpg";
import imgCarWashService from "@/assets/images/car-wash-service.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/27725767964?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
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
              <Link href="/" className="text-primary font-medium">Home</Link>
              <Link href="/services" className="text-secondary hover:text-primary transition-colors font-medium">Services</Link>
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
              <Link href="/" className="block w-full text-left px-3 py-2 text-base font-medium text-primary hover:bg-muted rounded-md">Home</Link>
              <Link href="/services" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">Services</Link>
              <Link href="/pricing" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">Pricing</Link>
              <Link href="/about" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">About</Link>
              <a href={getWhatsAppLink("Hello, I would like to book a service.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full justify-start px-3 py-2 text-base font-medium text-white bg-primary rounded-md">Book Now</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-medium text-sm mb-8">
          <Sparkles size={16} className="text-accent" />
          <span>Service, Simplified and Secured</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-secondary leading-tight max-w-4xl mb-6">
          Service <span className="text-primary">Nexus</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          We connect you to screened, reliable maintenance professionals in Johannesburg. Quality service, transparent pricing, and complete peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={getWhatsAppLink("Hello, I would like to book a service.")} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/10 w-full sm:w-auto">
              Book Now
            </Button>
          </a>
          <Link href="/services">
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-2 border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
              View Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Professional solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service: Plumbing */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-2xl bg-white">
              <div className="h-56 overflow-hidden relative">
                <img src={imgPlumbingService} alt="Plumbing Services" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-full font-bold text-blue-600 flex items-center gap-2 shadow-sm">
                  <Droplet size={18} /> Plumbing
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 mb-8">
                  {['Leak repairs', 'Pipe installations', 'Drain blockages', 'Plumbing maintenance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                      <CheckCircle2 className="text-blue-500 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink("Hello, I would like to request a plumbing service quote.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50">Get Quote</Button>
                </a>
              </CardContent>
            </Card>

            {/* Service: Upholstery */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-2xl bg-white">
              <div className="h-56 overflow-hidden relative">
                <img src={imgUpholsteryService} alt="Upholstery Services" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-full font-bold text-purple-600 flex items-center gap-2 shadow-sm">
                  <Sofa size={18} /> Upholstery
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 mb-8">
                  {['Couch cleaning', 'Carpet cleaning', 'Mattress cleaning', 'Chair cleaning'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                      <CheckCircle2 className="text-purple-500 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink("Hello, I would like to request an Upholstery service quote.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl border-purple-200 text-purple-600 hover:bg-purple-50">Get Quote</Button>
                </a>
              </CardContent>
            </Card>

            {/* Service: Car Wash */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-2xl bg-white">
              <div className="h-56 overflow-hidden relative bg-green-50">
                <img src={imgCarWashService} alt="Car Wash Services" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }}/>
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-full font-bold text-green-600 flex items-center gap-2 shadow-sm">
                  <Car size={18} /> Car Wash
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 mb-8">
                  {['Standard wash', 'Wash and polish', 'Full valet', 'Premium valet'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink("Hello, I would like to request a Car wash service quote.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl border-green-200 text-green-600 hover:bg-green-50">Get Quote</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple steps to get your service done.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ClipboardList, title: "Step 1", desc: "Request a service online or via WhatsApp" },
              { icon: UserCheck, title: "Step 2", desc: "We assign a trusted professional" },
              { icon: CheckCircle, title: "Step 3", desc: "Job completed professionally" },
              { icon: CreditCard, title: "Step 4", desc: "Receive an invoice, pay service provider" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/20 border border-border">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Transparent Pricing</h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                We believe in clear, upfront pricing. Explore our starting rates or view the full pricing guide for detailed information.
              </p>
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg">
                  View Full Pricing
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 w-full">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Starting Prices</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-lg font-medium text-white/90">Car Wash</span>
                      <span className="text-xl font-bold text-white">From R180</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-lg font-medium text-white/90">Carpet Cleaning</span>
                      <span className="text-xl font-bold text-white">From R250</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-lg font-medium text-white/90">Mattress Cleaning</span>
                      <span className="text-xl font-bold text-white">From R250</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-lg font-medium text-white/90">Couch Cleaning</span>
                      <span className="text-xl font-bold text-white">From R350</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Service Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-8">Why Choose Service Nexus?</h2>
              <ul className="space-y-6">
                {[
                  "Trusted service providers",
                  "Transparent pricing",
                  "Convenient mobile service",
                  "Fast response times",
                  "Professional equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-secondary">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-8">Service Areas</h2>
              <div className="bg-muted/30 p-8 rounded-2xl border border-border h-full">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-primary mt-1" size={28} />
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">Johannesburg</h3>
                    <p className="text-muted-foreground text-lg">We proudly serve the greater Johannesburg area, including:</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {["Sandton", "Fourways", "Randburg", "Midrand"].map((area, i) => (
                    <div key={i} className="bg-white px-4 py-3 rounded-xl shadow-sm font-medium text-secondary text-center">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Diantha M.", role: "Homeowner", text: "Excellent plumbing service! They fixed a leak that had been bothering us for weeks. Very professional and tidy." },
              { name: "Felix W.", role: "Business Owner", text: "The upholstery cleaning team made our office couches look brand new. Transparent pricing and great communication." },
              { name: "Mbuso K.", role: "Resident", text: "Best mobile car wash I've used. They arrived on time, brought all their own equipment, and the premium valet was top-notch." }
            ].map((review, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                  </div>
                  <Quote className="text-primary/20 mb-4" size={40} />
                  <p className="text-secondary/80 text-lg mb-6 leading-relaxed">"{review.text}"</p>
                  <div>
                    <p className="font-bold text-secondary">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Need a Professional Service Today?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppLink("Hello, I would like to book a service.")} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-primary text-white hover:opacity-90 w-full sm:w-auto">
                Book Now
              </Button>
            </a>
            <a href={getWhatsAppLink("Hello!")} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-[#25D366] text-white hover:bg-[#1ebd5c] flex items-center gap-2 w-full sm:w-auto border-none">
                <MessageCircle size={24} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/5 py-12 text-center text-white/40">
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
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="mailto:servicenexus@8conn.co.za" className="hover:text-primary transition-colors">servicenexus@8conn.co.za</a>
            <span>|</span>
            <a href="tel:0725767964" className="hover:text-primary transition-colors">072 576 7964</a>
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
