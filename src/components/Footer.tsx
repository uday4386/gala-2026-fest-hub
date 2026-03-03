import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-16 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Branding & Location */}
        <div className="text-center md:text-left space-y-3 max-w-sm">
          <h3 className="font-display text-2xl font-bold text-primary tracking-wider">
            GALA 2K26
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The ultimate blend of Technology, Culture, and Sports at KITS Akshar Institute of Technology.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mt-4">
            <MapPin className="w-4 h-4 text-accent" />
            <span>KITS Campus, Guntur - 522 019</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right space-y-3">
          <h4 className="font-display text-lg font-semibold text-foreground">Contact Us</h4>
          <a
            href="mailto:kitsakshargala2026@gmail.com"
            className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" /> kitsakshargala2026@gmail.com
          </a>
          <div className="flex items-center justify-center md:justify-end gap-4 mt-4 opacity-50">
            {/* Social media icons can go here */}
            {/* <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" /> */}
          </div>
        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-border/50 text-center">
        <p className="text-muted-foreground/60 text-xs tracking-wider uppercase">
          © 2026 All rights reserved. Built with passion by KITS students.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
