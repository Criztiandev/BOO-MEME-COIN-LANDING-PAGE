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
    <section
      id="story"
      className="py-12 sm:py-16 lg:py-20 bg-background relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold text-center text-foreground mb-8 sm:mb-12 lg:mb-16">
          BOO'S INCREDIBLE JOURNEY
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Enhanced for mobile */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-border"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-start sm:items-center mb-8 sm:mb-10 lg:mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node - Enhanced for mobile */}
              <div
                className={`absolute left-2.5 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${event.color} rounded-full border-2 sm:border-3 md:border-4 border-black flex items-center justify-center z-10 mt-2 sm:mt-0`}
              >
                <event.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground" />
              </div>

              {/* Content Card - Enhanced for mobile */}
              <div
                className={`w-full md:w-5/12 ml-12 sm:ml-14 md:ml-0 pr-4 sm:pr-6 md:pr-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="card-kawaii p-4 sm:p-5 md:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-fredoka font-bold text-primary">
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-2xl font-fredoka font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground font-inter leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-specific floating action for better UX */}
        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <p className="text-sm text-muted-foreground font-inter">
            Swipe up to continue exploring Boo's legacy
          </p>
        </div>
      </div>
    </section>
  );
};
