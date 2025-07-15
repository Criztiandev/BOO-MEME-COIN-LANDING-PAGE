import { Camera, Book, Heart, Star } from "lucide-react";

const timelineEvents = [
  {
    year: "2010",
    title: "The Teddy Bear Cut",
    description:
      "Boo gets his famous teddy bear haircut that would change internet history forever.",
    icon: Heart,
    color: "bg-primary",
  },
  {
    year: "2010",
    title: "First Viral Photo",
    description:
      "A simple photo of Boo goes viral, capturing hearts around the world instantly.",
    icon: Camera,
    color: "bg-secondary",
  },
  {
    year: "2011",
    title: "Facebook Fame",
    description:
      "Boo's Facebook page explodes, gaining millions of followers in record time.",
    icon: Star,
    color: "bg-accent",
  },
  {
    year: "2011",
    title: "Book Deal",
    description:
      '"Boo: The Life of the World\'s Cutest Dog" becomes a bestseller.',
    icon: Book,
    color: "bg-primary",
  },
  {
    year: "2012-2019",
    title: "Global Icon",
    description:
      "Boo becomes a merchandise empire, spreading joy through plush toys and appearances.",
    icon: Heart,
    color: "bg-secondary",
  },
];

export const StoryTimeline = () => {
  return (
    <section id="story" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-fredoka font-bold text-center text-foreground mb-16">
          BOO'S INCREDIBLE JOURNEY
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 ${event.color} rounded-full border-4 border-black flex items-center justify-center z-10`}
              >
                <event.icon className="w-6 h-6 text-foreground" />
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="card-kawaii">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-fredoka font-bold text-primary">
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-fredoka font-bold text-foreground mb-3">
                    {event.title}
                  </h3>

                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
