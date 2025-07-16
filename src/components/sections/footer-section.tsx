import { Heart, Star, Twitter } from "lucide-react";
import { KawaiiButton } from "../ui/kawaii-button";
import APP_CONFIG from "@/config/app.config";

export const FooterSection = () => {
  return (
    <footer id="tribute" className="bg-gradient-hero relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20 text-center relative">
        {/* Thank You Message */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:!text-7xl  text-foreground  mb-8">
            JOIN THE
            <br />
            <span className="text-primary">BOO REVOLUTION</span>
          </h2>

          <p className="text-xl md:text-2xl font-fredoka text-black mb-8 leading-relaxed">
            More than just a meme coin - BOO represents transparency, community,
            and the spirit of decentralized finance. Join us in building
            something special.
          </p>

          <div className="text-lg font-inter text-black mb-8">
            <strong>Contract Address</strong>
            <br />
            {APP_CONFIG.contractAddress}
          </div>
        </div>

        {/* Memorial Actions */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          {APP_CONFIG.env === "PRODUCTION" ? (
            <KawaiiButton variant="primary" size="lg">
              <Heart className="w-6 h-6 mr-3 fill-current" />
              BUY BOO
            </KawaiiButton>
          ) : null}

          <div className="cursor-pointer">
            <KawaiiButton
              variant="accent"
              size="lg"
              onClick={() => window.open(APP_CONFIG.telegramLink, "_blank")}
            >
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-3" />
                JOIN TELEGRAM
              </div>
            </KawaiiButton>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href={APP_CONFIG.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 bg-card border-4 border-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Twitter className="w-8 h-8 text-blue-500" />
            </div>
          </a>
        </div>

        {/* Memorial Quote */}
        <div className="card-kawaii bg-card/80 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🐕</div>
          <blockquote className="text-xl font-inter italic text-foreground leading-relaxed">
            "In the spirit of Boo - bringing joy, transparency, and community
            together in the decentralized world. WAGMI!"
          </blockquote>
          <div className="mt-4 text-primary font-fredoka font-bold">
            - The BOO Community
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-foreground text-background py-6 border-t-4 border-black">
        <div className="container mx-auto px-6 text-center">
          <p className="font-inter">
            © 2024 BOO Token • Built with 💖 by the Community
          </p>
        </div>
      </div>

      {/* Floating Memorial Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart
          className="absolute top-20 left-20 w-6 h-6 text-primary fill-current float-gentle opacity-50"
          style={{ animationDelay: "0s" }}
        />
        <Star
          className="absolute top-40 right-32 w-8 h-8 text-accent float-gentle opacity-30"
          style={{ animationDelay: "2s" }}
        />
        <Heart
          className="absolute bottom-40 left-16 w-4 h-4 text-secondary fill-current float-gentle opacity-40"
          style={{ animationDelay: "4s" }}
        />
        <Star
          className="absolute bottom-60 right-20 w-6 h-6 text-primary float-gentle opacity-20"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </footer>
  );
};
