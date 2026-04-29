import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { assetUrl } from "@/lib/utils";
import {
  Award,
  BarChart3,
  ChevronRight,
  Clock,
  Globe,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Animated Counter
function Counter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
}: { end: number; suffix?: string; prefix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (end / duration) * 16;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start * 10 ** decimals) / 10 ** decimals);
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    label: "Cumulative Gross Turnover",
    value: 11.7,
    suffix: " Cr+",
    prefix: "₹",
    decimals: 2,
    icon: BarChart3,
  },
  {
    label: "Years of Leadership",
    value: 9,
    suffix: "+",
    prefix: "",
    decimals: 0,
    icon: Clock,
  },
  {
    label: "States Covered",
    value: 5,
    suffix: "",
    prefix: "",
    decimals: 0,
    icon: MapPin,
  },
  {
    label: "Enterprise Clients",
    value: 20,
    suffix: "+",
    prefix: "",
    decimals: 0,
    icon: Users,
  },
  {
    label: "Scalable Manpower",
    value: 10,
    suffix: "+",
    prefix: "",
    decimals: 0,
    icon: Users,
  },
];

const SERVICES = [
  {
    icon: Truck,
    title: "Transportation Services",
    desc: "Feeder, last-mile, and urgent vehicle deployment from Tata Ace to 32FT MXL.",
    href: "/services",
  },
  {
    icon: Globe,
    title: "3PL & 4PL Operations",
    desc: "Integrated planning and execution for FMCG leaders across South India.",
    href: "/services",
  },
  {
    icon: Warehouse,
    title: "Warehouse Management",
    desc: "Professional manpower supply, inventory movement, and operational control.",
    href: "/services",
  },
  {
    icon: Package,
    title: "PET Trading",
    desc: "Import of PET granules and wholesale distribution of 20-litre PET bottles.",
    href: "/services",
  },
  {
    icon: BarChart3,
    title: "Business Development",
    desc: "Generating customers, loads, and operational growth for partnered logistics firms.",
    href: "/business-activities",
  },
  {
    icon: ShieldCheck,
    title: "Retail Fabrication",
    desc: "Kiosk fabrication, full shop setups, counters, and RA/FI infrastructure works.",
    href: "/services",
  },
];

const WHY_CHOOSE = [
  {
    icon: Globe,
    title: "Strong Regional Network",
    desc: "5-state logistics network with proven hubs across Karnataka, TN, AP, and Telangana.",
  },
  {
    icon: Zap,
    title: "ERP-Driven Operations",
    desc: "In-house ERP for warehouse, transport planning, billing, and operational monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "Crisis-Proven Reliability",
    desc: "Uninterrupted supply chain continuity even through COVID-19 and emergencies.",
  },
  {
    icon: Award,
    title: "FMCG Industry Trust",
    desc: "Long-term associations with ITC, Mahindra Logistics (Rivigo), Stellar, and RCPL.",
  },
];

export default function HomePage() {
  return (
    <div data-ocid="home.page">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center overflow-hidden"
        data-ocid="home.hero_section"
      >
        <div className="absolute inset-0">
          <img
            src={assetUrl("/assets/generated/hero-logistics.dim_1400x700.jpg")}
            alt="Sri Vayuputra Logistics fleet at modern warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-85" />
        </div>
        <div className="relative container py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm font-body text-xs tracking-widest uppercase">
              Trusted Since 2016
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5">
              Reliable Logistics &amp; 3PL/4PL Solutions Across South India
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Empowering supply chains with efficient transportation, warehouse
              operations, and integrated logistics support since 2016.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-elevated transition-smooth"
                data-ocid="home.hero_contact_button"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-elevated transition-smooth"
                data-ocid="home.hero_services_button"
              >
                <Link to="/services">
                  Explore Services <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-10" data-ocid="home.stats_section">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
                data-ocid={`home.stat.${i + 1}`}
              >
                <stat.icon className="w-6 h-6 text-white/70 mx-auto mb-2" />
                <div className="font-display font-bold text-3xl text-white leading-none mb-1">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-white/75 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="home.about_section"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              About Us
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight tracking-tight mb-5">
              South India's Trusted Logistics Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sri Vayuputra Logistics is a multi-service logistics organization
              headquartered in the South Bangalore region (Ramanagara). Founded
              on 11 November 2016 by <strong>Mr. Srinivas Murthy A</strong>, we
              deliver transportation, 3PL/4PL services, warehouse operations,
              and PET trading solutions across Karnataka and South India. Backed
              by an in-house ERP system and long-term partnerships with ITC,
              Mahindra Logistics, and more.
            </p>
            <Button asChild variant="outline" data-ocid="home.about_cta_button">
              <Link to="/about">
                Learn Our Story <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-16 lg:py-20 bg-muted/30"
        data-ocid="home.services_section"
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              What We Do
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
              Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                data-ocid={`home.service.${i + 1}`}
              >
                <Card className="hover-lift h-full bg-card border-border shadow-subtle">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                    >
                      Learn more <ChevronRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              data-ocid="home.all_services_button"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Network Highlights */}
      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="home.network_section"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text + state bars */}
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                Our Reach
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight tracking-tight mb-5">
                Strong Multi-State Network
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With primary operations in Karnataka and strong service
                capability across Tamil Nadu, Andhra Pradesh, and Telangana — we
                are positioned to support your supply chain wherever it goes in
                South India.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { state: "Karnataka", level: "Primary Hub", strength: 100 },
                  { state: "Tamil Nadu", level: "Strong", strength: 85 },
                  { state: "Andhra Pradesh", level: "Strong", strength: 80 },
                  { state: "Telangana", level: "Strong", strength: 75 },
                  { state: "Kerala", level: "Selective", strength: 50 },
                ].map((s) => (
                  <div key={s.state} className="bg-muted/50 rounded-lg p-3">
                    <div className="font-medium text-sm text-foreground">
                      {s.state}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {s.level}
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-smooth"
                        style={{ width: `${s.strength}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-8"
                data-ocid="home.network_cta_button"
              >
                <Link to="/network">Explore Network</Link>
              </Button>
            </div>

            {/* India Map Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="bg-card rounded-2xl border border-border shadow-subtle p-4 w-full max-w-sm mx-auto">
                <img
                  src={assetUrl("/assets/images/Network-India-Map.jpg")}
                  alt="India map showing Sri Vayuputra Logistics operational states"
                  className="w-full object-contain rounded-lg"
                  style={{ maxHeight: "380px" }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Highlighted: our operational states across South India
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 lg:py-20 bg-muted/30"
        data-ocid="home.why_section"
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Why Us
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
              Why Choose Sri Vayuputra Logistics?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border shadow-subtle"
                data-ocid={`home.why.${i + 1}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-hero py-14" data-ocid="home.cta_section">
        <div className="container text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
            Looking for a Reliable Logistics Partner?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our team is ready to support your supply chain needs — from urgent
            vehicle deployment to long-term 3PL contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold transition-smooth"
              data-ocid="home.cta_contact_button"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <a
              href="https://wa.me/918310000628?text=Hello%2C%20I%20am%20looking%20for%20logistics%20services."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.cta_whatsapp_button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[var(--whatsapp)] text-white hover:opacity-90 transition-smooth shadow-elevated"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-white"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
