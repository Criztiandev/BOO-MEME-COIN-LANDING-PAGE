import { Heart, Quote } from "lucide-react";

const memories = [
  {
    text: "Finally found a meme coin with actual transparency! 0/0 tax and renounced CA - this is how crypto should be.",
    author: "CryptoMike.eth",
    location: "DeFi Veteran",
  },
  {
    text: "Been rugged too many times. BOO's locked liquidity and renounced contract gives me peace of mind.",
    author: "DiamondHands420",
    location: "Meme Coin Hunter",
  },
  {
    text: "The community vibes here are immaculate. BOO brings that wholesome energy crypto needs.",
    author: "Web3Princess",
    location: "NFT Collector",
  },
  {
    text: "1 trillion supply with no taxes? This is the people's coin. WAGMI! 🚀",
    author: "DegenerateApe",
    location: "Yield Farmer",
  },
  {
    text: "Love projects that honor meme culture while being transparent. BOO hits different.",
    author: "MemeQueen2024",
    location: "Content Creator",
  },
  {
    text: "First time I've seen a meme coin with such clean tokenomics. This is the way.",
    author: "SatoshiDisciple",
    location: "Bitcoin Maximalist",
  },
];

export const MemoryWall = () => {
  return (
    <section id="memories" className="py-20 bg-gradient-pink relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-fredoka font-bold text-center text-foreground mb-16">
          COMMUNITY VOICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="card-kawaii bg-card/90 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.15}s`,
                transform: `rotate(${((index % 3) - 1) * 2}deg)`,
              }}
            >
              {/* Polaroid Style */}
              <div className="bg-white p-4 rounded-2xl border-4 border-black">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />

                {/* Memory Text */}
                <p className="font-inter text-foreground leading-relaxed mb-6 italic">
                  "{memory.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-fredoka font-bold text-primary text-lg">
                      {memory.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {memory.location}
                    </p>
                  </div>
                  <Heart className="w-6 h-6 text-primary fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Memory CTA */}
        <div className="mt-16 text-center">
          <div className="card-kawaii bg-card/80 backdrop-blur-sm max-w-md mx-auto">
            <Heart className="w-12 h-12 text-primary fill-current mx-auto mb-4" />
            <h3 className="text-2xl font-fredoka font-bold text-foreground mb-3">
              Join Our Community
            </h3>
            <p className="text-muted-foreground font-inter mb-6">
              Share your BOO experience and connect with fellow holders.
            </p>
            <button className="btn-kawaii btn-primary w-full cursor-pointer">
              Join Telegram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
