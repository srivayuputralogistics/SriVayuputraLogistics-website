import { Link } from "@tanstack/react-router";
import { Award, ExternalLink, Hash, Mail, MapPin, Phone } from "lucide-react";
import { assetUrl } from "@/lib/utils";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Network", href: "/network" },
  { label: "Timeline", href: "/timeline" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
] as const;

const SERVICES = [
  { label: "Transportation", href: "/services" },
  { label: "3PL & 4PL Operations", href: "/services" },
  { label: "Warehouse Management", href: "/services" },
  { label: "PET Trading", href: "/services" },
  { label: "Retail Fabrication", href: "/services" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={assetUrl("/assets/images/Gemini_Generated_Image_7zhbcc7zhbcc7zhb.png")}
                alt="Sri Vayuputra Logistics Logo"
                className="w-9 h-9 rounded-full flex-shrink-0 object-cover"
              />
              <div>
                <div className="font-display font-bold text-sm leading-tight">
                  Sri Vayuputra Logistics
                </div>
                <div className="text-xs text-muted-foreground">Since 2016</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Trusted logistics partner delivering 3PL/4PL solutions,
              transportation, and warehouse operations across South India.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  No.2729/48, Next to Pavithra School, 
                  Kumarswamy Layout, Rayaradoddi,
                  <br />
                  Ramanagara-562159, Bangalore South
                  Karnataka
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+91 83100 00628"
                  className="hover:text-foreground transition-smooth"
                >
                  +91 83100 00628
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span>srivayuputralogistics@hotmail.com</span>
                  <span>srivayuputralogistics@outlook.com</span>
                  <span>srivayuputralogistics@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-primary flex-shrink-0" />
                <span>GSTIN: 29DVKPS5115N2ZR</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary flex-shrink-0" />
                <span>MSME: UDYAM-KR-29-0007075</span>
              </div>
            </div>
          </div>


          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-foreground mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-foreground mb-4">
              Operations
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Karnataka (Primary)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Tamil Nadu
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Andhra Pradesh
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Telangana
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                Kerala (Selective)
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/financial-performance"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                data-ocid="footer.financials_link"
              >
                View Financial Performance <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-muted/40">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-muted-foreground">
          <span>© {year} Sri Vayuputra Logistics. All rights reserved. GST &amp; MSME Registered.</span>
          <span>Developed By - SURAJ S PRASAD</span>
        </div>
      </div>
    </footer>
  );
}
