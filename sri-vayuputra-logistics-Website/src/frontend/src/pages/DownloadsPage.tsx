import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Award, Download, FileText, Shield } from "lucide-react";
import { motion } from "motion/react";
import { assetUrl } from "@/lib/utils";

const DOWNLOADS = [
  {
    icon: FileText,
    title: "Company Profile",
    desc: "Complete company profile with services, network coverage, client partnerships, and operational capabilities.",
    type: "PDF Document",
    size: "~2 MB",
    badge: "Official",
    filename: "SriVayuputra-Company-Profile.pdf",
  },
  {
    icon: Shield,
    title: "GST Certificate",
    desc: "Government of India GST registration certificate confirming our tax compliance and legitimacy.",
    type: "PDF Certificate",
    size: "~500 KB",
    badge: "Legal",
    filename: "SriVayuputra-GST-Certificate.pdf",
  },
  {
    icon: Award,
    title: "MSME Certificate",
    desc: "Ministry of Micro, Small & Medium Enterprises (MSME/Udyam) registration certificate.",
    type: "PDF Certificate",
    size: "~400 KB",
    badge: "Legal",
    filename: "SriVayuputra-MSME-Certificate.pdf",
  },
];

export default function DownloadsPage() {
  return (
    <div data-ocid="downloads.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Downloads
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Document Downloads
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Download our company profile, certificates, and official documents
              for vendor onboarding and due diligence.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="downloads.list_section"
      >
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOWNLOADS.map((doc, i) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`downloads.item.${i + 1}`}
              >
                <Card className="h-full bg-card border-border shadow-subtle hover-lift">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <doc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {doc.badge}
                      </Badge>
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {doc.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground border-primary/30 text-primary"
                      data-ocid={`downloads.download_button.${i + 1}`}
                    >
                      <a
                        href={assetUrl(`/assets/downloads/${doc.filename}`)}
                        download={doc.filename}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-muted/40 rounded-xl p-6 border border-border text-center">
            <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-display font-semibold text-base text-foreground mb-2">
              Need Additional Documents?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              For vendor onboarding, audits, or additional certifications,
              contact us directly.
            </p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="transition-smooth"
              data-ocid="downloads.contact_button"
            >
              <Link to="/contact">Request Documents</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
