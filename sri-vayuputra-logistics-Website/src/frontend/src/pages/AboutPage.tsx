import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { assetUrl } from "@/lib/utils";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Eye,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We do what is right, every time.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    desc: "We deliver on our promises, even in challenging situations.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Every decision is taken keeping client success at the center.",
  },
  {
    icon: Award,
    title: "Commitment",
    desc: "We stand by our clients during emergencies & uncertainty.",
  },
  {
    icon: Zap,
    title: "Operational Excellence",
    desc: "Continuous improvement in processes & performance.",
  },
  {
    icon: Shield,
    title: "Safety & Responsibility",
    desc: "People, assets, and goods are protected at all times.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear communication and accountability in every operation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Adoption of best practices, technology, and modern logistics techniques.",
  },
];

const STRENGTHS = [
  "Proven reliability in critical & high-pressure situations (including COVID-19 operations)",
  "Strong multi-state logistics network across South India",
  "Experienced team in 3PL & 4PL operations",
  "In-house ERP for operational transparency & accuracy",
  "Diverse fleet capabilities – BP, Ad-hoc, Feeder, and micro-delivery systems",
  "Expertise in warehouse operations & manpower deployment",
  "Ability to scale operations rapidly based on client needs",
  "Long-term partnerships with major FMCG & logistics companies",
  "Strong route planning & last-mile operational knowledge",
  "High customer retention through consistent service quality",
];

type Partnership = {
  name: string;
  period: string;
  badge: string;
  bullets: string[];
};

const PARTNERSHIPS: Partnership[] = [
  {
    name: "ITC Limited",
    period: "Since 2016",
    badge: "Flagship Partner",
    bullets: [
      "Long-term transportation services across South Karnataka since 2016.",
      "Managed ITC merchandising warehouse operations at Dabaspet Industrial Area, Bengaluru (Nov 2022 – Feb 2025).",
      "Appointed as ITC RA & FI Vendor since 10 November 2022 — handling Retail Activation & Fabrication Infrastructure.",
      "Fabrication of kiosks, full shop setups, counters, and retail activation works.",
      "Delivery and installation of merchandising infrastructure across South Karnataka outlets.",
    ],
  },
  {
    name: "Rivigo Logistics",
    period: "Dec 2016 – 2020",
    badge: "Network Partner",
    bullets: [
      "Invited by Mr. Munish Garg in December 2016 to join South India logistics network.",
      "Supplied Business Partner transport vehicles, ad-hoc operational vehicles, and feeder network vehicles.",
      "Pioneered early micro-delivery support solutions before industry-wide adoption.",
      "Expanded operations across Whitefield, Mahadevapura, Central (Mysore Road), Jigani, Anugondanahalli, Malur, Hosur, Mangalore, Manipal, Mysore.",
      "Launched franchisee model operations at Belgaum, extending South India reach.",
    ],
  },
  {
    name: "Stellar Innovative Logistics Solutions Pvt Ltd",
    period: "Oct 2019 – 2022",
    badge: "Logistics Partner",
    bullets: [
      "Invited by Mr. Narendra Tiwari in October 2019 to support their South India operations.",
      "Supplied Business Associate vehicles and ad-hoc operation vehicles for daily route coverage.",
      "Managed dedicated feeder transport network for inter-city freight movement.",
      "Deployed warehouse manpower under a dedicated manpower contract for inventory operations.",
      "Operations expanded progressively: Bangalore → Chennai → Tirupur, covering key South India corridors.",
      "Extended support to sister concerns: Annapoorneshwari Logistics and Shri Gopal Logistics.",
    ],
  },
  {
    name: "Rahul Cargo Pvt Ltd (RCPL)",
    period: "Nov 2019 – 2022",
    badge: "Associate Partner",
    bullets: [
      "Invited by Mr. Amarender Singh in November 2019 to support their expanding South India network.",
      "Supplied Business Associate vehicles including Tata Ace, 407, 16FT, and 19FT containers for mixed-load operations.",
      "Operated dedicated feeder vehicles supporting cross-city freight and inter-depot transfers.",
      "Covered key hubs: Hyderabad, Hoskote, Yeshwanthpur, Bommasandra, Makali, and Hosur.",
      "Managed multi-route last-mile delivery operations across Bangalore and Hyderabad metro zones.",
      "Provided emergency vehicle deployment during peak seasons and sudden capacity surges.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section
        className="gradient-hero py-16 lg:py-20"
        data-ocid="about.hero_section"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              About Us
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Our Story &amp; Mission
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Founded in 2016, Sri Vayuputra Logistics has grown into a trusted
              South India logistics partner through operational excellence and
              long-term client relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-background" data-ocid="about.intro_section">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                Our Foundation
              </p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-tight mb-4">
                Built on Trust &amp; Operational Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sri Vayuputra Logistics was founded on{" "}
                <strong>11 November 2016</strong> by{" "}
                <strong>Mr. Srinivas Murthy A</strong> (Sole Proprietor),
                headquartered in Ramanagara, South Bangalore region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, the company has grown into a trusted partner for
                transportation, 3PL/4PL operations, warehouse manpower support,
                and integrated logistics solutions across South India. Since
                November 2025, we have also diversified into PET granule import
                and 20-litre PET bottle distribution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our operations are backed by an in-house ERP system designed to
                manage warehousing, transport planning, billing, and operational
                monitoring with high efficiency.
              </p>
            </div>
            <div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="grid gap-6 md:grid-cols-[auto_1fr] items-center">
                  <div className="flex justify-center md:justify-start">
                    <div className="w-28 h-28 rounded-full overflow-hidden border border-primary/20 shadow-sm">
                      <img
                        src={assetUrl("/assets/images/srinivas-murthy-profile-photo.png")}
                        alt="Mr. Srinivas Murthy A, Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                      <Globe className="w-8 h-8 text-primary" />
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Founder's Note
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      "We don't just move goods; we secure your supply chain under
                      any conditions. Our commitment to reliability and operational
                      excellence has been the cornerstone of every partnership we
                      have built since 2016."
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-4">
                      — Mr. Srinivas Murthy A, Founder &amp; Sole Proprietor
                    </p>
                    <Button asChild className="mt-6">
                      <a
                        href="/vcard.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Founder Digital Card
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-16 bg-muted/30" data-ocid="about.mission_section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Direction
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Mission, Vision &amp; Objectives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Eye,
                label: "Vision",
                content:
                  "To be a trusted and innovation-driven logistics partner across India, recognized for reliability, operational excellence, and long-term value creation.",
              },
              {
                icon: Target,
                label: "Mission",
                content:
                  "Deliver seamless logistics, transportation, and supply chain solutions. Support FMCG and 3PL/4PL partners with consistent, scalable operations and maintain strong client relationships through discipline and accountability.",
              },
              {
                icon: Zap,
                label: "Objectives",
                content:
                  "Strengthen logistics network, expand 3PL/4PL with FMCG leaders, enhance ERP and automation, grow PET trading, and deliver uninterrupted operations even during emergencies.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.mission.${i + 1}`}
              >
                <Card className="h-full bg-card border-border shadow-subtle">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-3">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section
        className="py-16 bg-background"
        data-ocid="about.partnerships_section"
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Key Associations
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Long-Term Partnerships
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PARTNERSHIPS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.partner.${i + 1}`}
              >
                <Card className="h-full bg-card border-border shadow-subtle hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display font-semibold text-base text-foreground">
                        {p.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-xs ml-2 flex-shrink-0"
                      >
                        {p.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-primary font-semibold mb-3">
                      {p.period}
                    </p>
                    <ul className="space-y-1.5">
                      {p.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 30)}
                          className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30" data-ocid="about.values_section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              What We Stand For
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center p-5 rounded-xl bg-card border border-border shadow-subtle"
                data-ocid={`about.value.${i + 1}`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mx-auto mb-3">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section
        className="py-16 bg-background"
        data-ocid="about.strengths_section"
      >
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Capabilities
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Top 10 Company Strengths
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STRENGTHS.map((s, i) => (
              <motion.div
                key={s.slice(0, 20)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border"
                data-ocid={`about.strength.${i + 1}`}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground leading-relaxed">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-14" data-ocid="about.cta_section">
        <div className="container text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Explore our complete service offerings or get in touch to discuss
            your logistics requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth"
              data-ocid="about.services_button"
            >
              <Link to="/services">
                Our Services <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth"
              data-ocid="about.contact_button"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
