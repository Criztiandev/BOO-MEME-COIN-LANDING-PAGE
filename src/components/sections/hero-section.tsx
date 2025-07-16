import { Heart, Star, Sparkles } from "lucide-react";
import { KawaiiButton } from "@/components/ui/kawaii-button";
import { useState } from "react";
import ExplosionEffect from "@/components/ui/explosion-effect";
import APP_CONFIG from "@/config/app.config";

export const HeroSection = () => {
  const [explodingIcons, setExplodingIcons] = useState({
    heart: false,
    star: false,
    sparkles: false,
  });

  const handleIconClick = (iconType: "heart" | "star" | "sparkles") => {
    setExplodingIcons((prev) => ({ ...prev, [iconType]: true }));
  };

  const handleExplosionEnd = (iconType: "heart" | "star" | "sparkles") => {
    setExplodingIcons((prev) => ({ ...prev, [iconType]: false }));
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden pt-24">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star
          className="absolute top-20 left-20 w-8 h-8 text-accent float-gentle"
          style={{ animationDelay: "0s" }}
        />
        <Heart
          className="absolute top-32 right-32 w-6 h-6 text-primary float-gentle fill-current"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute bottom-40 left-32 w-10 h-10 text-secondary float-gentle"
          style={{ animationDelay: "4s" }}
        />
        <Star
          className="absolute bottom-60 right-20 w-6 h-6 text-accent float-gentle"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="mx-auto px-6 h-full flex flex-col justify-center relative  mt-6">
        {/* Main Content */}
        <div className="text-center mb-16 bounce-in">
          {/* Main Headline */}
          <h1 className=" !text-[52px] md:!text-8xl font-fredoka font-bold  text-stroke mb-6 text-foreground">
            THE WORLD'S
            <br />
            <span className="">CUTEST DOG</span>
          </h1>

          {/* Subtitle */}
          <p className="!text-xl md:!text-3xl font-fredoka font-semibold  mb-8 max-w-4xl mx-auto text-black">
            Boo - The Pomeranian Who Captured 17 Million Hearts
          </p>

          {/* CTA Button */}
          <div className="relative inline-block">
            <KawaiiButton
              variant="primary"
              size="lg"
              className="bounce-in relative"
              style={{ animationDelay: "0.5s" }}
              onClick={() => handleIconClick("heart")}
            >
              <Heart className="w-6 h-6 mr-3 fill-current" />
              {APP_CONFIG.env === "PRODUCTION"
                ? APP_CONFIG.contractAddress
                : "Coming Soon"}
            </KawaiiButton>
            <ExplosionEffect
              iconType="heart"
              isExploding={explodingIcons.heart}
              onExplosionEnd={() => handleExplosionEnd("heart")}
            />
          </div>
        </div>

        {/* Character Placement */}
        <div className="flex justify-between items-center relative">
          {/* Left Character */}
          <div
            className="absolute left-8 md:left-20 top-0   lg:-top-24  bounce-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="character-frame w-32 md:w-42 lg:w-64 xl:w-64 h-32 md:h-42 lg:h-64 xl:h-64 bg-card rounded-full overflow-hidden">
              <img
                src={"/images/hero-image-1.jpg"}
                alt="Boo with sunglasses"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating speech bubble */}
            <div className="absolute -top-8 -right-4 bg-card border-4 border-black rounded-2xl px-4 py-2 float-gentle">
              <p className="text-sm font-fredoka font-bold text-foreground">
                Cool!
              </p>
            </div>
          </div>

          {/* Right Character */}
          <div
            className="absolute right-8 md:right-20 lg:right-20 xl:right-20 top-0 lg:-top-24 bounce-in "
            style={{ animationDelay: "1.5s" }}
          >
            <div className="character-frame w-32 md:w-42 lg:w-64 xl:w-64 h-32 md:h-42 lg:h-64 xl:h-64 bg-card rounded-full overflow-hidden">
              <img
                src={"/images/logo.jpg"}
                alt="Happy Boo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating hearts */}
            <div className="absolute -top-6 left-2">
              <Heart
                className="w-4 h-4 text-primary fill-current float-gentle"
                style={{ animationDelay: "0.5s" }}
              />
              <Heart
                className="w-3 h-3 text-secondary fill-current float-gentle ml-2"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        <div
          className="w-14 h-14 bg-card border-4 border-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative"
          onClick={() => handleIconClick("heart")}
        >
          <Heart className="w-6 h-6 text-primary" />
          <ExplosionEffect
            iconType="heart"
            isExploding={explodingIcons.heart}
            onExplosionEnd={() => handleExplosionEnd("heart")}
          />
        </div>
        <div
          className="w-14 h-14 bg-card border-4 border-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative"
          onClick={() => handleIconClick("star")}
        >
          <Star className="w-6 h-6 text-accent" />
          <ExplosionEffect
            iconType="star"
            isExploding={explodingIcons.star}
            onExplosionEnd={() => handleExplosionEnd("star")}
          />
        </div>
        <div
          className="w-14 h-14 bg-card border-4 border-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative"
          onClick={() => handleIconClick("sparkles")}
        >
          <Sparkles className="w-6 h-6 text-secondary" />
          <ExplosionEffect
            iconType="sparkles"
            isExploding={explodingIcons.sparkles}
            onExplosionEnd={() => handleExplosionEnd("sparkles")}
          />
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-4 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="inline-block px-8 font-fredoka font-bold text-2xl">
            💖 BOO LEGACY 💖 THE WORLD'S CUTEST DOG 💖 17 MILLION HEARTS 💖 BOO
            LEGACY 💖 THE WORLD'S CUTEST DOG 💖 17 MILLION HEARTS 💖
          </span>
        </div>
      </div>
    </section>
  );
};
