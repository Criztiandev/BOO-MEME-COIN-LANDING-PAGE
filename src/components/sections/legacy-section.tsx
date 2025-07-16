import APP_CONFIG from "@/config/app.config";
import { Sparkles, Shield, Lock, CheckCircle, Coins } from "lucide-react";

const supplayFormatted = (value: number) => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

const legacyItems = [
  {
    icon: Shield,
    title: "0/0 Tax",
    items: ["Zero Buy Tax", "Zero Sell Tax", "Pure Trading Freedom"],
    color: "bg-primary",
  },
  {
    icon: Lock,
    title: "Liquidity Locked",
    items: [
      "100% Secured",
      "Community Protected",
      "Rug Pull Proof",
      "Trust Guaranteed",
    ],
    color: "bg-secondary",
  },
  {
    icon: CheckCircle,
    title: "CA Renounced",
    items: [
      "Contract Ownership Renounced",
      "Fully Decentralized",
      "Community Controlled",
    ],
    color: "bg-accent",
  },
  {
    icon: Coins,
    title: "1 Trillion Supply",
    items: [
      `Total Supply: ${supplayFormatted(APP_CONFIG.totalSupply)}`,
      "Fixed Maximum",
      "No Inflation Risk",
    ],
    color: "bg-primary",
  },
];

export const LegacySection = () => {
  return (
    <section id="legacy" className="py-20 bg-background relative">
      <div className=" mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-fredoka font-bold text-center text-foreground mb-16">
          BOONOMICS:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {legacyItems.map((item, index) => (
            <div
              key={index}
              className="card-kawaii group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start  space-y-6 md:space-x-6 flex-col md:flex-row ">
                <div
                  className={`w-16 h-16 ${item.color} rounded-full border-4 border-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-fredoka font-bold text-foreground mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2">
                    {item.items.map((listItem, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center space-x-3"
                      >
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-inter text-muted-foreground break-words">
                          {listItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="card-kawaii bg-gradient-warm max-w-2xl mx-auto">
            <h3 className="text-3xl font-fredoka font-bold text-foreground mb-6">
              The Numbers Don't Lie
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-fredoka font-bold text-primary">
                  0%
                </div>
                <div className="text-sm text-muted-foreground">Trading Tax</div>
              </div>
              <div>
                <Coins className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-fredoka font-bold text-secondary">
                  1T
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Supply
                </div>
              </div>
              <div>
                <Lock className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-fredoka font-bold text-accent">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Locked LP</div>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-fredoka font-bold text-primary">
                  ✓
                </div>
                <div className="text-sm text-muted-foreground">
                  CA Renounced
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
