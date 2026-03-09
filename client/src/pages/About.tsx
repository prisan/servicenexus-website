import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowLeft,
  Users,
  ShieldCheck,
  Zap
} from "lucide-react";
import imgLogo from "@/assets/service_nexus_logo.png";
import zapCleanLogo from "@/assets/final_01.png";
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

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-secondary mb-6">About Service Nexus</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connecting Johannesburg to trusted maintenance professionals.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-12 text-muted-foreground">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Our Story</h2>
            <p>
              Service Nexus was founded with a clear purpose: to simplify the way customers access trusted household and property maintenance services. After experiencing firsthand how difficult it can be to find reliable, professional service providers in Johannesburg, we recognised a gap in the market. Skilled SME businesses were available but difficult to find, inconsistent in communication, or lacking a strong digital presence.
            </p>
            <p className="mt-4">
              At the same time, customers were looking for accountability, quality assurance, and fair pricing. Service Nexus bridges that gap. We carefully screen and vet every service provider on our platform, assessing not only the quality of their work, but also their professionalism, reliability, and customer interaction. Our focus is on partnering with small and medium-sized businesses that take pride in their craft and deliver exceptional results.
            </p>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h2 className="text-3xl font-display font-bold text-secondary mb-8">What Makes Us Different</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md bg-muted/30">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">End-to-End Management</h3>
                  <p className="text-sm">We manage the process from booking to completion, ensuring clear communication, quality control, and peace of mind.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-muted/30">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">Quality Over Quantity</h3>
                  <p className="text-sm">We prioritise trusted, proven professionals rather than listing hundreds of unverified contractors.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-muted/30">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">Empowering SMEs</h3>
                  <p className="text-sm">We provide skilled service providers with access to a professional online presence and a steady stream of clients.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-primary text-white p-8 md:p-12 rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              To create a trusted marketplace where customers receive reliable, high-quality service at fair prices and where SME service providers are given the opportunity to grow sustainably. Service Nexus stands for professionalism, accountability, and seamless service delivery.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-secondary text-white/40 py-12 text-center">
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
          <p className="text-sm">&copy; {new Date().getFullYear()} Service Nexus. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/27725767964" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}