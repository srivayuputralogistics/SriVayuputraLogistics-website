import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { assetUrl } from "@/lib/utils";

const STATES = [
  {
    name: "Karnataka",
    status: "Primary Hub",
    strength: 100,
    desc: "Our home state with the strongest network. Operations spanning Bengaluru, Ramanagara, Whitefield, Mahadevapura, Jigani, Anugondanahalli, Malur, Hosur, Mangalore, Manipal, Mysore, and Belgaum.",
    hubs: [
      "Bengaluru (Multiple Zones)",
      "Whitefield",
      "Mahadevapura",
      "Jigani",
      "Anugondanahalli",
      "Malur",
      "Hosur",
      "Mangalore",
      "Manipal",
      "Mysore",
      "Belgaum",
    ],
  },
  {
    name: "Tamil Nadu",
    status: "Strong Presence",
    strength: 82,
    desc: "Active operations through Stellar Innovative and RCPL partnerships. Primary hubs in Chennai, Tirupur, Coimbatore, and Hosur (cross-border).",
    hubs: ["Chennai", "Tirupur", "Coimbatore", "Hosur (Cross-border)"],
  },
  {
    name: "Andhra Pradesh",
    status: "Strong Presence",
    strength: 79,
    desc: "Coverage through RCPL and feeder route operations. Key cities: Hyderabad (cross-border), Kurnool, and parts of Rayalaseema.",
    hubs: ["Hyderabad (AP side)", "Kurnool"],
  },
  {
    name: "Telangana",
    status: "Strong Presence",
    strength: 76,
    desc: "RCPL Hyderabad operations form the backbone of our Telangana presence. Key hub: Hyderabad, Secunderabad.",
    hubs: ["Hyderabad", "Secunderabad"],
  },
  {
    name: "Kerala",
    status: "Selective / On-Demand",
    strength: 63,
    desc: "Average operational capability with selective route support. Available for emergency or project-based logistics assignments.",
    hubs: ["Kochi (project basis)", "Thrissur (selective)"],
  },
];

export default function NetworkPage() {
  const [activeState, setActiveState] = useState<string | null>(null);
  const activeData = STATES.find((s) => s.name === activeState);

  return (
    <div data-ocid="network.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Network
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Our Geographical Network
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Strong logistics presence across 5 South Indian states — with
              Karnataka as our operational heartland and growing reach into
              Tamil Nadu, Andhra Pradesh, Telangana, and Kerala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview strip */}
      <section className="py-12 bg-primary/5 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {STATES.map((s, i) => (
              <div
                key={s.name}
                className="text-center"
                data-ocid={`network.state_summary.${i + 1}`}
              >
                <div className="font-display font-bold text-2xl text-primary mb-1">
                  {s.strength}%
                </div>
                <div className="font-semibold text-sm text-foreground">
                  {s.name}
                </div>
                <div className="text-xs text-muted-foreground">{s.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section
        className="py-16 lg:py-20 bg-muted/30"
        data-ocid="network.map_section"
      >
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
              Interactive Map
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Our Logistics Network Across India
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Select a state below to view operational details and hubs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl border border-border shadow-subtle p-4"
            >
              <img
                src={assetUrl("/assets/images/Network-India-Map.jpg")}
                alt="India map showing Sri Vayuputra Logistics operational states across South India"
                className="w-full object-contain rounded-lg"
                style={{ maxHeight: "480px" }}
              />
              <p className="text-xs text-muted-foreground text-center mt-3 pt-3 border-t border-border">
                Highlighted: our operational states across South India
              </p>
            </motion.div>

            {/* Detail card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {activeData ? (
                <Card
                  className="bg-card border-border shadow-elevated"
                  data-ocid="network.map_detail"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {activeData.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs mt-0.5">
                          {activeData.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${activeData.strength}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {activeData.strength}%
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {activeData.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeData.hubs.map((hub) => (
                        <div
                          key={hub}
                          className="flex items-center gap-1.5 bg-muted/60 rounded-md px-2.5 py-1"
                        >
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-xs font-medium text-foreground">
                            {hub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div
                  className="flex flex-col items-center justify-center h-64 rounded-xl border border-dashed border-border bg-card text-center p-6"
                  data-ocid="network.map_placeholder"
                >
                  <MapPin className="w-10 h-10 text-muted-foreground mb-3 opacity-40" />
                  <p className="font-semibold text-foreground text-sm mb-1">
                    Select a State
                  </p>
                  <p className="text-muted-foreground text-xs max-w-[200px]">
                    Hover over any highlighted state on the map to view
                    operational details and hubs.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {STATES.map((s) => (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => setActiveState(s.name)}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                        data-ocid={`network.state_pill.${STATES.indexOf(s) + 1}`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* State Detail Cards */}
      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="network.states_section"
      >
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-8">
            {STATES.map((state, i) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`network.state.${i + 1}`}
              >
                <Card className="bg-card border-border shadow-subtle hover-lift">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-display font-bold text-xl text-foreground">
                            {state.name}
                          </h2>
                          <Badge
                            variant={
                              state.strength >= 80
                                ? "default"
                                : state.strength >= 60
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs mt-0.5"
                          >
                            {state.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 min-w-[180px]">
                        <div className="flex-1 h-2.5 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${state.strength}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-primary">
                          {state.strength}%
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {state.desc}
                    </p>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                        Operational Hubs
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {state.hubs.map((hub) => (
                          <div
                            key={hub}
                            className="flex items-center gap-1.5 bg-muted/60 rounded-md px-2.5 py-1"
                          >
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-xs font-medium text-foreground">
                              {hub}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Statement */}
      <section
        className="py-14 bg-muted/30"
        data-ocid="network.operations_section"
      >
        <div className="container max-w-3xl text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            Emergency &amp; Specialized Support
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Beyond our primary network, we have provided operational support to
            several companies during peak demand, route blockages, and emergency
            scenarios — including Nasit Logistics, Sical Logistics, Snapdeal,
            GATI-Kintetsu Express, Transport India 3PL, Tech Route Logistics,
            and Reach Logistics Pvt Ltd.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Nasit Logistics",
              "Sical Logistics",
              "Snapdeal",
              "GATI-Kintetsu",
              "Transport India 3PL",
              "Tech Route Logistics",
              "Reach Logistics",
            ].map((c) => (
              <Badge key={c} variant="secondary" className="text-xs">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
