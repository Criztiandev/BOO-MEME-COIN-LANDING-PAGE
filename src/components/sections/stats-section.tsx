import { Heart, Star, Camera } from "lucide-react";

const stats = [
  {
    icon: Heart,
    number: "16M",
    label: "Facebook Fans",
    description: "Hearts captured worldwide",
  },
  {
    icon: Camera,
    number: "580K",
    label: "Instagram Followers",
    description: "Daily dose of cuteness",
  },
  {
    icon: Star,
    number: "16.6M",
    label: "Total Likes",
    description: "Across all platforms",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-warm relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-fredoka font-bold text-center text-foreground mb-16">
          BOO'S AMAZING NUMBERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-kawaii text-center hover:bg-secondary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary rounded-full border-4 border-black flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-4xl font-fredoka font-bold text-primary mb-2">
                {stat.number}
              </h3>

              <h4 className="text-xl font-fredoka font-semibold text-foreground mb-2">
                {stat.label}
              </h4>

              <p className="text-muted-foreground font-inter">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
