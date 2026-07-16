import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, Droplet, ShieldCheck } from "lucide-react";
import imgLogo from "@/assets/service_nexus_logo.png";
import luckysPlumbingLogo from "@/assets/luckys_plumbing.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Pricing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/27734020473?text=${encodeURIComponent(message)}`;
  };

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
              <Link href="/services" className="text-secondary hover:text-primary transition-colors font-medium">Services</Link>
              <Link href="/pricing" className="text-primary font-medium">Pricing</Link>
              <Link href="/about" className="text-secondary hover:text-primary transition-colors font-medium">About</Link>
              <a href={getWhatsAppLink("Hello, I would like to book a plumbing service.")} target="_blank" rel="noopener noreferrer">
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
              <Link href="/services" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">Services</Link>
              <Link href="/pricing" className="block w-full text-left px-3 py-2 text-base font-medium text-primary hover:bg-muted rounded-md">Pricing</Link>
              <Link href="/about" className="block w-full text-left px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-muted rounded-md">About</Link>
              <a href={getWhatsAppLink("Hello, I would like to book a plumbing service.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full justify-start px-3 py-2 text-base font-medium text-white bg-primary rounded-md">Book Now</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-32 pb-20 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">Plumbing Pricing Guide</h1>
            <p className="text-muted-foreground text-lg">Transparent, upfront pricing for professional plumbing services in Johannesburg.</p>
          </div>

          {/* Fixture Installation & Replacement */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Droplet size={28} />
              </div>
              <h2 className="text-2xl font-display font-bold text-secondary">Fixture Installation & Replacement</h2>
            </div>
            <Card className="shadow-sm mb-6">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Basin Replacement</span><span className="font-medium">From R850</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Sink Replacement</span><span className="font-medium">From R850</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Toilet Replacement</span><span className="font-medium">From R1,200</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Tap Replacement</span><span className="font-medium">From R450</span></li>
                  <li className="flex justify-between pb-2"><span className="text-muted-foreground">Dishwasher / Washing Machine Connection</span><span className="font-medium">From R750</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="my-10 border-t border-border"></div>

          {/* Bathroom & Kitchen Plumbing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Droplet size={28} />
              </div>
              <h2 className="text-2xl font-display font-bold text-secondary">Bathroom & Kitchen Plumbing</h2>
            </div>
            <Card className="shadow-sm mb-6">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Standard Shower Installation</span><span className="font-medium">From R1,800</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Walk-in Shower Installation</span><span className="font-medium">From R1,800</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Kitchen Plumbing Renovations</span><span className="font-medium">From R3,500</span></li>
                  <li className="flex justify-between pb-2"><span className="text-muted-foreground">Complete Bathroom Installation</span><span className="font-medium">From R12,000</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="my-10 border-t border-border"></div>

          {/* Geyser Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Droplet size={28} />
              </div>
              <h2 className="text-2xl font-display font-bold text-secondary">Geyser Services (Labour)</h2>
            </div>
            <Card className="shadow-sm mb-6">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">50L Geyser Replacement</span><span className="font-medium">From R1,500</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">100L Geyser Replacement</span><span className="font-medium">From R1,800</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">200L Geyser Replacement</span><span className="font-medium">From R2,500</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Pressure Valve Replacement</span><span className="font-medium">From R650</span></li>
                  <li className="flex justify-between pb-2"><span className="text-muted-foreground">Solar Geyser Installation</span><span className="font-medium">From R10,000</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="my-10 border-t border-border"></div>

          {/* Repairs & Emergency */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Droplet size={28} />
              </div>
              <h2 className="text-2xl font-display font-bold text-secondary">Repairs & Emergency Plumbing</h2>
            </div>
            <Card className="shadow-sm mb-6">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Blocked Drain Clearing</span><span className="font-medium">From R850</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Underground Pipe Repairs</span><span className="font-medium">From R1,200</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Pipe Repairs in Walls</span><span className="font-medium">From R1,200</span></li>
                  <li className="flex justify-between border-b border-border pb-2"><span className="text-muted-foreground">Burst Pipe Repairs</span><span className="font-medium">From R950</span></li>
                  <li className="flex justify-between pb-2"><span className="text-muted-foreground">JoJo Tank Installation</span><span className="font-medium">From R5,500</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Banner */}
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary"/>
                Note: Pricing shown is an estimate for labour and may vary depending on site conditions, materials required, and job complexity.
              </p>
              <h4 className="text-xl font-bold text-secondary">Need a Plumbing Quote?</h4>
              <p className="text-muted-foreground">For fast assistance and bookings, contact us directly on WhatsApp.</p>
            </div>
            <a href={getWhatsAppLink("Hello, I would like to request a plumbing service quote.")} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5c] text-white rounded-full flex items-center gap-2 whitespace-nowrap border-none">
                <MessageCircle size={20} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-white/5 py-12 text-center text-white/40 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="mb-8 pb-8 border-b border-white/20 w-full">
            <h3 className="text-white text-lg font-bold mb-6">Our Partner Professional</h3>
            <div className="flex items-center justify-center">
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
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Service Nexus. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink("Hello, I would like to book a plumbing service.")}
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
