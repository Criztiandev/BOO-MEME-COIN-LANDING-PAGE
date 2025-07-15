import { Heart, Share2 } from "lucide-react";
import { KawaiiButton } from "@/components/ui/kawaii-button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import APP_CONFIG from "@/config/app.config";

export const Navigation = () => {
  // check the current position of the scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollPosition > 0 && "bg-gradient-pink/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full border-4 border-black flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <span className="font-fredoka font-bold text-2xl text-foreground">
              BOO LEGACY
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#story"
              className="relative font-fredoka font-semibold text-foreground transition-all duration-300 group overflow-hidden py-2 px-4 rounded-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                HISTORY
              </span>
              <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            <a
              href="#legacy"
              className="relative font-fredoka font-semibold text-foreground transition-all duration-300 group overflow-hidden py-2 px-4 rounded-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                LEGACY
              </span>
              <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            <a
              href="#memories"
              className="relative font-fredoka font-semibold text-foreground transition-all duration-300 group overflow-hidden py-2 px-4 rounded-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                MEMORIES
              </span>
              <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
            <a
              href="#tribute"
              className="relative font-fredoka font-semibold text-foreground transition-all duration-300 group overflow-hidden py-2 px-4 rounded-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                TRIBUTE
              </span>
              <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
            </a>
          </div>

          {/* CTA Button */}
          <KawaiiButton
            variant="primary"
            size="sm"
            onClick={() => window.open(APP_CONFIG.telegramLink, "_blank")}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Join us in Telegram
          </KawaiiButton>
        </div>
      </div>
    </nav>
  );
};
