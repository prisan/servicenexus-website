import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  ArrowLeft
} from "lucide-react";
import imgLogo from "@/assets/service_nexus_logo.png";
import luckysPlumbingLogo from "@/assets/luckys_plumbing.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <img src={imgLogo} alt="Service Nexus Logo" className="h-16 w-auto object-contain py-2 brightness-0" />
              <span className="ml-2 font-display font-bold text-2xl tracking-tight text-secondary">Service <span className="text-primary">Nexus</span></span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft size={20} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-secondary mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            Trusted Plumbing Services You Can Rely On
          </p>
        </div>

        <div className="space-y-8 text-muted-foreground text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <p>
            Welcome! My name is <span className="font-bold text-secondary">Lucky</span>, and I am the owner of this proudly South African plumbing business.
          </p>

          <p>
            With <span className="font-bold text-secondary">over 10 years of experience</span> in the plumbing industry, I have built my reputation on delivering reliable, professional, and high-quality plumbing services. Whether it's a small repair or a larger installation, I take pride in completing every job with expertise, honesty, and attention to detail.
          </p>

          <p>
            I believe that great service goes beyond fixing plumbing problems — it starts with building lasting relationships with my clients through trust, clear communication, and dependable workmanship. Every customer is treated with respect, and every project is completed as if it were my own home.
          </p>

          <p>
            As a proudly South African-owned business, my vision is not only to provide exceptional plumbing services but also to contribute to the growth of our local economy. As the business expands, I am committed to creating employment opportunities and helping uplift the South African workforce.
          </p>

          <div className="bg-primary text-white p-8 md:p-10 rounded-3xl">
            <p className="text-lg opacity-90 leading-relaxed">
              My mission is simple: <span className="font-bold opacity-100">deliver outstanding value, quality workmanship, and service that customers can depend on.</span>
            </p>
          </div>

          <p>
            Thank you for trusting us with your plumbing needs. We look forward to serving you and becoming your preferred plumbing partner.
          </p>
        </div>
      </main>

      <footer className="bg-secondary text-white/40 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="mb-8 pb-8 border-b border-white/20 w-full">
            <h3 className="text-white text-lg font-bold mb-6">Our Partner Professional</h3>
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center bg-white/10 rounded-lg p-4 h-24">
                <img src={luckysPlumbingLogo} alt="Lucky's Plumbing" className="h-20 object-contain" />
              </div>
            </div>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Service Nexus. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/27734020473?text=Hello%2C%20I%20would%20like%20to%20book%20a%20plumbing%20service." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
