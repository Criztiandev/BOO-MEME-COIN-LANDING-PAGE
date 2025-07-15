import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

interface ExplosionEffectProps {
  iconType: "heart" | "star" | "sparkles";
  isExploding: boolean;
  onExplosionEnd: () => void;
}

const iconComponents = {
  heart: Heart,
  star: Star,
  sparkles: Sparkles,
};

const colorMap = {
  heart: ["#ff6b9d", "#f06292", "#e91e63", "#c2185b"],
  star: ["#ffd54f", "#ffcc02", "#ffb300", "#ff8f00"],
  sparkles: ["#ff80ab", "#f8bbd9", "#f48fb1", "#f06292"],
};

const ExplosionEffect: React.FC<ExplosionEffectProps> = ({
  iconType,
  isExploding,
  onExplosionEnd,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  React.useEffect(() => {
    if (isExploding) {
      generateParticles();
    }
  }, [isExploding]);

  const generateParticles = () => {
    const newParticles: Particle[] = [];
    const colors = colorMap[iconType];

    // Generate 12-15 particles for a rich explosion
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2;
      const distance = Math.random() * 60 + 40; // 40-100px spread
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      newParticles.push({
        id: i,
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4, // 4-12px size
        delay: Math.random() * 0.1, // Slight delay variation
      });
    }

    setParticles(newParticles);

    // Clear particles and call onExplosionEnd after animation
    setTimeout(() => {
      setParticles([]);
      onExplosionEnd();
    }, 800);
  };

  const IconComponent = iconComponents[iconType];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute top-1/2 left-1/2"
            initial={{
              x: -particle.size / 2,
              y: -particle.size / 2,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: particle.x - particle.size / 2,
              y: particle.y - particle.size / 2,
              scale: [0, 1.2, 0],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.8,
              delay: particle.delay,
              ease: "easeOut",
            }}
            style={{
              width: particle.size,
              height: particle.size,
            }}
          >
            <IconComponent
              className="w-full h-full fill-current"
              style={{ color: particle.color }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Center burst effect */}
      <AnimatePresence>
        {isExploding && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <IconComponent
              className="w-8 h-8 fill-current"
              style={{ color: colorMap[iconType][0] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExplosionEffect;
