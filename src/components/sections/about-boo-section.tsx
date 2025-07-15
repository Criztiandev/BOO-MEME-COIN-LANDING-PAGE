import { Heart, Star } from "lucide-react";

export const AboutBooSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-warm relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-fredoka font-bold text-foreground mb-6">
            Meet Boo
          </h2>

          <p className="text-xl md:text-2xl font-fredoka text-muted-foreground mb-12 max-w-3xl mx-auto">
            The most charming four-legged legend to ever grace the internet.
          </p>
        </div>

        {/* Main Visual Frame */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card-kawaii bg-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Frame - Classic Boo */}
              <div className="relative group">
                <div className="character-frame aspect-square bg-gradient-pink/20 backdrop-blur-sm p-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl mb-4">🐕</div>
                    <div className="absolute inset-4 border-4 border-primary/30  opacity-50"></div>
                    <div className="absolute top-8 right-8">
                      <Heart className="w-8 h-8 text-primary fill-current float-gentle" />
                    </div>
                    <div className="absolute bottom-8 left-8">
                      <Star className="w-6 h-6 text-accent float-gentle" />
                    </div>
                  </div>
                  {/* Image placeholder - you can replace with actual Boo image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10  m-4 flex items-center justify-center">
                    <span className="text-primary/40 font-fredoka font-bold text-lg">
                      Image Here
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Frame - Viral Boo */}
              <div className="relative group">
                <div className="character-frame aspect-square bg-gradient-pink/20 backdrop-blur-sm p-6 flex items-center justify-center overflow-hidden border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10  m-4 flex items-center justify-center">
                    <span className="text-primary/40 font-fredoka font-bold text-lg">
                      Image Here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl font-inter text-foreground leading-relaxed mb-6">
            Born with a big attitude in a tiny body, Boo wasn't just a
            Pomeranian; he was a lifestyle, a flex, a walking meme. From
            lounging in luxury to giving side-eyes that rival your favorite
            influencers, Boo captured hearts on the internet - and now he's
            capturing the digital world.
          </p>

          <p className="text-base md:text-lg font-inter text-muted-foreground leading-relaxed">
            <strong>BOO</strong> is more than a memecoin. It's a tribute to the
            unapologetic confidence, sass, and virality of a pup who lives
            rent-free in every swag, pout, and paw-step. Boo screams "main
            character energy" - and that's exactly what this token brings to
            crypto culture.
          </p>
        </div>

        {/* Memorial Quote */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="card-kawaii bg-gradient-pink/20 backdrop-blur-sm text-center">
            <div className="text-6xl mb-6">🐾</div>
            <blockquote className="text-2xl md:text-3xl font-fredoka font-bold text-foreground mb-6 italic">
              "Small dog, big heart, endless joy"
            </blockquote>
            <div className="flex justify-center items-center space-x-4">
              <Heart className="w-6 h-6 text-primary fill-current" />
              <span className="font-inter text-muted-foreground">
                2006 - 2019 • Forever in our hearts
              </span>
              <Heart className="w-6 h-6 text-primary fill-current" />
            </div>
          </div>
        </div> */}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart
          className="absolute top-20 left-10 w-8 h-8 text-primary/20 fill-current float-gentle"
          style={{ animationDelay: "0s" }}
        />
        <Star
          className="absolute top-40 right-16 w-6 h-6 text-accent/30 float-gentle"
          style={{ animationDelay: "2s" }}
        />
        <Heart
          className="absolute bottom-32 left-20 w-6 h-6 text-secondary/25 fill-current float-gentle"
          style={{ animationDelay: "4s" }}
        />
        <Star
          className="absolute bottom-60 right-10 w-8 h-8 text-primary/20 float-gentle"
          style={{ animationDelay: "1s" }}
        />
        <Heart
          className="absolute top-60 left-1/2 w-4 h-4 text-accent/25 fill-current float-gentle"
          style={{ animationDelay: "3s" }}
        />
      </div>
    </section>
  );
};
